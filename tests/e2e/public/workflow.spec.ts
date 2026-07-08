import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Workflow — 8 steps + path SVG + decorative title.
 */
test.describe('Workflow', () => {
  test('renders decorative title + 8 steps', async ({ page, viewport }) => {
    await page.goto('/#workflow')
    const workflow = page.getByTestId('section-workflow')
    await expect(workflow).toBeVisible()

    // h2 main + decorative accent.
    const title = workflow.getByRole('heading', { level: 2 })
    await expect(title).toContainText('ЭТАПЫ')
    const accent = workflow.locator('.workflow__title-accent')
    await expect(accent).toContainText('РАБОТЫ')

    // 8 ordered step list items.
    const steps = workflow.locator('ol.workflow__steps > li.workflow__step')
    await expect(steps).toHaveCount(8)

    // Each step has a marker dot + title heading + description paragraph.
    const firstStep = steps.first()
    await expect(firstStep.locator('.workflow__marker')).toBeVisible()
    await expect(firstStep.getByRole('heading', { level: 3 })).toContainText(/ЗНАКОМСТВО/)
    await expect(firstStep.locator('.workflow__step-description')).toContainText(/\S+/)

    // Path SVG is rendered (picture > img).
    const pathSvg = workflow.locator('picture.workflow__path img')
    await expect(pathSvg).toBeVisible()
    await expect(pathSvg).toHaveAttribute('src', /workflow-path-(desktop|tablet|mobile)\.svg$/)

    const label = viewport!.width! >= 1024 ? 'desktop' : viewport!.width! >= 768 ? 'tablet' : 'mobile'
    await shot(page, `workflow-${label}`)
  })
})