import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Single portfolio case — pick the first case from the listing and assert its DOM
 * structure. Cases are not separate routes, they're in-page sections inside #portfolio.
 */
test.describe('Portfolio case (single)', () => {
  test('first case shows label, description and at least one image', async ({ page, viewport }) => {
    await page.goto('/#portfolio')

    const firstCase = page.locator('[data-testid^="case-"]').first()
    await firstCase.scrollIntoViewIfNeeded()
    await expect(firstCase).toBeVisible()

    // "Кейс N" label
    await expect(firstCase.locator('.case-label__text')).toHaveText('Кейс')
    await expect(firstCase.locator('.case-label__number')).toContainText(/\d+/)

    // Description paragraph
    await expect(firstCase.locator('.portfolio-case-layout__description')).toContainText(/\S+/)

    // At least one image inside the case content area.
    const contentImages = firstCase.locator('.portfolio-case-layout__content img')
    await expect(contentImages.first()).toBeVisible()

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `case-${label}`)
  })

  test('case-image natural width is positive (no broken <img>)', async ({ page }) => {
    await page.goto('/#portfolio')

    const firstCase = page.locator('[data-testid^="case-"]').first()
    const img = firstCase.locator('.portfolio-case-layout__content img').first()
    await expect(img).toBeVisible()

    // naturalWidth > 0 ⇒ the browser successfully decoded the image.
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
    expect(naturalWidth).toBeGreaterThan(0)
  })
})