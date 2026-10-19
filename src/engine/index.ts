// Engine core: framework-agnostic page lifecycle. No DOM access at import time (SSR-safe).
// A framework adapter calls:
//   boot(setup)            once, on first load: setup → page init → intro
//   leave() → cleanup()    before the route swaps (leave runs in parallel with the fetch)
//   enter()                after the new page is in the DOM: init → enter animation → intro
// Project code hooks in with onPage(fn): fn runs on every page load inside a gsap.context, so the
// tweens and ScrollTriggers it creates are reverted automatically. Return a cleanup for the rest.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScroll, resetScroll, scrollToTarget, startScroll, stopScroll } from './scroll';
import { initReveals } from './reveal';
import { playEnter, playLeave, trackSource } from './transition';
import { prefersReducedMotion } from './env';

export { onScroll, scrollState, scrollToTarget, stopScroll, startScroll } from './scroll';
export { ease, dur, isTouch, isMobile, prefersReducedMotion } from './env';

export type PageFn = (page: { intro: gsap.core.Timeline; path: string }) => void | (() => void);
const pageFns = new Map<PageFn, number>();
const cleanups: (() => void)[] = [];
let ctx: gsap.Context | null = null;
let intro: gsap.core.Timeline | null = null;
let ready = false;
let booted = false;

/**
 * Run fn on every page load (and now, if a page is ready). Returns an unsubscribe. Lower
 * `order` runs first: kit modules that mount shared primitives use -10, so page code (order 0)
 * can rely on them whatever order the scripts loaded in.
 */
export function onPage(fn: PageFn, order = 0) {
  pageFns.set(fn, order);
  if (ready) runPageFn(fn);
  return () => {
    pageFns.delete(fn);
  };
}
const ordered = () => [...pageFns].sort((a, b) => a[1] - b[1]).map(([fn]) => fn);

function runPageFn(fn: PageFn) {
  ctx?.add(() => {
    const c = fn({ intro: intro!, path: location.pathname });
    if (typeof c === 'function') cleanups.push(c);
  });
}

// Flags on <html>. Re-applied on every page because the router swaps root attributes.
export function syncFlags() {
  const h = document.documentElement.classList;
  h.add('js', 'is-booted');
  h.toggle('motion', !prefersReducedMotion());
}

function initPage() {
  syncFlags();
  ctx = gsap.context(() => {
    intro = initReveals(document);
  });
  ready = true;
  ordered().forEach(runPageFn);
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/** First load. `setup` runs once on the client before the first page: register global motion. */
export async function boot(setup?: () => void) {
  if (booted) return;
  booted = true;
  syncFlags();
  initScroll();
  trackSource();
  setup?.();
  initPage();
  startScroll();
  intro?.play();
}

/** Play the leave animation (resolve when the screen is covered). */
export async function leave() {
  stopScroll();
  await playLeave();
}

/** Tear down the current page: reverts every tween, ScrollTrigger and split. */
export function cleanup() {
  if (!ready) return;
  ready = false;
  cleanups.splice(0).forEach((c) => c());
  ctx?.revert();
  ctx = null;
}

/**
 * Init the new page. `scrollTop: false` keeps the position (back/forward, or a #hash).
 * `settled`: the page was visited before (back/forward), so its intro is shown finished.
 */
export async function enter({ scrollTop = true, hash = '', settled = false } = {}) {
  if (!booted) return;
  cleanup();
  if (scrollTop) resetScroll();
  initPage();
  if (hash) scrollToTarget(decodeURIComponent(hash), true);
  if (settled) intro?.progress(1);
  await playEnter();
  startScroll();
  if (!settled) intro?.play();
}
