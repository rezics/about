// Page transitions (DESIGN.md "Transitions"). Clicking a link that holds a square
// ([data-flip-src]) grows that square to fill the viewport in its field colour, then the next
// page's [data-flip-target] square settles from full size into place. Any other navigation closes
// an ink curtain in 12 columns. Reduced motion: instant. Adapters run leave() while the next page
// loads, so the transition adds little or no latency.
import { gsap } from 'gsap';
import { dur, ease, prefersReducedMotion } from './env';

let source: HTMLElement | null = null;

/** Remember the square inside the clicked link (capture phase, before the router acts). */
export function trackSource() {
  document.addEventListener(
    'click',
    (e) => {
      const link = (e.target as HTMLElement | null)?.closest?.('a');
      source = link?.querySelector<HTMLElement>('[data-flip-src]') ?? (link?.matches('[data-flip-src]') ? link : null);
    },
    true,
  );
}

const curtain = () => document.getElementById('curtain') as HTMLElement;
const columns = (c: HTMLElement) => [...c.querySelectorAll<HTMLElement>('.curtain__col')];

const inset = (r: DOMRect) =>
  `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)`;
const insetX = (r: DOMRect) => `inset(${r.top}px 0px ${innerHeight - r.bottom}px 0px)`;
const insetY = (r: DOMRect) => `inset(0px ${innerWidth - r.right}px 0px ${r.left}px)`;
const full = 'inset(0px 0px 0px 0px)';

function leaveSquare(c: HTMLElement, from: HTMLElement) {
  const r = from.getBoundingClientRect();
  const field = getComputedStyle(from).getPropertyValue('--field').trim() || getComputedStyle(from).backgroundColor;
  const ghost = document.createElement('div');
  ghost.className = 'curtain__ghost';
  Object.assign(ghost.style, { inset: '0', background: field, clipPath: inset(r) });
  const copy = from.cloneNode(true) as HTMLElement;
  copy.removeAttribute('data-flip-src');
  Object.assign(copy.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, margin: '0' });
  ghost.appendChild(copy);
  c.appendChild(ghost);
  // Along the grid: first across, then down.
  return gsap
    .timeline()
    .set(c, { autoAlpha: 1 })
    .to(copy, { autoAlpha: 0, duration: dur.s, ease: ease.soft }, 0.12)
    .to(ghost, { clipPath: insetX(r), duration: dur.m, ease: ease.out }, 0)
    .to(ghost, { clipPath: full, duration: dur.m, ease: ease.out }, dur.m * 0.7)
    .add(() => copy.remove());
}

function enterSquare(c: HTMLElement, ghost: HTMLElement) {
  const target = document.querySelector<HTMLElement>('[data-flip-target]');
  const tl = gsap.timeline();
  if (target) {
    const r = target.getBoundingClientRect();
    tl.to(ghost, { clipPath: insetY(r), duration: dur.m, ease: ease.out })
      .to(ghost, { clipPath: inset(r), duration: dur.m, ease: ease.settle }, dur.m * 0.7)
      .to(ghost, { autoAlpha: 0, duration: dur.s, ease: ease.soft });
  } else {
    tl.to(ghost, { clipPath: 'inset(0px 0px 100% 0px)', duration: dur.l, ease: ease.inOut });
  }
  return tl.add(() => ghost.remove()).set(c, { autoAlpha: 0 });
}

function leaveCurtain(c: HTMLElement) {
  return gsap
    .timeline()
    .set(c, { autoAlpha: 1 })
    .fromTo(columns(c), { yPercent: -101 }, { yPercent: 0, duration: dur.m, ease: ease.out, stagger: 0.03 });
}

function enterCurtain(c: HTMLElement) {
  return gsap
    .timeline()
    .to(columns(c), { yPercent: 101, duration: dur.m, ease: ease.out, stagger: 0.03 })
    .set(c, { autoAlpha: 0 })
    .set(columns(c), { yPercent: -101 });
}

export function playLeave(): Promise<unknown> {
  const c = curtain();
  if (!c) return Promise.resolve();
  const from = source;
  source = null;
  if (prefersReducedMotion()) return Promise.resolve();
  return Promise.resolve(from && from.isConnected ? leaveSquare(c, from) : leaveCurtain(c));
}

export function playEnter(): Promise<unknown> {
  const c = curtain();
  if (!c || prefersReducedMotion()) {
    if (c) gsap.set(c, { autoAlpha: 0 });
    return Promise.resolve();
  }
  const ghost = c.querySelector<HTMLElement>('.curtain__ghost');
  if (ghost) return Promise.resolve(enterSquare(c, ghost));
  if (getComputedStyle(c).visibility === 'hidden') return Promise.resolve();
  return Promise.resolve(enterCurtain(c));
}
