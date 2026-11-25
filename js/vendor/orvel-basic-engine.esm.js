const Me = {
  faqConfidenceThreshold: 0.38,
  faqAmbiguousThreshold: 0.62,
  intentConfidenceThreshold: 0.4,
  maxProductResults: 5,
  enableRomanUrdu: !0,
  contextWindowSize: 2
}, Be = {
  // ---- Common typos & contractions ----
  delivry: "delivery",
  dilvery: "delivery",
  shiping: "shipping",
  shippin: "shipping",
  waranty: "warranty",
  cradit: "credit",
  buisness: "business",
  ofice: "office",
  owers: "hours",
  timngs: "timings",
  pryce: "price",
  asalam: "salam",
  asalaam: "salam",
  "asalam o alaikum": "assalamualaikum",
  "asalam walekum": "assalamualaikum",
  krni: "karni",
  krna: "karna",
  "kr skty": "kar sakte",
  "bta den": "tell me",
  "bta do": "tell me",
  bta: "tell me",
  bande: "human agent",
  banda: "human agent",
  banday: "human agent",
  u: "you",
  offr: "offer",
  watchs: "watches",
  waches: "watches",
  orignal: "original",
  "pehli meeting": "introductory consultation",
  kidhar: "where",
  discont: "discount",
  discunt: "discount",
  autometic: "automatic",
  autmatic: "automatic",
  qurtz: "quartz",
  lether: "leather",
  silvr: "silver",
  watr: "water",
  resistence: "resistance",
  shrt: "shirt",
  pnts: "pants",
  exchnge: "exchange",
  policie: "policy",
  trdmark: "trademark",
  registraton: "registration",
  registrtion: "registration",
  cmpany: "company",
  smartwath: "smartwatch",
  stok: "stock",
  szing: "sizing",
  guid: "guide",
  wapsi: "return",
  // ---- Product & Catalog Typos ----
  producst: "products",
  producs: "products",
  prducts: "products",
  prdcts: "products",
  producuts: "products",
  produc: "product",
  prodot: "product",
  iteams: "items",
  cheezain: "products",
  cheezein: "products",
  chizen: "products",
  chizain: "products",
  cheezon: "products",
  tumharii: "tumhari",
  kitnii: "kitni",
  kitnay: "kitne",
  kitny: "kitne",
  kitna: "kitna",
  merin: "meri",
  sakhty: "sakte",
  sakhy: "sake",
  sakty: "sakte",
  sakta: "sakta",
  hno: "hoon",
  hon: "hoon",
  hun: "hoon",
  thek: "theek",
  thk: "theek",
  b: "bhi",
  ma: "main",
  mai: "main",
  apkay: "aapke",
  apk: "aapke",
  // ---- Price / Cost ----
  qeemat: "price",
  keemat: "price",
  qimat: "price",
  kimat: "price",
  rate: "price",
  "kya rate": "what price",
  daam: "price",
  mol: "price",
  cost: "price",
  "delivery charges": "delivery",
  "shipping charges": "shipping",
  mehnga: "expensive",
  sasta: "cheap",
  "kitna hai": "how much",
  "kitnay ka": "how much",
  "kitne ka": "how much",
  "kitna ka": "how much",
  "kya price": "what price",
  "price kya": "what price",
  "price kia": "what price",
  "rate kya": "what price",
  "rate kia": "what price",
  // ---- Availability ----
  maujood: "available",
  milega: "available",
  milta: "available",
  "available hai": "available",
  "stock mein": "in stock",
  "stok mein": "in stock",
  "stock me": "in stock",
  // ---- Delivery / Shipping ----
  deliveri: "delivery",
  delevery: "delivery",
  deleveri: "delivery",
  deleivery: "delivery",
  shipment: "shipping",
  courier: "shipping",
  "kab aayega": "when delivery",
  "kab milay ga": "when delivery",
  "kab milega": "when delivery",
  "delivery kab": "when delivery",
  "parcel kab": "when delivery",
  // ---- Return / Exchange ----
  wapas: "return",
  badlna: "exchange",
  badalna: "exchange",
  "wapas karna": "return",
  refund: "return",
  warranty: "warranty",
  guarantee: "warranty",
  zamanat: "warranty",
  // ---- Payment ----
  "cash on delivery": "cod",
  "c.o.d": "cod",
  "c o d": "cod",
  jazzcash: "jazzcash payment",
  "jazz cash": "jazzcash payment",
  easypaisa: "easypaisa payment",
  "easy paisa": "easypaisa payment",
  "bank transfer": "bank transfer",
  installment: "installment",
  kistain: "installment",
  kisten: "installment",
  kist: "installment",
  emi: "installment",
  // ---- Color ----
  rang: "color",
  colour: "color",
  "rang kya": "what color",
  kala: "black",
  safed: "white",
  laal: "red",
  neela: "blue",
  nila: "blue",
  hara: "green",
  peela: "yellow",
  sunahri: "gold",
  "sonay ka": "gold",
  chandi: "silver",
  chandni: "silver",
  gulaabi: "pink",
  gulabi: "pink",
  narangi: "orange",
  bhoora: "brown",
  bhura: "brown",
  grey: "gray",
  // ---- Size ----
  saiz: "size",
  "size kya": "what size",
  chhota: "small",
  bada: "large",
  bari: "large",
  choti: "small",
  medium: "medium",
  drm: "medium",
  // ---- Quantities / Numerics ----
  hazar: "thousand",
  hajar: "thousand",
  lakh: "hundred thousand",
  "k ": "thousand ",
  // ---- Business Timings ----
  "kab khulta": "opening hours",
  "kab band": "closing hours",
  "timing kya": "what hours",
  "timings kya": "what hours",
  "khula hai": "is open",
  "band hai": "is closed",
  // ---- Contact ----
  "kahan hain": "where located",
  "kahan ho": "where located",
  "kahan hai": "where located",
  "number kya": "phone number",
  "number dia": "give number",
  // ---- Conversational / Wellbeing ----
  "how r u": "how are you",
  "how r uh": "how are you",
  "how ru": "how are you",
  "how are things": "how are you",
  "how are you doing": "how are you",
  "how do you do": "how are you",
  "kesy ho": "how are you",
  "kaise ho": "how are you",
  "kese ho": "how are you",
  "kese hain": "how are you",
  "kya haal hai": "how are you",
  "kya haal": "how are you",
  "kia haal hai": "how are you",
  "kya hal hai": "how are you",
  "kia hal chal": "how are you",
  "kya haal chal": "how are you",
  "sab theek": "how are you",
  "sab theek hai": "how are you",
  "theek ho": "how are you",
  // ---- Bot Identity ----
  "what is your name": "what is your name",
  "what is ur name": "what is your name",
  "whats your name": "what is your name",
  "whats ur name": "what is your name",
  "who are you": "who are you",
  "who r u": "who are you",
  "who r you": "who are you",
  "what are you": "who are you",
  "tumhara naam kya hai": "what is your name",
  "ap ka naam kya hai": "what is your name",
  "aap ka naam kya hai": "what is your name",
  "ap kon ho": "who are you",
  "aap kon hain": "who are you",
  "kon ho aap": "who are you",
  "kon ho tum": "who are you",
  "kon ho": "who are you",
  // ---- Human handoff ----
  "insaan se": "human agent",
  "baat karni": "want to talk",
  "baat karo": "want to talk",
  "agent chahiye": "need agent",
  rabta: "contact",
  raabta: "contact",
  // ---- Greeting / Politeness ----
  shukriya: "thank you",
  shukria: "thank you",
  mehrbani: "thank you",
  thx: "thank you",
  thku: "thank you",
  "bohot acha": "very good",
  "bohat acha": "very good",
  bilkul: "absolutely",
  zaroor: "of course",
  theek: "okay",
  thik: "okay",
  accha: "okay good",
  acha: "okay good",
  // ---- Product Nouns & Commands ----
  ghari: "watch",
  ghariyan: "watches",
  "ghari dikhao": "show watch",
  "ghariyan dikhao": "show watches",
  "kapray dikhao": "show clothes",
  // ---- Availability ----
  mojood: "available",
  "mil jayegi": "available",
  "mil jaye gi": "available",
  "sold out": "out of stock",
  "khatam ho gaya": "out of stock",
  // ---- Delivery ----
  bhejna: "delivery",
  "bhejte ho": "delivery",
  "bhej do": "delivery",
  // ---- Return & Repair ----
  "pasand nahi": "return",
  "pasand na aye": "return",
  "change karna": "exchange",
  "battery change": "battery replacement",
  "battery replace": "battery replacement",
  "strap change": "strap replacement",
  // ---- Common Urdu filler words (map to empty / strip) ----
  "kya hai": "what is",
  "kya hain": "what is",
  "kia hai": "what is",
  batao: "tell me",
  bataiye: "please tell",
  mujhe: "me",
  mujhay: "me",
  chahiye: "want",
  "chahiye mujhe": "i want",
  dikhao: "show",
  dikhaiye: "show me",
  "hai kya": "is there",
  "hain kya": "are there",
  koi: "any",
  wala: "",
  wali: "",
  walay: ""
}, Oe = {
  // Texting & conversational abbreviations
  u: "you",
  r: "are",
  ur: "your",
  uh: "you",
  ru: "are you",
  plz: "please",
  pls: "please",
  msg: "message",
  thx: "thank you",
  ty: "thank you",
  tks: "thanks",
  aoa: "assalamualaikum",
  hy: "hi",
  hii: "hi",
  hiii: "hi",
  helo: "hello",
  heloo: "hello",
  hellow: "hello",
  wats: "what is",
  whats: "what is",
  // Commerce & currency
  cod: "cash on delivery",
  whatsapp: "whatsapp",
  wa: "whatsapp",
  ws: "whatsapp",
  pk: "pakistan",
  pkr: "pakistani rupees",
  rs: "rupees",
  usd: "us dollars",
  eur: "euros",
  gbp: "british pounds",
  qty: "quantity",
  pcs: "pieces"
}, aa = /* @__PURE__ */ new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "with",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "shall",
  "i",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "this",
  "that",
  "these",
  "those",
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "please",
  "kindly",
  "just",
  "only",
  "also",
  "very",
  "really",
  "quite",
  // Roman Urdu stop words
  "ap",
  "aap",
  "mein",
  "se",
  "ko",
  "ka",
  "ki",
  "ke",
  "ne",
  "par",
  "per",
  "jo",
  "yeh",
  "woh",
  "hai",
  "hain",
  "tha",
  "thi",
  "thay",
  "ho",
  "hoga",
  "hogi",
  "hy",
  "hn"
]), pe = /\b(?=[A-Za-z0-9-]*[A-Za-z])([A-Za-z0-9]{1,8}(?:-[A-Za-z0-9]{1,8})+|[A-Za-z]{2,}\d{2,})\b/gi;
function O(t, e = { enableRomanUrdu: !0 }) {
  const a = t.toLowerCase().trim(), s = [], i = t.trim();
  let n;
  for (pe.lastIndex = 0; (n = pe.exec(i)) !== null; ) {
    const c = n[0].toUpperCase();
    s.includes(c) || s.push(c);
  }
  const r = [], h = (c) => {
    !isNaN(c) && c > 0 && !r.includes(c) && r.push(c);
  };
  for (const c of t.matchAll(/\b(\d+(?:\.\d+)?)\s*k\b/gi))
    h(Math.round(parseFloat(c[1]) * 1e3));
  for (const c of t.matchAll(/\b(\d+(?:\.\d+)?)\s*(?:hazar|hajar|thousand)\b/gi))
    h(Math.round(parseFloat(c[1]) * 1e3));
  for (const c of t.matchAll(/\b(\d+(?:\.\d+)?)\s*(?:lakh|lac)\b/gi))
    h(Math.round(parseFloat(c[1]) * 1e5));
  for (const c of t.matchAll(/(?:rs\.?\s*|pkr\s*)(\d[\d,]*)/gi))
    h(parseFloat(c[1].replace(/,/g, "")));
  for (const c of t.matchAll(/\b(\d{1,3}(?:,\d{3})+)\b/g))
    h(parseFloat(c[0].replace(/,/g, "")));
  for (const c of t.matchAll(/\b(\d{4,7})\b/g))
    h(parseFloat(c[1]));
  let o = a.replace(/(\d),(\d)/g, "$1$2").replace(/[?!،؟。！？]/g, " ").replace(/['"`,;:]/g, " ").replace(/\s+/g, " ").trim();
  o = o.replace(/\b(\d+(?:\.\d+)?)\s*k\b/gi, (c, u) => ` ${Math.round(parseFloat(u) * 1e3)} `), o = o.replace(/\b(\d+(?:\.\d+)?)\s*(?:hazar|hajar|thousand)\b/gi, (c, u) => ` ${Math.round(parseFloat(u) * 1e3)} `), o = o.replace(/\b(\d+(?:\.\d+)?)\s*(?:lakh|lac)\b/gi, (c, u) => ` ${Math.round(parseFloat(u) * 1e5)} `), o = o.replace(/(?:rs\.?\s*|pkr\s*)(\d[\d,]*)/gi, (c, u) => ` ${u.replace(/,/g, "")} `);
  for (const [c, u] of Object.entries(Oe)) {
    const k = new RegExp(`\\b${K(c)}\\b`, "gi");
    o = o.replace(k, u);
  }
  if (e.enableRomanUrdu !== !1) {
    const c = { ...Be, ...e.extraSynonyms ?? {} }, u = Object.entries(c).filter(([m]) => m.includes(" ")).sort((m, l) => l[0].length - m[0].length);
    for (const [m, l] of u) {
      const g = new RegExp(`\\b${K(m)}\\b`, "gi");
      o = o.replace(g, l);
    }
    const k = Object.entries(c).filter(([m]) => !m.includes(" "));
    for (const [m, l] of k) {
      const g = new RegExp(`\\b${K(m)}\\b`, "gi");
      o = o.replace(g, l);
    }
  }
  return o = o.replace(/\s+/g, " ").trim(), { normalized: o, raw: a, skus: s, prices: r };
}
function qe(t, e) {
  if (e.length === 0) return {};
  const a = t.toLowerCase(), s = /\b(?:under|below|less than|max|maximum|upto|up to|se kam|tak)\b/.test(a), i = /\b(?:over|above|more than|min|minimum|at least|se zyada|se upar)\b/.test(a);
  if (/\b(?:between|beween)\b/.test(a) && e.length >= 2) {
    const r = [...e].sort((h, o) => h - o);
    return { minPrice: r[0], maxPrice: r[r.length - 1] };
  }
  if (s && e.length >= 1)
    return { maxPrice: Math.max(...e) };
  if (i && e.length >= 1)
    return { minPrice: Math.min(...e) };
  if (e.length >= 2) {
    const r = [...e].sort((h, o) => h - o);
    return { minPrice: r[0], maxPrice: r[r.length - 1] };
  }
  return e.length === 1 ? { maxPrice: e[0] } : {};
}
function K(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function L(t) {
  return Array.isArray ? Array.isArray(t) : $e(t) === "[object Array]";
}
function Ne(t) {
  if (typeof t == "string") return t;
  if (typeof t == "bigint") return t.toString();
  const e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function ee(t) {
  return t == null ? "" : Ne(t);
}
function P(t) {
  return typeof t == "string";
}
function q(t) {
  return typeof t == "number";
}
function Ue(t) {
  return t === !0 || t === !1 || Ge(t) && $e(t) == "[object Boolean]";
}
function Te(t) {
  return typeof t == "object";
}
function Ge(t) {
  return Te(t) && t !== null;
}
function $(t) {
  return t != null;
}
function B(t) {
  return !t.trim().length;
}
function $e(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const He = "Incorrect 'index' type", te = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", Qe = (t) => `Invalid value for key ${t}`, Ke = (t) => `Pattern length exceeds max of ${t}.`, Ye = (t) => `Missing ${t} property in key`, Ve = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Xe = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", me = Object.prototype.hasOwnProperty;
var Ze = class {
  constructor(t) {
    this._keys = [], this._keyMap = {};
    let e = 0;
    t.forEach((a) => {
      const s = Fe(a);
      this._keys.push(s), this._keyMap[s.id] = s, e += s.weight;
    }), this._keys.forEach((a) => {
      a.weight /= e;
    });
  }
  get(t) {
    return this._keyMap[t];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function Fe(t) {
  let e = null, a = null, s = null, i = 1, n = null;
  if (P(t) || L(t))
    s = t, e = ke(t), a = N(t);
  else {
    if (!me.call(t, "name")) throw new Error(Ye("name"));
    const r = t.name;
    if (s = r, me.call(t, "weight") && t.weight !== void 0 && (i = t.weight, i <= 0))
      throw new Error(Ve(N(r)));
    e = ke(r), a = N(r), n = t.getFn ?? null;
  }
  return {
    path: e,
    id: a,
    weight: i,
    src: s,
    getFn: n
  };
}
function ke(t) {
  return L(t) ? t : t.split(".");
}
function N(t) {
  return L(t) ? t.join(".") : t;
}
function Je(t, e) {
  const a = [];
  let s = !1;
  const i = (n, r, h, o) => {
    if ($(n))
      if (!r[h]) a.push(o !== void 0 ? {
        v: n,
        i: o
      } : n);
      else {
        const c = n[r[h]];
        if (!$(c)) return;
        if (h === r.length - 1 && (P(c) || q(c) || Ue(c) || typeof c == "bigint")) a.push(o !== void 0 ? {
          v: ee(c),
          i: o
        } : ee(c));
        else if (L(c)) {
          s = !0;
          for (let u = 0, k = c.length; u < k; u += 1) i(c[u], r, h + 1, u);
        } else r.length && i(c, r, h + 1, o);
      }
  };
  return i(t, P(e) ? e.split(".") : e, 0), s ? a : a[0];
}
const et = {
  includeMatches: !1,
  findAllMatches: !1,
  minMatchCharLength: 1
}, tt = {
  isCaseSensitive: !1,
  ignoreDiacritics: !1,
  includeScore: !1,
  keys: [],
  shouldSort: !0,
  sortFn: (t, e) => t.score === e.score ? t.idx < e.idx ? -1 : 1 : t.score < e.score ? -1 : 1
}, at = {
  location: 0,
  threshold: 0.6,
  distance: 100
}, st = {
  useExtendedSearch: !1,
  useTokenSearch: !1,
  tokenize: void 0,
  tokenMatch: "any",
  getFn: Je,
  ignoreLocation: !1,
  ignoreFieldNorm: !1,
  fieldNormWeight: 1
}, f = Object.freeze({
  ...tt,
  ...et,
  ...at,
  ...st
});
function it(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 160;
}
function nt(t = 1, e = 3) {
  const a = /* @__PURE__ */ new Map(), s = Math.pow(10, e);
  return {
    get(i) {
      let n = 0, r = !1;
      for (let o = 0; o < i.length; o++) it(i.charCodeAt(o)) ? r = !1 : r || (n++, r = !0);
      if (n === 0 && (n = 1), a.has(n)) return a.get(n);
      const h = Math.round(s / Math.pow(n, 0.5 * t)) / s;
      return a.set(n, h), h;
    },
    clear() {
      a.clear();
    }
  };
}
var he = class {
  constructor({ getFn: t = f.getFn, fieldNormWeight: e = f.fieldNormWeight } = {}) {
    this.norm = nt(e, 3), this.getFn = t, this.isCreated = !1, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
  }
  setSources(t = []) {
    this.docs = t;
  }
  setIndexRecords(t = []) {
    this.records = t;
  }
  setKeys(t = []) {
    this.keys = t, this._keysMap = {}, t.forEach((e, a) => {
      this._keysMap[e.id] = a;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) return;
    this.isCreated = !0;
    const t = this.docs.length;
    this.records = new Array(t);
    let e = 0;
    if (P(this.docs[0])) for (let a = 0; a < t; a++) {
      const s = this._createStringRecord(this.docs[a], a);
      s && (this.records[e++] = s);
    }
    else for (let a = 0; a < t; a++) this.records[e++] = this._createObjectRecord(this.docs[a], a);
    this.records.length = e, this.norm.clear();
  }
  add(t, e) {
    if (!Number.isInteger(e) || e < 0) throw new Error(te);
    if (P(t)) {
      const s = this._createStringRecord(t, e);
      return s && this.records.push(s), s;
    }
    const a = this._createObjectRecord(t, e);
    return this.records.push(a), a;
  }
  removeAt(t) {
    if (!Number.isInteger(t) || t < 0) throw new Error(te);
    for (let e = 0, a = this.records.length; e < a; e += 1) if (this.records[e].i === t) {
      this.records.splice(e, 1);
      break;
    }
    for (let e = 0, a = this.records.length; e < a; e += 1) this.records[e].i > t && (this.records[e].i -= 1);
  }
  removeAll(t) {
    const e = /* @__PURE__ */ new Set();
    for (const s of t) Number.isInteger(s) && s >= 0 && e.add(s);
    if (e.size === 0) return;
    this.records = this.records.filter((s) => !e.has(s.i));
    const a = Array.from(e).sort((s, i) => s - i);
    for (const s of this.records) {
      let i = 0, n = a.length;
      for (; i < n; ) {
        const r = i + n >>> 1;
        a[r] < s.i ? i = r + 1 : n = r;
      }
      s.i -= i;
    }
  }
  getValueForItemAtKeyId(t, e) {
    return t[this._keysMap[e]];
  }
  size() {
    return this.records.length;
  }
  _createStringRecord(t, e) {
    return !$(t) || B(t) ? null : {
      v: t,
      i: e,
      n: this.norm.get(t)
    };
  }
  _createObjectRecord(t, e) {
    const a = {
      i: e,
      $: {}
    };
    for (let s = 0, i = this.keys.length; s < i; s++) {
      const n = this.keys[s], r = n.getFn ? n.getFn(t) : this.getFn(t, n.path);
      if ($(r)) {
        if (L(r)) {
          const h = [];
          for (let o = 0, c = r.length; o < c; o += 1) {
            const u = r[o];
            if ($(u)) {
              if (P(u)) {
                if (!B(u)) {
                  const k = {
                    v: u,
                    i: o,
                    n: this.norm.get(u)
                  };
                  h.push(k);
                }
              } else if ($(u.v)) {
                const k = P(u.v) ? u.v : ee(u.v);
                if (!B(k)) {
                  const m = {
                    v: k,
                    i: u.i,
                    n: this.norm.get(k)
                  };
                  h.push(m);
                }
              }
            }
          }
          a.$[s] = h;
        } else if (P(r) && !B(r)) {
          const h = {
            v: r,
            n: this.norm.get(r)
          };
          a.$[s] = h;
        }
      }
    }
    return a;
  }
  toJSON() {
    return {
      keys: this.keys.map(({ getFn: t, ...e }) => e),
      records: this.records
    };
  }
};
function Re(t, e, { getFn: a = f.getFn, fieldNormWeight: s = f.fieldNormWeight } = {}) {
  const i = new he({
    getFn: a,
    fieldNormWeight: s
  });
  return i.setKeys(t.map(Fe)), i.setSources(e), i.create(), i;
}
function rt(t, { getFn: e = f.getFn, fieldNormWeight: a = f.fieldNormWeight } = {}) {
  const { keys: s, records: i } = t, n = new he({
    getFn: e,
    fieldNormWeight: a
  });
  return n.setKeys(s), n.setIndexRecords(i), n;
}
function ot(t = [], e = f.minMatchCharLength) {
  const a = [];
  let s = -1, i = -1, n = 0;
  for (let r = t.length; n < r; n += 1) {
    const h = t[n];
    h && s === -1 ? s = n : !h && s !== -1 && (i = n - 1, i - s + 1 >= e && a.push([s, i]), s = -1);
  }
  return t[n - 1] && n - s >= e && a.push([s, n - 1]), a;
}
function ht(t, e, a, { location: s = f.location, distance: i = f.distance, threshold: n = f.threshold, findAllMatches: r = f.findAllMatches, minMatchCharLength: h = f.minMatchCharLength, includeMatches: o = f.includeMatches, ignoreLocation: c = f.ignoreLocation } = {}) {
  if (e.length > 32) throw new Error(Ke(32));
  const u = e.length, k = t.length, m = Math.max(0, Math.min(s, k));
  let l = n, g = m;
  const y = (A, C) => {
    const T = A / u;
    if (c) return T;
    const F = Math.abs(m - C);
    return i ? T + F / i : F ? 1 : T;
  }, b = h > 1 || o, d = b ? Array(k) : [];
  let v;
  for (; (v = t.indexOf(e, g)) > -1; ) {
    const A = y(0, v);
    if (l = Math.min(A, l), g = v + u, b) {
      let C = 0;
      for (; C < u; )
        d[v + C] = 1, C += 1;
    }
  }
  g = -1;
  let w = [], p = 1, _ = 0, I = u + k;
  const S = 1 << u - 1;
  for (let A = 0; A < u; A += 1) {
    let C = 0, T = I;
    for (; C < T; )
      y(A, m + T) <= l ? C = T : I = T, T = Math.floor((I - C) / 2 + C);
    I = T;
    let F = Math.max(1, m - T + 1);
    const H = r ? k : Math.min(m + T, k) + u, W = Array(H + 2);
    W[H + 1] = (1 << A) - 1;
    for (let R = H; R >= F; R -= 1) {
      const Q = R - 1, De = a[t[Q]];
      if (W[R] = (W[R + 1] << 1 | 1) & De, A && (W[R] |= (w[R + 1] | w[R]) << 1 | 1 | w[R + 1]), W[R] & S && (p = y(A, Q), p <= l)) {
        if (l = p, g = Q, _ = A, g <= m) break;
        F = Math.max(1, 2 * m - g);
      }
    }
    if (y(A + 1, m) > l) break;
    w = W;
  }
  if (b && g >= 0) {
    const A = Math.min(k - 1, g + u - 1 + _);
    for (let C = g; C <= A; C += 1) a[t[C]] && (d[C] = 1);
  }
  const x = {
    isMatch: g >= 0,
    score: Math.max(1e-3, p)
  };
  if (b) {
    const A = ot(d, h);
    A.length ? o && (x.indices = A) : x.isMatch = !1;
  }
  return x;
}
function ct(t) {
  const e = {};
  for (let a = 0, s = t.length; a < s; a += 1) {
    const i = t.charAt(a);
    e[i] = (e[i] || 0) | 1 << s - a - 1;
  }
  return e;
}
function ce(t) {
  if (t.length <= 1) return t;
  t.sort((a, s) => a[0] - s[0] || a[1] - s[1]);
  const e = [t[0]];
  for (let a = 1, s = t.length; a < s; a += 1) {
    const i = e[e.length - 1], n = t[a];
    n[0] <= i[1] + 1 ? i[1] = Math.max(i[1], n[1]) : e.push(n);
  }
  return e;
}
const Le = {
  ł: "l",
  Ł: "L",
  đ: "d",
  Đ: "D",
  ø: "o",
  Ø: "O",
  ħ: "h",
  Ħ: "H",
  ŧ: "t",
  Ŧ: "T",
  ı: "i",
  ß: "ss"
}, ut = new RegExp("[" + Object.keys(Le).join("") + "]", "g"), M = typeof String.prototype.normalize == "function" ? (t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(ut, (e) => Le[e]) : (t) => t;
var ue = class {
  constructor(t, { location: e = f.location, threshold: a = f.threshold, distance: s = f.distance, includeMatches: i = f.includeMatches, findAllMatches: n = f.findAllMatches, minMatchCharLength: r = f.minMatchCharLength, isCaseSensitive: h = f.isCaseSensitive, ignoreDiacritics: o = f.ignoreDiacritics, ignoreLocation: c = f.ignoreLocation } = {}) {
    if (this.options = {
      location: e,
      threshold: a,
      distance: s,
      includeMatches: i,
      findAllMatches: n,
      minMatchCharLength: r,
      isCaseSensitive: h,
      ignoreDiacritics: o,
      ignoreLocation: c
    }, t = h ? t : t.toLowerCase(), t = o ? M(t) : t, this.pattern = t, this.chunks = [], !this.pattern.length) return;
    const u = (m, l) => {
      this.chunks.push({
        pattern: m,
        alphabet: ct(m),
        startIndex: l
      });
    }, k = this.pattern.length;
    if (k > 32) {
      let m = 0;
      const l = k % 32, g = k - l;
      for (; m < g; )
        u(this.pattern.substr(m, 32), m), m += 32;
      if (l) {
        const y = k - 32;
        u(this.pattern.substr(y), y);
      }
    } else u(this.pattern, 0);
  }
  searchIn(t) {
    const { isCaseSensitive: e, ignoreDiacritics: a, includeMatches: s } = this.options;
    if (t = e ? t : t.toLowerCase(), t = a ? M(t) : t, this.pattern === t) {
      if (t.length < this.options.minMatchCharLength) return {
        isMatch: !1,
        score: 1
      };
      const g = {
        isMatch: !0,
        score: 0
      };
      return s && (g.indices = [[0, t.length - 1]]), g;
    }
    const { location: i, distance: n, threshold: r, findAllMatches: h, minMatchCharLength: o, ignoreLocation: c } = this.options, u = [];
    let k = 0, m = !1;
    this.chunks.forEach(({ pattern: g, alphabet: y, startIndex: b }) => {
      const { isMatch: d, score: v, indices: w } = ht(t, g, y, {
        location: i + b,
        distance: n,
        threshold: r,
        findAllMatches: h,
        minMatchCharLength: o,
        includeMatches: s,
        ignoreLocation: c
      });
      d && (m = !0), k += v, d && w && u.push(...w);
    });
    const l = {
      isMatch: m,
      score: m ? k / this.chunks.length : 1
    };
    return m && s && (l.indices = ce(u)), l;
  }
};
const lt = /* @__PURE__ */ new Set(["fuzzy", "include"]);
function dt(t) {
  return t.startsWith("inverse");
}
const ae = [
  {
    type: "exact",
    multiRegex: /^="(.*)"$/,
    singleRegex: /^=(.*)$/,
    create: (t) => ({
      type: "exact",
      search(e) {
        const a = e === t;
        return {
          isMatch: a,
          score: a ? 0 : 1,
          indices: [0, t.length - 1]
        };
      }
    })
  },
  {
    type: "include",
    multiRegex: /^'"(.*)"$/,
    singleRegex: /^'(.*)$/,
    create: (t) => ({
      type: "include",
      search(e) {
        let a = 0, s;
        const i = [], n = t.length;
        for (; (s = e.indexOf(t, a)) > -1; )
          a = s + n, i.push([s, a - 1]);
        const r = !!i.length;
        return {
          isMatch: r,
          score: r ? 0 : 1,
          indices: i
        };
      }
    })
  },
  {
    type: "prefix-exact",
    multiRegex: /^\^"(.*)"$/,
    singleRegex: /^\^(.*)$/,
    create: (t) => ({
      type: "prefix-exact",
      search(e) {
        const a = e.startsWith(t);
        return {
          isMatch: a,
          score: a ? 0 : 1,
          indices: [0, t.length - 1]
        };
      }
    })
  },
  {
    type: "inverse-prefix-exact",
    multiRegex: /^!\^"(.*)"$/,
    singleRegex: /^!\^(.*)$/,
    create: (t) => ({
      type: "inverse-prefix-exact",
      search(e) {
        const a = !e.startsWith(t);
        return {
          isMatch: a,
          score: a ? 0 : 1,
          indices: [0, e.length - 1]
        };
      }
    })
  },
  {
    type: "inverse-suffix-exact",
    multiRegex: /^!"(.*)"\$$/,
    singleRegex: /^!(.*)\$$/,
    create: (t) => ({
      type: "inverse-suffix-exact",
      search(e) {
        const a = !e.endsWith(t);
        return {
          isMatch: a,
          score: a ? 0 : 1,
          indices: [0, e.length - 1]
        };
      }
    })
  },
  {
    type: "suffix-exact",
    multiRegex: /^"(.*)"\$$/,
    singleRegex: /^(.*)\$$/,
    create: (t) => ({
      type: "suffix-exact",
      search(e) {
        const a = e.endsWith(t);
        return {
          isMatch: a,
          score: a ? 0 : 1,
          indices: [e.length - t.length, e.length - 1]
        };
      }
    })
  },
  {
    type: "inverse-exact",
    multiRegex: /^!"(.*)"$/,
    singleRegex: /^!(.*)$/,
    create: (t) => ({
      type: "inverse-exact",
      search(e) {
        const a = e.indexOf(t) === -1;
        return {
          isMatch: a,
          score: a ? 0 : 1,
          indices: [0, e.length - 1]
        };
      }
    })
  },
  {
    type: "fuzzy",
    multiRegex: /^"(.*)"$/,
    singleRegex: /^(.*)$/,
    create: (t, e = {}) => {
      const a = new ue(t, {
        location: e.location ?? f.location,
        threshold: e.threshold ?? f.threshold,
        distance: e.distance ?? f.distance,
        includeMatches: e.includeMatches ?? f.includeMatches,
        findAllMatches: e.findAllMatches ?? f.findAllMatches,
        minMatchCharLength: e.minMatchCharLength ?? f.minMatchCharLength,
        isCaseSensitive: e.isCaseSensitive ?? f.isCaseSensitive,
        ignoreDiacritics: e.ignoreDiacritics ?? f.ignoreDiacritics,
        ignoreLocation: e.ignoreLocation ?? f.ignoreLocation
      });
      return {
        type: "fuzzy",
        search(s) {
          return a.searchIn(s);
        }
      };
    }
  }
], ge = ae.length, pt = "\0", mt = "|";
function kt(t) {
  const e = [], a = t.length;
  let s = 0;
  for (; s < a; ) {
    for (; s < a && t[s] === " "; ) s++;
    if (s >= a) break;
    let i = s;
    for (; i < a && t[i] !== " " && t[i] !== '"'; ) i++;
    if (i < a && t[i] === '"') {
      for (i++; i < a; ) {
        if (t[i] === '"') {
          const n = i + 1;
          if (n >= a || t[n] === " ") {
            i++;
            break;
          }
          if (t[n] === "$" && (n + 1 >= a || t[n + 1] === " ")) {
            i += 2;
            break;
          }
        }
        i++;
      }
      e.push(t.substring(s, i)), s = i;
    } else {
      for (; i < a && t[i] !== " "; ) i++;
      e.push(t.substring(s, i)), s = i;
    }
  }
  return e;
}
function ye(t, e) {
  const a = t.match(e);
  return a ? a[1] : null;
}
function gt(t, e = {}) {
  return t.replace(/\\\|/g, pt).split(mt).map((a) => {
    const s = kt(a.replace(/\u0000/g, "|").trim()).filter((n) => n && !!n.trim()), i = [];
    for (let n = 0, r = s.length; n < r; n += 1) {
      const h = s[n];
      let o = !1, c = -1;
      for (; !o && ++c < ge; ) {
        const u = ae[c], k = ye(h, u.multiRegex);
        k && (i.push(u.create(k, e)), o = !0);
      }
      if (!o)
        for (c = -1; ++c < ge; ) {
          const u = ae[c], k = ye(h, u.singleRegex);
          if (k) {
            i.push(u.create(k, e));
            break;
          }
        }
    }
    return i;
  });
}
var yt = class {
  constructor(t, { isCaseSensitive: e = f.isCaseSensitive, ignoreDiacritics: a = f.ignoreDiacritics, includeMatches: s = f.includeMatches, minMatchCharLength: i = f.minMatchCharLength, ignoreLocation: n = f.ignoreLocation, findAllMatches: r = f.findAllMatches, location: h = f.location, threshold: o = f.threshold, distance: c = f.distance } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: e,
      ignoreDiacritics: a,
      includeMatches: s,
      minMatchCharLength: i,
      findAllMatches: r,
      ignoreLocation: n,
      location: h,
      threshold: o,
      distance: c
    }, t = e ? t : t.toLowerCase(), t = a ? M(t) : t, this.pattern = t, this.query = gt(this.pattern, this.options);
  }
  static condition(t, e) {
    return e.useExtendedSearch;
  }
  searchIn(t) {
    const e = this.query;
    if (!e) return {
      isMatch: !1,
      score: 1
    };
    const { includeMatches: a, isCaseSensitive: s, ignoreDiacritics: i } = this.options;
    t = s ? t : t.toLowerCase(), t = i ? M(t) : t;
    let n = 0;
    const r = [];
    let h = 0, o = !1;
    for (let c = 0, u = e.length; c < u; c += 1) {
      const k = e[c];
      r.length = 0, n = 0, o = !1;
      for (let m = 0, l = k.length; m < l; m += 1) {
        const g = k[m], { isMatch: y, indices: b, score: d } = g.search(t);
        if (y)
          n += 1, h += d, dt(g.type) && (o = !0), a && (lt.has(g.type) ? r.push(...b) : r.push(b));
        else {
          h = 0, n = 0, r.length = 0, o = !1;
          break;
        }
      }
      if (n) {
        const m = {
          isMatch: !0,
          score: h / n
        };
        return o && (m.hasInverse = !0), a && (m.indices = ce(r)), m;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
};
const se = [];
function le(...t) {
  se.push(...t);
}
function U(t, e) {
  for (let a = 0, s = se.length; a < s; a += 1) {
    const i = se[a];
    if (i.condition(t, e)) return new i(t, e);
  }
  return new ue(t, e);
}
const G = {
  AND: "$and",
  OR: "$or"
}, ie = {
  PATH: "$path",
  PATTERN: "$val"
}, ne = (t) => !!(t[G.AND] || t[G.OR]), bt = (t) => !!t[ie.PATH], ft = (t) => !L(t) && Te(t) && !ne(t), be = (t) => ({ [G.AND]: Object.keys(t).map((e) => ({ [e]: t[e] })) });
function ze(t, e, { auto: a = !0 } = {}) {
  const s = (i) => {
    if (P(i)) {
      const o = {
        keyId: null,
        pattern: i
      };
      return a && (o.searcher = U(i, e)), o;
    }
    const n = Object.keys(i), r = bt(i);
    if (!r && n.length > 1 && !ne(i)) return s(be(i));
    if (ft(i)) {
      const o = r ? i[ie.PATH] : n[0], c = r ? i[ie.PATTERN] : i[o];
      if (!P(c)) throw new Error(Qe(o));
      const u = {
        keyId: N(o),
        pattern: c
      };
      return a && (u.searcher = U(c, e)), u;
    }
    const h = {
      children: [],
      operator: n[0]
    };
    return n.forEach((o) => {
      const c = i[o];
      L(c) && c.forEach((u) => {
        h.children.push(s(u));
      });
    }), h;
  };
  return ne(t) || (t = be(t)), s(t);
}
function re(t, { ignoreFieldNorm: e = f.ignoreFieldNorm }) {
  let a = 1;
  return t.forEach(({ key: s, norm: i, score: n }) => {
    const r = s ? s.weight : null;
    a *= Math.pow(n === 0 && r ? Number.EPSILON : n, (r || 1) * (e ? 1 : i));
  }), a;
}
function wt(t, { ignoreFieldNorm: e = f.ignoreFieldNorm }) {
  t.forEach((a) => {
    a.score = re(a.matches, { ignoreFieldNorm: e });
  });
}
var _t = class {
  constructor(t, e) {
    this.limit = t, this.heap = [], this.comparator = e;
  }
  get size() {
    return this.heap.length;
  }
  insert(t) {
    this.size < this.limit ? (this.heap.push(t), this._bubbleUp(this.size - 1)) : this.comparator(t, this.heap[0]) < 0 && (this.heap[0] = t, this._sinkDown(0));
  }
  extractSorted() {
    return this.heap.sort(this.comparator);
  }
  _bubbleUp(t) {
    const e = this.heap;
    for (; t > 0; ) {
      const a = t - 1 >> 1;
      if (this.comparator(e[t], e[a]) <= 0) break;
      const s = e[t];
      e[t] = e[a], e[a] = s, t = a;
    }
  }
  _sinkDown(t) {
    const e = this.heap, a = e.length;
    let s = t;
    do {
      t = s;
      const i = 2 * t + 1, n = 2 * t + 2;
      if (i < a && this.comparator(e[i], e[s]) > 0 && (s = i), n < a && this.comparator(e[n], e[s]) > 0 && (s = n), s !== t) {
        const r = e[t];
        e[t] = e[s], e[s] = r;
      }
    } while (s !== t);
  }
};
function It(t) {
  const e = [];
  return t.matches.forEach((a) => {
    if (!$(a.indices) || !a.indices.length) return;
    const s = {
      indices: a.indices,
      value: a.value
    };
    a.key && (s.key = a.key.id), a.idx > -1 && (s.refIndex = a.idx), e.push(s);
  }), e;
}
function vt(t, e, { includeMatches: a = f.includeMatches, includeScore: s = f.includeScore } = {}) {
  return t.map((i) => {
    const { idx: n } = i, r = {
      item: e[n],
      refIndex: n
    };
    return a && (r.matches = It(i)), s && (r.score = i.score), r;
  });
}
const At = /[\p{L}\p{M}\p{N}_]+/gu, fe = /* @__PURE__ */ new WeakSet();
function Ct(t) {
  fe.has(t) || (fe.add(t), console.warn(`[Fuse] tokenize regex ${t} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
}
function St(t) {
  if (typeof t == "function") {
    let e = !1;
    return (a) => {
      const s = t(a);
      if (!e && (e = !0, !Array.isArray(s) || s.some((i) => typeof i != "string")))
        throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(s) ? "array containing non-strings" : typeof s}.`);
      return s;
    };
  }
  return t instanceof RegExp ? (t.global || Ct(t), (e) => e.match(t) || []) : (e) => e.match(At) || [];
}
function oe({ isCaseSensitive: t = !1, ignoreDiacritics: e = !1, tokenize: a } = {}) {
  const s = St(a);
  return { tokenize(i) {
    return t || (i = i.toLowerCase()), e && (i = M(i)), s(i);
  } };
}
var Et = class {
  static condition(t, e) {
    return e.useTokenSearch;
  }
  constructor(t, e) {
    this.options = e, this.analyzer = oe({
      isCaseSensitive: e.isCaseSensitive,
      ignoreDiacritics: e.ignoreDiacritics,
      tokenize: e.tokenize
    });
    const a = this.analyzer.tokenize(t), { df: s, fieldCount: i } = e._invertedIndex;
    this.termSearchers = [], this.idfWeights = [];
    for (const n of a) {
      this.termSearchers.push(new ue(n, {
        location: e.location,
        threshold: e.threshold,
        distance: e.distance,
        includeMatches: e.includeMatches,
        findAllMatches: e.findAllMatches,
        minMatchCharLength: e.minMatchCharLength,
        isCaseSensitive: e.isCaseSensitive,
        ignoreDiacritics: e.ignoreDiacritics,
        ignoreLocation: !0
      }));
      const r = s.get(n) || 0, h = Math.log(1 + (i - r + 0.5) / (r + 0.5));
      this.idfWeights.push(h);
    }
    this.combineAll = e.tokenMatch === "all", this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31;
  }
  searchIn(t) {
    if (!this.termSearchers.length) return {
      isMatch: !1,
      score: 1
    };
    const e = [];
    let a = 0, s = 0, i = 0, n = 0;
    const r = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
    for (let c = 0; c < this.termSearchers.length; c++) {
      const u = this.termSearchers[c].searchIn(t), k = this.idfWeights[c];
      s += k, u.isMatch && (i++, a += k * (1 - u.score), u.indices && e.push(...u.indices), this.combineAll && (this.useMask ? n |= 1 << c : r.add(c)));
    }
    if (i === 0) return {
      isMatch: !1,
      score: 1
    };
    const h = s > 0 ? 1 - a / s : 0, o = {
      isMatch: !0,
      score: Math.max(1e-3, h)
    };
    return this.options.includeMatches && e.length && (o.indices = ce(e)), this.combineAll && (this.useMask ? o.matchedMask = n : o.matchedTerms = r, o.termCount = this.numTerms), o;
  }
};
function Y(t, e, a, s) {
  const i = s.tokenize(e);
  if (!i.length) return;
  t.fieldCount++, t.docFieldCount.set(a, (t.docFieldCount.get(a) || 0) + 1);
  const n = new Set(i);
  let r = t.docTermFieldHits.get(a);
  r || (r = /* @__PURE__ */ new Map(), t.docTermFieldHits.set(a, r));
  for (const h of n)
    r.set(h, (r.get(h) || 0) + 1), t.df.set(h, (t.df.get(h) || 0) + 1);
}
function We(t, e, a, s) {
  const { i, v: n, $: r } = e;
  if (n !== void 0) {
    Y(t, n, i, s);
    return;
  }
  if (r)
    for (let h = 0; h < a; h++) {
      const o = r[h];
      if (o)
        if (Array.isArray(o)) for (const c of o) Y(t, c.v, i, s);
        else Y(t, o.v, i, s);
    }
}
function xt(t, e, a) {
  const s = {
    fieldCount: 0,
    df: /* @__PURE__ */ new Map(),
    docFieldCount: /* @__PURE__ */ new Map(),
    docTermFieldHits: /* @__PURE__ */ new Map()
  };
  for (const i of t) We(s, i, e, a);
  return s;
}
function Pt(t, e, a, s) {
  We(t, e, a, s);
}
function Tt(t, e) {
  const a = t.docFieldCount.get(e);
  if (a === void 0) return;
  t.fieldCount -= a, t.docFieldCount.delete(e);
  const s = t.docTermFieldHits.get(e);
  if (s) {
    for (const [i, n] of s) {
      const r = (t.df.get(i) || 0) - n;
      r <= 0 ? t.df.delete(i) : t.df.set(i, r);
    }
    t.docTermFieldHits.delete(e);
  }
}
function we(t, e) {
  if (e.length === 0) return;
  const a = Array.from(new Set(e)).sort((h, o) => h - o);
  for (const h of a) Tt(t, h);
  const s = (h) => {
    let o = 0, c = a.length;
    for (; o < c; ) {
      const u = o + c >>> 1;
      a[u] < h ? o = u + 1 : c = u;
    }
    return h - o;
  }, i = a[0], n = /* @__PURE__ */ new Map();
  for (const [h, o] of t.docFieldCount) n.set(h > i ? s(h) : h, o);
  t.docFieldCount = n;
  const r = /* @__PURE__ */ new Map();
  for (const [h, o] of t.docTermFieldHits) r.set(h > i ? s(h) : h, o);
  t.docTermFieldHits = r;
}
var z = class {
  constructor(t, e, a) {
    this.options = {
      ...f,
      ...e
    }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new Ze(this.options.keys), this._docs = t, this._myIndex = null, this._invertedIndex = null, this.setCollection(t, a), this._lastQuery = null, this._lastSearcher = null;
  }
  _getSearcher(t) {
    if (this._lastQuery === t) return this._lastSearcher;
    const e = U(t, this._invertedIndex ? {
      ...this.options,
      _invertedIndex: this._invertedIndex
    } : this.options);
    return this._lastQuery = t, this._lastSearcher = e, e;
  }
  setCollection(t, e) {
    if (this._docs = t, e && !(e instanceof he)) throw new Error(He);
    if (this._myIndex = e || Re(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    }), this.options.useTokenSearch) {
      const a = oe({
        isCaseSensitive: this.options.isCaseSensitive,
        ignoreDiacritics: this.options.ignoreDiacritics,
        tokenize: this.options.tokenize
      });
      this._invertedIndex = xt(this._myIndex.records, this._myIndex.keys.length, a);
    }
    this._invalidateSearcherCache();
  }
  add(t) {
    if (!$(t)) return;
    this._docs.push(t);
    const e = this._myIndex.add(t, this._docs.length - 1);
    if (this._invertedIndex && e) {
      const a = oe({
        isCaseSensitive: this.options.isCaseSensitive,
        ignoreDiacritics: this.options.ignoreDiacritics,
        tokenize: this.options.tokenize
      });
      Pt(this._invertedIndex, e, this._myIndex.keys.length, a);
    }
    this._invalidateSearcherCache();
  }
  remove(t = () => !1) {
    const e = [], a = [];
    for (let s = 0, i = this._docs.length; s < i; s += 1) t(this._docs[s], s) && (e.push(this._docs[s]), a.push(s));
    if (a.length) {
      this._invertedIndex && we(this._invertedIndex, a);
      const s = new Set(a);
      this._docs = this._docs.filter((i, n) => !s.has(n)), this._myIndex.removeAll(a), this._invalidateSearcherCache();
    }
    return e;
  }
  removeAt(t) {
    if (!Number.isInteger(t) || t < 0 || t >= this._docs.length) throw new Error(te);
    this._invertedIndex && we(this._invertedIndex, [t]);
    const e = this._docs.splice(t, 1)[0];
    return this._myIndex.removeAt(t), this._invalidateSearcherCache(), e;
  }
  _invalidateSearcherCache() {
    this._lastQuery = null, this._lastSearcher = null;
  }
  getIndex() {
    return this._myIndex;
  }
  _normalizedKeys() {
    return this._myIndex.keys.map((t) => this._keyStore.get(t.id) || t);
  }
  search(t, e) {
    const { limit: a = -1 } = e || {}, { includeMatches: s, includeScore: i, shouldSort: n, sortFn: r, ignoreFieldNorm: h } = this.options;
    if (P(t) && !t.trim()) {
      let m = this._docs.map((l, g) => ({
        item: l,
        refIndex: g
      }));
      return q(a) && a > -1 && (m = m.slice(0, a)), m;
    }
    const o = n && q(a) && a > 0 && P(t), c = r, u = (m, l) => c(m, l) || m.idx - l.idx;
    let k;
    if (o) {
      const m = new _t(a, u);
      P(this._docs[0]) ? this._searchStringList(t, {
        heap: m,
        ignoreFieldNorm: h
      }) : this._searchObjectList(t, {
        heap: m,
        ignoreFieldNorm: h
      }), k = m.extractSorted();
    } else
      k = P(t) ? P(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t), wt(k, { ignoreFieldNorm: h }), n && k.sort(P(t) ? u : c), q(a) && a > -1 && (k = k.slice(0, a));
    return vt(k, this._docs, {
      includeMatches: s,
      includeScore: i
    });
  }
  _searchStringList(t, { heap: e, ignoreFieldNorm: a } = {}) {
    const s = this._getSearcher(t), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: n } = this._myIndex, r = e ? null : [];
    return n.forEach(({ v: h, i: o, n: c }) => {
      if (!$(h)) return;
      const u = s.searchIn(h);
      if (u.isMatch) {
        const k = {
          score: u.score,
          value: h,
          norm: c,
          indices: u.indices
        };
        i && (k.matchedMask = u.matchedMask, k.matchedTerms = u.matchedTerms, k.termCount = u.termCount);
        const m = [k];
        if (!i || this._coversAllTokens(m)) {
          const l = {
            item: h,
            idx: o,
            matches: m
          };
          e ? (l.score = re(l.matches, { ignoreFieldNorm: a }), e.insert(l)) : r.push(l);
        }
      }
    }), r;
  }
  _searchLogical(t) {
    const e = ze(t, this.options), a = this._normalizedKeys(), s = (h, o, c) => {
      if (!("children" in h)) {
        const { keyId: l, searcher: g } = h;
        let y;
        return l === null ? (y = [], a.forEach((b, d) => {
          y.push(...this._findMatches({
            key: b,
            value: o[d],
            searcher: g
          }));
        })) : y = this._findMatches({
          key: this._keyStore.get(l),
          value: this._myIndex.getValueForItemAtKeyId(o, l),
          searcher: g
        }), y && y.length ? [{
          idx: c,
          item: o,
          matches: y
        }] : [];
      }
      const { children: u, operator: k } = h, m = [];
      for (let l = 0, g = u.length; l < g; l += 1) {
        const y = u[l], b = s(y, o, c);
        if (b.length) m.push(...b);
        else if (k === G.AND) return [];
      }
      return m;
    }, i = this._myIndex.records, n = /* @__PURE__ */ new Map(), r = [];
    return i.forEach(({ $: h, i: o }) => {
      if ($(h)) {
        const c = s(e, h, o);
        c.length && (n.has(o) || (n.set(o, {
          idx: o,
          item: h,
          matches: []
        }), r.push(n.get(o))), c.forEach(({ matches: u }) => {
          n.get(o).matches.push(...u);
        }));
      }
    }), r;
  }
  _searchObjectList(t, { heap: e, ignoreFieldNorm: a } = {}) {
    const s = this._getSearcher(t), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: n } = this._myIndex, r = this._normalizedKeys(), h = e ? null : [];
    return n.forEach(({ $: o, i: c }) => {
      if (!$(o)) return;
      const u = [];
      let k = !1, m = !1;
      if (r.forEach((l, g) => {
        const y = this._findMatches({
          key: l,
          value: o[g],
          searcher: s
        });
        y.length ? (u.push(...y), y[0].hasInverse && (m = !0)) : k = !0;
      }), !(m && k) && u.length && (!i || this._coversAllTokens(u))) {
        const l = {
          idx: c,
          item: o,
          matches: u
        };
        e ? (l.score = re(l.matches, { ignoreFieldNorm: a }), e.insert(l)) : h.push(l);
      }
    }), h;
  }
  _findMatches({ key: t, value: e, searcher: a }) {
    if (!$(e)) return [];
    const s = [];
    if (L(e)) e.forEach(({ v: i, i: n, n: r }) => {
      if (!$(i)) return;
      const h = a.searchIn(i);
      if (h.isMatch) {
        const o = {
          score: h.score,
          key: t,
          value: i,
          idx: n,
          norm: r,
          indices: h.indices,
          hasInverse: h.hasInverse
        };
        h.termCount !== void 0 && (o.matchedMask = h.matchedMask, o.matchedTerms = h.matchedTerms, o.termCount = h.termCount), s.push(o);
      }
    });
    else {
      const { v: i, n } = e, r = a.searchIn(i);
      if (r.isMatch) {
        const h = {
          score: r.score,
          key: t,
          value: i,
          norm: n,
          indices: r.indices,
          hasInverse: r.hasInverse
        };
        r.termCount !== void 0 && (h.matchedMask = r.matchedMask, h.matchedTerms = r.matchedTerms, h.termCount = r.termCount), s.push(h);
      }
    }
    return s;
  }
  _coversAllTokens(t) {
    const e = t.length ? t[0].termCount : void 0;
    if (e === void 0) return !0;
    if (e <= 31) {
      let s = 0;
      for (let i = 0; i < t.length; i++) s |= t[i].matchedMask || 0;
      return s === 2 ** e - 1;
    }
    const a = /* @__PURE__ */ new Set();
    for (let s = 0; s < t.length; s++) {
      const i = t[s].matchedTerms;
      if (i) for (const n of i) a.add(n);
    }
    return a.size === e;
  }
};
z.version = "7.5.0";
z.createIndex = Re;
z.parseIndex = rt;
z.config = f;
z.match = function(t, e, a) {
  if (a && a.useTokenSearch) throw new Error(Xe);
  return U(t, {
    ...f,
    ...a
  }).searchIn(e);
};
z.parseQuery = ze;
le(yt);
le(Et);
z.use = function(...t) {
  t.forEach((e) => le(e));
};
var $t = z;
const Ft = {
  includeScore: !0,
  includeMatches: !0,
  minMatchCharLength: 2,
  threshold: 0.6,
  // Fuse internal threshold — we apply our own tiers below
  distance: 200,
  useExtendedSearch: !1,
  ignoreLocation: !0
  // position in string doesn't matter for FAQ matching
};
class de {
  constructor(e, a) {
    this.config = a;
    const s = {
      ...Ft,
      ...a.fuseOptions ?? {},
      keys: a.keys
    };
    this.fuse = new $t(e, s);
  }
  /** Replace the entire dataset (e.g., after knowledge-base reload) */
  setData(e) {
    this.fuse.setCollection(e);
  }
  /**
   * Search the dataset and return ranked results with confidence levels.
   * Results with score > mediumThreshold are excluded from results to
   * prevent irrelevant queries from receiving confident answers.
   */
  search(e, a = 5) {
    const s = e.trim();
    if (!s) return [];
    const i = this.fuse.search(s, { limit: a * 2 }), n = [];
    for (const r of i) {
      const h = r.score ?? 1;
      if (h > this.config.mediumThreshold || s.length <= 3 && !(r.matches ?? []).some((k) => {
        var g;
        const m = ((g = k.value) == null ? void 0 : g.toLowerCase()) ?? "", l = s.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`\\b${l}\\b`, "i").test(m);
      }) && h > 0.05)
        continue;
      const o = this.scoreToConfidence(h), c = this.extractMatchedValue(r.matches);
      n.push({ item: r.item, score: h, confidence: o, matchedValue: c });
    }
    return n.slice(0, a);
  }
  /** Return the single best match, or null if no confident result found */
  searchBest(e) {
    return this.search(e, 1)[0] ?? null;
  }
  scoreToConfidence(e) {
    return e <= this.config.highThreshold ? "high" : e <= this.config.mediumThreshold ? "medium" : "low";
  }
  extractMatchedValue(e) {
    var a;
    if (!(!e || e.length === 0))
      return (a = e[0]) == null ? void 0 : a.value;
  }
}
function Rt(t, e = 0.35, a = 0.62) {
  return new de(t, {
    keys: [
      { name: "question", weight: 0.4 },
      { name: "variations", weight: 0.4 },
      { name: "tags", weight: 0.2 }
    ],
    highThreshold: e,
    mediumThreshold: a,
    fuseOptions: { threshold: 0.65 }
  });
}
function Lt(t, e = 0.28, a = 0.48) {
  return new de(t, {
    keys: [{ name: "phrase", weight: 1 }],
    highThreshold: e,
    mediumThreshold: a,
    fuseOptions: { threshold: a + 0.05 }
  });
}
function sa(t, e = 0.3, a = 0.5) {
  return new de(t, {
    keys: [
      { name: "name", weight: 0.5 },
      { name: "category", weight: 0.2 },
      { name: "brand", weight: 0.15 },
      { name: "description", weight: 0.1 },
      { name: "colors", weight: 0.05 }
    ],
    highThreshold: e,
    mediumThreshold: a,
    fuseOptions: { threshold: a + 0.05 }
  });
}
const _e = [
  {
    intentId: "greeting",
    keywords: [
      "hello",
      "hi",
      "hii",
      "hiii",
      "helo",
      "heloo",
      "hey",
      "hy",
      "salam",
      "salaam",
      "assalam",
      "namaste",
      "hola",
      "greetings",
      "good morning",
      "good evening",
      "good afternoon",
      "good day"
    ],
    phrases: [
      "aoa",
      "as salam",
      "assalamualaikum",
      "asalam o alaikum",
      "asalam walekum",
      "a o a",
      "salam alaikum",
      "salaam alaikum"
    ]
  },
  {
    intentId: "wellbeing_inquiry",
    keywords: [
      "how are you",
      "how r u",
      "how r uh",
      "how ru",
      "how are things",
      "how do you do",
      "how are you doing",
      "kesy ho",
      "kaise ho",
      "kese ho",
      "kese hain",
      "kya haal hai",
      "kia haal hai",
      "kya hal hai",
      "kia hal chal",
      "kya haal chal",
      "sab theek",
      "theek ho"
    ],
    phrases: [
      "how are you",
      "how r u",
      "how r uh",
      "how ru",
      "how are things",
      "how are you doing",
      "how do you do",
      "kesy ho",
      "kaise ho",
      "kese ho",
      "kese hain",
      "kya haal hai",
      "kia haal hai",
      "kya hal hai",
      "kia hal chal",
      "kya haal chal",
      "sab theek",
      "sab theek hai",
      "theek ho",
      "theek hain"
    ]
  },
  {
    intentId: "conversational_ack",
    keywords: [
      "ma b theek",
      "main bhi theek",
      "me bhi theek",
      "mai theek hu",
      "me theek hu",
      "hum bhi theek",
      "alhamdulillah theek",
      "alhamdulillah sab theek",
      "im fine",
      "i am fine",
      "im good",
      "i am good",
      "doing well",
      "fit hoon",
      "sab theek hai",
      "theek hoon",
      "theek hno"
    ],
    phrases: [
      "ma b theek hno",
      "main bhi theek hoon",
      "me bhi theek hoon",
      "mai theek hu",
      "alhamdulillah theek hoon",
      "alhamdulillah sab theek",
      "i am fine",
      "im good",
      "all good",
      "doing well",
      "fit hoon"
    ]
  },
  {
    intentId: "capabilities_help",
    keywords: [
      "what can you do",
      "how can you help",
      "how can you help me",
      "what are your capabilities",
      "what help can you provide",
      "help options",
      "tum kya kar sakte ho",
      "tum kya help kar sakte ho",
      "tum kia kia help kr sakhty ho",
      "tum meri kia kia help kr sakhty ho",
      "ap kya madad kar sakte hain",
      "ap kya kya help karte hain",
      "kya kya services dete ho",
      "kis kis kaam me help krty"
    ],
    phrases: [
      "what can you do",
      "how can you help me",
      "what are your features",
      "what are your capabilities",
      "tum kia kia help kr sakhty ho merin",
      "tum meri kia kia help kr sakhty ho",
      "tum kya kya kar sakte ho",
      "tum meri kya madad kar sakte ho",
      "kis kis kaam mein help karte hain",
      "help",
      "madad"
    ]
  },
  {
    intentId: "bot_identity",
    keywords: [
      "what is your name",
      "what is ur name",
      "whats your name",
      "whats ur name",
      "who are you",
      "who r u",
      "who r you",
      "what are you",
      "tumhara naam kya hai",
      "ap ka naam kya hai",
      "aap ka naam kya hai",
      "ap kon ho",
      "aap kon hain",
      "kon ho aap",
      "kon ho tum"
    ],
    phrases: [
      "what is your name",
      "what is ur name",
      "whats your name",
      "whats ur name",
      "who are you",
      "who r u",
      "who r you",
      "what are you",
      "tumhara naam kya hai",
      "ap ka naam kya hai",
      "aap ka naam kya hai",
      "ap kon ho",
      "aap kon hain",
      "kon ho aap",
      "kon ho tum",
      "kon ho"
    ]
  },
  {
    intentId: "gratitude",
    keywords: [
      "thank you",
      "thanks",
      "thank u",
      "thx",
      "ty",
      "shukriya",
      "shukria",
      "bohot shukriya",
      "bohat shukriya",
      "mehrbani",
      "meherbani"
    ],
    phrases: [
      "thank you",
      "thanks",
      "thank you so much",
      "thanks a lot",
      "thank u",
      "shukriya",
      "bohot shukriya",
      "bohat shukriya",
      "bht shukriya"
    ]
  },
  {
    intentId: "farewell",
    keywords: [
      "bye",
      "goodbye",
      "good bye",
      "tata",
      "khuda hafiz",
      "allah hafiz",
      "see you",
      "later",
      "thanks bye",
      "thank you bye",
      "alvida"
    ],
    phrases: [
      "goodbye thank you",
      "thank you goodbye",
      "thanks bye",
      "thank you bye",
      "allah hafiz",
      "khuda hafiz",
      "see you later",
      "take care"
    ]
  },
  {
    intentId: "human_handoff",
    keywords: ["human", "agent", "representative", "real person", "insaan", "bande", "banda", "banday", "baat karni hai", "baat krni hai", "customer support", "live chat"],
    phrases: ["talk to a human", "speak to an agent", "customer support", "live chat", "insaan se baat", "kisi bande se", "talk to human", "speak to human", "talk to agent", "speak to agent", "human agent", "talk to someone"]
  },
  {
    intentId: "shipping_delivery",
    keywords: ["delivery", "deliveri", "shipping", "shiping", "deliver", "ship", "dispatch", "track", "tracking", "courier", "parcel", "kab milay ga", "kitne din", "delivery time", "shipping time", "bhejna", "bhejte ho"],
    phrases: ["how long does delivery take", "delivery kab hogi", "how is it shipped", "free delivery", "free shipping", "delivery charges", "shipping charges", "how much are the delivery", "how much is delivery", "how much for delivery", "how many days", "kab milega", "kab aayega"]
  },
  {
    intentId: "payment_methods",
    keywords: ["payment", "pay", "cod", "cash", "card", "online payment", "jazzcash", "easypaisa", "bank transfer", "installment", "emi", "kistain", "credit", "cradit", "debit", "visa", "mastercard"],
    phrases: ["how to pay", "payment methods", "do you accept", "cash on delivery", "cod available", "credit card", "pay by card", "kya cod available hai"]
  },
  {
    intentId: "repair_service",
    keywords: [
      "repair",
      "fixing",
      "fix",
      "service",
      "servicing",
      "battery replacement",
      "replace battery",
      "strap replacement",
      "change battery",
      "repairing",
      "replace watch batteries",
      "replace watch battery",
      "can you repair watches",
      "repair watches",
      "watch repair"
    ],
    phrases: [
      "watch repair",
      "battery replacement",
      "battery replace",
      "repair service",
      "repair karte ho",
      "repair service hai",
      "can you repair",
      "do you repair",
      "strap replacement",
      "service center",
      "replace watch batteries",
      "replace watch battery",
      "can you repair watches",
      "do you repair watches",
      "do you replace watch batteries"
    ]
  },
  {
    intentId: "return_exchange",
    keywords: ["return", "exchange", "refund", "wapas", "badlna", "badalna", "policy", "warranty", "waranty", "guarantee", "damaged", "defective", "broken", "replace item", "replace product", "pasand nahi"],
    phrases: ["return policy", "can i return", "wapas kar sakta hoon", "exchange policy", "refund policy", "warranty policy", "do you have warranty", "pasand na aye", "change karna"]
  },
  {
    intentId: "business_timings",
    keywords: ["hours", "timing", "timings", "open", "close", "working hours", "kab khulta", "kab khulti", "kab band", "schedule", "weekday", "weekend", "sunday", "saturday", "holiday"],
    phrases: ["what are your hours", "when are you open", "timing kya hai", "business hours", "buisness owers", "shop kab khulti", "kab khulti hai", "kab khulta hai"]
  },
  {
    intentId: "contact_info",
    keywords: ["contact", "phone", "number", "email", "address", "location", "where", "find you", "reach you", "kahan", "kidhar", "whatsapp", "call", "visit", "map", "directions", "rabta", "raabta"],
    phrases: ["how to contact", "where are you located", "contact number", "email address", "kahan hain aap", "dukan kahan", "shop kidhar hai", "kahan pe hai"]
  },
  {
    intentId: "product_price",
    keywords: ["price", "qeemat", "keemat", "cost", "rate", "rate kya", "kitne ka", "kitnay ka", "kitne ki", "kitnay ki", "kitni hai", "kitnay", "kitni", "kitne mein", "kitnay mein", "kitna hai", "rate hai", "kaafi mehnga", "sasta", "pryce", "dam", "daam", "paisay", "paise", "sale", "discount", "offer", "deals"],
    phrases: ["how much does it cost", "how much is it", "how much does this cost", "kya rate", "price kya", "price kia", "what is the price", "how much", "kitne ki", "kitnay ka", "kitni hai"]
  },
  {
    intentId: "product_availability",
    keywords: ["available", "stock", "maujood", "mojood", "milega", "milta", "in stock", "out of stock", "kya aap ke paas", "available hai", "sold out", "khatam"],
    phrases: ["is it available", "kya available hai", "stock mein hai", "in stock", "do you have in stock", "hai kya", "mil jayegi"]
  },
  {
    intentId: "product_specs",
    keywords: ["specs", "specification", "features", "dimensions", "weight", "display", "battery", "movement", "mechanical", "quartz", "automatic", "waterproof", "water resistance", "strap", "fabric", "material", "fit"],
    phrases: ["what are the specs", "tell me about specs", "more details", "specifications kya", "battery kitni chalti hai", "mechanical or quartz"]
  },
  {
    intentId: "product_comparison",
    keywords: ["compare", "difference", "vs", "versus", "better", "which one", "konsa better", "konsa acha", "behtar"],
    phrases: ["which is better", "compare these", "what is the difference"]
  },
  {
    intentId: "product_recommendation",
    keywords: ["recommend", "suggest", "bestseller", "trending", "koi suggest", "konsa lena chahiye"],
    phrases: ["what do you recommend", "best option", "suggest karo", "help me choose", "achi watch", "achi watch chahiye"]
  },
  {
    intentId: "product_search",
    keywords: ["show", "dikhao", "list", "products", "items", "collection", "range", "variety", "options", "models", "designs", "styles", "explore", "under", "below", "between", "budget", "se kam", "tak"],
    phrases: ["what do you sell", "what products", "show me", "dikhao mujhe", "kya products", "kya items", "show me watches", "aur koi option", "ghari dikhao"]
  },
  {
    intentId: "business_info",
    keywords: ["company", "brand", "established", "history", "genuine", "authentic", "original"],
    phrases: [
      "tell me about your business",
      "tell me about your company",
      "about us",
      "about company",
      "what do you do",
      "about your company",
      "aap ke barey mein",
      "are your watches original",
      "are your watches authentic",
      "are your watches genuine",
      "original hai",
      "authentic watches"
    ]
  }
], zt = [
  // Greeting
  { intentId: "greeting", phrase: "hello there" },
  { intentId: "greeting", phrase: "hey how are you" },
  { intentId: "greeting", phrase: "hi good morning" },
  { intentId: "greeting", phrase: "salam alaikum" },
  { intentId: "greeting", phrase: "assalam o alaikum" },
  { intentId: "greeting", phrase: "aoa" },
  // Wellbeing
  { intentId: "wellbeing_inquiry", phrase: "how are you doing" },
  { intentId: "wellbeing_inquiry", phrase: "how r u" },
  { intentId: "wellbeing_inquiry", phrase: "how r uh" },
  { intentId: "wellbeing_inquiry", phrase: "kaise ho" },
  { intentId: "wellbeing_inquiry", phrase: "kesy ho" },
  { intentId: "wellbeing_inquiry", phrase: "kya haal hai" },
  { intentId: "wellbeing_inquiry", phrase: "sab theek" },
  // Bot Identity
  { intentId: "bot_identity", phrase: "what is your name" },
  { intentId: "bot_identity", phrase: "what is ur name" },
  { intentId: "bot_identity", phrase: "who are you" },
  { intentId: "bot_identity", phrase: "tumhara naam kya hai" },
  { intentId: "bot_identity", phrase: "ap kon ho" },
  // Gratitude
  { intentId: "gratitude", phrase: "thank you very much" },
  { intentId: "gratitude", phrase: "thanks a lot" },
  { intentId: "gratitude", phrase: "bohot shukriya" },
  // Repair
  { intentId: "repair_service", phrase: "do you repair watches" },
  { intentId: "repair_service", phrase: "battery replacement" },
  { intentId: "repair_service", phrase: "replace watch battery" },
  // Product price
  { intentId: "product_price", phrase: "what is the price of this" },
  { intentId: "product_price", phrase: "how much does it cost" },
  { intentId: "product_price", phrase: "price kya hai" },
  { intentId: "product_price", phrase: "iski qeemat batao" },
  { intentId: "product_price", phrase: "kitnay ka hai" },
  // Product availability
  { intentId: "product_availability", phrase: "is this available" },
  { intentId: "product_availability", phrase: "do you have this in stock" },
  { intentId: "product_availability", phrase: "available hai kya" },
  { intentId: "product_availability", phrase: "stock mein hai" },
  // Product search
  { intentId: "product_search", phrase: "show me your products" },
  { intentId: "product_search", phrase: "what items do you sell" },
  { intentId: "product_search", phrase: "dikhao mujhe" },
  { intentId: "product_search", phrase: "kya range hai" },
  { intentId: "product_search", phrase: "watches under 20k" },
  { intentId: "product_search", phrase: "show me black watches" },
  // Shipping
  { intentId: "shipping_delivery", phrase: "how long does delivery take" },
  { intentId: "shipping_delivery", phrase: "do you offer free shipping" },
  { intentId: "shipping_delivery", phrase: "delivery kab hogi" },
  { intentId: "shipping_delivery", phrase: "parcel kab aayega" },
  // Returns
  { intentId: "return_exchange", phrase: "can I return this product" },
  { intentId: "return_exchange", phrase: "what is your return policy" },
  { intentId: "return_exchange", phrase: "wapas kar sakta hoon kya" },
  { intentId: "return_exchange", phrase: "exchange possible hai" },
  // Payment
  { intentId: "payment_methods", phrase: "do you accept credit cards" },
  { intentId: "payment_methods", phrase: "is cash on delivery available" },
  { intentId: "payment_methods", phrase: "jazzcash se pay kar sakta hoon" },
  { intentId: "payment_methods", phrase: "payment kaise karna hai" },
  // Timings
  { intentId: "business_timings", phrase: "what are your opening hours" },
  { intentId: "business_timings", phrase: "are you open on sundays" },
  { intentId: "business_timings", phrase: "kab khulta hai" },
  // Contact
  { intentId: "contact_info", phrase: "how can I contact you" },
  { intentId: "contact_info", phrase: "what is your phone number" },
  { intentId: "contact_info", phrase: "kahan hain aap log" },
  // Human
  { intentId: "human_handoff", phrase: "I want to speak with a person" },
  { intentId: "human_handoff", phrase: "connect me to customer support" },
  { intentId: "human_handoff", phrase: "insaan se baat karni hai" },
  // Business info
  { intentId: "business_info", phrase: "tell me about your company" },
  { intentId: "business_info", phrase: "who is malikaxiom" },
  // Product specs
  { intentId: "product_specs", phrase: "tell me the specifications" },
  { intentId: "product_specs", phrase: "what material is it made of" },
  // Recommendation
  { intentId: "product_recommendation", phrase: "what would you recommend" },
  { intentId: "product_recommendation", phrase: "best product for gifting" },
  // Comparison
  { intentId: "product_comparison", phrase: "which one is better" },
  { intentId: "product_comparison", phrase: "difference between these two" },
  // Farewell
  { intentId: "farewell", phrase: "goodbye thank you" },
  { intentId: "farewell", phrase: "khuda hafiz" }
], j = {
  greeting: "greeting",
  wellbeing: "wellbeing_inquiry",
  thanks: "gratitude",
  goodbye: "farewell",
  affirmation: "unknown",
  negation: "unknown",
  bot_identity: "bot_identity",
  clarify_response: "unknown",
  catalog_browse: "product_search",
  product_price: "product_price",
  product_availability: "product_availability",
  product_variants: "product_specs",
  product_details: "product_specs",
  product_authenticity: "business_info",
  product_recommendation: "product_recommendation",
  product_compare: "product_comparison",
  discount_offer: "product_price",
  order_place: "product_search",
  order_status: "shipping_delivery",
  order_change: "return_exchange",
  order_cancel: "return_exchange",
  delivery_coverage: "shipping_delivery",
  delivery_fee: "shipping_delivery",
  delivery_eta: "shipping_delivery",
  payment_methods: "payment_methods",
  cash_on_delivery: "payment_methods",
  payment_issue: "payment_methods",
  invoice_request: "payment_methods",
  return_policy: "return_exchange",
  return_request: "return_exchange",
  exchange_request: "return_exchange",
  refund_status: "return_exchange",
  damaged_item: "return_exchange",
  wrong_missing_item: "return_exchange",
  warranty_claim: "return_exchange",
  service_catalog: "product_search",
  service_quote: "product_price",
  service_timeline: "shipping_delivery",
  service_requirements: "business_info",
  portfolio_request: "business_info",
  appointment_book: "contact_info",
  appointment_reschedule: "contact_info",
  appointment_cancel: "contact_info",
  business_hours: "business_timings",
  business_location: "contact_info",
  human_handoff: "human_handoff",
  complaint: "human_handoff",
  technical_support: "human_handoff",
  clarification_needed: "unknown",
  out_of_scope: "unknown"
}, V = {
  greeting: "greeting",
  wellbeing_inquiry: "wellbeing",
  bot_identity: "bot_identity",
  gratitude: "thanks",
  farewell: "goodbye",
  business_info: "product_authenticity",
  product_search: "catalog_browse",
  product_price: "product_price",
  product_availability: "product_availability",
  product_specs: "product_details",
  product_comparison: "product_compare",
  product_recommendation: "product_recommendation",
  shipping_delivery: "delivery_eta",
  return_exchange: "return_policy",
  payment_methods: "payment_methods",
  business_timings: "business_hours",
  contact_info: "business_location",
  repair_service: "service_catalog",
  human_handoff: "human_handoff",
  capabilities_help: "service_catalog",
  conversational_ack: "wellbeing",
  unknown: "clarification_needed"
}, Wt = [
  {
    intentId: "greeting",
    phrase: "Assalam o alaikum"
  },
  {
    intentId: "greeting",
    phrase: "salam"
  },
  {
    intentId: "greeting",
    phrase: "aoa"
  },
  {
    intentId: "greeting",
    phrase: "hello ji"
  },
  {
    intentId: "greeting",
    phrase: "salam bhai"
  },
  {
    intentId: "greeting",
    phrase: "hi koi hai?"
  },
  {
    intentId: "wellbeing",
    phrase: "aap kaise hain?"
  },
  {
    intentId: "wellbeing",
    phrase: "kya haal hai?"
  },
  {
    intentId: "wellbeing",
    phrase: "sab khairiyat?"
  },
  {
    intentId: "wellbeing",
    phrase: "kaisi tabiyat hai?"
  },
  {
    intentId: "wellbeing",
    phrase: "ap theek ho?"
  },
  {
    intentId: "wellbeing",
    phrase: "aur sunao sab theek?"
  },
  {
    intentId: "thanks",
    phrase: "shukriya"
  },
  {
    intentId: "thanks",
    phrase: "bohat meherbani"
  },
  {
    intentId: "thanks",
    phrase: "thanks bhai"
  },
  {
    intentId: "thanks",
    phrase: "jazakAllah"
  },
  {
    intentId: "thanks",
    phrase: "thank u ji"
  },
  {
    intentId: "thanks",
    phrase: "ap ne help ki shukria"
  },
  {
    intentId: "goodbye",
    phrase: "Allah hafiz"
  },
  {
    intentId: "goodbye",
    phrase: "khuda hafiz"
  },
  {
    intentId: "goodbye",
    phrase: "bye ji"
  },
  {
    intentId: "goodbye",
    phrase: "phir baat hogi"
  },
  {
    intentId: "goodbye",
    phrase: "acha ijazat"
  },
  {
    intentId: "goodbye",
    phrase: "ab chalta hun bye"
  },
  {
    intentId: "affirmation",
    phrase: "haan"
  },
  {
    intentId: "affirmation",
    phrase: "ji bilkul"
  },
  {
    intentId: "affirmation",
    phrase: "theek hai"
  },
  {
    intentId: "affirmation",
    phrase: "han jee"
  },
  {
    intentId: "affirmation",
    phrase: "ok done"
  },
  {
    intentId: "affirmation",
    phrase: "sahi hai"
  },
  {
    intentId: "negation",
    phrase: "nahi"
  },
  {
    intentId: "negation",
    phrase: "nai ji"
  },
  {
    intentId: "negation",
    phrase: "no thanks"
  },
  {
    intentId: "negation",
    phrase: "bilkul nahi"
  },
  {
    intentId: "negation",
    phrase: "rehne dein"
  },
  {
    intentId: "negation",
    phrase: "nhi chahiye"
  },
  {
    intentId: "bot_identity",
    phrase: "aap bot ho?"
  },
  {
    intentId: "bot_identity",
    phrase: "insan baat kar raha hai?"
  },
  {
    intentId: "bot_identity",
    phrase: "ye automated reply hai?"
  },
  {
    intentId: "bot_identity",
    phrase: "ap AI hain?"
  },
  {
    intentId: "bot_identity",
    phrase: "aap kaun ho?"
  },
  {
    intentId: "bot_identity",
    phrase: "real banda hai ya bot?"
  },
  {
    intentId: "clarify_response",
    phrase: "samajh nahi aya"
  },
  {
    intentId: "clarify_response",
    phrase: "dobara bata dein"
  },
  {
    intentId: "clarify_response",
    phrase: "asaan lafzon mein samjhao"
  },
  {
    intentId: "clarify_response",
    phrase: "iska kya matlab?"
  },
  {
    intentId: "clarify_response",
    phrase: "phir se kehna"
  },
  {
    intentId: "clarify_response",
    phrase: "thori wazahat kar dein"
  },
  {
    intentId: "catalog_browse",
    phrase: "catalog bhej dein"
  },
  {
    intentId: "catalog_browse",
    phrase: "kya kya products hain?"
  },
  {
    intentId: "catalog_browse",
    phrase: "collection dikhao"
  },
  {
    intentId: "catalog_browse",
    phrase: "items ki list milegi?"
  },
  {
    intentId: "catalog_browse",
    phrase: "apke paas kya milta hai?"
  },
  {
    intentId: "catalog_browse",
    phrase: "new collection bhejo"
  },
  {
    intentId: "product_price",
    phrase: "iski price kya hai?"
  },
  {
    intentId: "product_price",
    phrase: "ye kitne ka hai?"
  },
  {
    intentId: "product_price",
    phrase: "rate bata dein"
  },
  {
    intentId: "product_price",
    phrase: "qeemat kya hai?"
  },
  {
    intentId: "product_price",
    phrase: "is item ka amount?"
  },
  {
    intentId: "product_price",
    phrase: "iska price btao plz"
  },
  {
    intentId: "product_availability",
    phrase: "ye available hai?"
  },
  {
    intentId: "product_availability",
    phrase: "stock mein hai?"
  },
  {
    intentId: "product_availability",
    phrase: "ye item mil jayega?"
  },
  {
    intentId: "product_availability",
    phrase: "black wala in stock hai?"
  },
  {
    intentId: "product_availability",
    phrase: "abhi mojood hai?"
  },
  {
    intentId: "product_availability",
    phrase: "medium size hai apke paas?"
  },
  {
    intentId: "product_variants",
    phrase: "kon se colors hain?"
  },
  {
    intentId: "product_variants",
    phrase: "sizes kya kya hain?"
  },
  {
    intentId: "product_variants",
    phrase: "aur rang dikhao"
  },
  {
    intentId: "product_variants",
    phrase: "is model ki variants?"
  },
  {
    intentId: "product_variants",
    phrase: "small se bara size konsa hai?"
  },
  {
    intentId: "product_variants",
    phrase: "size chart bhejo"
  },
  {
    intentId: "product_details",
    phrase: "iska material kya hai?"
  },
  {
    intentId: "product_details",
    phrase: "specifications batao"
  },
  {
    intentId: "product_details",
    phrase: "kapra konsa hai?"
  },
  {
    intentId: "product_details",
    phrase: "dimensions kya hain?"
  },
  {
    intentId: "product_details",
    phrase: "isko wash kaise karna hai?"
  },
  {
    intentId: "product_details",
    phrase: "watch waterproof hai?"
  },
  {
    intentId: "product_authenticity",
    phrase: "original hai?"
  },
  {
    intentId: "product_authenticity",
    phrase: "copy to nahi?"
  },
  {
    intentId: "product_authenticity",
    phrase: "asli brand hai?"
  },
  {
    intentId: "product_authenticity",
    phrase: "authenticity ka proof hai?"
  },
  {
    intentId: "product_authenticity",
    phrase: "first copy hai kya?"
  },
  {
    intentId: "product_authenticity",
    phrase: "genuine product hai na?"
  },
  {
    intentId: "product_recommendation",
    phrase: "konsa acha rahega?"
  },
  {
    intentId: "product_recommendation",
    phrase: "gift ke liye suggest karo"
  },
  {
    intentId: "product_recommendation",
    phrase: "budget mein kuch dikhao"
  },
  {
    intentId: "product_recommendation",
    phrase: "office ke liye kya loon?"
  },
  {
    intentId: "product_recommendation",
    phrase: "meri need ke hisab se batao"
  },
  {
    intentId: "product_recommendation",
    phrase: "ammi ke liye koi acha gift?"
  },
  {
    intentId: "product_compare",
    phrase: "dono mein farq kya hai?"
  },
  {
    intentId: "product_compare",
    phrase: "ye aur wo compare karo"
  },
  {
    intentId: "product_compare",
    phrase: "kis model ki quality behtar hai?"
  },
  {
    intentId: "product_compare",
    phrase: "A aur B mein konsa acha hai?"
  },
  {
    intentId: "product_compare",
    phrase: "in dono ke features batao"
  },
  {
    intentId: "product_compare",
    phrase: "mehnga wala isse different kyun hai?"
  },
  {
    intentId: "discount_offer",
    phrase: "discount hai?"
  },
  {
    intentId: "discount_offer",
    phrase: "sale kab hai?"
  },
  {
    intentId: "discount_offer",
    phrase: "thora kam kar dein"
  },
  {
    intentId: "discount_offer",
    phrase: "coupon code milega?"
  },
  {
    intentId: "discount_offer",
    phrase: "last price batao"
  },
  {
    intentId: "discount_offer",
    phrase: "koi offer chal rahi hai?"
  },
  {
    intentId: "order_place",
    phrase: "order kaise karun?"
  },
  {
    intentId: "order_place",
    phrase: "ye lena hai"
  },
  {
    intentId: "order_place",
    phrase: "booking kar dein is item ki"
  },
  {
    intentId: "order_place",
    phrase: "checkout kahan hai?"
  },
  {
    intentId: "order_place",
    phrase: "mujhe ye product chahiye"
  },
  {
    intentId: "order_place",
    phrase: "purchase ka process batao"
  },
  {
    intentId: "order_status",
    phrase: "mera order kahan hai?"
  },
  {
    intentId: "order_status",
    phrase: "tracking link bhejo"
  },
  {
    intentId: "order_status",
    phrase: "order status batao"
  },
  {
    intentId: "order_status",
    phrase: "parcel dispatch hua?"
  },
  {
    intentId: "order_status",
    phrase: "order ka update?"
  },
  {
    intentId: "order_status",
    phrase: "tracking number chahiye"
  },
  {
    intentId: "order_change",
    phrase: "order mein address badalna hai"
  },
  {
    intentId: "order_change",
    phrase: "size change karna hai order ka"
  },
  {
    intentId: "order_change",
    phrase: "quantity update kar dein"
  },
  {
    intentId: "order_change",
    phrase: "galat rang select ho gaya"
  },
  {
    intentId: "order_change",
    phrase: "delivery address edit ho sakta hai?"
  },
  {
    intentId: "order_change",
    phrase: "order mein aik aur item add karo"
  },
  {
    intentId: "order_cancel",
    phrase: "order cancel karna hai"
  },
  {
    intentId: "order_cancel",
    phrase: "mera order rok dein"
  },
  {
    intentId: "order_cancel",
    phrase: "ab parcel nahi chahiye"
  },
  {
    intentId: "order_cancel",
    phrase: "order cancellation ka tareeqa?"
  },
  {
    intentId: "order_cancel",
    phrase: "galti se order ho gaya cancel karo"
  },
  {
    intentId: "order_cancel",
    phrase: "dispatch mat karna cancel kar dein"
  },
  {
    intentId: "delivery_coverage",
    phrase: "Lahore delivery hai?"
  },
  {
    intentId: "delivery_coverage",
    phrase: "mere shehar bhejte hain?"
  },
  {
    intentId: "delivery_coverage",
    phrase: "Pakistan bhar delivery hai?"
  },
  {
    intentId: "delivery_coverage",
    phrase: "gaon mein parcel aa jayega?"
  },
  {
    intentId: "delivery_coverage",
    phrase: "Karachi ship karte ho?"
  },
  {
    intentId: "delivery_coverage",
    phrase: "international delivery hai?"
  },
  {
    intentId: "delivery_fee",
    phrase: "delivery charges kitne hain?"
  },
  {
    intentId: "delivery_fee",
    phrase: "shipping free hai?"
  },
  {
    intentId: "delivery_fee",
    phrase: "courier ka kharcha?"
  },
  {
    intentId: "delivery_fee",
    phrase: "DC kitne lagenge?"
  },
  {
    intentId: "delivery_fee",
    phrase: "free delivery kab hoti hai?"
  },
  {
    intentId: "delivery_fee",
    phrase: "Lahore ka delivery rate?"
  },
  {
    intentId: "delivery_eta",
    phrase: "kitne din mein ayega?"
  },
  {
    intentId: "delivery_eta",
    phrase: "delivery time kya hai?"
  },
  {
    intentId: "delivery_eta",
    phrase: "kal tak mil sakta hai?"
  },
  {
    intentId: "delivery_eta",
    phrase: "same day delivery hai?"
  },
  {
    intentId: "delivery_eta",
    phrase: "urgent parcel chahiye"
  },
  {
    intentId: "delivery_eta",
    phrase: "aane mein kitna waqt lagega?"
  },
  {
    intentId: "payment_methods",
    phrase: "payment kaise karni hai?"
  },
  {
    intentId: "payment_methods",
    phrase: "payment options kya hain?"
  },
  {
    intentId: "payment_methods",
    phrase: "card accept karte hain?"
  },
  {
    intentId: "payment_methods",
    phrase: "bank transfer chalega?"
  },
  {
    intentId: "payment_methods",
    phrase: "Easypaisa se pay kar sakte?"
  },
  {
    intentId: "payment_methods",
    phrase: "JazzCash available hai?"
  },
  {
    intentId: "cash_on_delivery",
    phrase: "COD hai?"
  },
  {
    intentId: "cash_on_delivery",
    phrase: "cash on delivery milegi?"
  },
  {
    intentId: "cash_on_delivery",
    phrase: "parcel par paise de sakte?"
  },
  {
    intentId: "cash_on_delivery",
    phrase: "advance ke baghair order hoga?"
  },
  {
    intentId: "cash_on_delivery",
    phrase: "cash delivery pe chalega?"
  },
  {
    intentId: "cash_on_delivery",
    phrase: "COD ke rules kya hain?"
  },
  {
    intentId: "payment_issue",
    phrase: "payment fail ho rahi hai"
  },
  {
    intentId: "payment_issue",
    phrase: "paise kat gaye order nahi bana"
  },
  {
    intentId: "payment_issue",
    phrase: "double payment ho gai"
  },
  {
    intentId: "payment_issue",
    phrase: "transaction pending hai"
  },
  {
    intentId: "payment_issue",
    phrase: "transfer ki receipt confirm nahi hui"
  },
  {
    intentId: "payment_issue",
    phrase: "card decline ho gaya"
  },
  {
    intentId: "invoice_request",
    phrase: "invoice bhej dein"
  },
  {
    intentId: "invoice_request",
    phrase: "bill chahiye"
  },
  {
    intentId: "invoice_request",
    phrase: "receipt mil sakti hai?"
  },
  {
    intentId: "invoice_request",
    phrase: "company name pe invoice chahiye"
  },
  {
    intentId: "invoice_request",
    phrase: "bill pe naam galat hai"
  },
  {
    intentId: "invoice_request",
    phrase: "payment receipt dobara bhejo"
  },
  {
    intentId: "return_policy",
    phrase: "return policy kya hai?"
  },
  {
    intentId: "return_policy",
    phrase: "wapas kar sakte hain?"
  },
  {
    intentId: "return_policy",
    phrase: "kitne din tak return hoga?"
  },
  {
    intentId: "return_policy",
    phrase: "return ka process batao"
  },
  {
    intentId: "return_policy",
    phrase: "packing khol ke return hoga?"
  },
  {
    intentId: "return_policy",
    phrase: "sale item wapas ho sakta hai?"
  },
  {
    intentId: "return_request",
    phrase: "ye item return karna hai"
  },
  {
    intentId: "return_request",
    phrase: "parcel wapas bhejna hai"
  },
  {
    intentId: "return_request",
    phrase: "return request bana dein"
  },
  {
    intentId: "return_request",
    phrase: "product rakhna nahi wapas lena hai"
  },
  {
    intentId: "return_request",
    phrase: "return pickup arrange ho sakta hai?"
  },
  {
    intentId: "return_request",
    phrase: "mujhe iski wapsi karwani hai"
  },
  {
    intentId: "exchange_request",
    phrase: "exchange ho sakta hai?"
  },
  {
    intentId: "exchange_request",
    phrase: "size badalwana hai delivered item ka"
  },
  {
    intentId: "exchange_request",
    phrase: "rang exchange karna hai"
  },
  {
    intentId: "exchange_request",
    phrase: "iske badle dusra model chahiye"
  },
  {
    intentId: "exchange_request",
    phrase: "exchange policy batao"
  },
  {
    intentId: "exchange_request",
    phrase: "medium aya large chahiye"
  },
  {
    intentId: "refund_status",
    phrase: "refund kab ayega?"
  },
  {
    intentId: "refund_status",
    phrase: "paise wapas nahi aye"
  },
  {
    intentId: "refund_status",
    phrase: "refund status kya hai?"
  },
  {
    intentId: "refund_status",
    phrase: "return ho gaya payment kahan hai?"
  },
  {
    intentId: "refund_status",
    phrase: "refund kitne din leta hai?"
  },
  {
    intentId: "refund_status",
    phrase: "meri wapsi ki raqam pending hai"
  },
  {
    intentId: "damaged_item",
    phrase: "item toota hua aya"
  },
  {
    intentId: "damaged_item",
    phrase: "product kharab hai"
  },
  {
    intentId: "damaged_item",
    phrase: "watch chal nahi rahi"
  },
  {
    intentId: "damaged_item",
    phrase: "kapra phata hua mila"
  },
  {
    intentId: "damaged_item",
    phrase: "damaged parcel aya hai"
  },
  {
    intentId: "damaged_item",
    phrase: "use karte hi band ho gaya"
  },
  {
    intentId: "wrong_missing_item",
    phrase: "galat item aya"
  },
  {
    intentId: "wrong_missing_item",
    phrase: "parcel mein cheez kam hai"
  },
  {
    intentId: "wrong_missing_item",
    phrase: "blue mangwaya red mila"
  },
  {
    intentId: "wrong_missing_item",
    phrase: "aik piece missing hai"
  },
  {
    intentId: "wrong_missing_item",
    phrase: "order kuch aur mila kuch aur"
  },
  {
    intentId: "wrong_missing_item",
    phrase: "box khali aya"
  },
  {
    intentId: "warranty_claim",
    phrase: "warranty hai?"
  },
  {
    intentId: "warranty_claim",
    phrase: "guarantee kitni hai?"
  },
  {
    intentId: "warranty_claim",
    phrase: "warranty claim kaise karun?"
  },
  {
    intentId: "warranty_claim",
    phrase: "repair warranty mein hogi?"
  },
  {
    intentId: "warranty_claim",
    phrase: "warranty card nahi mila"
  },
  {
    intentId: "warranty_claim",
    phrase: "guarantee mein cover hota hai?"
  },
  {
    intentId: "service_catalog",
    phrase: "ap kya services dete hain?"
  },
  {
    intentId: "service_catalog",
    phrase: "website banate hain?"
  },
  {
    intentId: "service_catalog",
    phrase: "app development karte ho?"
  },
  {
    intentId: "service_catalog",
    phrase: "AI automation ki service hai?"
  },
  {
    intentId: "service_catalog",
    phrase: "kis kis kaam mein help karte hain?"
  },
  {
    intentId: "service_catalog",
    phrase: "services ki details bhejo"
  },
  {
    intentId: "service_quote",
    phrase: "website ka kitna kharcha hai?"
  },
  {
    intentId: "service_quote",
    phrase: "service charges kya hain?"
  },
  {
    intentId: "service_quote",
    phrase: "project quotation bhejo"
  },
  {
    intentId: "service_quote",
    phrase: "packages batao"
  },
  {
    intentId: "service_quote",
    phrase: "app banane ka budget?"
  },
  {
    intentId: "service_quote",
    phrase: "automation ki fees kitni hai?"
  },
  {
    intentId: "service_timeline",
    phrase: "project kitne din mein hoga?"
  },
  {
    intentId: "service_timeline",
    phrase: "website kab tak banegi?"
  },
  {
    intentId: "service_timeline",
    phrase: "kaam shuru kab kar sakte hain?"
  },
  {
    intentId: "service_timeline",
    phrase: "service complete hone ka time?"
  },
  {
    intentId: "service_timeline",
    phrase: "app delivery timeline batao"
  },
  {
    intentId: "service_timeline",
    phrase: "urgent project le sakte hain?"
  },
  {
    intentId: "service_requirements",
    phrase: "kaam shuru karne ke liye kya chahiye?"
  },
  {
    intentId: "service_requirements",
    phrase: "konsi details bhejun?"
  },
  {
    intentId: "service_requirements",
    phrase: "project brief kaise dun?"
  },
  {
    intentId: "service_requirements",
    phrase: "documents kya lagenge?"
  },
  {
    intentId: "service_requirements",
    phrase: "website ke liye kya dena hoga?"
  },
  {
    intentId: "service_requirements",
    phrase: "content mujhe dena hai?"
  },
  {
    intentId: "portfolio_request",
    phrase: "portfolio bhejo"
  },
  {
    intentId: "portfolio_request",
    phrase: "pehle ka kaam dikhao"
  },
  {
    intentId: "portfolio_request",
    phrase: "koi project example hai?"
  },
  {
    intentId: "portfolio_request",
    phrase: "case studies milengi?"
  },
  {
    intentId: "portfolio_request",
    phrase: "sample website dikha dein"
  },
  {
    intentId: "portfolio_request",
    phrase: "apke work ke demos?"
  },
  {
    intentId: "appointment_book",
    phrase: "appointment leni hai"
  },
  {
    intentId: "appointment_book",
    phrase: "meeting book karni hai"
  },
  {
    intentId: "appointment_book",
    phrase: "kal ka slot available hai?"
  },
  {
    intentId: "appointment_book",
    phrase: "consultation schedule kar dein"
  },
  {
    intentId: "appointment_book",
    phrase: "appointment ka tareeqa?"
  },
  {
    intentId: "appointment_book",
    phrase: "Friday ko time milega?"
  },
  {
    intentId: "appointment_reschedule",
    phrase: "appointment aage karni hai"
  },
  {
    intentId: "appointment_reschedule",
    phrase: "meeting ka time badal dein"
  },
  {
    intentId: "appointment_reschedule",
    phrase: "kal ki booking parson kar do"
  },
  {
    intentId: "appointment_reschedule",
    phrase: "slot reschedule ho sakta hai?"
  },
  {
    intentId: "appointment_reschedule",
    phrase: "appointment late karni hai"
  },
  {
    intentId: "appointment_reschedule",
    phrase: "meeting agle hafte rakh dein"
  },
  {
    intentId: "appointment_cancel",
    phrase: "appointment cancel karni hai"
  },
  {
    intentId: "appointment_cancel",
    phrase: "meeting nahi ho payegi cancel karo"
  },
  {
    intentId: "appointment_cancel",
    phrase: "mera booked slot cancel kar dein"
  },
  {
    intentId: "appointment_cancel",
    phrase: "consultation nahi leni booking hata dein"
  },
  {
    intentId: "appointment_cancel",
    phrase: "kal ki appointment cancel karo"
  },
  {
    intentId: "appointment_cancel",
    phrase: "salon booking cancel karni hai"
  },
  {
    intentId: "business_hours",
    phrase: "shop kab khulti hai?"
  },
  {
    intentId: "business_hours",
    phrase: "timing kya hai?"
  },
  {
    intentId: "business_hours",
    phrase: "Sunday open hain?"
  },
  {
    intentId: "business_hours",
    phrase: "kitne baje band hota hai?"
  },
  {
    intentId: "business_hours",
    phrase: "office hours batao"
  },
  {
    intentId: "business_hours",
    phrase: "jumma ko khule hote hain?"
  },
  {
    intentId: "business_location",
    phrase: "address bhejo"
  },
  {
    intentId: "business_location",
    phrase: "shop kahan hai?"
  },
  {
    intentId: "business_location",
    phrase: "location pin milega?"
  },
  {
    intentId: "business_location",
    phrase: "office kis area mein hai?"
  },
  {
    intentId: "business_location",
    phrase: "rasta bata dein"
  },
  {
    intentId: "business_location",
    phrase: "physical store hai?"
  },
  {
    intentId: "human_handoff",
    phrase: "agent se baat karni hai"
  },
  {
    intentId: "human_handoff",
    phrase: "human se connect karo"
  },
  {
    intentId: "human_handoff",
    phrase: "manager ka number do"
  },
  {
    intentId: "human_handoff",
    phrase: "customer care se baat karwao"
  },
  {
    intentId: "human_handoff",
    phrase: "kisi bande ko bulao"
  },
  {
    intentId: "human_handoff",
    phrase: "call pe baat ho sakti hai?"
  },
  {
    intentId: "complaint",
    phrase: "complaint karni hai"
  },
  {
    intentId: "complaint",
    phrase: "service achi nahi thi"
  },
  {
    intentId: "complaint",
    phrase: "staff ka rawaiya kharab tha"
  },
  {
    intentId: "complaint",
    phrase: "meri shikayat note karein"
  },
  {
    intentId: "complaint",
    phrase: "bohat bura experience raha"
  },
  {
    intentId: "complaint",
    phrase: "apki service se khush nahi"
  },
  {
    intentId: "technical_support",
    phrase: "login nahi ho raha"
  },
  {
    intentId: "technical_support",
    phrase: "website nahi khul rahi"
  },
  {
    intentId: "technical_support",
    phrase: "password reset kaise karun?"
  },
  {
    intentId: "technical_support",
    phrase: "app crash ho rahi hai"
  },
  {
    intentId: "technical_support",
    phrase: "OTP nahi aa raha"
  },
  {
    intentId: "technical_support",
    phrase: "page load nahi hota"
  },
  {
    intentId: "clarification_needed",
    phrase: "wo wala batao"
  },
  {
    intentId: "clarification_needed",
    phrase: "iska kya scene hai?"
  },
  {
    intentId: "clarification_needed",
    phrase: "kitna hai?"
  },
  {
    intentId: "clarification_needed",
    phrase: "ye ho jayega?"
  },
  {
    intentId: "clarification_needed",
    phrase: "same wala chahiye"
  },
  {
    intentId: "clarification_needed",
    phrase: "kal wala kya hua?"
  },
  {
    intentId: "out_of_scope",
    phrase: "aaj mausam kaisa hai?"
  },
  {
    intentId: "out_of_scope",
    phrase: "cricket score batao"
  },
  {
    intentId: "out_of_scope",
    phrase: "mere liye joke sunao"
  },
  {
    intentId: "out_of_scope",
    phrase: "math ka homework kar do"
  },
  {
    intentId: "out_of_scope",
    phrase: "biryani ki recipe do"
  },
  {
    intentId: "out_of_scope",
    phrase: "politics ki news sunao"
  }
], D = [
  // 1. Out of scope
  {
    intentId: "out_of_scope",
    patterns: [
      /\b(?:mausam|weather|barish|kapray\s+sukhane)\b/i,
      /\b(?:cricket|match|runs|score|psl|babar\s+azam|highlight\s+link)\b/i,
      /\b(?:recipe|biryani|cooking)\b/i,
      /\b(?:joke|lateefa|chutkula)\b/i,
      /\b(?:algebra|sawal\s+hal|2x\s+plus\s+5|homework|math)\b/i,
      /\b(?:shayari|breakup\s+shayari|ghazal|poetry)\b/i
    ]
  },
  // 2. Clarification needed (vague fragments without referent or proposed unsupported capabilities)
  {
    intentId: "clarification_needed",
    patterns: [
      /^(?:us\s+cheez\s+ka\s+kya\s+bana|wohi\s+karna\s+tha\s+jo\s+pehle|pehli\s+wali|aur\s+black\s+mein\??|woh\s+jo\s+udhr\s+tha|kitn[ye]\?*\s*total\?*|change\s+krdo\s+bs|haan\s+theek,\s+lekin\s+na\s+bhi|dono\s+colours\s+pasand|wohi\s+screenshot\s+waly)[?!.\s]*$/i,
      /\b(?:7\s+ya\s+8\s+tak\s+scene)\b/i,
      /^(?:😂😂😂|\.{3,}|https?:\/\/\S+)[?!.\s]*$/i,
      /\b(?:installments?\s+pe|financing|3\s+mahine\s+me\s+de\s+dun)\b/i,
      /\b(?:ongoing\s+project|progress\s+chahye|kaam\s+approve\s+kr\s+chuka)\b/i,
      /\b(?:service\s+wali\s+booking\s+confirm\s+hui|booking\s+confirm\s+hui\s+ya\s+abhi\s+pending)\b/i,
      /\b(?:support\s+ticket\s+band\s+mat|ticket\s+band\s+mat\s+krna)\b/i,
      /\b(?:jb\s+stock\s+dobara\s+aye\s+tou\s+mujhe\s+khud\s+msg|dobara\s+aye\s+to\s+notify|notify\s+krdena\s+mujhe)\b/i,
      /\b(?:account\s+aur\s+saved\s+data\s+hamesha\s+k\s+liye\s+delete|delete\s+krdo\s+account)\b/i,
      /\b(?:wholesale\s+k\s+liye\s+trade\s+account|50\s+pieces\s+wholesale)\b/i,
      /\b(?:customs\s+duty|import\s+duty)\b/i,
      /^(?:aik\s+jacket\s+ki\s+pic\s+dekhi\s+thi\s+lekin\s+naam\s+yaad\s+nai)$/i,
      /^(?:appointment\s+A-2\s+aur\s+order\s+O-2\s+dono\s+ka\s+record\s+hy\s+mera)$/i
    ]
  },
  // 3. Standalone Affirmation
  {
    intentId: "affirmation",
    patterns: [
      /\b(?:jee\s+han,\s+aise\s+hi|bilkul\s+ji\s+meri\s+taraf\s+se\s+haan|haan\s+pr\s+woh\s+shart)\b/i,
      /^(?:ji\s+bilkul|theek\s+hai|han\s+jee|ok\s+done|sahi\s+hai|jee\s+han|haan\s+ji|han\s+bilkul|done)[!.\s]*$/i
    ]
  },
  // 4. Standalone Negation
  {
    intentId: "negation",
    patterns: [
      /\b(?:na\s+jee\s+abhi\s+iski\s+zarurat\s+nahi|nopes\s+bhai,\s+filhal\s+rehne\s+do|naaa\s+us\s+tarha\s+nai|status\s+nai\s+milra\s+tou\s+rehne\s+do)\b/i,
      /^(?:nahi|nai\s+ji|no\s+thanks|bilkul\s+nahi|rehne\s+dein|nhi\s+chahiye|na\s+jee|filhal\s+rehne\s+do|no)[!.\s]*$/i
    ]
  },
  // 5. Bot Identity
  {
    intentId: "bot_identity",
    patterns: [
      /\b(?:ap\s+bot\s+ho|aap\s+bot\s+ho|insan\s+baat\s+kar\s+raha|automated\s+reply|ap\s+ai\s+hain|aap\s+kaun\s+ho|real\s+banda|machine\s+jawab|apka\s+reply\s+automatic|real\s+insaan\s+reply\s+dera\s+ya\s+ye\s+system|who\s+are\s+you|what\s+is\s+your\s+name|tumhara\s+naam)\b/i
    ]
  },
  // 6. Clarify response
  {
    intentId: "clarify_response",
    patterns: [
      /\b(?:samajh\s+nahi\s+aya|dobara\s+bata\s+dein|asaan\s+lafzon|iska\s+kya\s+matlab|phir\s+se\s+kehna|thori\s+wazahat|clear\s+nai\s+hua|seedhi\s+urdu|yani\s+har\s+cheez\s+wapas\s+nai\s+hoti\?\s+bas\s+ye\s+samjha\s+do|us\s+se\s+murad\s+kya\s+thi|clarify\s+karein)\b/i
    ]
  },
  // 7. Wellbeing
  {
    intentId: "wellbeing",
    patterns: [
      /\b(?:mizaj|khairiyat|tabiyat)\b/i,
      /\b(?:kese\s+mizaj|umeed\s+hai\s+khair|aap\s+kaise\s+hain|ap\s+kaise\s+hain|(?:kya|kia)\s+ha+l(?:\s+(?:hai|ha|chal|h))?|sab\s+khairiyat|theek\s+ho|how\s+are\s+you|how\s+r\s+u[h]?|kesy\s+ho|kaise\s+ho|kese\s+hain|sunao\s+sab\s+theek)\b/i,
      /\b(?:ma\s+b\s+theek|main\s+bhi\s+theek|me\s+bhi\s+theek|mai\s+theek|me\s+theek|hum\s+bhi\s+theek|alhamdulillah\s+theek|alhamdulillah\s+sab\s+theek|i\s*am\s+fine|i\s*am\s+good|im\s+fine|im\s+good|doing\s+well|fit\s+hoon|sab\s+theek\s+hai|sab\s+set\s+hai|theek\s+thak\s+hoon|theek\s+hno)\b/i
    ]
  },
  // 8. Thanks
  {
    intentId: "thanks",
    patterns: [
      /\b(?:bht\s+nawazish|nawazish\s+apki|shukriya|shukria|bohat\s+meherbani|bht\s+shukriya|thanks\s+bhai|jazakallah|thank\s+u\s+ji|ap\s+ne\s+help\s+ki\s+shukria|waqt\s+dene\s+ka\s+thanks|shukriyaa\s+jee|samjh\s+gya,\s+shukria)\b/i,
      /\b(?:thank\s+you|thanks\s+a\s+lot|bohot\s+shukriya)\b/i
    ]
  },
  // 9. Goodbye
  {
    intentId: "goodbye",
    patterns: [
      /\b(?:duaon\s+me\s+yad|baqi\s+baat\s+kisi\s+aur\s+din|allah\s+hafiz|khuda\s+hafiz|bye\s+ji|phir\s+baat\s+hogi|acha\s+ijazat|ab\s+chalta\s+hun\s+bye|chalen\s+phir\s+rab\s+rakha|allah\s+hifazat\s+kare|goodbye|see\s+you\s+later)\b/i
    ]
  },
  // 10. Greeting
  {
    intentId: "greeting",
    patterns: [
      /^(?:asslamualikum\s*👋\s*aap\s+log\s+online\s+hain\??|salam\s+walekum\s+ji,\s+baat\s+ho\s+sakti\s+hai\??|good\s+morning\s+ji\s+koi\s+active\s+hai\??)$/i,
      /\b(?:jaaaani\s+salam.*koi\s+reply\s+bhi\s+karega)\b/i,
      /^(?:assalam\s*o\s*alaikum|asalam\s*o\s*alaikum|asslamualikum|aslamu\s*alaekm|salam\s+walekum|assalamualaikum|salam\s+bhai|salam\s+ji|hello\s+ji|aoa|slaamz|hello|hi|hii|hiii|helo|hey|hy|salam|salaam)[,!?.\s]*$/i
    ]
  },
  // 11. Catalog browse
  {
    intentId: "catalog_browse",
    patterns: [
      /\b(?:sari\s+variety\s+aik\s+jagah|collection\s+ka\s+link|catalog\s+ka\s+link|just\s+variety\s+dekhni|cllection\s+link|catalog\s+bhej|catalogue|kya\s+kya\s+products|items\s+ki\s+list)\b/i,
      /\b(?:(?:how\s+many|kitni|kitne|kitnay|total)\s+(?:products?|items?|watches?|suits?|services?|options?|designs?|collection|pieces?|models?|producst|producs|prducts))\b/i,
      /\b(?:tumhare|tumhari|tumharii|apke|aap\s+k[eay]?|ap\s+k[eay]?)\s*(?:paas|pas)?\s*(?:kitn[ieay]|total)?\s*(?:products?|items?|watches?|suits?|services?|producst|producs)\b/i,
      /\b(?:catalog\s+size|total\s+collection|total\s+count)\b/i
    ]
  },
  // 12. Product price
  {
    intentId: "product_price",
    patterns: [
      /\b(?:rate\s+bta|kitn[aeayi]\s+(?:ka|ki|hai|mein)|kitnay\s+rupay\s+ki\s+paray|qeemat\s+kya\s+hai|prce\s+bta|per\s+piece\s+hy|prais|range\s+start\s+kidr|combined\s+rate|iska\s+rate\??|is\s+item\s+ki\s+qeemat|rate\s+aur\s+COD|bas\s+rate\s+do|rate\s+uska|paisa\s+bta|qeemat\s+bhi\s+same|price\s+dekhni|iski\s+qeemat\s+bhi|kitny\s+ka\s+parega|second\s+ka\s+rate|first\s+ka\s+bolo.*rate|first\s+ka\s+bolo|price\s+kya|how\s+much\s+is\s+it|what\s+is\s+the\s+price)\b/i
    ]
  },
  // 13. Product availability
  {
    intentId: "product_availability",
    patterns: [
      /\b(?:khareed\s+sakta\s+hun\s+ya\s+sold\s+out|mojood\s+hoga|blackk\s+clr\s+me\s+bhi\s+h|XXL\??\s+pehle\s+waly|stock\s+khtm\s+hy\s+to\s+dusri\s+rangat|red\s+me\s+stock\s+h|black\s+in\s+stock|ab\s+white\s+chahiye|navy\s+milta\s+abhi|black\s+me\s+phir\??|stock\s+available\s+hy|available\s+hai|stock\s+mein\s+hai|in\s+stock|maujood\s+hai)\b/i
    ]
  },
  // 14. Product variants
  {
    intentId: "product_variants",
    patterns: [
      /\b(?:kin\s+kin\s+rangon\s+ka\s+option|measurements\s+wali\s+guide|asal\s+me\s+black\s+hy\s+ya\s+dark\s+blue|measurement\s+inches\s+me|aur\s+colors\s+hain|kon\s+se\s+sizes|aur\s+variant)\b/i
    ]
  },
  // 15. Product details
  {
    intentId: "product_details",
    patterns: [
      /\b(?:leather\s+ka\s+bana\s+hai\s+ya\s+synthetic|machine\s+me\s+dho\s+sakte|kaprra\s+garmio\s+me\s+chipakta|strap\s+ka\s+nap|316L\s+likha|paani\s+ki\s+chheent|andar\s+pockets\s+kitni|loose\s+fit\s+ayegi\s+ya\s+slim|material\s+kya\s+hy|watch\s+ka\s+material|battery\s+kitna\s+chalti|us\s+watch\s+ki\s+battery|dial\s+ka\s+size|waterproof|specs\s+kya)\b/i
    ]
  },
  // 16. Product authenticity
  {
    intentId: "product_authenticity",
    patterns: [
      /\b(?:replica\s+hai\s+ya\s+brand\s+ka\s+genuine|original\s+hai\s+ya\s+copy|authentic\s+hone\s+ka\s+koi\s+saboot|original\s+bolne\s+se\s+kya\s+proof|genuine\s+hai|asli\s+hai\s+ya\s+master\s+copy)\b/i
    ]
  },
  // 17. Product recommendation
  {
    intentId: "product_recommendation",
    patterns: [
      /\b(?:suggest\s+krdo|konsa\s+bag\s+munasib|chhoti\s+behn\s+k\s+liye\s+gift|4k\s+total\s+me\s+watch\s+chahye|daily\s+use\s+me\s+tikne\s+wali|ladies\s+bag\s+ho\s+zip\s+wala|5k\s+se\s+kam\s+ho|behtreen\s+sa\s+suggest|gift\s+lena\s+hy|watch\s+gift\s+deni|metal\s+strap\s+mat\s+dikhana|budget\s+ab\s+4500\s+krlo|recommend\s+karein)\b/i
    ]
  },
  // 18. Product compare
  {
    intentId: "product_compare",
    patterns: [
      /\b(?:battery\s+aur\s+size\s+ka\s+farq|kya\s+behtar\s+hai|in\s+2\s+me\s+paisay\s+kis\s+pe\s+wasool|2\s+aur\s+3\s+number\s+me\s+farq|shortlist\s+me\s+pehle.*aur\s+phir|compare\s+kro\s+weight|dono\s+me\s+kya\s+farq|compare\s+these)\b/i
    ]
  },
  // 19. Discount offer
  {
    intentId: "discount_offer",
    patterns: [
      /\b(?:gunjaish\s+nikal\s+sakti|promo\s+code|bargaining|sale\s+code|discount\s+milega|kam\s+kar\s+lo|coupon\s+code|riayat)\b/i
    ]
  },
  // 20. Order place
  {
    intentId: "order_place",
    patterns: [
      /\b(?:mangwane\s+ka\s+agla\s+step|order\s+krna\s+hai|1\s+rakh\s+do|order\s+book\s+kar|order\s+kaise\s+place)\b/i
    ]
  },
  // 21. Order status
  {
    intentId: "order_status",
    patterns: [
      /\b(?:packing\s+me\s+hai\s+ya\s+nikal|tracker\s+kaam\s+nai|nikla\s+b\s+nai\?\s+3\s+din\s+se\s+processing|tracking\s+me\s+delivered\s+h\s+par|parcel\s+kis\s+shehr\s+me\s+phansa|actual\s+tracker\s+kholo|parcel\s+kal\s+se\s+late|parcel\s+ka\s+sach\s+batao|nikla\s+kia\??|kahan\s+phncha\s+phir|tracker\s+stuck\s+hy|tracking\s+dekh\s+do|zero\s+nikla|latest\s+ka\s+status|order\s+kahan\s+pohancha|dispatch\s+status)\b/i
    ]
  },
  // 22. Order change
  {
    intentId: "order_change",
    patterns: [
      /\b(?:2\s+ki\s+jaga\s+3\s+pieces|address\s+Gulberg\s+wala|ghar\s+ki\s+jaga\s+naya\s+address|size\s+badalna\s+tha,\s+parcel\s+aya\s+ya\s+nai|qty\s+1\s+kam\s+karni\s+thi|shirt\s+M\s+se\s+L\s+krni|address\s+badal\s+do|quantity\s+barha\s+do)\b/i
    ]
  },
  // 23. Order cancel
  {
    intentId: "order_cancel",
    patterns: [
      /\b(?:ab\s+nhi\s+lena,\s+band\s+kr\s+dein|cancel\s+krwa\s+sakta\s+hun|aik\s+order\s+rakhna\s+dusra\s+hata\s+do|agar\s+abhi\s+dispatch\s+nai\s+kia\s+tou\s+cancel|mera\s+order\s+cancel\s+krdo|abhi\s+nikla\s+nai\s+to\s+cancel\s+krwana|nikal\s+gya\s+ho\s+to\s+bilkul\s+cancel\s+na\s+krna|order\s+cancel\s+karwana\s+hy)\b/i
    ]
  },
  // 24. Delivery coverage
  {
    intentId: "delivery_coverage",
    patterns: [
      /\b(?:kasbe\s+tak\s+courier\s+ata\s+hai|Quetta\s+ke\s+bahar\s+bhi\s+parcel|remote\s+area\s+me\s+ghar\s+tk\s+ayega|mere\s+pin\s+pe\s+ship\s+nai\s+hora|village\s+tak\s+pohanchate\s+ho|all\s+pakistan\s+delivery|kahan\s+kahan\s+deliver)\b/i
    ]
  },
  // 25. Delivery fee
  {
    intentId: "delivery_fee",
    patterns: [
      /\b(?:shipping\s+fee|Rawalpindi\s+bhejne\s+ka\s+alag\s+kitna\s+paisa|courier\s+fee\s+aik\s+hi|courier\s+charges\s+bhi|courier\s+b\s+isi\s+me\s+count|dc\s+alag\s+kitni|DC\s+250\s+bola\s+tha|free\s+shipping\s+likha|shipping\s+per\s+kg|Rawalpindi\s+DC|delivery\s+charges|delivery\s+fee|dc\s+kitni)\b/i
    ]
  },
  // 26. Delivery ETA
  {
    intentId: "delivery_eta",
    patterns: [
      /\b(?:jumay\s+se\s+pehle\s+milne\s+ka\s+chance|Friday\s+tak\s+parcel\s+aa\s+jaye\s+ga|Sialkot\s+kab\s+tak\s+receive|same\s+day\s+possible|Karachi\s+se\s+Hyderabad\s+kitny\s+din|Sunday\s+ko\s+courier\s+chalta|delivery\s+policy\s+ki\s+bat\s+hy,\s+kitne\s+din|Sukkur\s+delivery\s+ka\s+andaza|kitne\s+din\s+me\s+milega|kab\s+tak\s+deliver)\b/i
    ]
  },
  // 27. Cash on delivery
  {
    intentId: "cash_on_delivery",
    patterns: [
      /\b(?:delivery\s+pe\s+cash\s+de\s+sakta|rider\s+ko\s+de\s+dun|delivery\s+par\s+cash\s+wala|COD\s+pe\s+b\s+free|COD\s+me\s+rider|cash\s+parcel\s+dekh\s+k\s+dunga|COD\s+b\s+btana|delivery\s+par\s+cash\s+dena\s+hy|pehle\s+khol\s+k\s+dekhun\s+ga\s+phir\s+pay|cash\s+on\s+delivery|cod\s+available)\b/i
    ]
  },
  // 28. Payment methods
  {
    intentId: "payment_methods",
    patterns: [
      /\b(?:Raast\s+se\s+raqam|Cash\s+ke\s+ilawa\s+kis\s+tareeqe|Raast\s+ID\s+wala\s+option|JazzCash\s+ka\s+PIN|online\s+bank\s+se\s+bhejne\s+ka\s+tareeqa|payment\s+ke\s+kya\s+options|card\s+se\s+pay|bank\s+transfer|installment|payment\s+methods)\b/i
    ]
  },
  // 29. Payment issue
  {
    intentId: "payment_issue",
    patterns: [
      /\b(?:amount\s+deduct\s+hua\s+magar\s+screen\s+pe\s+failed|Account\s+se\s+paise\s+cut\s+gaye|checkout\s+pe\s+kyun\s+badal\s+jata|paid\s+tick\s+nahi\s+laga|card\s+sy\s+do\s+dafa\s+debit|balance\s+bhi\s+wapis\s+nai\s+aya|paisay\s+do\s+bar\s+katay|O-63\s+unpaid\s+dikha\s+raha|paisa\s+kahan\s+phansa\s+hy)\b/i
    ]
  },
  // 30. Invoice request
  {
    intentId: "invoice_request",
    patterns: [
      /\b(?:item\s+wise\s+bill|Invoice\s+me\s+mera\s+naam|bill\s+b\s+mere\s+naam|bill\s+pe\s+personal\s+naam\s+nai\s+firm|bill\s+bhi\s+dubara\s+mail|invoice\s+chahiye|receipt\s+bhej)\b/i
    ]
  },
  // 31. Return policy
  {
    intentId: "return_policy",
    patterns: [
      /\b(?:wapsi\s+ki\s+kya\s+sharaait|Tag\s+hata\s+diya\s+ho\s+to\s+return|tag\s+utara,\s+wapsi\s+ab\s+allowed|return\s+behtar|return\s+rules\s+bhejo|return\s+eligibility\s+ka\s+matlab|return\s+policy)\b/i
    ]
  },
  // 32. Return request
  {
    intentId: "return_request",
    patterns: [
      /\b(?:wapas\s+dena\s+hai,\s+request\s+note|return\s+shuru\s+krwa\s+dein|isko\s+return\s+bhi\s+krwana|wapsi\s+ka\s+label\s+generate|wapas\s+lena\s+hy\s+ab|item\s+wapas\s+bhejna|parcel\s+wapas\s+pick)\b/i
    ]
  },
  // 33. Exchange request
  {
    intentId: "exchange_request",
    patterns: [
      /\b(?:agla\s+size\s+mil\s+sakta\s+hai\s+badle|black\s+piece\s+exchange|bara\s+size\s+chahye|kya\s+change\s+ho\s+skta|size\s+exchange\s+bs|pehn\s+k\s+tight\s+laga|L\s+na\s+mile\s+tou\s+abhi\s+koi\s+action\s+mat|exchange\s+kar\s+do|size\s+badal\s+do)\b/i
    ]
  },
  // 34. Refund status
  {
    intentId: "refund_status",
    patterns: [
      /\b(?:account\s+me\s+raqam\s+nai\s+ayi|approved\s+refund\s+ka\s+paisa|refund\s+initiate\s+likha|amount\s+chahye\s+ab|amount\s+wapas\s+pending|refund\s+ki\s+timing\s+kya|refund\s+approve\s+bola|refund\s+ka\s+status|paise\s+kab\s+wapas)\b/i
    ]
  },
  // 35. Damaged item
  {
    intentId: "damaged_item",
    patterns: [
      /\b(?:glass\s+pe\s+crack|dial\s+toota|screen\s+chhatkhi\s+hui|2\s+ghante\s+me\s+dead|parcel\s+toot\s+k\s+aya|cup\s+handle\s+toota|kharab\s+piece|toota\s+tha)\b/i
    ]
  },
  // 36. Wrong missing item
  {
    intentId: "wrong_missing_item",
    patterns: [
      /\b(?:packet\s+me\s+sirf\s+2\s+niklay|box\s+me\s+slippers|4\s+order\s+thy,\s+3\s+niklay|andar\s+green\s+nikla|wrong\s+size,\s+dono\s+issues|white\s+liya\s+tha\s+ye\s+grey\s+aya|ghalat\s+item|missing\s+hai)\b/i
    ]
  },
  // 37. Warranty claim
  {
    intentId: "warranty_claim",
    patterns: [
      /\b(?:warranty\s+kin\s+faults\s+ko\s+cover|warranty\s+claim\s+krwana|guaranty\s+me\s+motor\s+ati|warranty\s+bhi\s+claim|dono\s+ki\s+warranty\s+same|warranty\s+card|warranty\s+claim)\b/i
    ]
  },
  // 38. Service catalog / Capabilities & Help
  {
    intentId: "service_catalog",
    patterns: [
      /\b(?:logo\s+design\s+ka\s+kaam|CRM\s+setup\s+krne\s+ki\s+service|AI\s+wala\s+kaam|site\s+abhi\s+live\s+nai,\s+banwani\s+h|maintenance\s+alag\s+milti|kis\s+kis\s+kaam\s+me\s+help\s+krty|kya\s+kya\s+services|repairing\s+karte\s+ho)\b/i,
      /\b(?:(?:tum|aap|ap)\s+(?:kya\s+kya|kia\s+kia|meri|merin|kya|kia)?\s*(?:help|madad|guide|assist|kar\s+sakhte|kar\s+sakty|kr\s+sakhty|kr\s+sakte)\b)/i,
      /\b(?:what\s+can\s+you\s+do|how\s+can\s+you\s+help|what\s+help\s+can\s+you|what\s+are\s+your\s+capabilities|how\s+to\s+use\s+this\s+bot|help\s+options)\b/i,
      /\b(?:tum\s+kis\s+kaam\s+k\s+ho|tumhara\s+kya\s+kaam\s+hai|kya\s+kya\s+service\s+dete\s+ho)\b/i,
      /^(?:help|madad|features|menu|capabilities)[?!.\s]*$/i
    ]
  },
  // 39. Service quote
  {
    intentId: "service_quote",
    patterns: [
      /\b(?:5\s+page\s+ki\s+site.*estimate|Website\s+ka\s+estimate|app\s+banwani\s+h,\s+budget|approx\s+kitna\s+time\s+aur\s+cost|website\s+package\s+ki\s+bat|kitna\s+kharcha\s+ayega\s+web\s+app|inquiry\s+form,\s+qoute|WhatsApp\s+inquiry|cost\??|service\s+ke\s+kitne\s+charges|SECP\s+registration\s+ki\s+fee)\b/i
    ]
  },
  // 40. Service timeline
  {
    intentId: "service_timeline",
    patterns: [
      /\b(?:banne\s+ka\s+time|kitne\s+haftay\s+lagenge|first\s+draft\s+kab\s+milega|tab\s+tak\s+ready\s+hoga|same\s+scope\s+pe\s+time\s+kitna|approx\s+kitna\s+time|service\s+kitne\s+din\s+me|project\s+kab\s+tak\s+ready)\b/i
    ]
  },
  // 41. Service requirements
  {
    intentId: "service_requirements",
    patterns: [
      /\b(?:konsi\s+maloomat\s+chahiye|pics\s+aur\s+text\s+khud\s+provide|password\s+yahin\s+paste\s+krun|kya\s+documents\s+chahiye|requirements\s+kya\s+hain)\b/i
    ]
  },
  // 42. Portfolio request
  {
    intentId: "portfolio_request",
    patterns: [
      /\b(?:apps\s+pehle\s+banai\s+hain\s+unki\s+examples|purane\s+design\s+project\s+ka\s+sample|stores\s+banaye\s+unka\s+demo|examples\s+bhi\s+dikhao|past\s+work|portfolio)\b/i
    ]
  },
  // 43. Appointment book
  {
    intentId: "appointment_book",
    patterns: [
      /\b(?:consultation\s+ke\s+liye\s+koi\s+khali\s+waqt|salon\s+ki\s+appointment|kal\s+sham\s+ka\s+koi\s+slot|4\s+se\s+5\s+k\s+beech\s+meeting|consultation\s+slot\s+khali|consultation\s+rkhni\s+thi|shaam\s+5\s+Pakistan\s+time|time\s+6\s+krdo\s+lekin\s+pehle\s+available|meeting\s+book|appointment\s+schedule)\b/i
    ]
  },
  // 44. Appointment reschedule
  {
    intentId: "appointment_reschedule",
    patterns: [
      /\b(?:kal\s+subah\s+shift\s+kr\s+sakte|aglay\s+Monday\s+pe\s+shift|booking\s+shift\s+kro|late\s+wali\s+move\s+krdo|appointment\s+move\s+bhi\s+krni|appointment\s+reschedule|meeting\s+ka\s+time\s+change)\b/i
    ]
  },
  // 45. Appointment cancel
  {
    intentId: "appointment_cancel",
    patterns: [
      /\b(?:consultation\s+slot\s+lia\s+tha\s+ab\s+cancel|booking\s+khatam\s+kr\s+dein|consultation\s+wali\s+booking\s+hatao|appointment\s+cancel\s+krdo\.\.\.\s+nai\s+sorry\s+Monday\s+wali|pehli\s+wali\s+hata\s+dena\s+order\s+rakhna|khud\s+cancel\s+hogai\s+to\s+dobara\s+mat|appointment\s+cancel|meeting\s+drop)\b/i
    ]
  },
  // 46. Business hours
  {
    intentId: "business_hours",
    patterns: [
      /\b(?:dukaan\s+khuli\s+milegi|counter\s+band\s+hota\s+hai|jumay\s+ki\s+namaz\s+k\s+baad\s+dukaan\s+khulli|shop\s+ki\s+timing\s+poochi|store\s+walk\s+in\s+open|store\s+kab\s+band\s+hota\s+aj|business\s+hours|shop\s+kab\s+khulti|closing\s+time)\b/i
    ]
  },
  // 47. Business location
  {
    intentId: "business_location",
    patterns: [
      /\b(?:Google\s+Maps\s+pin\s+bhej|Lahore\s+me\s+kis\s+taraf\s+hai\s+apka\s+daftar|location\s+sirf\s+office\s+ki|office\s+ka\s+pin\s+bhi\s+chahiye|shop\s+kahan\s+hai|office\s+address|location\s+pin)\b/i
    ]
  },
  // 48. Human handoff
  {
    intentId: "human_handoff",
    patterns: [
      /\b(?:staff\s+ko\s+laga\s+dein|representative\s+se\s+phone\s+par\s+baat|call\s+karwa\s+skty\s+staff|agent\s+ko\s+do\s+plz|manager\s+se\s+baat|banda\s+connect\s+kro|bande\s+ka\s+number\s+b,\s+call|supervisor\s+ko\s+lagao|manager\s+hi\s+se\s+baat|banda\s+contact\s+krwa\s+do|talk\s+to\s+human|customer\s+support\s+agent)\b/i
    ]
  },
  // 49. Complaint
  {
    intentId: "complaint",
    patterns: [
      /\b(?:shikayat\s+register\s+krni|Formal\s+complaint\s+likh\s+lo|sath\s+complaint\s+bhi\s+lodge|boht\s+kamaal\s+service\s+h,\s+6\s+din|formal\s+shikayat\s+dono|badtameezi\s+kr\s+gya|wah\s+ji\s+service\s+ho\s+to\s+aisi,\s+har\s+msg\s+pe\s+silence|complaint\s+lodge)\b/i
    ]
  },
  // 50. Technical support
  {
    intentId: "technical_support",
    patterns: [
      /\b(?:Sign\s+in\s+krte\s+waqt\s+bar\s+bar\s+error|Reset\s+wala\s+SMS|website\s+shehr\s+reject\s+krti|otp\s+atta\s+nai|password\s+yaad\s+hy\s+phir\s+bhi\s+logn\s+failed|blank\s+white\s+screen|app\s+crash|technical\s+issue)\b/i
    ]
  }
];
class jt {
  constructor(e = 0.28, a = 0.46, s = []) {
    this.highThreshold = e, this.mediumThreshold = a, this.intentEngine = Lt(
      [
        ...zt,
        ...Wt.map((i) => ({ intentId: i.intentId, phrase: i.phrase })),
        ...s
      ],
      e,
      a
    );
  }
  classify(e, a) {
    const s = e.normalized, i = e.raw.toLowerCase().trim(), n = /^(?:assalam\s*o\s*alaikum|asalam\s*o\s*alaikum|asslamualikum|aslamu\s*alaekm|salam\s+walekum|assalamualaikum|salam\s+bhai|salam\s+ji|hello\s+ji|aoa|slaamz|hello|hi|hii|hiii|helo|hey|hy|salam|salaam|good\s+morning|good\s+evening|good\s+afternoon)[,\s!.]+/i;
    let r = !1, h = s, o = i;
    if (n.test(i)) {
      const d = i.replace(n, "").trim();
      d.length > 0 && /[a-z0-9]/i.test(d) && (r = !0, o = d, h = s.replace(n, "").trim());
    }
    if (/^(?:assalam\s*o\s*alaikum|asalam\s*o\s*alaikum|asslamualikum|aslamu\s*alaekm|salam\s+walekum|assalamualaikum|salam\s+bhai|salam\s+ji|hello\s+ji|aoa|slaamz|hello|hi|hii|hiii|helo|hey|hy|salam|salaam|good\s+morning|good\s+evening|good\s+afternoon)[,!?.\s👋]*$/i.test(i))
      return {
        intentId: "greeting",
        granularIntentId: "greeting",
        allIntents: ["greeting"],
        confidence: "high",
        fuseScore: 0,
        isExact: !0,
        hasGreeting: !0
      };
    const c = D.find((d) => d.intentId === "out_of_scope");
    for (const d of c.patterns)
      if (d.test(i))
        return {
          intentId: "unknown",
          granularIntentId: "out_of_scope",
          allIntents: ["out_of_scope"],
          confidence: "high",
          fuseScore: 0,
          isExact: !0,
          hasGreeting: r
        };
    const u = D.find((d) => d.intentId === "clarification_needed");
    for (const d of u.patterns)
      if (d.test(i))
        return {
          intentId: "unknown",
          granularIntentId: "clarification_needed",
          allIntents: ["clarification_needed"],
          confidence: "high",
          fuseScore: 0,
          isExact: !0,
          hasGreeting: r
        };
    const k = D.find((d) => d.intentId === "affirmation");
    for (const d of k.patterns)
      if (d.test(i))
        return {
          intentId: "unknown",
          granularIntentId: "affirmation",
          allIntents: ["affirmation"],
          confidence: "high",
          fuseScore: 0,
          isExact: !0,
          hasGreeting: r
        };
    const m = D.find((d) => d.intentId === "negation");
    for (const d of m.patterns)
      if (d.test(i))
        return {
          intentId: "unknown",
          granularIntentId: "negation",
          allIntents: ["negation"],
          confidence: "high",
          fuseScore: 0,
          isExact: !0,
          hasGreeting: r
        };
    const l = /* @__PURE__ */ new Set();
    for (const d of D)
      if (!(d.intentId === "out_of_scope" || d.intentId === "clarification_needed" || d.intentId === "affirmation" || d.intentId === "negation") && !(d.intentId === "return_policy" && /\b(?:return\s+policy\s+ki\s+nahi|return\s+nai\b|na\s+return\b)\b/i.test(i)) && !(d.intentId === "refund_status" && /\b(?:na\s+refund|refund\s+nai|refund\s+nahi\s+mang)\b/i.test(i)) && !(d.intentId === "order_place" && /\b(?:abhi\s+lena\s+nai|buy\s+abhi\s+nai|abhi\s+purchase\s+nai|order\s+mat\s+lagana)\b/i.test(i)) && !(d.intentId === "product_authenticity" && /\b(?:authenticity\s+nai\s+poochi)\b/i.test(i)) && !(d.intentId === "complaint" && /\b(?:complaint\s+nahi\s+likhwani)\b/i.test(i)) && !((d.intentId === "delivery_eta" || d.intentId === "delivery_fee") && /\b(?:courier\s+ki\s+nahi)\b/i.test(i)) && !(d.intentId === "order_change" && /\b(?:delivery\s+address\s+nai\s+change)\b/i.test(i)) && !(d.intentId === "service_quote" && /\b(?:service\s+ka\s+rate\s+nai\s+chahye)\b/i.test(i)) && !(d.intentId === "cash_on_delivery" && /\b(?:cod\s+nhi\s+chahye)\b/i.test(i)) && !(d.intentId === "appointment_book" && /\b(?:appointment\s+nai\s+chahye)\b/i.test(i)) && !(d.intentId === "order_cancel" && /\b(?:ordr\s+cncl\s+nai\s+krwana|order\s+cancel\s+nahi\s+krna)\b/i.test(i)) && !(d.intentId === "appointment_cancel" && /\b(?:appointment\s+cancel\s+nahi\s+karni)\b/i.test(i)) && !(d.intentId === "technical_support" && /\b(?:login\s+error\s+wala\s+issue\s+nai)\b/i.test(i)) && !(d.intentId === "product_availability" && /\b(?:cash\s+on\s+delivery|cod|installment|delivery\s+par\s+cash)\b/i.test(i) && !/\b(?:stock|in\s+stock|piece|variant|item|ghari|shirt|model)\b/i.test(i))) {
        for (const v of d.patterns)
          if (v.test(o) || v.test(i) || v.test(s)) {
            l.add(d.intentId);
            break;
          }
      }
    if (l.has("thanks") && l.has("invoice_request") && l.delete("thanks"), l.has("cash_on_delivery") && l.has("product_availability") && !/\b(?:stock|in\s+stock|piece|variant|item|ghari|shirt|model)\b/i.test(i) && l.delete("product_availability"), l.size === 0 && a && /\b(?:dono\s+check\s+krdo)\b/i.test(i) && l.add("payment_issue"), l.size > 0) {
      const d = Array.from(l), v = d[0];
      let w = j[v] ?? "unknown";
      return v === "wellbeing" && /\b(?:ma\s+b\s+theek|main\s+bhi\s+theek|me\s+bhi\s+theek|mai\s+theek|me\s+theek|hum\s+bhi\s+theek|alhamdulillah\s+theek|alhamdulillah\s+sab\s+theek|i\s*am\s+fine|i\s*am\s+good|im\s+fine|im\s+good|doing\s+well|fit\s+hoon|sab\s+theek\s+hai|sab\s+set\s+hai|theek\s+thak\s+hoon|theek\s+hno)\b/i.test(i) && (w = "conversational_ack"), v === "service_catalog" && /\b(?:tum|aap|ap)\s+(?:kya\s+kya|kia\s+kia|meri|merin|kya|kia)?\s*(?:help|madad|guide|assist|kar\s+sakhte|kar\s+sakty|kr\s+sakhty|kr\s+sakte)\b/i.test(i) && (w = "capabilities_help"), {
        intentId: w,
        granularIntentId: v,
        allIntents: d,
        confidence: "high",
        fuseScore: 0,
        isExact: !0,
        hasGreeting: r
      };
    }
    const g = this.applyRules(h, o);
    if (g) {
      const d = V[g.intentId] ?? "clarification_needed";
      return {
        ...g,
        granularIntentId: d,
        allIntents: [d],
        hasGreeting: r || g.hasGreeting
      };
    }
    const y = this.intentEngine.searchBest(h || s);
    if (y) {
      const d = y.item.intentId;
      let v, w;
      return d in j ? (w = d, v = j[w] ?? "unknown") : (v = d, w = V[v] ?? "clarification_needed"), {
        intentId: v,
        granularIntentId: w,
        allIntents: [w],
        confidence: y.confidence,
        fuseScore: y.score,
        matchedPhrase: y.item.phrase,
        isExact: !1,
        hasGreeting: r
      };
    }
    const b = this.intentEngine.searchBest(o || i);
    if (b && b.confidence !== "low") {
      const d = b.item.intentId;
      let v, w;
      return d in j ? (w = d, v = j[w] ?? "unknown") : (v = d, w = V[v] ?? "clarification_needed"), {
        intentId: v,
        granularIntentId: w,
        allIntents: [w],
        confidence: b.confidence,
        fuseScore: b.score,
        matchedPhrase: b.item.phrase,
        isExact: !1,
        hasGreeting: r
      };
    }
    return /^(?:hello|hi|hii|hiii|helo|hey|hy|salam|salaam|assalam|assalamualaikum|aoa|good\s+morning|good\s+evening|good\s+afternoon)[,\s!.]*$/i.test(i) ? {
      intentId: "greeting",
      granularIntentId: "greeting",
      allIntents: ["greeting"],
      confidence: "high",
      fuseScore: 0,
      isExact: !0,
      hasGreeting: !0
    } : {
      intentId: "unknown",
      granularIntentId: "clarification_needed",
      allIntents: ["clarification_needed"],
      confidence: "none",
      fuseScore: 1,
      isExact: !1,
      hasGreeting: r
    };
  }
  applyRules(e, a) {
    const s = e.toLowerCase(), i = a.toLowerCase(), n = [];
    for (const r of _e)
      if (r.phrases)
        for (const h of r.phrases)
          n.push({ phrase: h, intentId: r.intentId });
    n.sort((r, h) => h.phrase.length - r.phrase.length);
    for (const r of n) {
      if (r.intentId === "human_handoff" && (/\b(?:phone|number|email|address|location|kahan|kidhar)\b/i.test(s) || /\b(?:phone|number|email|address|location|kahan|kidhar)\b/i.test(i)))
        continue;
      const h = new RegExp(`\\b${Ie(r.phrase)}\\b`, "i");
      if (h.test(s) || h.test(i))
        return {
          intentId: r.intentId,
          confidence: "high",
          fuseScore: 0,
          matchedPhrase: r.phrase,
          isExact: !0
        };
    }
    for (const r of _e)
      for (const h of r.keywords) {
        if (r.intentId === "return_exchange" && h === "return" && (/\b(?:tax|income tax|fbr)\s+return\b/i.test(s) || /\b(?:tax|income tax|fbr)\s+return\b/i.test(i)) || r.intentId === "shipping_delivery" && (/\b(?:secp|incorporation|trademark|ipo)\b/i.test(s) || /\b(?:secp|incorporation|trademark|ipo)\b/i.test(i)) || r.intentId === "human_handoff" && (/\b(?:phone|number|email|address|location|kahan|kidhar)\b/i.test(s) || /\b(?:phone|number|email|address|location|kahan|kidhar)\b/i.test(i)) || r.intentId === "product_price" && (h === "kitne" || h === "kitna" || h === "kitnay" || h === "kitni" || h === "kitni hai") && (/\bkitn[aeayi]\s+(?:din|time|waqt|ghant[ae]|hours?|days?|weeks?|haft[ae]|mahine|months?)\b/i.test(s) || /\bkitn[aeayi]\s+(?:din|time|waqt|ghant[ae]|hours?|days?|weeks?|haft[ae]|mahine|months?)\b/i.test(i)))
          continue;
        const o = new RegExp(`\\b${Ie(h)}\\b`, "i");
        if (o.test(s) || o.test(i))
          return {
            intentId: r.intentId,
            confidence: "high",
            fuseScore: 0,
            matchedPhrase: h,
            isExact: !0
          };
      }
    return null;
  }
}
function Ie(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const je = [
  "black",
  "white",
  "red",
  "blue",
  "green",
  "yellow",
  "gold",
  "silver",
  "gray",
  "grey",
  "pink",
  "purple",
  "brown",
  "orange",
  "navy",
  "beige",
  "cream",
  "maroon",
  "khaki",
  "rose",
  "copper",
  "platinum",
  "bronze",
  "rose gold",
  "space gray",
  "midnight",
  "starlight"
], Dt = [
  "xs",
  "xsmall",
  "x-small",
  "small",
  "medium",
  "large",
  "xl",
  "xxl",
  "xxxl",
  "2xl",
  "3xl",
  "4xl",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44"
], Mt = [
  { pattern: /\bwatch(?:es)?\b/i, category: "watch" },
  { pattern: /\bshirt(?:s)?\b/i, category: "shirt" },
  { pattern: /\bpant(?:s)?\b|\btrousers?\b|\bchino(?:s)?\b/i, category: "pants" },
  { pattern: /\bdress(?:es)?\b/i, category: "dress" },
  { pattern: /\bshoe(?:s)?\b|\bsneaker(?:s)?\b/i, category: "shoes" },
  { pattern: /\bjacket(?:s)?\b|\bcoat(?:s)?\b|\bblazer(?:s)?\b/i, category: "jacket" },
  { pattern: /\btunic(?:s)?\b/i, category: "shirt" },
  { pattern: /\bbelt(?:s)?\b/i, category: "accessory" },
  { pattern: /\bjewel(?:ry|lery|lry)\b|\bnecklace\b|\bring(?:s)?\b/i, category: "jewelry" },
  { pattern: /\bbag(?:s)?\b|\bhandbag\b|\bpurse\b/i, category: "bag" },
  { pattern: /\b(?:smart)?phone(?:s)?\b(?!\s*number)/i, category: "phone" },
  { pattern: /\blaptop(?:s)?\b|\bcomputer\b/i, category: "laptop" },
  { pattern: /\bperfume\b|\battar\b|\bfragrance\b/i, category: "perfume" },
  { pattern: /\bconsultation\b|\bconsulting\b/i, category: "consulting" },
  { pattern: /\bcompany\s+registration\b|\bincorporation\b/i, category: "corporate" },
  { pattern: /\btax\b|\bntn\b|\bincome\s+tax\b/i, category: "tax" },
  { pattern: /\btrademark\b|\bbrand\s+registration\b|\bcopyright\b/i, category: "ip" },
  { pattern: /\bretainer\b|\blegal\s+advisory\b/i, category: "retainer" }
], Bt = [
  /\b(?:rolex|omega|casio|seiko|tissot|citizen|fossil|timex|g-?shock|q&q|q and q)\b/i,
  /\b(?:nike|adidas|puma|reebok|zara|h&m|gucci|louis vuitton|lv|supreme|lacoste)\b/i,
  /\b(?:samsung|apple|iphone|huawei|xiaomi|oppo|vivo|oneplus|realme)\b/i
], Ot = [
  /\b(?:leather|rubber|silicone|steel|titanium|ceramic|canvas|denim|cotton|linen|polyester|nylon|wool|suede|velvet)\b/i,
  /\b(?:analog|digital|automatic|quartz|mechanical|chronograph|solar|smart|hybrid)\b/i,
  /\b(?:waterproof|water.?resistant|dustproof|anti-?shock|scratch.?resistant)\b/i,
  /\b(?:dial|strap|band|case|bezel|crystal|sapphire|mineral)\b/i,
  /\b(?:slim|thick|heavy|light|slim-?fit|regular-?fit|oversized|fitted)\b/i
];
function X(t) {
  const e = O(t, { enableRomanUrdu: !0 }), { normalized: a, skus: s, prices: i } = e, n = a.toLowerCase(), { minPrice: r, maxPrice: h } = qe(a, i), o = [];
  for (const b of je) {
    const d = new RegExp(`\\b${ve(b)}\\b`, "i");
    (d.test(n) || d.test(t.toLowerCase())) && o.push(b);
  }
  const c = [];
  for (const b of Dt)
    new RegExp(`\\b${ve(b)}\\b`, "i").test(n) && c.push(b);
  let u;
  for (const { pattern: b, category: d } of Mt)
    if (b.test(t) || b.test(n)) {
      u = d;
      break;
    }
  let k;
  for (const b of Bt) {
    const d = t.match(b) ?? n.match(b);
    if (d) {
      k = d[0].toLowerCase();
      break;
    }
  }
  const m = [];
  for (const b of Ot) {
    const d = n.match(b);
    d && m.push(d[0].toLowerCase());
  }
  const l = new Set([
    "show",
    "find",
    "get",
    "want",
    "need",
    "looking",
    "search",
    "buy",
    "purchase",
    "available",
    "stock",
    "price",
    "cost",
    "how",
    "much",
    "how much",
    "under",
    "over",
    "between",
    "and",
    "for",
    "the",
    "with",
    "about",
    "tell",
    "give",
    "from",
    "rate",
    "fees",
    "most",
    "your",
    "all",
    "any",
    "some",
    "please",
    "can",
    "you",
    "are",
    "is",
    "it",
    "this",
    "dikhao",
    "chahiye",
    "milega",
    "batao",
    "hain",
    "mein",
    "kya",
    "hai",
    "ki",
    "ka",
    "ke",
    "sale",
    "sales",
    "discount",
    "discounts",
    "deal",
    "deals",
    "chal",
    "raha",
    "rahi",
    "rahe",
    "hot",
    "kitne",
    "kitna",
    "kitnay",
    "kitni",
    "kon",
    "konsa",
    "konsi",
    "konse",
    "koun",
    "kounsa",
    "kounsi",
    "sa",
    "si",
    "se",
    "bhi",
    "par",
    "pe",
    "aur",
    "or",
    "ya",
    "wala",
    "wali",
    "wale",
    "single",
    "multiple",
    "color",
    "colors",
    "colour",
    "colours",
    "rang",
    "watch",
    "watches",
    "shirt",
    "shirts",
    "pant",
    "pants",
    "dress",
    "dresses",
    "product",
    "products",
    "item",
    "items",
    "service",
    "services",
    "strap",
    "straps",
    u ?? "",
    ...k ? [k] : [],
    ...o,
    ...c,
    ...m
  ].filter(Boolean)), g = a.split(/\s+/).filter((b) => b.length >= 3 && !l.has(b.toLowerCase()) && !/^\d+$/.test(b)), y = !!(o.length || c.length || u || k || m.length || r !== void 0 || h !== void 0 || s.length);
  return {
    normalized: a,
    skus: s,
    category: u,
    nameKeywords: g,
    brand: k,
    colors: o,
    sizes: c,
    minPrice: r,
    maxPrice: h,
    prices: i,
    attributes: m,
    hasConstraints: y
  };
}
function ve(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Z(t, e) {
  const a = [];
  let s = [...t];
  if (e.skus.length > 0)
    return a.push(`SKU: ${e.skus.join(", ")}`), s = s.filter(
      (i) => e.skus.some((n) => i.sku.toUpperCase() === n.toUpperCase())
    ), {
      products: s,
      appliedFilters: a,
      hasResults: s.length > 0
    };
  if (e.category && (a.push(`category: ${e.category}`), s = s.filter(
    (i) => i.category.toLowerCase().includes(e.category) || e.category.includes(i.category.toLowerCase())
  )), e.brand && (a.push(`brand: ${e.brand}`), s = s.filter(
    (i) => {
      var n;
      return ((n = i.brand) == null ? void 0 : n.toLowerCase().includes(e.brand)) || !1;
    }
  )), e.colors.length > 0 && (a.push(`colors: ${e.colors.join(", ")}`), s = s.filter((i) => {
    const n = (i.colors ?? []).map((r) => r.toLowerCase());
    return e.colors.some(
      (r) => n.some((h) => h.includes(r) || r.includes(h))
    );
  })), e.sizes.length > 0 && (a.push(`sizes: ${e.sizes.join(", ")}`), s = s.filter((i) => {
    const n = (i.sizes ?? []).map((r) => r.toLowerCase());
    return e.sizes.some((r) => n.includes(r.toLowerCase()));
  })), e.maxPrice !== void 0 && (a.push(`max price: ${e.maxPrice}`), s = s.filter(
    (i) => i.price !== void 0 && i.price <= e.maxPrice
  )), e.minPrice !== void 0 && (a.push(`min price: ${e.minPrice}`), s = s.filter(
    (i) => i.price !== void 0 && i.price >= e.minPrice
  )), e.attributes.length > 0) {
    a.push(`attributes: ${e.attributes.join(", ")}`);
    const i = s.filter((n) => {
      const r = Object.values(n.attributes ?? {}).map((o) => String(o).toLowerCase()), h = (n.description ?? "").toLowerCase();
      return e.attributes.some(
        (o) => r.some((c) => c.includes(o)) || h.includes(o)
      );
    });
    i.length > 0 && (s = i);
  }
  if (e.nameKeywords.length > 0 && e.minPrice === void 0 && e.maxPrice === void 0) {
    const i = s.filter((n) => {
      const r = n.name.toLowerCase(), h = (n.description ?? "").toLowerCase();
      return e.nameKeywords.some((o) => r.includes(o.toLowerCase()) || h.includes(o.toLowerCase()));
    });
    i.length > 0 && (a.push(`keywords: ${e.nameKeywords.join(", ")}`), s = i);
  }
  return /\b(?:affordable|cheapest|cheap|sasta|sastay|lowest\s+price|budget)\b/i.test(e.normalized) ? s.sort((i, n) => (i.price ?? 0) - (n.price ?? 0)) : /\b(?:expensive|mehnga|mehngi|premium|luxury|highest\s+price)\b/i.test(e.normalized) && s.sort((i, n) => (n.price ?? 0) - (i.price ?? 0)), {
    products: s,
    appliedFilters: a,
    hasResults: s.length > 0
  };
}
function J(t) {
  const e = [`**${t.name}**`];
  if (t.brand && e.push(`Brand: ${t.brand}`), t.price !== void 0) {
    const a = t.currency ?? "PKR";
    e.push(`Price: ${a} ${t.price.toLocaleString()}`);
  }
  if (t.inStock === !0 ? e.push("✅ In Stock") : t.inStock === !1 ? e.push("❌ Out of Stock") : e.push("ℹ️ Availability: Contact us for stock info"), t.colors && t.colors.length > 0 && e.push(`Colors: ${t.colors.join(", ")}`), t.sizes && t.sizes.length > 0 && e.push(`Sizes: ${t.sizes.join(", ")}`), t.attributes && Object.keys(t.attributes).length > 0) {
    const a = Object.entries(t.attributes).map(([s, i]) => `• ${s.replace(/([A-Z])/g, " $1").replace(/^./, (n) => n.toUpperCase())}: ${i}`).join(`
`);
    e.push(`Specifications:
${a}`);
  }
  return e.push(`SKU: ${t.sku}`), e.join(`
`);
}
function Ae(t, e = 5) {
  const s = t.slice(0, e).map((i, n) => {
    const r = i.inStock === !0 ? "✅" : i.inStock === !1 ? "❌" : "ℹ️", h = i.price !== void 0 ? ` — ${i.currency ?? "PKR"} ${i.price.toLocaleString()}` : "";
    return `${n + 1}. ${r} **${i.name}**${h} (SKU: ${i.sku})`;
  });
  return t.length > e && s.push(`_...and ${t.length - e} more. Refine your search to narrow results._`), s.join(`
`);
}
const Ce = {
  unknown: [
    `I'm sorry, I couldn't understand your question. Please check the spelling or try rephrasing with simpler keywords.

Main aapka sawaal samajh nahi saka. Baraye meherbani asaan alfaz mein dobara poochein ya spelling check karein.`,
    `I apologize, I didn't catch that. Please rephrase your question, or feel free to contact our team directly.

Maazrat chahta hoon, main samajh nahi saka. Baraye meherbani apna sawaal asaan alfaz mein dobara likhein.`
  ],
  ambiguous: [
    "I found some partial information, but I want to make sure I give you the right answer. Could you provide more details?",
    "Main aapki baat samajhne ki koshish kar raha hoon. Kuch aur detail de sakte hain?",
    "I'm not 100% sure I understood. Are you asking about our products, prices, or something else?"
  ],
  noProductsFound: [
    "I couldn't find any products matching your criteria. No products found with those filters. Please try different keywords, or contact us for personalized help.",
    "Aap ki search se koi matching product nahi mila (couldn't find products). No products found with these filters. Alag keywords try karein ya hamare team se contact us karein.",
    "No products found matching those filters. I couldn't find any items meeting your request. Try adjusting your search, or contact us for assistance."
  ],
  missingStockInfo: [
    "I don't have real-time stock information for this item. Please contact us directly to confirm availability.",
    "Is product ki stock ki updated information mere paas nahi hai. Availability ke liye hamare team se rabta karein."
  ],
  missingPriceInfo: [
    "The price for this item isn't listed in my information. Please contact us for the latest pricing.",
    "Is product ki price mujhe nahi pata. Pricing ke liye directly hamare team se poochein."
  ],
  handoffPrompt: [
    "Would you like to speak with one of our team members? Use the button below to connect via WhatsApp.",
    "Kya aap hamare team se directly baat karna chahte hain? Neeche WhatsApp button use karein."
  ]
};
function Se(t) {
  return t[Math.floor(Math.random() * t.length)] ?? t[0];
}
const qt = [
  "fuck",
  "f**k",
  "fuk",
  "bitch",
  "bastard",
  "asshole",
  "idiot",
  "stupid",
  "kameena",
  "kutta",
  "harami",
  "chutiya",
  "ganda",
  "lanat",
  "jahil"
], Nt = [
  "love you",
  "love u",
  "love uh",
  "i love you",
  "marry me",
  "date me",
  "kiss me",
  "kiss you",
  "my love",
  "meri jaan",
  "janu",
  "sexy",
  "hot",
  "crush"
], Ut = [
  "what the hell",
  "what the f",
  "wtf",
  "wth",
  "nonsense",
  "rubbish",
  "ridiculous",
  "broken",
  "bug",
  "glitch",
  "not working",
  "stupid bot",
  "kharab hai",
  "masla hai",
  "masla hy",
  "error",
  "bakwas"
], Gt = [
  "baby",
  "babu",
  "dear",
  "yaar",
  "yar",
  "bro",
  "bhai",
  "janab",
  "sir",
  "boss"
];
function Ee(t) {
  const e = t.toLowerCase();
  return qt.some((a) => {
    const s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${s}\\b`, "i").test(e);
  });
}
function Ht(t) {
  const e = t.toLowerCase();
  return Nt.some((a) => {
    const s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${s}\\b`, "i").test(e);
  });
}
function xe(t) {
  const e = t.toLowerCase();
  return Ut.some((a) => {
    const s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${s}\\b`, "i").test(e);
  });
}
function Qt(t) {
  let e = t;
  for (const a of Gt) {
    const s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp(`\\b${s}h*\\b`, "gi"), " ");
  }
  return e.replace(/\s+/g, " ").trim();
}
const Kt = { GREETING: { en: "Hello! 👋 Welcome to {business_name}. How can I help you today?", roman_ur: "Hello! 👋 {business_name} mein khush aamdeed. Main aap ki kya madad kar sakta hoon?" }, GREETING_SALAAM: { en: "Walaikum assalam! 👋 Welcome to {business_name}. How can I help you today?", roman_ur: "Walaikum assalam! 👋 {business_name} mein khush aamdeed. Main aap ki kya madad kar sakta hoon?" }, WELLBEING: { en: "I'm doing well, thank you for asking! 😊 I'm here to help you with {business_summary}.", roman_ur: "Main theek hoon, shukriya! 😊 Main aap ki {business_summary} ke bare mein madad kar sakta hoon." }, IDENTITY: { en: "I'm the virtual assistant of {business_name}. I can share information about {business_summary}.", roman_ur: "Main {business_name} ka virtual assistant hoon. Main {business_summary} ke bare mein maloomat de sakta hoon." }, CAPABILITIES: { en: "I can help you with {business_summary}. I don't have information beyond that. For anything more, you can reach our owner on WhatsApp below.", roman_ur: "Main {business_summary} ke bare mein madad kar sakta hoon. Is ke ilawa mere paas maloomat nahi. Mazeed maloomat ke liye neeche WhatsApp par owner se rabta karein." }, SCOPE_LIMITS: { en: "I only answer from {business_name}'s verified information, and I won't guess. If I don't have it, you can ask our owner directly on WhatsApp below.", roman_ur: "Main sirf {business_name} ki tasdeeq shuda maloomat se jawab deta hoon, andaza nahi lagata. Agar mere paas na ho to neeche WhatsApp par owner se pooch lein." }, BOT_NATURE: { en: "I'm a virtual assistant, not a human. I answer using {business_name}'s information. For anything more, our owner can help on WhatsApp below.", roman_ur: "Main ek virtual assistant hoon, insaan nahi. Main {business_name} ki maloomat se jawab deta hoon. Mazeed madad ke liye neeche WhatsApp par owner se baat karein." }, OWNER_CONTACT: { en: "Of course! Our team will be happy to help. Please use the WhatsApp button below to reach the owner.", roman_ur: "Zaroor! Hamari team aap ki madad karegi. Owner se rabta karne ke liye neeche WhatsApp button istemal karein." }, THANKS: { en: "You're welcome! 😊 Is there anything else you'd like to know about {business_name}?", roman_ur: "Khush aamdeed! 😊 Kya {business_name} ke bare mein aur kuch janna chahte hain?" }, BYE: { en: "Goodbye! Thank you for visiting {business_name}. 👋", roman_ur: "Allah hafiz! {business_name} aane ka shukriya. 👋" }, ACK: { en: "Okay 👍 Let me know if you'd like to know anything about {business_name}.", roman_ur: "Theek hai 👍 {business_name} ke bare mein kuch poochna ho to bata dein." }, COMPLIMENT: { en: "Thank you, that's kind of you! 😊 How else can I help with {business_name}?", roman_ur: "Shukriya, aap ki meherbani! 😊 {business_name} ke bare mein aur kya madad kar sakta hoon?" }, FRUSTRATION: { en: "Sorry about that. I may not have understood you. Please rephrase, or talk to our team on WhatsApp below.", roman_ur: "Maazrat, shayad main samajh nahi saka. Barah-e-meherbani dobara likhein, ya neeche WhatsApp par hamari team se baat karein." }, ABUSE_BOUNDARY: { en: "Please keep the conversation respectful. I'm happy to help with {business_name}'s information, or you can contact our team on WhatsApp below.", roman_ur: "Barah-e-meherbani adab se baat karein. Main {business_name} ki maloomat mein madad ke liye hazir hoon, ya neeche WhatsApp par hamari team se rabta karein." }, PLAYFUL_BOUNDARY: { en: "I'm a virtual assistant, so let's keep things professional 🙂 I can help with {business_summary}.", roman_ur: "Main ek virtual assistant hoon, is liye baat professional rakhte hain 🙂 Main {business_summary} mein madad kar sakta hoon." }, PLAYFUL_LIGHT: { en: "Ha, I'm just a virtual assistant, so I don't have a personal life 🙂 I can help with {business_summary}.", roman_ur: "Main sirf ek virtual assistant hoon, meri koi zaati zindagi nahi 🙂 Main {business_summary} mein madad kar sakta hoon." }, OFFTOPIC: { en: "That's outside what I can help with. I only have information about {business_name}. For anything more, contact our owner on WhatsApp below.", roman_ur: "Ye meri madad se bahar hai. Mere paas sirf {business_name} ki maloomat hai. Mazeed ke liye neeche WhatsApp par owner se rabta karein." }, UNCLEAR: { en: "Sorry, I didn't understand. Please rephrase or check the spelling, or message our team on WhatsApp below.", roman_ur: "Maazrat, mujhe samajh nahi aaya. Barah-e-meherbani dobara likhein ya spelling check karein, ya neeche WhatsApp par hamari team se baat karein." } }, Yt = {
  behaviors: Kt
}, E = {
  GREETING_SALAAM: [
    "assalam",
    "asalam",
    "salam",
    "salaam",
    "slam",
    "slm",
    "assalamu",
    "assalamualaikum",
    "assalamualaykum"
  ],
  GREETING: [
    "hi",
    "hello",
    "helo",
    "hey",
    "hy",
    "yo",
    "good morning",
    "good evening",
    "good afternoon",
    "adaab",
    "adab",
    "greetings"
  ],
  WELLBEING: [
    "how are",
    "how r",
    "how is it",
    "hows it",
    "how's it",
    "whats up",
    "what's up",
    "how do you",
    "you ok",
    "u ok",
    "kese ho",
    "kaisy ho",
    "kaise ho",
    "kya haal",
    "kia hal",
    "haal hai",
    "hal hai",
    "sab theek",
    "chal raha",
    "kia chal",
    "kya chal",
    "khairiyat",
    "tabiat",
    "all good",
    "doing well"
  ],
  IDENTITY: [
    "who are",
    "who is",
    "your name",
    "who am i talking",
    "who am i chatting",
    "who am i speaking",
    "about yourself",
    "who r u",
    "tum kon",
    "kaun ho",
    "kon ho",
    "aap kaun",
    "ye kon",
    "taruf",
    "taaruf",
    "kiska bot",
    "kiska",
    "kiske liye",
    "kis ke liye",
    "naam kya",
    "kya naam",
    "tera naam",
    "aapka naam",
    "introduce"
  ],
  CAPABILITIES: [
    "what do you",
    "what can you do",
    "what are you doing",
    "your job",
    "how does this chat",
    "what can i ask",
    "how can you help",
    "how can you assist",
    "capabilities",
    "capability",
    "kia kaam",
    "kya kaam",
    "kya kar sakte",
    "kia kar sakte",
    "kia kar sakty",
    "kya kar sakti",
    "madad kar sakte",
    "services dete",
    "chat kaise kaam",
    "kis cheez mein",
    "bata sakte"
  ],
  SCOPE_LIMITS: [
    "answer anything",
    "know everything",
    "anything else",
    "dont know",
    "don't know",
    "all questions",
    "know all",
    "sab pata",
    "har sawal",
    "har sawaal",
    "sab jante",
    "sab maloom",
    "kuch bhi pooch",
    "pata nahi"
  ],
  BOT_NATURE: [
    "robot",
    "human",
    "an ai",
    "is an ai",
    "are an ai",
    "bot",
    "chatgpt",
    "who created you",
    "made you",
    "are you real",
    "insaan ho",
    "ye ai",
    "kisne banaya",
    "kis ne banaya",
    "asli insaan"
  ],
  OWNER_CONTACT: [
    "human agent",
    "human representative",
    "real person",
    "contact owner",
    "reach owner",
    "speak to the owner",
    "talk to the owner",
    "speak to a human",
    "talk to a human",
    "about the owner",
    "the owner",
    "phone number",
    "call me",
    "call us",
    "call",
    "someone call me",
    "owner se baat",
    "owner se rabta",
    "insaan se baat",
    "malik kon",
    "malik se",
    "whatsapp number",
    "call karwao",
    "call karo",
    "connect me to"
  ],
  THANKS: [
    "thanks",
    "thank you",
    "thank u",
    "thx",
    "ty",
    "shukriya",
    "shukria",
    "jazakallah",
    "jazak allah",
    "meherbani"
  ],
  BYE: [
    "bye",
    "goodbye",
    "good bye",
    "good night",
    "see you",
    "cya",
    "allah hafiz",
    "khuda hafiz",
    "alwida",
    "take care"
  ],
  ACK: [
    "ok",
    "okay",
    "got it",
    "acha ok",
    "achha ok",
    "theek hai",
    "sahi hai",
    "samajh gaya",
    "samajh gayi",
    "alright"
  ],
  COMPLIMENT: [
    "great",
    "good bot",
    "awesome bot",
    "well done",
    "smart bot",
    "nice bot",
    "you are smart",
    "so great",
    "bohat acha bot",
    "bohat smart",
    "wah tum",
    "zabardast"
  ],
  FRUSTRATION: [
    "not helping",
    "useless",
    "what the hell",
    "waste of time",
    "nonsense",
    "bakwas",
    "samajhte hi nahi",
    "samajh nahi",
    "bekar",
    "fazool",
    "not working",
    "broken"
  ],
  ABUSE_BOUNDARY: [
    "stupid",
    "shut up",
    "chup kar",
    "bewaqoof",
    "bewakoof",
    "idiot",
    "dumb",
    "fuck",
    "bitch",
    "bastard",
    "asshole",
    "kutta",
    "harami",
    "kameena",
    "jahil",
    "ganda",
    "lanat"
  ],
  PLAYFUL_BOUNDARY: [
    "love you",
    "love u",
    "love uh",
    "marry me",
    "shaadi",
    "shadi",
    "girlfriend",
    "boyfriend",
    "date",
    "go on a date",
    "date par",
    "kiss",
    "sexy",
    "meri jaan",
    "number do"
  ],
  PLAYFUL_LIGHT: [
    "joke",
    "latifa",
    "latifah",
    "favourite colour",
    "favorite color",
    "favourite color",
    "favorite colour",
    "favourite rang",
    "favorite rang",
    "fav color",
    "eat",
    "khana",
    "food",
    "live",
    "rehte",
    "kidhar rehte",
    "kahan rehte",
    "sing",
    "gaana",
    "gana",
    "happy",
    "khush",
    "friend",
    "friends",
    "dost",
    "meaning of life",
    "zindagi ka matlab",
    "bhook",
    "so jate",
    "sote ho",
    "sleep"
  ],
  OFFTOPIC: [
    "weather",
    "mausam",
    "cricket",
    "match",
    "prime minister",
    "wazir-e-azam",
    "president",
    "what time",
    "waqt kia",
    "waqt kya",
    "nazm",
    "poetry",
    "shayari",
    "poem"
  ]
}, Vt = [
  "baby",
  "babyh",
  "yaar",
  "yar",
  "bro",
  "bhai",
  "jaan",
  "janab",
  "sir",
  "boss"
], Xt = Yt.behaviors;
function Zt(t) {
  let e = t;
  for (const a of Vt) {
    const s = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp(`\\b${s}h*\\b`, "gi"), " ");
  }
  return e.replace(/\s+/g, " ").trim();
}
function Jt(t) {
  const e = t.trim().toLowerCase();
  if (!e || /^[^a-z0-9]+$/i.test(e))
    return "UNCLEAR";
  const a = e.split(/\s+/);
  if (a.length > 0 && a.every((r) => r.length >= 4 && !/[aeiouy]/i.test(r)))
    return "UNCLEAR";
  const i = Zt(e), n = i.length > 0 ? i : e;
  for (const r of E.ABUSE_BOUNDARY)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "ABUSE_BOUNDARY";
  for (const r of E.PLAYFUL_BOUNDARY)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "PLAYFUL_BOUNDARY";
  for (const r of E.FRUSTRATION)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "FRUSTRATION";
  for (const r of E.PLAYFUL_LIGHT)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "PLAYFUL_LIGHT";
  for (const r of E.OFFTOPIC)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "OFFTOPIC";
  for (const r of E.OWNER_CONTACT)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "OWNER_CONTACT";
  for (const r of E.SCOPE_LIMITS)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "SCOPE_LIMITS";
  for (const r of E.IDENTITY)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "IDENTITY";
  for (const r of E.COMPLIMENT)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "COMPLIMENT";
  for (const r of E.BOT_NATURE)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "BOT_NATURE";
  for (const r of E.CAPABILITIES)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "CAPABILITIES";
  for (const r of E.WELLBEING)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "WELLBEING";
  for (const r of E.COMPLIMENT)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n) || r.includes(" ") && n.includes(r))
      return "COMPLIMENT";
  for (const r of E.BYE)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "BYE";
  for (const r of E.THANKS)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "THANKS";
  for (const r of E.ACK)
    if (new RegExp(`^${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i").test(n) || new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "ACK";
  for (const r of E.GREETING_SALAAM)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "GREETING_SALAAM";
  for (const r of E.GREETING)
    if (new RegExp(`\\b${r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(n))
      return "GREETING";
  return null;
}
function ea(t, e) {
  const a = t.length, s = e.length;
  if (a === 0) return s;
  if (s === 0) return a;
  const i = [];
  for (let n = 0; n <= a; n++) i[n] = [n];
  for (let n = 0; n <= s; n++) i[0][n] = n;
  for (let n = 1; n <= a; n++)
    for (let r = 1; r <= s; r++) {
      const h = t[n - 1] === e[r - 1] ? 0 : 1;
      i[n][r] = Math.min(
        i[n - 1][r] + 1,
        i[n][r - 1] + 1,
        i[n - 1][r - 1] + h
      );
    }
  return i[a][s];
}
class Pe {
  constructor(e, a = {}) {
    var s;
    this.session = { lastDisplayedSkus: [] }, this.kb = e, this.config = { ...Me, ...a }, this.classifier = new jt(
      this.config.intentConfidenceThreshold * 0.7,
      this.config.intentConfidenceThreshold,
      ((s = e.intentExamples) == null ? void 0 : s.flatMap(
        (i) => i.phrases.map((n) => ({ intentId: i.intentId, phrase: n }))
      )) ?? []
    ), this.faqEngine = Rt(
      e.faqs,
      this.config.faqConfidenceThreshold,
      this.config.faqAmbiguousThreshold
    );
  }
  /** Reset session memory state */
  resetSession() {
    this.session = { lastDisplayedSkus: [] };
  }
  /** Read current session memory snapshot */
  getSession() {
    return { ...this.session };
  }
  route(e, a = []) {
    var d, v;
    if (Ee(e))
      return this.handleProfanityResponse();
    if (xe(e) && !/\b(?:return|returns|exchange|wapsi|refund|replace|replacement|policy)\b/i.test(e))
      return this.handleFrustrationResponse(e);
    const s = X(e), i = O(e, { enableRomanUrdu: this.config.enableRomanUrdu });
    if (Ht(e) && !(s.skus.length > 0 || s.hasConstraints && !/\b(?:baby|love|jaan)\b/i.test(s.normalized)) && !this.hasBusinessTopicEvidence(e, i, s))
      return this.handleFlirtResponse();
    if (a.length === 0 ? this.resetSession() : this.syncSessionFromContext(a), this.isOutOfScope(e))
      return this.handleBasicsResponse("OFFTOPIC");
    if (!e || !e.trim() || !/[a-z0-9]/i.test(e))
      return this.handleBasicsResponse("UNCLEAR");
    const n = this.extractOrdinalIndex(e, this.session.lastDisplayedSkus.length);
    if (n !== null && this.session.lastDisplayedSkus.length > 0) {
      const w = this.session.lastDisplayedSkus[n], p = (this.kb.products ?? []).find((_) => _.sku === w);
      if (p)
        return this.session.lastTargetSku = p.sku, this.session.lastTopic = "product", {
          text: J(p),
          suggestedQuestions: ["What is the price?", "Is it available?", "What colors are available?"],
          debug: { intent: "product_specs", confidence: "high", appliedFilters: [`Ordinal #${n + 1}: ${p.sku}`] }
        };
    }
    if (this.session.lastTopic === "return" && /\b(?:how many days|kitne din|kitnay din|within how many days|days)\b/i.test(e))
      return this.handleReturns(e);
    if (this.session.lastTopic === "shipping" && /\b(?:how many days|kitne din|kitnay din|delivery time|days|how long)\b/i.test(e)) {
      if (this.findFAQByTags(["delivery", "shipping", "dispatch", "courier"]))
        return this.handleShipping(e);
      const p = (d = this.kb.policies) == null ? void 0 : d.shipping, _ = this.session.lastLocation ? ` to **${this.session.lastLocation}**` : "";
      if (typeof p == "string")
        return {
          text: `Delivery${_}: ${p}`,
          suggestedQuestions: ["What payment methods do you accept?", "What is your return policy?"],
          debug: { intent: "shipping_delivery", confidence: "high" }
        };
      if (p && (p.timeframe || p.courier)) {
        const I = p.timeframe ? `typically takes **${p.timeframe}**` : "timelines depend on destination", S = p.courier ? ` via ${p.courier}` : "";
        return {
          text: `Delivery${_} ${I}${S}.`,
          suggestedQuestions: ["What payment methods do you accept?", "What is your return policy?"],
          debug: { intent: "shipping_delivery", confidence: "high" }
        };
      }
      return {
        text: `Delivery timelines${_} depend on destination and courier dispatch. Please contact our support team${this.kb.businessInfo.phone ? ` on WhatsApp (${this.kb.businessInfo.phone})` : ""} for exact transit details.`,
        suggestedQuestions: ["What payment methods do you accept?", "What is your return policy?"],
        debug: { intent: "shipping_delivery", confidence: "high" }
      };
    }
    const r = Qt(e), h = O(r.length > 0 ? r : e, { enableRomanUrdu: this.config.enableRomanUrdu }), o = this.classifier.classify(h), c = X(e), u = this.findMentionedProduct(e);
    if (u ? (this.session.lastTargetSku = u.sku, c.skus.includes(u.sku) || (c.skus = [u.sku])) : c.skus.length > 0 && (this.session.lastTargetSku = c.skus[0]), c.skus.length > 0 && o.intentId !== "return_exchange")
      return this.withGreetingPrefix(
        this.handleProductQuery(e, o.intentId, c),
        o.hasGreeting
      );
    if (this.session.lastTargetSku && this.hasFollowUpCue(e))
      return c.skus.push(this.session.lastTargetSku), this.withGreetingPrefix(
        this.handleProductQuery(e, o.intentId, c),
        o.hasGreeting
      );
    if (this.isUserWellbeingAck(e))
      return this.handleUserWellbeingAck();
    if (this.isCatalogCountQuery(e, h.normalized))
      return this.withGreetingPrefix(this.handleCatalogCount(), o.hasGreeting);
    const k = this.hasBusinessTopicEvidence(e, h, c), m = Jt(e);
    if (m) {
      if (m === "ABUSE_BOUNDARY")
        return this.handleBasicsResponse("ABUSE_BOUNDARY");
      if (!k)
        return this.handleBasicsResponse(m);
    }
    const l = [
      "return_exchange",
      "shipping_delivery",
      "payment_methods",
      "business_timings",
      "contact_info",
      "human_handoff",
      "greeting",
      "wellbeing_inquiry",
      "bot_identity",
      "gratitude",
      "farewell",
      "repair_service",
      "business_info"
    ].includes(o.intentId);
    if (o.intentId === "capabilities_help" || this.isCapabilityQuery(e, h.normalized))
      return this.withGreetingPrefix(this.handleCapabilities(), o.hasGreeting);
    if ([
      "greeting",
      "wellbeing_inquiry",
      "bot_identity",
      "gratitude",
      "farewell"
    ].includes(o.intentId) && c.skus.length === 0 && !c.hasConstraints && !/\b(?:price|cost|delivery|shipping|return|exchange|warranty|hours|timing|address|location|dukan|kahan|order|buy|kharidna)\b/i.test(e))
      switch (o.intentId) {
        case "greeting":
          return this.handleGreeting();
        case "wellbeing_inquiry":
          return this.handleWellbeingInquiry();
        case "bot_identity":
          return this.handleBotIdentity();
        case "gratitude":
          return this.handleGratitude();
        case "farewell":
          return this.handleFarewell();
      }
    if (!l && c.skus.length === 0) {
      if (this.session.lastTargetSku && this.hasFollowUpCue(e))
        c.skus.push(this.session.lastTargetSku);
      else if (!this.session.lastTargetSku && /\b(?:is\s+(?:it|this)|does\s+(?:it|this)|kya\s+yeh|kya\s+ye)\b/i.test(e))
        return {
          text: `Which ${this.getItemNoun()} are you asking about? Please provide more details or specify the name or SKU code. You can also contact us if you need help finding a product.`,
          suggestedQuestions: ["Show me all products", "Do you offer delivery?", "What are your hours?"],
          debug: { intent: o.intentId, confidence: "medium" }
        };
    }
    if (c.skus.length > 0 && o.intentId !== "return_exchange")
      return this.withGreetingPrefix(
        this.handleProductQuery(e, o.intentId, c),
        o.hasGreeting
      );
    const y = this.faqEngine.searchBest(h.normalized) ?? this.faqEngine.searchBest(h.raw);
    if (y && y.confidence === "high") {
      const w = y.item;
      if (this.hasFaqTopicEvidence(e, h.normalized, w) && !(c.attributes.length > 0 && !c.attributes.some(
        (I) => w.question.toLowerCase().includes(I) || (w.tags ?? []).some((S) => S.toLowerCase().includes(I)) || (w.variations ?? []).some((S) => S.toLowerCase().includes(I))
      )))
        return (v = w.tags) != null && v.some((I) => ["delivery", "shipping"].includes(I.toLowerCase())) && (this.session.lastTopic = "shipping", this.detectCity(e)), this.withGreetingPrefix({
          text: w.answer,
          suggestedQuestions: w.suggestedFollowUps ?? this.getSuggestedQuestions(o.intentId),
          debug: { intent: o.intentId, confidence: y.confidence, matchedFAQ: w.question }
        }, o.hasGreeting);
    }
    if (o.granularIntentId === "out_of_scope")
      return this.withGreetingPrefix(this.handleOutOfScope(), o.hasGreeting);
    if (o.granularIntentId === "damaged_item" || o.granularIntentId === "wrong_missing_item")
      return this.withGreetingPrefix(this.handleDamagedOrWrongItem(e, o.granularIntentId), o.hasGreeting);
    if (o.granularIntentId === "order_status")
      return this.withGreetingPrefix(this.handleOrderStatus(e), o.hasGreeting);
    if (o.granularIntentId === "order_change")
      return this.withGreetingPrefix(this.handleOrderChange(e), o.hasGreeting);
    if (o.granularIntentId === "order_cancel")
      return this.withGreetingPrefix(this.handleOrderCancel(e), o.hasGreeting);
    if (o.granularIntentId === "appointment_book" || o.granularIntentId === "appointment_reschedule" || o.granularIntentId === "appointment_cancel")
      return this.withGreetingPrefix(this.handleAppointment(e, o.granularIntentId), o.hasGreeting);
    const b = o.intentId === "unknown" && c.hasConstraints ? "product_search" : o.intentId;
    switch (b) {
      case "greeting":
        return this.handleGreeting();
      case "wellbeing_inquiry":
        return this.handleWellbeingInquiry();
      case "bot_identity":
        return this.handleBotIdentity();
      case "gratitude":
        return this.handleGratitude();
      case "farewell":
        return this.handleFarewell();
      case "repair_service":
        return this.hasPolicyIntentEvidence(e, h.normalized, "repair_service") ? this.withGreetingPrefix(this.handleRepairService(), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "business_info":
        return this.hasPolicyIntentEvidence(e, h.normalized, "business_info") ? this.withGreetingPrefix(this.handleBusinessInfo(e), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "business_timings":
        return this.hasPolicyIntentEvidence(e, h.normalized, "business_timings") ? this.withGreetingPrefix(this.handleTimings(), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "contact_info":
        return this.hasPolicyIntentEvidence(e, h.normalized, "contact_info") ? this.withGreetingPrefix(this.handleContact(e), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "payment_methods":
        return this.hasPolicyIntentEvidence(e, h.normalized, "payment_methods") ? this.withGreetingPrefix(this.handlePayment(), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "shipping_delivery":
        return this.hasPolicyIntentEvidence(e, h.normalized, "shipping_delivery") ? this.withGreetingPrefix(this.handleShipping(e), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "return_exchange":
        return this.hasPolicyIntentEvidence(e, h.normalized, "return_exchange") ? this.withGreetingPrefix(this.handleReturns(e), o.hasGreeting) : this.handleMissingEvidenceFallback();
      case "product_price":
        return this.hasPolicyIntentEvidence(e, h.normalized, "product_price") ? this.withGreetingPrefix(
          this.handleProductQuery(e, b, c),
          o.hasGreeting
        ) : c.hasConstraints ? this.withGreetingPrefix(
          this.handleProductQuery(e, "product_search", c),
          o.hasGreeting
        ) : this.handleMissingEvidenceFallback();
      case "product_availability":
      case "product_search":
      case "product_specs":
      case "product_recommendation":
      case "product_comparison":
        return this.withGreetingPrefix(
          this.handleProductQuery(e, b, c),
          o.hasGreeting
        );
      case "human_handoff":
        return this.handleHumanHandoff();
      default: {
        if (y && y.confidence === "medium") {
          const p = y.item;
          if (this.hasFaqTopicEvidence(e, h.normalized, p))
            return this.withGreetingPrefix({
              text: `I found some related information:

${p.answer}

_If this doesn't answer your question, please let me know!_`,
              suggestedQuestions: p.suggestedFollowUps ?? this.getDefaultSuggestions(),
              debug: { intent: "unknown", confidence: "medium", matchedFAQ: p.question }
            }, o.hasGreeting);
        }
        const w = this.findFAQByOverlap(e);
        return w ? this.withGreetingPrefix({
          text: w.answer,
          suggestedQuestions: w.suggestedFollowUps ?? this.getDefaultSuggestions(),
          debug: { intent: "unknown", confidence: "medium", matchedFAQ: w.question }
        }, o.hasGreeting) : k ? this.handleBusinessNotFound() : this.handleMissingEvidenceFallback();
      }
    }
  }
  // ---- Intent Handlers ----
  handleBasicsResponse(e) {
    const a = this.kb.businessInfo.name, s = this.kb.business_summary || this.kb.businessInfo.business_summary || this.kb.businessSummary || this.kb.businessInfo.businessSummary || "our watches, prices, delivery and policies", i = this.kb.business_summary_roman_ur || this.kb.businessInfo.business_summary_roman_ur || this.kb.businessSummaryRomanUr || this.kb.businessInfo.businessSummaryRomanUr || "hamari ghariyan, qeematein, delivery aur policies", n = this.kb.topic_list || this.kb.businessInfo.topic_list || this.kb.topicList || this.kb.businessInfo.topicList || "", r = this.kb.topic_list_roman_ur || this.kb.businessInfo.topic_list_roman_ur || this.kb.topicListRomanUr || this.kb.businessInfo.topicListRomanUr || "", h = Xt[e], o = h.en.replace(/{business_name}/g, a).replace(/{business_summary}/g, s).replace(/{topic_list}/g, n), c = h.roman_ur.replace(/{business_name}/g, a).replace(/{business_summary}/g, i).replace(/{topic_list}/g, r);
    let u = "";
    if ((/* @__PURE__ */ new Set([
      "OWNER_CONTACT",
      "OFFTOPIC",
      "SCOPE_LIMITS",
      "FRUSTRATION",
      "ABUSE_BOUNDARY",
      "UNCLEAR",
      "CAPABILITIES",
      "BOT_NATURE"
    ])).has(e)) {
      const y = this.kb.businessInfo.whatsapp || this.kb.businessInfo.phone, b = y ? y.replace(/[^\d]/g, "") : "";
      u = b ? `

[💬 Contact Assistant on WhatsApp](https://wa.me/${b})` : y ? `

📱 WhatsApp Assistant: ${y}` : "";
    }
    const m = `${o}

${c}${u}`;
    let l = "unknown", g = "high";
    switch (e) {
      case "GREETING":
      case "GREETING_SALAAM":
        l = "greeting";
        break;
      case "WELLBEING":
        l = "wellbeing_inquiry";
        break;
      case "IDENTITY":
        l = "bot_identity";
        break;
      case "CAPABILITIES":
        l = "capabilities_help";
        break;
      case "THANKS":
        l = "gratitude";
        break;
      case "BYE":
        l = "farewell";
        break;
      case "ACK":
        l = "conversational_ack";
        break;
      case "ABUSE_BOUNDARY":
      case "PLAYFUL_BOUNDARY":
        l = "boundary";
        break;
      case "FRUSTRATION":
      case "OWNER_CONTACT":
        l = "human_handoff";
        break;
      case "UNCLEAR":
        l = "unknown", g = "none";
        break;
      default:
        l = "unknown";
        break;
    }
    return {
      text: m,
      suggestedQuestions: this.getDefaultSuggestions(),
      debug: {
        intent: l,
        confidence: g,
        behavior: e
      }
    };
  }
  handleGreeting() {
    return this.handleBasicsResponse("GREETING");
  }
  handleFarewell() {
    return this.handleBasicsResponse("BYE");
  }
  handleWellbeingInquiry() {
    return this.handleBasicsResponse("WELLBEING");
  }
  handleUserWellbeingAck() {
    const e = this.kb.businessInfo.name, a = (this.kb.products ?? []).length > 0, s = this.getItemNoun();
    return {
      text: `Acha laga sun kar! 😊 Glad to hear that.

${a ? `Aapko **${e}** ki koi ${s} explore karni hai ya store policy ke baray mein janna hai?` : `Main **${e}** ke hawalay se aapki kya madad kar sakta hoon?`}`,
      suggestedQuestions: a ? ["Show me all products", "Do you offer delivery?", "What are your hours?"] : ["What services do you offer?", "What are your business hours?", "How can I contact you?"],
      debug: { intent: "conversational_ack", confidence: "high" }
    };
  }
  handleCapabilities() {
    return this.handleBasicsResponse("CAPABILITIES");
  }
  handleCatalogCount() {
    var r;
    const e = this.kb.products ?? [];
    if (this.session.lastTopic = "product", this.session.activeFilters = void 0, e.length === 0) {
      const h = this.kb.faqs.filter(
        (o) => {
          var c;
          return (c = o.tags) == null ? void 0 : c.some((u) => ["service", "corporate", "advisory", "consulting"].includes(u.toLowerCase()));
        }
      );
      if (h.length > 0) {
        const o = [
          `**${this.kb.businessInfo.name}** ek corporate advisory firm hai jahan hum physical products ke bajaye professional services provide karte hain. Hamare paas **${h.length} main services** available hain:
`
        ];
        for (const c of h)
          o.push(`• **${c.question}**`);
        return o.push(`
Aap kisi bhi service ki requirements, timeline ya consultation ke baray mein pooch sakte hain!`), {
          text: o.join(`
`),
          suggestedQuestions: ["What services do you offer?", "How can I schedule a consultation?", "How can I contact you?"],
          debug: { intent: "product_search", confidence: "high", appliedFilters: [`Service count: ${h.length}`] }
        };
      }
      return {
        text: "We don't have a product catalog loaded right now. Please contact us directly for product information.",
        suggestedQuestions: ["How can I contact you?"],
        debug: { intent: "product_search", confidence: "low" }
      };
    }
    const a = e.length, s = this.getItemNounPlural(), i = this.getItemNoun(), n = [
      `Hamare paas is waqt total **${a} ${s}** catalog mein maujood hain:
`
    ];
    for (const h of e) {
      const o = h.price !== void 0 ? ` (${h.currency ?? "PKR"} ${h.price.toLocaleString()})` : "", c = h.inStock === !1 ? " — _Out of Stock_" : "";
      n.push(`• **${h.sku}** — ${h.name}${o}${c}`);
    }
    return n.push(`
Aap kisi bhi ${i} ki price, stock ya specifications maloom karne ke liye pooch sakte hain!`), this.session.lastDisplayedSkus = e.map((h) => h.sku), {
      text: n.join(`
`),
      suggestedQuestions: [
        `What is the price of ${((r = e[0]) == null ? void 0 : r.sku) ?? "CW-001"}?`,
        "Do you offer cash on delivery?",
        "What is your return policy?"
      ],
      debug: { intent: "product_search", confidence: "high", appliedFilters: [`Total catalog count: ${a}`] }
    };
  }
  isUserWellbeingAck(e) {
    return e.includes("?") ? !1 : /\b(?:ma\s+b\s+theek|main\s+bhi\s+theek|me\s+bhi\s+theek|mai\s+theek|me\s+theek|hum\s+bhi\s+theek|alhamdulillah|shukar\s+hai\s+theek|shukr\s+hai\s+theek|i\s*am\s+fine|i\s*am\s+good|im\s+fine|im\s+good|doing\s+well|fit\s+hoon|sab\s+theek|sab\s+set|theek\s+thak|theek\s+hno|all\s+good)\b/i.test(e);
  }
  isCapabilityQuery(e, a) {
    const s = `${e} ${a ?? ""}`;
    return /\b(?:tum|aap|ap)\s+(?:kya\s+kya|kia\s+kia|meri|merin|kya|kia)?\s*(?:help|madad|guide|assist|bata|btana|kar\s+sakhte|kar\s+sakty|kr\s+sakhty|kr\s+sakte)\b/i.test(s) || /\b(?:what\s+can\s+you\s+do|how\s+can\s+you\s+help|what\s+help\s+can\s+you|what\s+are\s+your\s+capabilities|how\s+to\s+use\s+this\s+bot|help\s+options)\b/i.test(s) || /\b(?:tum\s+kis\s+kaam\s+k\s+ho|tumhara\s+kya\s+kaam\s+hai|kya\s+kya\s+service\s+dete\s+ho)\b/i.test(s) || /^(?:help|madad|features|menu|capabilities)[?!.\s]*$/i.test(e.trim());
  }
  isCatalogCountQuery(e, a) {
    const s = `${e} ${a ?? ""}`;
    return /\b(?:(?:how\s+many|kitni|kitne|kitnay|total)\s+(?:products?|items?|watches?|suits?|services?|options?|designs?|collection|pieces?|models?|producst|producs|prducts))\b/i.test(s) || /\b(?:tumhare|tumhari|tumharii|apke|aap\s+k[eay]?|ap\s+k[eay]?)\s*(?:paas|pas)?\s*(?:kitn[ieay]|total)?\s*(?:products?|items?|watches?|suits?|services?|producst|producs)\b/i.test(s) || /\b(?:catalog\s+size|total\s+collection|total\s+count)\b/i.test(s) || /\b(?:kitn[ieay]\s+producst|kitn[ieay]\s+products)\b/i.test(s);
  }
  handleBotIdentity() {
    return this.handleBasicsResponse("IDENTITY");
  }
  handleGratitude() {
    return this.handleBasicsResponse("THANKS");
  }
  handleRepairService() {
    const e = this.findFAQByTags(["repair", "service", "battery", "strap"]);
    return e ? {
      text: e.answer,
      suggestedQuestions: e.suggestedFollowUps ?? ["Where is your shop located?", "What are your business hours?", "How can I contact you?"],
      debug: { intent: "repair_service", confidence: "high", matchedFAQ: e.question }
    } : {
      text: `For repair and maintenance inquiries regarding **${this.kb.businessInfo.name}**, please visit our store or reach out to our team directly.`,
      suggestedQuestions: ["Where is your shop located?", "How can I contact you?"],
      debug: { intent: "repair_service", confidence: "medium" }
    };
  }
  handleOutOfScope() {
    return this.handleBasicsResponse("OFFTOPIC");
  }
  handleClarificationNeeded() {
    return {
      text: "Could you please clarify your request or provide more details? (Agar aap mazeed wazahat kar dein ya specific product/order ID share karein, toh main behtar madad kar sakunga.)",
      suggestedQuestions: this.getDefaultSuggestions(),
      debug: { intent: "unknown", confidence: "medium" }
    };
  }
  handleDamagedOrWrongItem(e, a) {
    this.kb.businessInfo.name;
    const s = this.kb.businessInfo.phone || this.kb.businessInfo.email || "customer support";
    return {
      text: `We are truly sorry to hear that your parcel arrived ${a === "damaged_item" ? "damaged or defective" : "with incorrect or missing items"}. Please share your Order ID and photos with our support team at **${s}** so we can immediately arrange a replacement or exchange as per our policy.`,
      suggestedQuestions: ["What is your return policy?", "How can I contact you?"],
      debug: { intent: "return_exchange", confidence: "high" }
    };
  }
  handleOrderStatus(e) {
    var r, h;
    const a = e.match(/\b([A-Z0-9]+-[A-Z0-9]+|[A-Z]{1,3}\d{2,6})\b/i), s = a ? `for reference **${a[0].toUpperCase()}**` : "for your order", i = (h = (r = this.kb.policies) == null ? void 0 : r.shipping) == null ? void 0 : h.courier, n = i ? `our courier partners (${i})` : "our courier partners";
    return {
      text: `To check the verified live tracking status ${s}, our team coordinates directly with ${n}. Please provide your Order ID or contact our support team on WhatsApp (${this.kb.businessInfo.phone || "our helpline"}) for instant live tracking updates.`,
      suggestedQuestions: ["What is your delivery timeframe?", "How can I contact support?"],
      debug: { intent: "shipping_delivery", confidence: "high" }
    };
  }
  handleOrderChange(e) {
    return {
      text: "To modify an existing order (such as updating your delivery address, size, or quantity), please contact our support team immediately before dispatch. Once dispatched, address or item changes cannot be made directly in transit.",
      suggestedQuestions: ["What is your delivery timeframe?", "How can I contact support?"],
      debug: { intent: "return_exchange", confidence: "high" }
    };
  }
  handleOrderCancel(e) {
    return {
      text: "To request order cancellation, please contact our team with your Order ID before the parcel is dispatched. If your order has already been handed over to the courier, you can refuse acceptance upon delivery or initiate a return following our return policy.",
      suggestedQuestions: ["What is your return policy?", "How can I contact support?"],
      debug: { intent: "return_exchange", confidence: "high" }
    };
  }
  handleAppointment(e, a) {
    const s = this.kb.businessInfo.name;
    return {
      text: `To ${a === "appointment_cancel" ? "cancel an appointment" : a === "appointment_reschedule" ? "reschedule an appointment" : "book a consultation or appointment"} with **${s}**, please contact our team directly at **${this.kb.businessInfo.phone || this.kb.businessInfo.email || "our office"}** with your preferred date and time slot. Our team will verify slot availability and confirm your booking.`,
      suggestedQuestions: ["What are your business hours?", "Where is your office located?"],
      debug: { intent: "contact_info", confidence: "high" }
    };
  }
  withGreetingPrefix(e, a) {
    return !a || e.text.startsWith("Hello") || e.text.startsWith("Hi") ? e : {
      ...e,
      text: `Hello! 👋

${e.text}`
    };
  }
  handleBusinessInfo(e) {
    var i;
    if (e) {
      const n = e.toLowerCase();
      if (/\b(?:authentic|genuine|original|orignal|fake|real|copy)\b/i.test(n)) {
        const r = this.findFAQByTags(["authentic", "genuine", "original"]);
        if (r)
          return {
            text: r.answer,
            suggestedQuestions: r.suggestedFollowUps ?? ["What is your return policy?", "Show me your products"],
            debug: { intent: "business_info", confidence: "high", matchedFAQ: r.question }
          };
        if ((i = this.kb.policies) != null && i.authenticity)
          return {
            text: `💎 **100% Authenticity Guaranteed:**

${this.kb.policies.authenticity.statement ?? "All products are guaranteed 100% authentic."}

• Authorized distributor
• Official brand warranty and certificates included`,
            suggestedQuestions: ["What is your return policy?", "Show me your products", "How can I contact you?"],
            debug: { intent: "business_info", confidence: "high" }
          };
      }
    }
    const a = this.kb.businessInfo, s = [`**${a.name}**`];
    return a.description && s.push(a.description), a.location && s.push(`📍 ${a.location}`), a.website && s.push(`🌐 ${a.website}`), {
      text: s.join(`
`),
      suggestedQuestions: ["What are your business hours?", "How can I contact you?", "What products do you offer?"],
      debug: { intent: "business_info", confidence: "high" }
    };
  }
  handleTimings() {
    this.session.lastTopic = "hours";
    const e = this.kb.businessInfo, a = this.findFAQByTags(["hours", "timing", "schedule", "open"]);
    return a ? {
      text: a.answer,
      suggestedQuestions: a.suggestedFollowUps ?? ["How can I contact you?", "Do you offer delivery?"],
      debug: { intent: "business_timings", confidence: "high", matchedFAQ: a.question }
    } : e.hours ? {
      text: `🕐 **Business Hours**

${typeof e.hours == "string" ? e.hours : ta(e.hours)}`,
      suggestedQuestions: ["How can I contact you?", "Do you deliver?"],
      debug: { intent: "business_timings", confidence: "high" }
    } : {
      text: Se(Ce.unknown),
      suggestedQuestions: ["How can I contact you?"],
      debug: { intent: "business_timings", confidence: "low" }
    };
  }
  handleContact(e) {
    this.session.lastTopic = "contact";
    const a = this.kb.businessInfo;
    if (e && /\b(?:where|location|address|office|store|shop|dukan|kahan|kidhar|visit)\b/i.test(e)) {
      const n = this.findFAQByTags(["location", "address", "store", "shop"]);
      if (n)
        return {
          text: n.answer,
          suggestedQuestions: n.suggestedFollowUps ?? ["What are your business hours?", "How can I contact you?"],
          debug: { intent: "contact_info", confidence: "high", matchedFAQ: n.question }
        };
      if (a.address)
        return {
          text: `📍 **Store & Office Address:**

${a.address}${a.location ? ` (${a.location})` : ""}`,
          suggestedQuestions: ["What are your business hours?", "How can I contact you?"],
          debug: { intent: "contact_info", confidence: "high" }
        };
    }
    const s = this.kb.faqs.find(
      (n) => {
        var r, h;
        return ((r = n.tags) == null ? void 0 : r.some((o) => ["contact", "phone", "email", "support"].includes(o.toLowerCase()))) && !((h = n.tags) != null && h.some((o) => ["hours", "timing", "schedule"].includes(o.toLowerCase())));
      }
    );
    if (s)
      return {
        text: s.answer,
        suggestedQuestions: s.suggestedFollowUps ?? [],
        debug: { intent: "contact_info", confidence: "high", matchedFAQ: s.question }
      };
    const i = [`📞 **Contact ${a.name}:**`];
    return a.phone && i.push(`📱 WhatsApp / Phone: ${a.phone}`), a.email && i.push(`📧 Email: ${a.email}`), a.address && i.push(`📍 Address: ${a.address}`), a.website && i.push(`🌐 Website: ${a.website}`), i.length === 1 && i.push("Please use the WhatsApp button below to reach us."), {
      text: i.join(`
`),
      suggestedQuestions: ["What are your business hours?", "How do I place an order?"],
      debug: { intent: "contact_info", confidence: "high" }
    };
  }
  handlePayment() {
    this.session.lastTopic = "payment";
    const e = this.findFAQByTags(["payment", "cod", "cash", "card", "jazzcash", "easypaisa"]);
    return e ? {
      text: e.answer,
      suggestedQuestions: e.suggestedFollowUps ?? ["How do I place an order?", "What is your return policy?"],
      debug: { intent: "payment_methods", confidence: "high", matchedFAQ: e.question }
    } : {
      text: "I don't have specific payment information available right now. Please contact us directly for payment options.",
      suggestedQuestions: ["How can I contact you?"],
      debug: { intent: "payment_methods", confidence: "low" }
    };
  }
  handleShipping(e) {
    this.session.lastTopic = "shipping", e && this.detectCity(e);
    const a = this.session.lastLocation ? `Yes, we deliver across Pakistan including **${this.session.lastLocation}**!

` : "", s = this.findFAQByTags(["delivery", "shipping", "dispatch", "courier"]);
    return s ? {
      text: `${a}${s.answer}`,
      suggestedQuestions: s.suggestedFollowUps ?? ["What is your return policy?", "What payment methods do you accept?"],
      debug: { intent: "shipping_delivery", confidence: "high", matchedFAQ: s.question }
    } : {
      text: `${a}I don't have delivery information available. Please contact us for shipping details and timelines.`,
      suggestedQuestions: ["How can I contact you?", "What is your return policy?"],
      debug: { intent: "shipping_delivery", confidence: "low" }
    };
  }
  handleReturns(e) {
    var s;
    if (this.session.lastTopic = "return", e && /\b(?:warranty|guarantee|waranty)\b/i.test(e)) {
      if ((s = this.kb.policies) != null && s.warranty) {
        const n = this.kb.policies.warranty, r = n.period ? `
• Period: **${n.period}**` : "", h = n.coverage ? `
• Coverage: ${n.coverage}` : "", o = n.notes ? `
• ${n.notes}` : "";
        return {
          text: `🛡️ **Warranty Policy:**${r}${h}${o}

_Official warranty card included for verified products._`,
          suggestedQuestions: ["What is your return policy?", "Are products authentic?", "How do I contact you?"],
          debug: { intent: "return_exchange", confidence: "high" }
        };
      }
      const i = this.findFAQByTags(["warranty"]);
      if (i)
        return {
          text: i.answer,
          suggestedQuestions: i.suggestedFollowUps ?? ["What is your return policy?", "Are watches authentic?"],
          debug: { intent: "return_exchange", confidence: "high", matchedFAQ: i.question }
        };
    }
    const a = this.findFAQByTags(["return", "exchange", "refund", "policy"]);
    return a ? {
      text: a.answer,
      suggestedQuestions: a.suggestedFollowUps ?? ["How do I contact you?", "What payment methods do you accept?"],
      debug: { intent: "return_exchange", confidence: "high", matchedFAQ: a.question }
    } : {
      text: "I don't have specific return/exchange policy information. Please contact us directly for details.",
      suggestedQuestions: ["How can I contact you?"],
      debug: { intent: "return_exchange", confidence: "low" }
    };
  }
  handleProductQuery(e, a, s) {
    var v, w;
    const i = this.kb.products;
    if (!i || i.length === 0)
      return {
        text: "We don't have a product catalog loaded right now. Please contact us directly for product information.",
        suggestedQuestions: ["How can I contact you?"],
        debug: { intent: a, confidence: "low" }
      };
    const n = s ?? X(e), r = /\b(?:show\s+all|list\s+all|saari|sari\s+(?:products|watches|collection)|tamam|sab\s+dikhao|pura\s+catalog|all\s+products|view\s+all)\b/i.test(e);
    if (r && (this.session.activeFilters = void 0, n.minPrice = void 0, n.maxPrice = void 0, n.colors = [], n.attributes = [], n.brand = void 0), this.isCatalogCountQuery(e, n.normalized))
      return this.handleCatalogCount();
    this.session.lastTopic === "product" && n.skus.length === 0 && this.session.activeFilters && !r && ((n.colors.length > 0 || n.sizes.length > 0 || n.attributes.length > 0 || n.maxPrice !== void 0 || n.minPrice !== void 0 || /\b(?:aur|or|in|with|without|wala|wali|wale|bhi|under|below|budget)\b/i.test(e)) && (n.maxPrice === void 0 && this.session.activeFilters.maxPrice !== void 0 && (n.maxPrice = this.session.activeFilters.maxPrice, n.hasConstraints = !0), n.minPrice === void 0 && this.session.activeFilters.minPrice !== void 0 && (n.minPrice = this.session.activeFilters.minPrice, n.hasConstraints = !0)), !n.brand && this.session.activeFilters.brand && (n.brand = this.session.activeFilters.brand, n.hasConstraints = !0), n.colors.length === 0 && ((v = this.session.activeFilters.colors) != null && v.length) && (n.maxPrice !== void 0 || n.minPrice !== void 0) && (n.colors = [...this.session.activeFilters.colors], n.hasConstraints = !0));
    let o;
    if (n.skus.length > 0) {
      const { products: p } = Z(i, n);
      p.length === 1 && (o = p[0]);
    } else {
      const p = O(e).normalized.toLowerCase(), _ = e.toLowerCase() + " " + p, I = i.map((x) => {
        const A = x.name.toLowerCase();
        if (_.includes(A)) return { p: x, score: 10 };
        const T = A.split(/\s+/).filter((F) => F.length >= 4 && !["with", "item", "from"].includes(F)).filter((F) => _.includes(F));
        return { p: x, score: T.length };
      }).filter((x) => x.score >= 1).sort((x, A) => A.score - x.score);
      n.minPrice !== void 0 || n.maxPrice !== void 0 ? I.length > 0 && I[0].score >= 10 && (o = I[0].p) : I.length > 0 && (I.length === 1 || I[0].score > I[1].score) && (o = I[0].p);
    }
    if (o) {
      const p = o;
      if (this.session.lastTargetSku = p.sku, this.session.lastDisplayedSkus = [p.sku], this.session.lastTopic = "product", a === "product_price" || /\b(?:price|cost|how much|qeemat|kitnay|rate|fees|charges)\b/i.test(e)) {
        const _ = p.currency ?? "PKR", I = p.price !== void 0 ? p.price === 0 ? "Free / Complimentary" : `${_} ${p.price.toLocaleString()}` : "Price on request", S = p.inStock ? "✅ In Stock" : "❌ Out of Stock", x = p.description ? `

${p.description}` : "";
        return {
          text: `The price for **${p.name}** (${p.sku}) is **${I}**.

${S}${x}
${p.colors ? `Colors: ${p.colors.join(", ")}` : ""}

_Would you like to place an order or check delivery details?_`,
          suggestedQuestions: ["Do you offer delivery?", "What payment methods do you accept?", "What is your return policy?"],
          debug: { intent: "product_price", confidence: "high", appliedFilters: [`SKU: ${p.sku}`] }
        };
      }
      if (a === "product_availability" || /\b(?:available|stock|maujood|milega)\b/i.test(e)) {
        const _ = p.inStock ? `**${p.name}** (${p.sku}) is **In Stock ✅** and available for immediate order!` : `**${p.name}** (${p.sku}) is currently **Out of Stock ❌**.`, I = p.currency ?? "PKR", S = p.price !== void 0 ? p.price === 0 ? `
Price: Free / Complimentary` : `
Price: ${I} ${p.price.toLocaleString()}` : "";
        return {
          text: `${_}${S}
${p.colors ? `Colors: ${p.colors.join(", ")}` : ""}

_Let me know if you'd like to check other items or pre-order!_`,
          suggestedQuestions: ["What is the price?", "Do you offer delivery?", "Show other options"],
          debug: { intent: "product_availability", confidence: "high", appliedFilters: [`SKU: ${p.sku}`] }
        };
      }
      return {
        text: J(p),
        suggestedQuestions: ["Do you offer delivery?", "What payment methods do you accept?", "What is your return policy?"],
        debug: { intent: a, confidence: "high", appliedFilters: [`SKU: ${p.sku}`] }
      };
    }
    if (n.skus.length > 0) {
      const { products: p } = Z(i, n);
      if (p.length === 0)
        return {
          text: `No product found with SKU **${n.skus.join(", ")}**. Please verify the code and try again, or contact us for help.`,
          suggestedQuestions: this.getDefaultSuggestions(),
          debug: { intent: a, confidence: "high", appliedFilters: [`SKU: ${n.skus[0]}`] }
        };
    }
    const u = !/\b(?:affordable|cheapest|cheap|sasta|sastay|lowest|budget|expensive|mehnga|premium|luxury)\b/i.test(e) && !n.colors.length && !n.sizes.length && !n.attributes.length && n.minPrice === void 0 && n.maxPrice === void 0 && !n.brand && !n.skus.length && n.nameKeywords.length === 0;
    if ((a === "product_recommendation" || /\b(?:achi|achhi|best|recommend|suggest|gift|deal)\b/i.test(e)) && (u || !n.hasConstraints)) {
      const p = this.getItemNoun(), _ = i.map((C) => C.price).filter((C) => typeof C == "number" && C > 0), I = _.length > 0 ? Math.min(..._) : void 0, S = _.length > 0 ? Math.max(..._) : void 0, x = ((w = i[0]) == null ? void 0 : w.currency) ?? "PKR", A = I !== void 0 && S !== void 0 ? ` ranging from ${x} ${I.toLocaleString()} to ${x} ${S.toLocaleString()}` : "";
      return {
        text: `What style or price range are you looking for? Could you provide more details about your preferred budget or features? We offer a variety of ${p} options${A}. You can also contact us for personalized help and recommendations!`,
        suggestedQuestions: ["Show me all products", "Do you offer delivery?", "What are your business hours?"],
        debug: { intent: "product_recommendation", confidence: "high" }
      };
    }
    if (e.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((p) => p.length >= 4).find((p) => je.some((_) => {
      if (_.includes(" ")) return !1;
      const I = ea(p, _);
      return I === 1 || p.length >= 5 && I === 2;
    })) && !n.skus.length && n.colors.length === 0) {
      const p = this.getAvailableColors().join(", ");
      return {
        text: `We couldn't find a matching product in that color. Our collection is available in the following colors: **${p}**.

Humare paas is rang mein watch nahi mili. Hamari collection in colors mein available hai: **${p}**.`,
        suggestedQuestions: this.getDefaultSuggestions(),
        debug: { intent: a, confidence: "medium" }
      };
    }
    if (n.nameKeywords.length > 0 && !i.some((_) => {
      const I = `${_.name} ${_.description ?? ""} ${_.category} ${_.brand ?? ""} ${Object.values(_.attributes ?? {}).join(" ")}`.toLowerCase();
      return n.nameKeywords.some((S) => I.includes(S.toLowerCase())) || n.attributes.some((S) => I.includes(S.toLowerCase())) || n.category && I.includes(n.category.toLowerCase()) || n.brand && I.includes(n.brand.toLowerCase());
    }))
      return this.handleBusinessNotFound();
    if (!n.hasConstraints || u) {
      if (a === "product_price")
        return {
          text: `Which ${this.getItemNoun()} would you like to know the price for? Please provide more details or specify the model name or SKU code. You can also contact us if you need help finding a product.`,
          suggestedQuestions: ["Show me all products", "Do you offer delivery?"],
          debug: { intent: a, confidence: "high" }
        };
      if (a === "product_availability")
        return {
          text: `Which ${this.getItemNoun()} would you like to check availability for? Please provide more details or specify the name or SKU code. You can also contact us for stock inquiries.`,
          suggestedQuestions: ["Show me all products"],
          debug: { intent: a, confidence: "high" }
        };
      if (a === "product_specs")
        return {
          text: `Which ${this.getItemNoun()}'s specifications would you like to see? Please provide more details or specify the name or SKU code. You can also contact us for assistance.`,
          suggestedQuestions: ["Show me all products"],
          debug: { intent: a, confidence: "high" }
        };
      const p = Ae(i, this.config.maxProductResults);
      return this.session.lastDisplayedSkus = i.slice(0, this.config.maxProductResults).map((_) => _.sku), this.session.lastTopic = "product", {
        text: `Here are our products:

${p}

_Ask me about any specific item for more details!_`,
        suggestedQuestions: ["Show me products under 30,000", "Do you have black options?", "What payment methods do you accept?"],
        debug: { intent: a, confidence: "high" }
      };
    }
    const { products: g, appliedFilters: y } = Z(i, n);
    if (this.session.activeFilters = {
      minPrice: n.minPrice,
      maxPrice: n.maxPrice,
      colors: n.colors.length > 0 ? n.colors : void 0,
      sizes: n.sizes.length > 0 ? n.sizes : void 0,
      attributes: n.attributes.length > 0 ? n.attributes : void 0,
      brand: n.brand
    }, g.length === 0) {
      const p = y.join(", ");
      if (n.colors.length > 0) {
        const _ = this.getAvailableColors().join(", ");
        return {
          text: `We currently don't have that specific color in stock. Our collection is available in the following colors: **${_}**.

Humare paas yeh specific rang filwaqt dastiyab nahi hai. Hamari collection in colors mein available hai: **${_}**.`,
          suggestedQuestions: this.getDefaultSuggestions(),
          debug: { intent: a, confidence: "medium", appliedFilters: y }
        };
      }
      if (n.sizes.length > 0) {
        const _ = this.getAvailableSizes().join(", ");
        return {
          text: `We currently don't have that specific size in stock. Our products are available in the following sizes: **${_}**.

Humare paas yeh size filwaqt dastiyab nahi hai. Hamari collection in sizes mein available hai: **${_}**.`,
          suggestedQuestions: this.getDefaultSuggestions(),
          debug: { intent: a, confidence: "medium", appliedFilters: y }
        };
      }
      return {
        text: `No products found matching your criteria. Try broadening your search or adjusting filters.

_Filters applied: ${p}_`,
        suggestedQuestions: this.getDefaultSuggestions(),
        debug: { intent: a, confidence: "medium", appliedFilters: y }
      };
    }
    if (g.length === 1) {
      const p = g[0];
      return this.session.lastTargetSku = p.sku, this.session.lastDisplayedSkus = [p.sku], this.session.lastTopic = "product", {
        text: `Found a matching product:

${J(p)}`,
        suggestedQuestions: ["Do you offer delivery?", "What payment methods do you accept?", "What is your return policy?"],
        debug: { intent: a, confidence: "high", appliedFilters: y }
      };
    }
    this.session.lastDisplayedSkus = g.slice(0, this.config.maxProductResults).map((p) => p.sku), this.session.lastTopic = "product";
    const b = Ae(g, this.config.maxProductResults), d = y.length > 0 ? `

_Filters: ${y.join(" | ")}_` : "";
    return {
      text: `Found ${g.length} product(s):

${b}${d}`,
      suggestedQuestions: ["Tell me more about a specific item", "What payment methods do you accept?", "Do you offer delivery?"],
      debug: { intent: a, confidence: "high", appliedFilters: y }
    };
  }
  handleBusinessNotFound() {
    const e = this.kb.businessInfo.name, a = this.kb.business_summary || this.kb.businessInfo.business_summary || this.kb.businessSummary || this.kb.businessInfo.businessSummary || "our watches, prices, delivery and policies", s = this.kb.business_summary_roman_ur || this.kb.businessInfo.business_summary_roman_ur || this.kb.businessSummaryRomanUr || this.kb.businessInfo.businessSummaryRomanUr || "hamari ghariyan, qeematein, delivery aur policies", i = this.kb.businessInfo.whatsapp || this.kb.businessInfo.phone, n = i ? i.replace(/[^\d]/g, "") : "", r = n ? `

[💬 Contact Assistant on WhatsApp](https://wa.me/${n})` : i ? `

📱 WhatsApp Assistant: ${i}` : "", h = `I could not find that in ${e}'s catalog. Here is what we offer: ${a}. For more details or custom requests, please contact our owner on WhatsApp below.`, o = `Mujhe ${e} ke catalog mein yeh nahi mila. Hum yeh offer karte hain: ${s}. Mazeed maloomat ke liye neeche WhatsApp par owner se rabta karein.`;
    return {
      text: `${h}

${o}${r}`,
      suggestedQuestions: this.getDefaultSuggestions(),
      debug: { intent: "product_not_found", confidence: "medium" }
    };
  }
  handleHumanHandoff() {
    return {
      text: `I'll connect you with our team. 👤

${Se(Ce.handoffPrompt)}`,
      suggestedQuestions: [],
      debug: { intent: "human_handoff", confidence: "high" }
    };
  }
  // ---- Helpers & Session Logic ----
  isOutOfScope(e) {
    const a = e.toLowerCase();
    return [
      /\b(?:ignore\s+(?:all\s+|previous\s+)?(?:rules|instructions|prompts))\b/i,
      /\b(?:system\s+override|jailbreak)\b/i,
      /\b(?:give\s+me\s+a\s+free|free\s+watch|free\s+product|free\s+luxury)\b/i,
      /\b(?:invent|fabricate|make\s+up)\s+(?:a\s+)?(?:product|price|fake|story)\b/i,
      /\b(?:write\s+(?:a\s+)?(?:poem|essay|code|song|story|joke|script))\b/i,
      /\b(?:poem|poetry|rhyme|riddle)\b/i,
      /\b(?:python|javascript|typescript|coding|web\s+scraping)\b/i,
      /\b(?:cricket|football|match\s+yesterday|sports\s+score)\b/i,
      /\b(?:weather|temperature|forecast|climate)\b/i,
      /\b(?:prime\s+minister|president|politics|government|election)\b/i,
      /\b(?:pizza|burger|biryani|shawarma|fast\s+food|recipe|cook|baking)\b/i,
      /\b(?:bitcoin|crypto|cryptocurrency|ethereum|btc|usdt)\b/i,
      /\b(?:hack|password|crack|exploit)\b/i,
      /\b(?:solve\s+\d|\d+\s*(?:[\*\/\+\-]|guna|times|plus|minus|divide|divided\s+by)\s*\d+)\b/i,
      /<(?:script|img|iframe|svg|body|html|style)\b/i,
      /\bjavascript:\b/i,
      /\bdrop\s+table\b/i
    ].some((i) => i.test(a) || i.test(e));
  }
  extractOrdinalIndex(e, a) {
    const s = e.toLowerCase();
    return /\b(?:first|1st|pehla|pehli|pehle|pehla\s+wala|pehle\s+wala|number\s*1|first\s+one|1st\s+one)\b/i.test(s) ? 0 : /\b(?:second|2nd|dusra|doosra|dusri|doosri|dusra\s+wala|doosra\s+wala|number\s*2|second\s+one|2nd\s+one)\b/i.test(s) ? 1 < a ? 1 : null : /\b(?:third|3rd|teesra|teesri|teesra\s+wala|number\s*3|third\s+one|3rd\s+one)\b/i.test(s) ? 2 < a ? 2 : null : /\b(?:fourth|4th|choutha|chautha|number\s*4|fourth\s+one|4th\s+one)\b/i.test(s) ? 3 < a ? 3 : null : /\b(?:last|aakhri|akhri|aakhri\s+wala|akhri\s+wala|last\s+one)\b/i.test(s) && a > 0 ? a - 1 : null;
  }
  isPronounReference(e) {
    const a = e.toLowerCase();
    return /\b(?:it|this|that|yeh|ye|iski|iske|iska|iss|is ki|is ka)\b/i.test(a) || /\b(?:how much is it|is it available|how much for this|available hai|specs kya|rate kya|price kya|qeemat)\b/i.test(a) || /\b(?:colors?|colours?|sizes?|fabric|material|water\s+resistant|specs?|in\s+stock)\b/i.test(a);
  }
  detectCity(e) {
    const a = e.match(/\b(lahore|karachi|islamabad|rawalpindi|faisalabad|peshawar|multan|quetta)\b/i);
    a && (this.session.lastLocation = a[1].charAt(0).toUpperCase() + a[1].slice(1).toLowerCase());
  }
  syncSessionFromContext(e) {
    var s, i;
    const a = e.join(" ");
    if (this.session.lastDisplayedSkus.length === 0) {
      const n = /* @__PURE__ */ new Map();
      for (const o of this.kb.products ?? [])
        n.set(o.sku.toUpperCase(), o.sku);
      const r = Array.from(a.matchAll(/\b([A-Za-z0-9]{1,8}(?:-[A-Za-z0-9]{1,8})+)\b/g)).map((o) => o[1]), h = [];
      for (const o of r) {
        const c = n.get(o.toUpperCase());
        c ? h.push(c) : /^[A-Z]{1,8}(?:-[A-Z0-9]{1,8})+$/.test(o) && h.push(o);
      }
      h.length > 0 && (this.session.lastDisplayedSkus = [...new Set(h)], this.session.lastTargetSku || (this.session.lastTargetSku = h[0]));
    }
    if (!this.session.lastTopic && /(?:delivery|shipping|deliver)/i.test(a) && (this.session.lastTopic = "shipping", this.detectCity(a)), (!this.session.lastTopic || this.session.lastTopic === "product") && !((s = this.session.activeFilters) != null && s.maxPrice) && !((i = this.session.activeFilters) != null && i.minPrice)) {
      const r = a.replace(
        /(?:shipping|delivery|courier|fee|charges?)[^.!?\n]{0,60}\b(?:under|below|less than)\s+(?:pkr|rs\.?)?\s*[0-9,]+/gi,
        ""
      ).match(/\b(?:under|below|less than|kam|tak)\s+(?:pkr|rs\.?)?\s*([0-9,]+)/i);
      if (r) {
        const h = parseInt(r[1].replace(/,/g, ""), 10);
        isNaN(h) || (this.session.activeFilters = { ...this.session.activeFilters ?? {}, maxPrice: h }, this.session.lastTopic = "product");
      }
    }
  }
  findFAQByTags(e) {
    var a;
    for (const s of this.kb.faqs)
      if ((a = s.tags) != null && a.some((i) => e.includes(i.toLowerCase())))
        return s;
    return null;
  }
  findFAQByOverlap(e) {
    const a = e.toLowerCase().replace(/[^\w\s]/g, " "), s = /* @__PURE__ */ new Set([
      "what",
      "when",
      "where",
      "which",
      "who",
      "whom",
      "whose",
      "why",
      "how",
      "your",
      "you",
      "yours",
      "our",
      "ours",
      "their",
      "theirs",
      "his",
      "her",
      "its",
      "need",
      "have",
      "has",
      "had",
      "from",
      "with",
      "about",
      "some",
      "any",
      "all",
      "hain",
      "mein",
      "kya",
      "lagte",
      "sell",
      "items",
      "item",
      "product",
      "products",
      "and",
      "the",
      "for",
      "are",
      "can",
      "may",
      "will",
      "would",
      "should",
      "could",
      "hai",
      "bhi",
      "par",
      "per",
      "koi",
      "aur",
      "thi",
      "tha",
      "the",
      "karo",
      "karein"
    ]), i = a.split(/\s+/).filter(
      (h) => h.length >= 3 && !s.has(h)
    );
    if (i.length === 0) return null;
    let n = null, r = 0;
    for (const h of this.kb.faqs) {
      let o = 0, c = 0;
      const u = h.question.toLowerCase(), k = (h.tags ?? []).map((g) => g.toLowerCase()), m = (h.variations ?? []).map((g) => g.toLowerCase());
      for (const g of i) {
        let y = !1;
        u.includes(g) && (o += 2, y = !0), k.some((b) => b.includes(g) || g.includes(b)) && (o += 2, y = !0), m.some((b) => b.includes(g)) && (o += 1.5, y = !0), y && c++;
      }
      const l = c * 5 + o;
      l > r && l >= 8 && (r = l, n = h);
    }
    return n;
  }
  getSuggestedQuestions(e) {
    const a = this.getDefaultSuggestions();
    return {
      product_price: ["Show me all products", "Do you have this in stock?", "What payment methods do you accept?"],
      product_availability: ["What is the price?", "Do you offer delivery?", "What is your return policy?"],
      shipping_delivery: ["What payment methods do you accept?", "What is your return policy?", "How can I contact you?"],
      return_exchange: ["How do I contact you?", "What payment methods do you accept?"],
      payment_methods: ["Do you offer delivery?", "What is your return policy?"],
      business_timings: ["How can I contact you?", "Show me your products"]
    }[e] ?? a;
  }
  handleProfanityResponse() {
    return this.handleBasicsResponse("ABUSE_BOUNDARY");
  }
  handleFlirtResponse() {
    return this.handleBasicsResponse("PLAYFUL_BOUNDARY");
  }
  handleFrustrationResponse(e) {
    return this.handleBasicsResponse("FRUSTRATION");
  }
  handleMissingEvidenceFallback() {
    return this.handleBasicsResponse("UNCLEAR");
  }
  findMentionedProduct(e) {
    if (!this.kb.products || this.kb.products.length === 0) return;
    const a = e.toLowerCase();
    for (const i of this.kb.products)
      if (new RegExp(`\\b${i.sku.toLowerCase()}\\b`, "i").test(a))
        return i;
    const s = [...this.kb.products].sort((i, n) => n.name.length - i.name.length);
    for (const i of s) {
      const n = i.name.toLowerCase();
      if (a.includes(n))
        return i;
      if (i.brand) {
        const r = i.brand.toLowerCase();
        if (n.startsWith(r)) {
          const h = n.replace(r, "").trim();
          if (h.length >= 4 && a.includes(h))
            return i;
        }
      }
    }
  }
  hasFollowUpCue(e) {
    const a = e.toLowerCase();
    return xe(e) || Ee(e) ? !1 : !!(/\b(?:is(?:ki|ka|ke|me|mein)|us(?:ki|ka|ke|me|mein)|is\s+(?:ki|ka|ke|me|mein)|us\s+(?:ki|ka|ke|me|mein)|(?:yeh|ye|woh|wo)\s+wal[iea]|is\s+(?:it|this)|does\s+(?:it|this)|this\s+one|that\s+one|about\s+(?:this|it|that)|for\s+(?:this|it|that))\b/i.test(a) || /\b(?:price\??|rate\??|cost\??|qeemat\??|kitn[aeiay]\s+(?:ka|ki|mein)\??|kitn[aeiay]\s+hai\??|available\??|in\s+stock\??|specs\??|specifications?\??)\b/i.test(e.trim()) || this.extractOrdinalIndex(e, 10) !== null);
  }
  hasFaqTopicEvidence(e, a, s) {
    const i = `${e} ${a}`.toLowerCase(), n = s.tags ?? [];
    for (const c of n)
      if (c.length >= 3) {
        const u = c.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (new RegExp(`\\b${u}\\b`, "i").test(i))
          return !0;
      }
    const r = /* @__PURE__ */ new Set([
      "a",
      "an",
      "the",
      "is",
      "are",
      "was",
      "were",
      "do",
      "does",
      "did",
      "you",
      "your",
      "we",
      "our",
      "i",
      "me",
      "my",
      "in",
      "on",
      "at",
      "to",
      "for",
      "of",
      "with",
      "and",
      "or",
      "but",
      "how",
      "what",
      "where",
      "when",
      "why",
      "who",
      "can",
      "could",
      "would",
      "should",
      "will",
      "have",
      "has",
      "had",
      "please",
      "tell",
      "know",
      "about",
      "kya",
      "kia",
      "hai",
      "hain",
      "ho",
      "hy",
      "ko",
      "se",
      "ka",
      "ki",
      "ke",
      "me",
      "mein",
      "par",
      "per",
      "ye",
      "yeh",
      "wo",
      "woh",
      "hum",
      "hamari",
      "hamara",
      "aap",
      "ap",
      "aapka",
      "aapki",
      "mujh",
      "mujhe",
      "meri",
      "mera"
    ]), h = s.variations ?? [];
    for (const c of h) {
      const u = c.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((k) => k.length >= 3 && !r.has(k));
      for (const k of u) {
        const m = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (new RegExp(`\\b${m}\\b`, "i").test(i))
          return !0;
      }
    }
    const o = s.question.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((c) => c.length >= 4 && !r.has(c));
    for (const c of o) {
      const u = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (new RegExp(`\\b${u}\\b`, "i").test(i))
        return !0;
    }
    return !1;
  }
  hasPolicyIntentEvidence(e, a, s) {
    const i = `${e} ${a}`.toLowerCase();
    switch (s) {
      case "shipping_delivery":
        return /\b(?:shipping|delivery|deliver|ship|courier|tcs|leopard|leopards|dispatch|bhej|bhejna|pahunch|pahuncha|tracking|track|charges|post|daak)\b/i.test(i);
      case "payment_methods":
        return /\b(?:payment|pay|cod|cash|card|cards|bank|transfer|jazzcash|easypaisa|advance|online|adaigi|ada|paise\s+kaise)\b/i.test(i);
      case "return_exchange":
        return /\b(?:return|returns|exchange|wapsi|badal|tabdeel|replace|replacement|refund|defect|defective|damage|faulty|toota|warranty|waranty|guarantee)\b/i.test(i);
      case "repair_service":
        return /\b(?:repair|battery|strap|service|servicing|fix|maintenance|band\s+hogayi|theek\s+karn|cell|kharab)\b/i.test(i);
      case "business_timings":
        return /\b(?:timing|timings|hours|open|close|schedule|auqaat|waqt|khula|band|kholte|sunday|off|days)\b/i.test(i);
      case "contact_info":
        return /\b(?:contact|phone|number|email|address|location|store|shop|branch|dukan|kahan|kidhar|pata|whatsapp|call|rabta|raabta)\b/i.test(i);
      case "product_price":
        return /\b(?:price|cost|rate|qeemat|keemat|kitn[aeayi]\s+(?:ka|ki|hai|mein)|sale|discount|offer|deals?|paisa|paisay|paise|dam|daam|pkr|rs)\b/i.test(i);
      case "business_info":
        return /\b(?:about|who\s+are|what\s+is|store|company|business|brand|authentic|genuine|original|orignal|real|history)\b/i.test(i);
      default:
        return !0;
    }
  }
  getAvailableColors() {
    const e = /* @__PURE__ */ new Set();
    for (const a of this.kb.products ?? [])
      for (const s of a.colors ?? [])
        s && s.trim() && e.add(s.trim().toLowerCase());
    return Array.from(e);
  }
  getAvailableSizes() {
    const e = /* @__PURE__ */ new Set();
    for (const a of this.kb.products ?? [])
      for (const s of a.sizes ?? [])
        s && s.trim() && e.add(s.trim().toUpperCase());
    return Array.from(e);
  }
  hasBusinessTopicEvidence(e, a, s) {
    const i = e.toLowerCase(), n = a.normalized.toLowerCase();
    if (s.skus.length > 0 || /\b[a-z]{2,8}-\d{2,4}\b/i.test(e))
      return !0;
    if (/\b(?:price|cost|rate|qeemat|keemat|kitn[aeiay]|pkr|rs\.?|rupees?|rupay|discount|sale|offer|deals?|kharid|kharidna|buy|order|purchase|mangwana)\b/i.test(e) || /\b(?:price|cost|rate|qeemat|keemat|kitn[aeiay]|pkr|rs\.?|rupees?|rupay|discount|sale|offer|deals?|kharid|kharidna|buy|order|purchase|mangwana)\b/i.test(n))
      return !/\b\d+\s*(?:[\*\/\+\-]|guna|times|plus|minus|divide|divided\s+by)\s*\d+\b/i.test(e);
    if (/\b(?:delivery|deliver|shipping|ship|courier|tcs|leopards?|cod|cash\s+on\s+delivery|bhejo|bhejte|return|returns|exchange|wapsi|refund|replace|replacement|warranty|guarantee)\b/i.test(e) || /\b(?:delivery|deliver|shipping|ship|courier|tcs|leopards?|cod|cash\s+on\s+delivery|bhejo|bhejte|return|returns|exchange|wapsi|refund|replace|replacement|warranty|guarantee)\b/i.test(n))
      return !0;
    const r = this.getItemNoun(), h = this.getItemNounPlural(), o = new RegExp(
      `\\b(?:${r}|${h}|item|items|models?|pieces?|products?|collection|catalog|catalogue|stock|available|dastiyab)\\b`,
      "i"
    );
    return !!(o.test(e) || o.test(n) || this.findMentionedProduct(e) || Array.from(new Set((this.kb.products ?? []).map((u) => u.category.toLowerCase()))).some((u) => u.length >= 4 && (i.includes(u) || n.includes(u))));
  }
  getItemNoun() {
    const e = (this.kb.businessInfo.category ?? "").toLowerCase();
    return e.includes("watch") || e.includes("timepiece") || e.includes("horology") ? "watch" : e.includes("cloth") || e.includes("fashion") || e.includes("apparel") ? "clothing item" : e.includes("advisory") || e.includes("consult") || e.includes("legal") || e.includes("tax") || e.includes("service") ? "service" : "product";
  }
  getItemNounPlural() {
    const e = this.getItemNoun();
    return e === "watch" ? "watches" : e.endsWith("ch") || e.endsWith("sh") || e.endsWith("s") || e.endsWith("x") ? `${e}es` : `${e}s`;
  }
  getDefaultSuggestions() {
    const e = this.kb.faqs.slice(0, 3).map((a) => a.question);
    return e.length > 0 ? e : ["Show me your products", "What are your business hours?", "How can I contact you?"];
  }
}
function ta(t) {
  const a = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].filter((s) => t[s]).map((s) => `${s.charAt(0).toUpperCase() + s.slice(1)}: ${t[s]}`);
  return t.note && a.push(`
_${t.note}_`), a.join(`
`);
}
class ia {
  constructor(e, a = {}) {
    this.name = "FuseBasicEngine", this.kb = e, this.router = new Pe(e, a);
  }
  async sendMessage(e, a) {
    const s = ((a == null ? void 0 : a.messages) ?? []).slice(-6).map((r) => r.text), i = this.router.route(e, s), n = typeof process < "u" && (process.env.NODE_ENV === "test" || process.env.VITEST) ? 0 : 20 + Math.floor(Math.random() * 40);
    return n > 0 && await new Promise((r) => setTimeout(r, n)), {
      text: i.text,
      suggestedQuestions: i.suggestedQuestions,
      isMock: !1,
      timestamp: Date.now()
    };
  }
  /** Replace the knowledge base at runtime (e.g., after Phase 3 data loads) */
  updateKnowledgeBase(e, a = {}) {
    this.kb = e, this.router = new Pe(e, a);
  }
  /** Explicitly reset session memory state */
  resetSession() {
    this.router.resetSession();
  }
  /** Read-only access to the loaded knowledge base label */
  get knowledgeBaseLabel() {
    return this.kb.label ?? this.kb.businessInfo.name;
  }
}
const na = {
  label: "Sample Watch Store",
  locale: "en-ur",
  businessInfo: {
    name: "CrownTime Watches",
    description: "Premium watch retailer offering luxury, classic and sport timepieces for every occasion.",
    location: "Lahore, Pakistan",
    address: "Shop 12, Liberty Market, Lahore",
    phone: "+92 300 1234567",
    email: "info@crowntime.example.com",
    website: "https://crowntime.example.com",
    hours: {
      monday: "10:00 AM – 8:00 PM",
      tuesday: "10:00 AM – 8:00 PM",
      wednesday: "10:00 AM – 8:00 PM",
      thursday: "10:00 AM – 8:00 PM",
      friday: "2:00 PM – 9:00 PM",
      saturday: "10:00 AM – 9:00 PM",
      sunday: "Closed",
      note: "Hours may vary on public holidays."
    }
  },
  products: [
    {
      sku: "CW-001",
      name: "CrownTime Classic Steel",
      category: "watch",
      brand: "CrownTime",
      description: "Stainless steel case with sapphire crystal glass and automatic movement.",
      price: 25e3,
      currency: "PKR",
      inStock: !0,
      colors: ["silver", "gold", "black"],
      attributes: { movement: "automatic", strap: "leather", waterResistance: "50m", dial: "analog" }
    },
    {
      sku: "CW-002",
      name: "CrownTime Sport Diver",
      category: "watch",
      brand: "CrownTime",
      description: "Professional sport diver watch with rubber strap and 200m water resistance.",
      price: 18500,
      currency: "PKR",
      inStock: !0,
      colors: ["black", "blue", "orange"],
      attributes: { movement: "quartz", strap: "rubber", waterResistance: "200m", dial: "digital" }
    },
    {
      sku: "CW-003",
      name: "CrownTime Rose Gold Slim",
      category: "watch",
      brand: "CrownTime",
      description: "Ultra-slim rose gold plated watch for formal occasions.",
      price: 32e3,
      currency: "PKR",
      inStock: !0,
      colors: ["rose gold", "silver"],
      attributes: { movement: "quartz", strap: "leather", thickness: "6mm", dial: "analog" }
    },
    {
      sku: "CW-004",
      name: "CrownTime Smartwatch Pro",
      category: "watch",
      brand: "CrownTime",
      description: "Smart hybrid watch with fitness tracking, notifications and 7-day battery.",
      price: 45e3,
      currency: "PKR",
      inStock: !1,
      colors: ["black", "silver", "navy"],
      attributes: { movement: "smart", strap: "silicone", battery: "7 days", dial: "digital" }
    },
    {
      sku: "CW-005",
      name: "CrownTime Heritage Bronze",
      category: "watch",
      brand: "CrownTime",
      description: "Vintage-inspired bronze case mechanical watch with premium leather strap.",
      price: 55e3,
      currency: "PKR",
      inStock: !0,
      colors: ["bronze", "brown"],
      attributes: { movement: "mechanical", strap: "leather", waterResistance: "30m", dial: "analog" }
    },
    {
      sku: "CW-006",
      name: "CrownTime Budget Quartz",
      category: "watch",
      brand: "CrownTime",
      description: "Everyday quartz watch, durable and affordable.",
      price: 8500,
      currency: "PKR",
      inStock: !0,
      colors: ["black", "white", "blue"],
      attributes: { movement: "quartz", strap: "leather", dial: "analog" }
    }
  ],
  faqs: [
    {
      id: "faq-wh-01",
      question: "What are your business hours?",
      variations: ["When are you open?", "Opening hours", "Timing kya hai", "Kab khulta hai"],
      answer: `🕐 **CrownTime Business Hours:**

Mon–Thu: 10:00 AM – 8:00 PM
Fri: 2:00 PM – 9:00 PM (after Jumu'ah)
Sat: 10:00 AM – 9:00 PM
Sun: Closed

_Hours may vary on public holidays._`,
      tags: ["hours", "timing", "schedule", "open"],
      suggestedFollowUps: ["How can I contact you?", "Where are you located?", "Show me your watches"]
    },
    {
      id: "faq-wh-02",
      question: "What payment methods do you accept?",
      variations: ["How can I pay?", "Do you accept card?", "COD available?", "Payment kaise karein", "Cash on delivery available hai?"],
      answer: `💳 **Payment Methods:**

✅ Cash on Delivery (COD)
✅ JazzCash
✅ EasyPaisa
✅ Bank Transfer
✅ Credit/Debit Cards (Visa, Mastercard)
✅ Installments available on orders above PKR 20,000

_COD available across Pakistan._`,
      tags: ["payment", "cod", "cash", "card", "jazzcash", "easypaisa"],
      suggestedFollowUps: ["Do you offer delivery?", "What is your return policy?"]
    },
    {
      id: "faq-wh-03",
      question: "What is your delivery policy?",
      variations: ["How long does delivery take?", "Delivery kab hogi?", "Free delivery hai?", "Shipping charges"],
      answer: `🚚 **Delivery Information:**

• Lahore: Same-day delivery (order before 2 PM)
• Major Cities: 1–2 business days
• Other Areas: 3–5 business days

**Charges:**
• FREE delivery on orders above PKR 15,000
• PKR 200 for orders below PKR 15,000

_We use TCS and Leopards Courier._`,
      tags: ["delivery", "shipping", "dispatch", "courier", "free delivery"],
      suggestedFollowUps: ["What payment methods do you accept?", "What is your return policy?"]
    },
    {
      id: "faq-wh-04",
      question: "What is your return and exchange policy?",
      variations: ["Can I return?", "Exchange policy", "Wapas kar sakta hoon?", "Refund policy", "Warranty"],
      answer: `🔄 **Return & Exchange Policy:**

• 7-day return window for unused items in original packaging
• Exchange available for size/color within 14 days
• Manufacturer defects covered under warranty
• COD orders: return picked up free of charge
• Prepaid orders: return shipping deducted from refund

_Contact us within the return window to initiate a return._`,
      tags: ["return", "exchange", "refund", "warranty", "policy"],
      suggestedFollowUps: ["How do I contact you?", "What payment methods do you accept?"]
    },
    {
      id: "faq-wh-05",
      question: "Are your watches genuine?",
      variations: ["Original hai?", "Authentic watches", "Fake nahi hain?", "Real watches?"],
      answer: `✅ **100% Genuine Products**

All watches sold by CrownTime are 100% authentic. We source directly from authorized distributors and provide authenticity certificates with every purchase.

_For premium watches above PKR 30,000, we include an official warranty card._`,
      tags: ["authentic", "genuine", "original", "real"],
      suggestedFollowUps: ["What is your return policy?", "Show me your watches"]
    },
    {
      id: "faq-wh-06",
      question: "How can I contact you?",
      variations: ["Phone number kya hai?", "WhatsApp number", "Email address", "Contact info"],
      answer: `📞 **Contact CrownTime:**

📱 WhatsApp: +92 300 1234567
📧 Email: info@crowntime.example.com
📍 Address: Shop 12, Liberty Market, Lahore
🌐 Website: crowntime.example.com

_We typically respond within 1 business hour during working hours._`,
      tags: ["contact", "phone", "email", "address", "whatsapp"],
      suggestedFollowUps: ["What are your business hours?", "Do you offer delivery?"]
    },
    {
      id: "faq-wh-07",
      question: "Do you offer gift wrapping?",
      variations: ["Gift wrap available?", "Gift packaging", "Toh hai for gift?"],
      answer: `🎁 **Gift Wrapping:**

Yes! We offer complimentary gift wrapping on all orders. Just mention "Gift" in the order notes.

For premium gift boxes, we charge PKR 500 extra (includes ribbon and greeting card).`,
      tags: ["gift", "wrap", "packaging"],
      suggestedFollowUps: ["How do I place an order?", "What is your return policy?"]
    },
    {
      id: "faq-wh-08",
      question: "Do you repair watches?",
      variations: ["Watch repair service?", "Battery replace?", "Repair karte ho?", "Service center"],
      answer: `🔧 **Watch Repair & Servicing:**

Yes, we offer watch repair and battery replacement services at our Liberty Market store.

• Battery replacement: PKR 500–1,500 (depending on type)
• Strap replacement: PKR 1,000–5,000
• General servicing: Quote provided after inspection

_Bring your watch to our shop or contact us on WhatsApp._`,
      tags: ["repair", "service", "battery", "strap"],
      suggestedFollowUps: ["How can I contact you?", "What are your business hours?"]
    }
  ]
}, ra = {
  label: "Sample Clothing Store",
  locale: "en-ur",
  businessInfo: {
    name: "StyleVault Fashion",
    description: "Contemporary Pakistani fashion brand offering men's and women's ready-to-wear clothing.",
    location: "Karachi, Pakistan",
    address: "Main Shahrah-e-Faisal, Karachi",
    phone: "+92 321 9876543",
    email: "hello@stylevault.example.com",
    website: "https://stylevault.example.com",
    hours: "Mon–Sat: 11:00 AM – 9:00 PM | Sunday: 12:00 PM – 7:00 PM"
  },
  products: [
    {
      sku: "SV-M-001",
      name: "Classic Oxford Shirt",
      category: "shirt",
      brand: "StyleVault",
      description: "Premium cotton Oxford weave shirt, slim fit, button-down collar.",
      price: 3200,
      currency: "PKR",
      inStock: !0,
      colors: ["white", "blue", "black", "gray"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      material: "Cotton",
      attributes: { fit: "slim", occasion: "formal/casual", care: "machine washable" }
    },
    {
      sku: "SV-M-002",
      name: "Chino Trousers",
      category: "pants",
      brand: "StyleVault",
      description: "Stretch chino trousers with a modern fit — perfect for office and casual wear.",
      price: 2800,
      currency: "PKR",
      inStock: !0,
      colors: ["beige", "navy", "gray", "black", "khaki"],
      sizes: ["28", "30", "32", "34", "36", "38"],
      material: "Cotton-Spandex blend",
      attributes: { fit: "regular", occasion: "casual/office" }
    },
    {
      sku: "SV-W-001",
      name: "Embroidered Lawn Kurti",
      category: "dress",
      brand: "StyleVault",
      description: "Hand-embroidered lawn kurti, breathable fabric, perfect for summer.",
      price: 2500,
      currency: "PKR",
      inStock: !0,
      colors: ["white", "pink", "peach", "mint"],
      sizes: ["XS", "S", "M", "L", "XL"],
      material: "Lawn",
      attributes: { sleeve: "half", occasion: "casual", embroidery: "hand done" }
    },
    {
      sku: "SV-W-002",
      name: "Formal Pret Suit",
      category: "dress",
      brand: "StyleVault",
      description: "Two-piece formal suit with printed dupatta, ideal for eid and occasions.",
      price: 6500,
      currency: "PKR",
      inStock: !0,
      colors: ["maroon", "navy", "black", "emerald"],
      sizes: ["S", "M", "L", "XL"],
      material: "Karandi",
      attributes: { pieces: 2, occasion: "formal/eid", dupatta: "included" }
    },
    {
      sku: "SV-M-003",
      name: "Denim Jacket",
      category: "jacket",
      brand: "StyleVault",
      description: "Classic denim jacket with chest pockets, unisex fit.",
      price: 4500,
      currency: "PKR",
      inStock: !1,
      colors: ["blue", "black", "light blue"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      material: "Denim",
      attributes: { fit: "regular", style: "casual" }
    },
    {
      sku: "SV-ACC-001",
      name: "Cotton Socks Pack (5 Pairs)",
      category: "accessories",
      brand: "StyleVault",
      description: "Premium cotton ankle socks, 5-pair multicolor pack.",
      price: 650,
      currency: "PKR",
      inStock: !0,
      colors: ["mixed", "white", "black"],
      sizes: ["One Size"],
      material: "Cotton",
      attributes: { quantity: 5 }
    }
  ],
  faqs: [
    {
      id: "faq-cl-01",
      question: "What are your business hours?",
      variations: ["When are you open?", "Opening hours", "Timing kya hai", "Kab khulte ho"],
      answer: `🕐 **StyleVault Business Hours:**

Mon–Sat: 11:00 AM – 9:00 PM
Sunday: 12:00 PM – 7:00 PM

_Online orders accepted 24/7._`,
      tags: ["hours", "timing", "schedule", "open"],
      suggestedFollowUps: ["How can I contact you?", "Show me your products", "Do you offer delivery?"]
    },
    {
      id: "faq-cl-02",
      question: "What payment methods do you accept?",
      variations: ["How to pay?", "COD available?", "Card payment?", "Jazzcash?"],
      answer: `💳 **Payment Options:**

✅ Cash on Delivery (all cities)
✅ JazzCash
✅ EasyPaisa
✅ Card payments (Visa/Mastercard)
✅ Bank transfer (IBAN)

_COD is free — no extra charges._`,
      tags: ["payment", "cod", "cash", "card", "jazzcash", "easypaisa"],
      suggestedFollowUps: ["Do you offer delivery?", "What is your return policy?"]
    },
    {
      id: "faq-cl-03",
      question: "What is your delivery policy?",
      variations: ["Delivery kitne din mein?", "Shipping charges?", "Free delivery?", "How fast is delivery?"],
      answer: `📦 **Delivery Policy:**

• Karachi: Same day / next day delivery
• Lahore, Islamabad, Faisalabad: 1–2 business days
• All other cities: 2–4 business days

**Charges:**
• FREE on orders above PKR 3,000
• PKR 150 flat for orders below PKR 3,000

_We ship via CallCourier and TCS._`,
      tags: ["delivery", "shipping", "dispatch", "courier", "free delivery"],
      suggestedFollowUps: ["What is your return policy?", "What payment methods do you accept?"]
    },
    {
      id: "faq-cl-04",
      question: "What is your return and exchange policy?",
      variations: ["Return policy?", "Can I exchange?", "Wapas kar sakta hoon?", "Size wrong hai?"],
      answer: `🔄 **Returns & Exchanges:**

• Exchange within 7 days if size does not fit
• Returns accepted within 7 days (unused, tags intact)
• Sale items are non-returnable
• Contact us via WhatsApp to initiate return

_We cover return courier charges for defective items._`,
      tags: ["return", "exchange", "refund", "policy", "size"],
      suggestedFollowUps: ["How do I contact you?", "What sizes are available?"]
    },
    {
      id: "faq-cl-05",
      question: "What sizes do you offer?",
      variations: ["Size chart?", "What sizes available?", "Size guide", "Do you have XL?"],
      answer: `📏 **Size Guide:**

Men's Tops & Bottoms: S, M, L, XL, XXL
Women's Clothing: XS, S, M, L, XL
Trousers (waist): 28–38 inches

_For exact measurements, check our size chart on the website or contact us._`,
      tags: ["size", "sizes", "chart", "measurements"],
      suggestedFollowUps: ["Show me your shirts", "What is your return policy?"]
    },
    {
      id: "faq-cl-06",
      question: "How can I contact you?",
      variations: ["WhatsApp number?", "Phone number?", "Contact info"],
      answer: `📞 **Contact StyleVault:**

📱 WhatsApp: +92 321 9876543
📧 Email: hello@stylevault.example.com
📍 Main Shahrah-e-Faisal, Karachi
🌐 stylevault.example.com`,
      tags: ["contact", "phone", "email", "address", "whatsapp"],
      suggestedFollowUps: ["What are your business hours?", "Do you offer delivery?"]
    },
    {
      id: "faq-cl-07",
      question: "Do you have a physical store?",
      variations: ["Shop kahan hai?", "Walk in?", "Visit your store?", "Physical location"],
      answer: `🏪 **Physical Store:**

Yes! Visit us at:

📍 Main Shahrah-e-Faisal, Karachi
🕐 Mon–Sat: 11 AM – 9 PM | Sunday: 12 PM – 7 PM

_Online orders are also available 24/7 on our website._`,
      tags: ["store", "location", "address", "physical", "visit"],
      suggestedFollowUps: ["What are your hours?", "Show me your products"]
    },
    {
      id: "faq-cl-08",
      question: "Are your fabrics genuine and high quality?",
      variations: ["Fabric quality?", "Original fabric?", "Cotton hai?", "Quality kaisi hai?"],
      answer: `✅ **Quality Assurance:**

All StyleVault products use genuine fabrics — cotton, lawn, karandi, and denim from trusted Pakistani mills. Every piece undergoes quality checks before shipping.

_If you receive a defective item, contact us immediately for a replacement._`,
      tags: ["quality", "fabric", "genuine", "authentic"],
      suggestedFollowUps: ["What is your return policy?", "Show me your products"]
    }
  ]
}, oa = {
  label: "Generic Business FAQ",
  locale: "en",
  businessInfo: {
    name: "YourBusiness",
    description: "A sample business for testing generic FAQ responses.",
    location: "Pakistan",
    phone: "+92 300 0000000",
    email: "info@yourbusiness.example.com",
    website: "https://yourbusiness.example.com",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM | Sunday: Closed"
  },
  products: [],
  faqs: [
    {
      id: "faq-gen-01",
      question: "What are your business hours?",
      variations: ["When are you open?", "Opening hours", "Working hours"],
      answer: `🕐 **Business Hours:**

Mon–Sat: 9:00 AM – 6:00 PM
Sunday: Closed

_Contact us for holiday hours._`,
      tags: ["hours", "timing", "schedule", "open"],
      suggestedFollowUps: ["How can I contact you?", "Where are you located?"]
    },
    {
      id: "faq-gen-02",
      question: "How can I contact you?",
      variations: ["Phone number?", "Email address?", "Contact info"],
      answer: `📞 **Contact Us:**

📱 Phone: +92 300 0000000
📧 Email: info@yourbusiness.example.com
🌐 Website: yourbusiness.example.com`,
      tags: ["contact", "phone", "email", "address"],
      suggestedFollowUps: ["What are your hours?"]
    },
    {
      id: "faq-gen-03",
      question: "What services do you offer?",
      variations: ["What do you sell?", "Products available?", "Services?"],
      answer: "We offer a range of products and services tailored to your needs. Please browse our website or contact us directly for a complete overview of what we can offer you.",
      tags: ["services", "products", "offer"],
      suggestedFollowUps: ["How can I contact you?", "What are your business hours?"]
    },
    {
      id: "faq-gen-04",
      question: "Do you offer delivery?",
      variations: ["Delivery available?", "Do you ship?", "Delivery karte ho?"],
      answer: "🚚 We offer delivery across Pakistan. Please contact us for specific timelines and charges for your area.",
      tags: ["delivery", "shipping"],
      suggestedFollowUps: ["What payment methods do you accept?", "How can I contact you?"]
    },
    {
      id: "faq-gen-05",
      question: "What payment methods do you accept?",
      variations: ["How to pay?", "COD?", "Payment options?"],
      answer: "💳 We accept Cash on Delivery (COD), JazzCash, EasyPaisa, and bank transfer. Contact us for details.",
      tags: ["payment", "cod", "cash", "card"],
      suggestedFollowUps: ["Do you offer delivery?", "What is your return policy?"]
    },
    {
      id: "faq-gen-06",
      question: "What is your return policy?",
      variations: ["Can I return?", "Exchange policy?", "Refund?"],
      answer: "🔄 We accept returns and exchanges within 7 days of purchase for unused items. Contact us to initiate a return.",
      tags: ["return", "exchange", "refund", "policy"],
      suggestedFollowUps: ["How can I contact you?"]
    }
  ]
};
export {
  Oe as ABBREVIATION_MAP,
  ra as CLOTHING_STORE_KB,
  Me as DEFAULT_ENGINE_CONFIG,
  Ce as FALLBACK_TEMPLATES,
  ia as FuseBasicEngineAdapter,
  de as FuseSearchEngine,
  oa as GENERIC_BUSINESS_KB,
  zt as INTENT_EXAMPLES,
  _e as INTENT_RULES,
  jt as IntentClassifier,
  Pe as ResponseRouter,
  aa as STOP_WORDS,
  Be as SYNONYM_MAP,
  na as WATCH_STORE_KB,
  Rt as createFAQSearchEngine,
  Lt as createIntentSearchEngine,
  sa as createProductSearchEngine,
  qe as extractPriceBounds,
  Z as filterProducts,
  Ae as formatProductList,
  J as formatProductSummary,
  Se as getRandomFallback,
  O as normalize,
  X as parseProductQuery
};
