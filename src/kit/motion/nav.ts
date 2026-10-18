// Global navigation behaviour on top of the native popovers and dialog in Header.astro:
// pointer intent (100 ms) and grace (280 ms), a safe area for diagonal moves into a panel,
// aria-expanded in step with each panel, Escape returning focus to the tab, the sliding red
// marker, and the phone sheet's fallback for browsers without invoker commands.
import { gsap } from 'gsap';
import { dur, ease, isTouch, onPage, prefersReducedMotion } from '../../engine';

const OPEN_DELAY = 100;
const CLOSE_DELAY = 280;

function panels(): { button: HTMLButtonElement; panel: HTMLElement }[] {
  return [...document.querySelectorAll<HTMLButtonElement>('[data-panel-button]')]
    .map((button) => ({ button, panel: document.getElementById(button.dataset.panelButton!) as HTMLElement }))
    .filter((p) => p.panel);
}

export function closeNavigation() {
  for (const { panel } of panels()) if (panel.matches(':popover-open')) panel.hidePopover();
  const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
  if (menu?.open) menu.close();
}

function wirePanels() {
  const all = panels();
  if (!all.length) return () => {};
  const off: (() => void)[] = [];
  const listen = (t: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions) => {
    t.addEventListener(type, fn, opts);
    off.push(() => t.removeEventListener(type, fn, opts));
  };
  let openTimer = 0;
  let closeTimer = 0;
  let hoverOpened: HTMLElement | null = null;
  let last = { x: 0, y: 0 };
  let heading = { x: 0, y: 0 };
  const pointer = !isTouch();

  const openOf = () => all.find((p) => p.panel.matches(':popover-open'));
  const show = (p: (typeof all)[number], byHover: boolean) => {
    if (!p.panel.matches(':popover-open')) p.panel.showPopover();
    hoverOpened = byHover ? p.panel : null;
  };

  for (const p of all) {
    p.button.setAttribute('aria-expanded', 'false');
    listen(p.panel, 'toggle', ((e: ToggleEvent) => {
      const open = e.newState === 'open';
      p.button.setAttribute('aria-expanded', String(open));
      if (!open && hoverOpened === p.panel) hoverOpened = null;
    }) as EventListener);
    // A click on a tab its hover already opened keeps the panel open instead of toggling it shut.
    listen(p.button, 'click', ((e: MouseEvent) => {
      if (hoverOpened === p.panel && p.panel.matches(':popover-open')) {
        e.preventDefault();
        hoverOpened = null;
      }
    }) as EventListener);
    if (!pointer) continue;
    listen(p.button, 'pointerenter', ((e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
      const current = openOf();
      if (current === p) return;
      // Safe area: while another panel is open and the pointer is heading down into it, wait
      // out the grace period so a diagonal move across this tab does not switch panels.
      const down = current && heading.y > 0 && Math.abs(heading.y) > Math.abs(heading.x) * 0.4;
      openTimer = window.setTimeout(() => show(p, true), down ? CLOSE_DELAY : current ? 40 : OPEN_DELAY);
    }) as EventListener);
    listen(p.button, 'pointerleave', () => {
      clearTimeout(openTimer);
      scheduleClose();
    });
    listen(p.panel, 'pointerenter', () => {
      clearTimeout(closeTimer);
      clearTimeout(openTimer);
    });
    listen(p.panel, 'pointerleave', ((e: PointerEvent) => {
      if (e.pointerType === 'mouse') scheduleClose();
    }) as EventListener);
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      const p = openOf();
      if (!p || hoverOpened !== p.panel) return; // panels opened by click or key stay until dismissed
      if (p.panel.matches(':hover') || p.button.matches(':hover')) return;
      p.panel.hidePopover();
    }, CLOSE_DELAY);
  }

  listen(document, 'pointermove', ((e: PointerEvent) => {
    heading = { x: e.clientX - last.x, y: e.clientY - last.y };
    last = { x: e.clientX, y: e.clientY };
  }) as EventListener, { passive: true });

  // Escape: close and return focus to the tab, wherever focus was.
  listen(document, 'keydown', ((e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    const p = openOf();
    if (!p) return;
    p.panel.hidePopover();
    p.button.focus();
  }) as EventListener);

  return () => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    off.forEach((f) => f());
  };
}

// The red square marker sits under the current tab and slides to the tab under the pointer.
function wireMarker() {
  const nav = document.querySelector<HTMLElement>('[data-tabs]');
  const marker = nav?.querySelector<HTMLElement>('[data-tabs-marker]');
  if (!nav || !marker) return () => {};
  const tabs = [...nav.querySelectorAll<HTMLElement>('.tab')];
  const current = tabs.find((t) => t.hasAttribute('aria-current'));
  const instant = prefersReducedMotion();
  const centre = (t: HTMLElement) => {
    const r = t.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    return r.left - n.left + r.width / 2;
  };
  const go = (t: HTMLElement | undefined) => {
    if (!t) return gsap.to(marker, { opacity: 0, duration: instant ? 0 : dur.s, ease: ease.soft });
    gsap.to(marker, { x: centre(t), opacity: 1, duration: instant ? 0 : dur.m, ease: ease.out });
  };
  gsap.set(marker, { x: current ? centre(current) : 0, opacity: current ? 1 : 0 });
  const off: (() => void)[] = [];
  for (const t of tabs) {
    const enter = () => go(t);
    t.addEventListener('pointerenter', enter);
    t.addEventListener('focus', enter);
    off.push(() => {
      t.removeEventListener('pointerenter', enter);
      t.removeEventListener('focus', enter);
    });
  }
  const back = () => go(current);
  nav.addEventListener('pointerleave', back);
  nav.addEventListener('focusout', back);
  const resize = () => gsap.set(marker, { x: current ? centre(current) : 0 });
  addEventListener('resize', resize);
  return () => {
    nav.removeEventListener('pointerleave', back);
    nav.removeEventListener('focusout', back);
    removeEventListener('resize', resize);
    off.forEach((f) => f());
  };
}

// Phone sheet: native <dialog> opened by invoker commands; a fallback for older browsers, and a
// scroll lock while it is open.
function wireMenu() {
  const menu = document.querySelector<HTMLDialogElement>('[data-menu]');
  if (!menu) return () => {};
  const supported = 'command' in HTMLButtonElement.prototype;
  const opener = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const closer = menu.querySelector<HTMLButtonElement>('[data-menu-close]');
  const sync = () => document.documentElement.classList.toggle('menu-open', menu.open);
  const open = () => {
    if (!supported && !menu.open) menu.showModal();
    queueMicrotask(sync);
  };
  const close = () => {
    if (!supported && menu.open) menu.close();
    queueMicrotask(sync);
  };
  opener?.addEventListener('click', open);
  closer?.addEventListener('click', close);
  menu.addEventListener('close', sync);
  return () => {
    opener?.removeEventListener('click', open);
    closer?.removeEventListener('click', close);
    menu.removeEventListener('close', sync);
    document.documentElement.classList.remove('menu-open');
  };
}

export function startNavigation() {
  document.addEventListener('astro:before-preparation', closeNavigation);
  onPage(() => {
    const a = wirePanels();
    const b = wireMarker();
    const c = wireMenu();
    return () => {
      a();
      b();
      c();
    };
  });
}
