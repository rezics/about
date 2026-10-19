// State logic of the games site's release filter.
import { describe, expect, test } from 'vitest';
import { matching } from './table';
import site from '../../content/sites/games';

describe('release filter', () => {
  const releases = site.strings.example.releases;
  test('language and platform must hold on the same release', () => {
    const hits = matching(releases, 'zh', 'handheld');
    expect(hits.map((r) => r.id)).toEqual(['handheld-asia']);
  });
  test('an absent condition matches everything; impossible pairs match nothing', () => {
    expect(matching(releases, null, null)).toHaveLength(releases.length);
    expect(matching(releases, 'en', 'mobile')).toHaveLength(0);
  });
  test('every landing example that names a platform release is a release in the filter', () => {
    const ids = new Set(releases.map((r) => r.id));
    const named = site.strings.landing.releases.items.filter((i) => i.id !== 'fan-zh');
    expect(named.length).toBeGreaterThan(0);
    for (const it of named) expect(ids.has(it.id)).toBe(true);
  });
});

describe('tile colours', () => {
  test('text on every games tile passes AA', async () => {
    const { blue } = await import('./tiles');
    const { contrast } = await import('../../kit/color');
    const { inkOn } = await import('../../kit/theme');
    for (const t of Object.values(blue)) expect(contrast(inkOn(t.bg, t.on), t.bg)).toBeGreaterThanOrEqual(4.5);
  });
});
