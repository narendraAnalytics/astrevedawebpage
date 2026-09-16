@AGENTS.md

# Frontend — AstraVeda Marketing Site

Next.js 16 (App Router) + Tailwind CSS 4 + Framer Motion. Single-page
marketing site (`src/app/page.tsx`) built from stacked section components —
see the root `CLAUDE.md` for the wider project context and design language.

## Structure

- `src/app/layout.tsx` — fonts (Cormorant Garamond + Inter via
  `next/font/google`), global metadata.
- `src/app/globals.css` — Tailwind import, color tokens, shared keyframes
  (`av-float`, `av-float2`, `av-twinkle`).
- `src/app/page.tsx` — composes the page from section components in order.
  Each section is its own file under `src/components/` — don't merge
  sections back into one file.
- `src/lib/site.ts` — shared constants (logo/video URLs from
  `imagesurl.txt`, nav links). Import from here rather than re-hardcoding
  Cloudinary URLs in components.

## Components (`src/components/`)

- `Navbar.tsx` — fixed, always-transparent nav that overlays the whole
  page. Text color adapts (light vs. dark ink) based on which section is
  scrolled under it — see the `data-nav-theme` contract below. Don't add a
  background fill on scroll; that was intentionally removed.
- `Hero.tsx` — full-bleed autoplaying background video (from
  `imagesurl.txt`), animated feature-icon grid that self-reorders every
  ~3.2s via Framer Motion `layout` animations, and a video lightbox.
- `Reveal.tsx` — reusable scroll-reveal wrapper (`whileInView` fade/slide).
  Wrap new section content in this for consistent scroll-in animation.
  Respects `prefers-reduced-motion` via `useReducedMotion()`.
- `Services.tsx`, `HowItWorks.tsx`, `VoiceSpotlight.tsx`, `TrustStats.tsx`,
  `DownloadCTA.tsx`, `Footer.tsx` — content sections. Copy/pricing here must
  match `summary.txt` exactly.

### `data-nav-theme` contract

Every top-level section element must carry `data-nav-theme="dark"` or
`"light"` matching its background (dark navy vs. cream). `Navbar.tsx` reads
these on scroll to pick readable text color. Adding a new section between
existing ones? Give it this attribute or the nav will show the wrong color
while it's in view.

## Icons

Use `lucide-react` (already installed) for any new UI icon needs rather
than emoji or custom SVGs, for consistency with `Services.tsx` /
`HowItWorks.tsx` / etc. The hero's feature-strip glyphs are an intentional
exception (matches the original design mock).

## Dev

- `npm run dev` — Turbopack dev server on `http://localhost:3000`.
- No test suite configured yet.
