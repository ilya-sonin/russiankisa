import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright config for russiankisa E2E tests.
 *
 * Public projects run against the generated static build at three viewport sizes.
 *
 * webServer builds the static site and serves `dist` with Python's static file server.
 * Uses port 3100; override with E2E_PORT if needed.
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
    baseURL: `http://127.0.0.1:${PORT}`,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: process.env.PLAYWRIGHT_EXECUTABLE_PATH ? 'off' : 'retain-on-failure',
    launchOptions: process.env.PLAYWRIGHT_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH }
      : {},
  },

  projects: [
    // Public site across 3 viewports.
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

  ],

  webServer: {
    command: `corepack pnpm run build && python3 -m http.server ${PORT} --bind 127.0.0.1 --directory dist`,
    url: `http://127.0.0.1:${PORT}`,
    timeout: 180_000,
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
