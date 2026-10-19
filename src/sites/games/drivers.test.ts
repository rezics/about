// State logic of the games site's release table.
import { describe, expect, test } from 'vitest';
import { matching } from './table';
import site from '../../content/sites/games';

describe('releases table', () => {
  const releases = site.strings.example.releases;
  test('language and platform must hold on the same release', () => {
    const hits = matching(releases, 'zh', 'handheld');
    expect(hits.map((r) => r.id)).toEqual(['handheld-asia']);
  });
  test('an absent condition matches everything; impossible pairs match nothing', () => {
    expect(matching(releases, null, null)).toHaveLength(releases.length);
    expect(matching(releases, 'en', 'mobile')).toHaveLength(0);
  });
  test('every landing example that names a platform release agrees with the table', () => {
    const ids = new Set(releases.map((r) => r.id));
    for (const id of ['pc-std', 'pc-deluxe', 'console-complete', 'handheld-asia']) expect(ids.has(id)).toBe(true);
    const items = new Set(site.strings.landing.releases.items.map((i) => i.id));
    for (const id of ['pc-std', 'pc-deluxe', 'console-complete', 'handheld-asia']) expect(items.has(id)).toBe(true);
  });
});
