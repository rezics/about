// Wiki+ page, read to your chapter (echo of the bookmark). One variable, the reading position in
// chapters, decides the rail's bookmark, which entries exist on the page and the status line.
// Input is the position control (a tap, not scroll). It starts at chapter 1, as for a reader who
// is not signed in. Entries past the position leave the page; entries within it slot in along
// their row. Without script the page shows every entry with its source chapter. Reduced motion:
// the same states, without movement.
import { gsap } from 'gsap';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';

/** Entries visible at a reading position: those whose source chapter has been reached. */
export const visibleAt = (chapters: number[], position: number) => chapters.map((c) => c <= position);

export function initPosition() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-position]');
    if (!root) return;
    const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-pos]')];
    const entries = [...root.querySelectorAll<HTMLElement>('[data-entry]')];
    const groups = [...root.querySelectorAll<HTMLElement>('[data-group]')];
    const rail = root.querySelector<HTMLElement>('[data-rail]');
    const status = root.querySelector<HTMLElement>('[data-status]');
    if (!buttons.length || !rail || !status) return;
    const reduced = prefersReducedMotion();
    const total = Number(rail.dataset.total || '61');
    const pattern = status.dataset.pattern || '';
    const all = status.dataset.all || '';
    let position = -1;

    const set = (chapter: number, instant = false) => {
      if (chapter === position) return;
      const previous = position;
      position = chapter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.pos) === chapter)));
      status.textContent = chapter >= total ? all : pattern.replace('{n}', String(chapter));
      const distance = previous < 0 ? 0 : Math.abs(chapter - previous) / total;
      if (instant || reduced) gsap.set(rail, { '--pos': chapter });
      else gsap.to(rail, { '--pos': chapter, duration: dur.s + distance * (dur.l - dur.s) * 1.6, ease: ease.settle, overwrite: true });
      const entering: HTMLElement[] = [];
      entries.forEach((el) => {
        const show = Number(el.dataset.chapter) <= chapter;
        if (show && el.hidden) entering.push(el);
        el.hidden = !show;
      });
      groups.forEach((g) => (g.hidden = !g.querySelector('[data-entry]:not([hidden])')));
      if (!instant && !reduced && entering.length)
        gsap.fromTo(entering, { x: -24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: dur.m, ease: ease.out, stagger: dur.stagger, overwrite: true, clearProps: 'transform,opacity,visibility' });
    };
    set(Number(buttons[0]!.dataset.pos), true);
    const handlers = buttons.map((b) => {
      const fn = () => set(Number(b.dataset.pos));
      b.addEventListener('click', fn);
      return () => b.removeEventListener('click', fn);
    });
    return () => handlers.forEach((h) => h());
  });
}
