import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Hero — h1 + decorative title + CTA → #portfolio.
 */
test.describe('Hero', () => {
  test('shows h1 with both title parts and CTA button', async ({ page, viewport }) => {
    await page.goto('/')
    const hero = page.getByTestId('section-hero')
    await expect(hero).toBeVisible()

    // h1 contains the main "ПОРТФОЛИО" text and a decorative span with "Творческое".
    const h1 = hero.getByRole('heading', { level: 1 })
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('ПОРТФОЛИО')
    await expect(h1.locator('span.decorative-text')).toContainText('Творческое')

    // CTA link points to #portfolio and reads "СМОТРЕТЬ РАБОТЫ".
    const cta = hero.getByRole('link', { name: /СМОТРЕТЬ РАБОТЫ/i })
    await expect(cta).toBeVisible()
    await expect(cta).toHaveAttribute('href', '#portfolio')

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `hero-${label}`)
  })

  test('CTA click scrolls to portfolio', async ({ page }) => {
    await page.goto('/')
    const cta = page.getByTestId('section-hero').getByRole('link', { name: /СМОТРЕТЬ РАБОТЫ/i })
    await cta.click()
    await expect(page).toHaveURL(/#portfolio$/)
    await expect(page.getByTestId('section-portfolio')).toBeInViewport()
  })
})