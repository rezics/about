import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export const isTouch = () => matchMedia('(hover: none), (pointer: coarse)').matches;
export const isMobile = () => matchMedia('(max-width: 767px)').matches;

// The motion verb is 歸位 (slot into place): an expo-out "snap", and a "settle" with at most 2 %
// overshoot used only when a part locks into a cell. Use these names everywhere.
CustomEase.create('snap', 'M0,0 C0.2,0.9 0.1,1 1,1');
CustomEase.create('settle', 'M0,0 C0.16,0.84 0.3,1.02 0.6,1.018 0.78,1.014 0.9,1.002 1,1');

export const ease = {
  out: 'snap', // default entrance, moves along the grid
  settle: 'settle', // a part locking into its cell
  inOut: 'expo.inOut', // curtains
  soft: 'power3.out', // small UI
} as const;

/** DESIGN.md durations: small, medium, large; stagger 40 ms. */
export const dur = { s: 0.32, m: 0.56, l: 0.9, stagger: 0.04 } as const;
