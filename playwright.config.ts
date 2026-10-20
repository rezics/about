import { defineConfig, devices } from '@playwright/test';
import { freePort } from './scripts/free-port.mjs';

// The production build served the way Cloudflare Pages serves it (wrangler pages dev, Function included,
// no login). A free port per run, so parallel worktrees never collide; `task e2e` queues on a
// shared slot.
process.env.E2E_PORT ??= String(await freePort());
const port = Number(process.env.E2E_PORT);

export default defineConfig({
  testDir: 'tests/e2e',
  testMatch: '**/*.e2e.ts',
  outputDir: 'test-results',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  timeout: 60_000,
  reporter: [['list']],
  // zh-TW: the unprefixed paths the tests visit redirect to zh-Hant, the source copy.
  use: { baseURL: `http://127.0.0.1:${port}`, trace: 'retain-on-failure', locale: 'zh-TW' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npx wrangler pages dev dist --ip 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}/zh-Hant/`,
    reuseExistingServer: false,
    timeout: 120_000,
    env: { WRANGLER_SEND_METRICS: 'false' },
  },
});
