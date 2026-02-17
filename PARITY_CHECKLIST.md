# Gatsby → Astro Parity Checklist (riofarm-vn vs riofarm-astro)

## Feature/page audit

- [x] Home page sections (Hero, quote, video, product collections, blog preview, contact form, attributes)
- [x] Blog index + 4 blog detail pages
- [x] Contact page + support page + 404 page
- [x] Product detail pages (macca, macca-oil, mix-nuts)
- [x] Header nav links (Sản Phẩm / Blog / Liên Hệ)
- [x] Product collection cards with “Mua Ngay” CTA to product pages

## Cart/checkout parity

- [x] Persistent cart state in localStorage (`rio_macca_cart`)
- [x] Add to cart behavior from product pages
- [x] Quantity support on product page
- [x] Mini cart drawer from header cart icon
- [x] Cart page with line items, quantity update, remove item, total
- [x] Checkout page with order summary and submit flow
- [x] “Mua ngay” now adds item then goes checkout (no direct contact-us redirect)

## Visual parity improvements (critical pages)

- [x] Header now includes cart affordance/count + mini cart drawer
- [x] Product pages include purchase controls (quantity/add/buy now)
- [x] Cart + checkout pages styled with existing Rio theme tokens
- [x] Product collection grid expanded (4 cards) to match Gatsby coverage

## Testing parity

- [x] Unit tests for cart state/logic
- [x] E2E flow for add-to-cart and checkout path
- [ ] Snapshot-level visual diff testing (not yet added)

## Notes

- Gatsby source appears to include cart context + mini-cart drawer usage, while dedicated cart/checkout pages are not clearly present in repo pages. Astro now includes complete shippable cart/checkout flow to avoid regression and support domain cutover.
