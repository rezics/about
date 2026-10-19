// The books tile tones: six distinct grounds, each carrying text that passes AA.
import { describe, expect, test } from 'vitest';
import { contrast } from '../../kit/color';
import { inkOn } from '../../kit/theme';
import { tones } from './tones';

describe('books tones', () => {
  test('six distinct grounds', () => {
    expect(new Set(Object.values(tones).map((t) => t.bg)).size).toBe(6);
  });
  test.each(Object.entries(tones))('%s takes text that passes AA', (_, t) => {
    expect(contrast(inkOn(t.bg, t.on), t.bg)).toBeGreaterThanOrEqual(4.5);
  });
});
