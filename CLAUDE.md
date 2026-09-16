# AstraVeda — Project Overview

This repo currently contains the **marketing website** for AstraVeda, an
AI-powered Vedic astrology mobile platform. The actual product (native
Expo/React Native app) lives outside this repo — see `summary.txt` for its
full feature set, tech stack, and pricing. This website is a landing page
only; it does not implement any of the app's paid features itself.

## Repo layout

- `summary.txt` — full product summary (features, pricing, AI models, tech
  stack) for the real mobile app. Treat this as the source of truth for any
  copy/features referenced on the website — don't invent features or pricing
  that aren't listed here.
- `imagesurl.txt` — canonical brand asset URLs (logo, hero video), hosted on
  Cloudinary. Use these directly rather than downloading/re-hosting copies.
- `frontend/` — the Next.js marketing site. See `frontend/CLAUDE.md` for
  details specific to it.

## Design language (applies site-wide)

- Dark cosmic navy (`#08113A`) for hero/celestial sections, cream
  (`#FFFAF2`) for content sections — alternating for visual rhythm.
- Gold gradient (`#F7DDA2` → `#E9BE6C`) for primary/gold CTAs and credits.
- Purple gradient (`#8F29DD` → `#A72BE6`) for AI/voice-consultation actions.
- Per-feature accent colors (from the mobile app): teal = Face Reading,
  violet = Aura, indigo = Dream, terracotta = Vastu, rose/magenta = Palm,
  purple = Kundli/Voice, night-sky indigo = celestial/trust content.
- Cormorant Garamond for display/headings, Inter for body text.
- No fabricated content: pricing, feature descriptions, and stats on the
  site must trace back to `summary.txt`. Don't invent testimonials
  attributed to fake people — prefer factual trust/stat callouts instead.

## Working conventions

- Verify UI changes by actually running the dev server and checking in a
  browser (Playwright MCP or similar) — don't just trust that the code
  compiles.
- Search the web for current (this year's) design trends before making
  visual-design decisions when asked to — trends move fast and training
  data lags.
