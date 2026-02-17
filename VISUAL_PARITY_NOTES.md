# VISUAL_PARITY_NOTES

## Scope audited (side-by-side vs `riofarm-vn`)
- Home (`/`)
- Product detail pages (`/product/macca`, `/product/macca-oil`, `/product/mix-nuts`)
- Blog index + detail templates
- Contact us (`/contact-us`)
- Cart + checkout (`/cart`, `/checkout`)
- Shared shell: header, footer, mobile nav, mini-cart drawer

## What was tightened for visual parity
- **Typography hierarchy**
  - Switched to `Inter` + `Montserrat` pairing to align with reference visual tone.
  - Unified heading treatment and letter-spacing for stronger hierarchy.
- **Spacing rhythm / section paddings**
  - Added reusable `section-pad` class and applied across home/blog/contact modules.
  - Normalized vertical spacing in product/cart/checkout sections.
- **Buttons / interactive states**
  - Unified primary/secondary button sizing, uppercase labels, hover elevation, and transition timing.
- **Cards / radii / shadows**
  - Added `surface-card` treatment for summary panels.
  - Enhanced product and blog cards with consistent radius + shadow behavior.
- **Header glass + nav spacing**
  - Improved glassmorphism border/shadow, nav uppercase spacing, active underline behavior.
  - Refined cart badge/pill and header action alignment.
- **Mobile responsiveness**
  - Tightened mobile nav typography/spacing.
  - Added responsive fallbacks for footer grid, product action grid, cart rows, and section nav wraps.

## Behavior constraints kept intentionally
- **Public price display remains `Liên hệ`** on product pages (no fixed public pricing reintroduced).
- Existing Vietnamese copy and page flows preserved.
- No major structural rewrites; this sprint is CSS/component polish-focused.

## Intentional deviations (accepted)
- Some Astro page markup still uses localized inline styles where migration risk was higher for this sprint.
- Iconography differs slightly from legacy implementation (cart icon/text treatment), while preserving layout intent and usability.
- Legacy React-specific interactions were not ported 1:1 where Astro equivalents already satisfy current flow.
