# agy visual review — 19.11.2026

Checked on http://localhost:8027/ at **390 px (phone)**, **820 px (tablet)** and **1440 px (desktop)**, in **dark and light** themes (129 screenshots in `tests/out/agy/before/`, 0 console errors, 0 broken images, 0 horizontal overflow).

## Top 10 fixes (most visible first)

1. **Phone photos & captions (`#`, project pages, `#photography/archive`)** — The `⤢` zoom badge sits directly on top of the camera settings text (`ISO 1600`, timestamps, dates) on every photo on phones, and covers the bottom-right corner of every poster; even on desktop hover it sits on the caption instead of the photo. Also `"click any photo to enlarge"` repeats on every page, says "click" on phones, and still says "photo" on poster pages. — Hide the always-on `⤢` badge on phones (or anchor it to the image corner, not the caption) and drop the repeated hint line. — size: small — screenshot: tests/out/agy/before/home-light-390.png

2. **About page (`#about`)** — A dashed `"Placeholder: your longer story goes here… Send the text and it replaces this line."` box is still visible to every visitor, making the site look unfinished. — Remove the placeholder box until your longer bio is ready. — size: small — screenshot: tests/out/agy/before/about-dark-390.png

3. **Homepage (`#`) — L'Boulevard missing & repeated intro lines** — L'Boulevard (your strongest series) does not appear anywhere on the homepage; a client has to dig into `Photography → Music → l'boulevard` to find it. Also the intro says "Mohamed Ghoujlami" twice in a row (big heading + bio) and repeats your roles right above the bio; at 820 px tablet width the intro leaves a large empty space on the right. — Add an L'Boulevard preview/entry on the homepage and tighten the intro layout without inventing new text. — size: medium — screenshot: tests/out/agy/before/home-dark-1440.png

4. **L'Boulevard on phone (`#photography/boulevard` and all 3 rooms, 390 px)** — Inside the portfolio frame, the SKIMART bar plus two sticky exhibition rows take ~200 px (almost a quarter of the phone screen). The `FACES AND EYES` button is sliced off to `FA(` on the right even when you are on that room, and on Faces the room title is cut in half at the bottom of the first screen. — Move the Instagram handles to the footer on phones so the exhibition bar is one clean row, scroll the active room button into view, and tighten the Faces top photo height on 390 px so the title shows clearly. — size: medium — screenshot: tests/out/agy/before/lbv-frame-faces-dark-390.png

5. **L'Boulevard Connection inside desktop frame (`#photography/boulevard/Band`, 1440 px)** — Because the 400 px sidebar narrows the exhibition frame to 1016 px, the vertical `01 · PROLOGUE` tag overlaps the right edge of the `III THE LOOK 23:00` button, and `CONNECTION` runs right up against the photo mat. — Scale `.name` to its narrower column and adjust the `.tag` / `.hero` gap so `01 · PROLOGUE` never collides with the room buttons. — size: small — screenshot: tests/out/agy/before/lbv-frame-band-dark-1440.png

6. **L'Boulevard light mode (`assets/boulevard/*`, light theme)** — The CSS paints the 41 px `#EEFFE5` cream mat dark plum (`#251726`) in light mode, so dark Metal Day photos melt into the border and lose their edges ("Horns for the opener", "The pit in haze", "Chin up"). — Keep the cream `#EEFFE5` mat in light mode and separate it from the cream wall with a thin 1 px plum border and soft shadow. — size: small — screenshot: tests/out/agy/before/lbv-solo-band-mid-light-1440.png

7. **Theme switch between homepage and L'Boulevard (`index.html` + `assets/boulevard/theme.js`)** — Picking Light on the homepage and opening L'Boulevard still loads the exhibition in Dark (because `skm-theme` and `lbv-theme` are separate keys), and the sidebar theme button disappears. — Make `theme.js` fall back to `skm-theme` and sync both keys whenever either switch is clicked. — size: small — screenshot: tests/out/agy/before/theme-mismatch-light-home-to-lbv-1440.png

8. **Folded desktop sidebar & phone menu (`aside` in `index.html`)** — Folding the desktop sidebar hides the `SKIMART` logo, `about`, theme switch, and every project name, leaving anonymous thumbnails with no visible button to return Home. On phones, the open menu pushes the page down instead of covering it and the top-right button still says `MENU` instead of `CLOSE`; menu counts also mix meanings (`Photography 3` = groups, `MUSIC 13` = projects, `selected work 26` = photos) and force names lowercase. — Keep a compact `SKIMART` home link and tiny names in folded mode, switch `MENU` to `CLOSE` (overlaying the page on phones), and use real capitalisation for project names. — size: medium — screenshot: tests/out/agy/before/menu-folded-dark-1440.png

9. **Photo viewer (`#lb` in `index.html`)** — In the footer (`1 / 6 · IMG_9452 · … ISO 1600 see all →`), `see all →` sits right next to `ISO 1600` in the same dim colour with no divider or underline, so it does not look clickable. At 820 px and 390 px, the `←` / `→` arrows are hidden completely (no cue to swipe, and screen-reader users cannot move to the next photo). The 96% dark overlay also lets light-mode page text show faintly behind it. — Add a `·` separator and underline on `see all →`, keep compact `←` / `→` buttons on small screens, and make the viewer background solid `#060606`. — size: small — screenshot: tests/out/agy/before/viewer-open-dark-390.png

10. **Inconsistent names, tiny phone tap targets & fake QR codes (`index.html`, `assets/boulevard/*`)** — `American Arts Center` (Photography) vs `American Art Center` (Design & Workshops); `Mohamed Ghoujlami` (Home/About) vs `Ghoujlami Mohamed` (exhibition bylines); `"Matted in #EEFFE5."` hex code shown to visitors; non-scannable decorative QR codes on exhibition headers; and phone targets under 44 px (`MENU` 19 px, `SKIMART` 28 px, `GRID`/`LIST` 29 px, `SEE ALL →` 22 px, About contact links ~18 px). — Standardize the venue and name spelling (please confirm which you want), remove the hex code / fake QR codes if you want, and pad phone buttons/links to 44 px tall. — size: small — screenshot: tests/out/agy/before/proj-workshop-dark-390.png

## Old critique (pf-qsm.17): still true?

- #1 Photo grid crops photos badly — **fixed** (masonry now keeps every photo's real landscape or portrait shape).
- #2 Homepage does not meet the brief — **partly** (now has your portrait/intro + Photography, Design and Workshops previews, but still no L'Boulevard on home and no full-width hero).
- #3 "Placeholder" note shown on About — **partly** (a real landscape photo was added, but the dashed placeholder box is still visible).
- #4 L'Boulevard inside the portfolio is heavy on a phone — **still true** (~200 px of sticky chrome at 390 px, `FACES AND EYES` cut off to `FA(`).
- #5 Two theme switches that do not agree — **still true** (light home still opens dark exhibition when `lbv-theme` is unset).
- #6 Best work hidden in the menu — **partly** (moved to #01 in `Photography → Music`, but still missing from the homepage itself).
- #7 Every project page looks the same — **still true** (uniform grid on every project, no opening hero frame; 4-photo projects still use 3 columns).
- #8 Side menu is hard to read — **partly** (widened to 400 px so tagline and `EXHIBITION` tag fit cleanly, but counts still mix groups/projects/photos, names are lowercase, and phone menu stays `MENU` and pushes the page down).
- #9 Names and words do not match between pages — **partly** (`Shot & designed` fixed and repeated `Photographer / Visual Artist` cleaned up, but `American Arts/Art Center`, `Mohamed Ghoujlami / Ghoujlami Mohamed`, `SKIMART / Skimart™`, and `#EEFFE5` still remain).
- #10 In light theme, dark photos lose their mat — **still true** (mats are still painted plum `#251726` in light mode).
- #11 Some small text is too faint — **fixed** (`--dim`, light `.ex`, and exhibition `.name .sub` contrast were all raised).
- #12 Touch targets on phone are small — **still true** (`MENU` 19 px, logo 28 px, `GRID`/`LIST` 29 px, `SEE ALL →` 22 px, About links ~18 px).
- #13 Decorations that promise something they do not do — **still true** (fake QR codes are still on every exhibition section header).
- #14 "Click any photo to enlarge" line on every project — **still true** (still printed on every page, says "photo" on poster pages, and the phone `⤢` badge now overlaps captions).

## Good, don't change

- **True-aspect masonry grid & camera captions.** Every photo now keeps its real portrait or landscape shape with crisp mono EXIF labels underneath, and posters stay full-frame without cropping.
- **Editorial homepage palette & calm typography.** Archivo + IBM Plex Mono on near-black and warm off-white, thin 1 px rules, and zero generic template cards — your photographs lead the page.
- **L'Boulevard dark mode & palette handoff.** The plum wall (`#251726`), cream mats (`#EEFFE5`), electric blue marks (`#337aff`), Anton display type, and the way the portfolio sidebar turns plum when L'Boulevard opens feel curated and memorable.
- **Clean Grid / List view & working Archive filters.** Switching between Grid and List works smoothly, and `#photography/archive` filters cleanly by place, year and event with live counts and chips.
- **Solid technical base.** Zero console errors, zero broken images, and zero horizontal overflow across 390 px, 820 px and 1440 px in both light and dark modes.

## Done

All 10 fixes applied on branch `agy-review` (one commit per fix, matching after screenshots in `tests/out/agy/after/`):

- **#1** `bf80c7e` — move zoom badge off captions, hide on touch, drop repeated hint (`tests/out/agy/after/home-light-390.png`)
- **#2** `9885ba6` — remove placeholder developer note from About page (`tests/out/agy/after/about-dark-390.png`)
- **#3** `2dbf0ad` — add L'Boulevard preview on home and tighten intro layout (`tests/out/agy/after/home-dark-1440.png`)
- **#4** `47083b0` — compact one-row phone bar, keep active room visible, fit Faces title (`tests/out/agy/after/lbv-frame-faces-dark-390.png`)
- **#5** `14967af` — prevent Connection title and prologue badge overlap inside desktop frame (`tests/out/agy/after/lbv-frame-band-dark-1440.png`)
- **#6** `c659c2f` — keep cream `#EEFFE5` mats in L'Boulevard light mode with thin plum border (`tests/out/agy/after/lbv-solo-band-mid-light-1440.png`)
- **#7** `c2de4ee` — sync light/dark theme between homepage and L'Boulevard (`tests/out/agy/after/theme-mismatch-light-home-to-lbv-1440.png`)
- **#8** `537ea73` — keep logo and labels in folded sidebar, phone overlay `CLOSE`, real case names (`tests/out/agy/after/menu-folded-dark-1440.png`)
- **#9** `5b6febc` — solid viewer backdrop, clear `see all →` link, compact mobile arrows (`tests/out/agy/after/viewer-open-dark-390.png`)
- **#10** `718e4dc` — standardize names (`American Arts Center`, `Mohamed Ghoujlami`), remove fake QR tags and `#EEFFE5` hex text, pad phone tap targets to 44 px (`tests/out/agy/after/proj-workshop-dark-390.png`)

### Tests
- `~/.venvs/playwright/bin/python -I tests/flow.py http://localhost:8027/` — **PASS (`FAILS: none`)** across mobile (390), tablet (820) and desktop (1440): 24 menu links, 4 rooms in the frame, 4 Boulevard pages.
- `node --test 'tests/*.test.mjs'` — **PASS (46 / 46)**.

### Could not do / left untouched
- None of the 10 fixes were skipped. Note: `#10` standardized venue to `American Arts Center` and author byline to `Mohamed Ghoujlami` (matching the homepage); easy to tweak if you prefer a different spelling. `Portoflio/` (main worktree) and `Flow`/`Portfolio` branches were not touched.

