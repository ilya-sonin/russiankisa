import type { Page } from '@playwright/test'

/**
 * Capture a section-only screenshot scrolled into view.
 * Used as a baseline visual reference per (section × viewport).
 */
export async function shot(page: Page, name: string, fullPage = false): Promise<void> {
  await page.screenshot({
    path: `tests/e2e/screenshots/${name}.png`,
    fullPage,
  })
}

/**
 * Scroll the page so a testid section is comfortably in viewport.
 * We use scrollIntoViewIfNeeded instead of a fixed offset because each section's
 * height differs by viewport (workflow has 8 steps stacked, hero is full-screen, etc.).
 */
export async function scrollIntoView(page: Page, testId: string): Promise<void> {
  const el = page.getByTestId(testId)
  await el.scrollIntoViewIfNeeded()
}