# Panarwala & Associates — Refactored Frontend Architecture

## File Structure

```
src/
├── config.js                   # ← Global brand/contact/social config
├── services.js                 # ← Single source of truth for ALL service data
│
├── hooks/
│   └── useInView.js            # ← Shared IntersectionObserver hook (fire-once)
│
├── components/
│   ├── Logo.jsx / .css         # ← Reusable logo (dark/light variant, sm/md/lg size)
│   ├── ServiceCard.jsx / .css  # ← Accessible card (role=button, keyboard nav)
│   ├── SectionTitle.jsx / .css # ← Eyebrow + heading + subtitle pattern
│   └── LoadingSpinner.jsx/.css # ← Suspense fallback with aria-label
│
├── App.jsx                     # ← Root shell (state-based routing, skip link)
├── TopBar.jsx / TopBar.css     # ← Contact + social bar (data from config.js)
├── Navbar.jsx / Navbar.css     # ← Sticky nav (uses Logo component)
├── Home.jsx / Home.css         # ← Hero + services grid (data from services.js)
├── Footer.jsx / Footer.css     # ← Footer (data from services.js + config.js)
├── ServicePage.jsx/.css        # ← Service detail (data from services.js)
├── Icons.jsx                   # ← Pure SVG icon library (unchanged)
├── global.css                  # ← Design tokens + reset + utilities
└── index.jsx                   # ← Entry point (unchanged)
```

---

## Key Architectural Decisions

### 1. Single Source of Truth

- **`services.js`** — All 6 services with `id, title, label, img, tag, desc, items`
- **`config.js`** — Brand name, logo paths, contact details, social links, SEO
- Zero duplication: `Home`, `Footer`, `ServicePage` all import from the same file

### 2. Shared `useInView` Hook

```js
// Before: 3 separate IntersectionObserver instances per component
// After: one shared hook — fire-once, auto-disconnects
const [ref, inView] = useInView(threshold, rootMargin);
```

### 3. Accessible Components

| Element       | Before                     | After                              |
| ------------- | -------------------------- | ---------------------------------- |
| Service card  | `<div onClick>`            | `role="button" tabIndex onKeyDown` |
| Footer links  | `<button>` (correct, kept) | + `aria-label`                     |
| Logo          | `<div onClick>`            | `<button>` when interactive        |
| Social links  | `<a>` (correct)            | + `aria-label="Follow us on X"`    |
| Breadcrumb    | `<nav>`                    | + `aria-current="page"`            |
| Contact block | `<div>`                    | `<address>` (semantic)             |
| Loading       | `<div>`                    | `role="status" aria-label`         |
| Skip link     | missing                    | `.skip-link` (visible on focus)    |

### 4. CSS Design System (`global.css`)

Full token set in `:root`:

```css
/* Colours */   --gold, --gold-bright, --gold-dim, --ink, --parchment ...
/* Typography */ --ff-display, --ff-body, --text-xs → --text-4xl
/* Spacing */   --space-1 (4px) → --space-20 (80px)
/* Radius */    --radius-sm → --radius-full
/* Easing */    --ease-out, --ease-in-out, --ease-spring
/* Duration */  --dur-fast, --dur-mid, --dur-slow
/* Shadows */   --shadow-sm, --shadow-md, --shadow-lg, --shadow-gold
/* Layout */    --max-width (1200px), --gutter (32px → 20px mobile)
```

### 5. Zero Inline Styles

- `ServicePage.jsx` had ~100% inline styles → now 100% in `ServicePage.css`
- CSS custom properties (`--index`, `--i`, `--delay`, `--tag-bg`) pass dynamic values cleanly

### 6. Performance

- `React.memo` on: `ServiceCard`, `Footer`, `FooterServiceLink`, `SocialButton`, `Logo`, `SectionTitle`
- `useCallback` on navigation handlers in `App.jsx`
- `loading="lazy"` on all non-critical images
- `IntersectionObserver` disconnects immediately after first trigger

### 7. Logo Component

```jsx
// Dark background (navbar, footer)
<Logo variant="light" size="md" onClick={handleHome} />

// Light background (future use)
<Logo variant="dark" size="lg" />
```

To swap the logo: update `BRAND.logoLight` / `BRAND.logoDark` in `config.js`. One change, all instances update.

---

## Adding a New Service

Edit **`services.js`** only:

```js
{
  id: 7,
  title: "New Service",
  label: "New Service",
  img: "img/newservice.png",
  tag: "Advisory",           // existing tag key
  desc: "Short description.",
  items: ["Item 1", "Item 2"],
}
```

The Home grid, Footer nav, and service routing all update automatically.

## Updating Contact Details

Edit **`config.js`** only — `TopBar`, `Footer`, and any future contact section update automatically.

## Changing the Logo

Edit `BRAND.logoLight` (and optionally `BRAND.logoDark`) in **`config.js`**.
