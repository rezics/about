import { expect, test, type Page } from '@playwright/test';

async function stripState(page: Page) {
  return page.locator('.sitebar__tabs').evaluate((tabs) => {
    const root = tabs.getBoundingClientRect();
    const current = tabs.querySelector('[aria-current="page"]')!;
    const rect = current.getBoundingClientRect();
    const overflow = tabs.scrollWidth > tabs.clientWidth + 1;
    const partial = [...tabs.children].filter(item => {
      if (item.hasAttribute('data-clipped')) return false;
      const r = item.getBoundingClientRect();
      return r.left < root.left + 15 || r.right > root.right - 15;
    });
    return { centered: !overflow || Math.abs(rect.left + rect.width / 2 - root.left - root.width / 2) < 2,
      currentVisible: !current.parentElement!.hasAttribute('data-clipped'), partial: partial.length };
  });
}

for (const width of [390, 768, 1024]) {
  test(`site bars at ${width}: complete centred current tabs and complete neighbours`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/anime/credits/', '/apis/specs/', '/books/publish/', '/developers/wiki-toolkit/', '/games/store/', '/manga/publish/', '/mcp/maintainers/', '/skills/publish/', '/software/connections/', '/visual-novels/zones/']) {
      await page.goto(route);
      await expect.poll(() => stripState(page), { message: route }).toEqual({ centered: true, currentVisible: true, partial: 0 });
    }
  });
}

test('keyboard leaves the strip on the active tab; resizing, navigation and history reinitialise it', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/games/store/');
  const last = page.locator('.sitebar__tab').last();
  await last.focus();
  await expect(last.locator('..')).not.toHaveAttribute('data-clipped');
  await page.keyboard.press('Tab');
  await expect.poll(() => stripState(page)).toEqual({ centered: true, currentVisible: true, partial: 0 });
  await page.setViewportSize({ width: 768, height: 1024 });
  await expect.poll(() => stripState(page)).toEqual({ centered: true, currentVisible: true, partial: 0 });
  await last.focus();
  await last.press('Enter');
  await expect(page).toHaveURL(/\/games\/creators\/$/);
  await expect.poll(() => stripState(page)).toEqual({ centered: true, currentVisible: true, partial: 0 });
  await page.goBack();
  await expect(page).toHaveURL(/\/games\/store\/$/);
  await expect.poll(() => stripState(page)).toEqual({ centered: true, currentVisible: true, partial: 0 });
});

test('tablet heroes put wide copy before the photograph, including pages with a desktop copy cap', async ({ page }) => {
  for (const width of [768, 1024, 1199]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/missing/', '/anime/', '/apis/', '/books/', '/developers/', '/engine/', '/engine/community/', '/engine/create/', '/engine/trust/', '/engine/universal-index/', '/engine/zones/', '/games/', '/manga/', '/mcp/', '/skills/', '/software/', '/visual-novels/', '/roadmap/']) {
      await page.goto(route);
      const geometry = await page.locator('.phero').evaluate(hero => {
        const copy = hero.querySelector('.phero__copy')!.getBoundingClientRect();
        const photo = hero.querySelector('.phero__pic')!.getBoundingClientRect();
        return { wide: copy.width >= innerWidth * .9, separate: photo.top >= copy.bottom - 1 };
      });
      expect(geometry, `${route} at ${width}`).toEqual({ wide: true, separate: true });
    }
  }
});

for (const javaScriptEnabled of [true, false]) {
  test(`phone close bar stays visible while the sheet scrolls, script=${javaScriptEnabled}`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled, viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto('/engine/');
    await page.locator('[data-menu-open]').click();
    const menu = page.locator('[data-menu]');
    await menu.evaluate(el => el.scrollTop = el.scrollHeight);
    await expect(page.locator('.sheet__top')).toBeInViewport();
    expect((await page.locator('.sheet__top').boundingBox())!.y).toBe(0);
    await page.locator('[data-menu-close]').click();
    await expect(menu).toBeHidden();
    await expect(page.locator('[data-menu-open]')).toBeFocused();
    await context.close();
  });
  test(`phrase-broken CJK renders at the reported crash widths, script=${javaScriptEnabled}`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled });
    const page = await context.newPage();
    for (const [route, width] of [['/apis/', 1024], ['/skills/evidence/', 1024], ['/skills/', 768], ['/books/publish/', 390]] as const) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('h1')).toBeVisible();
      expect(await page.locator('p:has(wbr)').evaluateAll(items => items.every(el => getComputedStyle(el).textWrapStyle === 'auto'))).toBe(true);
    }
    await context.close();
  });
}
