// Blocks drop into their columns and lock (歸位) when a distribution comes into view, and again
// when the visitor switches population or period. Reduced motion: no movement.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';

gsap.registerPlugin(ScrollTrigger);

const drop = (el: Element, trigger = true) =>
  gsap.from(el.querySelectorAll('.blocks__b:not(.blocks__b--off)'), {
    yPercent: -140,
    autoAlpha: 0,
    duration: dur.s,
    ease: ease.settle,
    stagger: { each: 0.025, from: 'end' },
    scrollTrigger: trigger ? { trigger: el, start: 'top 90%', once: true } : undefined,
  });

export function startBlocks() {
  onPage(() => {
    if (prefersReducedMotion()) return;
    document.querySelectorAll('[data-blocks]').forEach((el) => {
      if (!el.closest('.who__shape')) drop(el);
    });
    const who = document.querySelector<HTMLElement>('.who');
    if (!who) return;
    const onChange = () => {
      const shown = [...who.querySelectorAll<HTMLElement>('.who__shape')].find((s) => getComputedStyle(s).display !== 'none');
      const blocks = shown?.querySelector('[data-blocks]');
      if (blocks) drop(blocks, false);
    };
    who.addEventListener('change', onChange);
    return () => who.removeEventListener('change', onChange);
  });
}
