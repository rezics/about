// 開箱: the games site's signature driver (SITE.md "Signature moment").
//
// One variable carries the idea: `p`, the scroll progress through the inventory's sticky stage
// on desktop. `open = p / 0.3` slides the releases out of the small square's 版本 cell into
// their slots (along x, then y, locking with the settle); the rest of `p` selects the release
// the red cursor sits on. Arrow keys and taps select directly and hold that choice until the
// scroll moves on by a whole step. On phones, tablets and touch the inventory opens once when
// it comes into view. An idle clock steps the cursor every 3.6 s while the stage is on screen,
// paused by the toggle, by the pointer or focus inside, and for good after the first choice.
// Reduced motion: open from the start, instant cursor, no idle.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';

gsap.registerPlugin(ScrollTrigger);

const IDLE = 3.6;
const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

/** Where item k sits at opening progress `open` (0: inside the source cell, 1: in its slot). */
export function itemState(open: number, k: number, from: { dx: number; dy: number; s: number }, curve = { x: (t: number) => t, y: (t: number) => t }) {
  const t = clamp((open - k * 0.045) / 0.6);
  if (t <= 0) return { x: from.dx, y: from.dy, scale: from.s, opacity: 0 };
  if (t < 0.5) {
    const e = curve.x(t / 0.5);
    return { x: from.dx * (1 - e), y: from.dy, scale: from.s + (1 - from.s) * e, opacity: 1 };
  }
  const e = curve.y((t - 0.5) / 0.5);
  return { x: 0, y: from.dy * (1 - e) || 0, scale: 1, opacity: 1 };
}

/** The selected slot for scroll progress p (the first 36 % of the stage opens the inventory). */
export function indexAt(p: number, n: number) {
  return Math.min(n - 1, Math.max(0, Math.floor(((p - 0.36) / 0.6) * n)));
}

export function startInventory() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-inventory]');
    if (!root) return;
    const cellsBox = root.querySelector<HTMLElement>('[data-inv-cells]')!;
    const items = [...root.querySelectorAll<HTMLElement>('[data-inv-item]')];
    const radios = items.map((el) => el.querySelector<HTMLInputElement>('input')!);
    const cursor = root.querySelector<HTMLElement>('[data-inv-cursor]')!;
    const source = root.querySelector<HTMLElement>('[data-inv-source]')!;
    const slots = root.querySelector<HTMLElement>('[data-inv-slots]')!;
    const desc = root.querySelector<HTMLElement>('.inv__desc')!;
    const toggle = root.querySelector<HTMLButtonElement>('[data-inv-toggle]')!;
    const n = items.length;
    const reduced = prefersReducedMotion();
    const pinnable = !reduced && matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)').matches;
    const curve = { x: gsap.parseEase(ease.out), y: gsap.parseEase(ease.settle) };

    let index = Math.max(0, radios.findIndex((r) => r.checked));
    let open = reduced ? 1 : 0;
    let from: { dx: number; dy: number; s: number }[] = [];
    let held: number | null = null; // scroll progress when the visitor last chose
    let stopped = false;
    let paused = false;
    let inside = false;
    let visible = false;
    let lastMove = 0;

    root.classList.add('is-live');
    if (pinnable) root.classList.add('is-pinned');

    // Positions inside the cells box, which scrolls sideways on phones.
    const cellRect = (i: number) => {
      const box = cellsBox.getBoundingClientRect();
      const r = items[i]!.getBoundingClientRect();
      return { x: r.left - box.left + cellsBox.scrollLeft, y: r.top - box.top + cellsBox.scrollTop, w: r.width, h: r.height };
    };
    // On phones the row scrolls itself (never the page) so the chosen slot is in view.
    const reveal = (i: number) => {
      if (cellsBox.scrollWidth <= cellsBox.clientWidth + 1) return;
      const el = items[i]!;
      const left = el.offsetLeft - parseFloat(getComputedStyle(cellsBox).paddingLeft);
      cellsBox.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
    };

    function measure() {
      gsap.set(items, { clearProps: 'transform,opacity' });
      const s = source.getBoundingClientRect();
      from = items.map((el) => {
        const r = el.getBoundingClientRect();
        return { dx: s.left + s.width / 2 - (r.left + r.width / 2), dy: s.top + s.height / 2 - (r.top + r.height / 2), s: Math.min(1, s.width / r.width) };
      });
      const c = cellRect(index);
      gsap.set(cursor, { x: c.x, y: c.y, width: c.w, height: c.h });
      applyOpen(open);
    }

    function applyOpen(o: number) {
      open = o;
      items.forEach((el, k) => {
        gsap.set(el, itemState(o, k, from[k] ?? { dx: 0, dy: 0, s: 1 }, curve));
        // The label shows once the item has locked into its slot.
        el.classList.toggle('is-moving', clamp((o - k * 0.045) / 0.6) < 0.98);
      });
      gsap.set(slots, { clipPath: `inset(0% ${100 - clamp(o / 0.5) * 100}% 0% 0%)` });
      const shown = clamp((o - 0.55) / 0.45);
      gsap.set([cursor, desc], { autoAlpha: shown });
    }

    function moveCursor(i: number, instant: boolean) {
      const c = cellRect(i);
      gsap.killTweensOf(cursor, 'x,y');
      if (instant || reduced) {
        gsap.set(cursor, { x: c.x, y: c.y });
        return;
      }
      const x = gsap.getProperty(cursor, 'x') as number;
      const tl = gsap.timeline();
      if (Math.abs(x - c.x) > 1) tl.to(cursor, { x: c.x, duration: dur.s, ease: ease.out });
      tl.to(cursor, { y: c.y, duration: dur.s, ease: ease.settle });
    }

    function select(i: number, how: 'scroll' | 'user' | 'idle') {
      if (i === index && how !== 'user') return;
      index = i;
      if (how !== 'user') radios[i]!.checked = true;
      moveCursor(i, false);
      if (how !== 'scroll') reveal(i);
      lastMove = performance.now();
      if (!reduced && how !== 'user') {
        const d = desc.querySelector<HTMLElement>(`[data-for='${radios[i]!.value}']`);
        if (d) gsap.fromTo(d, { yPercent: 10, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: dur.s, ease: ease.out });
      }
    }

    // The visitor's choice: radios change on click, tap and arrow keys.
    let progress = 0;
    const onChange = (e: Event) => {
      const i = radios.indexOf(e.target as HTMLInputElement);
      if (i < 0) return;
      stopped = true;
      held = progress;
      select(i, 'user');
    };
    radios.forEach((r) => r.addEventListener('change', onChange));
    const enter = () => (inside = true);
    const leave = () => (inside = root.contains(document.activeElement) && root.matches(':focus-within'));
    root.addEventListener('pointerenter', enter);
    root.addEventListener('pointerleave', leave);
    root.addEventListener('focusin', enter);
    root.addEventListener('focusout', leave);

    measure();

    if (pinnable) {
      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        onRefresh: (self) => {
          progress = self.progress;
          open = clamp(progress / 0.3);
          measure();
        },
        onUpdate: (self) => {
          progress = self.progress;
          applyOpen(clamp(progress / 0.3));
          if (held !== null && Math.abs(progress - held) < 0.6 / n) return;
          held = null;
          if (progress >= 0.36) select(indexAt(progress, n), 'scroll');
          lastMove = performance.now();
        },
      });
    } else if (!reduced) {
      const proxy = { o: 0 };
      const play = () => gsap.to(proxy, { o: 1, duration: 1.1, ease: 'none', onUpdate: () => applyOpen(proxy.o) });
      ScrollTrigger.create({ trigger: cellsBox, start: 'top 85%', once: true, onEnter: play, onRefresh: measure });
    }

    ScrollTrigger.create({ trigger: root, start: 'top bottom', end: 'bottom top', onToggle: (self) => (visible = self.isActive) });

    // Idle stepping on the one clock.
    if (!reduced) {
      toggle.hidden = false;
      const label = () => {
        toggle.textContent = paused ? toggle.dataset.play! : toggle.dataset.pause!;
        toggle.setAttribute('aria-pressed', String(paused));
      };
      label();
      toggle.addEventListener('click', () => {
        paused = !paused;
        label();
      });
      const tick = () => {
        const still = performance.now() - lastMove > IDLE * 1000 - 200;
        if (!stopped && !paused && !inside && visible && open >= 1 && still) select((index + 1) % n, 'idle');
        idle = gsap.delayedCall(IDLE, tick);
      };
      let idle = gsap.delayedCall(IDLE, tick);
      void idle;
    }

    return () => {
      radios.forEach((r) => r.removeEventListener('change', onChange));
    };
  });
}
