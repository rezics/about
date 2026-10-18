// Global motion: runs once on the client before the first page. Site modules that need global
// behaviour register it from their own page scripts with onPage() (see src/kit/README.md).
import { startComposers } from './composer';
import { startNavigation } from './nav';
import { startPage } from './page';

export function setupMotion() {
  startNavigation();
  startPage();
  startComposers();
}
