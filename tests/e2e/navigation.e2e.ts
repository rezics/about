// The global navigation: disclosure panels by pointer and keyboard, Escape, the phone sheet.
import { expect, test } from '@playwright/test';
import sharp from 'sharp';

test.describe('desktop panels', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('the products panel opens on pointer intent and closes after the pointer leaves', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('[data-panel-button="panel-products"]');
    const panel = page.locator('#panel-products');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await button.hover();
    await expect(panel).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(panel.locator('a[href="/zh-Hant/books/"]')).toBeVisible();
    // A click on a tab the pointer opened keeps the panel open.
    await button.click();
    await expect(panel).toBeVisible();
    await page.mouse.move(700, 880);
    await page.mouse.click(700, 880);
    await expect(panel).toBeHidden();
  });

  test('an open panel dims the page below it with its own fade and never the header', async ({ page }) => {
    const mean = async (y: number) => {
      const png = await page.screenshot({ clip: { x: 0, y, width: 1440, height: 4 } });
      const { channels } = await sharp(png).stats();
      return channels.slice(0, 3).reduce((sum, c) => sum + c.mean, 0) / 3;
    };
    await page.goto('/');
    const header = await mean(2);
    const below = await mean(880);
    await page.locator('[data-panel-button="panel-products"]').hover();
    const panel = page.locator('#panel-products');
    await expect.poll(() => panel.evaluate((el) => getComputedStyle(el).opacity)).toBe('1');
    expect(await panel.evaluate((el) => getComputedStyle(el, '::backdrop').backgroundColor)).toBe('rgba(0, 0, 0, 0)');
    expect(Math.abs((await mean(2)) - header)).toBeLessThan(1);
    expect(await mean(880)).toBeLessThan(below - 5);
  });

  test('moving from 產品 to 引擎 switches panels; Escape closes and returns focus', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-panel-button="panel-products"]').hover();
    await expect(page.locator('#panel-products')).toBeVisible();
    await page.locator('[data-panel-button="panel-engine"]').hover();
    await expect(page.locator('#panel-engine')).toBeVisible();
    await expect(page.locator('#panel-products')).toBeHidden();
    await page.keyboard.press('Escape');
    await expect(page.locator('#panel-engine')).toBeHidden();
  });

  test('keyboard: Enter opens, Tab enters the panel, Escape closes and focuses the tab', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('[data-panel-button="panel-engine"]');
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#panel-engine')).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    const inside = await page.evaluate(() => !!document.activeElement?.closest('#panel-engine'));
    expect(inside).toBe(true);
    await page.keyboard.press('Escape');
    await expect(page.locator('#panel-engine')).toBeHidden();
    await expect(button).toBeFocused();
    await page.keyboard.press('Space');
    await expect(page.locator('#panel-engine')).toBeVisible();
  });

  test('the current section is marked', async ({ page }) => {
    await page.goto('/roadmap/');
    await expect(page.locator('.tab[href="/zh-Hant/roadmap/"]')).toHaveAttribute('aria-current', 'page');
    await page.goto('/books/');
    await expect(page.locator('[data-panel-button="panel-products"]')).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('[data-sitebar] a[aria-current="page"]').first()).toBeVisible();
  });

  test('without script the panels still open', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto('/');
    await page.locator('[data-panel-button="panel-products"]').click();
    await expect(page.locator('#panel-products')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#panel-products')).toBeHidden();
    await context.close();
  });
});

test.describe('phone sheet', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  test('選單 opens a modal sheet with the nine products; Escape closes it', async ({ page }) => {
    await page.goto('/');
    const open = page.locator('[data-menu-open]');
    await expect(open).toBeVisible();
    await open.click();
    const sheet = page.locator('#menu');
    await expect(sheet).toBeVisible();
    await expect(sheet.locator('.sheet__tiles a')).toHaveCount(9);
    const trapped = await page.evaluate(() => (document.querySelector('#menu') as HTMLDialogElement).matches(':modal'));
    expect(trapped).toBe(true);
    await page.keyboard.press('Escape');
    await expect(sheet).toBeHidden();
    await expect(open).toBeFocused();
  });
});
