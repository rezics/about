// Editions page, two orders: one row of volume squares that swaps between publication order and
// a recommended reading order. The squares keep their identity and travel along the row only
// (a Flip on x), the row's label names the order shown. Without script both rows are listed;
// under reduced motion the swap is instant.
import { gsap } from 'gsap';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';

export function initOrder() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-orders]');
    if (!root) return;
    const row = root.querySelector<HTMLElement>('[data-order-row]');
    const toggle = root.querySelector<HTMLButtonElement>('[data-order-toggle]');
    const label = root.querySelector<HTMLElement>('[data-order-label]');
    if (!row || !toggle || !label) return;
    const squares = [...row.querySelectorAll<HTMLElement>('[data-sq]')];
    const reading = (root.dataset.reading || '').split(',').map(Number);
    const names = [root.dataset.publication || '', root.dataset.readingName || ''];
    const toggles = [toggle.dataset.toReading || '', toggle.dataset.toPublication || ''];
    root.classList.add('is-live');
    let mode = 0;

    const apply = () => {
      const before = squares.map((el) => el.getBoundingClientRect().left);
      squares.forEach((el, i) => (el.style.order = String(mode === 0 ? i : reading.indexOf(i))));
      label.textContent = names[mode] ?? '';
      toggle.querySelectorAll('.btn__label > span').forEach((s) => (s.textContent = toggles[mode] ?? ''));
      toggle.setAttribute('aria-pressed', String(mode === 1));
      if (prefersReducedMotion()) return;
      squares.forEach((el, i) => {
        const dx = before[i]! - el.getBoundingClientRect().left;
        if (dx) gsap.fromTo(el, { x: dx }, { x: 0, duration: dur.l, ease: ease.settle, overwrite: true });
      });
    };
    const fn = () => {
      mode = 1 - mode;
      apply();
    };
    toggle.addEventListener('click', fn);
    return () => toggle.removeEventListener('click', fn);
  });
}
