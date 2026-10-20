// The site deploys to Cloudflare Pages: static files plus one small Function (README "Deployment").
import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';

const config = JSON.parse(
  readFileSync(new URL('../../wrangler.jsonc', import.meta.url), 'utf8').replace(/^\s*\/\/.*$/gm, ''),
) as Record<string, unknown>;

test('Pages serves dist with the locale Function and no bindings', () => {
  expect(config.name).toBe('rezics-about');
  expect(config.pages_build_output_dir).toBe('./dist');
  expect(config.d1_databases).toBeUndefined();
  expect(config.kv_namespaces).toBeUndefined();
});
