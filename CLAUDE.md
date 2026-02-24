# Doctor Portfolio Website — Dr. Reem Salim Didaan

## Project Overview
Luxury bilingual medical portfolio website for Dr. Reem Salim Didaan, orthopedic and pediatric orthopedic specialist. Features dark/light theme, trilingual support (EN/AR/HE with RTL), and premium animations.

## Tech Stack
- **Framework**: Next.js 16.1.6 (App Router, Turbopack)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS v4 (`@theme` block in globals.css — NOT `@theme inline`, see below)
- **Animations**: `motion/react` (NOT framer-motion), Canvas API for particles
- **i18n**: `next-intl` v4 with `src/messages/{en,ar,he}/` JSON files
- **Icons**: `lucide-react`
- **Fonts**: Playfair Display (serif), Inter (sans), Noto Sans Arabic, Noto Sans Hebrew
- **Deployment**: Vercel (`vercel --prod`)

## Commands
```bash
npm run dev     # Dev server
npm run build   # Production build (always run before deploying)
npm run lint    # ESLint
vercel --prod   # Deploy to production
```

## Key Directories
```
src/
├── app/
│   ├── layout.tsx              # Root layout (HTML, FOUC script, globals.css)
│   ├── globals.css             # ALL theme tokens, utilities, light/dark overrides
│   └── [locale]/
│       ├── layout.tsx          # Locale layout (ThemeProvider, Header, Footer)
│       ├── page.tsx            # Home page
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── booking/page.tsx
│       ├── testimonials/page.tsx
│       ├── faq/page.tsx
│       ├── contact/page.tsx
│       ├── blog/page.tsx
│       ├── patient-info/page.tsx
│       └── legal/{privacy,terms,disclaimer,accessibility}/page.tsx
├── components/
│   ├── layout/        # Header, Footer, ThemeProvider, ThemeToggle, MobileMenu, LocaleSwitcher, HtmlAttributes, ScrollProgress
│   ├── animation/     # FadeIn, GoldSparkles, FloatingShapes, AnimatedGrid, MagneticButton, TextReveal, StaggerContainer, CountUp, PageWrapper
│   ├── sections/      # Page-specific sections (home/, about/, booking/, contact/, testimonials/, faq/, blog/, patient-info/)
│   └── ui/            # SectionDivider, Accordion, Button, WhatsAppButton
├── data/              # services.ts, testimonials.ts (structured data with i18n keys)
├── i18n/              # config.ts, routing.ts, navigation.ts, request.ts
├── lib/               # utils.ts (cn helper), fonts.ts, blog.ts
└── messages/          # Translation JSON files
    ├── en/            # common, home, about, services, booking, testimonials, contact, faq, blog, legal, patient-info
    ├── ar/            # Arabic translations (RTL)
    └── he/            # Hebrew translations (RTL)
```

## Critical Patterns

### Theme System (IMPORTANT)
- `@theme` (NOT `@theme inline`) in `globals.css` — `inline` breaks light mode by hardcoding values instead of using `var()` references
- `.light` class on `<html>` overrides CSS custom properties
- ThemeProvider (`useTheme()` hook) provides `theme` and `toggleTheme`
- FOUC prevention: inline `<script>` in root layout.tsx reads localStorage before paint
- Dark mode: gold accents (#c9a84c), dark backgrounds (#0a0a0a)
- Light mode: teal accents (#0D7377), warm cream backgrounds (#FDFBF7)
- Stars always gold (#D4A017) in both themes — hardcoded, not via CSS variable

### Gold → Teal in Light Mode
- `--color-gold` overridden to `#0D7377` in `.light {}` — makes ALL `text-gold`, `bg-gold`, `border-gold` automatically teal
- Hardcoded utilities (`.card-luxury`, `.shimmer-effect`, `.glow-gold`, etc.) have separate `.light .xxx` overrides in globals.css
- Some home page components have REDUNDANT explicit `isLight` conditionals — these work but are unnecessary since the CSS variable override handles it

### i18n & RTL
- 3 locales: `en` (LTR), `ar` (RTL), `he` (RTL)
- Logo always `dir="ltr"` to keep "Dr. Reem" left-to-right in RTL
- Use `start`/`end` instead of `left`/`right` for RTL-aware positioning
- Translation keys in data files reference `src/messages/{locale}/*.json`

### Deployment
- Live URL: https://doctor-kappa-five.vercel.app
- Always `npm run build` before `vercel --prod`
- If changes don't appear, try `vercel --prod --force` for cache bypass
