import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Portfolio — public listing of the 12 real portfolio cases.
 * Each case uses data-testid="case-{id}".
 */
test.describe('Portfolio', () => {
  test('renders all 12 public cases', async ({ page, viewport }) => {
    await page.goto('/#portfolio')
    const portfolio = page.getByTestId('section-portfolio')
    await expect(portfolio).toBeVisible()

    const cases = portfolio.locator('[data-testid^="case-"]')
    await expect(cases).toHaveCount(12)

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `portfolio-${label}`, true)
  })

  test('each case has a label "Кейс N" and a description', async ({ page }) => {
    await page.goto('/#portfolio')

    // Grab the first case and verify its internal structure.
    const firstCase = page.locator('[data-testid^="case-"]').first()
    await expect(firstCase).toBeVisible()

    await expect(firstCase.locator('.case-label__text')).toHaveText('Кейс')
    await expect(firstCase.locator('.case-label__number')).toContainText(/\d+/)
    await expect(firstCase.locator('.portfolio-case-layout__description')).toContainText(/\S+/)
  })

  test('test-* cases are excluded from the public listing', async ({ page }) => {
    await page.goto('/#portfolio')

    const testCases = [
      '[data-testid="case-test-mobile-app-fintech"]',
      '[data-testid="case-test-ecommerce-redesign"]',
      '[data-testid="case-test-brand-guidelines"]',
    ]
    for (const sel of testCases) {
      await expect(page.locator(sel)).toHaveCount(0)
    }
  })
})
