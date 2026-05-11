# Portfolio System Migration Guide

This document outlines the transition from legacy arbitrary Tailwind classes and semantically inverted spacing to the new musical-editorial design system.

## 1. Color Palette (WCAG AAA)
Background: `#08090A`

| Token | Legacy Hex | New Hex | Contrast |
|-------|------------|---------|----------|
| `--text-secondary` | `#8B8B8B` | `#9B9B9B` | 7.22:1 (AAA) |
| `--accent-amber` | `#B07D52` | `#C48F44` | 7.00:1 (AAA) |
| `--accent-olive` | `#5E6654` | `#757B5B` | 4.52:1 (AA) |

## 2. Spacing System (Musical Dynamics)
The previous inverted system (`section-quiet` > `section-silent`) has been replaced with fluid dynamics.

| Token | Name | Range (px) | Usage |
|-------|------|------------|-------|
| `--spacing-pp` | Pianissimo | 80 - 120 | Compressed content |
| `--spacing-p` | Piano | 120 - 160 | Standard sections |
| `--spacing-f` | Forte | 160 - 240 | Generous breathing room |
| `--spacing-ff` | Fortissimo | 240 - 320 | Hero and landing blocks |

**Find/Replace:**
- `section-quiet` → `.section-pp`
- `section-silent` → `.section-p`
- `section-standard` → `.section-f`
- `section-generous` → `.section-ff`

## 3. Typography Scale (Editorial)
Fluid scale using Major Third ratio (1.25).

| Token | Step | Name | Usage |
|-------|------|------|-------|
| `--text-step-5` | 5 | `.text-display` | Hero H1 |
| `--text-step-4` | 4 | `.text-headline` | Section H2 |
| `--text-step-3` | 3 | `.text-subhead` | Card Titles / H3 |
| `--text-step-2` | 2 | `.text-lead` | Lead Paragraphs |
| `--text-step-1` | 1 | `.text-body` | Standard Body (16px) |
| `--text-step-0` | 0 | `.text-caption` | Metadata / Labels |

**Find/Replace:**
- `text-5xl` → `.text-display`
- `text-3xl` → `.text-headline`
- `text-xl` → `.text-subhead`
- `text-[clamp(...)]` → `.text-display` | `.text-headline` | `.text-subhead`

## Component Migration Checklist
- [x] `App.tsx`: Updated footer typography.
- [x] `Hero.tsx`: Updated display typography and fortissimo spacing.
- [x] `About.tsx`: Updated headline and lead typography, piano spacing.
- [x] `Projects.tsx`: Updated headlines, subheads, and body copy.
- [x] `Experience.tsx`: Updated timeline markers and expertise typography.
- [x] `Testimonials.tsx`: Updated quote and metadata typography.
- [x] `VisualWorks.tsx`: Updated editorial grid typography.
- [x] `Contact.tsx`: Updated form labels and lead text.
