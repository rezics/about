// Driver for 書籤歸位 (Bookmark.astro). One variable, the reading position, comes from how far the
// visitor has read through the steps beside the figure; bookmark-state.ts maps it to every
// visual. The bookmark slides along the gaps (one axis at a time) and locks with the settle ease;
// squares fill in reading direction (CSS). Idle input: while the figure is on screen, a line
// grows across the square being read now, on the GSAP clock. Reduced motion: nothing runs and
// the server-rendered final state stays.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';
import { ROWS, positionFrom, state, type BookmarkState, type Row } from './bookmark-state';

gsap.registerPlugin(ScrollTrigger);

const rowIndex: Record<Row | 'work', number> = { work: 1, ja: 2, zh: 3, omni: 4, en: 5 };

export function initBookmark() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-bookmark]');
    if (!root || prefersReducedMotion()) return;
    const grid = root.querySelector<HTMLElement>('[data-bm-grid]');
    const stage = root.querySelector<HTMLElement>('[data-bm-stage]');
    const caption = root.querySelector<HTMLElement>('[data-bm-caption]');
    const line = root.querySelector<HTMLElement>('[data-bm-line]');
    const steps = [...document.querySelectorAll<HTMLElement>('[data-bm-step]')];
    const list = document.querySelector<HTMLElement>('[data-bm-steps]');
    if (!grid || !stage || !caption || !line || !list || !steps.length) return;
    const captions = JSON.parse(root.dataset.captions || '[]') as string[];
    const cells = [...grid.querySelectorAll<HTMLElement>('[data-cell]')].map((el) => [el.dataset.cell!, el] as const);

    let current = '';
    let last: BookmarkState | null = null;
    const reading = gsap.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 5.4, ease: 'none', repeat: -1, repeatDelay: 0.6, paused: true });

    const apply = (s: BookmarkState, instant = false) => {
      const key = JSON.stringify(s);
      if (key === current) return;
      current = key;
      grid.dataset.show = ROWS.filter((r) => s.rows[r]).join(' ');
      grid.dataset.lang = s.lang;
      for (const [cell, el] of cells) {
        const [row, n] = cell.split(':') as [string, string];
        const read = row === 'work' ? s.volumes.includes(Number(n)) : s.read.includes(cell as never);
        el.toggleAttribute('data-read', read);
        el.toggleAttribute('data-next', s.next === cell);
        el.toggleAttribute('data-wait', s.wait === cell);
      }
      if (!last || last.mark !== s.mark) {
        if (instant) gsap.set(grid, { '--mark': s.mark });
        else gsap.to(grid, { '--mark': s.mark, duration: dur.m, ease: ease.settle, overwrite: true });
      }
      if (caption.textContent !== captions[s.step]) caption.textContent = captions[s.step] ?? '';
      if (s.reading !== last?.reading) {
        const [row, vol] = (s.reading ?? 'work:1').split(':') as [Row | 'work', string];
        line.style.setProperty('--lr', String(rowIndex[row]));
        line.style.setProperty('--lv', vol);
        line.hidden = !s.reading;
        reading.restart(false, false);
        if (!visible) reading.pause();
      }
      last = s;
    };

    const update = () => {
      const anchor = innerHeight * 0.55;
      apply(state(positionFrom(steps.map((el) => el.getBoundingClientRect()), anchor)));
    };

    let visible = false;
    apply(state(0), true);
    ScrollTrigger.create({ trigger: list, start: 'top bottom', end: 'bottom top', onUpdate: update, onRefresh: update });
    ScrollTrigger.create({
      trigger: stage,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => {
        visible = self.isActive;
        if (visible) reading.play();
        else reading.pause();
      },
    });
  });
}
