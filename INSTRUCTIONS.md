# Premium App Design System & Feature Blueprint

This document captures **everything** needed to recreate this app's design, structure, and code patterns for a sibling project (e.g., a **B1 Sprechen** app that mirrors the **A2 Sprechen** app). Apply this to any new single-file HTML/Tailwind project to give it the same premium feel.

> **Source app:** Deutsch mit Shakil · Goethe A2 Sprechen
> **Target sibling:** Deutsch mit Shakil · Goethe B1 Sprechen
> **Last updated:** 2026-09

---

## TABLE OF CONTENTS

1. [Tech Stack](#1-tech-stack)
2. [File Structure](#2-file-structure)
3. [Tailwind Configuration](#3-tailwind-configuration)
4. [Global Body & Foundation CSS](#4-global-body--foundation-css)
5. [Premium CSS Utilities](#5-premium-css-utilities)
6. [Color Palette & Dark Mode](#6-color-palette--dark-mode)
7. [Typography](#7-typography)
8. [Brand Logo (SVG Monogram)](#8-brand-logo-svg-monogram)
9. [Layout & Structure](#9-layout--structure)
10. [Settings Popover / Bottom Sheet](#10-settings-popover--bottom-sheet)
11. [Mobile Tab Bar with Sliding Pill](#11-mobile-tab-bar-with-sliding-pill)
12. [Premium Card Pattern](#12-premium-card-pattern)
13. [Frosted Glass Header](#13-frosted-glass-header)
14. [Sound System (Web Audio API)](#14-sound-system-web-audio-api)
15. [Haptic Feedback](#15-haptic-feedback)
16. [Toast Notifications](#16-toast-notifications)
17. [Skeleton Loaders](#17-skeleton-loaders)
18. [Animated Number Counters](#18-animated-number-counters)
19. [Scroll Auto-Hide](#19-scroll-auto-hide)
20. [Tab Switcher & Mobile Indicator](#20-tab-switcher--mobile-indicator)
21. [State Management](#21-state-management)
22. [Icon Maps](#22-icon-maps)
23. [TTS (Text-to-Speech)](#23-tts-text-to-speech)
24. [T2 Timer State Machine (3-state)](#24-t2-timer-state-machine-3-state)
25. [Data Structure Templates](#25-data-structure-templates)
26. [Standard Section File Pattern (teil1.js, etc.)](#26-standard-section-file-pattern)
27. [Quiz Module](#27-quiz-module)
28. [i18n / Language Strategy](#28-i18n--language-strategy)
29. [JavaScript Load Order](#29-javascript-load-order)
30. [Premium Checklist (Quality Gate)](#30-premium-checklist-quality-gate)
31. [Performance Notes](#31-performance-notes)
32. [Accessibility (a11y)](#32-accessibility-a11y)
33. [Cheat-Sheet Constants](#33-cheat-sheet-constants)
34. [Security & Content Protection](#34-security--content-protection)
35. [Step-by-Step Build Guide for B1](#35-step-by-step-build-guide-for-b1)

---

## 1. Tech Stack

- **HTML5** single-file or multi-file (we use multi-file: `index.html` + `assets/`)
- **Tailwind CSS v3** via CDN (`https://cdn.tailwindcss.com`)
- **Font Awesome 6.5** via CDN
- **Google Fonts**: Inter (400-900), Hind Siliguri (Bengali), JetBrains Mono (400-600)
- **No build step** — drop the files anywhere and they work

---

## 2. File Structure

```
your-app/
├── index.html              # HTML markup + script src tags only
├── INSTRUCTIONS.md          # This file (or your own design doc)
└── assets/
    ├── core.js              # State, settings, tabs, sound, audio, theme, init
    ├── teil1.js             # Section 1 data + render + features
    ├── teil2.js             # Section 2 data + render + features
    ├── teil3.js             # Section 3 data + render + features
    ├── instruction.js       # Quiz / practice module
    └── styles.css           # All CSS in one file
```

**Rule of thumb:** keep all assets in one folder. Naming convention: `core.js` for shared infrastructure, then one file per major content section.

---

## 3. Tailwind Configuration

Put this in `<head>` before any `<style>` (BEFORE the Tailwind CDN script loads):

```html
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'Hind Siliguri', 'system-ui', 'sans-serif'],
          bengali: ['Hind Siliguri', 'sans-serif'],
          display: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
        fontSize: {
          '2xs': ['0.7rem',   { lineHeight: '1rem' }],
          'xs':  ['0.78rem',  { lineHeight: '1.15rem' }],
          'sm':  ['0.9rem',   { lineHeight: '1.35rem' }],
          'base':['1.0625rem',{ lineHeight: '1.65rem' }],
          'lg':  ['1.25rem',  { lineHeight: '1.85rem' }],
          'xl':  ['1.5rem',   { lineHeight: '2.1rem' }],
          '2xl': ['1.875rem', { lineHeight: '2.4rem' }],
          '3xl': ['2.25rem',  { lineHeight: '2.7rem' }],
        },
        colors: {
          // Brand-specific
          deRed: '#DD0000',
          deGold: '#FFCC00',
          // GitHub dark mode palette
          ghBg:        '#0d1117',
          ghSurface:   '#161b22',
          ghBorder:    '#30363d',
          ghText:      '#c9d1d9',
          ghTextMuted: '#8b949e',
        }
      }
    }
  }
</script>
```

**Google Fonts link:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Hind+Siliguri:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## 4. Global Body & Foundation CSS

Put in `assets/styles.css`:

```css
* {
    scrollbar-width: thin;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.3);
    border-radius: 9999px;
}
.dark ::-webkit-scrollbar-thumb {
    background: rgba(75, 85, 99, 0.4);
}

* {
    -webkit-user-select: none;
    user-select: none;
}
input, select, textarea, button {
    -webkit-user-select: text;
    user-select: text;
}

html, body {
    touch-action: manipulation;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}
body {
    padding-bottom: env(safe-area-inset-bottom);
}

/* Safe area for sticky/fixed UI */
#mtab-container {
    padding-bottom: calc(0.375rem + env(safe-area-inset-bottom));
}
#settings-panel {
    padding-bottom: calc(2rem + env(safe-area-inset-bottom));
}

/* Typography scale overrides */
.text-base {
    font-size: 1.0625rem !important;
    line-height: 1.65rem !important;
}
.text-lg {
    font-size: 1.5rem !important;
    line-height: 2.1rem !important;
}
[class~="text-[12px]"] {
    font-size: 0.95rem !important;
    line-height: 1.4rem !important;
}
[class~="text-[13px]"] {
    font-size: 1.0625rem !important;
    line-height: 1.5rem !important;
}
.brand-title {
    font-size: 1rem !important;
}
@media (max-width: 639px) {
    .brand-title {
        font-size: 0.75rem !important;
    }
}
.bangla-t2-t3.text-base {
    font-size: 1.25rem !important;
    line-height: 1.85rem !important;
}
.bangla-t2-t3[class~="text-[13px]"] {
    font-size: 1.125rem !important;
    line-height: 1.6rem !important;
}
.t2-heading {
    font-size: 1.375rem !important;
    line-height: 1.95rem !important;
}
.t2-subheading {
    font-size: 1.25rem !important;
    line-height: 1.85rem !important;
}
.t2-control {
    font-size: 1rem !important;
}
.t3-card-icon {
    font-size: 5rem !important;
    line-height: 1;
}
#q-icon {
    font-size: 5rem !important;
    line-height: 1;
}

.font-mono-de {
    font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
    font-feature-settings: "ss02", "cv11";
}
```

**Body class:**
```html
<body class="bg-slate-50 text-slate-800 dark:bg-ghBg dark:text-ghText transition-colors duration-200 font-sans antialiased min-h-screen flex flex-col">
```

---

## 5. Premium CSS Utilities

```css
/* ---------- Press feedback (tap scale) ---------- */
.press {
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.press:active {
    transform: scale(0.96);
}
.press-subtle {
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.press-subtle:active {
    transform: scale(0.98);
}

/* ---------- Card hover lift ---------- */
.card-hover {
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), ring-color 0.25s ease;
}
.card-hover:active {
    transform: scale(0.985) translateY(-1px);
}
.card-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.12), 0 4px 12px -4px rgba(15, 23, 42, 0.06);
}
.dark .card-hover:hover {
    box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
    --tw-ring-color: rgba(255, 255, 255, 0.12);
}

/* ---------- Accent glows (amber) ---------- */
.accent-glow {
    box-shadow: 0 8px 20px -6px rgba(245, 158, 11, 0.35), 0 0 0 1px rgba(245, 158, 11, 0.15);
}
.dark .accent-glow {
    box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.4), 0 8px 24px -6px rgba(245, 158, 11, 0.45), 0 0 32px -8px rgba(245, 158, 11, 0.3);
}
.accent-glow-soft {
    box-shadow: 0 4px 12px -2px rgba(245, 158, 11, 0.2);
}
.dark .accent-glow-soft {
    box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.25), 0 4px 16px -4px rgba(245, 158, 11, 0.3);
}

/* ---------- Active tab glow ---------- */
.tab-btn.active {
    background: #0284c7;
    color: #fff;
    box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
}
.dark .tab-btn.active {
    background: #f59e0b;
    color: #0f172a;
    box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.4), 0 4px 16px -2px rgba(245, 158, 11, 0.35), 0 0 24px -4px rgba(245, 158, 11, 0.2);
}

/* ---------- Skeleton shimmer ---------- */
@keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
}
.skeleton {
    background: linear-gradient(90deg,
        rgba(148, 163, 184, 0.08) 0%,
        rgba(148, 163, 184, 0.18) 50%,
        rgba(148, 163, 184, 0.08) 100%);
    background-size: 800px 100%;
    animation: shimmer 1.4s linear infinite;
    border-radius: 0.5rem;
}
.dark .skeleton {
    background: linear-gradient(90deg,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0.10) 50%,
        rgba(255, 255, 255, 0.04) 100%);
    background-size: 800px 100%;
}
```

**Usage rules:**
- `.press` on prominent buttons (CTAs, social links, big actions)
- `.press-subtle` on small buttons (pills, tabs, toggles, icon buttons)
- `.card-hover` on interactive cards
- `.accent-glow` on primary amber elements in dark mode
- `.accent-glow-soft` on subtle amber elements (badges, brand logo, mobile pill)

---

## 6. Color Palette & Dark Mode

### GitHub dark mode (already added to Tailwind config)
| Token | Hex | Use |
|-------|-----|-----|
| `ghBg` | `#0d1117` | Page background |
| `ghSurface` | `#161b22` | Cards, surfaces |
| `ghBorder` | `#30363d` | Hairline borders (but use `ring-white/5` instead) |
| `ghText` | `#c9d1d9` | Body text |
| `ghTextMuted` | `#8b949e` | Muted text |

### Recommended approach for new apps
1. **Don't use heavy borders in dark mode** — use `ring-1 ring-slate-900/5` (light) or `ring-1 ring-white/5` (dark) instead.
2. **Use layered shadows** in light mode, **ambient shadows** in dark mode.
3. **Accent color (amber `#f59e0b`)** — use for CTAs, active states, brand. In dark mode, add a warm glow.
4. **Bangla text in dark mode** — use `dark:text-slate-200` (instead of `text-slate-500`) for good visibility:
   - `dark:text-slate-500` → `dark:text-slate-200` (brighter)
   - `dark:text-slate-300` → `dark:text-slate-200` (brighter)
   - `dark:text-emerald-400/80` → `dark:text-emerald-200` (brighter)
   - `dark:text-emerald-200` → `dark:text-emerald-100` (brighter)

---

## 7. Typography

The app uses **3 Google Fonts** + a system fallback stack. The font choices are deliberate: Inter is a modern, highly-readable UI sans-serif; Hind Siliguri is the de facto standard for Bengali on the web; JetBrains Mono provides visual distinction for German example text and improves language learning by separating examples from UI chrome.

### 7.1 Google Fonts loaded

The app loads three families from Google Fonts via a single `<link>` tag in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Hind+Siliguri:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

### 7.2 Font families & weights

| Family | Weights | Primary Use | Why this font |
|--------|---------|-------------|---------------|
| **Inter** | 400, 500, 600, 700, 800, 900 | All UI text, headings, buttons, brand | Modern geometric sans-serif designed for screens; excellent legibility at small sizes; open-source; supports Latin + Cyrillic + Greek |
| **Hind Siliguri** | 300, 400, 500, 600, 700 | Bengali (বাংলা) translations | Specifically designed for Bengali script; clear letterforms; matches Inter's vertical metrics; free Google Font |
| **JetBrains Mono** | 400, 500, 600 | German Q&A examples (monospace context) | Tabular figures, ligatures for `fi`/`fl`/`ff`; helps learners visually distinguish example sentences from UI text; free Google Font |

### 7.3 Tailwind fontFamily config

In `tailwind.config` (in `<head>` before any `<style>`), the fonts are registered:

```javascript
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans:    ['Inter', 'Hind Siliguri', 'system-ui', 'sans-serif'],
                bengali: ['Hind Siliguri', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
                mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
            },
            // ...
        }
    }
}
```

**Why each fallback chain matters:**
- `Inter` falls back to `Hind Siliguri` then `system-ui`. This is intentional — if Inter fails to load on a slow network, the page won't fall back to Times New Roman (a default serif); it'll gracefully degrade to a familiar native UI font.
- `mono` falls back to native monospace fonts (`ui-monospace`, `SFMono-Regular`, `Menlo`) so German examples still look monospaced if JetBrains Mono fails.

### 7.4 Body class — default font

The body uses `font-sans` which resolves to the `sans` family chain (Inter → Hind Siliguri → system):

```html
<body class="font-sans antialiased ...">
```

### 7.5 When to use each font

| Font | Tailwind class | Use it for |
|------|----------------|------------|
| Inter (default) | _(no class needed; inherits from body)_ | All UI text, headers, buttons, cards, navigation, brand text |
| Hind Siliguri | `bangla-t2-t3` (custom utility) | **Bengali translations** of German sentences (Q_bn, A1_bn, A2_bn, speech_bn, situation_bn) |
| JetBrains Mono | `font-mono-de` (custom utility) | **German Q&A example sentences** in T1 cards (the question + 2 answer variants) |

### 7.6 Custom font utility classes

In `assets/styles.css`:

```css
/* Bengali translation styling */
.bangla-t2-t3.text-base {
    font-size: 1.25rem !important;
    line-height: 1.85rem !important;
}
.bangla-t2-t3[class~="text-[13px]"] {
    font-size: 1.125rem !important;
    line-height: 1.6rem !important;
}

/* German example styling (monospace) */
.font-mono-de {
    font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
    font-feature-settings: "ss02", "cv11";
}
```

The `font-feature-settings: "ss02", "cv11"` enables stylistic alternates in JetBrains Mono — `ss02` is the **stylistic set 02** (stylized `g` and `l`), and `cv11` is a **character variant** for alternate single-storey `a` — together they give the monospace text a more refined, designed look.

### 7.7 HTML usage examples

**Bengali translation (always paired with `bangla-t2-t3`):**
```html
<p class="bangla-t2-t3 text-[13px] text-slate-500 dark:text-slate-200 font-medium">
  <!-- Bengali text from d.q_bn, d.a1_bn, d.speech_bn, etc. -->
  আমি বার্লিনে থাকি।
</p>
```

**German Q&A example (always paired with `font-mono-de`):**
```html
<p class="text-base font-mono-de whitespace-pre-wrap text-slate-800 dark:text-slate-200 leading-relaxed">
  <!-- German text from d.q, d.a1, d.a2, d.speech -->
  Ich wohne in Berlin.
</p>
```

**Why Bengali uses `bangla-t2-t3` and not `font-bengali` directly:**
The class name `bangla-t2-t3` is a semantic name (used for T2 and T3 sections that have Bengali) so it's easy to find in code. It maps to the `Hind Siliguri` font + custom sizes. The Tailwind class `font-bengali` (auto-generated from the `bengali` font family) would also work but doesn't include the size overrides.

### 7.8 Anti-flicker strategy

The body has `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` to ensure crisp text on macOS and Firefox:

```css
html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}
```

This prevents the default "fake bold" rendering and gives the typography a premium look across all platforms.

### 7.9 Type scale (custom in Tailwind config)

| Class | Size | Line-height | Use |
|-------|------|-------------|-----|
| `text-2xs` | 0.7rem | 1rem | Tiny labels |
| `text-xs` | 0.78rem | 1.15rem | Small captions |
| `text-sm` | 0.9rem | 1.35rem | Small text |
| `text-base` | 1.0625rem | 1.65rem | **Body text (default)** |
| `text-lg` | 1.25rem | 1.85rem | Subheadings |
| `text-xl` | 1.5rem | 2.1rem | Section titles |
| `text-2xl` | 1.875rem | 2.4rem | Big headings |
| `text-3xl` | 2.25rem | 2.7rem | Hero text |

### 7.10 Bangla text pattern

```html
<p class="bangla-t2-t3 text-[13px] text-slate-500 dark:text-slate-200 font-medium">
  <!-- Bengali translation here -->
</p>
```

### 7.11 Adding fonts for B1 or other languages

If you want to add **Hindi** (Devanagari) or **Urdu** (Arabic script) support:

```html
<!-- Add to Google Fonts URL -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Hind+Siliguri:wght@300;400;500;600;700&family=Tiro+Devanagari+Hindi&family=Noto+Nastaliq+Urdu:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

```javascript
// In tailwind.config
fontFamily: {
    sans:    ['Inter', 'Hind Siliguri', 'Tiro Devanagari Hindi', 'system-ui', 'sans-serif'],
    bengali: ['Hind Siliguri', 'sans-serif'],
    hindi:   ['Tiro Devanagari Hindi', 'sans-serif'],
    urdu:    ['Noto Nastaliq Urdu', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif'],
    mono:    ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
}
```

Recommended free Google Fonts for other scripts:
- **Hindi**: Tiro Devanagari Hindi, Noto Sans Devanagari
- **Urdu**: Noto Nastaliq Urdu
- **Arabic**: Noto Sans Arabic, Tajawal
- **Chinese (Simplified)**: Noto Sans SC, ZCOOL KuaiLe
- **Japanese**: Noto Sans JP, M PLUS Rounded 1c
- **Korean**: Noto Sans KR, Nanum Gothic
- **Spanish**: same as English (Inter handles Latin)
- **French**: same as English
- **Russian**: Rubik, Comfortaa (Cyrillic)
- **Vietnamese**: Be Vietnam Pro, Lexend

---

## 8. Brand Logo (SVG Monogram)

Replace any emoji flags with a hand-crafted SVG. For a German-learning app, use a monogram like "DS" with a flag-stripe accent:

```html
<div class="relative w-10 h-10 rounded-xl
  bg-gradient-to-br from-amber-400 via-red-500 to-slate-900
  flex items-center justify-center shadow-md accent-glow-soft overflow-hidden">
  <svg viewBox="0 0 40 40" class="w-7 h-7" xmlns="http://www.w3.org/2000/svg"
    aria-label="Brand logo">
    <defs>
      <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.98"/>
        <stop offset="100%" stop-color="#fef3c7" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <text x="20" y="27" text-anchor="middle"
      font-family="Inter, system-ui, sans-serif"
      font-size="20" font-weight="900"
      letter-spacing="-1"
      fill="url(#brandGradient)">DS</text>
    <!-- Optional brand accent stripe at bottom (German flag) -->
    <rect x="0" y="35" width="13.33" height="5" fill="#000000"/>
    <rect x="13.33" y="35" width="13.34" height="5" fill="#DD0000"/>
    <rect x="26.67" y="35" width="13.33" height="5" fill="#FFCC00"/>
  </svg>
</div>
```

**For B1 app:** change "DS" to whatever your B1 monogram is, or use the same brand but change the bottom stripe colors if desired. Keep the gradient box and SVG structure identical.

---

## 9. Layout & Structure

### `index.html` skeleton (high-level)

```html
<!DOCTYPE html>
<html lang="en" class="dark" translate="no">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your App Name</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="assets/core.js"></script>  <!-- Actually wrong order; see below -->

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Hind+Siliguri:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

  <!-- Stylesheet -->
  <link rel="stylesheet" href="assets/styles.css" />

  <script>
    // Disable right-click (optional)
    document.addEventListener('contextmenu', e => e.preventDefault());
  </script>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-ghBg dark:text-ghText
             transition-colors duration-200 font-sans antialiased
             min-h-screen flex flex-col">

  <!-- ========== TOAST ========== -->
  <div id="toast" class="...">...</div>

  <!-- ========== SETTINGS BACKDROP + PANEL ========== -->
  <div id="settings-backdrop" class="..."></div>
  <div id="settings-panel" class="...">...</div>

  <!-- ========== HEADER ========== -->
  <header class="...">
    <div class="...">  <!-- Brand -->
      <div class="press-subtle flex items-center gap-3 cursor-pointer" onclick="switchTab('t1')">
        <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-red-500 to-slate-900 ...">
          <!-- SVG logo here -->
        </div>
        <div class="leading-tight min-w-0">
          <div class="flex items-center gap-2">
            <span class="brand-title font-extrabold ...">Your App Name</span>
            <span class="text-[13px] ... rounded-full bg-amber-100 ...">A2</span>  <!-- Change to "B1" -->
          </div>
          <p class="hidden sm:block text-[12px] text-slate-500 ...">Tagline here</p>
        </div>
      </div>

      <!-- Desktop Tabs (hidden on mobile) -->
      <nav class="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
        <button onclick="switchTab('t1')" id="tab-t1" class="tab-btn press-subtle active ...">
          <i class="fa-solid fa-comment"></i><span>Teil 1</span>
        </button>
        <!-- More tab buttons -->
      </nav>

      <!-- Header Action Buttons + Settings Cog -->
      <div class="flex items-center gap-2 shrink-0">
        <div id="header-actions" class="flex items-center gap-1.5">
          <!-- Per-tab action buttons (Translation, Timer, etc.) -->
          <button id="t1-bengali-btn" data-tab="t1" class="hdr-action-btn press ...">...</button>
          <!-- More -->
        </div>
        <button id="settings-btn" onclick="toggleSettings()" class="press w-9 h-9 rounded-xl ..." aria-label="Settings">
          <i class="fa-solid fa-cog ..."></i>
        </button>
      </div>
    </div>

    <!-- Mobile Bottom Tab Bar (hidden on desktop) -->
    <div class="md:hidden flex items-center justify-around bg-white/80 dark:bg-ghSurface/80 backdrop-blur-xl border-t border-slate-900/5 dark:border-white/5 py-1.5 text-[12px] font-bold relative" id="mtab-container" style="padding-bottom: calc(0.375rem + env(safe-area-inset-bottom));">
      <span id="mtab-indicator" class="absolute top-1 left-0 h-9 rounded-2xl bg-sky-100 dark:bg-amber-500/15 transition-all duration-300 ease-out pointer-events-none accent-glow-soft" style="width: 0; transform: translateX(0);"></span>
      <button onclick="switchTab('t1')" id="mtab-t1" class="press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-sky-600 dark:text-amber-400" aria-label="Part 1">
        <i class="fa-solid fa-comment text-lg"></i><span>Teil 1</span>
      </button>
      <!-- More -->
    </div>
  </header>

  <!-- ========== MAIN ========== -->
  <main class="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-5 space-y-4">
    <section id="view-t1" class="space-y-4">...</section>
    <section id="view-t2" class="hidden space-y-4">...</section>
    <section id="view-t3" class="hidden space-y-4">...</section>
    <section id="view-quiz" class="hidden space-y-4">...</section>
  </main>

  <!-- ========== FOOTER ========== -->
  <footer class="border-t border-slate-900/5 dark:border-white/5 bg-white/70 dark:bg-ghSurface/70 backdrop-blur-sm py-4 mt-6 text-center text-[12px] text-slate-500 dark:text-ghTextMuted font-medium">
    <!-- social links + registration CTA -->
  </footer>

  <!-- Scripts (load in dependency order) -->
  <script src="assets/core.js"></script>
  <script src="assets/teil1.js"></script>
  <script src="assets/teil2.js"></script>
  <script src="assets/teil3.js"></script>
  <script src="assets/instruction.js"></script>
</body>
</html>
```

---

## 10. Settings Popover / Bottom Sheet

The settings panel is a **bottom sheet on mobile** and a **dropdown on desktop**.

```html
<!-- Backdrop (mobile only) -->
<div id="settings-backdrop"
  class="fixed inset-0 bg-black/50 backdrop-blur-sm
    opacity-0 pointer-events-none transition-opacity duration-300
    z-40 md:hidden"
  onclick="closeSettingsPanel()"></div>

<!-- Panel -->
<div id="settings-panel"
  class="fixed z-50 opacity-0 pointer-events-none
    inset-x-0 bottom-0 w-full
    md:left-auto md:right-4 md:top-16 md:bottom-auto md:w-56
    bg-white dark:bg-ghSurface
    rounded-t-3xl md:rounded-xl
    shadow-lg p-5 md:p-4 pb-8 md:pb-4
    border-t border-x-0 border-b-0
    md:border border-slate-200 dark:border-ghBorder
    transform translate-y-full md:translate-y-0
    transition-all duration-300 ease-out">
  <!-- Mobile drag handle -->
  <div class="md:hidden flex justify-center -mt-1 mb-3">
    <div class="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-white/20"></div>
  </div>

  <!-- Settings rows -->
  <div class="mb-3">
    <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Dark Mode</label>
    <button onclick="toggleTheme()" class="press-subtle w-full h-9 rounded-xl
      bg-slate-100 dark:bg-slate-700
      text-slate-600 dark:text-amber-400
      border border-slate-200 dark:border-slate-600
      flex items-center justify-center transition">
      <i class="fa-solid fa-moon dark:hidden"></i>
      <i class="fa-solid fa-sun hidden dark:block"></i>
    </button>
  </div>
  <div class="mb-3">
    <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Page Zoom</label>
    <select id="page-zoom" onchange="changePageZoom(this.value)" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-1.5 text-[12px] font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400">
      <option value="50">50%</option>
      <option value="80">100%</option>
      <option value="100">110%</option>
    </select>
  </div>
  <div class="mb-3">
    <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Audio Speed</label>
    <select id="tts-speed" onchange="setTtsSpeed(this.value)" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-1.5 text-[12px] font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400">
      <option value="0.6">0.6x</option>
      <option value="0.8">0.8x</option>
      <option value="1.0" selected>1.0x</option>
      <option value="1.2">1.2x</option>
    </select>
  </div>
  <div class="mb-1">
    <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Sound Effects</label>
    <button id="sound-toggle" onclick="toggleSound()" class="press-subtle w-full h-9 rounded-xl
      bg-slate-100 dark:bg-slate-700
      text-slate-600 dark:text-amber-400
      border border-slate-200 dark:border-slate-600
      flex items-center justify-center gap-2 transition text-[12px] font-bold">
      <i id="sound-icon" class="fa-solid fa-volume-high"></i>
      <span id="sound-label">On</span>
    </button>
  </div>
</div>
```

### Settings JS (in `core.js`)

```javascript
let settingsButtonClicked = false;

function openSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const backdrop = document.getElementById('settings-backdrop');
    if (!panel) return;
    panel.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-full', 'md:translate-y-0');
    panel.classList.add('opacity-100', 'pointer-events-auto');
    if (backdrop) {
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        backdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
}

function closeSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const backdrop = document.getElementById('settings-backdrop');
    if (!panel) return;
    panel.classList.remove('opacity-100', 'pointer-events-auto');
    panel.classList.add('opacity-0', 'pointer-events-none');
    if (window.innerWidth < 768) {
        panel.classList.add('translate-y-full');
        panel.classList.remove('md:translate-y-0');
    }
    if (backdrop) {
        backdrop.classList.remove('opacity-100', 'pointer-events-auto');
        backdrop.classList.add('opacity-0', 'pointer-events-none');
    }
}

function toggleSettings() {
    settingsButtonClicked = true;
    haptic(8);
    playTick(800, 0.04, 0.035);
    const panel = document.getElementById('settings-panel');
    if (!panel) return;
    if (panel.classList.contains('opacity-0')) openSettingsPanel();
    else closeSettingsPanel();
}

document.addEventListener('click', function(e) {
    if (settingsButtonClicked) {
        settingsButtonClicked = false;
        return;
    }
    const panel = document.getElementById('settings-panel');
    const btn = document.getElementById('settings-btn');
    const backdrop = document.getElementById('settings-backdrop');
    if (!panel || !btn) return;
    if (!panel.classList.contains('opacity-0')) {
        if (!panel.contains(e.target) && !btn.contains(e.target) && !(backdrop && backdrop.contains(e.target))) {
            closeSettingsPanel();
        }
    }
});
```

---

## 11. Mobile Tab Bar with Sliding Pill

The mobile tab bar is at the bottom of the screen. Each tab has an icon + text. A sliding pill highlights the active tab.

```html
<div class="md:hidden flex items-center justify-around
  bg-white/80 dark:bg-ghSurface/80 backdrop-blur-xl
  border-t border-slate-900/5 dark:border-white/5
  py-1.5 text-[12px] font-bold relative"
  id="mtab-container"
  style="padding-bottom: calc(0.375rem + env(safe-area-inset-bottom));">
  <span id="mtab-indicator"
    class="absolute top-1 left-0 h-9 rounded-2xl
      bg-sky-100 dark:bg-amber-500/15
      transition-all duration-300 ease-out
      pointer-events-none accent-glow-soft"
    style="width: 0; transform: translateX(0);"></span>
  <button onclick="switchTab('t1')" id="mtab-t1"
    class="press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-sky-600 dark:text-amber-400"
    aria-label="Part 1">
    <i class="fa-solid fa-comment text-lg"></i><span>Teil 1</span>
  </button>
  <button onclick="switchTab('t2')" id="mtab-t2" class="press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-slate-500 dark:text-slate-400" aria-label="Part 2">
    <i class="fa-solid fa-microphone text-lg"></i><span>Teil 2</span>
  </button>
  <button onclick="switchTab('t3')" id="mtab-t3" class="press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-slate-500 dark:text-slate-400" aria-label="Part 3">
    <i class="fa-solid fa-handshake text-lg"></i><span>Teil 3</span>
  </button>
  <button onclick="switchTab('quiz')" id="mtab-quiz" class="press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-slate-500 dark:text-slate-400" aria-label="Instruction">
    <i class="fa-solid fa-chalkboard-user text-lg text-amber-500"></i><span>Instr.</span>
  </button>
</div>
```

**Pill positioning JS:**
```javascript
let currentTab = 't1';

function moveMobileTabIndicator(tabId) {
    const indicator = document.getElementById('mtab-indicator');
    const tab = document.getElementById('mtab-' + tabId);
    const container = document.getElementById('mtab-container');
    if (!indicator || !tab || !container) return;
    const tabRect = tab.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const x = tabRect.left - containerRect.left;
    indicator.style.width = tabRect.width + 'px';
    indicator.style.transform = 'translateX(' + x + 'px)';
}

// On init and on resize
requestAnimationFrame(() => moveMobileTabIndicator(currentTab));
window.addEventListener('resize', () => moveMobileTabIndicator(currentTab));
```

---

## 12. Premium Card Pattern

Light: soft slate shadow + hairline ring (no border).
Dark: no shadow + barely-visible white ring (GitHub-style).

```html
<div class="bg-white dark:bg-ghSurface
            ring-1 ring-slate-900/5 dark:ring-white/5
            rounded-2xl p-4 shadow-sm card-hover">
  <!-- content -->
</div>
```

**Common card variants:**

| Purpose | Classes |
|---------|---------|
| Standard card | `bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm card-hover` |
| Section card (bigger padding) | Same but `p-5` or `p-6` |
| Question box (light blue) | `p-2.5 bg-sky-100/15 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-900/50` |
| Answer 1 box (light green) | `p-2.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/50` |
| Answer 2 box (light slate) | `p-2.5 bg-sky-950/23 dark:bg-slate-800/50 rounded-xl border border-sky-200 dark:border-slate-700` |
| Bengali translation box | `p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-900/50` |
| Speech paragraph (T2) | `p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700` |
| Corner word box (T2) | `p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl text-center` |
| Speaker A line (T3) | `p-2.5 bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/50 rounded-xl border` |
| Speaker B line (T3) | `p-2.5 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 rounded-xl border` |
| Badge pill | `text-[12px] font-black px-2 py-0.5 rounded-full bg-<color>-100 text-<color>-800 dark:bg-<color>-950 dark:text-<color>-300` |
| Stat badge count | `.badge-count` (gray light / gray dark) |

---

## 13. Frosted Glass Header

```html
<header class="sticky top-0 z-40
  bg-white/70 dark:bg-ghBg/70
  backdrop-blur-2xl backdrop-saturate-150
  border-b border-slate-900/5 dark:border-white/5
  shadow-sm"
  style="padding-top: env(safe-area-inset-top);">
```

`backdrop-saturate-150` makes the blur more vivid.

---

## 14. Sound System (Web Audio API)

Tiny synthesized ticks and swishes — no audio files needed.

```javascript
let soundEnabled = localStorage.getItem('soundEnabled') !== '0'; // default ON

function getAudioCtx() {
    if (audioCtx) return audioCtx;
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) audioCtx = new Ctx();
    } catch (e) {}
    return audioCtx;
}

// Sine wave tick (for tab switches, toggles)
function playTick(freq = 600, duration = 0.04, vol = 0.04) {
    if (!soundEnabled) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        if (ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {}
}

// Filtered noise burst (for scroll/show-hide)
function playSwish() {
    if (!soundEnabled) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        if (ctx.state === 'suspended') ctx.resume();
        const bufferSize = Math.floor(ctx.sampleRate * 0.18);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const t = i / bufferSize;
            data[i] = (Math.random() * 2 - 1) * (1 - t) * 0.6;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1800;
        filter.Q.value = 0.6;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.025, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
        noise.connect(filter).connect(gain).connect(ctx.destination);
        noise.start();
        noise.stop(ctx.currentTime + 0.18);
    } catch (e) {}
}
```

**Sound tuning guide:**
| Action | Frequency | Duration | Volume |
|---|---|---|---|
| Tab switch | 540 Hz | 35 ms | 0.03 |
| Settings open | 800 Hz | 40 ms | 0.035 |
| Theme toggle | 660 Hz | 50 ms | 0.05 |
| TTS play start | 720 Hz | 50 ms | 0.05 |
| Scroll hide/show | noise | 180 ms | 0.025 |

**Settings toggle UI (HTML):**
```html
<button id="sound-toggle" onclick="toggleSound()"
  class="press-subtle w-full h-9 rounded-xl
    bg-slate-100 dark:bg-slate-700
    text-slate-600 dark:text-amber-400
    border border-slate-200 dark:border-slate-600
    flex items-center justify-center gap-2 transition text-[12px] font-bold">
  <i id="sound-icon" class="fa-solid fa-volume-high"></i>
  <span id="sound-label">On</span>
</button>
```

**Settings toggle JS:**
```javascript
function updateSoundUI() {
    const icon = document.getElementById('sound-icon');
    const label = document.getElementById('sound-label');
    if (!icon || !label) return;
    if (soundEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        label.textContent = 'On';
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        label.textContent = 'Off';
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled ? '1' : '0');
    updateSoundUI();
    if (soundEnabled) {
        haptic(8);
        playTick(660, 0.05, 0.05);
        showToast('Sound effects: ON');
    } else {
        haptic(8);
        showToast('Sound effects: OFF');
    }
    closeSettingsPanel();
}
// Call updateSoundUI() in DOMContentLoaded
```

---

## 15. Haptic Feedback

```javascript
function haptic(ms = 8) {
    if (window.navigator && window.navigator.vibrate) {
        try { window.navigator.vibrate(ms); } catch (e) {}
    }
}
```

| Action | Duration |
|---|---|
| Tab switch | 6 ms |
| Settings toggle | 8 ms |
| Theme toggle | 12 ms |
| Speed/zoom change | 10 ms |

iOS Safari does NOT support `navigator.vibrate` (silent no-op). Android Chrome/Firefox work.

---

## 16. Toast Notifications

```html
<div id="toast" class="fixed top-20 right-4 z-50 pointer-events-none transform
  transition-all duration-300 translate-x-full opacity-0
  bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950
  text-base font-bold px-5 py-3 rounded-2xl shadow-2xl
  flex items-center gap-3 border border-slate-700 dark:border-amber-400">
  <i class="fa-solid fa-circle-check text-amber-400 dark:text-slate-950"></i>
  <span id="toast-msg">Message</span>
</div>
```

```javascript
function showToast(msg) {
    const el = document.getElementById('toast');
    const span = document.getElementById('toast-msg');
    span.textContent = msg;
    el.classList.remove('translate-x-full', 'opacity-0');
    el.classList.add('translate-x-0', 'opacity-100');
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => {
        el.classList.remove('translate-x-0', 'opacity-100');
        el.classList.add('translate-x-full', 'opacity-0');
    }, 2600);
}
```

---

## 17. Skeleton Loaders

Show shimmer placeholders on first render (~180ms), then swap in real content.

```javascript
let initialT1Render = true; // one per section
let initialT2Render = true;
let initialT3Render = true;

function skeletonCard() {
    return `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm space-y-3">
        <div class="flex items-center gap-2"><div class="skeleton h-5 w-10 rounded-full"></div><div class="skeleton h-8 w-8 rounded-full"></div><div class="skeleton h-5 w-32"></div></div>
        <div class="skeleton h-3 w-full"></div>
        <div class="skeleton h-3 w-5/6"></div>
        <div class="skeleton h-3 w-4/6"></div>
    </div>`;
}

function renderWithSkeleton(grid, html, isInitialRender) {
    if (isInitialRender) {
        const skeletonHTML = Array.from({length: 6}, skeletonCard).join('');
        grid.innerHTML = skeletonHTML;
        setTimeout(() => { grid.innerHTML = html; }, 180);
    } else {
        grid.innerHTML = html;
    }
}

// On major state change (e.g., filter toggle), set initialTxRender = true to show skeleton again.
```

**Rule:** Only show skeleton on first render or major state change — NOT on every keystroke in a search box.

---

## 18. Animated Number Counters

```javascript
function animateCount(el, target, duration = 700) {
    if (!el) return;
    const start = parseInt(el.textContent, 10) || 0;
    if (start === target) return;
    const startTime = performance.now();
    function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * eased);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
    }
    requestAnimationFrame(tick);
}

// Usage:
animateCount(document.getElementById('count-badge'), data.length);
```

---

## 19. Scroll Auto-Hide

Hides the desktop nav and mobile tab bar on scroll-down, shows on scroll-up. Uses a 6px movement threshold to prevent jitter, requestAnimationFrame for 60fps, and a 300ms swish debounce.

```javascript
(function() {
    const headerTabs = document.querySelector('header nav.hidden.md\\:flex');
    const mobileTabs = document.querySelector('header .md\\:hidden');
    if (headerTabs) headerTabs.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
    if (mobileTabs) mobileTabs.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
    let lastY = window.scrollY;
    let ticking = false;
    let isHidden = false;
    let lastSwish = 0;
    const THRESHOLD = 6;
    function update() {
        const y = window.scrollY;
        const delta = y - lastY;
        if (Math.abs(delta) < THRESHOLD) { ticking = false; return; }
        if (delta > 0 && y > 80 && !isHidden) {
            if (headerTabs) { headerTabs.style.transform = 'translateY(-100%)'; headerTabs.style.opacity = '0'; }
            if (mobileTabs) { mobileTabs.style.transform = 'translateY(100%)'; mobileTabs.style.opacity = '0'; }
            isHidden = true;
            const now = Date.now();
            if (now - lastSwish > 300) { playSwish(); lastSwish = now; }
        } else if (delta < 0 && isHidden) {
            if (headerTabs) { headerTabs.style.transform = ''; headerTabs.style.opacity = ''; }
            if (mobileTabs) { mobileTabs.style.transform = ''; mobileTabs.style.opacity = ''; }
            isHidden = false;
            const now = Date.now();
            if (now - lastSwish > 300) { playSwish(); lastSwish = now; }
        }
        lastY = y;
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
})();
```

---

## 20. Tab Switcher & Mobile Indicator

The switchTab function handles all tab switching logic — view visibility, tab button styling, header action button visibility, mobile tab bar active state, and search wrap hiding.

```javascript
function switchTab(tab) {
    currentTab = tab;
    haptic(6);
    playTick(540, 0.035, 0.03);
    ['t1', 't2', 't3', 'quiz'].forEach(t => {
        const v = document.getElementById('view-' + t);
        const b = document.getElementById('tab-' + t);
        const m = document.getElementById('mtab-' + t);
        if (t === tab) {
            v.classList.remove('hidden');
            if (b) b.className = 'tab-btn press-subtle active px-3.5 py-1.5 rounded-xl text-base font-bold transition-all flex items-center gap-1.5';
            if (m) m.className = 'press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-sky-600 dark:text-amber-400 text-[12px] font-bold';
        } else {
            v.classList.add('hidden');
            if (b) b.className = 'tab-btn press-subtle px-3.5 py-1.5 rounded-xl text-base font-bold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5';
            if (m) m.className = 'press-subtle relative z-10 flex flex-col items-center gap-0.5 min-w-[64px] h-10 justify-center text-slate-500 dark:text-slate-400 text-[12px] font-bold';
        }
    });
    moveMobileTabIndicator(tab);

    // Show/hide header action buttons based on active tab
    const headerActions = document.getElementById('header-actions');
    if (headerActions) {
        const buttons = headerActions.querySelectorAll('.hdr-action-btn');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-tab') === tab) btn.classList.remove('hidden');
            else btn.classList.add('hidden');
        });
    }

    // Close any open search wraps when switching tabs
    document.querySelectorAll('[id$="-search-wrap"]').forEach(wrap => {
        wrap.classList.add('hidden');
    });

    // Per-tab initialization (button states, renders)
    if (tab === 't1') {
        // ... T1 button states + renderT1()
    }
    if (tab === 't2') {
        // ... T2 button states + renderT2()
    }
    if (tab === 't3') {
        // ... T3 button states + renderT3()
    }
    if (tab === 'quiz') resetQuiz();
}
```

**Tab button HTML pattern:**
```html
<!-- Desktop tab (in nav) -->
<button onclick="switchTab('t1')" id="tab-t1" class="tab-btn press-subtle px-3.5 py-1.5 rounded-xl text-base font-bold transition-all flex items-center gap-1.5">
  <i class="fa-solid fa-comment"></i><span>Teil 1</span>
</button>
```

**Header action button pattern (one per tab, hidden by default):**
```html
<button id="t1-bengali-btn" onclick="toggleT1Bengali()" data-tab="t1" class="hdr-action-btn press hidden px-2 py-1.5 rounded-xl text-[12px] font-bold transition-all bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
  <i class="fa-solid fa-language"></i>
</button>
```

---

## 21. State Management

All global state lives in `core.js` (top of file). Each section file appends to it via direct global references (since classic scripts share the global scope).

```javascript
// ========== GLOBAL STATE (in core.js) ==========
let ttsSpeed = 1.0;
let currentTab = 't1';
let pageZoom = 80;

// T1 state
let t1StudyMode = localStorage.getItem('t1StudyMode') === 'true';
let t1BookmarkFilter = localStorage.getItem('t1BookmarkFilter') === 'true';
let t1ShowBengali = localStorage.getItem('t1ShowBengali') !== 'false';
let t1Bookmarks = new Set(JSON.parse(localStorage.getItem('t1Bookmarks') || '[]'));
let t1RevealedCards = new Set();
let t1Sort = 'az';

// T2 state
let t2TimerRunning = false;
let t2TimerPaused = false;
let t2TimerSeconds = 90;
let t2TimerInterval = null;
let t2ShowBengali = true;
let t2Sort = 'az';

// T3 state
let t3TimerRunning = false;
let t3TimerPaused = false;
let t3TimerSeconds = 180;
let t3TimerInterval = null;
let t3ShowBengali = true;

// Quiz state
let qScore = 0, qTotal = 0, quizQuestions = [];
let quizIndex = 0, quizAdvanceTimer = null, quizTouchStartX = 0;

// Audio
let currentUtterance = null, isAudioPlaying = false;
let currentSpeakingText = '', currentSpeakingBtn = null;
let soundEnabled = localStorage.getItem('soundEnabled') !== '0';
let audioCtx = null;
```

**Important:** Do NOT redeclare these variables in section files (e.g., `teil1.js`, `teil2.js`). That causes `Identifier has already been declared` errors. Section files should only use them, not redeclare.

---

## 22. Icon Maps

Keyword/topic → emoji icon. Put in `core.js`.

```javascript
function getT1Icon(keyword) {
    const map = {
        'Wohnort': '🏠', 'Familie': '👨‍👩‍👧‍👦', 'Beruf': '💼', 'Freizeit': '🎨',
        'Wochenende': '🌅', 'Hobby': '🎯', 'Reisen': '✈️', 'Sprachen': '🗣️',
        'Geburtstag': '🎂', 'Sport': '⚽', 'Lieblingsessen': '🍕',
        'Handy': '📱', 'Internet': '🌐', 'Freunde': '👫', 'Arbeit': '💼',
        'Urlaub': '🏖️', 'Geschenk': '🎁', 'Konzert': '🎵', 'Winter': '❄️',
        // ... add 100+ more for T1
    };
    return map[keyword] || '📝';
}

function getT2Icon(topic) {
    const map = {
        'Freizeit / Sport': '🏃', 'Familie': '👨‍👩‍👧‍👦', 'Urlaub': '✈️',
        'Geburtstag': '🎂', 'Wohnen': '🏠', 'Arbeitstag': '💼',
        'Gesundheit': '🏥', 'Kleidung': '👔', 'Weihnachten': '🎄',
        // ... 25+ more for T2
    };
    return map[topic] || '📝';
}

// For T3, icons are stored directly in the data: d.icon
```

---

## 23. TTS (Text-to-Speech)

```javascript
function setAudioButtonState(btn, playing) {
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (!icon) return;
    if (playing) icon.className = 'fa-solid fa-pause';
    else icon.className = 'fa-solid fa-volume-high';
}

function resetAllAudioButtons() {
    document.querySelectorAll('button i.fa-volume-high, button i.fa-pause').forEach(icon => {
        if (icon.classList.contains('fa-volume-high') || icon.classList.contains('fa-pause')) {
            icon.className = 'fa-solid fa-volume-high';
        }
    });
}

function speakText(text, btn) {
    if (!window.speechSynthesis) return;
    if (currentSpeakingText === text && isAudioPlaying) {
        // Toggle: stop the current audio
        window.speechSynthesis.cancel();
        isAudioPlaying = false;
        currentUtterance = null;
        currentSpeakingText = '';
        setAudioButtonState(currentSpeakingBtn, false);
        currentSpeakingBtn = null;
        return;
    }
    resetAllAudioButtons();
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = ttsSpeed;
    currentUtterance = u;
    isAudioPlaying = true;
    currentSpeakingText = text;
    currentSpeakingBtn = btn;
    setAudioButtonState(btn, true);
    u.onend = () => {
        isAudioPlaying = false;
        currentUtterance = null;
        currentSpeakingText = '';
        setAudioButtonState(btn, false);
        currentSpeakingBtn = null;
    };
    u.onerror = () => {
        isAudioPlaying = false;
        currentUtterance = null;
        currentSpeakingText = '';
        setAudioButtonState(btn, false);
        currentSpeakingBtn = null;
    };
    window.speechSynthesis.speak(u);
    playTick(720, 0.05, 0.05);
}
```

**HTML usage:**
```html
<button onclick="speakText('Hello, how are you?', this)" class="text-amber-400 hover:text-amber-300 p-1">
  <i class="fa-solid fa-volume-high"></i>
</button>
```

---

## 24. T2 Timer State Machine (3-state)

The T2/T3 timer has 3 states. One button handles all:
- **Stopped** (running=false, paused=false, seconds=full): click → **Start**
- **Running** (running=true): click → **Pause**
- **Paused** (running=false, paused=true): click → **Reset** (back to full duration)

```javascript
function toggleT2Timer() {
    if (t2TimerRunning) {
        // Pause
        clearInterval(t2TimerInterval);
        t2TimerInterval = null;
        t2TimerRunning = false;
        t2TimerPaused = true;
        showToast('Timer pausiert – erneut klicken zum Zurücksetzen');
    } else if (t2TimerPaused) {
        // Reset
        t2TimerPaused = false;
        t2TimerSeconds = 90;
        showToast('Timer zurückgesetzt');
    } else {
        // Start
        if (t2TimerSeconds <= 0) t2TimerSeconds = 90;
        t2TimerRunning = true;
        t2TimerInterval = setInterval(() => {
            t2TimerSeconds--;
            updateT2TimerDisplay();
            if (t2TimerSeconds <= 0) {
                clearInterval(t2TimerInterval);
                t2TimerInterval = null;
                t2TimerRunning = false;
                showToast('Zeit abgelaufen!');
            }
        }, 1000);
        showToast('Timer gestartet');
    }
    updateT2TimerDisplay();
}

function updateT2TimerDisplay() {
    // Update legacy header timer (if exists)
    const legacyBtn = document.getElementById('t2-timer-btn');
    const legacyDisplay = document.getElementById('t2-timer-display');
    if (legacyBtn && legacyDisplay) {
        legacyDisplay.textContent = formatTime(t2TimerSeconds);
    }
    // Update all per-card timers
    const displays = document.querySelectorAll('[id^="t2-timer-display-"]');
    displays.forEach(display => {
        display.textContent = formatTime(t2TimerSeconds);
    });
    const buttons = document.querySelectorAll('[id^="t2-timer-btn-"]');
    buttons.forEach(btn => {
        // 3 states: running (red), paused (amber), ready (slate)
        btn.classList.remove(
            'bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200',
            'bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300',
            'bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300'
        );
        if (t2TimerRunning) {
            btn.classList.add('bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300');
        } else if (t2TimerPaused) {
            btn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
        } else {
            btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
        }
    });
}
```

**Timer button HTML (per card, no reset button):**
```html
<button id="t2-timer-btn-${d.id}" onclick="toggleT2Timer()" class="press-subtle px-2 py-1 rounded-lg text-[12px] font-bold transition-all
  bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
  text-slate-700 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-amber-900/30
  hover:text-amber-700 dark:hover:text-amber-300 flex items-center gap-1"
  aria-label="Toggle Timer" title="Timer">
  <i class="fa-solid fa-clock"></i><span id="t2-timer-display-${d.id}">1:30</span>
</button>
```

**Helper:**
```javascript
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
```

---

## 25. Data Structure Templates

### T1: Question-Answer cards
```javascript
const T1_DATA = [
    {
        id: 1,                        // 1-113
        keyword: 'Wohnort',           // German keyword (used for icon lookup)
        bn: 'বাসস্থান',                  // Bengali translation
        q: 'Wo wohnst du?',           // The question
        q_bn: 'তুমি কোথায় থাকো?',     // Bengali for question
        a1: 'Ich wohne in Berlin.',   // Easy answer
        a1_bn: 'আমি বার্লিনে থাকি।',
        a2: 'Ich wohne seit drei Jahren in Berlin.',  // Better answer
        a2_bn: 'আমি তিন বছর ধরে বার্লিনে থাকি।'
    },
    // ... 112 more
];
```

### T2: Monolog speeches
```javascript
const T2_DATA = [
    {
        id: 1,                         // 1-25
        topic: 'Freizeit / Sport',     // Topic (used for icon lookup)
        q: 'Was machen Sie in Ihrer Freizeit?',  // The question
        corner_words: {                // 4 corner words around the question
            top_left: 'Sport treiben',
            top_right: 'Entspannen',
            bottom_left: 'Bücher lesen',
            bottom_right: 'Musik hören'
        },
        speech: 'In meiner Freizeit gehe ich gerne...\n\nDas hilft mir, ...',  // double-newline separated paragraphs
        speech_bn: 'আমি অবসর সময়ে...\n\nএটা আমাকে সাহায্য করে...'  // Bengali translation
    },
    // ... 24 more
];
```

### T3: Dialogues
```javascript
const T3_DATA = [
    {
        id: 1,                        // 1-5
        title: 'Patricks Geburtstag – Geschenk kaufen',
        icon: '🎁',                    // Big icon shown in card
        situation: 'Du planst mit deinem Partner, ein Geschenk zu kaufen.',  // Setting
        situation_bn: 'তুমি তোমার সঙ্গীর সাথে একটি উপহার কেনার পরিকল্পনা করছো।',
        candidateA: {
            label: 'Du',  // Person A
            items: ['Vorschlag: Kinokarten', 'Konzert am Samstag']  // Pre-discussion ideas
        },
        candidateB: {
            label: 'Dein Partner',
            items: ['Vorschlag: Geldgeschenk', 'Gemeinsames Abendessen']
        },
        extra: {
            label: 'Lösung',  // Resolution/solution
            lines: ['Wir kaufen eine Geldbörse.', 'Treffen am Samstag um 15:00.']
        },
        lines: [
            { speaker: 'A', de: 'Hast du eine Idee?', bn: 'তোমার কি কোনো আইডিয়া আছে?' },
            { speaker: 'B', de: 'Wie wäre es mit einer Geldbörse?', bn: 'একটি মানিব্যাগ কেমন হবে?' },
            // ... more dialogue lines
        ]
    },
    // ... 4 more
];
```

### Quiz data (auto-generated from T1/T2/T3)
The quiz dynamically pulls from T1, T2, T3 data — no separate data file needed. See section 27.

---

## 26. Standard Section File Pattern

Every section file (`teil1.js`, `teil2.js`, `teil3.js`) follows this pattern:

```javascript
/* =============================================================
   TEIL N — [Title] ([count] [items])
   ============================================================= */

// ---- DATA ----
const Tn_DATA = [
    // ... entries
];

// ---- STATE ----
let initialTnRender = true;
// (other per-section state lives in core.js)

// ---- RENDER ----
function renderTn() {
    const search = document.getElementById('tn-search').value.trim().toLocaleLowerCase();
    tnSort = document.getElementById('tn-sort').value;
    const grid = document.getElementById('tn-grid');
    const filtered = Tn_DATA.filter(d => {
        // search filter, bookmark filter, etc.
    });
    const data = sortEntries(filtered, tnSort, 'topic');  // or 'keyword'
    animateCount(document.getElementById('tn-count'), data.length);

    if (/* empty state */) {
        grid.innerHTML = `<div>...</div>`;
    } else {
        const cardsHTML = data.map(d => {
            // ... build card HTML
            return `<div class="...">${d.field}</div>`;
        }).join('');
        renderWithSkeleton(grid, cardsHTML, initialTnRender);
        initialTnRender = false;
    }
}

// ---- FEATURES ----
function toggleTnStudyMode() { /* ... */ }
function toggleTnBookmarkFilter() { /* ... */ }
function toggleTnBookmark(id) { /* ... */ }
function toggleTnSearch() { /* ... */ }
function toggleTnCardReveal(id) { /* ... */ }
function clearTnRevealedCards() { /* ... */ }
function toggleTnBengali() { /* ... */ }
function toggleTnTimer() { /* ... 3-state pattern ... */ }
function formatTime(seconds) { /* shared */ }
function updateTnTimerDisplay() { /* ... */ }
function resetTnTimer() { /* ... */ }
```

**Card render template (T1 example):**
```javascript
return `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm card-hover space-y-3 ${cardCursor}" ${cardClickHandler}>
    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 gap-2">
        <div class="flex items-center gap-2 min-w-0 flex-1">
            <span class="text-[12px] font-black px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 shrink-0">#${d.id}</span>
            <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white break-words min-w-0 flex-1">${d.keyword}</h3>
            <span class="text-4xl shrink-0">${getT1Icon(d.keyword)}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
            <button onclick="event.stopPropagation(); toggleT1Bookmark(${d.id})" class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><i class="${bookmarkIcon} text-lg"></i></button>
        </div>
    </div>
    <div class="p-2.5 bg-sky-100/15 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-900/50 space-y-1 relative">
        <div class="flex items-center justify-between text-[12px] font-bold text-sky-700 dark:text-sky-400">
            <span>Frage</span>
            <button onclick="event.stopPropagation(); speakText('${d.q.replace(/'/g,"\\'")}', this)" class="text-amber-400 hover:text-amber-300 p-1 shrink-0"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <p class="text-base font-bold text-slate-900 dark:text-white">${d.q}</p>
        ${showBengali ? `<p class="bangla-t2-t3 text-[13px] text-slate-500 dark:text-slate-200 font-medium">${d.q_bn}</p>` : ''}
    </div>
    <!-- More sections: Antwort 1, Antwort 2 -->
</div>`;
```

**Sort helper (in core.js, used by all sections):**
```javascript
function sortEntries(data, sortMode, keyField = 'keyword') {
    const sorted = [...data];
    if (sortMode === 'random') return sorted.sort(() => Math.random() - 0.5);
    return sorted.sort((a, b) => {
        if (sortMode === 'id') return a.id - b.id;
        const result = a[keyField].localeCompare(b[keyField], 'de', { sensitivity: 'base' });
        return sortMode === 'za' ? -result : result;
    });
}
```

---

## 27. Quiz Module

The quiz dynamically generates questions from T1, T2, T3 data. No separate quiz data file needed.

```javascript
function resetQuiz() {
    clearTimeout(quizAdvanceTimer);
    qScore = 0;
    qTotal = 0;
    quizIndex = 0;
    document.getElementById('q-score').textContent = '0 / 0';
    generateQuiz();
}

function generateQuiz() {
    const filter = document.getElementById('quiz-filter').value;  // 'all' / 't1' / 't2' / 't3'
    const count = parseInt(document.getElementById('quiz-count').value);
    const search = (document.getElementById('quiz-search')?.value || '').trim().toLocaleLowerCase();

    let pool = [];
    if (filter === 'all' || filter === 't1') {
        pool = pool.concat(T1_DATA.map(d => ({ type: 't1', data: d })));
    }
    if (filter === 'all' || filter === 't2') {
        pool = pool.concat(T2_DATA.map(d => ({ type: 't2', data: d })));
    }
    if (filter === 'all' || filter === 't3') {
        T3_DATA.forEach(d => {
            d.lines.forEach(line => {
                if (line.speaker === 'A') {
                    pool.push({ type: 't3', data: { title: d.title, icon: d.icon, de: line.de, bn: line.bn, context: d.situation, context_bn: d.situation_bn } });
                }
            });
        });
    }
    if (search) {
        pool = pool.filter(({ type, data }) => {
            const haystack = [type, data.keyword, data.topic, data.title, data.q, data.speech, data.de, data.bn, data.context, data.a1, data.a2].filter(Boolean).join(' ').toLocaleLowerCase();
            return haystack.includes(search);
        });
    }
    if (count > 0 && count < pool.length) {
        pool = pool.sort(() => Math.random() - 0.5).slice(0, count);
    } else {
        pool = pool.sort(() => Math.random() - 0.5);
    }
    quizQuestions = pool;
    quizIndex = 0;
    qTotal = pool.length;
    document.getElementById('q-score').textContent = qScore + ' / ' + qTotal;
    if (pool.length === 0) {
        // Show empty state
        return;
    }
    showQuestion();
}

function showQuestion() {
    if (quizIndex >= quizQuestions.length) {
        // Show results
        const percentage = qTotal ? Math.round((qScore / qTotal) * 100) : 0;
        document.getElementById('q-title').textContent = 'আপনি সব প্রশ্নের উত্তর দিয়েছেন!';
        document.getElementById('q-final-result').textContent = 'স্কোর: ' + qScore + ' / ' + qTotal + ' · ' + percentage + '%';
        return;
    }
    const item = quizQuestions[quizIndex];
    if (item.type === 't1') {
        // Show T1 question
        const d = item.data;
        // Generate 4 options (1 correct + 3 distractors)
        const opts = [
            { text: d.q, correct: true },
            { text: d.q.replace(' du ', ' Sie ').replace(' deine ', ' Ihre '), correct: false },
            { text: 'Was ist ' + d.keyword + '?', correct: false },
            { text: 'Wie heißt ' + d.keyword + '?', correct: false }
        ].sort(() => Math.random() - 0.5);
        // Render options
    } else if (item.type === 't2') {
        // ... similar
    } else if (item.type === 't3') {
        // ... similar
    }
}

function answerQuiz(isCorrect, btn, explain) {
    if (btn.classList.contains('answered')) return;
    btn.classList.add('answered');
    if (isCorrect) {
        qScore++;
        btn.className = 'w-full text-left p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500 text-emerald-900 dark:text-emerald-200 text-base sm:text-lg font-bold shadow-sm answered';
    } else {
        // Mark red and also highlight the correct one
        btn.className = 'w-full text-left p-3.5 rounded-xl bg-red-100 dark:bg-red-950/80 border border-red-500 text-red-900 dark:text-red-200 text-base sm:text-lg font-bold shadow-sm answered';
        const correctButton = document.querySelector('#q-opts button[data-correct="true"]');
        if (correctButton) {
            correctButton.className = 'w-full text-left p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500 text-emerald-900 dark:text-emerald-200 text-base sm:text-lg font-bold shadow-sm answered';
        }
    }
    document.getElementById('q-exp-text').textContent = (isCorrect ? '✅ সঠিক! ' : '❌ ভুল। ') + explain;
    document.getElementById('q-exp').classList.remove('hidden');
    document.getElementById('q-score').textContent = qScore + ' / ' + qTotal;
    clearTimeout(quizAdvanceTimer);
    quizAdvanceTimer = setTimeout(() => {
        quizIndex++;
        showQuestion();
    }, 1800);
}
```

**Quiz HTML (in `index.html` view-quiz section):**
```html
<section id="view-quiz" class="hidden space-y-4">
    <div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-5 shadow-sm">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
                <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Source</label>
                <select id="quiz-filter" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-1.5 text-[12px] font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="all">All</option>
                    <option value="t1">Teil 1</option>
                    <option value="t2">Teil 2</option>
                    <option value="t3">Teil 3</option>
                </select>
            </div>
            <div>
                <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Count</label>
                <select id="quiz-count" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-1.5 text-[12px] font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="0">All</option>
                </select>
            </div>
            <div>
                <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Search</label>
                <input id="quiz-search" type="search" placeholder="Filter..." class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-1.5 text-[12px] font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
        </div>
    </div>

    <div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-6 shadow-sm space-y-4">
        <div class="flex items-center gap-3">
            <span id="q-badge" class="text-[12px] font-black px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">Teil 1</span>
            <span id="q-progress" class="text-[12px] font-bold text-slate-500 ml-auto">1 / 10</span>
        </div>
        <div id="q-icon" class="text-center text-6xl">💬</div>
        <h3 id="q-title" class="text-lg font-extrabold text-center">Title</h3>
        <p id="q-prompt" class="text-base text-slate-600 dark:text-slate-400 text-center">Pick the correct question</p>
        <div id="q-opts" class="space-y-2"></div>
        <div id="q-exp" class="hidden p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-xl text-[13px] text-blue-900 dark:text-blue-200">
            <span id="q-exp-text"></span>
        </div>
        <div id="q-final-result" class="hidden text-2xl font-extrabold text-center"></div>
        <div id="q-final-message" class="hidden text-center text-base font-bold"></div>
        <div class="flex justify-between items-center pt-2">
            <button id="q-prev" class="press-subtle px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold transition">← Previous</button>
            <div id="q-score" class="text-base font-extrabold text-slate-600 dark:text-slate-300">0 / 10</div>
            <button id="q-next" class="press-subtle px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold transition">Next →</button>
        </div>
    </div>
</section>
```

---

## 28. i18n / Language Strategy

For multilingual learning apps:
- **UI chrome (settings, tooltips, buttons)**: English.
- **Content (lessons, words, examples)**: keep in target language.
- **Translations** (e.g., Bengali): toggle-able via per-section buttons, stored in data.

In `index.html`:
```html
<html lang="en" class="dark" translate="no">
```

- `lang="en"` declares UI language.
- `translate="no"` tells browsers not to offer translation (prevents auto-translation breaking the UI).

---

## 29. JavaScript Load Order

**In `index.html`, at the end of `<body>`:**
```html
<!-- Core script (inlined in <script> tag) - defines state, utilities, init -->
<script>
    // tailwind.config
    // all state vars
    // speakText, setAudioButtonState, resetAllAudioButtons
    // soundEnabled, updateSoundUI, toggleSound
    // haptic, getAudioCtx, playTick, playSwish
    // showToast
    // setTtsSpeed, changePageZoom, toggleTheme
    // settingsButtonClicked, openSettingsPanel, closeSettingsPanel, toggleSettings, document.addEventListener('click', ...)
    // currentTab, moveMobileTabIndicator, switchTab
    // getT1Icon, getT2Icon
    // skeletonCard, renderWithSkeleton, animateCount
    // sortEntries
    // document.addEventListener('DOMContentLoaded', () => { ... })
</script>

<!-- Section modules (in load order; data → features → render) -->
<script src="assets/core.js"></script>
<script src="assets/teil1.js"></script>
<script src="assets/teil2.js"></script>
<script src="assets/teil3.js"></script>
<script src="assets/instruction.js"></script>
```

**Why this order:**
- `core.js` defines state and helpers first
- Section files use those helpers (no need to define their own)
- Each section file uses `let`/`const` in the global scope so functions are visible across all later scripts
- `instruction.js` (quiz) loads last because it depends on `T1_DATA`, `T2_DATA`, `T3_DATA` from all 3 section files

**Important:** In real browsers, classic `<script>` blocks share the global lexical scope, so `const T1_DATA = [...]` declared in `teil1.js` IS accessible from `instruction.js` loaded later. This is **NOT** the case in ES modules (which have module scope), but we use classic scripts for simplicity.

---

## 30. Premium Checklist (Quality Gate)

Use this as a checklist for any new screen/component:

- [ ] Body uses `dark:bg-ghBg dark:text-ghText` (or equivalent dark palette)
- [ ] All cards use `ring-1 ring-slate-900/5 dark:ring-white/5` instead of `border`
- [ ] All cards have `card-hover` class for lift effect
- [ ] All buttons have `press` or `press-subtle` class
- [ ] All interactive elements have `aria-label` and `title` (English)
- [ ] Header uses `backdrop-blur-2xl backdrop-saturate-150` + hairline border
- [ ] Mobile tab bar uses backdrop-blur + sliding pill indicator + text labels
- [ ] Settings is a bottom sheet on mobile, dropdown on desktop
- [ ] Settings closes on: option select, backdrop click, outside click
- [ ] Tab switches trigger `haptic(6)` + `playTick(540)`
- [ ] Theme toggle triggers `haptic(12)` + `playTick(660)`
- [ ] Count badges use `animateCount()` for smooth interpolation
- [ ] First render shows skeletons; subsequent renders are instant
- [ ] Scroll auto-hides nav with threshold + RAF + swish sound
- [ ] No emoji flags — use SVG monograms
- [ ] Safe area insets respected (`env(safe-area-inset-*)`)
- [ ] No emojis in toast/icons unless contextually appropriate
- [ ] Bangla text in dark mode uses `slate-200` or lighter (not `slate-500`)
- [ ] All global state declared ONCE in `core.js` (not redeclared in section files)
- [ ] Each section file uses the standard pattern (data + render + features)

---

## 31. Performance Notes

- **CSS animations only** for `transform` + `opacity` (GPU-accelerated).
- **`requestAnimationFrame`** for any JS-driven animation.
- **Debounce search inputs** (~200ms) to avoid re-renders on every keystroke.
- **Skeleton + render only on first load or major state change** — not on every input.
- **`passive: true`** on all scroll/touch listeners.
- **`will-change: transform`** on the moving pill indicator if it jitters.
- **Lazy `AudioContext`** — create on first user gesture, not on page load (avoids autoplay policy warnings).
- **No external assets** — Tailwind, Font Awesome, Google Fonts all via CDN; SVG monogram inline; all sounds synthesized.

---

## 32. Accessibility (a11y)

- All buttons have `aria-label` and/or visible text
- Color contrast meets WCAG AA (4.5:1 for body text) — GitHub dark mode palette passes
- Focus rings are visible (use `focus:ring-2 focus:ring-amber-400`)
- Keyboard navigation works (Tab, Enter, Arrow keys) — quiz uses ArrowLeft/ArrowRight
- Touch targets are at least 44×44 px on mobile
- Safe area insets respected on iOS
- No motion if user prefers reduced motion (consider adding `@media (prefers-reduced-motion: reduce)` block to disable animations — left as future enhancement)

---

## 33. Cheat-Sheet Constants

```javascript
// Spring easing (used everywhere)
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Standard durations (in ms)
const DUR = {
    instant:  150,  // press feedback
    fast:     200,  // hovers, audio
    normal:   300,  // slides, fades
    slow:     350,  // card lifts
    verySlow: 700,  // counters
};

// Toast auto-dismiss
const TOAST_MS = 2600;

// Skeleton shimmer
const SHIMMER_MS = 180;

// Animation threshold
const SCROLL_THRESHOLD = 6;
const SCROLL_HIDE_AT = 80;
const SWISH_DEBOUNCE = 300;

// Timer durations
const T2_TIMER_SECONDS = 90;   // 1:30
const T3_TIMER_SECONDS = 180;  // 3:00

// Sound volumes (low to avoid harshness)
const VOL = {
    tick: 0.04,
    swish: 0.025,
    chord: 0.07,
    play: 0.05,
};
```

---

## 34. Security & Content Protection

This is an **educational app** that contains original lesson content (Q&A pairs, monologs, dialogues). The app applies **lightweight, client-side content protection** to discourage casual copying — not to prevent determined attackers. True content protection requires server-side authentication and DRM, which is out of scope for a single-file static app.

### 34.1 Philosophy

The security measures follow the **"make casual copying harder, not impossible"** approach:
- ✅ Discourage casual right-click → save image / copy text
- ✅ Discourage tech-savvy users from pressing F12 to peek at source
- ✅ Prevent accidental keyboard shortcut misuse (Ctrl+S, Ctrl+P)
- ❌ Do NOT try to prevent determined attackers (they can use browser dev tools, cURL, etc.)
- ❌ Do NOT rely on client-side security for anything truly sensitive

### 34.2 What's protected

| Protection | Blocks | Bypassable? |
|------------|--------|-------------|
| Right-click disabled | Right-click context menu (and long-press on mobile) | Yes (DevTools, browser menu) |
| Drag prevention | Dragging images out of the page | Yes (DevTools → Network) |
| Keyboard shortcuts blocked | F12, Ctrl+U/S/P, Ctrl+Shift+I/J/C | Yes (DevTools detached) |
| Text selection blocked | Selecting text on the page | Yes (View source) |
| Print disabled (Ctrl+P) | Browser print dialog | Yes (DevTools) |
| Save page disabled (Ctrl+S) | Browser save page | Yes (DevTools) |

### 34.3 What's NOT protected (and why)

| Not protected | Why |
|--------------|-----|
| Server-side content delivery | App is a static HTML file — no server |
| User accounts / login | Not in scope (no personalization) |
| Quiz answer hiding | Answers are rendered client-side; can be inspected via DevTools |
| Network interception | All data is in the JS files, no API calls |
| Image hotlinking | No images to protect (icons are emoji, logo is inline SVG) |
| Source code | All client-side code is necessarily visible |

### 34.4 Implementation (in `index.html`)

The security script is the very first `<script>` in `<head>`, before any other code:

```html
<script>
    // ================================================================
    // SECURITY — Lightweight content protection for educational app
    // (Not a replacement for server-side protection; makes casual
    // copying slightly harder.)
    // ================================================================

    // 1. Disable right-click context menu (long-press on mobile)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 2. Disable image drag (prevents dragging images out of the page)
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    // 3. Block common "view source" / "save page" keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // F12 (DevTools)
        if (e.keyCode === 123) { e.preventDefault(); return false; }
        // Ctrl+Shift+I / Cmd+Opt+I (DevTools)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) { e.preventDefault(); return false; }
        // Ctrl+Shift+J / Cmd+Opt+J (DevTools console)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) { e.preventDefault(); return false; }
        // Ctrl+Shift+C / Cmd+Opt+C (DevTools element inspector)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) { e.preventDefault(); return false; }
        // Ctrl+U / Cmd+U (view source)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) { e.preventDefault(); return false; }
        // Ctrl+S / Cmd+S (save page)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) { e.preventDefault(); return false; }
        // Ctrl+P / Cmd+P (print)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) { e.preventDefault(); return false; }
    });

    // 4. Block text selection on double-click (except in inputs/textareas)
    document.addEventListener('selectstart', function(e) {
        const tag = e.target.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target.isContentEditable) {
            e.preventDefault();
        }
    });

    // 5. Warn on visibility change (optional — discourages tab-switching during quizzes)
    // (Disabled by default; uncomment if you want quiz anti-cheat)
    // document.addEventListener('visibilitychange', function() {
    //     if (document.hidden && quizIndex > 0 && quizIndex < quizQuestions.length) {
    //         showToast('Please don\'t switch tabs during the quiz');
    //     }
    // });
</script>
```

### 34.5 Keyboard shortcuts blocked

| Shortcut | OS | What it does | Why blocked |
|----------|-----|--------------|-------------|
| `F12` | All | Open DevTools | Reveals source code & quiz answers |
| `Ctrl+Shift+I` | Win/Linux | Open DevTools Elements tab | Reveals source code |
| `Cmd+Opt+I` | macOS | Open DevTools Elements tab | Reveals source code |
| `Ctrl+Shift+J` | Win/Linux | Open DevTools Console | Reveals JS variables (incl. quiz state) |
| `Cmd+Opt+J` | macOS | Open DevTools Console | Same |
| `Ctrl+Shift+C` | Win/Linux | Open DevTools Element Inspector | Inspect element structure |
| `Cmd+Opt+C` | macOS | Open DevTools Element Inspector | Same |
| `Ctrl+U` | Win/Linux | View page source | Reveals full HTML source |
| `Cmd+U` | macOS | View page source | Same |
| `Ctrl+S` | Win/Linux | Save page as HTML | Download entire page |
| `Cmd+S` | macOS | Save page as HTML | Same |
| `Ctrl+P` | Win/Linux | Print page | Print quiz answers |
| `Cmd+P` | macOS | Print page | Same |

**Why both `e.key` and `e.keyCode` checks:** Modern browsers prefer `e.key` ('I', 'i', 'J', 'j', etc.), but some older browsers and certain keyboard layouts only support `e.keyCode` (73 for I, 74 for J, 67 for C, 85 for U, 83 for S, 80 for P). Belt-and-suspenders.

**Why `return false` AND `e.preventDefault()`:** Different browsers and event listeners respond to different cancellation methods. Using both is harmless and ensures the event is fully blocked.

### 34.6 What's deliberately NOT blocked

Some shortcuts are intentionally allowed to keep the app usable:

| Shortcut | Why allowed |
|----------|-------------|
| `F5` / `Ctrl+R` (refresh) | Users need to refresh the page |
| `Ctrl+F` / `Cmd+F` (find) | Users may want to search content |
| `Ctrl+Plus/Minus` (zoom) | Browser zoom (separate from our app's `changePageZoom` setting) |
| `Alt+Tab` (window switch) | OS-level, can't block anyway |
| Touch gestures (pinch, swipe) | Hard to block without breaking UX |
| Long-press on mobile | Handled by `contextmenu` prevention |

### 34.7 Text selection strategy

In `assets/styles.css`:

```css
* {
    -webkit-user-select: none;
    user-select: none;
}
input, select, textarea, button {
    -webkit-user-select: text;
    user-select: text;
}
```

This blocks text selection **everywhere on the page** EXCEPT in form elements (where users need to type and edit). This prevents the easy "highlight + Ctrl+C" copying method.

The `selectstart` event handler provides a JS-level backup that **re-enables selection in inputs/textareas** even if CSS is overridden (some users have "force enable selection" extensions).

### 34.8 Drag prevention

```javascript
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
});
```

This blocks the native drag behavior for `<img>` elements. The app doesn't actually have any `<img>` tags (icons are emoji, logo is inline SVG), so this is a **defense-in-depth measure** for the future.

**Why not block all drags?** Blocking all `dragstart` events breaks legitimate drag-and-drop UX (e.g., selecting text in an input, dragging file attachments). Only blocking image drags is safer.

### 34.9 Right-click / long-press prevention

```javascript
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
```

This single listener blocks:
- **Desktop right-click** → context menu (Copy, Save Image As, View Source, Inspect Element)
- **Mobile long-press** → context menu (Copy, Share, Save Image)

It's intentionally global (no `e.target` check) because we want to block all context menus on the page.

### 34.10 If you want to add more security

**For B1 or any new app, you can extend the security script with:**

**1. Detect DevTools opening (heuristic-based, not foolproof):**
```javascript
const threshold = 160;
setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
        // DevTools is likely open
        document.body.innerHTML = '<div style="padding:2rem;color:red;">DevTools detected. This content is protected.</div>';
    }
}, 1000);
```
⚠️ This is **fragile** (false positives in split-screen, browser zoom) and easy to bypass. Use only as a deterrent, not a real protection.

**2. Disable right-click on images only (if you have user-uploaded content):**
```javascript
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') e.preventDefault();
});
```

**3. Add a copyright overlay during screenshot tools:**
```javascript
document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('© Deutsch mit Shakil — content protected');
    }
});
```
⚠️ This only works on Windows; macOS and Linux screenshot tools are unaffected.

**4. Add a watermark overlay (visible deterrant):**
```html
<div class="fixed inset-0 pointer-events-none flex items-end justify-end p-4 opacity-5 text-[12px] text-slate-700">
  © Deutsch mit Shakil · Goethe A2 Sprechen
</div>
```
Makes screenshots look bad (but doesn't prevent them).

**5. Quiz anti-cheat (warn on tab switch):**
```javascript
document.addEventListener('visibilitychange', function() {
    if (document.hidden && quizIndex > 0 && quizIndex < quizQuestions.length) {
        showToast('Please don\'t switch tabs during the quiz');
    }
});
```

**6. Disable right-click on specific elements (e.g., answer cards):**
```javascript
function setupCardProtection(cardElement) {
    cardElement.addEventListener('contextmenu', e => e.preventDefault());
    cardElement.addEventListener('copy', e => e.preventDefault());
    cardElement.addEventListener('cut', e => e.preventDefault());
}
```

### 34.11 What B1 should add (or keep)

For the B1 sibling, **copy the entire security script from A2** as-is. The B1 app has the same structure (T1/T2/T3 + quiz), so the same protections apply. If you add new features (e.g., user accounts, scores saved to cloud), you can extend the security layer with:
- Token-based API authentication (server-side)
- Rate limiting (server-side)
- Content obfuscation (minify JS, hide answers in encrypted blobs — **but this is overkill for static content**)

### 34.12 Compliance considerations

The protections above are **UX-level deterrents**, not security controls. For compliance with:
- **GDPR** (EU privacy) — no personal data collected, no cookies, no analytics. App is compliant by default.
- **COPPA** (US children's privacy) — no data collection, no third-party trackers. Suitable for users under 13.
- **WCAG** (accessibility) — keyboard shortcuts are blocked but mouse/touch still works. Users with screen readers may have issues (e.g., JAWS uses Ctrl+Shift+J). **Consider allowing Ctrl+Shift+J** if you serve users with disabilities.

### 34.13 Testing the protections

To verify each protection works:

1. **Right-click**: Try right-clicking anywhere → no context menu appears ✓
2. **Drag**: Try dragging an SVG or icon → no drag image appears ✓
3. **F12**: Press F12 → nothing happens (in most browsers) ✓
4. **Ctrl+U**: Press Ctrl+U → page doesn't navigate to view-source ✓
5. **Ctrl+S**: Press Ctrl+S → browser save dialog doesn't appear ✓
6. **Ctrl+P**: Press Ctrl+P → print dialog doesn't appear ✓
7. **Text selection**: Try to select paragraph text → can't (use Ctrl+A to verify, which won't work either) ✓
8. **Mobile long-press**: Long-press on the page → no context menu appears ✓

To verify inputs still work:
1. Click in the search input → text is selectable
2. Type → text appears (input accepts text)
3. Select text in the input with mouse drag → works
4. Click in a textarea → text is editable

---

## 35. Step-by-Step Build Guide for B1

### Step 1: Create folder structure
```bash
mkdir b1-app
cd b1-app
mkdir assets
# copy assets/styles.css from the A2 app as starting point
cp /path/to/a2/assets/styles.css assets/styles.css
```

### Step 2: Create `index.html`
- Copy from A2 app
- Change `<title>` to "Deutsch mit Shakil · Goethe B1 Sprechen"
- Change "A2" badge to "B1" in the header
- Update tagline from "Goethe A2 · Sprechen" to "Goethe B1 · Sprechen"
- Update footer text

### Step 3: Create `assets/core.js`
- Copy entire `core.js` from A2 app
- Rename the brand SVG monogram text from "DS" to whatever your B1 brand needs (or keep "DS")
- Optionally tweak the bottom stripe colors if you want B1 to have different brand colors

### Step 4: Create `assets/teil1.js`
- Copy from A2
- **Replace `T1_DATA`** with B1-spezifische Fragen (typically 100-150 cards)
- **Adapt icon map (`getT1Icon`)** in `core.js` to include B1 topics (e.g., 'Karriere', 'Bildung', 'Gesundheit', 'Umwelt', etc.)
- B1 might have different fields than A2 — e.g., add `level: 'B1'` field
- Keep the same data structure (id, keyword, bn, q, q_bn, a1, a1_bn, a2, a2_bn)

### Step 5: Create `assets/teil2.js`
- Copy from A2
- **Replace `T2_DATA`** with B1 monologs (typically 20-30 topics, longer speeches)
- Update icon map (`getT2Icon`) for B1 topics

### Step 6: Create `assets/teil3.js`
- Copy from A2
- **Replace `T3_DATA`** with B1 dialogues (typically 5-8 scenarios, longer conversations)
- Each dialogue has more `lines` than A2 (B1 = longer conversations)

### Step 7: Create `assets/instruction.js`
- Copy from A2 (no changes needed; quiz auto-generates from T1/T2/T3)
- Optionally: update the question prompts to be more B1-appropriate

### Step 8: Update quiz prompts
In `instruction.js` `showQuestion()`, update the prompts to match B1's complexity:
```javascript
// T1 prompt
document.getElementById('q-prompt').textContent = 'Wählen Sie die passende Frage';  // German B1 prompt
// or keep Bengali:
// document.getElementById('q-prompt').textContent = 'সঠিক প্রশ্নটি বেছে নিন';
```

### Step 9: Add B1-specific data fields
For B1, you may want to add additional fields. Examples:

**T1 enhanced:**
```javascript
{
    id: 1,
    keyword: 'Karriere',
    bn: 'ক্যারিয়ার',
    q: 'Was sind Ihre beruflichen Pläne für die nächsten fünf Jahre?',
    q_bn: 'আগামী পাঁচ বছরের জন্য আপনার পেশাগত পরিকল্পনা কী?',
    a1: 'Ich möchte mehr Verantwortung übernehmen.',
    a1_bn: 'আমি আরও বেশি দায়িত্ব নিতে চাই।',
    a2: 'Ich plane, in den nächsten fünf Jahren eine Führungsposition zu übernehmen.',
    a2_bn: 'আমি পরবর্তী পাঁচ বছরে একটি নেতৃত্বের পদ গ্রহণের পরিকল্পনা করছি।',
    // B1-specific additions:
    level: 'B1',
    grammar_focus: 'Konjunktiv II, Futur I',  // Optional
    register: 'formal'  // Optional: 'formal', 'informal', 'neutral'
}
```

**T2 enhanced:**
```javascript
{
    id: 1,
    topic: 'Karriereplanung',
    q: 'Beschreiben Sie Ihren idealen beruflichen Werdegang.',
    corner_words: {
        top_left: 'Weiterbildung',
        top_right: 'Verantwortung',
        bottom_left: 'Karriereziele',
        bottom_right: 'Work-Life-Balance'
    },
    speech: '...',
    speech_bn: '...',
    duration: 90,  // Optional: recommended speech duration in seconds
    level: 'B1'
}
```

**T3 enhanced:**
```javascript
{
    id: 1,
    title: '...',
    icon: '💼',
    situation: '...',
    situation_bn: '...',
    candidateA: { label: '...', items: [...] },
    candidateB: { label: '...', items: [...] },
    extra: { label: '...', lines: [...] },
    lines: [...],  // B1 typically has 12-20 lines per dialogue (vs A1's 6-10)
    level: 'B1'
}
```

### Step 10: Test
1. Open `index.html` in a browser
2. Test all 4 tabs (T1, T2, T3, Quiz)
3. Test settings (Dark Mode, Zoom, Audio Speed, Sound Effects)
4. Test TTS on German text
5. Test timer (3-state pattern)
6. Test mobile view (resize < 768px or open DevTools mobile view)
7. Test quiz (answer questions, see results)

### Step 11: Polish
- Adjust icon maps for B1 topics
- Update toast messages (currently German; consider B1-appropriate)
- Add B1-specific card styles if needed
- Test with B1 learners to refine UX

---

## Quick Reference: What to Change vs. What to Keep

| Component | Change for B1 | Keep the same |
|-----------|---------------|---------------|
| `index.html` title + headers | Yes (A2 → B1) | All HTML structure, settings panel, mobile tab bar |
| `assets/styles.css` | No | All CSS utilities, color palette, dark mode |
| `assets/core.js` | Minimal (icon maps, brand logo) | All state, settings, tabs, sound, haptics, init |
| `assets/teil1.js` | Yes (data + icon map) | Render function structure, features |
| `assets/teil2.js` | Yes (data + icon map) | Render function structure, features |
| `assets/teil3.js` | Yes (data + icon map) | Render function structure, features |
| `assets/instruction.js` | Minimal (prompts) | Quiz logic |

---

## Common Pitfalls

1. **Redeclaring variables in section files** — only declare in `core.js`. Section files just use them.
2. **Forgetting `aria-label`** on icon-only buttons.
3. **Hard borders in dark mode** — use `ring-1 ring-white/5` instead.
4. **Pure black shadows in dark mode** — use `accent-glow` (amber) for important elements.
5. **Skipping skeleton loader** — first render should show shimmer for ~180ms.
6. **Not using `passive: true`** on scroll listeners — hurts performance.
7. **Forgetting safe area insets** on iOS devices with notches.
8. **Using emoji for branding** — use SVG monogram.
9. **Hiding big icons on mobile** — keep them (user prefers them visible).
10. **Forgetting mobile tab bar text labels** — keep them visible.

---

## Final Notes

This design system is **opinionated and cohesive**. Every choice reinforces the others:
- GitHub-dark palette + amber accents = warm, technical, premium
- Spring easing everywhere = consistent, alive, never mechanical
- Multi-sensory feedback (visual + haptic + sound) = tangible, "physical" feel
- Skeletons + counters = "thoughtful" loading
- Frosted glass + safe area + backdrop-blur = native app feel on mobile

When in doubt, look at **Linear**, **Vercel**, **Notion**, **GitHub** for reference. This app sits in that aesthetic family.

---

*Last updated for the Deutsch mit Shakil v7 project. Apply this blueprint to any new single-file Tailwind app to achieve the same premium feel. For the B1 sibling, follow section 35 step-by-step.*
