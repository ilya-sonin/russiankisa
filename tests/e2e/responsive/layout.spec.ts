import { test, expect, type Page } from '@playwright/test'

const tolerance = 3
const viewports = [
  { width: 320, height: 760 },
  { width: 360, height: 800 },
  { width: 390, height: 844 },
  { width: 550, height: 900 },
  { width: 699, height: 1000 },
  { width: 700, height: 1000 },
  { width: 768, height: 1024 },
  { width: 899, height: 1100 },
  { width: 900, height: 1100 },
  { width: 1024, height: 900 },
  { width: 1099, height: 900 },
  { width: 1100, height: 900 },
  { width: 1280, height: 832 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 844, height: 390 },
]

async function openSite(page: Page) {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.evaluate(async () => { await document.fonts.ready })
  expect(await page.evaluate(() => document.fonts.check('16px Oranienbaum', 'ПОРТФОЛИО')), 'The local Russian typeface loads').toBe(true)
  expect(await page.evaluate(() => document.fonts.check('16px "Disruptors Script"', 'Творческое')), 'The decorative typeface loads').toBe(true)
  await expect(page.locator('.hero__main-title')).toBeVisible()
}

test.describe('Responsive text layout', () => {
  test.use({ reducedMotion: 'reduce' })

  for (const viewport of viewports) {
    test(`text fits its layout at ${viewport.width}×${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport)
      await openSite(page)

      const issues = await page.evaluate(({ tolerance }) => {
        const issues: string[] = []
        // Element boxes alone miss overflowing unbroken words and overlapping glyphs.
        // Measure each rendered text fragment, including text separated by <br>.
        const textRects = (element: Element): DOMRect[] => {
          const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
          const rects: DOMRect[] = []
          while (walker.nextNode()) {
            if (!walker.currentNode.textContent?.trim()) continue
            const range = document.createRange()
            range.selectNodeContents(walker.currentNode)
            rects.push(...Array.from(range.getClientRects()).filter(rect => rect.width > 0 && rect.height > 0))
          }
          return rects
        }
        const inside = (rect: DOMRect, container: DOMRect, label: string) => {
          if (rect.left < container.left - tolerance || rect.right > container.right + tolerance
            || rect.top < container.top - tolerance || rect.bottom > container.bottom + tolerance) {
            issues.push(`${label}: text [${rect.left.toFixed(1)}, ${rect.top.toFixed(1)}, ${rect.right.toFixed(1)}, ${rect.bottom.toFixed(1)}] escapes [${container.left.toFixed(1)}, ${container.top.toFixed(1)}, ${container.right.toFixed(1)}, ${container.bottom.toFixed(1)}]`)
          }
        }
        const checkTextInside = (text: Element, container: Element, label: string) => {
          const bounds = container.getBoundingClientRect()
          for (const rect of textRects(text)) inside(rect, bounds, label)
        }
        const checkSeparateText = (first: Element, second: Element, label: string) => {
          for (const a of textRects(first)) {
            for (const b of textRects(second)) {
              const overlapX = Math.min(a.right, b.right) - Math.max(a.left, b.left)
              const overlapY = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top)
              if (overlapX > tolerance && overlapY > tolerance) {
                issues.push(`${label}: heading and description overlap by ${overlapX.toFixed(1)}×${overlapY.toFixed(1)} px`)
              }
            }
          }
        }

        if (document.documentElement.scrollWidth > window.innerWidth + tolerance) {
          issues.push(`Page has ${document.documentElement.scrollWidth - window.innerWidth} px horizontal overflow`)
        }

        const heroTitle = document.querySelector('.hero__main-title')!
        const heroCopy = document.querySelector('.hero__copy')!
        checkTextInside(heroTitle, heroCopy, 'Hero title')
        for (const rect of textRects(heroTitle)) {
          if (rect.left < -tolerance || rect.right > window.innerWidth + tolerance
            || rect.top < -tolerance || rect.bottom > window.innerHeight + tolerance) {
            issues.push(`Hero title escapes initial viewport: [${rect.left.toFixed(1)}, ${rect.top.toFixed(1)}, ${rect.right.toFixed(1)}, ${rect.bottom.toFixed(1)}]`)
          }
        }

        for (const [index, card] of Array.from(document.querySelectorAll('.services__item')).entries()) {
          const heading = card.querySelector('.services__item-title')!
          const description = card.querySelector('.services__item-description')!
          checkTextInside(heading, card, `Service ${index + 1} heading`)
          checkTextInside(description, card, `Service ${index + 1} description`)
          checkSeparateText(heading, description, `Service ${index + 1}`)
        }

        for (const [index, card] of Array.from(document.querySelectorAll('.workflow__step')).entries()) {
          const heading = card.querySelector('.workflow__step-title')!
          const description = card.querySelector('.workflow__step-description')!
          checkTextInside(heading, card, `Workflow ${index + 1} heading`)
          checkTextInside(description, card, `Workflow ${index + 1} description`)
          checkSeparateText(heading, description, `Workflow ${index + 1}`)
        }

        for (const tool of document.querySelectorAll('.about__tool')) {
          const name = tool.querySelector('.about__tool-name')!
          checkTextInside(name, tool, `Tool ${name.textContent?.trim()}`)
        }

        // A vertical heading legitimately has a wider scrollWidth than clientWidth.
        // Check horizontal section headings using actual text fragments instead.
        for (const heading of document.querySelectorAll('section h2')) {
          if (!getComputedStyle(heading).writingMode.startsWith('horizontal')) continue
          for (const rect of textRects(heading)) {
            if (rect.left < -tolerance || rect.right > window.innerWidth + tolerance) {
              issues.push(`Section heading “${heading.textContent?.trim()}” escapes horizontal viewport`)
            }
          }
        }
        return issues
      }, { tolerance })

      expect(issues, `Layout issues at ${viewport.width}×${viewport.height}`).toEqual([])
    })
  }
})

test.describe('Landscape mobile navigation', () => {
  test.use({ viewport: { width: 844, height: 390 }, reducedMotion: 'reduce' })

  test('scrolls to the last link and unlocks the page after navigation', async ({ page }) => {
    await openSite(page)
    const button = page.getByRole('button', { name: /меню/ })
    await button.click()
    const nav = page.getByRole('navigation', { name: 'Мобильная навигация' })
    await expect(nav).toBeVisible()
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    await nav.evaluate(element => { element.scrollTop = element.scrollHeight })
    expect(await nav.evaluate(element => element.scrollTop), 'Short landscape menu must scroll').toBeGreaterThan(0)

    const contactLink = nav.locator('a[href="#contacts"]')
    await expect(contactLink).toBeInViewport()
    await contactLink.click()
    await expect(page).toHaveURL(/#contacts$/)
    await expect(nav).toHaveCount(0)
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe('hidden')
    expect(await page.evaluate(() => getComputedStyle(document.body).overflow)).not.toBe('hidden')
    await expect(page.locator('#contacts')).toBeInViewport()

    // Fragment navigation can finish after URL/menu updates, especially under load.
    // Wait for the anchor to reach its declared header offset before sending a wheel event.
    await expect.poll(() => page.locator('#contacts').evaluate(element => {
      const expectedTop = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)
      return Math.abs(element.getBoundingClientRect().top - expectedTop)
    }), { message: 'The contact anchor reaches its position below the header' }).toBeLessThan(2)

    const position = await page.evaluate(() => window.scrollY)
    await page.mouse.move(400, 300)
    await page.mouse.wheel(0, -160)
    await expect.poll(() => page.evaluate(() => window.scrollY), { message: 'The page scrolls after closing the menu' }).toBeLessThan(position)
  })

  test('Escape closes the menu and restores focus to its button', async ({ page }) => {
    await openSite(page)
    const button = page.getByRole('button', { name: /меню/ })
    await button.click()
    const nav = page.getByRole('navigation', { name: 'Мобильная навигация' })
    await expect(nav.locator('a').first()).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(nav).toHaveCount(0)
    await expect(button).toBeFocused()
    await expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('the logo closes the open menu and unlocks scrolling', async ({ page }) => {
    await openSite(page)
    const button = page.getByRole('button', { name: /меню/ })
    await button.click()
    const logo = page.getByRole('link', { name: 'В начало страницы' })
    await logo.click()
    await expect(page.getByRole('navigation', { name: 'Мобильная навигация' })).toHaveCount(0)
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await expect(logo).toBeFocused()
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe('hidden')
  })

  test('resizing to desktop closes the menu and retains a visible focus target', async ({ page }) => {
    await openSite(page)
    const button = page.getByRole('button', { name: /меню/ })
    await button.click()
    await page.setViewportSize({ width: 1024, height: 768 })
    await expect(page.getByRole('navigation', { name: 'Мобильная навигация' })).toHaveCount(0)
    await expect(button).toBeHidden()
    await expect(page.getByRole('link', { name: 'В начало страницы' })).toBeFocused()
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe('hidden')
  })

  test('Tab and Shift+Tab keep focus inside the open menu', async ({ page }) => {
    await openSite(page)
    const button = page.getByRole('button', { name: /меню/ })
    await button.click()
    const nav = page.getByRole('navigation', { name: 'Мобильная навигация' })
    const links = nav.locator('a')
    await expect(links.first()).toBeFocused()
    await page.keyboard.press('Shift+Tab')
    await expect(button).toBeFocused()
    await page.keyboard.press('Shift+Tab')
    await expect(links.last()).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(button).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(links.first()).toBeFocused()

    for (let index = 0; index < await links.count() + 2; index++) {
      await page.keyboard.press('Tab')
      expect(await page.evaluate(() => {
        const focused = document.activeElement
        return focused?.matches('.site-header__menu-button') || !!focused?.closest('#mobile-navigation')
      }), 'Keyboard focus must stay with the open navigation').toBe(true)
    }
  })
})

test('prerendered sections and headings remain readable without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({
    baseURL,
    javaScriptEnabled: false,
    reducedMotion: 'no-preference',
  })
  try {
    const page = await context.newPage()
    for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 900 }]) {
      await page.setViewportSize(viewport)
      await openSite(page)
      const sections = page.locator('section[data-testid]')
      expect(await sections.count()).toBeGreaterThanOrEqual(6)
      const hidden = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('section[data-testid], [data-trig], section h1, section h2'))
          .filter(element => element.getClientRects().length > 0)
          .filter(element => {
            const style = getComputedStyle(element)
            return style.visibility !== 'visible' || Number(style.opacity) !== 1
          })
          .map(element => `${element.tagName.toLowerCase()}.${element.className}`)
      })
      expect(hidden, `Hidden static content without JavaScript at ${viewport.width}px`).toEqual([])
      for (const heading of await page.locator('section h1, section h2').all()) {
        await expect(heading).toBeVisible()
        expect(await heading.evaluate(element => parseFloat(getComputedStyle(element).fontSize))).toBeGreaterThanOrEqual(18)
      }
    }
  }
  finally {
    await context.close()
  }
})
