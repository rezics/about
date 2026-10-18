// The notify form against the Worker and a local D1.
import { expect, test } from '@playwright/test';

test('with script the form answers in place', async ({ page }) => {
  await page.goto('/');
  const form = page.locator('form[data-notify]');
  await form.locator('input[name="email"]').fill(`reader-${Date.now()}@example.org`);
  await form.locator('button[type="submit"]').click();
  await expect(form.locator('[role="status"]')).toHaveAttribute('data-state', 'done');
  await form.locator('input[name="email"]').fill('not-an-address');
  await form.locator('button[type="submit"]').click();
  await expect(form.locator('[role="status"]')).toHaveAttribute('data-state', 'error');
});

test('the header action lands on the form and focuses the address', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/books/');
  await page.locator('header [data-notify-link]').click();
  await expect(page.locator('#notify-email')).toBeFocused();
});

test('without script a post lands on /notified/', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/');
  await page.locator('#notify-email').fill(`plain-${Date.now()}@example.org`);
  await page.locator('form[data-notify] button[type="submit"]').click();
  await expect(page).toHaveURL(/\/notified\/$/);
  await expect(page.locator('h1')).toBeVisible();
  await context.close();
});
