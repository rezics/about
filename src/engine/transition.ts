// Page transitions (DESIGN.md "Direction v2", Motion): a veil in the page's ground fades over the
// old page while the next one loads, then fades away from the new one. No wipes, no growing
// squares. Reduced motion: instant. Adapters run leave() while the next page loads, so the
// transition adds little or no latency.
import { gsap } from 'gsap';
import { prefersReducedMotion } from './env';

const veil = () => document.getElementById('curtain');

/** Kept for adapters: links no longer carry a transition source. */
export function trackSource() {}

export function playLeave(): Promise<unknown> {
  const c = veil();
  if (!c || prefersReducedMotion()) return Promise.resolve();
  return Promise.resolve(gsap.fromTo(c, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.22, ease: 'power1.out' }));
}

export function playEnter(): Promise<unknown> {
  const c = veil();
  if (!c) return Promise.resolve();
  if (prefersReducedMotion() || getComputedStyle(c).visibility === 'hidden') {
    gsap.set(c, { autoAlpha: 0 });
    return Promise.resolve();
  }
  return Promise.resolve(gsap.to(c, { autoAlpha: 0, duration: 0.42, ease: 'power2.out' }));
}
