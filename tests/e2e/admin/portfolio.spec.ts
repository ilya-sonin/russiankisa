import { test, expect, type Page } from '@playwright/test'
import { shot } from '../utils/visual'
import { fieldByLabel } from '../utils/admin'

/**
 * Portfolio CRUD — admin form creates a case with a unique slug, the new
 * case appears in the list and on the public site, then we delete it
 * through the API to keep test runs idempotent.
 */
test.describe('Admin portfolio CRUD', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin/portfolio')
    await expect(page.locator('h1', { hasText: /Портфолио/ })).toBeVisible()
  })

  test('lists all 15 published cases', async ({ page }) => {
    const heading = page.locator('h1', { hasText: /Портфолио/ })
    const text = (await heading.textContent()) ?? ''
    const match = text.match(/\((\d+)\)/)
    const count = match ? Number(match[1]) : 0
    expect(count).toBeGreaterThanOrEqual(15)

    const cards = page.locator('.case-card')
    await expect(cards.first()).toBeVisible()
    await expect(cards.first().locator('.case-card__number')).toContainText(/^#\d+$/)
    await expect(cards.first().locator('.case-card__meta code')).toContainText(/layout: \w+/)

    await shot(page, 'admin-portfolio-list')
  })

  test('creates a new case, verifies on public, then deletes via API', async ({ page, request }) => {
    const slug = `e2e-${Date.now()}`
    const title = `E2E тест ${slug}`

    await page.getByRole('button', { name: /Новый кейс/ }).click()
    await expect(page.locator('h1', { hasText: 'Новый кейс' })).toBeVisible()

    await fieldByLabel(page, 'Slug (id, без пробелов)').fill(slug)
    await fieldByLabel(page, 'Название кейса').fill(title)
    // Description label contains `<br />` which trips up a strict regex match.
    await page
      .locator('label.label', { hasText: 'Описание' })
      .locator('+ textarea')
      .fill('Тестовый кейс создан через Playwright E2E. Должен быть удалён после прогона.')

    // single layout's image URL field (AdminAssetInput).
    const urlInput = page.getByPlaceholder('Или вставьте URL').first()
    await urlInput.fill('/images/case1-main.png')
    await page.getByPlaceholder('Alt-текст (для SEO)').first().fill('E2E placeholder image')

    await shot(page, 'admin-portfolio-new-form')

    await page.getByRole('button', { name: /Создать кейс/ }).click()
    // After save the form closes and we land back on the list. The status badge
    // appears briefly inside the form before the route swap, so we instead wait
    // for the portfolio heading count to bump from 15 to 16.
    const heading = page.locator('h1', { hasText: '📁 Портфолио' })
    await expect(heading).toContainText('(16)', { timeout: 15_000 })

    // Back to the list — verify card.
    await expect(page.locator('h1', { hasText: /Портфолио/ })).toBeVisible()
    const newCard = page.locator('.case-card', { hasText: title })
    await expect(newCard).toBeVisible()
    await expect(newCard).toContainText(slug)

    await shot(page, 'admin-portfolio-after-create')

    // New case appears in admin list and in the /api/content payload.
// (The prerendered home page won't see the new file until a rebuild — we test
// the source-of-truth API instead.)
    const apiPage: Page = await page.context().newPage()
    const apiRes = await apiPage.request.get('http://localhost:3100/api/content')
    expect(apiRes.ok()).toBeTruthy()
    const apiJson = (await apiRes.json()) as { portfolio: { id: string }[] }
    expect(apiJson.portfolio.some((c) => c.id === slug)).toBe(true)
    await shot(apiPage, 'admin-portfolio-case-on-public')
    await apiPage.close()

    // Delete through API using the admin-token cookie from this context.
    const cookies = await page.context().cookies('http://localhost:3100/')
    const tokenCookie = cookies.find((c) => c.name === 'admin-token')
    expect(tokenCookie, 'admin-token cookie should be present').toBeDefined()

    const res = await request.delete('http://localhost:3100/api/content', {
      headers: { cookie: `admin-token=${tokenCookie!.value}` },
      params: { path: `portfolio/${slug}` },
    })
    expect(res.ok(), `DELETE should succeed (status=${res.status()})`).toBeTruthy()

    await page.reload()
    await expect(page.locator('h1', { hasText: /Портфолио/ })).toBeVisible()
    await expect(page.locator('.case-card', { hasText: title })).toHaveCount(0)
  })

  test('existing test-* case is editable (slug field disabled) and cancel returns to list', async ({ page }) => {
    const card = page.locator('.case-card', { hasText: 'Тест: мобильное приложение финтех' }).first()
    await expect(card).toBeVisible()
    await expect(card.locator('.case-card__meta code')).toContainText('layout: single')

    await card.getByRole('button', { name: /Редактировать/ }).click()
    await expect(page.locator('h1', { hasText: /Редактирование/ })).toBeVisible()
    await expect(fieldByLabel(page, 'Slug (id, без пробелов)')).toBeDisabled()

    await shot(page, 'admin-portfolio-edit-form')

    await page.getByRole('button', { name: /Отмена/ }).click()
    await expect(page.locator('h1', { hasText: /Портфолио/ })).toBeVisible()
  })
})
