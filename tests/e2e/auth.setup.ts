import { test as setup, expect } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'

/**
 * Auth setup for admin-* projects.
 * Logs in with the default password (ADMIN_PASSWORD env or "admin") and writes the
 * browser storage state (cookies + localStorage) to tests/e2e/.auth/admin.json
 * so subsequent admin tests can skip the login form.
 */
const ADMIN_FILE = 'tests/e2e/.auth/admin.json'

setup('authenticate as admin', async ({ page }) => {
  await mkdir(dirname(ADMIN_FILE), { recursive: true })

  const password = process.env.ADMIN_PASSWORD ?? 'admin'

  await page.goto('/admin/login')
  await expect(page.getByRole('heading', { name: /Админка RussianKisa/i })).toBeVisible()
  await page.getByPlaceholder('Пароль').fill(password)
  await page.getByRole('button', { name: /Войти/ }).click()

  // After successful login, navigateTo() moves us to /admin (or to ?redirect= if set).
  await page.waitForURL((url) => url.pathname.startsWith('/admin'), { timeout: 10_000 })

  // Sanity check: the admin sidebar should be visible.
  await expect(page.getByRole('heading', { name: /RussianKisa Admin/i })).toBeVisible()

  await page.context().storageState({ path: ADMIN_FILE })
})