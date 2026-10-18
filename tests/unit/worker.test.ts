// The notify endpoint (worker/notify.ts) and the Worker's API routing.
import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'vitest';
import { handleApi } from '../../worker/index';
import type { AboutEnv, D1Database } from '../../worker/env';

/** A D1 stand-in that keeps the table's primary key semantics. */
function memoryDb(options: { failing?: boolean } = {}) {
  const rows = new Map<string, { locale: string; createdAt: string }>();
  const db: D1Database = {
    prepare: () => ({
      bind: (...values: unknown[]) => ({
        run: () => {
          if (options.failing) return Promise.reject(new Error('D1 unavailable'));
          const [email, locale, createdAt] = values as [string, string, string];
          if (!rows.has(email)) rows.set(email, { locale, createdAt });
          return Promise.resolve({});
        },
      }),
    }),
  };
  return { db, rows };
}

const assets = { fetch: () => Promise.resolve(new Response('asset')) };
const envWith = (db: D1Database): AboutEnv => ({ ASSETS: assets, DB: db });
const post = (body: unknown, headers: Record<string, string> = {}) =>
  new Request('https://about.test/api/notify', {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json', ...headers },
    body: JSON.stringify(body),
  });
const form = (fields: Record<string, string>) =>
  new Request('https://about.test/api/notify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields),
  });

describe('notify', () => {
  test('stores a lower-cased address once, in zh-Hant, and answers a repeat the same way', async () => {
    const { db, rows } = memoryDb();
    const first = await handleApi(post({ email: '  Reader@Example.COM ' }), envWith(db));
    expect(first?.status).toBe(200);
    expect(await first?.json()).toEqual({ status: 'subscribed' });
    expect([...rows.keys()]).toEqual(['reader@example.com']);
    expect(rows.get('reader@example.com')?.locale).toBe('zh-Hant');
    const again = await handleApi(post({ email: 'reader@example.com' }), envWith(db));
    expect(again?.status).toBe(200);
    expect(await again?.json()).toEqual({ status: 'subscribed' });
    expect(rows.size).toBe(1);
  });

  test('refuses bad addresses and cross-origin posts', async () => {
    const { db, rows } = memoryDb();
    for (const email of ['', 'no-at-sign', 'a@b', 'a b@c.co', `${'x'.repeat(250)}@example.com`, 42]) {
      const response = await handleApi(post({ email }), envWith(db));
      expect(response?.status, String(email)).toBe(422);
      expect(((await response?.json()) as { code: string }).code).toBe('invalid_email');
    }
    const foreign = await handleApi(post({ email: 'b@example.com' }, { origin: 'https://evil.test' }), envWith(db));
    expect(foreign?.status).toBe(403);
    const same = await handleApi(post({ email: 'c@example.com' }, { origin: 'https://about.test' }), envWith(db));
    expect(same?.status).toBe(200);
    expect([...rows.keys()]).toEqual(['c@example.com']);
  });

  test('only POST, and other API paths are 404 problems; pages fall through to assets', async () => {
    const { db } = memoryDb();
    expect((await handleApi(new Request('https://about.test/api/notify'), envWith(db)))?.status).toBe(405);
    expect((await handleApi(new Request('https://about.test/api/other'), envWith(db)))?.status).toBe(404);
    expect(await handleApi(new Request('https://about.test/books/'), envWith(db))).toBeUndefined();
  });

  test('a filled honeypot looks successful but stores nothing', async () => {
    const { db, rows } = memoryDb();
    const response = await handleApi(post({ email: 'bot@example.com', company: 'ACME' }), envWith(db));
    expect(response?.status).toBe(200);
    expect(rows.size).toBe(0);
  });

  test('a plain form post redirects to /notified/, a refusal or failure back to the form', async () => {
    const { db, rows } = memoryDb();
    const done = await handleApi(form({ email: 'form@example.com' }), envWith(db));
    expect(done?.status).toBe(303);
    expect(done?.headers.get('location')).toBe('https://about.test/notified/');
    expect(rows.has('form@example.com')).toBe(true);
    const invalid = await handleApi(form({ email: 'nope' }), envWith(db));
    expect(invalid?.headers.get('location')).toBe('https://about.test/#notify');
    const down = await handleApi(form({ email: 'late@example.com' }), envWith(memoryDb({ failing: true }).db));
    expect(down?.headers.get('location')).toBe('https://about.test/#notify');
  });

  test('when storage fails a script caller learns it and can retry', async () => {
    const response = await handleApi(post({ email: 'late@example.com' }), envWith(memoryDb({ failing: true }).db));
    expect(response?.status).toBe(503);
    expect(((await response?.json()) as { code: string }).code).toBe('unavailable');
  });
});

describe('wrangler.jsonc', () => {
  const config = JSON.parse(readFileSync(new URL('../../wrangler.jsonc', import.meta.url), 'utf8').replace(/^\s*\/\/.*$/gm, '')) as {
    assets: { directory: string; run_worker_first: string[] };
    env: { production: { vars: { ABOUT_SITE_URL: string } } };
  };
  test('serves dist and runs the Worker first only for /api/*', () => {
    expect(config.assets.directory).toBe('dist');
    expect(config.assets.run_worker_first).toEqual(['/api/*']);
    expect(config.env.production.vars.ABOUT_SITE_URL).toBe('https://about.rezics.com');
  });
});
