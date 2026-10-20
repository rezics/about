import { expect, test } from 'vitest';
import { centeredTabLeft } from '../../src/kit/motion/sitebar';

test('centres within the scrollport without including the fixed site badge', () => {
  expect(centeredTabLeft({ left: 240, width: 80 }, { left: 120, width: 240 }, 0, 800)).toBe(40);
});

test('centring is stable after the strip has scrolled', () => {
  expect(centeredTabLeft({ left: 220, width: 80 }, { left: 120, width: 240 }, 60, 800)).toBe(80);
});

test('clamps to the scroll range and handles a strip that fits', () => {
  expect(centeredTabLeft({ left: 10, width: 40 }, { left: 0, width: 240 }, 0, 800)).toBe(0);
  expect(centeredTabLeft({ left: 290, width: 80 }, { left: 0, width: 240 }, 550, 800)).toBe(560);
  expect(centeredTabLeft({ left: 10, width: 40 }, { left: 0, width: 240 }, 0, 200)).toBe(0);
});
