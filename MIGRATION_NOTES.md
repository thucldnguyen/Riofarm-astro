# Rio Farm Migration Notes: Gatsby → Astro 5

## Summary

This project migrates riofarm.vn from Gatsby 5 (React-based) to Astro 5 (MPA/island architecture) with full URL parity, TDD, Tailwind CSS 4, and Netlify static output.

---

## Stack Decisions

### Framework: Astro 5
- **Why:** Better performance (zero JS by default), superior static site generation, simpler component model for a content-heavy site
- **Output:** Static (`output: 'static'`) via `@astrojs/netlify` adapter
- **No React dependency:** All UI is pure Astro components (HTML + CSS + minimal vanilla JS)

### Styling: Tailwind CSS 4 + Custom CSS Variables
- Tailwind CSS 4 uses `@tailwindcss/vite` Vite plugin (NOT `@astrojs/tailwind` which is Tailwind 3)
- Brand color `--gold: #f5c518` as a CSS custom property in `global.css`
- Glassmorphism header: `background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); position: fixed`
- All Gatsby CSS modules → plain CSS in `global.css` + scoped `<style>` blocks

### Testing: Vitest + Playwright
- **Unit tests** (Vitest): Data integrity, SEO metadata, navigation links, sitemap pages, contact form config
- **E2E tests** (Playwright): Full page tests for all routes, nav, forms, mobile viewport
- **TDD order:** Tests written first, then implementation

---

## Architecture

### Pages (src/pages/)
| URL | File |
|-----|------|
| `/` | `index.astro` |
| `/blog` | `blog/index.astro` |
| `/blog/cau-chuyen-san-pham` | `blog/cau-chuyen-san-pham.astro` |
| `/blog/co-so-dat-chuan` | `blog/co-so-dat-chuan.astro` |
| `/blog/lo-hang-202307` | `blog/lo-hang-202307.astro` |
| `/blog/tai-sao-chon-rio-macca` | `blog/tai-sao-chon-rio-macca.astro` |
| `/contact-us` | `contact-us.astro` |
| `/support` | `support.astro` |
| `/product/macca` | `product/macca.astro` |
| `/product/macca-oil` | `product/macca-oil.astro` |
| `/product/mix-nuts` | `product/mix-nuts.astro` |
| `/404` | `404.astro` |

### Components
- `BaseLayout.astro` — wraps all pages with `<html lang="vi">`, SEO, Header, Footer
- `SEO.astro` — title, description, Open Graph, Twitter Card, JSON-LD, canonical, favicon
- `Header.astro` — glassmorphism fixed header with desktop nav + mobile hamburger menu
- `Footer.astro` — contact info, social icons, Google Maps embed
- `Hero.astro` — reusable hero with image, title, subtitle, CTA
- `ContactForm.astro` — Netlify Forms (`data-netlify="true"`), captcha, success message
- `BlogPreviewGrid.astro` — grid of blog preview cards
- `ProductCollectionGrid.astro` — product collection grid with hover effects
- `VideoPlayer.astro` — YouTube embed (responsive 16:9)
- `AttributeGrid.astro` — 4-column feature highlights

### Data Layer
- `src/data/blog.ts` — Typed blog post data (4 posts)
- `src/data/products.ts` — Typed product data (3 products) with helper `getProductByCode()`

---

## SEO Implementation

### Per-page meta
- Unique Vietnamese `<title>` and `<meta description>` for every page
- Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`, `og:site_name`)
- Twitter Card (`summary_large_image`)
- Canonical URLs pointing to `https://riofarm.vn/...`

### JSON-LD Structured Data
- **Homepage:** `Organization` schema (name, URL, logo, contactPoint, address, sameAs)
- **Product pages:** `Product` schema (name, image, description, brand, offers)
- **Blog posts:** `BlogPosting` schema (headline, image, author, publisher, datePublished)

### Technical SEO
- `lang="vi"` on `<html>` element
- `robots.txt` with sitemap URL
- `@astrojs/sitemap` generates `sitemap-index.xml` + `sitemap-0.xml` (11 pages)
- Favicon: `favicon-32x32.png`
- 404 page with `noindex` meta

---

## Contact Form
- Netlify Forms: `<form name="..." method="POST" data-netlify="true">`
- Hidden `<input type="hidden" name="form-name">` for Netlify form detection
- Client-side math captcha for spam prevention
- Two instances: `home-contact` (homepage) and `contact-us` (contact page)

---

## Assets Migration

Assets copied from `riofarm-vn/public/` to `riofarm-astro/public/`:
- `macca_farm.jpg`, `antoanthucpham.webp`, `riomacca.jpeg`, `rio_banner2.jpg`
- `coso1.jpeg`, `coso2.jpeg`, `coso3.jpeg`, `coso4.jpeg`
- `founder.jpeg`, `healthyfood.jpeg`, `favicon-32x32.png`
- `blogs/` — all blog images
- `collections/` — collection images
- `products/macca1-6.jpg`, `hat_mix.jpg`, `logo.jpg` (macca only, no fashion)
- `social/` — social media images
- `icons/` — app icons

---

## Key Differences from Gatsby

| Feature | Gatsby | Astro 5 |
|---------|--------|---------|
| JS bundle | Large React runtime | Near-zero (no framework JS) |
| Routing | gatsby-link + navigate() | Native `<a href>` |
| Data | GraphQL / helpers/mock.js | TypeScript data files |
| CSS | CSS Modules | global.css + scoped `<style>` |
| SEO | react-helmet / `export const Head` | `<SEO>` Astro component |
| Form | Fetch POST + React state | Native HTML + minimal JS |
| Cart/Auth | Removed (not applicable) | Not migrated (not needed) |
| SSG | gatsby build | astro build (static) |

---

## Components Not Migrated (intentionally removed)

- Cart, MiniCart, MiniCartItem — e-commerce cart (not used)
- AdjustItem — quantity adjuster (not used in final pages)
- QuickView, SizeList, SwatchList — fashion product features (not applicable)
- ProductCardGrid — for fashion products (not in scope)
- Context providers (CartProvider, AddItemNotificationProvider) — no cart needed
- MobileNavigation drawer — replaced with simpler CSS-only hamburger

---

## Test Results

```
Unit tests (Vitest): 29/29 passed
E2E tests (Playwright chromium): 62/62 passed
Build: ✓ Complete (static output)
Sitemap: 11 pages generated
```

---

## Build Command

```bash
npm run build    # astro build → dist/
npm test         # vitest run
npx playwright test --project=chromium
```
