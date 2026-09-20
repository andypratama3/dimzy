---
name: Artisanal Golden Crisp
colors:
  surface: '#fdf9f5'
  surface-dim: '#ddd9d6'
  surface-bright: '#fdf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ef'
  surface-container: '#f1ede9'
  surface-container-high: '#ebe7e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c19'
  on-surface-variant: '#51443f'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f4f0ec'
  outline: '#83746e'
  outline-variant: '#d5c3bb'
  surface-tint: '#7f5440'
  primary: '#704734'
  on-primary: '#ffffff'
  primary-container: '#8b5f4a'
  on-primary-container: '#ffe5da'
  inverse-primary: '#f2baa1'
  secondary: '#73584c'
  on-secondary: '#ffffff'
  secondary-container: '#fdd8c8'
  on-secondary-container: '#785d50'
  tertiary: '#863b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a9500d'
  on-tertiary-container: '#ffe5d8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#f2baa1'
  on-primary-fixed: '#301305'
  on-primary-fixed-variant: '#643d2a'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#e2bfb0'
  on-secondary-fixed: '#2a170e'
  on-secondary-fixed-variant: '#5a4136'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68d'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#fdf9f5'
  on-background: '#1c1c19'
  surface-variant: '#e5e2de'
typography:
  display-hero:
    fontFamily: Epilogue
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  gutter-desktop: 2.5rem
  margin-desktop: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system embodies an artisanal culinary perspective rooted in the craftsmanship of crisp, golden fried dimsum. It balances heritage warmth with contemporary minimalist elegance. The emotional objective is to evoke immediate craving, warmth, comfort, and refined culinary delight—elevating street food into a gourmet tactile experience.

The design movement merges **Warm Editorial Minimalism** with **Tactile Organic Warmth**. The visual atmosphere relies on generous breathing room, cream and parchment backdrops, rich espresso typography, and golden amber accents that reflect the deep-fried golden crisp texture of the product. The style avoids cold sterile tech patterns, leaning instead toward tactile card containers, delicate warm stroke borders, and subtle organic paper textures.

## Colors

The palette is derived directly from the roasting, steaming, and golden frying processes of artisanal dimsum:

- **Primary (`#8B5F4A`)**: Terracotta chestnut. Anchors key interactions, secondary badges, borders, and subheaders.
- **Secondary (`#3A251B`)**: Deep roasted espresso brown. Serves as the primary typographic and high-contrast structural anchor, honoring the bold clean lettering of the brand identity.
- **Tertiary (`#E07A38`)**: Searing warm amber. Highlights crispy finishes, action tags, pricing ribbons, and call-to-action hover moments.
- **Neutral (`#FCF8F4`)**: Warm parchment cream. Acts as the canvas base to maintain soft warmth across extended browsing, eliminating harsh clinical whites.

Surfaces use subtle variations of cream and warm biscuit hues (`#F5EDE4` for elevated cards, `#EBDCCE` for subtle borders), ensuring depth feels natural and baked into the parchment.

## Typography

The type system pairs **Epilogue** for display headlines with **Plus Jakarta Sans** for body copy and metadata.

- **Epilogue**: Gives headlines an artisanal, contemporary editorial character with structured geometric warmth, reflecting the hand-crimped forms of the dimsum emblem.
- **Plus Jakarta Sans**: Delivers friendly, open curves with high legibility across culinary descriptions, pricing, ingredient lists, and navigation menus.
- **Micro-Copy & Eyebrows**: Formatted with `label-caps` in deep espresso (`#3A251B`) or terracotta (`#8B5F4A`) with generous tracking (`0.12em`) to mirror the wide-tracked subtext of the brand mark.

## Layout & Spacing

The layout is built around a controlled 12-column responsive fluid grid with strict max-width constraints (1280px) on desktop to preserve editorial intimacy:

- **Desktop (1024px+)**: 12 columns with `2.5rem` gutters and `5rem` page margins. Sections utilize generous `space-2xl` breathing room to allow dish photography and hand-crafted stories to breathe.
- **Tablet (768px - 1023px)**: 8 columns with `1.5rem` gutters and `2.5rem` page margins. Card grids collapse to two-column formats.
- **Mobile (<768px)**: 4 columns with `1rem` gutters and `1.25rem` outer margins. Menu cards transition to single-column horizontal or vertical stacked lists with clear touch targets.

Visual separation relies on ample vertical whitespace rather than heavy dividing rules.

## Elevation & Depth

Visual hierarchy uses **warm tonal layering** and **diffused ambient shadows** tinted with rich chestnut tones rather than cool grey drops:

- **Canvas (Level 0)**: `#FCF8F4` warm parchment neutral.
- **Resting Cards (Level 1)**: Pure white `#FFFFFF` or softened alabaster `#FDFBF9` with a microscopic border (`1px solid rgba(139, 95, 74, 0.12)`) and a diffused warm shadow: `0 4px 20px -2px rgba(58, 37, 27, 0.05)`.
- **Hover / Highlight (Level 2)**: Elevated with `0 12px 32px -4px rgba(58, 37, 27, 0.1)` and an active amber or terracotta border glow (`rgba(224, 122, 56, 0.35)`).
- **Floating Modals / Drawers (Level 3)**: Deep, warm backdrops with `0 24px 48px -8px rgba(58, 37, 27, 0.18)`.
- **Dividers & Embellishments**: Subtle hairline borders inspired by the logo's horizontal accent lines, using low-opacity terracotta (`rgba(139, 95, 74, 0.2)`).

## Shapes

The shape language reflects the organic, hand-folded curvature of the dimsum icon:

- **Standard Elements (Cards, Inputs, Dialogue Boxes)**: Employ a `0.5rem` (8px) base radius for balanced structure.
- **Interactive Badges & Buttons**: Utilize `rounded-lg` (1rem / 16px) or full pill curves (`9999px`) for quick-action tag filters and cart buttons, reinforcing an inviting, soft food aesthetic.
- **Image Frames**: Dish cutouts and showcase gallery images use soft `rounded-xl` (1.5rem / 24px) corners with slight inward clipping to emphasize artisanal warmth.

## Components

### Buttons
- **Primary Action**: Solid `#3A251B` espresso background with `#FCF8F4` text. On hover, shifts to `#8B5F4A` with subtle upward transform (`translateY(-1px)`). Pill or `rounded-lg` geometry.
- **Secondary Action**: Warm parchment background with `#3A251B` text and a `1px` border of `#8B5F4A`. On hover, subtle background wash of `rgba(139, 95, 74, 0.08)`.
- **Crispy Highlight CTA**: Vibrant `#E07A38` amber fill with white text for critical actions ("Order Now", "Taste the Crunch").

### Chips & Filter Tags
- Used for taste profiles ("Extra Crispy", "Original Truffle", "Spicy Garlic", "Steam-to-Crisp").
- Resting state: `1px solid rgba(139, 95, 74, 0.2)`, cream background, `body-sm` text.
- Active state: `#8B5F4A` fill with white text and delicate pill radius.

### Menu Cards & Product Showcases
- White surface resting on parchment canvas.
- Crisp photography on top, followed by a wide-tracked category tag (`label-caps`), bold `headline-sm` title, and price in amber `#E07A38`.
- Includes a subtle bottom separator mimicking the thin brand horizontal rules found in the logo.

### Input Fields & Selectors
- Background: `#FFFFFF` with a `1px solid rgba(58, 37, 27, 0.16)` border.
- Active/Focus: Border transitions to `#8B5F4A` with a soft ring glow in `rgba(224, 122, 56, 0.15)`.
- Placeholder text in muted warm grey-brown (`rgba(58, 37, 27, 0.45)`).

### Checkboxes & Radio Buttons
- Rounded `4px` (checkbox) and circular (radio).
- Deep espresso borders, filling with `#8B5F4A` or `#E07A38` when checked, with cream checkmarks.

### Culinary Badges & Taste Notes
- Flavour indicator dots using amber `#E07A38` and chestnut `#8B5F4A`.
- Accented with hand-drawn steamed outline flourishes matching the playful dimsum character in the brand mark.