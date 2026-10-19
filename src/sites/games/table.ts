// The releases table driver: the variable is the set of chosen conditions. A release matches only
// when every chosen condition holds on that same release; the line under the table says how many
// do, and a clear button appears once a condition is set. CSS dims the failing releases by
// itself, so the table also works without script.
import { onPage } from '../../engine';

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
    const result = root.querySelector<HTMLElement>('[data-rt-result]')!;
    const clear = root.querySelector<HTMLButtonElement>('[data-rt-clear]')!;
    const data = [...root.querySelectorAll<HTMLElement>('[data-rt-rel]')].map((el) => ({
      platform: el.dataset.on!,
      langs: ['zh', 'ja', 'en'].filter((l) => el.hasAttribute(`data-${l}`)),
    }));
    const inputs = [...root.querySelectorAll<HTMLInputElement>('input[type=radio]')];
    const chosen = (prefix: string) => inputs.find((i) => i.checked && i.value.startsWith(prefix))?.value.slice(prefix.length) ?? null;

    function update() {
      const lang = chosen('lang-');
      const platform = chosen('p-');
      const n = matching(data, lang, platform).length;
      result.textContent = n ? result.dataset.one!.replace('{count}', String(n)) : result.dataset.none!;
      clear.hidden = !lang && !platform;
    }
    const onClear = () => {
      inputs.forEach((i) => (i.checked = false));
      update();
    };
    inputs.forEach((i) => i.addEventListener('change', update));
    clear.addEventListener('click', onClear);
    update();
    return () => {
      inputs.forEach((i) => i.removeEventListener('change', update));
      clear.removeEventListener('click', onClear);
    };
  });
}
