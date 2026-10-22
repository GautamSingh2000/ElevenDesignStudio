# Eleven Design Studio — website (V2 "Midnight Gold Glass")

Single-page marketing site for an exhibition-stall / events agency in New Delhi.
Build it **one component at a time, one section at a time**, following `BUILD_PLAN.md`.
Never build more than the step you were asked for.

## Source of truth (read before every step)

| What | Where |
| --- | --- |
| Design tokens (colours, type, spacing, breakpoints) | `src/styles/theme.css` (copied from `handoff/theme.css`) |
| All copy, links, image paths | `handoff/content.json` → `src/data/content.ts` |
| Pixel reference per section × breakpoint | `handoff/reference/<NN-section>--<width>.png` (widths 1920, 1440, 768, 430) |
| Full working reference page | `handoff/reference/full-page.html` (open in a browser and resize) |
| Full PDF of every breakpoint | `handoff/reference/Eleven-Design-Studio_V2_All-Breakpoints.pdf` |
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

## Responsive rules (MUST follow — these are the team's conversion rules)

- Breakpoints: **desktop = base (no media query, design canvas 1920)**, `@media (max-width: 1440px)`,
  `@media (max-width: 1280px)`, **tablet `@media (max-width: 768px)`**, **mobile `@media (max-width: 430px)`**.
- Sizing uses **chained clamps**: desktop `clamp(<tab>, <px/1920*100>vw, <web>)`, tablet `clamp(<mob>, <px/768*100>vw, <tab>)`,
  mobile only where needed with `/430`. Tablet denominator is **768**, mobile **430** — never 834/402 (those are only for `.fluid-responsive`).
- Use the global tokens first (`--fs-*`, `--gutter`, `--section-py`, `--gap-*`, `--card-pad`, `--radius-*`, `--space-*px`, `--size-*px`).
  Snap to the nearest token within ~2px. Only if nothing is close, create a LOCAL token on the component's BEM root:
  `--<block>-space-<N>px: <rem>; /* Npx */`.
- **Media queries are for structure only** (direction, columns, display, wrap). Sizes come from clamps.
- Never write an inverted clamp (min > max). Values must be monotonic mobile ≤ tablet ≤ web; if not, use a hard switch
  (<20px difference) or a negative-slope `calc()` with the formula documented in a comment.
- Never reference an undefined custom property. Check `space` vs `size` and the `px` suffix on every `var()`.
- Font-size clamps never have `0` as a minimum.
- `top/left/right/bottom` only on positioned elements.
- Images: `.fluid-responsive` with a **unitless** `--w`, no competing `width`, keep ratio with `aspect-ratio`.
- BEM, kebab-case class names inside each module: `.about`, `.about__media`, `.about__point--active`.
- Comment each fluid token with its endpoints: `/* tab 16px -> web 36px */`.

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
