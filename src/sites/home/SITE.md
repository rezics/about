# Home and shared foundation

## v3

Continue the existing `KIT-V3-READY` build on `site/v3`. The binding reference is
`.temp/ref/V3-SPEC.md` and the approved `v3-home-mock.html`, opened in Chromium at
1440 × 900 and 390 × 844 before this finishing pass. Stack: the existing static
Astro site, plain CSS, and the shared GSAP lifecycle.

The idea is one shared index expressed as one paper still-life series. The
photographs' muted papers become the flat navigation tiles. A visitor first reads
one sentence and one action; the phone puts that copy before a short photograph.
The site stays still at rest, as required by v3; motion is limited to short reveals,
hover, press, focus, and the existing page cross-fade.

### Page sequence

1. Full-bleed reference photograph, serif headline in its empty left area, one
   paragraph and the ink pill. Phone: copy, action, 260 px photograph band.
2. Nine kinds in the approved four-column masonry, aligned at the bottom. The
   phone layout follows the approved mock, with the three hubs subordinate.
3. Large serif statement: related adaptations have their own identities and share
   one graph. The second half is muted. No named work appears on the home page.
4. Identity across languages, versions and adaptations, beside the offset paper
   stack. One link to the universal index.
5. Community and Zones beside a standing folded paper structure. Realm membership
   and community rules, then a complete site on the shared graph.
6. Five modules as calm hairline link rows, in the prescribed order.
7. Developers and AI agents: the same API and authority, one small catalogue
   search request, a link to developer resources.
8. Principles in a hairline list, with claims sourced in `docs/facts/site.md`.
9. Closing statement, ink pill, paper footer with link columns.

404: the cut-out paper photograph, a direct explanation and a route home, a quiet
set of kind links, then the shared closing and footer. The links are one row on wide
desktops, three columns on tablets, and two on phones. `noindex` is preserved.

### Assets

Reuse the four existing images in `public/images/home/`: `hero`, `identity`,
`zones`, `missing`. All were inspected next to `v3-reference-paper.png`; the
paper fibre, warm ground and upper-left window light match. No new generated
picture is needed. Hero and missing: 1920 and 960 wide. Section images: 1200 and
640 wide. AVIF and WebP remain within the v3 byte budgets. The home phone source
preserves the reference's composition rather than magnifying the coloured papers.
Both phone variants are 3:2: 960 × 640 and 640 × 427, in AVIF and WebP. The 404
has separate `missing-phone` variants from the existing cut-out photograph: its
960 px AVIF is 24.9 KiB, down from 66.9 KiB, while retaining the paper texture.

### Shared kit and verification

Keep the existing component props stable. Finish the inherited `tiles.ts` helpers
and serif font preload fix, document optional changes, and check existing mini-site
builds and navigation. All visible copy stays in `src/content/site.ts`.

Completed production QA passes for `/` and `/missing/`, plus a final targeted 404
pass after the phone-image compression. All desktop, phone, keyboard, hover,
reduced-motion and navigation states were read, with fresh screenshot-only critics.
The final independent weighted score is 8.10/10, with no blocking findings.

`task check`: 142 Astro files with zero diagnostics; 183 tests pass. `task build`:
31 pages pass. The nine shared navigation and dark-theme Playwright checks pass.
Eighteen additional layout/no-script cases at 320, 390, 768, 1024, 1280, 1440 and
1920 px pass, including menu focus restoration and no clipped labels. The narrow
home labels, 404 tablet heading and category layout were adjusted after visual QA.

Final throttled phone LCP: home 2184 ms, 404 1964 ms. CLS 0, axe violations 0,
reported phone scroll 60 fps on both; no console errors, failed requests, overflow,
invisible focus or reduced-motion hidden text. Four texture contrast review flags
were checked against conservative darkest-grain bounds (at least 4.63:1).
The static audit has zero FAILs; its four WARNs are repeated navigation summaries
and existing books/games heading skips outside this assignment.

Full desktop landing: `.shots/layout/home-1440-full.png`; phone first screen:
`.shots/layout/home-390-first.png`. Final details and asset sizes:
`.temp/codex-report.md`. No deployment or push.
