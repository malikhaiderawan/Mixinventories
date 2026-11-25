/**
 * ORVÉL — Fine Timepieces
 * MalikAxiom Basic Engine Bridge (js/basic-concierge-bridge.js)
 *
 * Connects the zero-API-key deterministic ResponseRouter ESM bundle and Phase 3 KB
 * to the existing ORVÉL concierge UI (`window.ORVEL_V3_PROCESS`).
 */

import { ResponseRouter } from './vendor/orvel-basic-engine.esm.js?v=20261111basic';
import { boutiqueConfig } from './config.js?v=20261125insta';

const KB_URL = new URL('./orvel-basic-kb.json?v=20261125mixkb', import.meta.url).href;

const SKU_RE = /\bcsv-prod-\d{2}\b/gi;
const WA_LINK_RE = /\n*\[[^\]]*\]\((https:\/\/(?:wa\.me|api\.whatsapp\.com)\/[^\)]+)\)/gi;
const DUPLICATE_SPEC_BULLET_RE = /^[•*]\s*(?:Caseize|Casehickness|Movementype|Powereserve|Strapaterial|Strapidth|Dialolor|Wateresistance)\s*:/i;
const PRODUCT_INTENTS = new Set([
  'PRODUCT_SEARCH',
  'PRODUCT_PRICE',
  'PRODUCT_AVAILABILITY',
  'PRODUCT_DETAIL',
  'PRODUCT_RECOMMENDATION',
  'CATALOG_COMPARE'
]);
const HANDOFF_INTENTS = new Set([
  'HUMAN_HANDOFF',
  'ORDER_CANCEL',
  'PRODUCT_NOT_FOUND',
  'CAPABILITIES_HELP',
  'OFFTOPIC',
  'OUT_OF_SCOPE',
  'SCOPE_LIMITS',
  'UNKNOWN'
]);

const bridgeState = {
  baseKb: null,
  activeKb: null,
  router: null,
  initPromise: null,
  turns: [],
  inspectedSku: null,
  customizationKey: ''
};

function readRuntimeCustomization() {
  const params = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search)
    : new URLSearchParams();

  const rawBrand = (params.get('brand') || params.get('name') || params.get('store') || params.get('b') || '').trim();
  const brand = (rawBrand ? rawBrand.slice(0, 40) : (boutiqueConfig.brand?.name || 'Mix Inventories')).trim();

  const rawLocation = (params.get('city') || params.get('location') || '').trim();
  const location = rawLocation || boutiqueConfig.contact?.address || 'Gulberg III, Lahore, Pakistan';

  const rawPhone = (params.get('phone') || params.get('whatsapp') || params.get('wa') || '').trim();
  const rawDigits = rawPhone.replace(/[^0-9]/g, '');
  const configDigits = String(boutiqueConfig.contact?.whatsappNumber || '923284037431').replace(/[^0-9]/g, '');
  const waDigits = rawDigits.length >= 7 ? rawDigits : configDigits;
  const waDisplay = rawDigits.length >= 7
    ? `+${rawDigits}`
    : (boutiqueConfig.contact?.whatsappDisplay || `+${waDigits}`);

  return { brand, location, waDigits, waDisplay };
}

function replaceBrandTokens(value, brand) {
  if (typeof value !== 'string' || !brand) return value;
  return value.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
}

function replaceLocationTokens(value, location) {
  if (typeof value !== 'string' || !location || /Gulberg III,\s*Lahore/i.test(location)) return value;
  return value
    .replace(/Gulberg III,\s*Lahore,\s*Pakistan/gi, location)
    .replace(/Lahore,\s*Pakistan/gi, location)
    .replace(/Lahore Atelier/gi, `${location} Atelier`);
}

function buildCustomizedKb(baseKb) {
  const kb = structuredClone(baseKb);
  const { brand, location, waDigits, waDisplay } = readRuntimeCustomization();

  if (kb.businessInfo) {
    kb.businessInfo.phone = waDisplay;
    kb.businessInfo.whatsapp = waDisplay;
    kb.businessInfo.address = location;
    kb.businessInfo.location = location;
    if (kb.businessInfo.hours?.note) {
      kb.businessInfo.hours.note = replaceLocationTokens(kb.businessInfo.hours.note, location);
    }
    if (brand && brand !== 'ORVÉL') {
      kb.businessInfo.name = `${brand} Watches`;
      kb.businessInfo.description = replaceBrandTokens(kb.businessInfo.description, brand);
    }
  }

  if (Array.isArray(kb.products)) {
    kb.products.forEach((p) => {
      if (brand && brand !== 'ORVÉL') {
        p.name = replaceBrandTokens(p.name, brand);
        p.brand = brand;
        p.description = replaceBrandTokens(p.description, brand);
      }
    });
  }

  if (Array.isArray(kb.faqs)) {
    kb.faqs.forEach((f) => {
      if (brand && brand !== 'ORVÉL') {
        f.question = replaceBrandTokens(f.question, brand);
        f.answer = replaceBrandTokens(f.answer, brand);
      }
      f.question = replaceLocationTokens(f.question, location);
      f.answer = replaceLocationTokens(f.answer, location);
    });
  }

  return { kb, waDigits, key: `${brand}|${location}|${waDigits}` };
}

function formatBridgeText(rawText) {
  if (!rawText) return '';
  let text = String(rawText)
    .split('\n')
    .filter((line) => !DUPLICATE_SPEC_BULLET_RE.test(line))
    .join('\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.replace(/^[•*]\s*([A-Za-z_ ]+?)\s*:/gim, (_, label) => {
    const clean = label.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return `• **${clean}:**`;
  });
  return text.trim();
}

function extractWhatsAppAndCleanText(rawText, waDigits, normalizedIntent) {
  let whatsappUrl = null;
  let cleaned = String(rawText || '').replace(WA_LINK_RE, (_, url) => {
    whatsappUrl = url;
    return '';
  });

  cleaned = formatBridgeText(cleaned);

  if (whatsappUrl) {
    whatsappUrl = `https://wa.me/${waDigits}`;
  } else if (HANDOFF_INTENTS.has(normalizedIntent)) {
    whatsappUrl = `https://wa.me/${waDigits}`;
  }

  return { text: cleaned, whatsappUrl };
}

function resolveCatalogProducts(skus, catalog) {
  const list = Array.isArray(catalog) && catalog.length > 0 ? catalog : (boutiqueConfig.products || []);
  const byId = new Map(list.map((item) => [String(item.id).toLowerCase(), item]));
  const seen = new Set();
  const matched = [];

  for (const sku of skus) {
    const norm = String(sku || '').toLowerCase();
    if (!norm || seen.has(norm)) continue;
    const item = byId.get(norm);
    if (item) {
      seen.add(norm);
      matched.push(item);
    }
  }
  return matched;
}

function normalizeIntent(rawIntent, rawText, rawDebug = null) {
  const upper = String(rawIntent || '').trim().toUpperCase();
  const text = String(rawText || '');

  if (upper === 'RETURN_EXCHANGE' && /\brequest order cancellation\b/i.test(text)) {
    return 'ORDER_CANCEL';
  }

  if (
    upper === 'PRODUCT_NOT_FOUND' ||
    /^(?:No products? found\b|We couldn't find a matching product in that color\b|We currently don't have that specific (?:color|size) in stock\b)/i.test(text)
  ) {
    return 'PRODUCT_NOT_FOUND';
  }

  if (!upper || upper === 'UNKNOWN') {
    if (/\bSKU:\s*csv-prod-\d{2}\b/i.test(text)) {
      return 'PRODUCT_DETAIL';
    }
    if (rawDebug?.matchedFAQ) {
      return 'FAQ_MATCH';
    }
    return 'UNKNOWN';
  }

  return upper;
}

function shouldAttachProducts(normalizedIntent, rawText, routerSession) {
  if (normalizedIntent === 'PRODUCT_NOT_FOUND' || normalizedIntent === 'GREETING' || normalizedIntent === 'BOT_IDENTITY' || normalizedIntent === 'BOUNDARY' || HANDOFF_INTENTS.has(normalizedIntent)) {
    return [];
  }

  const explicitlyListedSkus = Array.from(String(rawText || '').matchAll(SKU_RE)).map((m) => m[0].toLowerCase());
  const uniqueExplicit = [...new Set(explicitlyListedSkus)];

  // Guard against attaching all catalog cards when a policy FAQ lists model examples (e.g. water resistance guide)
  if ((normalizedIntent === 'BASIC_FALLBACK' || normalizedIntent === 'FAQ_MATCH') && uniqueExplicit.length > 5 && !/Found\s+\d+\s+product/i.test(rawText || '')) {
    return [];
  }

  if (uniqueExplicit.length > 0 && (PRODUCT_INTENTS.has(normalizedIntent) || /Found\s+\d+\s+product|\bSKU:\s*csv-prod-/i.test(rawText || ''))) {
    return uniqueExplicit;
  }

  if (PRODUCT_INTENTS.has(normalizedIntent) && Array.isArray(routerSession?.lastDisplayedSkus)) {
    return routerSession.lastDisplayedSkus;
  }

  return [];
}

function recordTurn(userQuery) {
  if (bridgeState.turns.length === 0) {
    bridgeState.turns.push('__session_active__');
  }
  bridgeState.turns.push(String(userQuery || ''));
  if (bridgeState.turns.length > 10) {
    bridgeState.turns = ['__session_active__', ...bridgeState.turns.slice(-9)];
  }
}

function tryResolveActiveProductFollowUp(query, activeCtx, catalog, router) {
  if (!activeCtx?.id) return null;

  const lower = String(query || '').toLowerCase().trim();
  const activeId = String(activeCtx.id).toLowerCase();

  // If user names a different watch SKU, let the router switch watches naturally
  const mentionedSkus = lower.match(/\bcsv-prod-\d{2}\b/gi) || [];
  if (mentionedSkus.some((s) => s.toLowerCase() !== activeId)) return null;

  // Store-wide queries & non-watch topics go through normal ResponseRouter
  const isStoreWideQuery = /\b(hi|hello|hey|salam|assalam|slaam|tum kon|kaun ho|who are you|what can you do|capabilities|i love you|useless|Delivery|shipping|charges?|fees?|warranty|guarantee|return|exchange|refund|payment|cod|cash on delivery|authentic|genuine|original|hours|timing|open|close|location|address|contact|whatsapp|under\s+\d|below\s+\d|less than\s+\d|all watches|catalog|showstone|vacuum|laptop|phone)\b/i.test(lower);
  const refersToCurrentWatch = /\b(this watch|this timepiece|this model|this|iska|iski|is watch|is ki|is ka|yeh watch|ye watch)\b/i.test(lower);
  if (isStoreWideQuery && !refersToCurrentWatch) return null;

  const kbProduct = bridgeState.activeKb?.products?.find((p) => String(p.sku).toLowerCase() === activeId);
  const catalogProduct = (Array.isArray(catalog) && catalog.length > 0 ? catalog : boutiqueConfig.products)
    ?.find((p) => String(p.id).toLowerCase() === activeId);
  const prod = kbProduct || catalogProduct;
  if (!prod) return null;

  const attrs = kbProduct?.attributes || {};
  const name = prod.name;
  const sku = kbProduct?.sku || catalogProduct?.id;
  const variant = activeCtx.variant || catalogProduct?.variants?.[0]?.name || attrs.strap_material || '';
  const priceText = `PKR ${Number(prod.price || 0).toLocaleString()}`;
  const cards = catalogProduct ? [catalogProduct] : [];

  const session = router?.session;
  if (session) {
    session.lastTargetSku = sku;
    session.lastDisplayedSkus = [sku];
    session.lastTopic = 'product';
  }

  if (/\b(compare|difference|versus|vs)\b/i.test(lower)) {
    const allCatalog = Array.isArray(catalog) && catalog.length > 0 ? catalog : (boutiqueConfig.products || []);
    const peer = allCatalog.find((p) => p.id !== sku && p.collection === catalogProduct?.collection)
      || allCatalog.find((p) => p.id !== sku)
      || null;
    if (!peer) return null;
    return {
      text: `Side-by-side comparison featuring **${name}** (${sku}):\n\n**1. ${name}** (${priceText})\n• **Case & Movement:** ${attrs.case_size || catalogProduct?.caseSize} · ${attrs.movement || catalogProduct?.movement}\n• **Strap:** ${variant}\n\n**2. ${peer.name}** (PKR ${Number(peer.price).toLocaleString()})\n• **Case & Movement:** ${peer.caseSize} · ${peer.movement}\n• **Strap:** ${peer.strapMaterial}`,
      intent: 'CATALOG_COMPARE',
      products: catalogProduct ? [catalogProduct, peer] : [peer],
      suggestions: [`${sku} price?`, `${peer.id} details`, 'How do I place an order with ORVÉL?'],
      whatsappUrl: null
    };
  }

  if (/\b(price|qeemat|kimat|cost|rate|kitne|kitna|how much|pkr)\b/i.test(lower)) {
    return {
      text: `The price for **${name}** (${sku}) is **${priceText}**.\n\n• **Availability:** ${kbProduct?.inStock !== false ? '✅ In Stock — Ready for insured dispatch across Pakistan' : 'Currently Out of Stock'}\n• **Delivery:** ${Number(prod.price) > 15000 ? 'Complimentary insured courier & COD across Pakistan' : 'PKR 500 standard courier (free above PKR 15,000)'}`,
      intent: 'PRODUCT_PRICE',
      products: cards,
      suggestions: ['What is its strap material?', 'Is it water resistant?', 'How do I place an order with ORVÉL?'],
      whatsappUrl: null
    };
  }

  if (/\b(strap|chain|bracelet|band|belt|leather|steel|mesh|rubber)\b/i.test(lower)) {
    const strap = attrs.strap_material || catalogProduct?.strapMaterial || variant;
    const width = attrs.strap_width || catalogProduct?.strapWidth || '20mm';
    const variants = attrs.variants || (catalogProduct?.variants || []).map((v) => v.name).join(', ');
    return {
      text: `**${name}** (${sku}) comes with a **${strap}** (${width} lug width).${variants ? `\n\n• **Available Variants:** ${variants}` : ''}`,
      intent: 'PRODUCT_DETAIL',
      products: cards,
      suggestions: ['Is it water resistant?', 'What movement does it use?', 'What is the price?'],
      whatsappUrl: null
    };
  }

  if (/\b(water|waterproof|resistant|resistance|atm|swim|swimming|rain|splash|shower)\b/i.test(lower)) {
    const wr = attrs.water_resistance || catalogProduct?.waterResistance || '5 ATM (50 Meters)';
    return {
      text: `**${name}** (${sku}) is rated to **${wr}** with synthetic rubber sealing gaskets.${wr.includes('3 ATM') ? ' Designed for everyday splash and rain protection.' : wr.includes('5 ATM') ? ' Handles handwashing, rain, and everyday wear effortlessly.' : ' Engineered for confident all-weather and aquatic durability.'}`,
      intent: 'PRODUCT_DETAIL',
      products: cards,
      suggestions: ['Explain its movement', 'What is the price?', 'What is your warranty policy?'],
      whatsappUrl: null
    };
  }

  if (/\b(movement|calibre|caliber|power reserve|automatic|mechanical|quartz|engine|winding|battery)\b/i.test(lower)) {
    const movement = attrs.movement || catalogProduct?.movement || '';
    const moveType = attrs.movement_type || catalogProduct?.movementType || '';
    const reserve = attrs.power_reserve || catalogProduct?.powerReserve || '';
    return {
      text: `**${name}** (${sku}) is driven by **${movement}**.\n\n• **Movement Type:** ${moveType}${reserve ? `\n• **Power Reserve:** ${reserve}` : ''}`,
      intent: 'PRODUCT_DETAIL',
      products: cards,
      suggestions: ['Is this suitable for everyday wear?', 'What case size is it?', 'What is your warranty policy?'],
      whatsappUrl: null
    };
  }

  if (/\b(size|case|diameter|thickness|mm|wrist|fit|dial|color|colour|crystal|glass|sapphire)\b/i.test(lower)) {
    const size = attrs.case_size || catalogProduct?.caseSize || '';
    const thick = attrs.case_thickness || catalogProduct?.caseThickness || '';
    const dial = attrs.dial_color || catalogProduct?.dialColor || '';
    const crystal = attrs.crystal || catalogProduct?.crystal || 'Sapphire Crystal';
    return {
      text: `**${name}** (${sku}) architectural proportions:\n\n• **Case Size:** ${size}${thick ? ` (Thickness: ${thick})` : ''}\n• **Dial:** ${dial}\n• **Crystal:** ${crystal}`,
      intent: 'PRODUCT_DETAIL',
      products: cards,
      suggestions: ['What is its strap material?', 'Is it water resistant?', 'What is the price?'],
      whatsappUrl: null
    };
  }

  if (/\b(in stock|available|availability|stock)\b/i.test(lower)) {
    const inStock = kbProduct ? kbProduct.inStock !== false : true;
    return {
      text: `**${name}** (${sku}) is currently **${inStock ? '✅ In Stock' : 'Out of Stock'}** at **${priceText}**.`,
      intent: 'PRODUCT_AVAILABILITY',
      products: cards,
      suggestions: ['How do I place an order with ORVÉL?', 'Delivery charges?', 'What is your return policy?'],
      whatsappUrl: null
    };
  }

  if (/\b(everyday|daily|wear|suit|formal|occasion|tell me|explain|details|specs|specifications|features|overview|about)\b/i.test(lower)) {
    return {
      text: `**${name}** (${sku}) — **${priceText}**\n\n• **Case:** ${attrs.case_size || catalogProduct?.caseSize}${attrs.case_thickness ? ` · ${attrs.case_thickness} profile` : ''}\n• **Movement:** ${attrs.movement || catalogProduct?.movement}\n• **Dial & Crystal:** ${attrs.dial_color || catalogProduct?.dialColor} · ${attrs.crystal || catalogProduct?.crystal}\n• **Strap:** ${variant}\n• **Water Resistance:** ${attrs.water_resistance || catalogProduct?.waterResistance}`,
      intent: 'PRODUCT_DETAIL',
      products: cards,
      suggestions: ['What is its strap material?', 'Is it water resistant?', 'Compare it with another model'],
      whatsappUrl: null
    };
  }

  return null;
}

/**
 * Ensure the Basic Engine KB is fetched once and ResponseRouter is initialized
 * with any runtime white-label overrides applied.
 */
export async function ensureRouter() {
  if (!bridgeState.baseKb) {
    if (!bridgeState.initPromise) {
      bridgeState.initPromise = fetch(KB_URL)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load ORVÉL Basic KB (${res.status})`);
          return res.json();
        })
        .then((kb) => {
          bridgeState.baseKb = kb;
          const { kb: customizedKb, key } = buildCustomizedKb(kb);
          bridgeState.activeKb = customizedKb;
          bridgeState.customizationKey = key;
          bridgeState.router = new ResponseRouter(customizedKb);
          return bridgeState.router;
        })
        .catch((err) => {
          bridgeState.initPromise = null;
          throw err;
        });
    }
    await bridgeState.initPromise;
  } else {
    const { key } = buildCustomizedKb(bridgeState.baseKb);
    if (key !== bridgeState.customizationKey || !bridgeState.router) {
      const { kb: customizedKb } = buildCustomizedKb(bridgeState.baseKb);
      bridgeState.activeKb = customizedKb;
      bridgeState.customizationKey = key;
      bridgeState.router = new ResponseRouter(customizedKb);
    }
  }

  return bridgeState.router;
}

/**
 * Sync bridge customization state after URL white-label params mutate boutiqueConfig.
 */
export async function syncBridgeConfig() {
  if (!bridgeState.baseKb) {
    return ensureRouter();
  }
  const { kb, key } = buildCustomizedKb(bridgeState.baseKb);
  if (key !== bridgeState.customizationKey) {
    bridgeState.activeKb = kb;
    bridgeState.customizationKey = key;
    bridgeState.router = new ResponseRouter(kb);
    bridgeState.turns = [];
    bridgeState.inspectedSku = null;
  }
  return bridgeState.router;
}

/**
 * Reset deterministic ResponseRouter session and conversation turn memory.
 */
export function resetBridgeSession() {
  bridgeState.turns = [];
  bridgeState.inspectedSku = null;
  if (bridgeState.router && typeof bridgeState.router.resetSession === 'function') {
    bridgeState.router.resetSession();
  }
}

/**
 * Clear active watch focus and turn transcript so a cleared watch cannot return.
 */
export function clearBridgeContext() {
  bridgeState.inspectedSku = null;
  bridgeState.turns = [];
  if (bridgeState.router?.session) {
    bridgeState.router.session.lastTargetSku = null;
    bridgeState.router.session.lastDisplayedSkus = [];
    bridgeState.router.session.activeFilters = undefined;
    if (bridgeState.router.session.lastTopic === 'product') {
      bridgeState.router.session.lastTopic = null;
    }
  }
}

/**
 * Read-only diagnostic snapshot of explicit bridge state and turn transcript.
 */
export function getBridgeStateSnapshot() {
  return {
    turns: [...bridgeState.turns],
    inspectedSku: bridgeState.inspectedSku,
    session: bridgeState.router?.session
      ? {
          lastTargetSku: bridgeState.router.session.lastTargetSku ?? null,
          lastDisplayedSkus: [...(bridgeState.router.session.lastDisplayedSkus || [])],
          lastTopic: bridgeState.router.session.lastTopic ?? null
        }
      : null
  };
}

/**
 * Process a customer query through the MalikAxiom Basic Engine (`ResponseRouter`)
 * and map its output to the ORVÉL concierge UI contract.
 */
const FOLLOWUP_STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'can', 'could', 'would', 'will',
  'what', 'which', 'who', 'where', 'when', 'how', 'much', 'many', 'tell', 'me', 'about', 'show', 'give',
  'of', 'for', 'in', 'on', 'at', 'to', 'with', 'from', 'by', 'and', 'or', 'ka', 'ki', 'ke', 'ko', 'mein',
  'me', 'se', 'par', 'kya', 'hai', 'hain', 'ho', 'hoga', 'kitna', 'kitne', 'kitni', 'kitnay', 'btao', 'batao',
  'price', 'cost', 'rate', 'qeemat', 'kimat', 'available', 'availability', 'stock', 'specs', 'specifications',
  'detail', 'details', 'check', 'confirm', 'aap', 'ap', 'tum', 'yeh', 'ye', 'woh', 'wo', 'please', 'pls'
]);

/**
 * Reset target SKU when the user asks about a substantive out-of-catalog noun
 * (e.g. "robot vacuum ki price kya hai") instead of a true follow-up.
 */
function guardNonCatalogFollowUp(query, router, kb) {
  if (!router?.session?.lastTargetSku) return;
  const lower = String(query || '').toLowerCase();

  if (/\bcsv-prod-\d{2}\b/i.test(lower)) return;
  if (/\b(?:is(?:ki|ka|ke|me|mein)|us(?:ki|ka|ke|me|mein)|is\s+(?:ki|ka|ke|me|mein)|(?:this|that)\s+(?:one|watch|model|item)|is\s+(?:it|this)|does\s+(?:it|this)|about\s+(?:this|it|that)|for\s+(?:this|it|that))\b/i.test(lower)) {
    return;
  }

  const tokens = lower
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length >= 3 && !FOLLOWUP_STOPWORDS.has(t) && !/^\d+$/.test(t));

  if (tokens.length === 0) return;

  const kbCorpus = [
    ...(kb?.products || []).map((p) => `${p.sku} ${p.name} ${p.category} ${p.description} ${(p.colors || []).join(' ')} ${(p.sizes || []).join(' ')} ${Object.values(p.attributes || {}).join(' ')}`),
    ...(kb?.faqs || []).map((f) => `${f.question} ${(f.tags || []).join(' ')} ${(f.variations || []).join(' ')}`),
    'watch', 'watches', 'timepiece', 'timepieces', 'ghari', 'ghariyan', 'delivery', 'shipping', 'warranty', 'guarantee', 'return', 'exchange', 'refund', 'payment', 'cod', 'hours', 'timing', 'atelier', 'lahore', 'whatsapp', 'authentic', 'strap', 'dial', 'sapphire', 'water', 'movement', 'automatic', 'quartz', 'chronograph', 'minimal', 'classic', 'diver', 'leather', 'steel', 'mesh', 'skeleton'
  ].join(' ').toLowerCase();

  const hasAnyCatalogOrDomainMatch = tokens.some((tok) => kbCorpus.includes(tok));
  if (!hasAnyCatalogOrDomainMatch) {
    router.session.lastTargetSku = null;
    router.session.lastDisplayedSkus = [];
    bridgeState.turns = ['__session_active__'];
  }
}

export async function processBasicQuery(query, session = null, kbArg = null, contextData = {}) {
  const router = await ensureRouter();
  const { waDigits } = readRuntimeCustomization();
  const catalog = contextData?.catalog || boutiqueConfig.products || [];
  const activeCtx = contextData?.activeProductContext
    || (typeof window !== 'undefined' ? window.concierge?.activeProductContext : null);

  bridgeState.inspectedSku = activeCtx?.id ? String(activeCtx.id).toLowerCase() : null;

  const followUp = tryResolveActiveProductFollowUp(query, activeCtx, catalog, router);
  if (followUp) {
    recordTurn(query);
    return followUp;
  }

  guardNonCatalogFollowUp(query, router, bridgeState.activeKb);

  // Keep ResponseRouter session alive by passing non-empty string context after Turn 1
  const contextArray = bridgeState.turns.length > 0 ? bridgeState.turns : [String(query || '')];
  const engineOut = router.route(String(query || ''), contextArray);

  const normalizedIntent = normalizeIntent(engineOut?.debug?.intent, engineOut?.text, engineOut?.debug);
  const { text, whatsappUrl } = extractWhatsAppAndCleanText(engineOut?.text || '', waDigits, normalizedIntent);

  const skuList = shouldAttachProducts(normalizedIntent, engineOut?.text || '', router.getSession());
  const products = resolveCatalogProducts(skuList, catalog);

  recordTurn(query);

  return {
    text,
    intent: normalizedIntent,
    products,
    suggestions: Array.isArray(engineOut?.suggestedQuestions) ? engineOut.suggestedQuestions : [],
    whatsappUrl
  };
}

if (typeof window !== 'undefined') {
  ensureRouter().catch((err) => {
    console.warn('[ORV-BASIC-BRIDGE] Preload failed:', err);
  });
}
