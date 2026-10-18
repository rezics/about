// Home hero: the composing square assembles with the page intro, idles through the nine kinds,
// and on scroll travels into the first tile of the index (down, then across, never diagonally)
// while its parts clear and its centre grows into the whole square, so it lands as the 書庫 tile.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, prefersReducedMotion } from '../engine';
import { getComposer } from '../kit/motion/composer';

gsap.registerPlugin(ScrollTrigger);

export function initHero() {
  onPage(({ intro }) => {
    const root = document.querySelector<HTMLElement>('[data-hero-composer]');
    const composer = getComposer(root);
    if (!root || !composer) return;
    intro.add(() => void composer.assemble(), 0.15);
    if (prefersReducedMotion()) {
      root.classList.add('is-assembled');
      return;
    }

    const square = root.querySelector<HTMLElement>('[data-composer-square]');
    const tile = document.querySelector<HTMLElement>('[data-index-first]');
    const partsLayer = square?.querySelector<HTMLElement>('.composer__parts');
    const centre = square?.querySelector<HTMLElement>('[data-composer-centre]');
    const extras = [...document.querySelectorAll<HTMLElement>('.hero__caption, .composer__controls')];
    if (!square || !tile || !partsLayer || !centre) return;

    const delta = { x: 0, y: 0, s: 1 };
    const measure = () => {
      gsap.set(square, { x: 0, y: 0, scale: 1 });
      // The tile's cell may still be offset by its own reveal: measure it at rest.
      const cell = tile.parentElement;
      const held = cell?.style.transform ?? '';
      if (cell) cell.style.transform = 'none';
      const a = square.getBoundingClientRect();
      const b = tile.getBoundingClientRect();
      if (cell) cell.style.transform = held;
      delta.x = b.left - a.left;
      delta.y = b.top - a.top;
      delta.s = b.width / a.width;
    };
    gsap.set(square, { transformOrigin: '0 0' });
    gsap.set(centre, { transformOrigin: '50% 50%' });

    let landed = false;
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: document.querySelector('[data-hero]') ?? root,
        start: 'top top',
        endTrigger: tile,
        end: 'top 30%',
        scrub: 0.4,
        invalidateOnRefresh: true,
        onRefreshInit: measure,
        onUpdate: (self) => {
          const p = self.progress;
          if (p > 0) {
            composer.hold('scroll');
            if (composer.index() !== 0) void composer.show(0, { instant: p > 0.2 });
          } else composer.release('scroll');
          const end = p >= 0.999;
          if (end !== landed) {
            landed = end;
            square.style.visibility = end ? 'hidden' : '';
          }
          tile.style.visibility = p > 0.001 && !end ? 'hidden' : '';
        },
      },
    });
    tl.to(extras, { autoAlpha: 0, duration: 0.12 }, 0)
      .to(partsLayer, { autoAlpha: 0, duration: 0.4 }, 0)
      .to(centre, { scale: 3, duration: 0.55, ease: 'power1.inOut' }, 0)
      // Down first, shrinking to the tile's size, then across into the slot.
      .to(square, { y: () => delta.y, scale: () => delta.s, duration: 0.6, ease: 'power1.inOut' }, 0)
      .to(square, { x: () => delta.x, duration: 0.4, ease: 'power2.out' }, 0.6);

    return () => {
      square.style.visibility = '';
      tile.style.visibility = '';
    };
  });
}
