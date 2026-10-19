// Behaviour of the bookmark signature's state (bookmark-state.ts). Not picked up by the shared
// vitest include (tests/unit, tests/build); run with the books config until the kit includes
// src/sites/**/*.test.ts.
import { describe, expect, test } from 'vitest';
import { STEPS, positionFrom, state } from './bookmark-state';

describe('bookmark state', () => {
  test('starts with no rows and the bookmark before volume 1', () => {
    const s = state(0);
    expect(s.step).toBe(0);
    expect(Object.values(s.rows).every((v) => !v)).toBe(true);
    expect(s.mark).toBe(0);
    expect(s.volumes).toEqual([]);
  });

  test('the omnibus finishes volumes 1 to 3 once each', () => {
    const s = state(2.5);
    expect(s.read).toEqual(['omni:1']);
    expect(s.volumes).toEqual([1, 2, 3]);
    expect(s.mark).toBe(3);
  });

  test('the bookmark advances one volume at a time through step 4 and never skips', () => {
    const marks = [0, 0.2, 0.3, 0.55, 0.8, 0.99].map((u) => state(3 + u).mark);
    expect(marks).toEqual([3, 3, 4, 5, 6, 6]);
    expect(state(3.99).read).toEqual(['omni:1', 'zh:4', 'zh:5', 'zh:6']);
  });

  test('volume 7 waits for the Chinese edition while the Japanese one is next', () => {
    const s = state(4.5);
    expect(s.wait).toBe('zh:7');
    expect(s.next).toBe('ja:7');
    expect(s.lang).toBe('zh');
  });

  test('reading in Japanese counts after switching back to Chinese', () => {
    const s = state(STEPS);
    expect(s.lang).toBe('zh');
    expect(s.volumes).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(s.mark).toBe(8);
    expect(s.wait).toBe('zh:9');
  });

  test('the bookmark only moves along one axis per change', () => {
    let prev = state(0);
    for (let t = 0; t <= STEPS; t += 0.01) {
      const s = state(t);
      expect(s.mark !== prev.mark && s.lang !== prev.lang).toBe(false);
      prev = s;
    }
  });

  test('state is defined for any input', () => {
    expect(state(-3).step).toBe(0);
    expect(state(99).step).toBe(STEPS - 1);
    expect(state(Number.NaN).step).toBe(0);
  });

  test('position follows the step box that holds the anchor line', () => {
    const boxes = [0, 100, 200].map((top) => ({ top, height: 100 }));
    expect(positionFrom(boxes, -10)).toBe(0);
    expect(positionFrom(boxes, 150)).toBeCloseTo(1.5);
    expect(positionFrom(boxes, 500)).toBe(3);
  });
});
