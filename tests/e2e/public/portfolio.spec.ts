import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Portfolio — list of all 15 cases (12 original + 3 test-*).
 * Each case uses data-testid="case-{id}".
 */
test.describe('Portfolio', () => {
  test('renders all 15 cases', async ({ page, viewport }) => {
    await page.goto('/#portfolio')
    const portfolio = page.getByTestId('section-portfolio')
    await expect(portfolio).toBeVisible()

    // Total = 15 (12 original + 3 test-*) per the project's test-content plan.
    const cases = portfolio.locator('[data-testid^="case-"]')
    await expect(cases).toHaveCount(15)

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

  test('test-* cases are included in the listing', async ({ page }) => {
    await page.goto('/#portfolio')

    // 3 test-* slugs were seeded via admin for QA.
    const testCases = [
      '[data-testid="case-test-mobile-app-fintech"]',
      '[data-testid="case-test-ecommerce-redesign"]',
      '[data-testid="case-test-brand-guidelines"]',
    ]
    for (const sel of testCases) {
      await expect(page.locator(sel)).toBeVisible()
    }
  })
})