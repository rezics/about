// Declarative motion through data attributes (DESIGN.md "Direction v2", Motion: quiet):
//   data-split="lines|words|chars"   text fades and rises a few pixels, line by line
//   data-reveal="up|fade|image|slot" block reveal: `up` fades and rises a few pixels, `fade`
//                                    fades, `image` fades while its picture settles from a
//                                    slight scale, `slot` brings the children in one by one
//                                    (`clip` is the older name of `image`)
//   data-intro                        play with the page intro instead of on scroll
//   data-delay="0.2"                  extra delay (seconds)
// Every effect is skipped under reduced motion and on phones (< 600 px); CSS keeps content
// visible without JS.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { dur, prefersReducedMotion } from './env';

gsap.registerPlugin(ScrollTrigger, SplitText);

const durations = { lines: 0.9, words: 0.8, chars: 0.7 } as const;
const staggers = { lines: 0.07, words: 0.03, chars: 0.015 } as const;
const calm = 'power3.out';

function splitTween(el: HTMLElement, isIntro: boolean) {
  const type = (el.dataset.split || 'lines') as keyof typeof durations;
  const delay = parseFloat(el.dataset.delay || '0');
  const s = { tween: undefined as gsap.core.Tween | undefined, done: false, requested: false };
  SplitText.create(el, {
    type: type === 'lines' ? 'lines' : `lines,${type}`,
    autoSplit: true,
    linesClass: 'split-line',
    onSplit(self) {
      gsap.set(el, { visibility: 'visible' });
      if (s.done) return;
      const targets = type === 'lines' ? self.lines : type === 'words' ? self.words : self.chars;
      s.tween = gsap.from(targets, {
        y: 12,
        autoAlpha: 0,
        duration: durations[type],
        stagger: staggers[type],
        ease: calm,
        delay,
        paused: isIntro && !s.requested,
        onComplete: () => {
          s.done = true;
        },
        scrollTrigger: isIntro ? undefined : { trigger: el, start: 'top 88%', once: true },
      });
      return s.tween;
    },
  });
  return () => {
    s.requested = true;
    s.tween?.play();
  };
}

function blockTween(el: HTMLElement, paused: boolean) {
  const kind = el.dataset.reveal || 'up';
  const delay = parseFloat(el.dataset.delay || '0');
  gsap.set(el, { visibility: 'visible' });
  const trigger = paused ? undefined : { trigger: el, start: 'top 90%', once: true };
  if (kind === 'slot') {
    return gsap.from(el.children, {
      y: 16,
      autoAlpha: 0,
      duration: dur.l,
      ease: calm,
      stagger: 0.07,
      delay,
      paused,
      scrollTrigger: trigger,
    });
  }
  if (kind === 'image' || kind === 'clip') {
    const img = el.querySelector('img');
    const tl = gsap.timeline({ delay, paused, scrollTrigger: trigger });
    tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.9, ease: 'power2.out' }, 0);
    if (img) tl.fromTo(img, { scale: 1.06 }, { scale: 1, duration: 1.6, ease: calm }, 0);
    return tl;
  }
  const from: gsap.TweenVars = kind === 'fade' ? { autoAlpha: 0 } : { y: 16, autoAlpha: 0 };
  return gsap.fromTo(el, from, {
    y: 0,
    autoAlpha: 1,
    duration: kind === 'fade' ? dur.l : 0.9,
    ease: calm,
    delay,
    paused,
    scrollTrigger: trigger,
  });
}

/** Below this width content shows at once: phones scroll fast and reveals lag behind the text. */
const PHONE = '(max-width: 599px)';

/** Wire every reveal inside `root`. Returns the intro timeline (paused) for the page entrance. */
export function initReveals(root: ParentNode = document) {
  const intro = gsap.timeline({ paused: true });
  if (prefersReducedMotion() || matchMedia(PHONE).matches) return intro;
  root.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const isIntro = el.hasAttribute('data-intro');
    const play = splitTween(el, isIntro);
    if (isIntro) intro.add(play, 0);
  });
  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const isIntro = el.hasAttribute('data-intro');
    const t = blockTween(el, isIntro);
    if (isIntro) intro.add(() => void t.play(), 0);
  });
  return intro;
}
