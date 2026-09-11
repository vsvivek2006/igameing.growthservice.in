# Growth Service Global Design System
**Model 3 as Single Source of Truth**

This document establishes the unified visual language and frontend architecture for `igameing.growthservice.in`. All pages, layouts, and components consume these design tokens to ensure strict brand coherence.

---

## 1. Color Palette Tokens

### Surfaces & Backgrounds
| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `surface.page` / `#050505` | `#050505` | Primary Dark Background | Full page background, main root canvas |
| `surface.section` / `#0B0B12` | `#0B0B12` | Secondary Dark Surface | Alternating content sections, feature panels |
| `surface.card` / `#0D0D18` | `#0D0D18` | Card Surface | Interactive cards, metric displays, accordions |
| `surface.deep` / `#08080F` | `#08080F` | Deep Contrast Surface | High-density benchmark grids, dark proof modules |
| `surface.elevated` / `#12121F` | `#12121F` | Elevated Surface | Dropdown menus, modals, high-elevation cards |
| `surface.glass` | `rgba(13, 13, 24, 0.85)` | Glassmorphism | Header navbar, floating overlays, blur panels |

### Typography Colors
- **Primary Text**: `#FFFFFF` (100% white for titles, primary headings, high-contrast values)
- **Secondary Text**: `#CBD5E1` (Slate-300 for lead paragraphs, card body copy, descriptions)
- **Muted Text**: `#94A3B8` (Slate-400 for subtext, disclaimers, micro labels, timestamps)
- **Dimmed Text**: `#64748B` (Slate-500 for legal footnotes, inactive navigation states)

### Accent & Signal Tokens
- **Primary Accent (Amber / Gold)**: `#FFD700` / `#F59E0B` / `#FBBF24`
  - High-intent CTAs, conversion highlights, trust badges, key performance metrics.
- **Brand Accent (Royal Purple)**: `#6A0DAD` / `#7C3AED` / `#A855F7`
  - Technical engineering badges, atmospheric radial glows, interactive focus rings, primary brand buttons.
- **Success / Action Green**: `#25D366` / `#10B981`
  - Verified performance outcomes, WhatsApp direct lines, status indicators, positive deltas.
- **Error / Vulnerability**: `#EF4444` / `#F43F5E`
  - Penalties, algorithm traps, invalid form fields, negative comparison points.

---

## 2. Typography Hierarchy

Fonts: Headings use **Poppins** (`font-heading`), body text uses **Inter** (`font-sans`).

| Class | Desktop Size / Line-Height | Mobile Size | Role |
| :--- | :--- | :--- | :--- |
| `.type-display` | 4.5rem (72px) / 1.08 | 2.5rem (40px) | Flagship hero titles |
| `.type-h1` | 3.5rem (56px) / 1.1 | 2.25rem (36px) | Page primary titles |
| `.type-h2` | 2.5rem (40px) / 1.15 | 1.75rem (28px) | Section major headers |
| `.type-h3` | 1.75rem (28px) / 1.25 | 1.35rem (22px) | Subsection & feature headers |
| `.type-h4` | 1.25rem (20px) / 1.3 | 1.1rem (18px) | Card titles |
| `.type-body-lg`| 1.125rem (18px) / 1.6 | 1rem (16px) | Hero lead paragraphs |
| `.type-body` | 1rem (16px) / 1.6 | 0.9375rem (15px) | Standard body descriptions |
| `.type-small` | 0.875rem (14px) / 1.5 | 0.8125rem (13px) | Micro copy, card subtext |
| `.type-eyebrow`| 0.75rem (12px) / 1.2 | 0.6875rem (11px) | Uppercase category tracking |
| `.type-label` | 0.6875rem (11px) / Mono | 0.6875rem (11px) | Architectural labels |

---

## 3. Surface & Card System

All cards follow a consistent dark obsidian treatment:
- **Base Card**: `bg-surface-card border border-white/10 rounded-2xl`
- **Interactive Card**: `surface-card surface-card-hover rounded-2xl cursor-pointer`
  - On hover: translates `-4px` vertically, highlights border with `purple-500/40`, expands purple shadow.
- **Glass Card**: `surface-glass rounded-2xl border border-white/10 backdrop-blur-xl`
- **Elevated Card**: `surface-elevated rounded-2xl border border-white/15 shadow-card-dark`

---

## 4. Button System (`<Button />`)

| Variant | Visual Treatment | Primary Intent |
| :--- | :--- | :--- |
| `gold` | Amber gradient (`#F59E0B` to `#D97706`), dark text, gold glow | High-intent audits, primary conversions |
| `primary` | Royal purple gradient (`#7C3AED` to `#4F46E5`), white text | Secondary growth actions, portal explore |
| `outline` | Glass surface, `border-white/15`, hover border amber/purple | Information discovery, calendar bookings |
| `dark` | Translucent obsidian with crisp border | In-card auxiliary actions |
| `ghost` | Transparent, text hover white | Tertiary links, navigation controls |

---

## 5. Layout & Container Rules

- **Standard Container**: `<Container size="lg">` (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- **Reading / Legal Container**: `<Container size="md">` (`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`)
- **Hero Spacing**: `py-16 sm:py-20 lg:py-28`
- **Section Spacing**: `py-16 md:py-24` (Standard), `py-20 md:py-32` (Major)
- **Grid Gutters**: `gap-6` (standard cards), `gap-8` to `gap-12` (feature columns)

---

## 6. Animation Guidelines

Strictly lightweight, performant CSS-only or IntersectionObserver transitions:
- **Zero heavy 3D engines**: No Three.js, no R3F, no GSAP.
- **2.5D Visualizations**: Pure SVG + CSS animations + hardware-accelerated transforms.
- **Reduced Motion**: All animations automatically collapse to static states under `@media (prefers-reduced-motion: reduce)`.
