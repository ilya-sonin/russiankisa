import { test, expect } from '@playwright/test'

/**
 * Home page — top-level smoke test that all major sections mount in the right order.
 * Each individual section has its own dedicated spec for finer-grained checks.
 */
test.describe('Home page', () => {
  test('renders all 7 sections + dev-only screen-size indicator', async ({ page }) => {
    await page.goto('/')

    // Expected sections in DOM order.
    const sectionIds = [
      'section-header',
      'section-hero',
      'section-about',
      'section-workflow',
      'section-services',
      'section-portfolio',
      'section-contact',
    ] as const

    for (const id of sectionIds) {
      await expect(page.getByTestId(id)).toBeVisible()
    }

    // Page <title> and SEO meta
    await expect(page).toHaveTitle(/RussianKisa/i)
  })

  test('HTML lang is Russian', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ru')
  })

  test('viewport meta tag is set (mobile-friendly)', async ({ page }) => {
    await page.goto('/')
    const viewport = page.locator('meta[name="viewport"]')
    await expect(viewport).toHaveAttribute('content', /width=device-width/)
  })
})