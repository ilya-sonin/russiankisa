import { test, expect } from '@playwright/test'
import { shot } from '../utils/visual'

/**
 * Login flow: anonymous → /admin/login → submit password → /admin.
 *
 * This spec runs WITHOUT the admin storage state so we can verify
 * the redirect + rejection paths cleanly.
 */
test.describe('Admin login', () => {
  test.use({ storageState: { cookies: [], origins: [] } })

  test('wrong password shows error and stays on /admin/login', async ({ page }) => {
    await page.goto('/admin/login')

    await expect(page.getByRole('heading', { name: /Админка RussianKisa/i })).toBeVisible()

    await page.getByPlaceholder('Пароль').fill('wrong-password')
    await page.getByRole('button', { name: /Войти/ }).click()

    await expect(page).toHaveURL(/\/admin\/login/)
    await expect(page.getByText(/Неверный пароль/)).toBeVisible()
  })

  test('correct password redirects to /admin and stores admin-token cookie', async ({ page }) => {
    await page.goto('/admin/login')
    await page.getByPlaceholder('Пароль').fill(process.env.ADMIN_PASSWORD ?? 'admin')
    await page.getByRole('button', { name: /Войти/ }).click()

    await page.waitForURL((url) => url.pathname.startsWith('/admin'), { timeout: 10_000 })
    // The sidebar heading is <h2>RussianKisa Admin</h2>.
    await expect(page.getByRole('heading', { name: /RussianKisa Admin/i })).toBeVisible()

    const cookies = await page.context().cookies('http://localhost:3100/')
    const adminCookie = cookies.find((c) => c.name === 'admin-token')
    expect(adminCookie, 'admin-token cookie should be set after login').toBeDefined()

    await shot(page, 'admin-after-login')
  })

  test('logout clears the admin-token cookie and redirects to login', async ({ page }) => {
    await page.goto('/admin/login')
    await page.getByPlaceholder('Пароль').fill(process.env.ADMIN_PASSWORD ?? 'admin')
    await page.getByRole('button', { name: /Войти/ }).click()
    await page.waitForURL((url) => url.pathname.startsWith('/admin'))

    // Sidebar logout button.
    await page.locator('aside.admin__sidebar').getByRole('button', { name: 'Выйти' }).click()
    await page.waitForURL(/\/admin\/login/)

    const cookies = await page.context().cookies('http://localhost:3100/')
    const adminCookie = cookies.find((c) => c.name === 'admin-token')
    expect(!adminCookie || adminCookie.value === '').toBeTruthy()
  })

  test('unauthenticated visit to /admin redirects to /admin/login', async ({ page }) => {
    await page.goto('/admin')
    await expect(page).toHaveURL(/\/admin\/login.*redirect=/)
  })
})
