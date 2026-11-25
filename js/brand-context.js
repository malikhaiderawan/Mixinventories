/**
 * Mix Inventories — Brand Context & 29-Product Knowledge Base (Runtime ESM)
 * Mirrors src/data/brandContext.ts for zero-build Node (/api/chat) & browser usage.
 */

export const BRAND_STORE_CONTEXT = `MIX INVENTORIES (Pakistan Curated Watches):
- Categories: Automatic, Semi-Automatic, Quartz (Omega, Tissot, Patek Philippe, Richard Mille, TAG Heuer, Cartier, Tubular, Martyn Line, INSUCH). Pre-dispatch quality check & protective box included.
- Delivery & Payment: Nationwide Pakistan Cash on Delivery (COD); Bank Transfer/JazzCash/EasyPaisa on request. 2–3 working days major cities, 3–5 nationwide. Open-parcel inspection available.
- Warranty & Exchange: 6-month movement warranty (excludes physical/water damage); 7-day exchange if defective/wrong item (unworn + box). Order via website ("Add to Bag") or WhatsApp +92 328 4037431.`;

export const COMPACT_PRODUCT_CATALOG = [
  { id: "csv-prod-01", csvId: 1, name: "TAG HEUER-CARRERA", brand: "TAG Heuer", category: "Quartz", price: 3500, specs: "Quartz Movement | Date Working | Leather Strap | Master Lock | Smooth Machine Movement" },
  { id: "csv-prod-02", csvId: 2, name: "TISSOT-PRX", brand: "Tissot", category: "Quartz", price: 4500, specs: "Quartz Movement | Date Working | Highly Grade Chain | Dual Lock | Smooth Machine Movement" },
  { id: "csv-prod-03", csvId: 3, name: "OMEGA-SEAMASTER CO-AXIAL", brand: "Omega", category: "Automatic", price: 8500, specs: "Luxury Black | Smooth Machine Movement | Date Working | Highly Grade Chain | Dual Lock" },
  { id: "csv-prod-04", csvId: 4, name: "PATEK PHILIPPE-GENEVE", brand: "Patek Philippe", category: "Quartz", price: 9000, specs: "Down Second Working | Date Working | Genuine Leather Strap | Butterfly Original Lock | Quartz Movement | Smooth Machine Movement" },
  { id: "csv-prod-05", csvId: 5, name: "RICHARD MILLE", brand: "Richard Mille", category: "Quartz", price: 4500, specs: "Fabric Strap | Quartz Movement | Smooth Machine Movement | Moon White Case With Black Dial" },
  { id: "csv-prod-06", csvId: 6, name: "TISSOT-QUARTZ", brand: "Tissot", category: "Quartz", price: 7500, specs: "Quartz Movement | Date Working | Down Second Working | Highly Grade Chain | Dual Lock | Smooth Machine Movement" },
  { id: "csv-prod-07", csvId: 7, name: "PATEK PHILIPPE NAUTILUS TWO-TONE", brand: "Patek Philippe", category: "Quartz", price: 4750, specs: "Date Working | Highly Grade Chain | Dual Lock | 2 Tone Chain Style | Quibee Dial | Smooth Machine Movement" },
  { id: "csv-prod-08", csvId: 8, name: "TISSOT PRX 1853", brand: "Tissot", category: "Automatic", price: 9500, specs: "Automatic Movement | Like Stop Watch Working | Smooth Machine Movement | Date Working | 2 Tone Case With Black | Highly Grade Leather Strap | Master Lock" },
  { id: "csv-prod-09", csvId: 9, name: "TISSOT PRX 1853 BLUE", brand: "Tissot", category: "Semi-Automatic", price: 4500, specs: "Semi Auto Movement | Smooth Machine Movement | Date Working | Silver Case With Blue | Highly Grade Chain | Dual Lock" },
  { id: "csv-prod-10", csvId: 10, name: "TISSOT PRX 1853 TWO-TONE GREEN", brand: "Tissot", category: "Semi-Automatic", price: 4500, specs: "Semi Auto Movement | Smooth Machine Movement | Date Working | 2 Tone Chain With Bottle Green | Highly Grade Chain | Dual Lock" },
  { id: "csv-prod-11", csvId: 11, name: "OMEGA-SEAMASTER CO-AXIAL MASTER CHRONOMETER (Black)", brand: "Omega", category: "Automatic", price: 11500, specs: "Automatic Movement | Like Stop Watch Working | Smooth Machine Movement | Date Working | Silver Case With Black | Highly Grade Chain | Dual Lock" },
  { id: "csv-prod-12", csvId: 12, name: "OMEGA-SEAMASTER CO-AXIAL MASTER CHRONOMETER (Olive Green)", brand: "Omega", category: "Automatic", price: 11500, specs: "Automatic Movement | Like Stop Watch Working | Smooth Machine Movement | Date Working | Silver Case With Olive Green | Highly Grade Strap | Buckle Lock" },
  { id: "csv-prod-13", csvId: 13, name: "OMEGA-SEAMASTER CO-AXIAL MASTER CHRONOMETER (Choco Brown)", brand: "Omega", category: "Automatic", price: 11500, specs: "Automatic Movement | Like Stop Watch Working | Smooth Machine Movement | Date Working | Silver Case With Choco Brown | Highly Grade Strap | Buckle Lock" },
  { id: "csv-prod-14", csvId: 14, name: "TAG HEUER MONACO", brand: "TAG Heuer", category: "Quartz", price: 9500, specs: "Smooth Machine Movement | Chronograph Working | Date Working | Highly Grade Chain | Heavy Weight | Dual Lock | Party / Official Wearing" },
  { id: "csv-prod-15", csvId: 15, name: "INSUCH 1998 FULLY AUTOMATIC (Bottle Blue)", brand: "INSUCH", category: "Automatic", price: 9500, specs: "Fully Automatic | Silver Case With Bottle Blue Dial | Smooth Machine Movement | Highly Grade Chain | Party / Official Wearing | Box With Printing Bag" },
  { id: "csv-prod-16", csvId: 16, name: "INSUCH 1998 FULLY AUTOMATIC (Bottle Green)", brand: "INSUCH", category: "Automatic", price: 9500, specs: "Fully Automatic | Silver Case With Bottle Green | Smooth Machine Movement | Highly Grade Chain | Party / Official Wearing | Box With Printing Bag" },
  { id: "csv-prod-17", csvId: 17, name: "OMEGA-SEAMASTER PROFESSIONAL", brand: "Omega", category: "Quartz", price: 8500, specs: "Quartz Movement | Co-Axial Master Chronometer | 300m / 1000ft | Smooth Machine Movement | Date Working | Highly Grade Silicone Strap | Buckle Lock" },
  { id: "csv-prod-18", csvId: 18, name: "TUBULAR 1", brand: "Tubular", category: "Quartz", price: 8000, specs: "Quartz Movement | Smooth Machine Movement | Date Working | Highly Grade Leather Strap | Buckle Lock" },
  { id: "csv-prod-20", csvId: 20, name: "TUBULAR - BIG 7", brand: "Tubular", category: "Quartz", price: 8000, specs: "Quartz Movement | Smooth Machine Movement | Date Working | Highly Grade Leather Strap | Buckle Lock" },
  { id: "csv-prod-21", csvId: 21, name: "TUBULAR DIGITAL ANALOGUE", brand: "Tubular", category: "Quartz", price: 8000, specs: "Quartz Movement | Smooth Machine Movement | Date/Month/Alarm Working | Highly Grade Leather Strap | Buckle Lock" },
  { id: "csv-prod-22", csvId: 22, name: "TUBULAR 2", brand: "Tubular", category: "Quartz", price: 7000, specs: "Quartz Movement | Smooth Machine Movement | Date Working | Highly Grade Leather Strap | Buckle Lock" },
  { id: "csv-prod-23", csvId: 23, name: "TUBULAR 3", brand: "Tubular", category: "Quartz", price: 7000, specs: "Quartz Movement | Smooth Machine Movement | Date Working | Down Second Working | Highly Grade Leather Strap | Buckle Lock" },
  { id: "csv-prod-24", csvId: 24, name: "MARTYN LINE", brand: "Martyn Line", category: "Quartz", price: 6500, specs: "Smooth Machine Movement | Rose Gold Case With White Dial | Genuine Leather Strap | Buckle Lock | Party / Official Wearing" },
  { id: "csv-prod-25", csvId: 25, name: "MARTYN LINE BLACK", brand: "Martyn Line", category: "Quartz", price: 6500, specs: "Smooth Machine Movement | Silver Case With Golden Dial | Genuine Leather Strap | Buckle Lock | Party / Official Wearing" },
  { id: "csv-prod-26", csvId: 26, name: "CARTIER", brand: "Cartier", category: "Quartz", price: 6500, specs: "Unisex | Date Working | Highly Grade Chain | Dual Lock | Down Second Working | Silver Case With Green Dial | Smooth Machine Movement" },
  { id: "csv-prod-27", csvId: 27, name: "RICHARD MILLE - BLUE FABRIC STRAP METAL CASE", brand: "Richard Mille", category: "Quartz", price: 4500, specs: "Highly Fabric Strap | 2 Colours Available | Metal Case Not Plastic | Party / Casual Wearing | COD Available" },
  { id: "csv-prod-28", csvId: 28, name: "RICHARD MILLE - ORANGE STRAP METAL CASE", brand: "Richard Mille", category: "Quartz", price: 4500, specs: "Highly Grade Silicone Strap | Metal Case Not Plastic | Party / Casual Wearing | COD Available" },
  { id: "csv-prod-29", csvId: 29, name: "RICHARD MILLE - RED STRAP WHITE METAL CASE", brand: "Richard Mille", category: "Quartz", price: 4500, specs: "Highly Grade Silicone Strap | Metal Case Not Plastic | Party / Casual Wearing | COD Available" }
];

export function formatCompactCatalogForPrompt() {
  return COMPACT_PRODUCT_CATALOG.map(
    (p) => `${p.id}|${p.name}|${p.brand}|${p.category}|PKR ${p.price.toLocaleString()}|${p.specs.replace(/\s*\|\s*Smooth Machine Movement/gi, '').replace(/\s*Highly Grade /gi, '')}`
  ).join('\n');
}

export function buildConciergeSystemPrompt(productContext = null) {
  return `You are Mix Inventories' friendly, knowledgeable AI Watch Sales Concierge.

${BRAND_STORE_CONTEXT}

COMPACT CATALOG (ALL AVAILABLE TIMEPIECES):
${formatCompactCatalogForPrompt()}

${productContext ? `CURRENTLY VIEWED WATCH BY CUSTOMER:
- Watch: ${productContext.name || ''} (${productContext.id || ''})
- Variant: ${productContext.variant || 'Standard'}
- Price: PKR ${productContext.price || ''}
- Case Size: ${productContext.caseSize || 'Standard'}
- Movement: ${productContext.movement || 'Precision Calibre'}` : ''}

CONVERSATIONAL RULES:
1. Reply naturally in English or Roman Urdu, matching whichever language the customer uses.
2. Answer questions about delivery anywhere in Pakistan, COD, warranty, exchange, watch movements (Automatic vs. Quartz vs. Digital/Semi-Automatic), and recommend watches based on budget, style, or occasion.
3. ONLY recommend watches from the catalog above with exact watch titles and prices (in PKR). Never hallucinate unavailable models or prices.
4. NEVER write internal IDs (such as csv-prod-01 or SKU codes) in your visible message — always refer to watches by their exact title (e.g., TAG HEUER-CARRERA).
5. Keep replies concise (2–4 short sentences or neat bullet points) and encourage ordering via the website ("Add to Bag") or WhatsApp (+92 328 4037431).
6. Whenever you suggest or recommend watches, ALWAYS suggest 2 to 3 matching watches and append all 2–3 IDs at the very end of your response in this exact format: <!--RECOMMENDED:["csv-prod-01","csv-prod-02","csv-prod-03"]--> (their photo cards will automatically appear in the chat).`;
}

