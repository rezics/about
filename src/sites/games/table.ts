// The releases table driver (SITE.md "Page moments"): the variable is the set of active
// conditions. A release matches only when every chosen condition holds on that same release;
// the count says how many do, and the red cursor steps onto the first match. CSS dims the
// failing releases by itself, so the table also works without script.
import { gsap } from 'gsap';
import { dur, ease, onPage, prefersReducedMotion } from '../../engine';

export interface Release {
  platform: string;
  langs: string[];
}

/** Releases that satisfy every condition; an absent condition matches everything. */
export function matching<T extends Release>(releases: T[], lang: string | null, platform: string | null): T[] {
  return releases.filter((r) => (!lang || r.langs.includes(lang)) && (!platform || r.platform === platform));
}

export function startReleaseTable() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-release-table]');
    if (!root) return;
    const wrap = root.querySelector<HTMLElement>('[data-rt-wrap]')!;
    const cursor = root.querySelector<HTMLElement>('[data-rt-cursor]')!;
    const result = root.querySelector<HTMLElement>('[data-rt-result]')!;
    const clear = root.querySelector<HTMLButtonElement>('[data-rt-clear]')!;
    const rels = [...root.querySelectorAll<HTMLElement>('[data-rt-rel]')];
    const data = rels.map((el) => ({
      el,
      platform: el.dataset.on!,
      langs: ['zh', 'ja', 'en'].filter((l) => el.hasAttribute(`data-${l}`)),
    }));
    const inputs = [...root.querySelectorAll<HTMLInputElement>('input[type=radio]')];
    const reduced = prefersReducedMotion();
    let first = true;

    const chosen = (prefix: string) => inputs.find((i) => i.checked && i.value.startsWith(prefix))?.value.slice(prefix.length) ?? null;

    function update() {
      const lang = chosen('lang-');
      const platform = chosen('p-');
      const hits = matching(data, lang, platform);
      const n = hits.length;
      result.textContent = n ? result.dataset.one!.replace('{count}', String(n)) : result.dataset.none!;
      clear.hidden = !lang && !platform;
      const target = hits[0]?.el;
      if (!target) {
        gsap.to(cursor, { autoAlpha: 0, duration: dur.s });
        return;
      }
      const box = wrap.getBoundingClientRect();
      const r = target.getBoundingClientRect();
      const to = { x: r.left - box.left, y: r.top - box.top, width: r.width, height: r.height };
      if (first || reduced) {
        gsap.set(cursor, { ...to, autoAlpha: 1 });
        first = false;
        return;
      }
      gsap.set(cursor, { width: to.width, height: to.height });
      gsap.timeline()
        .to(cursor, { autoAlpha: 1, duration: 0.01 })
        .to(cursor, { x: to.x, duration: dur.s, ease: ease.out })
        .to(cursor, { y: to.y, duration: dur.s, ease: ease.settle });
    }

    const onChange = () => update();
    inputs.forEach((i) => i.addEventListener('change', onChange));
    const onClear = () => {
      inputs.forEach((i) => (i.checked = false));
      update();
    };
    clear.addEventListener('click', onClear);
    const ro = new ResizeObserver(() => {
      first = true;
      update();
    });
    ro.observe(wrap);
    update();
    return () => {
      ro.disconnect();
      inputs.forEach((i) => i.removeEventListener('change', onChange));
      clear.removeEventListener('click', onClear);
    };
  });
}
