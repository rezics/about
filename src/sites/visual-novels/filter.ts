// The release filter on /visual-novels/releases/ (ReleaseFilter.astro): one variable, the
// selection, sets each row's state, the struck cells, the verdict and the count. The rule is
// releases.ts, the same one the build used for the first paint.
import { onPage } from '../../engine';
import type { Dim, VnRelease } from '../../content/sites/visual-novels';
import { judge, verdictText, type Selection, type VerdictLabels } from './releases';

interface Data {
  releases: Pick<VnRelease, 'id' | 'values' | 'titleLanguage'>[];
  labels: VerdictLabels;
  count: string;
}

export function startReleaseFilter() {
  onPage(() => {
    const root = document.querySelector<HTMLElement>('[data-vn-filter]');
    if (!root) return;
    const data = JSON.parse(root.dataset.vnFilter!) as Data;
    const inputs = [...root.querySelectorAll<HTMLInputElement>('input[data-dim]')];
    const rows = [...root.querySelectorAll<HTMLTableRowElement>('tr[data-id]')];
    const count = root.querySelector<HTMLElement>('[data-vn-count]')!;

    function read(): Selection {
      const selection: Selection = {};
      for (const input of inputs) if (input.checked && input.value) selection[input.dataset.dim as Dim] = input.value;
      return selection;
    }

    function apply() {
      const selection = read();
      let n = 0;
      for (const row of rows) {
        const r = data.releases.find((x) => x.id === row.dataset.id)!;
        const v = judge(r as VnRelease, selection);
        if (v.state !== 'fail') n++;
        row.dataset.state = v.state;
        row.querySelectorAll<HTMLElement>('td[data-dim]').forEach((td) => td.toggleAttribute('data-out', v.fails.includes(td.dataset.dim as Dim)));
        row.querySelector<HTMLElement>('[data-verdict]')!.textContent = verdictText(r as VnRelease, selection, data.labels);
      }
      count.textContent = data.count.replace('{n}', String(n)).replace('{total}', String(rows.length));
    }

    inputs.forEach((i) => i.addEventListener('change', apply));
    apply();
    return () => inputs.forEach((i) => i.removeEventListener('change', apply));
  });
}
