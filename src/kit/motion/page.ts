// Small page-wide behaviours: the header steps aside on scroll down, pictures that fail leave
// their field showing, empty squares keep a blinking cursor, sticky chapters set their stage's
// state, and index lists preview the item under the pointer or focus.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, onScroll, prefersReducedMotion } from '../../engine';

gsap.registerPlugin(ScrollTrigger);

function frame() {
  let last = 0;
  onScroll(({ y }) => {
    if (Math.abs(y - last) < 6) return;
    const html = document.documentElement;
    const busy = html.classList.contains('menu-open') || !!document.querySelector('[data-panel]:popover-open');
    html.classList.toggle('frame-away', !busy && y > 240 && y > last);
    last = y;
  });
}

function pictures() {
  onPage(() => {
    const miss = (img: HTMLImageElement) => img.classList.add('is-missing');
    const imgs = [...document.querySelectorAll<HTMLImageElement>('img[data-square-img]')];
    const handlers = imgs.map((img) => {
      const fn = () => miss(img);
      if (img.complete && img.naturalWidth === 0 && img.currentSrc) miss(img);
      img.addEventListener('error', fn);
      return () => img.removeEventListener('error', fn);
    });
    return () => handlers.forEach((f) => f());
  });
}

function cursors() {
  onPage(() => {
    if (prefersReducedMotion()) return;
    const els = document.querySelectorAll<HTMLElement>('[data-cursor]');
    if (els.length) gsap.to(els, { opacity: 0, duration: 0.55, ease: 'steps(1)', repeat: -1, yoyo: true, repeatDelay: 0.25 });
  });
}

// <div data-chapters><div data-stage data-state="0">…</div><article data-chapter>…</article>…</div>
function chapters() {
  onPage(() => {
    document.querySelectorAll<HTMLElement>('[data-chapters]').forEach((root) => {
      const stage = root.querySelector<HTMLElement>('[data-stage]');
      const items = [...root.querySelectorAll<HTMLElement>('[data-chapter]')];
      if (!stage || !items.length) return;
      items.forEach((item, i) =>
        ScrollTrigger.create({
          trigger: item,
          start: 'top 60%',
          end: 'bottom 60%',
          onToggle: (self) => {
            if (!self.isActive) return;
            stage.dataset.state = String(i);
            items.forEach((it, n) => it.toggleAttribute('data-active', n === i));
          },
        }),
      );
    });
  });
}

// <div data-preview-list><a data-preview-key="x">…</a>…<div data-preview><div data-preview-item="x">…
function previews() {
  onPage(() => {
    const offs: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('[data-preview-list]').forEach((root) => {
      const set = (key: string) => {
        root.querySelectorAll<HTMLElement>('[data-preview-item]').forEach((el) => el.toggleAttribute('data-active', el.dataset.previewItem === key));
        root.querySelectorAll<HTMLElement>('[data-preview-key]').forEach((el) => el.toggleAttribute('data-active', el.dataset.previewKey === key));
      };
      root.querySelectorAll<HTMLElement>('[data-preview-key]').forEach((row) => {
        const fn = () => set(row.dataset.previewKey!);
        row.addEventListener('pointerenter', fn);
        row.addEventListener('focus', fn);
        offs.push(() => {
          row.removeEventListener('pointerenter', fn);
          row.removeEventListener('focus', fn);
        });
      });
    });
    return () => offs.forEach((f) => f());
  });
}

// Focus carries the brand: an ink outline (CSS) and the red square at the focused element's
// top-left corner, which follows focus and scrolling. Inside the top layer (open panels, the
// phone sheet) the outline alone shows.
function focusMark() {
  let target: HTMLElement | null = null;
  const mark = () => document.getElementById('focus-mark');
  const place = () => {
    const m = mark();
    if (!m) return;
    const on = !!target && target.isConnected && target.matches(':focus-visible') && !target.closest('[popover], dialog');
    m.classList.toggle('is-on', on);
    if (!on || !target) return;
    const r = target.getBoundingClientRect();
    gsap.set(m, { x: r.left - 9, y: r.top - 9 });
  };
  document.addEventListener('focusin', (e) => {
    target = e.target as HTMLElement;
    place();
  });
  document.addEventListener('focusout', () => {
    target = null;
    place();
  });
  onScroll(() => target && place());
  addEventListener('resize', () => target && place());
}

export function startPage() {
  focusMark();
  frame();
  pictures();
  cursors();
  chapters();
  previews();
}
