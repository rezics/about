// Pinned horizontal pan for a real sequence (skill motion.md "Pinned horizontal pan"): the
// store's six purchase steps. Desktop with a fine pointer and motion only; phones keep a native
// scroll-snap row, reduced motion a static row.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, prefersReducedMotion } from '../../engine';

gsap.registerPlugin(ScrollTrigger);

export function startPan() {
  onPage(() => {
    const wrap = document.querySelector<HTMLElement>('[data-pan]');
    const track = wrap?.querySelector<HTMLElement>('[data-pan-track]');
    if (!wrap || !track) return;
    if (prefersReducedMotion() || !matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches) return;
    wrap.classList.add('is-panning');
    const view = track.parentElement!;
    const dist = () => Math.max(0, track.scrollWidth - view.clientWidth);
    const top = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar-h')) || 52;
    gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: { trigger: wrap, start: () => `top ${top()}px`, end: () => `+=${dist()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true },
    });
  });
}
