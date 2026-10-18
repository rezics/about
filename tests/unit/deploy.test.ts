// The site deploys as static assets only (DESIGN.md "Engineering").
import { existsSync, readFileSync } from 'node:fs';
import { expect, test } from 'vitest';

const config = JSON.parse(
  readFileSync(new URL('../../wrangler.jsonc', import.meta.url), 'utf8').replace(/^\s*\/\/.*$/gm, ''),
) as Record<string, unknown> & { assets: { directory: string; not_found_handling: string } };

test('wrangler serves dist as assets, with no Worker script and no bindings', () => {
  expect(config.assets.directory).toBe('dist');
  expect(config.assets.not_found_handling).toBe('404-page');
  expect(config.main).toBeUndefined();
  expect(config.d1_databases).toBeUndefined();
  expect(existsSync(new URL('../../worker', import.meta.url))).toBe(false);
});
