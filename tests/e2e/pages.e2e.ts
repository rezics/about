// Every route loads at desktop and 390 px without console errors or horizontal overflow, has no
// serious or critical axe violations, and shows all its content under reduced motion.
import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';
import { routes } from './routes';

const viewports = { desktop: { width: 1440, height: 900 }, phone: { width: 390, height: 844 } };

function watch(page: Page) {
  const errors: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('requestfailed', (r) => errors.push(`${r.url()} ${r.failure()?.errorText}`));
  page.on('response', (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`));
  return errors;
}

for (const route of routes) {
  for (const [name, viewport] of Object.entries(viewports)) {
    test(`${route} at ${name}: no console errors, no overflow`, async ({ page }) => {
      await page.setViewportSize(viewport);
      const errors = watch(page);
      await page.goto(route, { waitUntil: 'load' });
      await page.waitForTimeout(600);
      // Walk the page so lazy pictures and scroll-driven code run too.
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < height; y += viewport.height) {
        await page.evaluate((top) => window.scrollTo(0, top), y);
        await page.waitForTimeout(120);
      }
      await page.waitForTimeout(400);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      expect(overflow, 'horizontal overflow (px)').toBeLessThanOrEqual(1);
      expect(errors).toEqual([]);
    });
  }

  test(`${route}: reduced motion shows everything, axe finds nothing serious`, async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce', viewport: viewports.desktop });
    const page = await context.newPage();
    await page.goto(route, { waitUntil: 'load' });
    await page.waitForTimeout(500);
    const hidden = await page.evaluate(() =>
      [...document.querySelectorAll('main h1, main h2, main h3, main p, main a, main li')]
        .filter((e) => {
          if (e.closest('[aria-hidden="true"]')) return false;
          const cs = getComputedStyle(e);
          return e.getBoundingClientRect().height > 0 && (cs.visibility === 'hidden' || Number(cs.opacity) < 0.05);
        })
        .map((e) => `${e.tagName.toLowerCase()}: ${(e.textContent ?? '').trim().slice(0, 40)}`),
    );
    expect(hidden).toEqual([]);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    const serious = results.violations
      .filter((v) => v.impact === 'serious' || v.impact === 'critical')
      .map((v) => `${v.id}: ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' | ')}`);
    expect(serious).toEqual([]);
    await context.close();
  });
}
