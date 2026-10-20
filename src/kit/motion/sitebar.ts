/** Centre from viewport rectangles, so an ancestor's offset origin cannot skew the result. */
export function centeredTabLeft(
  item: { left: number; width: number },
  viewport: { left: number; width: number },
  scrollLeft: number,
  scrollWidth: number,
) {
  const left = scrollLeft + item.left - viewport.left - (viewport.width - item.width) / 2;
  return Math.max(0, Math.min(scrollWidth - viewport.width, left));
}

/** Every full label remains visible; partial neighbours leave room for the two edge cues.
 * Hidden partial links remain in keyboard order and are centred synchronously on focus. */
export function wireSiteBar() {
  const strip = document.querySelector<HTMLElement>('[data-sitebar] .sitebar__strip');
  const tabs = strip?.querySelector<HTMLElement>('.sitebar__tabs');
  const current = tabs?.querySelector<HTMLElement>('[aria-current="page"]');
  if (!strip || !tabs || !current) return () => {};
  const items = [...tabs.querySelectorAll<HTMLElement>('li')];
  const edge = 16;
  let overflowing = false;
  let disposed = false;

  const update = () => {
    const view = tabs.getBoundingClientRect();
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      item.toggleAttribute('data-clipped', overflowing && (rect.left < view.left + edge - 1 || rect.right > view.right - edge + 1));
    });
    strip.toggleAttribute('data-before', overflowing && tabs.scrollLeft > 1);
    strip.toggleAttribute('data-after', overflowing && tabs.scrollLeft < tabs.scrollWidth - tabs.clientWidth - 1);
  };
  const center = (item: HTMLElement) => {
    if (overflowing) tabs.scrollLeft = centeredTabLeft(item.getBoundingClientRect(), tabs.getBoundingClientRect(), tabs.scrollLeft, tabs.scrollWidth);
    update();
  };
  const layout = () => {
    if (disposed || !tabs.isConnected) return;
    const gap = parseFloat(getComputedStyle(tabs).columnGap) || 0;
    const content = items.reduce((sum, item) => sum + item.getBoundingClientRect().width, 0) + gap * (items.length - 1) + edge * 2;
    overflowing = content > tabs.clientWidth;
    // Enough empty space to centre even the first and final labels, with focus-ring room.
    tabs.style.paddingInlineStart = `${overflowing ? Math.max(edge, (tabs.clientWidth - items[0]!.offsetWidth) / 2) : edge}px`;
    tabs.style.paddingInlineEnd = `${overflowing ? Math.max(edge, (tabs.clientWidth - items.at(-1)!.offsetWidth) / 2) : edge}px`;
    center(tabs.contains(document.activeElement) ? document.activeElement as HTMLElement : current);
  };
  const focus = (event: FocusEvent) => {
    const link = (event.target as Element).closest<HTMLElement>('a');
    if (link) center(link);
  };
  const restore = () => queueMicrotask(() => {
    if (!disposed && tabs.isConnected && !tabs.contains(document.activeElement)) center(current);
  });
  const restored = (event: PageTransitionEvent) => { if (event.persisted) layout(); };
  tabs.addEventListener('scroll', update, { passive: true });
  tabs.addEventListener('focusin', focus);
  tabs.addEventListener('focusout', restore);
  window.addEventListener('pageshow', restored);
  const observer = new ResizeObserver(layout);
  observer.observe(tabs);
  items.forEach((item) => observer.observe(item));
  layout();
  void document.fonts.ready.then(layout);
  return () => {
    disposed = true;
    observer.disconnect();
    tabs.removeEventListener('scroll', update);
    tabs.removeEventListener('focusin', focus);
    tabs.removeEventListener('focusout', restore);
    window.removeEventListener('pageshow', restored);
  };
}
