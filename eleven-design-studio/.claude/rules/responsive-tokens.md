# Responsive UI Conversion Rules

How to convert existing components to the responsive token system. Apply these
rules whenever editing or creating `.module.css` for a component.

## Reference implementation (copy this pattern)

When converting a component, mirror the structure, token naming, and
chained-clamp pattern used here:

- `src/app/components/NavBar/NavBar.module.css` (this project — breakpoints,
  tiers, local tokens)
- `E:\Eclipticon\Frenley\frenley\src\app\components\Footer\Footer.module.css`
  (token naming style only — Frenley uses different breakpoints)

Read these before converting so the output matches the established pattern.

## Breakpoints — the Figma frames

Advotiq has **four Figma frames**, and they are the only breakpoints:
**1920 / 1440 / 1280 / 440**. There is **no tablet frame and no tablet tier**.

| Tier         | Media query                    | Range covered  |
| ------------ | ------------------------------ | -------------- |
| desktop 1920 | base styles, no media query    | 1440 → 1920    |
| 1440         | `@media (max-width: 1440px)`   | 1280 → 1440    |
| 1280         | `@media (max-width: 1280px)`   | 440 → 1280     |
| mobile 440   | `@media (max-width: 440px)`    | 0 → 440        |

These match `theme.css` (Fluid Font Sizes, PrimaryCta, section tokens). Never
add a 768 / 834 / 430 / 402 breakpoint.

### vw denominators

| Use case                                    | 1920 | 1440 | 1280 | 440                  |
| ------------------------------------------- | ---- | ---- | ---- | -------------------- |
| **Chained clamps** (spacing, sizing tokens) | 1920 | 1440 | 1280 | 440                  |
| **`.fluid-responsive`** (element widths)    | 1920 | 1920 | 1920 | capped at 100% width |

Each tier's denominator is its own frame width, so the value hits its max
exactly at that breakpoint → no jump.

## Tokens — where values come from

1. **Use global theme tokens first**: `--space-*` (spacing) and `--size-*` (fixed
   sizes) from `theme.css`. Also check gradients and colors — they may already
   exist globally before creating a local one.
2. **Round odd and fractional px UP to the next even px** before picking a token.
   Examples: 13 → 14, 13.5 → 14, 55 → 56, 55.5 → 56, 7.5 → 8, 9 → 10,
   18.67 → 20, 2.67 → 4. Even integers stay as they are (12 → 12).
   Exception: hairlines (borders/dividers ≤ 1px) stay `--size-1px`.
   Do NOT snap down to a nearby token — always round up to the even value.
3. **Use the theme token for that even value** (`--space-<N>px` / `--size-<N>px`)
   if it exists in `theme.css`. If it doesn't, **create a LOCAL token** on the
   component's BEM root block, named `--<block>-space-<N>px` (spacing: padding,
   gap, margin, offsets) or `--<block>-size-<N>px` (sizes: width, height, radius,
   icons), with the rem value and a px comment.
   Example: `--navbar-size-56px: 3.5rem; /* 56px */`.
4. **Never reference a token name that isn't defined.** A `var()` to an undefined
   custom property (no fallback) makes the whole declaration invalid → it silently
   falls back to the initial value (e.g. `padding` → 0, `width` → auto). Re-check
   every token name. Watch for the `--space-36` vs `--space-36px` class of typo,
   and `space` vs `size` mix-ups.

## Fluid sizing — chained clamps

Drive sizes with `clamp(min, <vw>, max)` and chain the tiers so the value is
**continuous at every breakpoint**:

- **base (1920)**: `clamp(<1440 value>, calc(<1920 value> / 1920 * 100vw), <1920 value>)`
- **≤ 1440**: `clamp(<1280 value>, calc(<1440 value> / 1440 * 100vw), <1440 value>)`
- **≤ 1280**: `clamp(<440 value>, calc(<1280 value> / 1280 * 100vw), <1280 value>)`
  — if the element has no 440 design (desktop-only), freeze at the 1280 value.
- **≤ 440**: `clamp(0rem, calc(<440 value> / 440 * 100vw), <440 value>)`
  — never `0` as the min for font sizes (see below).

The min of each range equals the max of the next-smaller range, so there is no
jump at the boundary. If two adjacent tiers have the same value, write the plain
token (`var(--space-6px)`) instead of a clamp.

Write the middle term as `calc(<target px> / <frame width> * 100vw)`, matching
`theme.css`.

## Hard rules for clamps (self-check every one)

- **Never write an inverted clamp.** `clamp(min, val, max)` requires `min <= max`.
  If `min > max` it collapses to `min`, the `vw` term does nothing, and the
  breakpoint continuity breaks. Verify ordering on every clamp.
- **`vw` can only scale a value UP as the viewport grows.** If a value should
  _decrease_ as the screen gets wider (i.e. 440 value > 1280 value), do NOT
  fake it with `clamp(big, vw, small)` (that just freezes at `big`). See
  "Non-monotonic values" below.
- **Values must be monotonic across tiers** (440 <= 1280 <= 1440 <= 1920) for the
  chaining to work. If they aren't, flag it instead of silently producing a frozen
  value.
- **Never use `0` as a clamp minimum for font sizes.** It lets text collapse to
  near-zero on small phones. Always use a sensible px floor.

## Non-monotonic values (440 value > 1280 value)

When a value is _larger_ on mobile than on the 1280 frame, a standard
positive-vw clamp cannot express the decrease — it will freeze at the larger
(min) value and create a jump at the breakpoint boundary.

### Small difference (< ~20px) — hard switch

Use two fixed values in two separate breakpoints. The difference is imperceptible:

```css
@media (max-width: 1280px) {
  .block {
    --token: 10px;
  }
} /* 1280 frame */
@media (max-width: 440px) {
  .block {
    --token: 12px;
  }
} /* 440 frame overrides */
```

### Large difference (>= ~20px) — negative-slope calc

Use a linearly decreasing `calc()` as the middle argument inside the ≤ 1280 tier.
The clamp bounds catch it at both ends:

```css
clamp(V_1280, calc(INTERCEPT - SLOPE_VW * 100vw), V_440)
```

Where (all values in px):

```
SLOPE     = (V_440 - V_1280) / (1280 - 440)
INTERCEPT = V_440 + SLOPE x 440
SLOPE_VW  = SLOPE x 100   (the vw coefficient)
```

Always document the source values in a comment so the formula can be
re-derived if design values change:

```css
/* min-height: 706px at 440vw -> 526px at 1280vw
   K = (706-526)/(1280-440) = 180/840 = 0.2143
   intercept = 706 + 0.2143x440 = 800.29px */
--hero-section-min-height: clamp(
  var(--hero-section-size-526px),
  calc(800.29px - 21.43vw),
  var(--hero-section-size-706px)
);
```

Verify: at 440px the calc gives V_440 (upper bound); at 1280px it gives V_1280
(lower bound); clamp keeps it within [V_1280, V_440] everywhere else.

## Positioning properties

`top`, `right`, `bottom`, `left` only take effect when the element has
`position: relative | absolute | fixed | sticky`. On a `position: static`
element (the default) these are silently ignored — a common cause of "why
isn't my spacing applying" bugs. If you need offset-based placement, add
`position: absolute` (and ensure the parent is `position: relative`). If you
need flow-based spacing, use `margin-top` instead of `top`.

## Images

- Use the global `.fluid-responsive` utility class on the `<img>`.
- Set a **unitless** `--w` (the design px number at 1920, no unit) — the utility
  does `calc(var(--w) * 1px)`, so a `px`/`rem`/`clamp` value will break it.
- Do **not** also set `width` in the component class; it would override the
  utility (equal specificity, module class loads later).
- Keep aspect ratio via `aspect-ratio` (preferred) rather than an independent
  `vw` height, so width and height can't drift apart across breakpoints.
- For scatter/positioned layouts, size images via `cqw` (container-relative) not
  `vw` (viewport-relative) — mixing the two causes drift when the container's
  max-width clamp floors at a fixed value while the viewport keeps changing.

## Naming & structure

- BEM, kebab-case: `block__element--modifier`.
- All component-local tokens live on the BEM root block (`.<block>`) so they
  cascade; override them by redeclaring on the same block inside a media query.
- Keep media queries for **structure only** (flex-direction, alignment, wrap,
  desktop ↔ mobile layout swap); let chained clamps handle all sizing. Structure
  swaps use the same Figma breakpoints (1440 / 1280 / 440).
- Comment each fluid token with its px endpoints, e.g. `/* 1440 18px → 1920 24px */`.

## Conversion checklist (run before finishing)

1. Every token name resolves to a defined property (no typos, no `space`/`size`
   mix-ups, no missing `px`).
2. Odd / fractional Figma px rounded UP to the next even px; theme token used,
   else a local `--<block>-space|size-<N>px` token.
3. No inverted clamps (`min <= max` everywhere).
4. Values monotonic per tier; each clamp's min meets the smaller tier's max.
5. Non-monotonic values (440 > 1280) handled with hard switch or
   negative-slope calc — never a standard clamp.
6. Only the Figma breakpoints are used (1920 base, 1440, 1280, 440); each tier's
   vw denominator is its own frame width. No 768 / 834 / 430 / 402.
7. Font size clamps never have `0` as their minimum.
8. `top`/`left`/`right`/`bottom` used only on positioned elements; use
   `margin-*` for flow-based spacing.
9. Images use `.fluid-responsive` with a unitless `--w` and no competing `width`.
10. Comments match the actual values (px endpoints correct).
11. No local gradient/color tokens that duplicate an existing global one in
    `theme.css` — check there first.
