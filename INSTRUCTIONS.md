# Premium App Design System & Feature Blueprint

This document captures the design tokens, premium interaction patterns, and code conventions used in the **Deutsch mit Shakil · Goethe A2 Sprechen** app. Apply these to any new single-file HTML/Tailwind project to give it the same premium feel.

---

## 1. Tech Stack

- **HTML5** single-file (everything inline: `<style>`, `<script>`, Tailwind config)
- **Tailwind CSS v3** via CDN (`https://cdn.tailwindcss.com`)
- **Font Awesome 6.5** via CDN
- **Google Fonts**: Inter (400-900), Hind Siliguri (Bengali), JetBrains Mono (400-600)
- **No build step** — drop the HTML file anywhere and it works

---

## 2. Tailwind Configuration

Put this in the `<head>` before any other `<style>`:

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
          deRed: '#DD0000',
          deGold: '#FFCC00',
          ghBg:        '#0d1117',  // GitHub page bg
          ghSurface:   '#161b22',  // GitHub card bg
          ghBorder:    '#30363d',  // GitHub border
          ghText:      '#c9d1d9',  // GitHub text
          ghTextMuted: '#8b949e',  // GitHub muted
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

## 3. Global Body & Foundation CSS

Add to your `<style>` block:

```css
html, body {
  touch-action: manipulation;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body {
  padding-bottom: env(safe-area-inset-bottom);
}

* {
  scrollbar-width: thin;
  -webkit-user-select: none;
  user-select: none;
}
input, select, textarea, button {
  -webkit-user-select: text;
  user-select: text;
}
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.3);
  border-radius: 9999px;
}
.dark ::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.4);
}
```

**Body class:** `class="bg-slate-50 text-slate-800 dark:bg-ghBg dark:text-ghText transition-colors duration-200 font-sans antialiased min-h-screen flex flex-col"`

---

## 4. Core Premium CSS Utilities

Copy these into your `<style>` block — they power the "premium" feel:

```css
/* ---------- PRESS FEEDBACK ---------- */
.press {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.press:active { transform: scale(0.96); }

.press-subtle {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.press-subtle:active { transform: scale(0.98); }

/* ---------- CARD HOVER LIFT ---------- */
.card-hover {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              ring-color 0.25s ease;
}
.card-hover:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.12),
              0 4px 12px -4px rgba(15, 23, 42, 0.06);
}
.dark .card-hover:hover {
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
  --tw-ring-color: rgba(255, 255, 255, 0.12);
}

/* ---------- ACCENT GLOWS (for warm amber highlights) ---------- */
.accent-glow {
  box-shadow: 0 8px 20px -6px rgba(245, 158, 11, 0.35),
              0 0 0 1px rgba(245, 158, 11, 0.15);
}
.dark .accent-glow {
  box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.4),
              0 8px 24px -6px rgba(245, 158, 11, 0.45),
              0 0 32px -8px rgba(245, 158, 11, 0.3);
}
.accent-glow-soft {
  box-shadow: 0 4px 12px -2px rgba(245, 158, 11, 0.2);
}
.dark .accent-glow-soft {
  box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.25),
              0 4px 16px -4px rgba(245, 158, 11, 0.3);
}

/* ---------- SKELETON SHIMMER (initial load) ---------- */
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
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

/* ---------- ACTIVE TAB GLOW ---------- */
.tab-btn.active {
  background: #0284c7;
  color: #fff;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
}
.dark .tab-btn.active {
  background: #f59e0b;
  color: #0f172a;
  box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.4),
              0 4px 16px -2px rgba(245, 158, 11, 0.35),
              0 0 24px -4px rgba(245, 158, 11, 0.2);
}
```

**Use `.press` on big buttons** (CTAs, social links, action buttons).
**Use `.press-subtle` on small buttons** (pills, tabs, toggles).
**Use `.card-hover` on interactive cards**.
**Use `.accent-glow` / `.accent-glow-soft` for amber-themed elements in dark mode** (CTA buttons, badges, brand logo, active tab).

---

## 5. The Premium Card Pattern

Light: soft slate shadow + hairline ring (no border).
Dark: no shadow + barely-visible white ring (GitHub-style).

```html
<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm card-hover">
  <!-- content -->
</div>
```

**Heights:** 4 = card, 5 = section, 6 = major section.

---

## 6. Frosted Glass Header

```html
<header class="sticky top-0 z-40
  bg-white/70 dark:bg-ghBg/70
  backdrop-blur-2xl backdrop-saturate-150
  border-b border-slate-900/5 dark:border-white/5
  shadow-sm"
  style="padding-top: env(safe-area-inset-top);">
  <!-- header content -->
</header>
```

`backdrop-saturate-150` makes the blur more vivid.

---

## 7. Icon-Only Mobile Bottom Tabs with Sliding Pill

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
    class="press-subtle relative z-10 flex flex-col items-center
      gap-0.5 w-14 h-10 justify-center
      text-sky-600 dark:text-amber-400"
    aria-label="Tab 1">
    <i class="fa-solid fa-comment text-lg"></i>
  </button>
  <!-- repeat for each tab -->
</div>
```

**Pill positioning JS:**
```js
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

## 8. Settings Popover (Desktop Dropdown) / Bottom Sheet (Mobile)

```html
<!-- Backdrop for mobile only -->
<div id="settings-backdrop"
  class="fixed inset-0 bg-black/50 backdrop-blur-sm
    opacity-0 pointer-events-none transition-opacity duration-300
    z-40 md:hidden"
  onclick="closeSettingsPanel()"></div>

<!-- Panel: bottom sheet on mobile, dropdown on desktop -->
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
  <!-- content -->
</div>
```

```css
#settings-panel {
  padding-bottom: calc(2rem + env(safe-area-inset-bottom));
}
```

**Toggle JS:**
```js
let settingsButtonClicked = false;
function openSettingsPanel() {
  const panel = document.getElementById('settings-panel');
  const backdrop = document.getElementById('settings-backdrop');
  if (!panel) return;
  panel.classList.remove('opacity-0', 'pointer-events-none',
    'translate-y-full', 'md:translate-y-0');
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

// Close on outside click (backdrop already has its own onclick)
document.addEventListener('click', function(e) {
  if (settingsButtonClicked) { settingsButtonClicked = false; return; }
  const panel = document.getElementById('settings-panel');
  const btn = document.getElementById('settings-btn');
  const backdrop = document.getElementById('settings-backdrop');
  if (!panel || !btn) return;
  if (!panel.classList.contains('opacity-0')) {
    if (!panel.contains(e.target) && !btn.contains(e.target)
        && !(backdrop && backdrop.contains(e.target))) {
      closeSettingsPanel();
    }
  }
});
```

---

## 9. Sound System (Web Audio API)

Tiny synthesized ticks and swishes — no audio files needed.

```js
let audioCtx = null;
let soundEnabled = localStorage.getItem('soundEnabled') !== '0'; // default ON

function getAudioCtx() {
  if (audioCtx) return audioCtx;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  } catch (e) { /* ignore */ }
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
  } catch (e) { /* ignore */ }
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
  } catch (e) { /* ignore */ }
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

**Add a settings toggle:**
```html
<div class="mb-1">
  <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">Sound Effects</label>
  <button id="sound-toggle" onclick="toggleSound()"
    class="press-subtle w-full h-9 rounded-xl bg-slate-100 dark:bg-slate-700
      text-slate-600 dark:text-amber-400 border border-slate-200 dark:border-slate-600
      flex items-center justify-center gap-2 transition text-[12px] font-bold">
    <i id="sound-icon" class="fa-solid fa-volume-high"></i>
    <span id="sound-label">On</span>
  </button>
</div>
```

```js
function updateSoundUI() {
  const icon = document.getElementById('sound-icon');
  const label = document.getElementById('sound-label');
  if (!icon || !label) return;
  if (soundEnabled) { icon.className = 'fa-solid fa-volume-high'; label.textContent = 'On'; }
  else { icon.className = 'fa-solid fa-volume-xmark'; label.textContent = 'Off'; }
}
function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem('soundEnabled', soundEnabled ? '1' : '0');
  updateSoundUI();
  if (soundEnabled) { haptic(8); playTick(660, 0.05, 0.05); showToast('Sound effects: ON'); }
  else { haptic(8); showToast('Sound effects: OFF'); }
  closeSettingsPanel();
}
// Call updateSoundUI() in DOMContentLoaded
```

---

## 10. Haptic Feedback

```js
function haptic(ms = 8) {
  if (window.navigator && window.navigator.vibrate) {
    try { window.navigator.vibrate(ms); } catch (e) { /* ignore */ }
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

## 11. Toast Notifications

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

```js
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

## 12. Skeleton Loader (Initial Render)

```js
let initialT1Render = true; // per section

function skeletonCard() {
  return `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5
    dark:ring-white/5 rounded-2xl p-4 shadow-sm space-y-3">
    <div class="flex items-center gap-2">
      <div class="skeleton h-5 w-10 rounded-full"></div>
      <div class="skeleton h-8 w-8 rounded-full"></div>
      <div class="skeleton h-5 w-32"></div>
    </div>
    <div class="skeleton h-3 w-full"></div>
    <div class="skeleton h-3 w-5/6"></div>
    <div class="skeleton h-3 w-4/6"></div>
  </div>`;
}

function renderWithSkeleton(grid, html, isInitialRender) {
  if (isInitialRender) {
    grid.innerHTML = Array.from({length: 6}, skeletonCard).join('');
    setTimeout(() => { grid.innerHTML = html; }, 180);
  } else {
    grid.innerHTML = html;
  }
}

// On major state change (e.g., filter toggle), set initialTxRender = true
// to show the skeleton again.
```

**Only show skeleton on first render or major state change** — don't show it on every keystroke in a search box (causes flicker).

---

## 13. Animated Number Counters

```js
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

## 14. Refined Scroll Auto-Hide

```js
(function() {
  const headerTabs = document.querySelector('header nav');
  const mobileTabs = document.querySelector('header .md\\:hidden');
  if (headerTabs) headerTabs.style.transition =
    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
  if (mobileTabs) mobileTabs.style.transition =
    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
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

**Key details:**
- 6px movement threshold (prevents jitter)
- `requestAnimationFrame` throttling (60fps max)
- Spring easing `cubic-bezier(0.16, 1, 0.3, 1)`
- 80px scroll before hiding starts
- 300ms swish debounce (no spam)

---

## 15. Brand Logo (SVG Monogram)

Replace emoji flags with hand-crafted SVGs:

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
      fill="url(#brandGradient)">XX</text>
    <!-- Optional brand accent stripe at bottom -->
    <rect x="0" y="35" width="13.33" height="5" fill="#000000"/>
    <rect x="13.33" y="35" width="13.34" height="5" fill="#DD0000"/>
    <rect x="26.67" y="35" width="13.33" height="5" fill="#FFCC00"/>
  </svg>
</div>
```

**Key details:**
- `overflow-hidden` keeps the bottom stripe flush.
- Tight `letter-spacing: -1` for premium typography feel.
- Use the app's display font (Inter) inside the SVG.
- `accent-glow-soft` for the warm halo in dark mode.

---

## 16. Settings Panel Content (Standard Pattern)

```html
<div class="mb-3">
  <label class="block text-[12px] font-bold text-slate-600 dark:text-slate-300 mb-1">
    Label
  </label>
  <!-- Either a select, a button toggle, or any control -->
  <button class="press-subtle w-full h-9 rounded-xl
    bg-slate-100 dark:bg-slate-700
    text-slate-600 dark:text-amber-400
    border border-slate-200 dark:border-slate-600
    flex items-center justify-center transition">
    <i class="fa-solid fa-icon"></i>
  </button>
  <!-- Or a select -->
  <select class="w-full bg-slate-50 dark:bg-slate-900
    border border-slate-200 dark:border-slate-700
    rounded-xl px-2 py-1.5 text-[12px] font-bold
    text-slate-700 dark:text-slate-200
    focus:outline-none focus:ring-2 focus:ring-amber-400">
    <option>...</option>
  </select>
</div>
```

After any selection, call `closeSettingsPanel()` and `haptic(10)`.

---

## 17. i18n: English UI, Content Stays Native

- **Settings labels, tooltips, button titles**: English.
- **Domain content** (course names, learning content): keep in original language.
- `aria-label` and `title` on every interactive element.

---

## 18. Dark Mode Strategy: GitHub-Inspired

GitHub dark palette (use as `ghBg`, `ghSurface`, `ghBorder`, `ghText`, `ghTextMuted`):
- Page: `#0d1117`
- Card/Surface: `#161b22`
- Border: `#30363d` (but use `ring-1 ring-white/5` instead — barely visible)
- Text: `#c9d1d9`
- Muted: `#8b949e`

**Accent color in dark mode:** Slightly desaturated gold `#d29922` works well (more pleasant than bright `#f59e0b` for large areas; keep `#f59e0b` for buttons/active states).

---

## 19. Reusable Patterns Summary

When building a new screen, follow this template:

```html
<section id="view-X" class="space-y-5">
  <!-- Header card with controls -->
  <div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5
    dark:ring-white/5 rounded-2xl p-5 shadow-sm">
    <div class="mb-4">
      <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">
        Section Title
      </h2>
      <p class="text-base text-slate-600 dark:text-slate-400">
        Subtitle / description
      </p>
    </div>
    <!-- Action row -->
    <div class="flex items-center gap-2 flex-wrap">
      <span class="badge-count mr-auto">0</span>
      <button class="press w-9 h-9 rounded-xl ...">...</button>
      <select class="...">...</select>
    </div>
  </div>

  <!-- Content grid -->
  <div id="X-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
</section>
```

**Badge count style:**
```css
.badge-count {
  font-size: 0.8rem;
  background: #e2e8f0;
  color: #1e293b;
  padding: 0.1rem 0.6rem;
  border-radius: 9999px;
  font-weight: 700;
}
.dark .badge-count {
  background: #334155;
  color: #e2e8f0;
}
```

---

## 20. Tab Switcher Template

```js
let currentTab = 't1';

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
      if (b) b.className = 'tab-btn press-subtle active ...';
      if (m) m.className = 'press-subtle relative z-10 ... text-sky-600 dark:text-amber-400';
    } else {
      v.classList.add('hidden');
      if (b) b.className = 'tab-btn press-subtle ... text-slate-600 dark:text-slate-400';
      if (m) m.className = 'press-subtle relative z-10 ... text-slate-500 dark:text-slate-400';
    }
  });
  moveMobileTabIndicator(tab);
  // Show/hide header actions, close search wraps, etc.
}
```

---

## 21. The Standard `init` Block

```js
document.addEventListener('DOMContentLoaded', () => {
  // Render initial data
  renderSection1();
  renderSection2();

  // Theme
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
  }

  // Apply persisted settings (page zoom, etc.)
  applyPageZoom();

  // Re-render (some sections need theme context)
  renderSection1();
  renderSection2();

  // Reset interactive state
  resetInteractive();

  // Initialize UI state
  requestAnimationFrame(() => moveMobileTabIndicator(currentTab));
  window.addEventListener('resize', () => moveMobileTabIndicator(currentTab));
  updateSoundUI();

  // Hide transient UI
  document.querySelectorAll('[id$="-search-wrap"]').forEach(w => w.classList.add('hidden'));

  // Set up event listeners
  setupSwipeGestures();
  setupKeyboardShortcuts();
});
```

---

## 22. The Complete Premium Checklist

Use this as a quality gate for any new screen/component:

- [ ] Body uses `dark:bg-ghBg dark:text-ghText` (or equivalent dark palette)
- [ ] All cards use `ring-1 ring-slate-900/5 dark:ring-white/5` instead of `border`
- [ ] All cards have `card-hover` class for lift effect
- [ ] All buttons have `press` or `press-subtle` class
- [ ] All interactive elements have `aria-label` and `title` (English)
- [ ] Header uses `backdrop-blur-2xl backdrop-saturate-150` + hairline border
- [ ] Mobile tab bar uses backdrop-blur + sliding pill indicator
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

---

## 23. Key Constants Cheat-Sheet

```js
// Spring easing (used everywhere)
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Standard durations
const DUR = {
  instant:  150,  // press feedback
  fast:     200,  // hovers
  normal:   300,  // slides, fades
  slow:     400,  // cards
  verySlow: 700,  // counters
};

// Stagger delay per card
const STAGGER = 25; // ms per card index, capped at 750ms total
```

---

## 24. Files to Reference in This App

When building features for this app, these are the key areas:

- **Tailwind config**: search for `tailwind.config` (~line 15)
- **Global CSS utilities**: search for `.press`, `.card-hover`, `.accent-glow`
- **Sound system**: search for `playTick`, `playSwish`
- **Settings panel HTML**: search for `id="settings-panel"`
- **Settings JS logic**: search for `openSettingsPanel` / `closeSettingsPanel`
- **Mobile tab bar**: search for `id="mtab-container"`
- **Skeleton loader**: search for `function skeletonCard`
- **Animated count**: search for `function animateCount`
- **Scroll auto-hide**: search for `Auto-hide tabs on scroll`
- **Brand logo SVG**: search for `id="settings-btn"` (just above the cog)

---

## 25. Reusable Components (Copy-Paste Ready)

### Toast trigger
```html
<button onclick="showToast('Saved!')">Save</button>
```

### Confirm action with feedback
```js
function confirmAction() {
  haptic(10);
  playTick(720, 0.05, 0.05);
  showToast('Done!');
}
```

### Loading state for any button
```html
<button class="press-subtle" disabled>
  <i class="fa-solid fa-spinner fa-spin"></i> Loading...
</button>
```

### Error state
```js
function showError(msg) {
  showToast(msg);
  haptic(20);
  // Optional: shake the offending element
  const el = document.querySelector('.error-target');
  if (el) {
    el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-6px)' },
      { transform: 'translateX(6px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(0)' }
    ], { duration: 300 });
  }
}
```

---

## 26. Performance Notes

- **CSS animations only** for transform + opacity (GPU-accelerated).
- **requestAnimationFrame** for any JS-driven animation.
- **Debounce search inputs** (~200ms) to avoid re-renders on every keystroke.
- **Skeleton + render only on first load or major state change** — not on every input.
- **passive: true** on all scroll/touch listeners.
- **will-change: transform** on the moving pill indicator if it jitters.
- **Lazy AudioContext** — create on first user gesture, not on page load.

---

## 27. Accessibility (a11y) Checklist

- [ ] All buttons have `aria-label` and/or visible text
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Focus rings are visible (use `focus:ring-2 focus:ring-amber-400`)
- [ ] Keyboard navigation works (Tab, Enter, Arrow keys)
- [ ] Touch targets are at least 44×44 px on mobile
- [ ] Safe area insets respected on iOS
- [ ] No motion if user prefers reduced motion (consider adding `@media (prefers-reduced-motion: reduce)` block to disable animations)

---

## 28. Final Notes

This design system is **opinionated and cohesive**. Every choice reinforces the others:
- GitHub-dark palette + amber accents = warm, technical, premium
- Spring easing everywhere = consistent, alive, never mechanical
- Multi-sensory feedback (visual + haptic + sound) = tangible, "physical" feel
- Skeletons + counters + staggers = "thoughtful" loading
- Frosted glass + safe area + backdrop-blur = native app feel on mobile

When in doubt, look at **Linear**, **Vercel**, **Notion**, **GitHub** for reference. This app sits in that aesthetic family.

---

*Last updated for the Deutsch mit Shakil v7 project. Apply this blueprint to any new single-file Tailwind app to achieve the same premium feel.*
