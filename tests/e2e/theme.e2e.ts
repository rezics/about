// A site may take a dark theme: the shared chrome (header, panels, site bar, footer, finales and
// primitives) reads only semantic tokens, so it follows and keeps AA contrast.
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const DARK = `[data-site] {
  --c-bg: #0e1420; --c-fg: #f4f5f2; --c-muted: #a9b2c1;
  --c-line: rgb(244 245 242 / 0.16); --c-line-strong: rgb(244 245 242 / 0.34); --c-link: #9ab8e6;
  --c-band-bg: #f4f5f2; --c-band-fg: #0e1420; --c-band-muted: #566070;
  --c-band-line: rgb(14 20 32 / 0.12); --c-band-line-strong: rgb(14 20 32 / 0.28); --c-band-link: #2f63ad;
}`;

for (const route of ['/books/', '/developers/', '/engine/community/']) {
  test(`${route} under a dark site theme: chrome follows, contrast holds`, async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(route);
    await page.addStyleTag({ content: DARK });
    await page.waitForTimeout(200);
    const grounds = await page.evaluate(() => ({
      header: getComputedStyle(document.querySelector('[data-header]')!).backgroundColor,
      body: getComputedStyle(document.body).backgroundColor,
      footer: getComputedStyle(document.querySelector('footer')!).backgroundColor,
    }));
    expect(grounds.header).toBe('rgb(14, 20, 32)');
    expect(grounds.body).toBe('rgb(14, 20, 32)');
    expect(grounds.footer).toBe('rgb(244, 245, 242)');
    await page.locator('[data-panel-button="panel-products"]').click();
    await expect(page.locator('#panel-products')).toBeVisible();
    const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
    expect(results.violations.flatMap((v) => v.nodes.map((n) => `${n.target.join(' ')}: ${n.failureSummary?.split('\n')[1] ?? ''}`))).toEqual([]);
    await context.close();
  });
}
