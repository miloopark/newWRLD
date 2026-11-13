# Homepage v1 — Swiss editorial (design handoff)

Approved homepage design for the new portfolio. Source of truth:

- `Home.dc.html` in this folder — exported from the Claude Design canvas
  (https://claude.ai/artifact/Cx2baLT8Y5tXSphDbBEFKY, artboard `Home.dc.html`).
  It is written in the canvas's Design Component format, **not** React: the
  `<helmet><style>` block and the inline styles are plain CSS you can lift
  directly; `{{holes}}`, `<sc-for>` and the `class Component extends DCLogic`
  script at the bottom are the canvas runtime — translate them into React
  state and `.map()`.
- If the canvas changes after this commit, the canvas wins.

## Stack for the build

React + TypeScript (existing Vite app) + Tailwind CSS + GSAP. Lenis (or GSAP
ScrollSmoother) for smooth scroll. No Three.js on the homepage for now — the
3D panel was cut.

## Art direction

- Almost entirely black and white: ground `#fafaf8`, ink `#0c0c0c`, rules
  `#d7d7d2` (1px), secondary text `#6a6a66`. No gradients, no rounded cards.
- One typeface: **Inter Tight** (400/500/600), headings at weight 500 with
  tight tracking (`-0.06em` to `-0.07em`), line-height ~0.84–0.9.
  Tabular numerals everywhere.
- Small functional nav (13px), thin horizontal rules, asymmetric layouts,
  lots of negative space.

## Page order

1. **Header** — `Milo Park, Index` / `Work / Projects / Music` /
   `Portfolio Vol. 01 — 2026` / live clock `EST h:mm` + `Contact`.
2. **Title screen** — centred portrait (4:5, ~28vw, clamp 240–420px), not
   full-bleed. A thin hand-drawn SVG arrow loops in from the left and points
   at the photo, with the text **"Hi, I'm Milo"** set on the curve
   (`<textPath>`). On load: stroke draws in (~1.8s), then the arrowhead and
   text fade in. On phones the arrow sits above the photo. Small caption under
   the photo; `(Scroll) ↓` at the bottom. The H1 is visually hidden
   ("Hi, I'm Milo Park — iOS developer, designer and music maker").
   - Portrait: `public/assets/me.jpg` already exists in the repo (2048×1363
     landscape) — crop to 4:5, black and white. Confirm with Milo before
     using it.
3. **Archive Index** — numbered list of 12 entries (Projects / Work / Music),
   filter buttons `All / Projects / Work / Music` with counts
   (`aria-pressed`). Columns: Number / Entry / Detail / Category / Year
   (Detail + Category hidden under 760px). Row hover: title slides 14px right,
   arrow fades in, bottom rule turns black. **Cursor-following preview**
   (240×300, grainy b/w image, slight rotation) follows the mouse within the
   list; hidden on touch (`hover: none`). Rows are real links and also react
   to keyboard focus.
4. **(01) Work Experience** — timeline of native `<details>` rows: dates /
   company / role / `+` (rotates to ×). Expanded: stack, summary, link.
5. **(03) Sound Archive** — grid of 4 square covers (auto-fit, min 240px),
   meta line, title, SoundCloud / Spotify links. Cover scales 1.05 on hover.
6. **(04) Contact** — "Let's make / something / strange." at ~13.5vw,
   staggered indents on thin rules; email at ~4.4vw; four social links in a
   ruled grid.
7. **Footer** — © 2026 Milo Park / Back to top ↑.

## Motion & accessibility

- GSAP: line reveals (translateY 105% → 0, stagger), arrow draw-in, subtle
  scroll-triggered reveals for section headings. Keep it restrained.
- `prefers-reduced-motion`: disable all animation and smooth scroll.
- Responsive down to 390px; touch targets ≥ 44px; visible focus outlines.
- Contrast: secondary grey `#6a6a66` on `#fafaf8` passes 4.5:1 — don't go
  lighter.

## Placeholders

Everything in `[brackets]` is a placeholder (companies, roles, dates, city,
track titles, email, social URLs). Keep them as-is until Milo supplies the
real content. Loopy is the only real entry.
