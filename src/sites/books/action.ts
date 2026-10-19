// Work page, the primary action (echo of the bookmark): the reader's state decides the one button
// at the top of a Work page. One variable, the state index, sets the pressed tab and rolls the
// button's label into place. Idle input: the state advances every 3.6 s while the poster is on
// screen, until the visitor picks one. Reduced motion: no cycling, no roll.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';

gsap.registerPlugin(ScrollTrigger);

export function initAction() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-action]');
    if (!root) return;
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-action-tab]')];
    const faces = [...root.querySelectorAll<HTMLElement>('[data-action-face]')];
    const live = root.querySelector<HTMLElement>('[data-action-live]');
    if (!tabs.length || faces.length !== tabs.length) return;
    const reduced = prefersReducedMotion();
    let current = tabs.findIndex((t) => t.getAttribute('aria-pressed') === 'true');
    if (current < 0) current = tabs.length - 1;
    let chosen = false;
    let visible = false;

    const show = (i: number, instant = false) => {
      if (i === current && !instant) return;
      const from = faces[current];
      const to = faces[i];
      tabs.forEach((t, n) => t.setAttribute('aria-pressed', String(n === i)));
      if (live) live.textContent = to?.textContent ?? '';
      if (reduced || instant || !from || !to) {
        faces.forEach((f, n) => gsap.set(f, { yPercent: n === i ? 0 : 110, autoAlpha: n === i ? 1 : 0 }));
      } else {
        gsap.to(from, { yPercent: -110, duration: dur.m, ease: ease.out, overwrite: true });
        gsap.fromTo(to, { yPercent: 110, autoAlpha: 1 }, { yPercent: 0, duration: dur.m, ease: ease.settle, overwrite: true });
      }
      current = i;
    };
    show(current, true);

    const handlers = tabs.map((tab, i) => {
      const fn = () => {
        chosen = true;
        show(i);
      };
      tab.addEventListener('click', fn);
      return () => tab.removeEventListener('click', fn);
    });

    if (!reduced) {
      const tick = gsap.delayedCall(3.6, function cycle() {
        if (!chosen && visible) show((current + 1) % tabs.length);
        tick.restart(true);
      });
      ScrollTrigger.create({ trigger: root, start: 'top bottom', end: 'bottom top', onToggle: (self) => (visible = self.isActive) });
    }
    return () => handlers.forEach((h) => h());
  });
}
