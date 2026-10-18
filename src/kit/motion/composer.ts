// Driver for the composing square (src/kit/components/Composer.astro). One variable, the item
// index, decides every cell: parts that the next item shares keep their cell, leaving parts slide
// out along the grid to the nearest edge, new parts slide in from it and lock with a short settle,
// moved parts travel across then down, and the centre's next name rises over the old one.
//
// Idle input: the index advances every `interval` seconds on the GSAP clock while the square is
// on screen, never under reduced motion, and holds while the pointer or focus is inside or the
// visitor pressed pause. Pages reach a mounted square with getComposer(el).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';
import { cellPosition, type Layout } from '../arrange';

gsap.registerPlugin(ScrollTrigger);

export interface Composer {
  readonly el: HTMLElement;
  readonly count: number;
  index(): number;
  /** Compose item i. `instant` skips the motion. Resolves when the parts have locked. */
  show(i: number, options?: { instant?: boolean }): Promise<void>;
  /** Hold the idle cycle for a reason ('user', 'pointer', 'scroll', ...); release to resume. */
  hold(reason: string): void;
  release(reason: string): void;
  onChange(fn: (i: number) => void): () => void;
  /**
   * Build the current item from nothing: every part slides in from its edge and locks, the name
   * rises into the centre. Adds .is-assembled to the root when it starts (pages may hide the
   * parts until then, under html.motion only).
   */
  assemble(): gsap.core.Timeline;
}

const mounted = new WeakMap<HTMLElement, Composer>();
export const getComposer = (el: Element | null) => (el ? mounted.get(el as HTMLElement) : undefined);

type Dir = { x: number; y: number };
/** The edge a cell leaves through: top row up, bottom row down, middle row sideways. */
function edge(cell: number): Dir {
  const { col, row } = cellPosition(cell);
  if (row === 0) return { x: 0, y: -1 };
  if (row === 2) return { x: 0, y: 1 };
  return { x: col === 0 ? -1 : 1, y: 0 };
}

function mount(el: HTMLElement): { composer: Composer; destroy: () => void } {
  const data = JSON.parse(el.querySelector('[data-composer-data]')?.textContent || '{}') as {
    layouts: Layout[];
    interval: number;
  };
  const layouts = data.layouts;
  const parts = new Map(
    [...el.querySelectorAll<HTMLElement>('.composer__part')].map((p) => [p.dataset.part!, p] as const),
  );
  const items = [...el.querySelectorAll<HTMLElement>('.composer__item')];
  const buttons = [...el.querySelectorAll<HTMLButtonElement>('[data-composer-go]')];
  const toggle = el.querySelector<HTMLButtonElement>('[data-composer-toggle]');
  const reduced = prefersReducedMotion();
  const holds = new Set<string>();
  const listeners = new Set<(i: number) => void>();
  let current = Math.max(0, items.findIndex((it) => it.dataset.on === 'true'));
  let timeline: gsap.core.Timeline | null = null;
  let timer: gsap.core.Tween | null = null;
  let visible = false;

  const place = (part: HTMLElement, cell: number | undefined) => {
    const on = cell !== undefined;
    part.dataset.on = String(on);
    if (on) {
      const { col, row } = cellPosition(cell);
      part.style.setProperty('--col', String(col));
      part.style.setProperty('--row', String(row));
      part.removeAttribute('aria-hidden');
    } else part.setAttribute('aria-hidden', 'true');
    gsap.set(part, { xPercent: 0, yPercent: 0, clearProps: 'transform' });
  };

  const settleTo = (i: number) => {
    for (const [id, part] of parts) place(part, layouts[i]?.[id as keyof Layout]);
    items.forEach((it, n) => {
      it.dataset.on = String(n === i);
      if (n === i) it.removeAttribute('aria-hidden');
      else it.setAttribute('aria-hidden', 'true');
      gsap.set(it, { clearProps: 'transform' });
    });
    buttons.forEach((b, n) => b.setAttribute('aria-pressed', String(n === i)));
  };

  const schedule = () => {
    timer?.kill();
    timer = null;
    if (reduced || holds.size || !visible || layouts.length < 2) return;
    timer = gsap.delayedCall(data.interval || 3.6, () => void show((current + 1) % layouts.length));
  };

  function show(next: number, { instant = false } = {}): Promise<void> {
    next = ((next % layouts.length) + layouts.length) % layouts.length;
    if (next === current && !timeline) return Promise.resolve();
    timeline?.progress(1);
    const from = layouts[current]!;
    const to = layouts[next]!;
    const prev = current;
    current = next;
    listeners.forEach((fn) => fn(next));
    if (instant || reduced) {
      settleTo(next);
      schedule();
      return Promise.resolve();
    }
    const tl = gsap.timeline({ defaults: { ease: ease.out } });
    let exitN = 0;
    let enterN = 0;
    for (const [id, part] of parts) {
      const a = from[id as keyof Layout];
      const b = to[id as keyof Layout];
      if (a !== undefined && b === undefined) {
        const d = edge(a);
        tl.to(part, { xPercent: d.x * 101, yPercent: d.y * 101, duration: dur.m * 0.8 }, exitN++ * dur.stagger);
      } else if (a === undefined && b !== undefined) {
        const d = edge(b);
        tl.add(() => {
          const { col, row } = cellPosition(b);
          part.style.setProperty('--col', String(col));
          part.style.setProperty('--row', String(row));
          part.dataset.on = 'true';
          part.removeAttribute('aria-hidden');
        }, 0.18);
        tl.fromTo(
          part,
          { xPercent: d.x * 101, yPercent: d.y * 101 },
          { xPercent: 0, yPercent: 0, duration: dur.m, ease: ease.settle, immediateRender: false },
          0.22 + enterN++ * dur.stagger,
        );
      } else if (a !== undefined && b !== undefined && a !== b) {
        // Across, then down: moves never go diagonally.
        const pa = cellPosition(a);
        const pb = cellPosition(b);
        tl.to(part, { xPercent: (pb.col - pa.col) * 100, duration: dur.s }, 0.1);
        tl.to(part, { yPercent: (pb.row - pa.row) * 100, duration: dur.s, ease: ease.settle }, 0.1 + dur.s);
      }
    }
    const old = items[prev];
    const fresh = items[next];
    if (old && fresh && old !== fresh) {
      tl.add(() => {
        fresh.dataset.on = 'true';
        fresh.removeAttribute('aria-hidden');
      }, 0.08);
      tl.fromTo(fresh, { yPercent: 101 }, { yPercent: 0, duration: dur.m, immediateRender: false }, 0.08);
      tl.to(old, { yPercent: -30, duration: dur.m }, 0.08);
    }
    buttons.forEach((b, n) => b.setAttribute('aria-pressed', String(n === next)));
    timeline = tl;
    return new Promise((resolve) => {
      tl.eventCallback('onComplete', () => {
        if (timeline === tl) timeline = null;
        settleTo(next);
        schedule();
        resolve();
      });
    });
  }

  const hold = (reason: string) => {
    holds.add(reason);
    schedule();
  };
  const release = (reason: string) => {
    holds.delete(reason);
    schedule();
  };

  // Controls
  const off: (() => void)[] = [];
  const on = <K extends keyof HTMLElementEventMap>(t: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void) => {
    t.addEventListener(type, fn as EventListener);
    off.push(() => t.removeEventListener(type, fn as EventListener));
  };
  buttons.forEach((b) => on(b, 'click', () => void show(Number(b.dataset.composerGo))));
  if (toggle && !reduced && layouts.length > 1) {
    toggle.hidden = false;
    on(toggle, 'click', () => {
      const paused = !holds.has('user');
      if (paused) hold('user');
      else release('user');
      toggle.textContent = paused ? toggle.dataset.play! : toggle.dataset.pause!;
      toggle.setAttribute('aria-pressed', String(paused));
    });
    toggle.setAttribute('aria-pressed', 'false');
  }
  const square = el.querySelector<HTMLElement>('[data-composer-square]') ?? el;
  on(square, 'pointerenter', () => hold('pointer'));
  on(square, 'pointerleave', () => release('pointer'));
  on(el, 'focusin', () => hold('focus'));
  on(el, 'focusout', (e) => {
    if (!el.contains(e.relatedTarget as Node | null)) release('focus');
  });

  const st = ScrollTrigger.create({
    trigger: square,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => {
      visible = self.isActive;
      schedule();
    },
  });
  visible = st.isActive;
  schedule();

  const assemble = () => {
    const tl = gsap.timeline({ defaults: { ease: ease.settle } });
    tl.add(() => el.classList.add('is-assembled'), 0);
    if (reduced) return tl;
    const layout = layouts[current]!;
    let n = 0;
    for (const [id, part] of parts) {
      const cell = layout[id as keyof Layout];
      if (cell === undefined) continue;
      const d = edge(cell);
      tl.fromTo(part, { xPercent: d.x * 101, yPercent: d.y * 101 }, { xPercent: 0, yPercent: 0, duration: dur.m, immediateRender: true }, 0.05 + n++ * dur.stagger);
    }
    const item = items[current];
    if (item) tl.fromTo(item, { yPercent: 101 }, { yPercent: 0, duration: dur.l, ease: ease.out, immediateRender: true }, 0.25);
    return tl;
  };

  const composer: Composer = {
    el,
    assemble,
    count: layouts.length,
    index: () => current,
    show,
    hold,
    release,
    onChange: (fn) => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
  mounted.set(el, composer);
  return {
    composer,
    destroy: () => {
      timer?.kill();
      timeline?.kill();
      st.kill();
      off.forEach((f) => f());
      mounted.delete(el);
    },
  };
}

/** Mount every [data-composer] on each page. Call once from the motion setup. */
export function startComposers() {
  onPage(() => {
    const all = [...document.querySelectorAll<HTMLElement>('[data-composer]')].map(mount);
    if (!all.length) return;
    return () => all.forEach((m) => m.destroy());
  }, -10);
}
