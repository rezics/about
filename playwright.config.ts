import { defineConfig, devices } from '@playwright/test';
import { freePort } from './scripts/free-port.mjs';

// The production build served by the Worker with a local D1 (wrangler dev, no login). A free
// port per run, so parallel worktrees never collide; `task e2e` queues on a shared slot.
process.env.E2E_PORT ??= String(await freePort());
const port = Number(process.env.E2E_PORT);
const state = `.wrangler/e2e-${port}`;

export default defineConfig({
  testDir: 'tests/e2e',
  testMatch: '**/*.e2e.ts',
  outputDir: 'test-results',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  timeout: 60_000,
  reporter: [['list']],
  use: { baseURL: `http://127.0.0.1:${port}`, trace: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `CI=1 npx wrangler d1 migrations apply DB --local --persist-to ${state} && npx wrangler dev --ip 127.0.0.1 --port ${port} --persist-to ${state}`,
    url: `http://127.0.0.1:${port}/`,
    reuseExistingServer: false,
    timeout: 120_000,
    env: { WRANGLER_SEND_METRICS: 'false' },
  },
});
