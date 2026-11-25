# ORVÉL — Fine Timepieces & Inventories
### Luxury Watch Flagship & E-Commerce Web Application
**Crafted & Engineered for MalikAxiom Technology · Live Client: @orveltimepieces**

---

## ⌚ Overview
**ORVÉL** (`@orveltimepieces`) is an award-winning luxury watch digital flagship and e-commerce experience designed for high-end chain chronographs, automatic mechanical calibres, and classic luxury time instruments based in Gulberg III, Lahore.

Constructed by **MalikAxiom Technology**, this project features:
- **Full-Bleed Cinematic Hero Photography**: Ultra-high-resolution Unsplash luxury watch campaign photography with slow cinematic Ken Burns scaling and 2.5D cursor parallax tilt.
- **KVIST-inspired Bento Grid Architecture**: Asymmetric product and collection cards with subtle champagne gold hover highlights.
- **Advanced Motion Design**: GSAP ScrollTrigger timeline choreography, Lenis smooth inertia scrolling, and line-mask text reveals.
- **Signature Pinned Storytelling**: Multi-stage pinned scroll scrub exploring the anatomy of a watch with interactive technical detail hotspots.
- **Real E-Commerce Infrastructure**:
  - 12 Curated Luxury Watch Models (ORVÉL Royal Chrono Master, Midnight Executive, Open-Heart Skeletons, Deep Divers, and Minimalist Mesh).
  - Direct WhatsApp Concierge Ordering connected to `+92 328 4037431` with formatted itemized order generation.
  - Cash on Delivery (COD) across Pakistan with free shipping threshold calculation.
  - Multi-tier live filtering (Collection, Movement calibre, Strap material, Price sorting, and instant search).
  - Dedicated Product Detail View with multi-angle image gallery, zoom, full specs table, and variant selection.
  - Wishlist drawer with `localStorage` persistence.
  - Side-by-side Watch Comparison tool comparing up to 3 timepieces.
  - Shopping Cart drawer with insured delivery progress indicator (PKR 15,000 threshold).
  - Reusable client demo system supporting instant dynamic branding via URL (`?brand=YourClientBrand`).

---

## 🎨 Design System & Palette

- **Obsidian Black** (`#090909`): Deepest cinematic backdrop
- **Deep Graphite** (`#17191B`): Structural architectural charcoal
- **Elevated Surface** (`#1E2124`): Card elevation and modal backgrounds
- **Champagne Gold** (`#C6A46B`): Restrained luxury metallic accent
- **Pale Gilt** (`#E5D4B8`): Subtle text and border highlights
- **Warm Ivory** (`#F0EBE2`): Contrasting editorial heritage section
- **Steel Grey** (`#858585`): Technical specifications and monospaced calibration labels
- **Pure White** (`#FFFFFF`): High-contrast typography

---

## 🎬 17 Choreographed Sections Rhythm

1. `01. Announcement Strip`: Complimentary insured express delivery notice (above PKR 15,000) & warranty alert.
2. `02. Transparent Navigation`: Wordmark logo with fine timepieces descriptor, Wishlist counter, Shopping Bag counter, Search trigger, and mobile drawer.
3. `03. Fullscreen Watch Hero`: 3 campaign slides with line-mask reveals, Ken Burns scaling, and 2.5D pointer parallax depth.
4. `04. Brand Statement Strip`: "TIME, REDEFINED. — An Expression of Timeless Precision."
5. `05. Pinned Watch Storytelling`: "BEYOND THE ORDINARY." (4-stage scroll scrub with interactive hotspot pins on Case, Crystal, Dial, and Crown).
6. `06. Bento Collections Grid`: KVIST-inspired asymmetric bento layout (Automatic, Chronograph, Classic, Minimal).
7. `07. Complete Shop Catalog`: 12 watch models with collection pills, movement filter, strap filter, price sort, and inline search.
8. `08. Full-Width Watch Campaign`: The Obsidian Noir 40MM DLC Edition.
9. `09. Featured Horizontal Showcase`: Touch-enabled and scrollable bestsellers showcase.
10. `10. Craftsmanship Pillars`: 4 engineering standards (316L Steel, Sapphire Shield, High-Beat Calibres, Tuscan Leather).
11. `11. Infinite Text Marquee`: "PRECISION • HOROLOGICAL DISCIPLINE • TIMELESS ARCHITECTURE • 316L STEEL".
12. `12. Brand Heritage Section`: Warm ivory contrast section celebrating the Lahore Atelier, 28,800 BPH mechanical calibre oscillations, and 316L surgical steel.
13. `13. Customer Reviews Marquee`: Continuous seamless loop with client styling notes and collector perspectives (transparently labeled demo reviews).
14. `14. Horology Journal`: 3 editorial essays on case geometry, calibre selection, and guilloché dials.
15. `15. Horology Care FAQ`: 5-question luxury accordion.
16. `16. Premium Branded Footer`: Oversized ORVÉL lettering, customer care, WhatsApp concierge, and back-to-top control.
17. `17. E-Commerce Dialogs`: Cart drawer, Wishlist drawer, Comparison modal, Product detail modal, and WhatsApp order modal.

---

## 🚀 Running Locally

No build tools or node dependencies required! Runs on standard static hosting or any local HTTP server:

```bash
# Python 3
python3 -m http.server 8080

# Or Node.js serve
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 💼 Client Rebranding & Customization

Open `js/config.js` to customize:
- `brand.name`: Brand title (e.g. `ORVÉL`, `VACHER`, `CHRONOS`)
- `brand.tagline`: Primary tagline
- `contact.whatsappNumber`: Business WhatsApp number (country code + number without `+`, e.g. `923001234567`)
- `contact.isWhatsAppConfigured`: Set to `true` to route directly to live WhatsApp
- `products`: Array of watch models with prices in PKR, specs, and gallery images
- `collections`: Bento categories and imagery

### Instant Demo via URL Parameter
Present the website to prospective watch store clients instantly using the `?brand=` query parameter:
- `http://localhost:8080/?brand=ORVEL`
- `http://localhost:8080/?brand=CHRONOMAT`
- `http://localhost:8080/?brand=HORLOGE`

---

© MMXXIV–MMXXVI **MalikAxiom Technology**. All rights reserved.
