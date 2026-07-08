import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * About — intro text, title "КТО Я", photo, 7 tools, outro.
 */
test.describe('About', () => {
  test('renders intro, title, photo, all 7 tools, outro', async ({ page, viewport }) => {
    await page.goto('/#about')
    const about = page.getByTestId('section-about')
    await expect(about).toBeVisible()

    // h2 with "КТО" + decorative accent "Я".
    const title = about.getByRole('heading', { level: 2 })
    await expect(title).toContainText('КТО')
    await expect(title.locator('span.decorative-text')).toContainText('Я')

    // Intro paragraph is rendered.
    const intro = about.locator('.about__intro-text').first()
    await expect(intro).toContainText('Екатерина')

    // Photo is rendered with a non-empty alt.
    const photo = about.locator('.about__photo-img')
    await expect(photo).toBeVisible()
    await expect(photo).toHaveAttribute('alt', /\S+/)

    // 7 tool items per content/about.md.
    const tools = about.locator('ul.about__tools-grid > li.about__tool')
    await expect(tools).toHaveCount(7)

    // At least one known tool name (data-driven check via text).
    await expect(tools.first()).toContainText(/Figma|Tilda|Slides|PicsArt|Office|Recraft|Midjourney/i)

    // Outro text exists.
    await expect(about.locator('.about__outro-text')).toContainText(/\S+/)

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `about-${label}`)
  })

  test('decorative texts are shown', async ({ page }) => {
    await page.goto('/#about')
    const about = page.getByTestId('section-about')
    // Two decorative-text paragraphs (print + digital).
    const decoratives = about.locator('.about__decorative-text')
    await expect(decoratives).toHaveCount(2)
  })
})