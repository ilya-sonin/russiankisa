import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Services — title + 5 service items.
 */
test.describe('Services', () => {
  test('renders title + 5 services', async ({ page, viewport }) => {
    await page.goto('/#services')
    const services = page.getByTestId('section-services')
    await expect(services).toBeVisible()

    const title = services.getByRole('heading', { level: 2 })
    await expect(title).toContainText('СПЕКТР')
    await expect(services.locator('.services__title-accent')).toContainText('УСЛУГ')

    const items = services.locator('ul.services__list > li.services__item')
    await expect(items).toHaveCount(5)

    // First service: ВЕБ-ДИЗАЙН
    await expect(items.first().getByRole('heading', { level: 3 })).toContainText(/ВЕБ-ДИЗАЙН/)
    await expect(items.first().locator('.services__item-description')).toContainText(/\S+/)

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `services-${label}`)
  })

  test('star icon renders on each service card', async ({ page }) => {
    await page.goto('/#services')
    const items = page.getByTestId('section-services').locator('li.services__item')
    // 5 service items × 1 star icon each.
    await expect(page.getByTestId('section-services').locator('.services__star')).toHaveCount(5)
    // items count guard (no need to assert again, but kept for sanity)
    await expect(items).toHaveCount(5)
  })
})