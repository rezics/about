// Astro adapter (ClientRouter). Call start(setup) once from the layout's <script>.
// The leave animation runs IN PARALLEL with fetching the next page, so transitions add no latency.
import { boot, cleanup, enter, leave, syncFlags } from './index';

let navigating = false;
let traverse = false;

export function start(setup?: () => void) {
  document.addEventListener('astro:before-preparation', (e) => {
    navigating = true;
    traverse = e.navigationType === 'traverse';
    const load = e.loader;
    e.loader = async () => {
      await Promise.all([leave(), load()]);
    };
  });
  document.addEventListener('astro:before-swap', () => cleanup());
  document.addEventListener('astro:after-swap', () => syncFlags());
  document.addEventListener('astro:page-load', () => {
    if (!navigating) return void boot(setup);
    navigating = false;
    const hash = location.hash.length > 1 ? location.hash : '';
    void enter({ scrollTop: !traverse && !hash, hash: traverse ? '' : hash, settled: traverse });
  });
  // Module scripts run after parsing: boot now instead of waiting for the first astro:page-load.
  void boot(setup);
}
