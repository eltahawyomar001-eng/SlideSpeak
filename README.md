# SlideSpeak — Benefits Section

Pixel-perfect implementation of the "Benefits" section from SlideSpeak's landing page, built from a Figma design.

**Live demo:** [slide-speak.vercel.app](https://slide-speak.vercel.app/)

## Quick Start

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 3.4**
- **Figtree** font via `next/font/google`

## Project Structure

```
app/
  layout.tsx              # Root layout with Figtree font
  page.tsx                # Renders <BenefitsSection />
  globals.css             # Tailwind directives + CSS variables

components/
  BenefitsSection.tsx     # Main section: badge, heading, two-column card grid
  svgs/
    BrandAlignmentIllustration.tsx    # Left card illustration
    ColorConsistencyIllustration.tsx  # Right card illustration
  icons/
    SlideSpeakMark.tsx    # Starburst logo mark (pattern fill + gradient overlay)
    SlideSpeakMascot.tsx  # Penguin mascot (inline SVG)
    ConnectingLines.tsx   # Curved connector lines with gradient strokes
    StarIcon.tsx          # Star icon for badge
    GlobeIcon.tsx         # Globe icon for brand illustration
    CheckIcon.tsx         # Check badge for "consistent" slide
    XCloseIcon.tsx        # X badge for "inconsistent" slide
    index.ts              # Barrel exports

public/
    Mark.png              # Starburst raster for pattern fill
    typography-gradient.png # Gradient image for typography text
```

## Design Notes

- All elements built with **Tailwind + inline SVG** for future animation
- No external icon libraries — every icon is a hand-coded SVG component
- Each SVG component uses `useId()` for unique gradient/pattern IDs (SSR-safe)
- Typography button uses `background-clip: text` with a gradient image fill
- Color consistency illustration uses `overflow-clip` to crop oversized slide previews
