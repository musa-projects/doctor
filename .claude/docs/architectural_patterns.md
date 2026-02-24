# Architectural Patterns & Conventions

## Theme System Architecture

### How It Works
1. **Root layout** (`src/app/layout.tsx`): Inline `<script>` reads `localStorage.theme` and adds `.light` class to `<html>` before first paint (prevents FOUC)
2. **ThemeProvider** (`src/components/layout/ThemeProvider.tsx`): React context providing `{ theme, toggleTheme }` via `useTheme()` hook
3. **CSS Variables** (`src/app/globals.css`): `@theme {}` block defines dark mode defaults. `.light {}` block overrides them
4. **HtmlAttributes** (`src/components/layout/HtmlAttributes.tsx`): Sets `lang`, `dir`, and font class on `<html>` via useEffect

### Theme Pattern for Components
```tsx
// Method 1: CSS variables (PREFERRED — works automatically)
// Just use Tailwind classes: text-foreground, bg-background, text-gold, etc.
// These resolve to CSS variables that change with .light class

// Method 2: useTheme() for component-specific overrides (only when needed)
import { useTheme } from "@/components/layout/ThemeProvider";
const { theme } = useTheme();
const isLight = theme === "light";
// Use for: inline styles, canvas drawing, SVG colors, complex conditional classes
```

### Critical Rule: `@theme` NOT `@theme inline`
`@theme inline` bakes values directly into Tailwind utility classes (`bg-background` → `background-color: #0a0a0a`). This makes CSS variable overrides in `.light {}` completely ineffective. Always use `@theme` without `inline` so utilities use `var()` references.

## CSS Utility Classes

### Custom Utilities (defined in globals.css)
| Class | Purpose | Light Mode Override |
|-------|---------|-------------------|
| `text-gradient-gold` | Animated gold/teal gradient text | `.light .text-gradient-gold` → teal |
| `animated-gradient-text` | Sweeping gradient text animation | `.light .animated-gradient-text` → teal-blue |
| `card-luxury` | Glass card with animated border | `.light .card-luxury` → warm white, layered shadows, teal border |
| `glass` | Frosted glass effect | `.light .glass` → warm white glass |
| `glass-gold` | Gold-tinted glass | `.light .glass-gold` → teal-tinted glass |
| `glow-gold` | Pulsing gold box-shadow | `.light .glow-gold` → static teal shadow |
| `text-glow-gold` | Pulsing gold text-shadow | `.light .text-glow-gold` → static teal |
| `bg-mesh` | Multi-gradient background | `.light .bg-mesh` → teal/blue gradients |
| `float-animation` | Floating up/down animation | Same in both modes |
| `shimmer` | Shimmer container (needs overflow:hidden) | Same in both modes |
| `bg-gradient-gold` | Subtle gold/teal gradient bg | `.light .bg-gradient-gold` → teal |
| `border-glow-gold` | Gold/teal outer glow | `.light .border-glow-gold` → teal |

### CSS Custom Properties for Animated Border
```css
@property --border-angle { syntax: "<angle>"; inherits: false; initial-value: 0deg; }
```
Used by `.card-luxury::before` for rotating conic-gradient border on hover.

## i18n Architecture

### File Structure
```
src/messages/{locale}/{namespace}.json
```
Namespaces: `common`, `home`, `about`, `services`, `booking`, `testimonials`, `contact`, `faq`, `blog`, `legal`, `patient-info`

### Usage Patterns
```tsx
// Server components
import { getTranslations } from "next-intl/server";
const t = await getTranslations({ locale, namespace: "services" });

// Client components
import { useTranslations } from "next-intl";
const t = useTranslations("home.hero");
```

### Data + i18n Pattern
Static data (services, testimonials) lives in `src/data/*.ts` with translation keys:
```ts
// src/data/services.ts
{ slug: "joint-replacement", titleKey: "jointReplacement.title", icon: "Bone" }

// Component usage
const tServices = useTranslations("services");
tServices(service.titleKey) // resolves via messages/en/services.json
```

### RTL Support
- Locales `ar` and `he` are RTL (`getDirection()` in `src/i18n/config.ts`)
- Always use `start`/`end` not `left`/`right` for positioning: `ps-2`, `pe-4`, `ms-3`, `me-3`, `start-0`, `end-0`
- Logo uses `dir="ltr"` to prevent RTL flip

### Navigation
```tsx
import { Link } from "@/i18n/navigation";
<Link href="/services">...</Link> // Auto-prefixes locale
```

## Component Architecture

### Layout Hierarchy
```
RootLayout (html, body, globals.css, FOUC script)
└── LocaleLayout (NextIntlClientProvider, ThemeProvider)
    ├── HtmlAttributes (sets lang/dir/fonts on <html>)
    ├── ScrollProgress (fixed top progress bar)
    ├── Header (fixed, with MobileMenu)
    ├── <main className="pt-20">{children}</main>
    └── Footer
```

### Animation Components
| Component | Purpose | Notes |
|-----------|---------|-------|
| `PageWrapper` | Page enter/exit animation | Wraps all page content |
| `FadeIn` | Scroll-triggered fade | Props: `delay`, `direction`, `className` |
| `StaggerContainer` + `StaggerItem` | Staggered children animation | For grids/lists |
| `TextReveal` | Character-by-character reveal | Used in hero headline |
| `GoldSparkles` | Canvas particle system | Theme-aware (teal in light) |
| `FloatingShapes` | SVG parallax shapes | Theme-aware (teal in light) |
| `AnimatedGrid` | Perspective grid background | Theme-aware (teal in light) |
| `MagneticButton` | Mouse-tracking button effect | Wraps Link/button |
| `CountUp` | Number count-up animation | Used in TrustIndicators |

### Section Components Pattern
Each page has dedicated section components in `src/components/sections/{page}/`:
```
sections/
├── home/       # HeroSection, TrustIndicators, ServicesOverview, TestimonialsPreview, CTASection
├── about/      # DoctorBio, Education, Certifications, Philosophy, PersonalMessage
├── booking/    # BookingHeader, ContactForm, BookingInfo, BookingWhatsApp
├── contact/    # ContactPageHeader, ContactInfo, MapEmbed, OfficeHours
├── testimonials/ # TestimonialGrid, TestimonialCard
├── faq/        # FAQList
├── blog/       # BlogGrid, BlogCard, BlogPostLayout
└── patient-info/ # Checklist, DocumentsList, InsuranceInfo
```

## Doctor Info (Dr. Reem Salim Didaan)
- **Specialty**: Orthopedics & Pediatric Orthopedics
- **Title**: Director of Pediatric Orthopedic Services, Zefat Hospital
- **Education**: MD from Technion, residency at Rambam, fellowship at Schneider Children's
- **Clinic**: Rom Medical Center, 18 Alonim St., Ramat Yishai
- **Languages**: Arabic, Hebrew, English
- **Logo**: "Dr." (gold/teal) + "Reem" (dark text in light, light text in dark)

## Deployment
- **Platform**: Vercel
- **Live URL**: https://doctor-kappa-five.vercel.app
- **Process**: `npm run build && vercel --prod`
- **Cache bypass**: `vercel --prod --force` if changes don't appear
- **Git**: main branch, always commit before deploy
