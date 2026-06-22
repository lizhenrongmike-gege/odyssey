# Design

## Theme
Modern, social-first marketing agency. A light, restrained warm-neutral base carries a single high-energy cobalt accent and a bold geometric display face. Soft, generously rounded surfaces; airy spacing; subtle, purposeful motion. Not cream-and-slate, not monochrome-traditional.

## Color
Tokens in `src/styles/theme.css` (OKLCH). Strategy: **Restrained+** — neutral base, one committed accent used deliberately on CTAs, links/hover, and a soft hero glow.
- Background: near-white, whisper of warmth — `oklch(0.992 0.004 95)`
- Ink: soft near-black, faint cool — `oklch(0.24 0.012 264)`
- Accent / primary (CTAs, links, highlight): electric cobalt — `oklch(0.5 0.21 264)`; hover `oklch(0.44 0.22 264)`; on-accent `#fff` (white text ≥4.5:1)
- Accent-soft (hero glow): `oklch(0.5 0.21 264 / 0.14)`
- Surface-1 (cards, footer): `oklch(0.965 0.006 95)`
- Surface-2 (tint): `oklch(0.95 0.04 264)`

## Typography
- Display / headings / logo: **Clash Display** (600/700), Fontshare. Negative tracking on headings; `text-wrap: balance`.
- Body / UI: **General Sans** (400/500/600), Fontshare. `text-wrap: pretty` on prose.
- Scale: existing fluid `clamp()` scale (~1.25 ratio). Body `line-height: 1.65`; headings `1.1`.
- (Both fonts are deliberately off the AI-monoculture reflex list — no Inter/Syne/Plus Jakarta/Fraunces.)

## Imagery
Real, vibrant, license-free photography (Unsplash) in `public/assets/images/cilo/`:
- `hero.jpg` — a plated dish at a lively candlelit restaurant table (homepage hero).
- `about.jpg` — an energetic team moment over a laptop (About).
Rounded corners via `--theme-shape-radius`; soft drop shadow on the hero image. Swap with branded shots later (drop into the same folder).

## Components & Layout
- Buttons: cobalt primary (rounded), text "unelevated" secondary; hover lift + color/shadow transition; secondary turns accent on hover.
- Hero: two-column; headline sits over a soft radial cobalt glow; balanced CTA row (`gap: 1rem`).
- Services: three soft cards on a hairline border; hover lift + accent border.
- Prose/content links: cobalt, underline, accent-darken on hover (scoped to `#page`, so nav/footer keep their own styling). Nav + footer links go cobalt on hover.

## Motion
Subtle and purposeful: one-time hero fade-up on load (text, then image); button + card hover lift. All auto-disabled under `prefers-reduced-motion` via reset.css. No scroll-triggered section reveals.
