import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Contact — 3 QR codes + Steve Jobs quote.
 */
test.describe('Contact', () => {
  test('renders quote, author and 3 social QR codes', async ({ page, viewport }) => {
    await page.goto('/#contacts')
    const contact = page.getByTestId('section-contact')
    await expect(contact).toBeVisible()

    // h2 with "СВЯЗЬ СО" + accent "МНОЙ".
    const title = contact.getByRole('heading', { level: 2 })
    await expect(title).toContainText('СВЯЗЬ СО')
    await expect(contact.locator('.contact-section__title-accent')).toContainText('МНОЙ')

    // Quote and author.
    const quote = contact.locator('.contact-section__quote')
    await expect(quote).toContainText(/\S+/)
    await expect(contact.locator('.contact-section__quote-author')).toContainText('Стив Джобс')

    // Exactly 3 social QR anchors.
    const socials = contact.locator('a.contact-section__qr-item')
    await expect(socials).toHaveCount(3)

    // Each social has a QR image and a label.
    const firstSocial = socials.first()
    await expect(firstSocial.locator('img.contact-section__qr-image')).toBeVisible()
    await expect(firstSocial.locator('.contact-section__qr-label')).toContainText(/\S+/)

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `contact-${label}`)
  })

  test('social links open in a new tab with rel=noopener', async ({ page }) => {
    await page.goto('/#contacts')
    const firstSocial = page.getByTestId('section-contact').locator('a.contact-section__qr-item').first()
    await expect(firstSocial).toHaveAttribute('target', '_blank')
    await expect(firstSocial).toHaveAttribute('rel', /noopener/)
  })
})