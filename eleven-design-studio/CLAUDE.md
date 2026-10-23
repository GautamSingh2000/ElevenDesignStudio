# Eleven Design Studio — website (V2 "Midnight Gold Glass")

Single-page marketing site for an exhibition-stall / events agency in New Delhi.
Build it **one component at a time, one section at a time**, following `BUILD_PLAN.md`.
Never build more than the step you were asked for.

## Source of truth (read before every step)

| What | Where |
| --- | --- |
| Design tokens (colours, type, spacing, breakpoints) | `src/styles/theme.css` (copied from `handoff/theme.css`) |
| All copy, links, image paths | `handoff/content.json` → `src/data/content.ts` |
| Pixel reference per section × breakpoint | `handoff/reference/<NN-section>--<width>.jpg` (widths 1920, 1440, 768, 430) |
| Full working reference page | `handoff/reference/full-page.html` (open in a browser and resize) |
| Full PDF of every breakpoint | download separately (not in zip) |
| Images | `public/images/*` |

When a reference PNG and these rules disagree, follow the PNG for look and these rules for code.
Open the matching PNGs with your image-reading tool before writing a section.

## Stack

- Next.js (App Router) + TypeScript, **CSS Modules only** (no Tailwind, no CSS-in-JS).
- Fonts via `next/font/google`: **Anton** (display), **Instrument Serif** italic (accent words), **Poppins** 300–700 (body).
  Expose them as `--font-display`, `--font-accent`, `--font-body` (override the fallbacks in theme.css).
- Icons: `lucide-react` (names are in content.json: box, wrench, message-circle, package, users, megaphone, smartphone, globe, search, workflow). Stroke 1.9.
- Images: `next/image`.

## Folder layout

```
src/
  app/
    layout.tsx          # fonts, <body>, imports styles/theme.css
    page.tsx            # composes sections in order
    components/
      ui/               # primitives: Eyebrow, SectionTitle, Button, GlassCard, IconTile, OutlineNumber, Marquee, Container
      Header/  Hero/  MarqueeStrip/  About/  Services/  Process/
      Commitment/  Portfolio/  Clients/  Contact/  Footer/
        <Name>.tsx + <Name>.module.css
  data/content.ts
  styles/theme.css
```

## Responsive rules (MUST follow — team pattern)

- Breakpoints: base (> 1440), `@media (max-width: 1440px)`, `(max-width: 1280px)`, `(max-width: 768px)` tablet,
  `(max-width: 430px)` mobile.
- **Every fluid token is re-assigned in every breakpoint.** Each range scales from its lower frame to its upper frame:
  `> 1440: 1440 → 1920` · `≤ 1440: 1280 → 1440` · `≤ 1280: 768 → 1280` · `≤ 768: 430 → 768` · `≤ 430: 0 → 430`.
- Pattern: `clamp(<value at lower frame>, calc(<px at upper frame> / <upper frame width> * 100vw), <value at upper frame>)`.
  The min of each range is the max of the next range down, so there is no jump at any breakpoint. Mobile ranges start at `0rem`.
- Follow `src/styles/theme.css` exactly for this: it already has every global token in all 5 tiers.
- New LOCAL tokens follow the same 5-tier pattern, declared on the component's BEM root block and re-assigned inside the same
  media queries: `--<block>-space-<N>px` / `--<block>-size-<N>px`, rem value + px comment.
- Use global tokens first (`--fs-*`, `--text-*` shorthands, `--gutter`, `--section-py`, `--gap-*`, `--card-pad`, `--radius-*`,
  `--space-*px`, `--size-*px`); snap to the nearest token within ~2px.
- **Media queries are for structure only** (direction, columns, display, wrap) — use the structure tokens in theme.css.
- Never write an inverted clamp (min > max). Never reference an undefined custom property (check `space` vs `size`, `px` suffix).
- `top/left/right/bottom` only on positioned elements; `margin-*` for flow spacing.
- Images: `.fluid-responsive` with a **unitless** `--w`, no competing `width`, keep ratio with `aspect-ratio`.
- BEM, kebab-case class names inside each module: `.about`, `.about__media`, `.about__point--active`.
- Comment each fluid token with its endpoints: `/* 106.67→120 */`.

## Visual language (do not drift)

- Page background `--color-bg` (#0B0E2A); alternate sections `--color-bg-alt` (#070920).
- Accent = gold (`--color-gold`, gradients `--gradient-gold*`). Text on gold is `--color-ink`.
- **Glass**: `background: var(--glass-fill)`, `border: 1px solid var(--glass-border)`, `backdrop-filter: var(--glass-blur)`.
- Headings: Anton, uppercase; one accent word per heading in Instrument Serif italic gold, ~1.12× the heading size.
- Eyebrows: Poppins 600, letter-spacing 4px, gold, with a 36×2px gold rule before.
- Step / point numbers: Anton outline (`color: transparent; -webkit-text-stroke: 1.4px var(--color-gold)`).
- Navy radial glows (`--glow-navy`) sit behind sections, absolutely positioned, `pointer-events: none`.
- No emoji, no extra gradients, no new colours.

## Accessibility & quality bar

- Real `<a href>` / `<button>`; burger has `aria-expanded` + `aria-controls`; icon-only buttons have `aria-label`.
- Decorative images/SVG `aria-hidden`; meaningful images have the `alt` from content.json.
- Text contrast ≥ 4.5:1 (all token text colours already pass on the dark ground).
- Touch targets ≥ 44px. Respect `prefers-reduced-motion` (marquees and float stop).
- Smooth-scroll anchors; header is sticky, so sections get `scroll-margin-top: 96px`.

## Definition of done for every step

1. Matches the reference PNGs at 1920, 1440, 768 and 430 (check also 1280 and 375 for overflow).
2. Run the conversion checklist from the responsive rules above on the new `.module.css`.
3. `npm run lint` and `npm run build` pass. No console errors.
4. Report what you built and anything that didn't match the reference.
