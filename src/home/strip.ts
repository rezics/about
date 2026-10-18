// The home strip (DESIGN.md signature): nine kind squares; one at a time its picture floods up
// through the square and settles (歸位), then the next. Idles every STEP seconds on the GSAP
// clock while the strip is on screen, never under reduced motion, and holds while the pointer or
// focus is inside the strip or the visitor pressed pause.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, prefersReducedMotion } from '../engine';

gsap.registerPlugin(ScrollTrigger);

const STEP = 2.2;

export function initStrip() {
  onPage(() => {
    const strip = document.querySelector<HTMLElement>('[data-strip]');
    if (!strip || prefersReducedMotion()) return;
    const squares = [...strip.querySelectorAll<HTMLElement>('.strip__item [data-square]')];
    const toggle = strip.querySelector<HTMLButtonElement>('[data-strip-toggle]');
    if (!squares.length) return;
    const holds = new Set<string>();
    let visible = false;
    let index = -1;
    let timer: gsap.core.Tween | null = null;

    const light = (i: number) => {
      squares.forEach((sq, n) => sq.classList.toggle('is-lit', n === i));
      index = i;
    };
    const schedule = () => {
      timer?.kill();
      timer = null;
      if (holds.size || !visible) return;
      timer = gsap.delayedCall(index < 0 ? 0.6 : STEP, () => {
        light((index + 1) % squares.length);
        schedule();
      });
    };
    const hold = (why: string) => {
      holds.add(why);
      schedule();
    };
    const release = (why: string) => {
      holds.delete(why);
      schedule();
    };

    const off: (() => void)[] = [];
    const on = (el: EventTarget, type: string, fn: EventListener) => {
      el.addEventListener(type, fn);
      off.push(() => el.removeEventListener(type, fn));
    };
    // The pointer takes over: the square under it floods (its own hover), the sequence waits.
    on(strip, 'pointerenter', () => {
      light(-1);
      hold('pointer');
    });
    on(strip, 'pointerleave', () => release('pointer'));
    on(strip, 'focusin', () => {
      light(-1);
      hold('focus');
    });
    on(strip, 'focusout', ((e: FocusEvent) => {
      if (!strip.contains(e.relatedTarget as Node | null)) release('focus');
    }) as EventListener);
    if (toggle) {
      toggle.hidden = false;
      on(toggle, 'click', () => {
        const pause = !holds.has('user');
        if (pause) hold('user');
        else release('user');
        toggle.textContent = pause ? toggle.dataset.play! : toggle.dataset.pause!;
        toggle.setAttribute('aria-pressed', String(pause));
      });
    }
    const st = ScrollTrigger.create({
      trigger: strip,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => {
        visible = self.isActive;
        schedule();
      },
    });
    visible = st.isActive;
    schedule();

    return () => {
      timer?.kill();
      st.kill();
      off.forEach((f) => f());
      squares.forEach((sq) => sq.classList.remove('is-lit'));
    };
  });
}
