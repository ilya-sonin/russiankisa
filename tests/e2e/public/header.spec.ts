import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Header — logo + nav links (desktop) / hamburger menu (mobile).
 *
 * On mobile the desktop nav links are visually hidden via `tablet:hidden` even though
 * they exist in the DOM. The hamburger button opens a slide-down panel with the same
 * anchors. The "nav anchor jumps to the section" test therefore clicks the hamburger
 * on mobile before clicking the anchor.
 */
test.describe('Header', () => {
  test('renders logo and navigation', async ({ page, viewport }) => {
    await page.goto('/')
    const header = page.getByTestId('section-header')
    await expect(header).toBeVisible()

    await expect(header.locator('img').first()).toBeVisible()

    // All four nav anchors exist in the DOM (content/header.md).
    const anchors = ['#about', '#workflow', '#services', '#contacts']
    for (const href of anchors) {
      await expect(page.locator(`a[href="${href}"]`).first()).toHaveAttribute('href', href)
    }

    const label = viewport!.width! >= 768 ? 'desktop' : 'mobile'
    await shot(page, `header-${label}`)
  })

  test('hamburger menu opens on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'mobile-only check')
    await page.goto('/')

    const header = page.getByTestId('section-header')
    // Hamburger is the only <button> in the header on mobile.
    const hamburger = header.getByRole('button')
    await hamburger.click()

    // On mobile the desktop nav is hidden — the slide-down panel contains the visible anchors.
    await expect(page.locator('a[href="#about"]:visible').first()).toBeVisible()
    await expect(page.locator('a[href="#services"]:visible').first()).toBeVisible()

    await shot(page, 'header-mobile-menu-open')
  })

  test('nav anchor jumps to the section', async ({ page, isMobile }) => {
    await page.goto('/')
    if (isMobile) {
      await page.getByTestId('section-header').getByRole('button').click()
    }
    await page.locator('a[href="#about"]:visible').first().click()
    await expect(page).toHaveURL(/#about$/)
    await expect(page.getByTestId('section-about')).toBeInViewport()
  })
})
