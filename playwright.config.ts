import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright config for russiankisa E2E tests.
 *
 * Two flavours:
 *   1. Public projects (desktop / tablet / mobile): anonymous browser, run against the prerendered production build.
 *   2. Admin project (desktop only): reuses an admin auth cookie from tests/e2e/.auth/admin.json.
 *
 * webServer command performs `pnpm build` first so the served bundle matches production
 * (including Nitro prerender of `/`). Uses port 3100 because Docker Desktop's backend
 * already binds 3000 on this machine. Override with E2E_PORT if you ever need to.
 */
const PORT = Number(process.env.E2E_PORT ?? 3100)

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: `http://localhost:${PORT}`,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    // Public site — anonymous browsers across 3 viewports.
    {
      name: 'desktop-chromium',
      testMatch: /public\/.*\.spec\.ts$/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 832 },
      },
    },
    {
      name: 'tablet-chromium',
      testMatch: /public\/.*\.spec\.ts$/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 900, height: 1200 },
      },
    },
    {
      name: 'mobile-chromium',
      testMatch: /public\/.*\.spec\.ts$/,
      use: {
        ...devices['Pixel 5'],
      },
    },

    // Admin — setup project first runs the auth flow and saves storageState.
    {
      name: 'admin-setup',
      testMatch: /.*\.setup\.ts$/,
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 832 } },
    },
    {
      name: 'admin-desktop',
      dependencies: ['admin-setup'],
      testMatch: /admin\/.*\.spec\.ts$/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 832 },
        storageState: 'tests/e2e/.auth/admin.json',
      },
    },
  ],

  webServer: {
    command: `pnpm run build && NITRO_PORT=${PORT} node .output/server/index.mjs`,
    url: `http://localhost:${PORT}`,
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
