import { test, expect, type Page } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Helper: locate the form input that follows a <label class="label"> with the given text.
 * Admin components render <label> + <input>/<textarea>/<select> without a `for` attribute,
 * so Playwright's getByLabel doesn't work. We use the adjacent-sibling pattern instead.
 */
export function fieldByLabel(page: Page, labelText: string | RegExp) {
  const sel = `label.label:has-text("${typeof labelText === 'string' ? labelText : labelText.source}") + :is(input, textarea, select)`
  return page.locator(sel).first()
}

/**
 * Sidebar buttons are labelled like "Header (логотип + навигация)", "Hero (главный экран)".
 * Pass a substring (case-insensitive) — we anchor with `i` flag and use a substring match.
 */
export async function openSidebarSection(page: Page, name: string | RegExp) {
  const re = typeof name === 'string' ? new RegExp(name, 'i') : name
  await page.locator('aside.admin__sidebar').getByRole('button', { name: re }).click()
}

export async function clickSave(page: Page) {
  await page.getByRole('button', { name: /^Сохранить$/ }).click()
  await expect(page.locator('.status.status--ok')).toContainText('✓ Сохранено', { timeout: 10_000 })
}