import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'
import { fieldByLabel, openSidebarSection, clickSave } from '../utils/admin'

/**
 * Admin sections editor — sidebar lists 6 sections + Portfolio; each section
 * renders a form with its own fields; saving shows the green ✓ Сохранено status.
 *
 * Admin form fields are structured as <label class="label"> + <input/textarea/select>
 * without a `for` attribute, so we use fieldByLabel (label + adjacent sibling).
 */
test.describe('Admin sections editor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin')
    await expect(page.locator('h2', { hasText: 'RussianKisa Admin' })).toBeVisible()
  })

  test('sidebar lists 6 sections + portfolio link', async ({ page }) => {
    const sidebar = page.locator('aside.admin__sidebar')

    const expected = [/Header/i, /Hero/i, /About/i, /Workflow/i, /Services/i, /Contact/i, /Портфолио/i]
    for (const re of expected) {
      await expect(sidebar.getByText(re)).toBeVisible()
    }
  })

  test('Hero form: has all expected fields, save shows ✓ Сохранено', async ({ page }) => {
    await openSidebarSection(page, 'Hero')
    await expect(page.locator('h1', { hasText: 'Hero (главный экран)' })).toBeVisible()

    await expect(fieldByLabel(page, 'Декоративный текст \(красный, сверху\)')).toBeVisible()
    await expect(fieldByLabel(page, 'Заголовок \(основной\)')).toBeVisible()
    await expect(fieldByLabel(page, 'Текст кнопки CTA')).toBeVisible()
    await expect(fieldByLabel(page, 'Якорь кнопки')).toBeVisible()

    await shot(page, 'admin-hero-form')

    await clickSave(page)
  })

  test('About form: has intro + title + photo asset + outro', async ({ page }) => {
    await openSidebarSection(page, 'About')
    await expect(page.locator('h1', { hasText: 'About (обо мне)' })).toBeVisible()

    await expect(fieldByLabel(page, 'Приветствие \(вступление\)')).toBeVisible()
    await expect(fieldByLabel(page, 'Акцент в приветствии \(красный\)')).toBeVisible()
    await expect(fieldByLabel(page, 'Заголовок')).toBeVisible()
    await expect(fieldByLabel(page, 'Акцент заголовка')).toBeVisible()
    await expect(fieldByLabel(page, 'Заключительный текст')).toBeVisible()

    // 7 tool "Название" placeholder inputs.
    await expect(page.getByPlaceholder('Название')).toHaveCount(7)

    await shot(page, 'admin-about-form')

    await clickSave(page)
  })

  test('Workflow form: 8 step rows + add button', async ({ page }) => {
    await openSidebarSection(page, 'Workflow')
    await expect(page.locator('h1', { hasText: 'Workflow' })).toBeVisible()

    await expect(page.getByPlaceholder('id (slug)')).toHaveCount(8)
    await expect(page.getByRole('button', { name: /Добавить этап/ })).toBeVisible()

    await shot(page, 'admin-workflow-form')
    await clickSave(page)
  })

  test('Services form: 5 service rows', async ({ page }) => {
    await openSidebarSection(page, 'Services')
    await expect(page.locator('h1', { hasText: 'Services' })).toBeVisible()

    await expect(page.getByPlaceholder('id (slug)')).toHaveCount(5)

    await shot(page, 'admin-services-form')
    await clickSave(page)
  })

  test('Contact form: 3 social rows + quote textarea', async ({ page }) => {
    await openSidebarSection(page, 'Contact')
    await expect(page.locator('h1', { hasText: 'Contact' })).toBeVisible()

    await expect(fieldByLabel(page, 'Цитата')).toBeVisible()
    await expect(fieldByLabel(page, 'Автор цитаты')).toHaveValue('Стив Джобс')

    // 3 social rows: each has an id input with that placeholder.
    await expect(page.getByPlaceholder('id (vk, telegram, instagram)')).toHaveCount(3)

    await shot(page, 'admin-contact-form')
    await clickSave(page)
  })

  test('Header form: 4 nav items + logo asset inputs', async ({ page }) => {
    await openSidebarSection(page, 'Header')
    await expect(page.locator('h1', { hasText: 'Header' })).toBeVisible()

    await expect(page.getByPlaceholder('#anchor')).toHaveCount(4)
    // Two logo asset inputs labelled "с котом" / "без кота".
    await expect(page.getByText(/«с котом»/)).toBeVisible()
    await expect(page.getByText(/«без кота»/)).toBeVisible()

    await shot(page, 'admin-header-form')
    await clickSave(page)
  })

  test('editing intro text persists after save and reload', async ({ page }) => {
    await openSidebarSection(page, 'About')

    const intro = fieldByLabel(page, 'Приветствие \(вступление\)')
    const original = await intro.inputValue()
    const stamp = ` [e2e ${Date.now()}]`
    await intro.fill(original + stamp)

    await clickSave(page)

    await page.reload()
    await openSidebarSection(page, 'About')
    await expect(fieldByLabel(page, 'Приветствие \(вступление\)')).toHaveValue(original + stamp)

    // Restore so other runs see stable content.
    await fieldByLabel(page, 'Приветствие \(вступление\)').fill(original)
    await clickSave(page)
  })
})
