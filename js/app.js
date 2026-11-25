/**
 * ORVÉL — Fine Timepieces
 * Application Coordinator & Dynamic Watch Catalog Engine
 * Designed & Engineered for MalikAxiom Technology
 */

import { boutiqueConfig } from './config.js?v=20261125insta';
import { store } from './store.js?v=20261125scrollfix3';
import { ui } from './ui.js?v=20261125scrollfix3';
import { motion } from './animations.js?v=20261125scrollfix3';
import { concierge } from './concierge.js?v=20261125chatcards2';
import {
  processBasicQuery,
  resetBridgeSession,
  clearBridgeContext,
  syncBridgeConfig,
} from './basic-concierge-bridge.js?v=20261111basic';

if (typeof window !== 'undefined') {
  window.ORVEL_V3_PROCESS = processBasicQuery;
  window.ORVEL_V3_RESET = resetBridgeSession;
  window.ORVEL_V3_CLEAR_CONTEXT = clearBridgeContext;
  window.ORVEL_V3_SYNC_CONFIG = syncBridgeConfig;
  window.ORVEL_V3_SET_KB = () => { };
  window.playTickSound = () => { };
  window.playMechanicalTick = () => { };
}
export function playTickSound() { return; }
export function playMechanicalTick() { return; }

class OrvelApp {
  constructor() {
    this.activeCollection = 'all';
    this.activeMovement = 'all';
    this.activeStrap = 'all';
    this.activeSort = 'featured';
    this.activeCaseSize = 'all';
    this.userSelectedFitSize = null;
    this.activeFitSize = '40mm';
    this.isCatalogExpanded = false;
    this.catalogCurrentPage = 1;
    this.catalogPageSize = 8;
    this.brandName = boutiqueConfig.brand.name;
  }

  init() {
    const safeRun = (fn, name) => {
      try {
        fn.call(this);
      } catch (e) {
        console.warn(`[OrvelApp] Error in ${name}:`, e);
      }
    };

    safeRun(this.handleUrlCustomization, 'handleUrlCustomization');
    safeRun(this.renderHeroSlides, 'renderHeroSlides');
    safeRun(this.renderBentoCollections, 'renderBentoCollections');
    safeRun(this.renderCatalogProducts, 'renderCatalogProducts');
    safeRun(this.renderCollectorPerspectives, 'renderCollectorPerspectives');
    safeRun(this.renderInstagramGallery, 'renderInstagramGallery');
    safeRun(this.initFinalCta, 'initFinalCta');
    safeRun(this.renderMarquee, 'renderMarquee');
    safeRun(this.renderJournal, 'renderJournal');
    safeRun(this.renderFaqs, 'renderFaqs');
    safeRun(this.bindFilterControls, 'bindFilterControls');
    safeRun(this.initPolicyModal, 'initPolicyModal');

    // Launch UI, Motion and AI Concierge Subsystems
    try { ui.init(); } catch (e) { console.warn('[OrvelApp] ui.init error:', e); }
    try { motion.init(); } catch (e) { console.warn('[OrvelApp] motion.init error:', e); }
    try { concierge.init(); } catch (e) { console.warn('[OrvelApp] concierge.init error:', e); }

    // Secondary post-render deep sweep to catch all freshly injected template nodes
    if (this.brandName && this.brandName !== 'ORVÉL') {
      this.deepTextSweep(this.brandName);
    }
  }

  initPolicyModal() {
    const modal = document.getElementById('policy-modal');
    const closeBtn = document.getElementById('policy-modal-close');
    const titleEl = document.getElementById('policy-modal-title');
    const bodyEl = document.getElementById('policy-modal-body');
    const triggers = document.querySelectorAll('.footer-policy-btn[data-policy]');
    if (!modal || !titleEl || !bodyEl || !triggers.length) return;

    const POLICIES = {
      shipping: {
        title: 'Shipping & Cash on Delivery (COD)',
        html: `
          <p><strong>Nationwide Coverage:</strong> We deliver across all cities and towns in Pakistan via trusted courier partners (TCS, Leopards, and PostEx).</p>
          <ul>
            <li><strong>100% Cash on Delivery (COD):</strong> Pay in cash at your doorstep upon delivery. Bank transfer, JazzCash, and EasyPaisa are also available on request.</li>
            <li><strong>Delivery Time:</strong> 2–4 working days for major cities (Lahore, Karachi, Islamabad/Rawalpindi) and 4–6 working days nationwide.</li>
            <li><strong>Protective Packaging:</strong> Every timepiece is dispatched in a protective presentation box with dispatch confirmation sent via WhatsApp.</li>
          </ul>
        `
      },
      warranty: {
        title: 'Warranty & Returns',
        html: `
          <p><strong>Quality & Movement Check:</strong> Every Mix Inventories timepiece undergoes a strict pre-dispatch movement and finishing inspection before shipping.</p>
          <ul>
            <li><strong>7-Day Easy Return or Exchange:</strong> Hassle-free return or exchange within 7 days for unused watches in original packaging if damaged in transit or if an incorrect model is received.</li>
            <li><strong>Quick WhatsApp Support:</strong> Share your order details and a short unboxing video on WhatsApp (<strong>+92 328 4037431</strong>) for fast resolution.</li>
          </ul>
        `
      },
      privacy: {
        title: 'Privacy Policy',
        html: `
          <p><strong>Respecting Your Privacy:</strong> Mix Inventories collects only the essential customer details needed to process and deliver your order.</p>
          <ul>
            <li><strong>Information Collected:</strong> Your name, phone number, and shipping address are used solely for order confirmation, courier dispatch, and customer support.</li>
            <li><strong>Zero Third-Party Sharing:</strong> Your personal details are never sold, rented, or shared with unrelated third parties.</li>
          </ul>
        `
      },
      terms: {
        title: 'Terms of Service',
        html: `
          <p><strong>Ordering & Pricing:</strong> By placing an order with Mix Inventories, you agree to the following store terms:</p>
          <ul>
            <li><strong>Currency:</strong> All timepiece prices are listed in Pakistani Rupees (PKR).</li>
            <li><strong>Order Confirmation:</strong> Orders placed via the website or WhatsApp are confirmed via WhatsApp/phone prior to dispatch.</li>
            <li><strong>Availability & Photography:</strong> All items are subject to stock availability; minor studio lighting or screen variations may slightly affect perceived dial/metal tones.</li>
          </ul>
        `
      }
    };

    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      if (ui && ui.unlockBodyScroll) ui.unlockBodyScroll();
    };

    const openModal = (key) => {
      const data = POLICIES[key];
      if (!data) return;
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.html;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      if (ui && ui.lockBodyScroll) ui.lockBodyScroll();
    };

    triggers.forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.dataset.policy));
    });

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  /**
   * Post-render DOM text node sweep replacing any leftover ORVÉL instances
   */
  deepTextSweep(brand) {
    try {
      const upperBrand = String(brand || 'MIX INVENTORIES').toUpperCase();
      document.querySelectorAll('[data-brand-name]').forEach(el => {
        if (el.textContent.trim() !== upperBrand) {
          el.textContent = upperBrand;
        }
      });
      document.querySelectorAll('.preloader-monogram .brand-letters, .footer-hero-brand').forEach(el => {
        if (el.textContent.trim() !== upperBrand) {
          el.textContent = upperBrand;
        }
      });
      // Fast, targeted leaf-level text updates
      const candidates = document.querySelectorAll('h1, h2, h3, h4, h5, p, span.accent, span.text-serif, .faq-question, .faq-answer, .review-model, .product-card-title, .cart-item-title');
      candidates.forEach(el => {
        if (el.children.length === 0 && el.textContent) {
          if (el.textContent.includes('ORVÉL') || el.textContent.includes('Orvel')) {
            el.textContent = el.textContent.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
          }
        }
      });
    } catch (_) { }
  }

  /**
   * Safely customize brand name via URL param `?brand=XYZ` without unsafe innerHTML
   */
  handleUrlCustomization() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const customBrand = urlParams.get('brand') || urlParams.get('name') || urlParams.get('store') || urlParams.get('b');
      if (customBrand && customBrand.trim().length > 0) {
        const brand = customBrand.trim().substring(0, 40);
        this.brandName = brand;
        boutiqueConfig.brand.name = brand;

        if (boutiqueConfig.heroSection && boutiqueConfig.heroSection.tag) {
          boutiqueConfig.heroSection.tag = `${brand.toUpperCase()} — FINE TIMEPIECES`;
        }

        if (Array.isArray(boutiqueConfig.products)) {
          boutiqueConfig.products.forEach(p => {
            if (p.name) p.name = p.name.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
            if (p.description) p.description = p.description.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
          });
        }

        if (Array.isArray(boutiqueConfig.reviews)) {
          boutiqueConfig.reviews.forEach(r => {
            if (r.model) r.model = r.model.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
          });
        }

        if (Array.isArray(boutiqueConfig.faqs)) {
          boutiqueConfig.faqs.forEach(f => {
            if (f.question) f.question = f.question.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
            if (f.answer) f.answer = f.answer.replace(/ORVÉL/g, brand).replace(/Orvel/g, brand);
          });
        }

        document.title = `${brand} — Fine Timepieces | Curated Luxury Flagship`;

        // Update all elements with data-brand-name
        document.querySelectorAll('[data-brand-name]').forEach(el => {
          el.textContent = brand;
        });

        // Update site logo
        const mixPart = document.querySelector('.logo-word-mix');
        const invPart = document.querySelector('.logo-word-inv');
        if (mixPart && invPart) {
          const parts = String(brand || 'MIX INVENTORIES').trim().split(/\s+/);
          mixPart.textContent = parts[0] || 'MIX';
          invPart.textContent = parts.slice(1).join(' ') || 'INVENTORIES';
        }

        // Update preloader monogram brand letters
        document.querySelectorAll('.preloader-monogram .brand-letters').forEach(el => {
          el.textContent = brand;
        });

        // Update footer hero brand watermark
        document.querySelectorAll('.footer-hero-brand').forEach(el => {
          el.textContent = brand;
        });

        // Update Concierge titles & teaser
        const cTitle = document.getElementById('concierge-title');
        if (cTitle) cTitle.textContent = `${brand.toUpperCase()} CONCIERGE`;
        const cTeaser = document.querySelector('.teaser-brand-name');
        if (cTeaser) cTeaser.textContent = `${brand.toUpperCase()} CONCIERGE`;

        // Update SVG watch dial watermark if present
        document.querySelectorAll('svg text').forEach(t => {
          if (t.textContent && t.textContent.includes('ORVÉL')) {
            t.textContent = brand;
          }
        });

        // Deep Text Replacement across existing HTML
        this.deepTextSweep(brand);
      }

      const customCurr = urlParams.get('currency') || urlParams.get('curr');
      if (customCurr && customCurr.trim()) {
        boutiqueConfig.shopping.currencySymbol = customCurr.trim();
      }

      const customCity = urlParams.get('city') || urlParams.get('location');
      if (customCity && customCity.trim()) {
        boutiqueConfig.contact.address = `${customCity.trim()}`;
      }

      const customPhone = urlParams.get('phone') || urlParams.get('whatsapp') || urlParams.get('wa');
      if (customPhone && customPhone.trim()) {
        const cleanP = customPhone.replace(/[^0-9]/g, '');
        if (cleanP.length >= 7) {
          boutiqueConfig.contact.whatsappNumber = cleanP;
          boutiqueConfig.contact.whatsappDisplay = '+' + cleanP;
        }
      }

      syncBridgeConfig().catch(() => { });
    } catch (e) {
      console.warn('URL branding notice:', e);
    }
  }

  /**
   * 03. Watch Hero Slides
   */
  renderHeroSlides() {
    const slider = document.getElementById('hero-slider');
    const pagination = document.getElementById('hero-pagination');
    if (!slider || !pagination) return;

    slider.innerHTML = boutiqueConfig.heroSlides.map((slide, idx) => `
      <div class="hero-slide ${idx === 0 ? 'is-active' : ''}" data-slide-id="${slide.id}">
        <div class="hero-slide-bg">
          <!-- Layer 1: Background Motion Carrier (receives GSAP pointer parallax without clashing with Ken Burns) -->
          <div class="hero-bg-motion-wrap">
            ${(slide.videoWebm || slide.videoMp4) ? `
            <video class="hero-bg-video" 
                   autoplay 
                   muted 
                   loop 
                   playsinline 
                   preload="${idx === 0 ? 'auto' : 'none'}" 
                   poster="${slide.bgImage}">
              ${slide.videoWebm ? `<source src="${slide.videoWebm}" type="video/webm">` : ''}
              ${slide.videoMp4 ? `<source src="${slide.videoMp4}" type="video/mp4">` : ''}
            </video>
            ` : ''}
            ${slide.bgImage ? `
            <img class="hero-bg-photo" 
                 src="${slide.bgImage}" 
                 data-remote-src="${slide.remoteImage || ''}"
                 alt="${slide.headingLine1} ${slide.headingLine2} Visual" 
                 loading="${idx === 0 ? 'eager' : 'lazy'}"
                 decoding="async"
                 ${idx === 0 ? 'fetchpriority="high"' : ''}
                 onerror="if(this.dataset.remoteSrc && this.src !== this.dataset.remoteSrc){ this.src = this.dataset.remoteSrc; }">
            ` : ''}
          </div>

          <!-- Layer 2: Atmospheric Luxury Gold Lighting Carrier (independent parallax sheen) -->
          <div class="hero-light-motion-wrap">
            <div class="hero-light-sweep"></div>
            <div class="hero-ambient-spotlight"></div>
          </div>

          <!-- Layer 3: Protective Vignette & Editorial Gradients -->
          <div class="hero-bg-overlay"></div>
        </div>
        <div class="container hero-slide-content">
          <div class="hero-grid ${(slide.watchExploded3D || slide.watchImage) ? 'has-watch-showcase' : 'is-editorial-layout'}">
            <div class="hero-text-block">
              <span class="hero-tag">${slide.tag}</span>
              <div class="hero-accent-rule"></div>
              <h1 class="hero-title">
                <span class="orvel-title-line-1">TIME,</span>
                <em class="orvel-title-line-2">Redefined.</em>
              </h1>
              <p class="hero-subtext">${slide.subtext}</p>
              <div class="hero-actions">
                <a href="${slide.cta1Link || slide.ctaLink}" class="btn btn-primary" ${slide.cta1Target ? `target="${slide.cta1Target}" rel="noopener noreferrer"` : ''} ${slide.cta1Filter ? `data-filter="${slide.cta1Filter}"` : ''}>
                  <span>${slide.cta1Text || slide.ctaText}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="${slide.cta2Link || '#bento-collections'}" class="btn btn-primary hero-cta-secondary" ${slide.cta2Target ? `target="${slide.cta2Target}" rel="noopener noreferrer"` : ''} ${slide.cta2Filter ? `data-filter="${slide.cta2Filter}"` : ''}>
                  ${(slide.cta2Text === 'Order via WhatsApp' || slide.cta2Text === 'Contact Concierge') ? `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right:0.4rem; color:#25D366; vertical-align:middle;">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.07 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z"/>
                    </svg>
                  ` : ''}
                  <span>${slide.cta2Text || 'View Best Sellers'}</span>
                </a>
              </div>
            </div>

            <!-- Right-Side Watch Showcase (Exploded 3D Original Watch OR Static Image) -->
            ${slide.watchExploded3D ? renderOrvelExplodedWatchMarkup() : (slide.watchImage ? `
            <div class="hero-watch-wrap">
              <div class="hero-watch-aura"></div>
              <div class="hero-watch-img-container">
                <img class="hero-watch-img" src="${slide.watchImage}" alt="${slide.headingLine1} ${slide.headingLine2} - Patek Philippe Nautilus" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async" ${idx === 0 ? 'fetchpriority="high"' : ''}>
              </div>
            </div>
            ` : '')}
          </div>
        </div>
      </div>
    `).join('');

    pagination.innerHTML = boutiqueConfig.heroSlides.map((slide, idx) => `
      <div class="hero-bullet ${idx === 0 ? 'is-active' : ''}" data-bullet-idx="${idx}">
        <span class="hero-bullet-number">0${idx + 1}</span>
        <div class="hero-bullet-bar"></div>
      </div>
    `).join('');

    // Initialize the 3D Exploded Watch right after rendering hero slides:
    initOrvelExplodedHeroWatch();

    slider.querySelectorAll('video.hero-bg-video').forEach(video => {
      video.addEventListener('playing', () => {
        video.classList.add('is-playing');
        video.closest('.hero-slide')?.classList.add('has-video-playing');
      });
      video.addEventListener('error', () => {
        video.classList.remove('is-playing');
        video.closest('.hero-slide')?.classList.remove('has-video-playing');
      });
    });

    slider.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        if (filter) {
          const pill = document.querySelector(`.filter-pill[data-filter="${filter}"], .filter-pill[data-collection="${filter}"]`);
          if (pill) pill.click();
        }
      });
    });
  }

  /**
   * 05. Pinned Watch Story Hotspots
   */
  renderPinnedStoryHotspots() {
    const container = document.getElementById('story-hotspots-container');
    if (!container) return;

    container.innerHTML = boutiqueConfig.pinnedStory.hotspots.map(hs => `
      <div class="hotspot-pin ${hs.stage === 1 ? 'is-active' : ''}" style="top: ${hs.y}%; left: ${hs.x}%;" data-hotspot-id="${hs.id}" data-stage="${hs.stage}">
        <div class="hotspot-pulse"></div>
        <div class="hotspot-core"></div>
        <div class="hotspot-tooltip">
          <strong>${hs.label}</strong>
          <span>${hs.detail}</span>
        </div>
      </div>
    `).join('');
  }

  /**
   * 06. Shop By Brand (Scroll-Driven Arch Brand Cards)
   */
  renderBentoCollections() {
    const track = document.getElementById('collections-scroll-track');
    if (!track) return;

    track.innerHTML = boutiqueConfig.collections.map((col, idx) => {
      const cleanCta = (col.ctaText || `EXPLORE ${(col.name || 'COLLECTION').toUpperCase()}`).replace(/\s*→\s*$/u, '');
      return `
      <article class="arch-card" data-brand-filter="${col.brandFilter || col.id}" data-collection-link="${col.brandFilter || col.id}" data-index="${idx + 1}" tabindex="0" role="button" aria-label="Explore ${col.name}">
        <div class="arch-card-media">
          <img class="arch-card-img" src="${col.image}" alt="${col.name} Timepiece" loading="lazy" decoding="async">
        </div>
        <div class="arch-card-overlay"></div>
        <div class="arch-card-content">
          <span class="arch-card-badge">${col.tag || col.badge}</span>
          <h3 class="arch-card-title">${col.name}</h3>
          <p class="arch-card-meta">${col.subtitle || col.tagline}</p>
          <div class="arch-card-expanded">
            <p class="arch-card-desc">${col.description || ''}</p>
          </div>
          <div class="arch-card-action-cue">
            <span>${cleanCta} →</span>
          </div>
        </div>
      </article>
    `;
    }).join('');

    track.querySelectorAll('.arch-card').forEach(card => {
      // GSAP Depth Hover Animation (scale: 1.05, y: -8px, ease: power2.out, duration: 0.5)
      const img = card.querySelector('.arch-card-img');
      if (img && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const animateEnter = () => {
          if (typeof window.gsap !== 'undefined') {
            window.gsap.to(img, {
              scale: 1.05,
              y: -8,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: 'auto',
              force3D: true
            });
          }
        };
        const animateLeave = () => {
          if (typeof window.gsap !== 'undefined') {
            window.gsap.to(img, {
              scale: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: 'auto',
              force3D: true
            });
          }
        };
        card.addEventListener('mouseenter', animateEnter);
        card.addEventListener('mouseleave', animateLeave);
        card.addEventListener('focusin', animateEnter);
        card.addEventListener('focusout', animateLeave);
      }

      const handleSelect = () => {
        const brandFilter = card.getAttribute('data-brand-filter') || card.getAttribute('data-collection-link');
        if (brandFilter) {
          const brandSelect = document.getElementById('filter-brand');
          if (brandSelect) {
            brandSelect.value = brandFilter;
          }
          this.activeCollection = brandFilter;
          this.isCatalogExpanded = false;
          this.renderCatalogProducts();
          this.updateFilterBadge();
          const targetSection = document.getElementById('collection') || document.getElementById('shop-catalog');
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      card.addEventListener('click', handleSelect);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      });
    });
  }

  /**
   * Initial catalog pagination limit: 8 items
   */
  getInitialCatalogLimit() {
    return 8;
  }

  /**
   * 07. Shop Catalog (20 Multi-Brand Timepieces with Live Filtering)
   */
  /**
   * 07. Shop Catalog (8 Timepieces Per Page with Dynamic Client-Side Pagination)
   */
  initCustomFilterDropdowns() {
    const selects = document.querySelectorAll('.catalog-filter-bar select.filter-select');
    if (!selects.length) return;

    const closeAll = (except = null) => {
      document.querySelectorAll('.custom-select-wrap.is-open').forEach((w) => {
        if (w !== except) w.classList.remove('is-open');
      });
    };

    selects.forEach((select) => {
      if (select.dataset.customized === '1') return;
      select.dataset.customized = '1';

      const wrap = document.createElement('div');
      wrap.className = 'custom-select-wrap';
      select.parentNode.insertBefore(wrap, select);
      wrap.appendChild(select);
      select.classList.add('is-native-hidden');

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'custom-select-trigger';
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');

      const labelSpan = document.createElement('span');
      labelSpan.className = 'custom-select-label';
      const arrowSpan = document.createElement('span');
      arrowSpan.className = 'custom-select-arrow';
      arrowSpan.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`;

      trigger.appendChild(labelSpan);
      trigger.appendChild(arrowSpan);

      const menu = document.createElement('div');
      menu.className = 'custom-select-menu';
      menu.setAttribute('role', 'listbox');
      menu.setAttribute('data-lenis-prevent', '');

      const syncUI = () => {
        const activeOpt = select.options[select.selectedIndex] || select.options[0];
        labelSpan.textContent = activeOpt ? activeOpt.textContent : '';
        menu.querySelectorAll('.custom-select-option').forEach((optBtn) => {
          const isSel = optBtn.dataset.value === select.value;
          optBtn.classList.toggle('is-selected', isSel);
          optBtn.setAttribute('aria-selected', isSel ? 'true' : 'false');
        });
      };

      Array.from(select.options).forEach((opt) => {
        const optBtn = document.createElement('button');
        optBtn.type = 'button';
        optBtn.className = 'custom-select-option';
        optBtn.dataset.value = opt.value;
        optBtn.textContent = opt.textContent;
        optBtn.setAttribute('role', 'option');
        optBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          select.value = opt.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          syncUI();
          wrap.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        });
        menu.appendChild(optBtn);
      });

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const willOpen = !wrap.classList.contains('is-open');
        closeAll(wrap);
        wrap.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });

      select.addEventListener('change', syncUI);
      syncUI();

      wrap.appendChild(trigger);
      wrap.appendChild(menu);
    });

    document.addEventListener('click', () => closeAll());
  }

  renderCatalogProducts() {
    const grid = document.getElementById('shop-catalog-grid');
    const countIndicator = document.getElementById('catalog-count-indicator');
    const activeFilterContainer = document.getElementById('catalog-active-filter-container');
    const loadMoreWrap = document.getElementById('catalog-load-more-wrap');
    if (!grid) return;

    let items = [...boutiqueConfig.products];

    // Filter by case size (Find Your Fit integration)
    if (this.activeCaseSize && this.activeCaseSize !== 'all') {
      items = items.filter(p => p.caseSize && p.caseSize.toLowerCase() === this.activeCaseSize.toLowerCase());
    }

    // Filter by brand / category / collection
    if (this.activeCollection && this.activeCollection !== 'all') {
      const targetBrand = this.activeCollection.toLowerCase();
      items = items.filter(p =>
        (p.category && p.category.toLowerCase() === targetBrand) ||
        (p.collection && p.collection.toLowerCase() === targetBrand) ||
        (p.brand && p.brand.toLowerCase().replace(/\s+/g, '-') === targetBrand)
      );
    }

    // Filter by movement (All · Automatic · Quartz · Semi-Automatic · Digital)
    if (this.activeMovement !== 'all') {
      const targetMov = this.activeMovement.toLowerCase();
      items = items.filter(p => {
        const rawMov = (p.movementType || p.movement || '').toLowerCase();
        if (targetMov === 'semi-automatic') {
          return rawMov.includes('semi') || rawMov.includes('manual') || rawMov.includes('mecha');
        }
        if (targetMov === 'digital') {
          return rawMov.includes('digital') || rawMov.includes('multi-function') || rawMov.includes('hybrid') || rawMov.includes('smart');
        }
        return rawMov.includes(targetMov);
      });
    }

    // Filter by strap
    if (this.activeStrap !== 'all') {
      items = items.filter(p => p.strapMaterial.toLowerCase().includes(this.activeStrap.toLowerCase()));
    }

    // Filter by search query
    const searchVal = (document.getElementById('catalog-inline-search')?.value || document.getElementById('catalog-inline-search-mobile')?.value || '').trim().toLowerCase();
    if (searchVal.length > 0) {
      items = items.filter(p => {
        const fullText = `${p.name} ${p.brand} ${p.collectionName || ''} ${p.movement || ''} ${p.dialColor || ''} ${p.strapMaterial || ''}`.toLowerCase();
        return fullText.includes(searchVal);
      });
    }

    // Sort by price
    if (this.activeSort === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (this.activeSort === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    }

    // Render active case size filter pill banner if case size filter is active
    if (activeFilterContainer) {
      if (this.activeCaseSize && this.activeCaseSize !== 'all') {
        activeFilterContainer.innerHTML = `
          <div class="active-fit-filter-pill">
            <span>Filtered by Proportion: <strong>${this.activeCaseSize.toUpperCase()} Case Diameter</strong> (${items.length} Match${items.length === 1 ? '' : 'es'})</span>
            <button type="button" class="btn-clear-fit" data-action="clear-fit-filter" aria-label="Clear Case Size Filter">Show All Sizes ✕</button>
          </div>
        `;
        const clearBtn = activeFilterContainer.querySelector('[data-action="clear-fit-filter"]');
        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            this.activeCaseSize = 'all';
            this.userSelectedFitSize = null;
            this.catalogCurrentPage = 1;
            const ctaLabel = document.getElementById('fit-cta-label');
            const ctaHint = document.getElementById('fit-cta-hint');
            if (ctaLabel) ctaLabel.textContent = 'EXPLORE ALL TIMEPIECES';
            if (ctaHint) ctaHint.textContent = 'Select a case size above to filter catalog by diameter';
            this.renderCatalogProducts();
          });
        }
      } else {
        activeFilterContainer.innerHTML = '';
      }
    }

    const isMobileCatalog = window.innerWidth <= 767;
    if (!this.mobileVisibleCount || this.mobileVisibleCount < 6) {
      this.mobileVisibleCount = 6;
    }

    // Pagination Calculation: Mobile (6 + Load More) vs Desktop (8 per page)
    const pageSize = isMobileCatalog ? this.mobileVisibleCount : 8;
    this.catalogPageSize = pageSize;
    const totalPages = Math.max(1, Math.ceil(items.length / 8));
    if (!this.catalogCurrentPage || this.catalogCurrentPage < 1) {
      this.catalogCurrentPage = 1;
    }
    if (this.catalogCurrentPage > totalPages) {
      this.catalogCurrentPage = totalPages;
    }

    const startIndex = isMobileCatalog ? 0 : (this.catalogCurrentPage - 1) * 8;
    const endIndex = isMobileCatalog
      ? Math.min(this.mobileVisibleCount, items.length)
      : Math.min(startIndex + 8, items.length);
    const visibleItems = items.slice(startIndex, endIndex);

    if (countIndicator) {
      if (items.length === 0) {
        countIndicator.textContent = 'Showing 0 Timepieces';
      } else if (isMobileCatalog) {
        countIndicator.textContent = `Showing 1–${endIndex} of ${items.length} Timepieces`;
      } else if (this.activeCaseSize && this.activeCaseSize !== 'all') {
        countIndicator.textContent = `Showing ${startIndex + 1}–${endIndex} of ${items.length} Timepieces (${this.activeCaseSize.toUpperCase()} Filter Active · Page ${this.catalogCurrentPage} of ${totalPages})`;
      } else if (items.length > 8) {
        countIndicator.textContent = `Showing ${startIndex + 1}–${endIndex} of ${items.length} Timepieces (Page ${this.catalogCurrentPage} of ${totalPages})`;
      } else {
        countIndicator.textContent = `Showing ${items.length} of ${boutiqueConfig.products.length} Timepieces`;
      }
    }

    if (items.length === 0) {
      if (loadMoreWrap) loadMoreWrap.innerHTML = '';
      if (this.activeCaseSize && this.activeCaseSize !== 'all') {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align:center; padding: 4.5rem 1.5rem; background: rgba(23,25,27,0.5); border: 1px dashed rgba(198,164,107,0.3); border-radius: 8px;">
            <span style="display:inline-block; font-size:0.75rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--color-champagne); margin-bottom:0.75rem; font-weight:600;">PROPORTION ADVISORY</span>
            <h4 style="font-family:var(--font-serif); font-size:1.8rem; color:#FFFFFF; margin-bottom:0.75rem;">No Exact ${this.activeCaseSize.toUpperCase()} Timepieces in Stock</h4>
            <p style="max-width:540px; margin:0 auto 1.75rem auto; line-height:1.6; color:var(--color-steel-light); font-size:0.95rem;">
              We currently do not offer standard ${this.activeCaseSize} references in this curation. We invite you to discover our prominent 40mm and 41mm silhouettes or view our full collection.
            </p>
            <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
              <button class="btn btn-primary" id="catalog-reset-fit-btn" style="padding:0.75rem 1.75rem; font-size:0.78rem;">
                <span>VIEW ALL TIMEPIECES</span>
              </button>
            </div>
          </div>
        `;
        const resetBtn = grid.querySelector('#catalog-reset-fit-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            this.activeCaseSize = 'all';
            this.userSelectedFitSize = null;
            this.catalogCurrentPage = 1;
            const ctaLabel = document.getElementById('fit-cta-label');
            const ctaHint = document.getElementById('fit-cta-hint');
            if (ctaLabel) ctaLabel.textContent = 'EXPLORE ALL TIMEPIECES';
            if (ctaHint) ctaHint.textContent = 'Select a case size above to filter catalog by diameter';
            this.renderCatalogProducts();
          });
        }
      } else {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align:center; padding: 4rem 1rem; color: var(--color-steel-light);">
            <h4 style="font-family:var(--font-serif); font-size:1.6rem; color:#FFFFFF;">No Timepieces Match Your Filters</h4>
            <p style="margin-top:0.5rem;">Try resetting your brand or movement filters to view our full horology range.</p>
          </div>
        `;
      }
      return;
    }

    grid.innerHTML = visibleItems.map(product => this.createWatchCardHtml(product)).join('');
    this.bindWatchCardEvents(grid);

    // Dynamic Controls: Mobile Load More vs Desktop Pagination (8 per page)
    if (loadMoreWrap) {
      if (isMobileCatalog) {
        if (endIndex < items.length) {
          const remaining = items.length - endIndex;
          loadMoreWrap.innerHTML = `
            <div class="catalog-mobile-load-more-wrap">
              <button type="button" class="btn-catalog-load-more" id="catalog-mobile-load-more">
                <span>LOAD MORE</span>
                <span class="load-more-count">(${remaining} left)</span>
              </button>
            </div>
          `;
          loadMoreWrap.querySelector('#catalog-mobile-load-more')?.addEventListener('click', () => {
            this.mobileVisibleCount = (this.mobileVisibleCount || 6) + 6;
            this.renderCatalogProducts();
          });
        } else {
          loadMoreWrap.innerHTML = '';
        }
      } else if (totalPages > 1) {
        let pageNumbersHtml = '';
        for (let p = 1; p <= totalPages; p++) {
          const isActive = p === this.catalogCurrentPage;
          pageNumbersHtml += `
            <button type="button" 
                    class="catalog-page-btn ${isActive ? 'is-active' : ''}" 
                    data-page="${p}" 
                    aria-label="Go to Page ${p}" 
                    ${isActive ? 'aria-current="page"' : ''}>
              ${p}
            </button>
          `;
        }

        const isFirstPage = this.catalogCurrentPage <= 1;
        const isLastPage = this.catalogCurrentPage >= totalPages;

        loadMoreWrap.innerHTML = `
          <div class="catalog-pagination-container">
            <div class="catalog-showing-counter">
              SHOWING ${startIndex + 1}–${endIndex} OF ${items.length} TIMEPIECES · PAGE ${this.catalogCurrentPage} OF ${totalPages}
            </div>
            <nav class="catalog-pagination-nav" aria-label="Catalog Page Navigation">
              <button type="button" 
                      class="btn-pagination-nav btn-pagination-prev ${isFirstPage ? 'is-disabled' : ''}" 
                      id="catalog-prev-page" 
                      aria-label="Previous Page"
                      ${isFirstPage ? 'disabled' : ''}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span>PREVIOUS</span>
              </button>

              <div class="catalog-pagination-pages">
                ${pageNumbersHtml}
              </div>

              <button type="button" 
                      class="btn-pagination-nav btn-pagination-next ${isLastPage ? 'is-disabled' : ''}" 
                      id="catalog-next-page" 
                      aria-label="Next Page"
                      ${isLastPage ? 'disabled' : ''}>
                <span>NEXT</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </nav>
          </div>
        `;

        const prevBtn = loadMoreWrap.querySelector('#catalog-prev-page');
        if (prevBtn && !isFirstPage) {
          prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.goToCatalogPage(this.catalogCurrentPage - 1, true);
          });
        }

        const nextBtn = loadMoreWrap.querySelector('#catalog-next-page');
        if (nextBtn && !isLastPage) {
          nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.goToCatalogPage(this.catalogCurrentPage + 1, true);
          });
        }

        loadMoreWrap.querySelectorAll('.catalog-page-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = parseInt(btn.getAttribute('data-page'), 10);
            if (!isNaN(targetPage) && targetPage !== this.catalogCurrentPage) {
              this.goToCatalogPage(targetPage, true);
            }
          });
        });
      } else {
        loadMoreWrap.innerHTML = `
          <div class="catalog-showing-counter">
            ALL ${items.length} TIMEPIECES DISPLAYED
          </div>
        `;
      }
    }

    // Smooth reveal animation
    if (window.motion && typeof window.motion.revealCatalogCards === 'function') {
      window.motion.revealCatalogCards(grid);
    }
  }

  /**
   * Smooth Client-Side Page Transition for Catalog
   */
  goToCatalogPage(targetPage, smoothScroll = true) {
    const grid = document.getElementById('shop-catalog-grid');
    if (grid) {
      grid.style.transition = 'opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)';
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(8px)';
    }

    setTimeout(() => {
      this.catalogCurrentPage = targetPage;
      this.renderCatalogProducts();

      if (grid) {
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }

      if (smoothScroll) {
        const catalogSec = document.getElementById('collection') || document.getElementById('shop-catalog');
        if (catalogSec) {
          const navOffset = 90;
          const targetY = Math.max(0, catalogSec.getBoundingClientRect().top + window.pageYOffset - navOffset);
          if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(targetY, {
              duration: 0.65,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }
        }
      }
    }, 180);
  }

  createWatchCardHtml(product) {
    const isWish = store.isWishlisted(product.id);
    const isComp = store.isComparing(product.id);
    const dialOrStrap = product.dialColor ? product.dialColor.split(' with ')[0] : (product.strapMaterial || '');
    const idHash = String(product.id || '').split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const soldCount = product.soldCount || (4 + (idHash % 13));

    return `
      <article class="product-card" data-id="${product.id}" data-collection="${product.collection}">
        <div class="product-image-container">
          <span class="product-badge">${product.badge}</span>
          
          <div class="card-top-actions">
            <button class="btn-icon-card ${isWish ? 'is-active' : ''}" data-action="toggle-wishlist" data-product-id="${product.id}" aria-label="Save ${product.name} to Wishlist" title="Save to Wishlist">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="btn-icon-card ${isComp ? 'is-active' : ''}" data-action="toggle-compare" data-product-id="${product.id}" aria-label="Compare ${product.name}" title="Compare Specifications">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 3 21 3 21 8"/>
                <line x1="4" y1="20" x2="21" y2="3"/>
                <polyline points="21 16 21 21 16 21"/>
                <line x1="15" y1="15" x2="21" y2="21"/>
                <line x1="4" y1="4" x2="9" y2="9"/>
              </svg>
            </button>
          </div>

          <span class="product-sold-badge" aria-label="${soldCount} sold"><span class="product-sold-dot" aria-hidden="true"></span>${soldCount} Sold</span>

          <div class="product-img-wrap" data-action="inspect" data-product-id="${product.id}" data-hover-image="${product.secondaryImage || product.image}">
            <img class="product-img" src="${product.image}" data-secondary="${product.secondaryImage || product.image}" alt="${product.name}" loading="lazy" decoding="async">
            <img class="product-img-secondary" src="${product.secondaryImage || product.image}" alt="${product.name} alternate view" loading="lazy" decoding="async">
          </div>

          <div class="product-quick-actions">
            <button class="btn-card-quickview" data-action="inspect" data-product-id="${product.id}" aria-label="Quick View ${product.name}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              </svg>
              <span>Quick View</span>
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-info-top">
            <div class="product-meta-specs">
              <span class="product-collection-label">${product.collectionName || product.collection}</span>
              <span class="product-spec-bullet">✦</span>
              <span class="product-dimension-tag">${product.caseSize} · ${product.movementType || 'Mechanical'}</span>
            </div>
            <h4 class="product-name" data-action="inspect" data-product-id="${product.id}" title="${product.name}">
              <span>${product.name}</span>
            </h4>
            <div class="product-model-subtitle">${dialOrStrap}</div>
          </div>

          <div class="product-info-bottom">
            <div class="product-pricing-row">
              <div class="product-price">${store.formatPKR(product.price)}</div>
            </div>
            <div class="product-card-btns">
              <button class="btn btn-primary btn-card-add" data-action="add-to-cart" data-product-id="${product.id}" aria-label="Add ${product.name} to Bag">
                <span class="btn-card-add-text">Add to Bag</span>
                <svg class="btn-card-add-arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="card-gold-line" aria-hidden="true"></div>
      </article>
    `;
  }

  bindWatchCardEvents(container) {
    // Tapping anywhere on the card (except action buttons) opens Product Detail Modal
    container.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-icon-card') || e.target.closest('.btn-card-add') || e.target.closest('.btn-card-quickview')) return;
        const id = card.getAttribute('data-id');
        const prod = boutiqueConfig.products.find(p => p.id === id);
        if (prod) ui.openProductDetail(prod);
      });
    });

    // Inspect Watch Detail Modal
    container.querySelectorAll('[data-action="inspect"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = boutiqueConfig.products.find(p => p.id === id);
        if (prod) ui.openProductDetail(prod);
      });
    });

    // Wishlist Toggle
    container.querySelectorAll('[data-action="toggle-wishlist"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = boutiqueConfig.products.find(p => p.id === id);
        if (!prod) return;

        const isAdded = store.toggleWishlist(prod);
        btn.classList.toggle('is-active', isAdded);
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isAdded ? 'currentColor' : 'none');

        if (isAdded) {
          const card = btn.closest('.product-card, article');
          const watchImg = card ? card.querySelector('.product-img, img') : null;
          if (typeof window.triggerOrvelFloatToWishlist === 'function') {
            window.triggerOrvelFloatToWishlist(watchImg, prod.name);
          }
        }

        ui.showToast(isAdded ? `Saved "${prod.name}" to your wishlist.` : `Removed "${prod.name}" from wishlist.`);
      });
    });

    // Compare Toggle
    container.querySelectorAll('[data-action="toggle-compare"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = boutiqueConfig.products.find(p => p.id === id);
        if (!prod) return;

        if (store.isComparing(prod.id)) {
          store.removeFromCompare(prod.id);
          btn.classList.remove('is-active');
          ui.showToast(`Removed "${prod.name}" from comparison.`);
        } else {
          const res = store.addToCompare(prod);
          if (res.success) {
            btn.classList.add('is-active');

            const card = btn.closest('.product-card, article');
            const watchImg = card ? card.querySelector('.product-img, img') : null;
            if (typeof window.triggerOrvelFloatToCompare === 'function') {
              window.triggerOrvelFloatToCompare(watchImg, prod.name);
            }

            ui.showToast(`Added "${prod.name}" to comparison table.`);
          } else {
            ui.showToast(res.reason, 'Comparison Limit');
          }
        }
      });
    });

    // Add to Bag with Premium "Added to Bag ✓" state
    container.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-product-id');
        const prod = boutiqueConfig.products.find(p => p.id === id);
        if (!prod) return;

        // Prevent double-add while in confirmation state
        if (btn.classList.contains('is-added')) return;

        store.addToCart(prod, null, 1);
        const card = btn.closest('.product-card, article');
        const watchImg = card ? card.querySelector('.product-img, img') : null;
        if (typeof window.triggerOrvelFloatToCart === 'function') {
          window.triggerOrvelFloatToCart(watchImg, prod.name);
        } else {
          ui.showToast(`Added "${prod.name}" to your shopping bag.`);
        }

        btn.classList.add('is-added');
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<span>Added to Bag ✓</span>`;
        setTimeout(() => {
          btn.classList.remove('is-added');
          btn.innerHTML = originalHtml;
        }, 1800);
      });
    });
  }

  /**
   * 08. Horizontal Featured Watches Showcase
   */
  renderHorizontalShowcase() {
    const track = document.getElementById('bestsellers-track');
    if (!track) return;

    const bestsellers = boutiqueConfig.products.filter(p => p.isBestSeller);
    track.innerHTML = bestsellers.map(p => this.createWatchCardHtml(p)).join('');
    this.bindWatchCardEvents(track);
  }

  /**
   * 10. Technical Craftsmanship
   */
  renderCraftsmanship() {
    const grid = document.getElementById('craftsmanship-grid');
    if (!grid) return;

    grid.innerHTML = boutiqueConfig.craftsmanship.map(item => `
      <div class="craft-card reveal-fade-up">
        <div class="craft-num">${item.num}</div>
        <h4 class="craft-title">${item.title}</h4>
        <p class="craft-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  /**
   * 11. Infinite Marquee Band (Refined: No unsupported claims)
   */
  renderMarquee() {
    const marquee = document.getElementById('marquee-content');
    if (!marquee) return;

    const words = [
      "PRECISION", "HOROLOGICAL DISCIPLINE", "TIMELESS ARCHITECTURE", "316L STEEL",
      "HIGH-BEAT CALIBRES", "METALLIC PURITY", "TIME, REDEFINED."
    ];

    const doubleWords = [...words, ...words];
    marquee.innerHTML = doubleWords.map(w => `
      <div class="marquee-item">
        <span>${w}</span>
        <span class="star">✦</span>
      </div>
    `).join('');
  }

  /**
   * 08B. Collector Perspectives — Expanding Reviews Gallery
   */
  renderCollectorPerspectives() {
    const gallery = document.getElementById('perspectives-gallery');
    if (!gallery) return;

    const reviews = boutiqueConfig.testimonials || [];
    if (reviews.length === 0) return;

    const defaultCenterIdx = Math.floor(reviews.length / 2);
    const fallbackWatchImg = 'assets/images/perspectives/persp-omega-choco.jpg';

    gallery.innerHTML = reviews.map((r, idx) => `
      <div class="perspective-panel ${idx === defaultCenterIdx ? 'is-expanded' : ''}" 
           data-panel-index="${idx}" 
           tabindex="0" 
           role="button" 
           aria-expanded="${idx === defaultCenterIdx ? 'true' : 'false'}"
           aria-label="Collector perspective by ${r.clientName}"
           style="--img-pos-collapsed: ${r.collapsedPos || '80% center'}; --img-pos-expanded: ${r.expandedPos || 'right center'}; --img-pos-mobile: ${r.mobilePos || '76% 18%'};">
        
        <div class="perspective-img-wrap" data-clip-reveal data-reveal-direction="up">
          <img src="${r.image || fallbackWatchImg}" alt="${r.model}" class="perspective-img" loading="${idx === defaultCenterIdx ? 'eager' : 'lazy'}" decoding="async" />
          <div class="perspective-gradient-overlay" aria-hidden="true"></div>
        </div>

        <!-- Collapsed Compact Pill Indicator -->
        <div class="perspective-collapsed-pill" aria-hidden="true">
          <span class="pill-num">0${idx + 1}</span>
          <span class="pill-name">${r.modelTag || r.model}</span>
        </div>

        <!-- Expanded Floating Review Card -->
        <div class="perspective-expanded-content">
          <div class="perspective-card-top">
            <div class="perspective-stars" aria-label="${r.rating} stars">${Array(r.rating).fill('★').join('')}</div>
            <span class="perspective-badge">VERIFIED COLLECTOR</span>
          </div>

          <blockquote class="perspective-quote">
            “${r.quote}”
          </blockquote>

          <div class="perspective-card-bottom">
            <div class="perspective-author-info">
              <span class="perspective-author-name">${r.clientName}</span>
              <span class="perspective-author-meta">${r.city} · ${r.model}</span>
            </div>

            <button class="perspective-action-btn" data-action="explore-perspective-watch" data-product-id="${r.productId || 'csv-prod-07'}" type="button">
              <span>EXPLORE TIMEPIECE ↗</span>
            </button>
          </div>

          <span class="perspective-demo-disclaimer">${r.isDemoNotice}</span>
        </div>

      </div>
    `).join('');

    const panels = gallery.querySelectorAll('.perspective-panel');
    let activeIndex = 0;

    const expandPanel = (index) => {
      activeIndex = index;

      panels.forEach((p, i) => {
        const isExp = (i === index);
        p.classList.toggle('is-expanded', isExp);
        p.setAttribute('aria-expanded', isExp ? 'true' : 'false');
        if (isExp) {
          p.classList.add('is-revealed');
          const wrap = p.querySelector('.perspective-img-wrap');
          if (wrap) wrap.style.clipPath = 'none';
        }
      });
    };

    // Guarantee all panels are fully visible and not clipped
    panels.forEach((p, i) => {
      p.classList.add('is-revealed');
      const wrap = p.querySelector('.perspective-img-wrap');
      if (wrap) wrap.style.clipPath = 'none';
    });

    panels.forEach((panel, idx) => {
      // Desktop hover interaction: smoothly expand hovered panel on desktop (>= 769px) with fine pointer
      panel.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 768) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        expandPanel(idx);
      });

      // Mobile / tablet tap interaction & click
      panel.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="explore-perspective-watch"]')) return;
        expandPanel(idx);
      });

      // Keyboard accessibility (Enter or Space)
      panel.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          expandPanel(idx);
        }
      });
    });

    // Handle "EXPLORE TIMEPIECE ↗" click inside expanded cards
    gallery.querySelectorAll('[data-action="explore-perspective-watch"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pId = btn.getAttribute('data-product-id');
        const prod = boutiqueConfig.products.find(p => p.id === pId) || boutiqueConfig.products[0];
        if (prod && ui.openProductDetail) {
          ui.openProductDetail(prod);
        }
      });
    });
  }

  /**
   * 09. The Signature Collection Section Events
   */
  renderSignatureCollection() {
    const sigSection = document.getElementById('signature-collection');
    if (!sigSection) return;

    const flagship = boutiqueConfig.products.find(p => p.id === 'csv-prod-01') || boutiqueConfig.products[0];
    let selectedVariant = flagship.variants && flagship.variants[0] ? flagship.variants[0].name : flagship.strapMaterial;

    // Variant selector buttons
    sigSection.querySelectorAll('.sig-variant-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sigSection.querySelectorAll('.sig-variant-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        selectedVariant = btn.getAttribute('data-variant-name');
      });
    });

    // Add to Bag buttons (Primary panel & Campaign CTA)
    const addButtons = [
      document.getElementById('sig-primary-add-btn'),
      sigSection.querySelector('[data-action="sig-add-to-bag"]')
    ].filter(Boolean);

    addButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btn.classList.contains('is-added')) return;

        store.addToCart(flagship, selectedVariant, 1);
        const sigImg = document.querySelector('#signature-watch img, .signature-visual img, .sig-watch-render img');
        if (typeof window.triggerOrvelFloatToCart === 'function') {
          window.triggerOrvelFloatToCart(sigImg, `${flagship.name} (${selectedVariant})`);
        } else {
          ui.showToast(`Added "${flagship.name} (${selectedVariant})" to your shopping bag.`);
        }

        btn.classList.add('is-added');
        const textSpan = btn.querySelector('.btn-text, .btn-sig-text') || btn;
        const origText = textSpan.innerHTML;
        textSpan.innerHTML = 'Added to Bag ✓';

        setTimeout(() => {
          btn.classList.remove('is-added');
          textSpan.innerHTML = origText;
        }, 1800);
      });
    });

    // View Full Details button
    const viewBtn = document.getElementById('sig-view-details-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        ui.openProductDetail(flagship);
      });
    }

    // Curated Editions cards
    sigSection.querySelectorAll('.sig-curated-card').forEach(card => {
      card.addEventListener('click', () => {
        const pId = card.getAttribute('data-product-id');
        const prod = boutiqueConfig.products.find(p => p.id === pId);
        if (prod) ui.openProductDetail(prod);
      });
    });

    // Lightbox modal for Craftsmanship & Macro details
    const lightboxModal = document.getElementById('sig-lightbox-modal');
    const lightboxImg = document.getElementById('sig-lightbox-img');
    const lightboxCaption = document.getElementById('sig-lightbox-caption');
    const lightboxClose = document.getElementById('sig-lightbox-close');
    const lightboxBackdrop = document.getElementById('sig-lightbox-backdrop');

    const openLightbox = (src, caption) => {
      if (!lightboxModal || !lightboxImg) return;
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption || 'Horology Perspective';
      lightboxModal.classList.add('is-open');
      lightboxModal.setAttribute('aria-hidden', 'false');
      ui.lockBodyScroll();
    };

    const closeLightbox = () => {
      if (!lightboxModal) return;
      lightboxModal.classList.remove('is-open');
      lightboxModal.classList.remove('is-active');
      lightboxModal.setAttribute('aria-hidden', 'true');
      ui.unlockBodyScroll();
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('is-open')) {
        closeLightbox();
      }
    });

    // Craftsmanship cards click
    sigSection.querySelectorAll('.sig-craft-card').forEach(card => {
      card.addEventListener('click', () => {
        const src = card.getAttribute('data-craft-img');
        const title = card.getAttribute('data-craft-title');
        if (src) openLightbox(src, title);
      });
    });

    // Macro detail cards click
    sigSection.querySelectorAll('.sig-macro-card').forEach(card => {
      card.addEventListener('click', () => {
        const src = card.getAttribute('data-detail-img');
        const title = card.getAttribute('data-detail-title');
        if (src) openLightbox(src, title);
      });
    });

    // Guarantee craft and macro image wraps are fully unmasked and visible
    sigSection.querySelectorAll('.sig-craft-card, .sig-macro-card').forEach(card => {
      card.classList.add('is-revealed');
      const wrap = card.querySelector('.sig-craft-img-wrap, .sig-macro-img-wrap');
      if (wrap) wrap.style.clipPath = 'none';
    });

    // Smooth scroll for "EXPLORE THIS TIMEPIECE" campaign button
    const exploreFlagshipBtn = sigSection.querySelector('[data-action="explore-flagship"]');
    if (exploreFlagshipBtn) {
      exploreFlagshipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('sig-showcase');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  /**
   * 09B. Find Your Fit — Interactive Watch Sizing Engine
   */
  initFindYourFit() {
    const section = document.getElementById('find-your-fit');
    if (!section) return;

    const FIT_SIZES = {
      "38mm": {
        size: "38mm",
        num: "38",
        name: "Refined",
        title: "38MM — REFINED",
        desc: "A classic, understated silhouette with a subtle wrist presence.",
        scale: 0.95,
        presence: "REFINED WRIST PRESENCE",
        caliper: "38.0 MM",
        bracketWidth: "148px"
      },
      "40mm": {
        size: "40mm",
        num: "40",
        name: "Balanced",
        title: "40MM — BALANCED",
        desc: "Versatile proportions with a refined everyday character.",
        scale: 1.00,
        presence: "BALANCED EVERYDAY CHARACTER",
        caliper: "40.0 MM",
        bracketWidth: "156px"
      },
      "42mm": {
        size: "42mm",
        num: "42",
        name: "Bold",
        title: "42MM — BOLD",
        desc: "A confident expression with a more prominent profile.",
        scale: 1.05,
        presence: "BOLD PROPORTIONAL PRESENCE",
        caliper: "42.0 MM",
        bracketWidth: "164px"
      },
      "44mm": {
        size: "44mm",
        num: "44",
        name: "Statement",
        title: "44MM — STATEMENT",
        desc: "A striking case size for those who prefer a commanding look.",
        scale: 1.10,
        presence: "COMMANDING STATEMENT PRESENCE",
        caliper: "44.0 MM",
        bracketWidth: "172px"
      }
    };

    const sizeBtns = section.querySelectorAll('.fit-size-btn');
    const scaler = document.getElementById('fit-watch-scaler');
    const bracket = document.getElementById('fit-dimension-bracket');
    const bracketReadout = document.getElementById('bracket-readout');
    const caliperVal = document.getElementById('fit-caliper-text');
    const proportionText = document.getElementById('fit-proportion-text');
    const descBadge = document.getElementById('fit-desc-badge');
    const descContent = document.getElementById('fit-desc-content');
    const stockBadge = document.getElementById('fit-stock-badge');
    const ctaBtn = document.getElementById('fit-primary-cta');
    const ctaLabel = document.getElementById('fit-cta-label');
    const ctaHint = document.getElementById('fit-cta-hint');

    const updateFitDisplay = (sizeKey, isUserClick = false) => {
      const data = FIT_SIZES[sizeKey];
      if (!data) return;

      this.activeFitSize = sizeKey;
      if (isUserClick) {
        this.userSelectedFitSize = sizeKey;
      }

      // Update button styles & ARIA attributes
      sizeBtns.forEach(btn => {
        const btnSize = btn.getAttribute('data-size');
        const isActive = btnSize === sizeKey;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
      });

      // Animate watch scale
      if (scaler) {
        scaler.style.transform = `scale(${data.scale})`;
        scaler.setAttribute('data-scale', data.scale);
      }

      // Animate dimension bracket
      if (bracket) {
        bracket.style.width = data.bracketWidth;
      }
      if (bracketReadout) {
        bracketReadout.textContent = `${data.num}.0 mm`;
      }

      // Update caliper and proportion badges
      if (caliperVal) {
        caliperVal.textContent = data.caliper;
      }
      if (proportionText) {
        proportionText.textContent = data.presence;
      }

      // Update description card
      if (descBadge) {
        descBadge.textContent = data.title;
      }
      if (descContent) {
        descContent.textContent = data.desc;
      }

      // Calculate matching products from actual catalog
      const matchingCount = boutiqueConfig.products.filter(p => p.caseSize && p.caseSize.toLowerCase() === sizeKey.toLowerCase()).length;
      if (stockBadge) {
        if (matchingCount > 0) {
          stockBadge.textContent = `${matchingCount} Available in Catalog`;
        } else {
          stockBadge.textContent = '0 Direct Matches (Explore 42mm)';
        }
      }

      // Update CTA Label
      if (ctaLabel) {
        if (this.userSelectedFitSize) {
          ctaLabel.textContent = `EXPLORE MATCHING TIMEPIECES (${data.num}MM)`;
        } else {
          ctaLabel.textContent = 'EXPLORE ALL TIMEPIECES';
        }
      }
      if (ctaHint) {
        if (this.userSelectedFitSize) {
          if (matchingCount > 0) {
            ctaHint.textContent = `Filtered by exact ${data.num}mm case diameter · ${matchingCount} timepiece${matchingCount === 1 ? '' : 's'} found`;
          } else {
            ctaHint.textContent = `No exact 44mm models in stock · Explore our prominent 42mm and 43mm references`;
          }
        } else {
          ctaHint.textContent = 'Select a case size above to filter catalog by diameter';
        }
      }

      // Synchronize Final CTA primary button attributes
      const finalPrimaryBtn = document.getElementById('btn-final-explore-timepieces');
      if (finalPrimaryBtn) {
        if (this.userSelectedFitSize) {
          finalPrimaryBtn.setAttribute('aria-label', `Explore ${data.num}mm timepieces in product catalog (${matchingCount} match${matchingCount === 1 ? '' : 'es'})`);
          finalPrimaryBtn.setAttribute('data-selected-size', this.userSelectedFitSize);
        } else {
          finalPrimaryBtn.setAttribute('aria-label', 'Explore timepieces in product catalog');
          finalPrimaryBtn.removeAttribute('data-selected-size');
        }
      }
    };

    // Event listeners on size buttons
    sizeBtns.forEach(btn => {
      const size = btn.getAttribute('data-size');
      btn.addEventListener('click', () => {
        updateFitDisplay(size, true);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          updateFitDisplay(size, true);
        }
      });
    });

    // Final CTA button click handler
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        if (this.userSelectedFitSize) {
          this.activeCaseSize = this.userSelectedFitSize;
          this.activeCollection = 'all'; // Reset collection filter to show matching case size across all categories
          // Update collection pills UI
          document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.classList.toggle('is-active', pill.getAttribute('data-collection') === 'all');
          });
        } else {
          // If no intentional user selection was made, show full catalogue
          this.activeCaseSize = 'all';
        }

        this.isCatalogExpanded = false;
        this.renderCatalogProducts();

        const catalogSec = document.getElementById('shop-catalog');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Set initial display to 40mm without marking as intentional user selection
    updateFitDisplay('40mm', false);
  }

  /**
   * 09C. Instagram Atelier Reels — 3D Flowing Coverflow Carousel
   */
  renderInstagramGallery() {
    const stage = document.getElementById('insta-stage') || document.getElementById('insta-track');
    const wrapper = document.getElementById('insta-track-wrapper');
    const ctaFollow = document.getElementById('btn-insta-follow');
    const prevBtn = document.getElementById('insta-prev-btn');
    const nextBtn = document.getElementById('insta-next-btn');
    const playBtn = document.getElementById('insta-play-btn');

    if (!stage || !wrapper) return;

    if (ctaFollow && boutiqueConfig.contact && boutiqueConfig.contact.instagramUrl) {
      ctaFollow.href = boutiqueConfig.contact.instagramUrl;
    }

    const posts = (boutiqueConfig.instagramGallery && boutiqueConfig.instagramGallery.length > 0)
      ? boutiqueConfig.instagramGallery
      : (boutiqueConfig.instagramReels && boutiqueConfig.instagramReels.length > 0)
        ? boutiqueConfig.instagramReels
        : [];

    if (posts.length === 0) return;
    const N = posts.length;

    // Render 9:16 Portrait Reel Cards with Cinematic Sheen & Play Pulse Ring
    stage.innerHTML = posts.map((post, idx) => `
      <article class="insta-card" data-index="${idx}" tabindex="0" role="button" aria-label="${post.title || 'Reel'}: ${post.caption || ''}">
        <div class="insta-card-inner">
          <img src="${post.image}" alt="${post.alt || post.title || 'ORVÉL Reel'}" class="insta-card-img" loading="${idx < 3 ? 'eager' : 'lazy'}" decoding="async">
          
          <!-- Sapphire Crystal Specular Sheen Sweep -->
          <div class="insta-card-shine" aria-hidden="true"></div>

          <div class="insta-card-top-badges">
            <span class="insta-badge-pill insta-badge-reel">
              <span class="insta-badge-dot"></span> REEL 0${post.reelNumber || (idx + 1)}
            </span>
            <span class="insta-badge-pill insta-badge-duration">${post.duration || '0:18'}</span>
          </div>

          <div class="insta-play-trigger" aria-label="Play Reel Fullscreen">
            <div class="insta-play-pulse-ring" aria-hidden="true"></div>
            <div class="insta-play-glass-disc">
              <svg class="insta-play-triangle" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </div>
          </div>

          <div class="insta-card-overlay">
            <span class="insta-reel-category">${post.category || 'HAUTE HORLOGERIE'}</span>
            <h3 class="insta-reel-title">${post.title || 'ORVÉL Atelier'}</h3>
            <p class="insta-reel-subtitle">${post.subtitle || post.caption || ''}</p>
            <div class="insta-reel-action-hint">
              <span>EXPLORE PERSPECTIVE</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    const cards = Array.from(stage.querySelectorAll('.insta-card'));

    // Responsive 3D Geometry Metrics — Wide Flowing Coverflow Scale
    let stepX = 230;
    let depthZ = 72;
    let rotFactor = 28;

    const updateMetrics = () => {
      const w = window.innerWidth;
      if (w < 640) {
        stepX = 145;
        depthZ = 46;
        rotFactor = 22;
      } else if (w < 1024) {
        stepX = 180;
        depthZ = 58;
        rotFactor = 25;
      } else if (w < 1440) {
        stepX = 225;
        depthZ = 68;
        rotFactor = 28;
      } else {
        stepX = 245;
        depthZ = 76;
        rotFactor = 30;
      }
    };
    updateMetrics();
    window.addEventListener('resize', updateMetrics, { passive: true });

    // Carousel Motion State
    let currentPos = 0.0;
    let targetPos = null;
    let isPlaying = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isHovered = false;
    let hoveredCardIdx = null;
    let isDragging = false;
    let hasDragged = false;
    let activePointerId = null;
    let dragStartX = 0;
    let dragStartPos = 0;
    let lastDragX = 0;
    let lastDragTime = 0;
    let dragVelocity = 0;
    let isWheelScrolling = false;
    let wheelSnapTimer = null;
    let isVisible = true;
    const flowSpeed = 0.0032; // Silky smooth luxury glide

    // Update Card Transforms along 3D Coverflow Curve with Hover Dynamics
    const renderScene = (pos) => {
      for (let i = 0; i < N; i++) {
        const card = cards[i];
        if (!card) continue;

        let offset = i - pos;
        while (offset > N / 2) offset -= N;
        while (offset < -N / 2) offset += N;

        const absOffset = Math.abs(offset);

        // Cull cards outside visible arc
        if (absOffset > 3.85) {
          card.style.opacity = '0';
          card.style.visibility = 'hidden';
          card.style.pointerEvents = 'none';
          card.classList.remove('is-center');
          continue;
        }

        card.style.visibility = 'visible';
        card.style.pointerEvents = 'auto';

        let x = offset * stepX;
        let rotY = -Math.sign(offset) * Math.min(62, Math.pow(absOffset, 0.82) * rotFactor);
        let z = (1 - Math.pow(absOffset, 1.25)) * depthZ;
        let scale = Math.max(0.55, 1.06 - absOffset * 0.12);
        let zIndex = Math.round(100 - absOffset * 15);
        const opacity = Math.max(0, 1 - Math.max(0, absOffset - 1.8) * 0.45);

        // Interactive 3D hover magnetic lift & tilt
        if (hoveredCardIdx === i) {
          scale *= 1.045;
          z += 28;
          rotY *= 0.72; // turn subtly towards viewer
          zIndex = Math.max(zIndex, 115);
        }

        card.style.transform = `translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity.toFixed(3);

        if (absOffset < 0.38) {
          card.classList.add('is-center');
          card.setAttribute('aria-current', 'true');
        } else {
          card.classList.remove('is-center');
          card.removeAttribute('aria-current');
        }
      }
    };

    // Ensure immediate initial layout render
    renderScene(currentPos);

    // Main 60fps/120fps Flowing Animation Loop
    const tick = () => {
      if (isVisible) {
        if (isDragging) {
          // Controlled directly by drag move
        } else if (targetPos !== null) {
          const dist = targetPos - currentPos;
          const easeRate = isWheelScrolling ? 0.22 : 0.09;
          currentPos += dist * easeRate;
          if (!isWheelScrolling && Math.abs(dist) < 0.002) {
            currentPos = targetPos;
            targetPos = null;
          }
        } else if (isPlaying && !isHovered) {
          currentPos += flowSpeed;
        }

        while (currentPos >= N) {
          currentPos -= N;
          if (targetPos !== null) targetPos -= N;
        }
        while (currentPos < 0) {
          currentPos += N;
          if (targetPos !== null) targetPos += N;
        }

        renderScene(currentPos);
      }
      requestAnimationFrame(tick);
    };

    // IntersectionObserver: Pause loop when scrolled offscreen for 0% CPU consumption
    const section = document.getElementById('instagram-gallery');
    if (section && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            renderScene(currentPos);
          }
        });
      }, { threshold: 0.01, rootMargin: '400px 0px 400px 0px' });
      observer.observe(section);
    }

    // Start loop
    requestAnimationFrame(tick);

    // Play/Pause Button Controls
    const updatePlayBtnState = () => {
      if (!playBtn) return;
      const pauseIcon = playBtn.querySelector('.insta-icon-pause');
      const playIcon = playBtn.querySelector('.insta-icon-play');
      if (isPlaying) {
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIcon) playIcon.style.display = 'none';
        playBtn.setAttribute('title', 'Pause Flowing Motion');
        playBtn.setAttribute('aria-pressed', 'false');
      } else {
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIcon) playIcon.style.display = 'block';
        playBtn.setAttribute('title', 'Resume Flowing Motion');
        playBtn.setAttribute('aria-pressed', 'true');
      }
    };

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        updatePlayBtnState();
      });
      updatePlayBtnState();
    }

    // Prev / Next Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        targetPos = Math.round(currentPos) - 1;
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        targetPos = Math.round(currentPos) + 1;
      });
    }

    // Hover Pause on Desktop
    wrapper.addEventListener('mouseenter', () => {
      isHovered = true;
    });
    wrapper.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    // Touch, Two-Finger Trackpad Wheel & Pointer Drag Gestures
    const onPointerDown = (e) => {
      if (e.target && e.target.closest('a')) return;
      if (isDragging) return;
      isDragging = true;
      activePointerId = e.pointerId;
      hasDragged = false;
      isWheelScrolling = false;
      clearTimeout(wheelSnapTimer);
      dragStartX = e.clientX;
      dragStartPos = currentPos;
      lastDragX = e.clientX;
      lastDragTime = performance.now();
      dragVelocity = 0;
      targetPos = null;
      wrapper.classList.add('is-dragging');
    };

    const onPointerMove = (e) => {
      if (!isDragging || (activePointerId !== null && e.pointerId !== activePointerId)) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 6) {
        hasDragged = true;
      }
      const now = performance.now();
      const dt = Math.max(1, now - lastDragTime);
      dragVelocity = (e.clientX - lastDragX) / dt;
      lastDragX = e.clientX;
      lastDragTime = now;

      currentPos = dragStartPos - (dx / stepX);
      while (currentPos >= N) currentPos -= N;
      while (currentPos < 0) currentPos += N;
      renderScene(currentPos);
    };

    const onPointerUp = (e) => {
      if (!isDragging || (activePointerId !== null && e && e.pointerId !== activePointerId)) return;
      isDragging = false;
      activePointerId = null;
      wrapper.classList.remove('is-dragging');
      if (hasDragged) {
        // Momentum coasting & snapping to nearest card
        targetPos = Math.round(currentPos - dragVelocity * 8);
      }
    };

    // Trackpad 2-Finger Horizontal Scroll (Right / Left) + Shift+Wheel support
    const onWheelScroll = (e) => {
      if (e.ctrlKey) return;

      const rawDeltaX = (e.shiftKey && Math.abs(e.deltaY) > Math.abs(e.deltaX))
        ? e.deltaY
        : e.deltaX;
      const absX = Math.abs(rawDeltaX);
      const absY = Math.abs(e.deltaY);

      // Let vertical two-finger scroll pass through cleanly to scroll the page
      if (absX < 0.5 || (!e.shiftKey && absY > absX * 1.15)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      const modeScale = e.deltaMode === 1 ? 18 : e.deltaMode === 2 ? stepX : 1;
      const dxPx = rawDeltaX * modeScale;
      const basePos = targetPos !== null ? targetPos : currentPos;
      const deltaCards = Math.max(-2.5, Math.min(2.5, dxPx / Math.max(120, stepX)));

      targetPos = basePos + deltaCards;
      isWheelScrolling = true;
      hasDragged = false;

      clearTimeout(wheelSnapTimer);
      wheelSnapTimer = setTimeout(() => {
        isWheelScrolling = false;
        if (targetPos !== null && !isDragging) {
          targetPos = Math.round(targetPos);
        }
      }, 150);
    };

    wrapper.addEventListener('pointerdown', onPointerDown);
    wrapper.addEventListener('wheel', onWheelScroll, { passive: false });
    wrapper.addEventListener('dragstart', (e) => e.preventDefault());
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // Lightbox Opener for Reels
    const openReelLightbox = (post) => {
      const lightboxModal = document.getElementById('sig-lightbox-modal');
      const lightboxImg = document.getElementById('sig-lightbox-img');
      const lightboxCaption = document.getElementById('sig-lightbox-caption');
      const lightboxClose = document.getElementById('sig-lightbox-close');
      const lightboxBackdrop = document.getElementById('sig-lightbox-backdrop');
      if (!lightboxModal || !lightboxImg) return;

      lightboxImg.src = post.image;
      lightboxImg.alt = post.title || 'ORVÉL Reel Preview';

      if (lightboxCaption) {
        lightboxCaption.innerHTML = `
          <div style="display:flex; flex-direction:column; align-items:center; gap:0.4rem; padding-top:0.75rem;">
            <span style="font-family:var(--font-mono, monospace); font-size:0.68rem; font-weight:700; color:var(--color-champagne, #C6A46B); letter-spacing:0.16em; text-transform:uppercase;">
              ${post.category || 'THE ATELIER REELS'} • ${post.duration || '0:18'}
            </span>
            <h3 style="font-family:var(--font-serif, serif); font-size:1.5rem; font-weight:700; color:#FFFFFF; margin:0.2rem 0;">
              ${post.title || 'Atelier Perspective'}
            </h3>
            <p style="font-size:0.88rem; line-height:1.55; color:#C2BFBA; margin:0 0 1rem 0; max-width:540px; text-align:center;">
              ${post.caption || ''}
            </p>
            <a href="${post.url || '#shop-catalog'}" class="btn-lightbox-explore" style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.75rem 1.6rem; background:var(--color-champagne, #C6A46B); color:#090909; border-radius:4px; font-size:0.75rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; text-decoration:none; transition:transform 0.25s, box-shadow 0.25s;">
              ${post.label || 'EXPLORE TIMEPIECE'} ↗
            </a>
          </div>
        `;

        const lbLink = lightboxCaption.querySelector('.btn-lightbox-explore');
        if (lbLink) {
          lbLink.addEventListener('click', (ev) => {
            lightboxModal.classList.remove('is-open', 'is-active');
            lightboxModal.setAttribute('aria-hidden', 'true');
            if (window.ui && window.ui.unlockBodyScroll) window.ui.unlockBodyScroll();
            if (post.collection) {
              const pill = document.querySelector(`.filter-pill[data-collection="${post.collection}"]`);
              if (pill) pill.click();
            }
            if (post.url && post.url.startsWith('#')) {
              ev.preventDefault();
              const targetEl = document.querySelector(post.url);
              if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      }

      const closeReel = () => {
        lightboxModal.classList.remove('is-open', 'is-active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        if (window.ui && window.ui.unlockBodyScroll) window.ui.unlockBodyScroll();
      };

      if (lightboxClose) lightboxClose.onclick = closeReel;
      if (lightboxBackdrop) lightboxBackdrop.onclick = closeReel;

      lightboxModal.classList.add('is-open', 'is-active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      if (window.ui && window.ui.lockBodyScroll) window.ui.lockBodyScroll();
    };

    // Card Selection, Hover Dynamics & Keyboard handling
    cards.forEach((card, idx) => {
      card.addEventListener('mouseenter', () => {
        hoveredCardIdx = idx;
        renderScene(currentPos);
      });
      card.addEventListener('mouseleave', () => {
        if (hoveredCardIdx === idx) {
          hoveredCardIdx = null;
          renderScene(currentPos);
        }
      });

      const handleSelect = () => {
        if (hasDragged) return;

        let offset = idx - currentPos;
        while (offset > N / 2) offset -= N;
        while (offset < -N / 2) offset += N;

        if (Math.abs(offset) > 0.38) {
          // Off-center card: smoothly glide into focus
          targetPos = Math.round(currentPos + offset);
        } else {
          // Center card: open product drawer directly
          const post = posts[idx];
          if (post && post.productId) {
            const allProds = boutiqueConfig.collections || [];
            const prod = allProds.find(p => p.id === post.productId);
            if (prod && window.ui && window.ui.openProductDetail) {
              window.ui.openProductDetail(prod);
              return;
            }
          }
          // Fallback: open reel lightbox if no product found
          openReelLightbox(posts[idx]);
        }
      };

      card.addEventListener('click', handleSelect);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      });
    });

    // Keyboard navigation on stage
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        targetPos = Math.round(currentPos) - 1;
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        targetPos = Math.round(currentPos) + 1;
      } else if (e.key === ' ') {
        e.preventDefault();
        isPlaying = !isPlaying;
        updatePlayBtnState();
      }
    });
  }

  /**
   * 09D. Final Shopping CTA — Found Your Perfect Fit?
   */
  initFinalCta() {
    const primaryBtn = document.getElementById('btn-final-explore-timepieces');
    const secondaryBtn = document.getElementById('btn-final-find-fit');

    if (primaryBtn) {
      primaryBtn.addEventListener('click', () => {
        // If the visitor intentionally selected a case diameter in Find Your Fit
        if (this.userSelectedFitSize) {
          this.activeCaseSize = this.userSelectedFitSize;
          // Clear collection filter to prevent conflicting filters
          this.activeCollection = 'all';
          document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.classList.toggle('is-active', pill.getAttribute('data-collection') === 'all');
          });
        } else {
          // If no intentional user selection was made, show full catalogue
          this.activeCaseSize = 'all';
        }

        // If exploring all timepieces from Final CTA, show full collection
        this.isCatalogExpanded = !this.userSelectedFitSize;
        this.renderCatalogProducts();

        // Smoothly scroll to the existing All Timepieces section
        const catalogSec = document.getElementById('shop-catalog');
        if (catalogSec) {
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          catalogSec.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
          const focusTarget = catalogSec.querySelector('.catalog-title') || catalogSec;
          if (focusTarget) {
            focusTarget.setAttribute('tabindex', '-1');
            focusTarget.focus({ preventScroll: true });
          }
        }
      });
    }

    if (secondaryBtn) {
      secondaryBtn.addEventListener('click', () => {
        const targetSec = document.getElementById('watch-category-showcase') || document.getElementById('bento-collections');
        if (targetSec) {
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          targetSec.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
        }
      });
    }
  }

  /**
   * 15. Editorial Journal Articles
   */
  renderJournal() {
    const grid = document.getElementById('journal-grid');
    if (!grid) return;

    grid.innerHTML = boutiqueConfig.journal.map(j => `
      <article class="journal-card reveal-fade-up">
        <div class="journal-card-img-wrap">
          <img class="journal-card-img" src="${j.image}" alt="${j.title}" loading="lazy" decoding="async">
        </div>
        <div class="journal-meta">
          <span>${j.tag}</span>
          <span>${j.readTime}</span>
        </div>
        <h4 class="journal-title">${j.title}</h4>
        <p class="journal-excerpt">${j.excerpt}</p>
        <span class="link-editorial" style="font-size:0.75rem; margin-top:0.4rem;">Read Article →</span>
      </article>
    `).join('');
  }

  /**
   * 16. Concierge FAQs
   */
  renderFaqs() {
    const container = document.getElementById('faq-accordion');
    if (!container) return;

    container.innerHTML = (boutiqueConfig.faqs || []).map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'is-open' : ''}">
        <button class="faq-question">
          <span>${faq.question}</span>
          <div class="faq-icon"></div>
        </button>
        <div class="faq-answer" ${idx === 0 ? 'style="max-height: 200px;"' : ''}>
          <div class="faq-answer-inner">${faq.answer}</div>
        </div>
      </div>
    `).join('');
  }

  /**
   * Bind Catalog Filters
   */
  bindFilterControls() {
    // 1. Movement Pill Tabs (All · Automatic · Quartz · Semi-Automatic · Digital)
    document.querySelectorAll('.filter-pill[data-movement]').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill[data-movement]').forEach(p => {
          p.classList.remove('is-active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('is-active');
        pill.setAttribute('aria-selected', 'true');
        this.activeMovement = pill.getAttribute('data-movement') || 'all';
        this.isCatalogExpanded = false;
        this.renderCatalogProducts();
        this.updateFilterBadge();
      });
    });

    // 2. Brand Select Dropdown (replaces long brand pills list)
    document.getElementById('filter-brand')?.addEventListener('change', (e) => {
      this.activeCollection = e.target.value || 'all';
      if (this.activeCollection === 'all') {
        this.activeCaseSize = 'all';
      }
      this.isCatalogExpanded = false;
      this.renderCatalogProducts();
      this.updateFilterBadge();
    });

    // Footer Brand & Collection Filter Links
    document.querySelectorAll('.footer-link[data-footer-collection], .footer-link[data-filter]').forEach(link => {
      link.addEventListener('click', () => {
        const col = link.getAttribute('data-filter') || link.getAttribute('data-footer-collection');
        if (col) {
          const brandSelect = document.getElementById('filter-brand');
          if (brandSelect) brandSelect.value = col;
          this.activeCollection = col;
          this.isCatalogExpanded = false;
          this.renderCatalogProducts();
          this.updateFilterBadge();
        }
      });
    });

    // Strap Select
    document.getElementById('filter-strap')?.addEventListener('change', (e) => {
      this.activeStrap = e.target.value;
      this.isCatalogExpanded = false;
      this.renderCatalogProducts();
      this.updateFilterBadge();
    });

    // Price Sort Select
    document.getElementById('filter-sort')?.addEventListener('change', (e) => {
      this.activeSort = e.target.value;
      this.isCatalogExpanded = false;
      this.renderCatalogProducts();
      this.updateFilterBadge();
    });

    this.initCustomFilterDropdowns();

    // Mobile Filter Collapse Toggle
    const mobileFilterToggleBtn = document.getElementById('mobile-filter-toggle-btn');
    const collapsiblePanel = document.getElementById('catalog-collapsible-panel');
    mobileFilterToggleBtn?.addEventListener('click', () => {
      const isOpen = collapsiblePanel?.classList.toggle('is-open');
      mobileFilterToggleBtn.classList.toggle('is-open', isOpen);
      mobileFilterToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Reset Filters Button
    const resetBtn = document.getElementById('filter-reset-btn');
    resetBtn?.addEventListener('click', () => {
      const brandSelect = document.getElementById('filter-brand');
      const strapSelect = document.getElementById('filter-strap');
      const sortSelect = document.getElementById('filter-sort');
      const searchDesktop = document.getElementById('catalog-inline-search');
      const searchMobile = document.getElementById('catalog-inline-search-mobile');

      if (brandSelect) brandSelect.value = 'all';
      if (strapSelect) strapSelect.value = 'all';
      if (sortSelect) sortSelect.value = 'featured';
      brandSelect?.dispatchEvent(new Event('change'));
      strapSelect?.dispatchEvent(new Event('change'));
      sortSelect?.dispatchEvent(new Event('change'));
      if (searchDesktop) searchDesktop.value = '';
      if (searchMobile) searchMobile.value = '';

      this.activeMovement = 'all';
      this.activeStrap = 'all';
      this.activeSort = 'featured';
      this.activeCaseSize = 'all';
      this.activeCollection = 'all';

      document.querySelectorAll('.filter-pill[data-movement]').forEach(p => {
        const isAll = p.getAttribute('data-movement') === 'all';
        p.classList.toggle('is-active', isAll);
        p.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });

      this.isCatalogExpanded = false;
      this.renderCatalogProducts();
      this.updateFilterBadge();
    });

    // Listen for window resize to adjust pagination limit dynamically if not expanded
    let resizeTimer;
    let lastCatalogWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      // Ignore mobile vertical toolbar expand/collapse while scrolling
      if (window.innerWidth === lastCatalogWidth) return;
      lastCatalogWidth = window.innerWidth;

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!this.isCatalogExpanded) {
          this.renderCatalogProducts();
        }
      }, 150);
    });

    // Synchronized Search (Desktop & Mobile)
    const searchDesktop = document.getElementById('catalog-inline-search');
    const searchMobile = document.getElementById('catalog-inline-search-mobile');
    const executeSearch = (val) => {
      const query = val.trim().toLowerCase();
      const cards = document.querySelectorAll('#shop-catalog-grid .product-card');
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'flex' : 'none';
      });
      this.updateFilterBadge();
    };

    searchDesktop?.addEventListener('input', (e) => {
      if (searchMobile) searchMobile.value = e.target.value;
      executeSearch(e.target.value);
    });

    searchMobile?.addEventListener('input', (e) => {
      if (searchDesktop) searchDesktop.value = e.target.value;
      executeSearch(e.target.value);
    });
  }

  updateFilterBadge() {
    const badge = document.getElementById('filter-active-count-badge');
    if (!badge) return;

    let activeCount = 0;
    if (this.activeCollection && this.activeCollection !== 'all') activeCount++;
    if (this.activeMovement && this.activeMovement !== 'all') activeCount++;
    if (this.activeStrap && this.activeStrap !== 'all') activeCount++;
    if (this.activeSort && this.activeSort !== 'featured') activeCount++;
    const searchVal = (document.getElementById('catalog-inline-search')?.value || document.getElementById('catalog-inline-search-mobile')?.value || '').trim();
    if (searchVal.length > 0) activeCount++;

    if (activeCount > 0) {
      badge.textContent = `${activeCount}`;
      badge.classList.add('is-visible');
    } else {
      badge.textContent = '';
      badge.classList.remove('is-visible');
    }
  }
}

// ====================================================================
// ORVÉL 3D EXPLODED WATCH & CALIBRE ENGINE
// ====================================================================

function renderOrvelExplodedWatchMarkup() {
  return `
    <div class="hero-watch-wrap orvel-watch-widget" id="orvel-right-watch-widget">
      <div class="hero-watch-aura orvel-watch-halo"></div>
      <svg id="orvelCalloutSvg" class="orvel-callout-svg" aria-hidden="true"></svg>
      <div id="orvelCalloutLabels" class="orvel-callout-labels" aria-hidden="true"></div>

      <div id="orvelTiltStage" class="orvel-tilt-stage">
        <div id="orvel3DAssembly" class="orvel-3d-assembly">

          <!-- 1. Exhibition Sapphire Caseback (order = -3) -->
          <div class="orvel-layer orvel-steel-shadow orvel-center-offset" data-order="-3" data-dx="0" data-phase="7.2" data-side="back"
               data-title="Exhibition Caseback" data-sub="Brushed 316L steel & sapphire" data-slot="left-bottom">
            <svg viewBox="0 0 400 400" class="orvel-svg-52">
              <defs>
                <linearGradient id="cbMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#9CA3AF"/>
                  <stop offset="30%" stop-color="#374151"/>
                  <stop offset="55%" stop-color="#D1D5DB"/>
                  <stop offset="80%" stop-color="#1F2937"/>
                  <stop offset="100%" stop-color="#6B7280"/>
                </linearGradient>
                <radialGradient id="cbGlass" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
                  <stop offset="60%" stop-color="rgba(15,23,42,0.03)"/>
                  <stop offset="100%" stop-color="rgba(90,165,255,0.10)"/>
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="182" fill="none" stroke="url(#cbMetal)" stroke-width="28"/>
              <circle cx="200" cy="200" r="195" fill="none" stroke="#1f2937" stroke-width="2"/>
              <g stroke="#111827" stroke-width="6">
                <line x1="200" y1="4" x2="200" y2="18"/><line x1="200" y1="382" x2="200" y2="396"/>
                <line x1="30" y1="102" x2="42" y2="109"/><line x1="358" y1="291" x2="370" y2="298"/>
                <line x1="30" y1="298" x2="42" y2="291"/><line x1="358" y1="109" x2="370" y2="102"/>
              </g>
              <circle cx="200" cy="200" r="166" fill="url(#cbGlass)" stroke="#C9A45C" stroke-width="2"/>
              <path id="cbArc1" d="M 52,200 A 148,148 0 1,1 348,200" fill="none"/>
              <path id="cbArc2" d="M 348,200 A 148,148 0 1,1 52,200" fill="none"/>
              <text fill="#F3F4F6" font-family="monospace" font-size="8.5" font-weight="600" letter-spacing="3.5">
                <textPath href="#cbArc1" startOffset="50%" text-anchor="middle">MIX INVENTORIES · SAPPHIRE EXHIBITION</textPath>
              </text>
              <text fill="#D1D5DB" font-family="monospace" font-size="8" letter-spacing="3.2">
                <textPath href="#cbArc2" startOffset="50%" text-anchor="middle">316L STAINLESS STEEL · 100M TESTED</textPath>
              </text>
            </svg>
          </div>

          <!-- 2. Engraved 18K Aurum Gold Rotor (order = -2) -->
          <div class="orvel-layer orvel-disc-shadow orvel-center-offset" data-order="-2" data-dx="0" data-phase="6.4" data-side="back"
               data-title="18K Aurum Rotor" data-sub="Côtes de Genève gravity rotor" data-slot="right-top">
            <div id="orvelRotorDisc" class="orvel-svg-46">
              <svg viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="auRotor" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#FFF0C2"/>
                    <stop offset="28%" stop-color="#D4AF37"/>
                    <stop offset="55%" stop-color="#8A6421"/>
                    <stop offset="78%" stop-color="#F3D689"/>
                    <stop offset="100%" stop-color="#9E7628"/>
                  </linearGradient>
                  <linearGradient id="auRim" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#5C4010"/>
                    <stop offset="50%" stop-color="#F9E5A7"/>
                    <stop offset="100%" stop-color="#8A6421"/>
                  </linearGradient>
                </defs>
                <path d="M 28,200 A 172,172 0 0,0 372,200 L 320,200 A 120,120 0 0,1 80,200 Z" fill="url(#auRotor)" stroke="url(#auRim)" stroke-width="3"/>
                <path d="M 42,200 A 158,158 0 0,0 358,200" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" stroke-dasharray="6 4"/>
                <path d="M 80,200 L 166,200 L 184,322 L 122,302 Z" fill="url(#auRotor)" stroke="url(#auRim)" stroke-width="1.5"/>
                <path d="M 320,200 L 234,200 L 216,322 L 278,302 Z" fill="url(#auRotor)" stroke="url(#auRim)" stroke-width="1.5"/>
                <path id="rotArcText" d="M 66,210 A 142,142 0 0,0 334,210" fill="none"/>
                <text fill="#2B1C06" font-family="Georgia, serif" font-weight="700" font-size="13.5" letter-spacing="3.5">
                  <textPath href="#rotArcText" startOffset="50%" text-anchor="middle">MIX INVENTORIES · CALIBRE MI-21 · 25 JEWELS</textPath>
                </text>
                <circle cx="200" cy="200" r="36" fill="url(#cbMetal)" stroke="#F3D689" stroke-width="2.5"/>
                <circle cx="200" cy="200" r="16" fill="#1E293B" stroke="#94A3B8" stroke-width="1.5"/>
                <circle cx="200" cy="174" r="3" fill="#2563EB"/><circle cx="222" cy="213" r="3" fill="#2563EB"/><circle cx="178" cy="213" r="3" fill="#2563EB"/>
              </svg>
            </div>
          </div>

          <!-- 3. Photorealistic Swiss Mechanical Calibre (order = -1) -->
          <div class="orvel-layer orvel-steel-shadow orvel-center-offset" data-order="-1" data-dx="0" data-phase="5.6" data-side="back"
               data-title="Calibre MI-21" data-sub="28,800 BPH (4Hz), 25 Jewels" data-slot="left-top">
            <div class="orvel-round-47">
              <img src="assets/images/watch-layers/layer_movement.webp" alt="Mix Inventories Mechanical Calibre" />
              <svg viewBox="0 0 200 200" class="orvel-overlay-svg">
                <g class="orvel-balance-wheel" style="transform-origin: 92px 148px;">
                  <circle cx="92" cy="148" r="24" fill="none" stroke="#F6E0A6" stroke-width="2.5" stroke-dasharray="7 5"/>
                </g>
              </svg>
            </div>
          </div>

          <!-- 4. Original 316L Steel Case & Bracelet (order = 0) -->
          <div class="orvel-layer orvel-steel-shadow" data-order="0" data-dx="0" data-phase="4.0" data-side="front"
               data-title="316L Monobloc Case" data-sub="Cold-forged steel & Aurum" data-slot="left-bottom">
            <img src="assets/images/watch-layers/layer_case_strap.webp" alt="Mix Inventories Case & Strap" class="orvel-img-full orvel-dim-night" />
          </div>

          <!-- 5. Original Gold Crown & Pushers (order = 0.2, dx = +48) -->
          <div class="orvel-layer orvel-disc-shadow" data-order="0.2" data-dx="48" data-phase="4.8" data-side="front"
               data-title="Screw-Down Crown" data-sub="Dual gasket 100m seal" data-slot="right-bottom">
            <div id="orvelCrownStem" class="orvel-crown-stem"></div>
            <img src="assets/images/watch-layers/layer_crown.webp" alt="Mix Inventories Crown" class="orvel-img-full orvel-dim-night orvel-crown-clip" />
          </div>

          <!-- 6. Original Obsidian Chrono Dial + Lume Markers (order = 1) -->
          <div class="orvel-layer orvel-disc-shadow orvel-center-offset" data-order="1" data-dx="0" data-phase="3.1" data-side="front"
               data-title="Obsidian Sunray Dial" data-sub="Triple gold chrono registers" data-slot="left-top">
            <div class="orvel-round-45">
              <img src="assets/images/watch-layers/layer_dial.webp" alt="Mix Inventories Dial" />
              <svg viewBox="0 0 400 400" class="orvel-overlay-svg orvel-lume-markers">
                <!-- Hero 3D Watch Dial SVG Logo: Mix Inventories -->
                <g id="dialBrandLogo" transform="translate(200, 130)">
                  <rect x="-62" y="-12" width="124" height="22" rx="4" fill="#0C0D10" opacity="0.94"/>
                  <text x="0" y="0" text-anchor="middle" fill="#E8D4A2" font-family="'Italiana', 'Cormorant Garamond', 'Cinzel', serif" font-weight="700" font-size="9" letter-spacing="2.8">MIX INVENTORIES</text>
                  <text x="0" y="6.5" text-anchor="middle" fill="#C6A46B" font-family="'Plus Jakarta Sans', sans-serif" font-size="3.5" letter-spacing="1.5" opacity="0.85">AUTOMATIC</text>
                </g>
                <rect x="190" y="34" width="6.5" height="34" rx="2" class="orvel-lume-fill"/>
                <rect x="203.5" y="34" width="6.5" height="34" rx="2" class="orvel-lume-fill"/>
                <g transform="rotate(30 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(60 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(120 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(150 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(210 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(240 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(300 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
                <g transform="rotate(330 200 200)"><rect x="196.5" y="34" width="7" height="30" rx="2" class="orvel-lume-fill"/></g>
              </svg>
            </div>
          </div>

          <!-- 7. Real-Time 28,800 BPH Chronograph Hands (order = 1.8) -->
          <div class="orvel-layer orvel-disc-shadow orvel-center-offset" data-order="1.8" data-dx="0" data-phase="2.2" data-side="none">
            <svg viewBox="0 0 400 400" class="orvel-svg-45">
              <g id="orvelHrHand" transform="rotate(305 200 200)">
                <polygon points="193,222 195,108 200,96 205,108 207,222" fill="#C9A45C"/>
                <rect x="197.2" y="112" width="5.6" height="72" rx="2" fill="#F4F1EA" class="orvel-lume-fill"/>
              </g>
              <g id="orvelMinHand" transform="rotate(60 200 200)">
                <polygon points="194,226 196,68 200,54 204,68 206,226" fill="#C9A45C"/>
                <rect x="197.5" y="72" width="5" height="106" rx="2" fill="#F4F1EA" class="orvel-lume-fill"/>
              </g>
              <g id="orvelSecHand" transform="rotate(180 200 200)">
                <line x1="200" y1="242" x2="200" y2="44" stroke="#E5C883" stroke-width="2.2"/>
                <circle cx="200" cy="84" r="4.5" fill="#F4F1EA" stroke="#C9A45C" stroke-width="1.5" class="orvel-lume-fill"/>
                <circle cx="200" cy="200" r="7.5" fill="#C9A45C"/>
              </g>
            </svg>
          </div>

          <!-- 8. Original 18K Aurum Fluted Bezel (order = 2.6) -->
          <div class="orvel-layer orvel-disc-shadow orvel-center-offset" data-order="2.6" data-dx="0" data-phase="1.3" data-side="front"
               data-title="18K Aurum Bezel" data-sub="Fluted gold & LumiNova pip" data-slot="right-top">
            <div class="orvel-round-566">
              <img src="assets/images/watch-layers/layer_bezel.webp" alt="ORVÉL Fluted Bezel" class="orvel-dim-night" />
            </div>
          </div>

          <!-- 9. Double-Domed AR Sapphire Crystal (order = 3.5) -->
          <div class="orvel-layer orvel-center-offset" data-order="3.5" data-dx="0" data-phase="0.4" data-side="back">
            <svg viewBox="0 0 400 400" class="orvel-svg-45">
              <defs>
                <radialGradient id="sapphDome" cx="32%" cy="28%" r="70%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.32)"/>
                  <stop offset="40%" stop-color="rgba(90,175,255,0.12)"/>
                  <stop offset="80%" stop-color="rgba(15,30,60,0.04)"/>
                  <stop offset="100%" stop-color="rgba(160,220,255,0.28)"/>
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="194" fill="url(#sapphDome)" stroke="rgba(190,230,255,0.55)" stroke-width="2.5"/>
              <path d="M 78,108 A 155,155 0 0,1 292,82" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>

        </div>
      </div>

      <!-- Interactive HUD Pill Below Watch -->
      <div class="orvel-watch-hud">
        <button type="button" class="orvel-hud-btn is-active" data-orvel-phase="0">Assembled</button>
        <button type="button" class="orvel-hud-btn" data-orvel-phase="0.45">Explode 8x</button>
        <button type="button" class="orvel-hud-btn" data-orvel-phase="1">360° Calibre</button>
        <input id="orvelExplodeSlider" type="range" min="0" max="100" value="0" class="orvel-hud-slider" aria-label="Explode Watch Layers" />
        <button type="button" id="orvelLumeBtn" class="orvel-hud-btn orvel-lume-btn">☀️ Lume</button>
      </div>
    </div>
  `;
}

function initOrvelExplodedHeroWatch() {
  const widgetEl = document.getElementById('orvel-right-watch-widget');
  if (!widgetEl) return;

  const heroSectionEl = document.getElementById('hero') || widgetEl.closest('section') || document.body;
  const assemblyEl = document.getElementById('orvel3DAssembly');
  const rotorEl = document.getElementById('orvelRotorDisc');
  const stemEl = document.getElementById('orvelCrownStem');
  const svgOverlay = document.getElementById('orvelCalloutSvg');
  const labelsBox = document.getElementById('orvelCalloutLabels');
  const sliderEl = document.getElementById('orvelExplodeSlider');
  const lumeBtn = document.getElementById('orvelLumeBtn');
  const phaseBtns = [...widgetEl.querySelectorAll('[data-orvel-phase]')];

  // Trigger smooth Right-Side Entrance on Page Open
  widgetEl.classList.add('orvel-entering');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      widgetEl.classList.add('orvel-entered');
    });
  });

  // Robustly locate Left-side Hero Typography Elements (works regardless of wrapper class name)
  const activeSlideEl = widgetEl.closest('.hero-slide') || heroSectionEl;
  const heroTagEl = activeSlideEl.querySelector('.hero-tag, .hero-eyebrow, [class*="hero-tag"]');
  const heroTitleEl = activeSlideEl.querySelector('.hero-title, h1');
  const heroSubtextEl = activeSlideEl.querySelector('.hero-subtext, .hero-desc, .hero-subtitle, p');

  const heroStories = [
    {
      tag: '01 / 03 — ORVÉL ROYAL CHRONO MASTER',
      titleHtml: '<span class="orvel-title-line-1">TIME,</span><em class="orvel-title-line-2">Redefined.</em>',
      sub: 'A bold expression of precision, elegance, and contemporary horology.'
    },
    {
      tag: '02 / 03 — EIGHT HOROLOGICAL LAYERS',
      titleHtml: '<span class="orvel-title-line-1">CRAFTED,</span><em class="orvel-title-line-2">Layer by Layer.</em>',
      sub: '18K Aurum fluted bezel, double-domed AR sapphire, and cold-forged 316L steel separated in 3D space.'
    },
    {
      tag: '03 / 03 — CALIBRE ORV-21 AUTOMATIC',
      titleHtml: '<span class="orvel-title-line-1">PRECISION,</span><em class="orvel-title-line-2">In Motion.</em>',
      sub: 'Turned 180° to reveal a 25-jewel mechanical heart beating at 28,800 vibrations per hour.'
    }
  ];

  const heroSubEl = heroSubtextEl;

  if (heroTitleEl) {
    heroTitleEl.innerHTML = heroStories[0].titleHtml;
  }

  if (heroTitleEl && heroTagEl && heroSubEl) {
    heroTagEl.textContent = heroStories[0].tag;
    heroTitleEl.innerHTML = heroStories[0].titleHtml;
    heroSubEl.textContent = heroStories[0].sub;
    heroTagEl.classList.add('orvel-hero-tag-reveal');
    heroSubEl.classList.add('orvel-hero-sub-reveal');
  }

  let activeStoryIdx = 0;
  let storyTimer = null;
  function syncHeroStoryText(stageIdx, animate = false) {
    if (animate) {
      document.getElementById('hero')?.classList.add('orvel-stage-switched');
    }
    if (stageIdx === activeStoryIdx || !heroTitleEl || !heroSubEl || !heroTagEl) return;
    activeStoryIdx = stageIdx;
    const story = heroStories[stageIdx] || heroStories[0];
    if (storyTimer) clearTimeout(storyTimer);

    storyTimer = setTimeout(() => {
      heroTitleEl.classList.add('hero-text-exit');
      setTimeout(() => {
        heroTagEl.textContent = story.tag;
        heroTitleEl.innerHTML = story.titleHtml;
        heroSubEl.textContent = story.sub;

        heroTitleEl.classList.remove('hero-text-exit');
        heroTagEl.classList.remove('orvel-hero-tag-reveal');
        heroSubEl.classList.remove('orvel-hero-sub-reveal');
        void heroTitleEl.offsetWidth;
        heroTagEl.classList.add('orvel-hero-tag-reveal');
        heroSubEl.classList.add('orvel-hero-sub-reveal');
      }, 160);
    }, 30);
  }

  const applyLeftHeroStory = syncHeroStoryText;
  const stageTargets = [0, 0.45, 0.88];
  let currentStageIdx = 0;
  let calloutAutoHidden = false;
  let calloutHideTimer = null;

  function scheduleCalloutVisibility(stageIdx) {
    if (calloutHideTimer) clearTimeout(calloutHideTimer);
    if (stageIdx === 1 || stageIdx === 2) {
      calloutAutoHidden = false;
      widgetEl.classList.remove('orvel-callouts-auto-hidden');
      document.documentElement.classList.add('orvel-hero-exploded', 'orvel-scrolled-tags-on');
      if (svgOverlay) svgOverlay.style.opacity = '1';
      calloutHideTimer = setTimeout(() => {
        calloutAutoHidden = true;
        widgetEl.classList.add('orvel-callouts-auto-hidden');
        if (svgOverlay) svgOverlay.style.opacity = '0';
      }, 2800);
    } else {
      calloutAutoHidden = false;
      widgetEl.classList.remove('orvel-callouts-auto-hidden');
      document.documentElement.classList.remove('orvel-hero-exploded', 'orvel-scrolled-tags-on');
      if (svgOverlay) svgOverlay.style.opacity = '0';
      if (labelsBox) {
        labelsBox.querySelectorAll('.orvel-callout-tag').forEach(t => t.style.opacity = '0');
      }
    }
  }

  const st = {
    p: 0,
    targetP: 0,
    currentDamping: 0.068,     // Adapts dynamically: 0.045 on slow scroll, 0.105 on fast scroll!
    entranceP: 0.26,
    pointerX: 0,
    pointerY: 0,
    smoothCursorX: 0,
    smoothCursorY: 0,
    bezelCursorX: 0,
    bezelCursorY: 0,
    cursorActive: false,
    phaseStartTime: 0,
    anchorMouseX: null,
    anchorMouseY: null,
    exitUnits: 0,              // Tracks post-Option-3 exit scrolls (Light scroll = +0.52 [2 scrolls], Fast scroll = +1.0 [1 scroll])
    option3ArrivedTime: 0,
    rotorAngle: 15,
    rotorVel: 0,
    clock: 0,
    isHeroVisible: true
  };

  function setHeaderVisibility(visible) {
    const siteHdr = document.getElementById('site-header');
    const announceBar = document.querySelector('.announcement-bar');
    if (announceBar) {
      if (visible) {
        announceBar.classList.remove('is-hidden');
      } else {
        announceBar.classList.add('is-hidden');
      }
    }
    if (siteHdr) {
      siteHdr.classList.remove('is-hidden');
      if (visible) {
        siteHdr.classList.remove('is-scrolled');
      } else {
        siteHdr.classList.add('is-scrolled');
      }
    }
  }

  function triggerStageTransition(newStageIdx, customTargetP, dampingSpeed) {
    currentStageIdx = newStageIdx;
    stageChangeTime = performance.now();
    touchStageChangeTime = stageChangeTime;
    if (newStageIdx === 0) {
      setHeaderVisibility(true);
    } else {
      setHeaderVisibility(false);
    }
    st.targetP = customTargetP !== undefined ? customTargetP : stageTargets[newStageIdx];
    st.currentDamping = dampingSpeed || 0.068;
    st.cursorActive = false;   // Always open into full Picture 2 right-expanded pose first!
    st.pointerX = 0;
    st.pointerY = 0;
    st.smoothCursorX = 0;
    st.smoothCursorY = 0;
    st.bezelCursorX = 0;
    st.bezelCursorY = 0;
    st.phaseStartTime = performance.now();
    st.anchorMouseX = null;
    st.anchorMouseY = null;
    st.exitUnits = 0;
    if (newStageIdx === 2) {
      st.option3ArrivedTime = performance.now();
    }
    // Sync HUD button active state (syncHeroStoryText is ONLY called from phaseBtns click per instructions)
    for (let i = 0; i < phaseBtns.length; i++) {
      phaseBtns[i].classList.toggle('is-active', i === newStageIdx);
    }
    if (widgetEl) {
      widgetEl.setAttribute('data-stage', String(newStageIdx));
      widgetEl.setAttribute('data-explode-state', newStageIdx >= 1 ? 'exploded' : 'assembled');
      widgetEl.setAttribute('data-flip-state', newStageIdx === 2 ? 'flipped' : 'front');
    }
    if (typeof scheduleCalloutVisibility === 'function') {
      scheduleCalloutVisibility(newStageIdx);
    }
    // Update left hero story text smoothly for this stage
    syncHeroStoryText(newStageIdx, true);
    // Update luxury stage dots
    _updateStageDots(newStageIdx);
  }

  // Inject luxury stage indicator dots into #hero (runs once, updates on each stage change)
  let _stageDotEls = [];
  (function _initStageDots() {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    const container = document.createElement('div');
    container.className = 'orvel-stage-dots';
    container.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'orvel-stage-dot' + (i === 0 ? ' active' : '');
      container.appendChild(dot);
      _stageDotEls.push(dot);
    }
    heroEl.appendChild(container);
  })();

  function _updateStageDots(activeIdx) {
    _stageDotEls.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIdx);
    });
  }

  const smoothstep = (a, b, x) => {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };

  const hrEl = document.getElementById('orvelHrHand');
  const minEl = document.getElementById('orvelMinHand');
  const secEl = document.getElementById('orvelSecHand');

  const ORDER_KEY_MAP = {
    '-3': 'caseback',
    '-2': 'rotor',
    '-1': 'calibre',
    '0': 'body',
    '0.2': 'crown',
    '1': 'dial',
    '1.8': 'hands',
    '2.6': 'bezel',
    '3.5': 'crystal'
  };

  // Mobile (<= 1030px) vectors stay 100% as-is:
  const MOBILE_LAYER_VECTORS = {
    caseback: { dx: -72, dy: 14, dz: -90, rot: -5, rx: 4, ry: -14, scale: 0.95 },
    rotor: { dx: -48, dy: 9, dz: -55, rot: -3, rx: 3, ry: -10, scale: 0.97 },
    calibre: { dx: -24, dy: 4, dz: -22, rot: -1.5, rx: 2, ry: -5, scale: 0.99 },
    body: { dx: 0, dy: 0, dz: 0, rot: 0, rx: 0, ry: 0, scale: 1.00 },
    crown: { dx: 38, dy: -2, dz: 25, rot: 2, rx: 0, ry: 6, scale: 1.02 },
    dial: { dx: 24, dy: -4, dz: 34, rot: 1.5, rx: -2, ry: 6, scale: 1.01 },
    hands: { dx: 28, dy: -5, dz: 44, rot: 1.5, rx: -2, ry: 6, scale: 1.02 },
    bezel: { dx: 96, dy: -10, dz: 76, rot: 4, rx: -3, ry: 12, scale: 1.03 },
    crystal: { dx: 96, dy: -10, dz: 92, rot: 4, rx: -3, ry: 12, scale: 1.03 }
  };

  // Desktop (> 1030px) vectors: True 3D Isometric Separation along the central exploded axis
  const DESKTOP_LAYER_VECTORS = {
    caseback: { dx: -195, dy: 34, dz: -105, rot: -4.5, rx: 4, ry: -12, scale: 0.95 },
    rotor: { dx: -130, dy: 22, dz: -70, rot: -3.0, rx: 3, ry: -9, scale: 0.97 },
    calibre: { dx: -68, dy: 12, dz: -38, rot: -1.5, rx: 2, ry: -5, scale: 0.99 },
    body: { dx: 0, dy: 0, dz: 0, rot: 0, rx: 0, ry: 0, scale: 1.00 },
    crown: { dx: 65, dy: -4, dz: 28, rot: 1.5, rx: 0, ry: 6, scale: 1.02 },
    dial: { dx: 72, dy: -12, dz: 45, rot: 1.5, rx: -2, ry: 7, scale: 1.01 },
    hands: { dx: 102, dy: -18, dz: 70, rot: 1.8, rx: -2, ry: 8, scale: 1.02 },
    bezel: { dx: 195, dy: -32, dz: 120, rot: 3.5, rx: -3, ry: 12, scale: 1.03 },
    crystal: { dx: 265, dy: -44, dz: 160, rot: 4.0, rx: -3, ry: 14, scale: 1.03 }
  };

  // Inject refined metallic gold SVG gradient & soft glow filter once
  if (svgOverlay && !svgOverlay.querySelector('#orvelGoldLeaderGrad')) {
    const NS = 'http://www.w3.org/2000/svg';
    const defs = document.createElementNS(NS, 'defs');
    defs.innerHTML = `
      <linearGradient id="orvelGoldLeaderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C9A45C" stop-opacity="0.72"/>
        <stop offset="50%" stop-color="#F2DFB4" stop-opacity="0.96"/>
        <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.78"/>
      </linearGradient>
    `;
    svgOverlay.appendChild(defs);
  }

  const layers = [...widgetEl.querySelectorAll('.orvel-layer')].map((el) => {
    let tag = null, line = null, dot = null, halo = null, endDot = null;
    if (el.dataset.title) {
      tag = document.createElement('div');
      tag.className = 'orvel-callout-tag orvel-callout';
      tag.innerHTML = `<b>${el.dataset.title}</b><span>${el.dataset.sub}</span>`;
      tag.style.opacity = '0';
      labelsBox.appendChild(tag);
      const NS = 'http://www.w3.org/2000/svg';
      line = document.createElementNS(NS, 'path');
      line.setAttribute('class', 'orvel-callout-path');
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', 'url(#orvelGoldLeaderGrad)');
      line.setAttribute('stroke-width', '1.05');
      line.setAttribute('stroke-linecap', 'round');
      line.setAttribute('stroke-linejoin', 'round');
      line.style.opacity = '0';
      halo = document.createElementNS(NS, 'circle');
      halo.setAttribute('class', 'orvel-callout-halo');
      halo.setAttribute('r', '5.8');
      halo.setAttribute('fill', 'rgba(212, 175, 55, 0.10)');
      halo.setAttribute('stroke', 'rgba(242, 223, 180, 0.55)');
      halo.setAttribute('stroke-width', '0.85');
      halo.style.opacity = '0';
      dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('class', 'orvel-callout-dot');
      dot.setAttribute('r', '2.3');
      dot.setAttribute('fill', '#F6E6BC');
      dot.setAttribute('stroke', '#09090C');
      dot.setAttribute('stroke-width', '0.9');
      dot.style.opacity = '0';
      endDot = document.createElementNS(NS, 'circle');
      endDot.setAttribute('class', 'orvel-callout-end');
      endDot.setAttribute('r', '1.6');
      endDot.setAttribute('fill', '#E8CE90');
      endDot.style.opacity = '0';
      svgOverlay.appendChild(line);
      svgOverlay.appendChild(halo);
      svgOverlay.appendChild(dot);
      svgOverlay.appendChild(endDot);
    }
    const orderVal = parseFloat(el.dataset.order || 0);
    return {
      el, tag, line, dot, halo, endDot, vis: 0,
      order: orderVal,
      key: ORDER_KEY_MAP[String(orderVal)] || 'body',
      dx: parseFloat(el.dataset.dx || 0),
      phase: parseFloat(el.dataset.phase || 0),
      side: el.dataset.side,
      slot: el.dataset.slot
    };
  });

  let wWidth = 600, wHeight = 540, wCenterX = 960, wCenterY = 400, isMobile = window.innerWidth <= 820;
  function updateCachedMetrics() {
    const r = widgetEl.getBoundingClientRect();
    wWidth = r.width || window.innerWidth || 600;
    wHeight = r.height || 540;
    wCenterX = r.left + wWidth * 0.5;
    wCenterY = r.top + wHeight * 0.5;
    isMobile = window.innerWidth <= 820;
    svgOverlay.setAttribute('viewBox', `0 0 ${wWidth} ${wHeight}`);
  }
  updateCachedMetrics();
  window.addEventListener('resize', updateCachedMetrics, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(updateCachedMetrics, 120), { passive: true });
  if ('ResizeObserver' in window) {
    new ResizeObserver(() => updateCachedMetrics()).observe(widgetEl);
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      st.isHeroVisible = entries[0]?.isIntersecting ?? true;
    }, { threshold: 0.01 });
    io.observe(heroSectionEl);
  }

  // Accurate Button Click -> Let unified scroll/stage controller stay 100% synced!
  phaseBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      window._orvelManualHud = true;
      syncHeroStoryText(idx, true);
      triggerStageTransition(idx, parseFloat(btn.dataset.orvelPhase), window.innerWidth <= 1030 ? 0.14 : 0.095);
      if (typeof window.__orvelSyncScrollStep === 'function') {
        window.__orvelSyncScrollStep(idx);
      }
    });
  });

  sliderEl.addEventListener('input', (e) => {
    const val = Number(e.target.value) / 100;
    const idx = val < 0.24 ? 0 : (val < 0.65 ? 1 : 2);
    st.targetP = val;
    st.currentDamping = 0.12;
    if (idx !== currentStageIdx) {
      currentStageIdx = idx;
      window._orvelManualHud = true;
      syncHeroStoryText(idx, true);
      for (let i = 0; i < phaseBtns.length; i++) {
        phaseBtns[i].classList.toggle('is-active', i === idx);
      }
      if (widgetEl) {
        widgetEl.setAttribute('data-stage', String(idx));
        widgetEl.setAttribute('data-explode-state', idx === 1 ? 'exploded' : (idx === 2 ? 'calibre' : 'assembled'));
      }
      if (idx === 1) {
        document.documentElement.classList.add('orvel-hero-exploded', 'orvel-scrolled-tags-on');
      } else if (idx === 0) {
        document.documentElement.classList.remove('orvel-hero-exploded', 'orvel-scrolled-tags-on');
      }
      if (typeof window.__orvelSyncScrollStep === 'function') {
        window.__orvelSyncScrollStep(idx);
      }
    }
  });

  lumeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isNight = widgetEl.classList.toggle('night-lume');
    lumeBtn.textContent = isNight ? '🌙 Lume ON' : '☀️ Lume';
  });

  function handleCursorMove(clientX, clientY) {
    if (window.innerWidth <= 1030) return;
    if (!st.isHeroVisible) return;

    // Fluid, instantaneous normalized coordinates [-1.25, 1.25] relative to watch widget center
    st.pointerX = Math.max(-1.25, Math.min(1.25, (clientX - wCenterX) / 320));
    st.pointerY = Math.max(-1.1, Math.min(1.1, (clientY - wCenterY) / 260));
    st.cursorActive = true;
  }

  window.addEventListener('mousemove', (e) => handleCursorMove(e.clientX, e.clientY), { passive: true });
  heroSectionEl.addEventListener('mouseleave', () => {
    st.pointerX = 0;
    st.pointerY = 0;
  }, { passive: true });

  // LENIS & NATIVE BROWSER SCROLL LOCKING:
  // Prevents the window/header from scrolling or jittering during Option 1 -> Option 2 -> Option 3
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const unlockHeroScroll = () => {
    if (window.lenis && typeof window.lenis.start === 'function') {
      window.lenis.start();
    }
  };

  // When clicking any anchor/nav link, unlock Lenis so smooth scroll works
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      unlockHeroScroll();
    });
  });

  // Mobile / Tablet Horizontal Touch Swipe on Watch Widget
  let touchStartX = 0;
  let touchStartY = 0;
  widgetEl.addEventListener('touchstart', (e) => {
    if (!e.touches[0]) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  widgetEl.addEventListener('touchend', (e) => {
    if (!e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      const nextIdx = dx < 0 ? Math.min(2, currentStageIdx + 1) : Math.max(0, currentStageIdx - 1);
      if (nextIdx !== currentStageIdx) {
        triggerStageTransition(nextIdx, stageTargets[nextIdx], 0.08);
      }
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // LUXURY WATCH STAGE CONTROLLER (SCROLL DOWN -> EXPAND, SCROLL UP -> REVERSE)
  // --------------------------------------------------------------------------
  let isGlidingToNext = false;
  function scrollToNextSection() {
    const target = document.getElementById('bento-collections') ||
      document.querySelector('main > section:nth-of-type(2)');
    if (!target) return;
    const header = document.getElementById('site-header');
    const offset = header ? header.offsetHeight : 70;
    const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);

    isGlidingToNext = true;
    if (window.lenis && typeof window.lenis.start === 'function') {
      window.lenis.start();
    }
    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(targetY, {
        duration: 0.85,
        onComplete: () => { isGlidingToNext = false; }
      });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      setTimeout(() => { isGlidingToNext = false; }, 900);
    }
  }

  // Expose 3D animation phase sync for initOrvelUnifiedFiveScrollHeroAllDevices
  window.__orvelSyncWatchAnimation = function (stageIdx, customTargetP) {
    currentStageIdx = stageIdx;
    const prevTargetP = st.targetP;
    st.targetP = customTargetP !== undefined
      ? customTargetP
      : (stageIdx === 2 ? 1 : (stageTargets[stageIdx] ?? 0));
    st.currentDamping = window.innerWidth <= 1030 ? 0.15 : 0.105;
    st.cursorActive = false;
    st.pointerX = 0;
    st.pointerY = 0;
    st.smoothCursorX = 0;
    st.smoothCursorY = 0;
    st.bezelCursorX = 0;
    st.bezelCursorY = 0;
    st.phaseStartTime = performance.now();
    if (st.targetP > 0.5 && prevTargetP < st.targetP) {
      st.rotorVel += 10;
    }
    for (let i = 0; i < phaseBtns.length; i++) {
      phaseBtns[i].classList.toggle('is-active', i === stageIdx);
    }
    scheduleCalloutVisibility(stageIdx);
    _updateStageDots(stageIdx);
  };

  let gestureConsumed = false;
  let gestureTimer = null;
  let stageChangeTime = 0;

  window.addEventListener('wheel', (e) => {
    // All viewports handled exclusively by initOrvelUnifiedFiveScrollHeroAllDevices
    return;

    // If user has already scrolled past the hero section (> 30px), allow 100% natural normal scroll
    if (window.scrollY > 30 || !st.isHeroVisible) {
      isGlidingToNext = false;
      return;
    }

    if (isGlidingToNext) {
      // Swallowing wheel ticks during glide transition so momentum doesn't fight Lenis
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }

    const scrollingDown = e.deltaY > 0;
    const scrollingUp = e.deltaY < 0;
    const absDelta = Math.abs(e.deltaY);
    if (absDelta < 4) return;

    const now = performance.now();

    // Reset gesture burst timer (clears consumed lock after 350ms of silence between gestures)
    clearTimeout(gestureTimer);
    gestureTimer = setTimeout(() => {
      gestureConsumed = false;
    }, 350);

    // WHILE IN HERO (scrollY <= 25): STRICT PINNED STAGE STEPPING
    if (window.scrollY <= 25) {
      // If this swipe gesture has already triggered a transition, SWALLOW ALL REMAINING MOMENTUM TICKS!
      if (gestureConsumed) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      const now = performance.now();
      // Enforce minimum cooldown of 750ms between stage steps
      if (now - stageChangeTime < 750) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }

      // 1. SCROLL DOWN
      if (scrollingDown) {
        if (currentStageIdx === 0) {
          e.preventDefault();
          e.stopImmediatePropagation();
          gestureConsumed = true;
          triggerStageTransition(1, stageTargets[1], 0.075);
          return;
        }

        if (currentStageIdx === 1) {
          e.preventDefault();
          e.stopImmediatePropagation();
          gestureConsumed = true;
          triggerStageTransition(2, stageTargets[2], 0.075);
          return;
        }

        if (currentStageIdx >= 2) {
          // User is in Stage 2 and intentionally swiped down on a NEW gesture
          e.preventDefault();
          e.stopImmediatePropagation();
          gestureConsumed = true;
          scrollToNextSection();
          return;
        }
      }

      // 2. SCROLL UP (Reversing stages inside Hero)
      if (scrollingUp) {
        if (currentStageIdx === 2) {
          e.preventDefault();
          e.stopImmediatePropagation();
          gestureConsumed = true;
          triggerStageTransition(1, stageTargets[1], 0.075);
          return;
        }
        if (currentStageIdx === 1) {
          e.preventDefault();
          e.stopImmediatePropagation();
          gestureConsumed = true;
          triggerStageTransition(0, stageTargets[0], 0.075);
          return;
        }
        if (currentStageIdx === 0) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return;
        }
      }
    }
  }, { passive: false, capture: true });

  // Touch scroll stepping for mobile / tablet
  let touchScrollStartY = 0;
  let touchGestureConsumed = false;
  let touchStageChangeTime = 0;

  window.addEventListener('touchstart', (e) => {
    if (!e.touches[0]) return;
    touchScrollStartY = e.touches[0].clientY;
    touchGestureConsumed = false;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    touchGestureConsumed = false;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    // All viewports handled exclusively by initOrvelUnifiedFiveScrollHeroAllDevices
    return;
    if (window.scrollY > 30 || !st.isHeroVisible || isGlidingToNext) return;
    if (!e.touches[0]) return;

    const dy = touchScrollStartY - e.touches[0].clientY; // Positive = swipe up / scroll down
    if (Math.abs(dy) < 18) return;

    const now = performance.now();

    if (window.scrollY <= 25) {
      if (touchGestureConsumed || (now - touchStageChangeTime < 500)) {
        if (e.cancelable) e.preventDefault();
        return;
      }

      if (dy > 18) { // Swiping up (scrolling down)
        if (currentStageIdx === 0) {
          if (e.cancelable) e.preventDefault();
          touchGestureConsumed = true;
          triggerStageTransition(1, stageTargets[1], 0.075);
          return;
        }
        if (currentStageIdx === 1) {
          if (e.cancelable) e.preventDefault();
          touchGestureConsumed = true;
          triggerStageTransition(2, stageTargets[2], 0.075);
          return;
        }
        if (currentStageIdx >= 2) {
          if (e.cancelable) e.preventDefault();
          touchGestureConsumed = true;
          scrollToNextSection();
          return;
        }
      } else if (dy < -18) { // Swiping down (scrolling up)
        if (currentStageIdx === 2) {
          if (e.cancelable) e.preventDefault();
          touchGestureConsumed = true;
          triggerStageTransition(1, stageTargets[1], 0.075);
          return;
        }
        if (currentStageIdx === 1) {
          if (e.cancelable) e.preventDefault();
          touchGestureConsumed = true;
          triggerStageTransition(0, stageTargets[0], 0.075);
          return;
        }
        if (currentStageIdx === 0) {
          if (e.cancelable) e.preventDefault();
          return;
        }
      }
    }
  }, { passive: false });

  // Manage smart header & announcement bar reveal — keep announcement visible until next section arrives
  window.addEventListener('scroll', () => {
    const siteHdr = document.getElementById('site-header');
    const announceBar = document.querySelector('.announcement-bar');
    const nextSection = document.getElementById('watch-category-showcase') || document.getElementById('bento-collections');
    const pastHero = nextSection
      ? nextSection.getBoundingClientRect().top <= 120
      : window.scrollY > (window.innerHeight * 0.65);

    if (!pastHero) {
      setHeaderVisibility(true);
      if (siteHdr) siteHdr.classList.remove('is-scrolled');
      if (announceBar) announceBar.classList.remove('is-hidden');
    } else {
      if (siteHdr) {
        siteHdr.classList.add('is-scrolled');
        siteHdr.classList.remove('is-hidden');
      }
      if (announceBar) {
        announceBar.classList.add('is-hidden');
      }
    }
  }, { passive: true });

  let lastSliderVal = -1;

  function animateFrame() {
    requestAnimationFrame(animateFrame);
    const heroRect = heroSectionEl.getBoundingClientRect();
    const heroInView = heroRect.bottom > -60 && heroRect.top < (window.innerHeight || 900) + 60;
    if (!st.isHeroVisible && !heroInView) return;
    isMobile = window.innerWidth <= 820;
    if (wWidth < 100) updateCachedMetrics();

    st.clock += 0.020;
    st.entranceP *= 0.94;

    // Velocity-adaptive luxury damping (slow scroll = 0.045, fast scroll = 0.105)
    st.p += (st.targetP - st.p) * st.currentDamping;
    const roundedP = Math.round(st.p * 100);
    if (roundedP !== lastSliderVal) {
      sliderEl.value = roundedP;
      lastSliderVal = roundedP;
    }

    const targetCurX = st.cursorActive ? st.pointerX : 0;
    const targetCurY = st.cursorActive ? st.pointerY : 0;

    st.smoothCursorX += (targetCurX - st.smoothCursorX) * 0.085;
    st.smoothCursorY += (targetCurY - st.smoothCursorY) * 0.085;
    st.bezelCursorX += (targetCurX - st.bezelCursorX) * 0.10;
    st.bezelCursorY += (targetCurY - st.bezelCursorY) * 0.10;

    const idleBreath = (Math.sin(st.clock * 1.4) + 1) * 0.032 * (1 - smoothstep(0, 0.2, st.p));
    const effectiveP = Math.min(1, st.p + idleBreath + st.entranceP);

    const apri = smoothstep(0.08, 0.45, effectiveP);
    const gira = smoothstep(0.50, 0.88, st.p);

    const rawCos = Math.cos(gira * Math.PI);
    const isBack = gira > 0.5;
    const dir = isBack ? -1 : 1;
    const flipScaleX = (rawCos >= 0 ? 1 : -1) * Math.max(0.12, Math.abs(rawCos));
    const flipArcY = -Math.sin(gira * Math.PI) * 22;

    const isDesktop = window.innerWidth > 1030;
    const activeVectors = isDesktop ? DESKTOP_LAYER_VECTORS : MOBILE_LAYER_VECTORS;
    const currentExplode = apri;
    const idlePhase = st.clock * 1.25;

    const autoRx = isDesktop ? (7 * apri) : (9 * apri);
    const autoRy = isDesktop ? (-13 * apri * rawCos) : (-14 * apri * rawCos);
    const tiltFactor = 1.0; // Responsive cursor tilt on both Desktop & Mobile!

    const assemblyRotY = autoRy + st.smoothCursorX * 16 * tiltFactor + (isDesktop ? 0 : Math.sin(st.clock * 1.0) * 5.0);
    const assemblyRotX = autoRx - st.smoothCursorY * 12 * tiltFactor + (isDesktop ? 0 : Math.cos(st.clock * 0.8) * 3.5);

    const ambientFloatY = isDesktop
      ? Math.sin(idlePhase) * 3.5 * (1 - currentExplode * 0.4)
      : Math.sin(st.clock * 1.25) * 10.0;
    const ambientFloatX = isDesktop
      ? Math.cos(st.clock * 0.9) * 2.5 * (1 - currentExplode * 0.4)
      : Math.cos(st.clock * 0.9) * 6.0;

    if (assemblyEl) {
      assemblyEl.style.transform =
        `perspective(1200px) translate3d(${ambientFloatX.toFixed(1)}px, ${ambientFloatY.toFixed(1)}px, 0px) ` +
        `rotateX(${assemblyRotX.toFixed(1)}deg) rotateY(${assemblyRotY.toFixed(1)}deg)`;
    }

    stemEl.style.opacity = apri > 0.15 ? '0.85' : '0';

    const vw = window.innerWidth;
    const mobScale = vw <= 380 ? 0.34
      : vw <= 480 ? 0.40
        : vw <= 640 ? 0.46
          : vw <= 1030 ? 0.58
            : (vw <= 1280 ? 0.90 : 1.0);
    const mobSpreadScale = vw <= 360 ? 0.80 : (vw <= 480 ? 0.92 : (vw <= 640 ? 1.04 : (vw <= 820 ? 1.24 : 1.38)));

    // Gently shift assembly center left during expansion so right-expanded Bezel & Crystal stay beautifully balanced
    const expansionCenterShiftX = isDesktop ? (-34 * apri) : (-10 * apri * mobSpreadScale);
    const cxBase = wWidth * 0.5 + expansionCenterShiftX;
    const cyBase = wHeight * 0.5 - 20;

    // Callout card positions cleanly outside the watch layers (compact corner layout on mobile <= 820px)
    const cardW = isDesktop ? 168 : (vw <= 640 ? 120 : 148);
    const leftCardX = isDesktop ? (cxBase - 365) : (isMobile ? 4 : Math.max(8, Math.min(26, cxBase - 220)));
    const rightCardX = isDesktop ? (cxBase + 235) : (isMobile ? Math.max(cxBase + 20, wWidth - cardW - 4) : Math.max(cxBase + 55, Math.min(wWidth - cardW - 8, cxBase + 120)));
    const slotCoords = {
      'left-top': { x: leftCardX, y: isMobile ? 6 : Math.max(45, cyBase - 140), rightSide: false },
      'left-bottom': { x: leftCardX, y: isMobile ? Math.max(150, wHeight - 62) : Math.min(wHeight - 80, cyBase + 85), rightSide: false },
      'right-top': { x: rightCardX, y: isMobile ? 6 : Math.max(45, cyBase - 140), rightSide: true },
      'right-bottom': { x: rightCardX, y: isMobile ? Math.max(150, wHeight - 62) : Math.min(wHeight - 80, cyBase + 85), rightSide: true }
    };

    const MOBILE_SPREAD_X = {
      '-3': -102,
      '-2': -68,
      '-1': -34,
      '0': -6,
      '0.2': 24,
      '1': 32,
      '1.8': 48,
      '2.6': 86,
      '3.5': 104
    };
    const MOBILE_SPREAD_Y = {
      '-3': 12,
      '-2': 8,
      '-1': 4,
      '0': 0,
      '0.2': -2,
      '1': -4,
      '1.8': -6,
      '2.6': -10,
      '3.5': -12
    };

    for (let i = 0; i < layers.length; i++) {
      const item = layers[i];
      const depthRank = item.order * dir;
      item.el.style.zIndex = Math.round(50 + depthRank * 10);

      const floatWave = Math.sin(st.clock * 1.5 + item.phase) * (isDesktop ? 3.0 : 2.2);
      const crownOffset = item.dx * flipScaleX * (isDesktop ? mobScale : (mobScale * 0.8));

      let autoRightExpandX, autoRightExpandY;
      let kaddaCursorX = 0;
      let kaddaCursorY = 0;
      let kaddaTwistZ = 0;
      let rawSpreadX, rawSpreadY, scale;

      if (!isDesktop) {
        // MOBILE & TABLET (<= 1030px): Dramatic, legible 8X Explosion & 180° Exhibition Flip scaled to viewport
        const orderKey = String(item.order);
        const baseX = MOBILE_SPREAD_X[orderKey] !== undefined ? MOBILE_SPREAD_X[orderKey] : (item.order * 32);
        const baseY = MOBILE_SPREAD_Y[orderKey] !== undefined ? MOBILE_SPREAD_Y[orderKey] : (-item.order * 4);
        autoRightExpandX = baseX * rawCos * apri * mobSpreadScale;
        autoRightExpandY = baseY * rawCos * apri * mobSpreadScale;

        if (item.order === 2.6) {
          kaddaTwistZ = (20 * apri);
        }

        rawSpreadX = expansionCenterShiftX + autoRightExpandX + (item.order === 0.2 ? crownOffset * apri : 0);
        rawSpreadY = autoRightExpandY + flipArcY * 0.45 + floatWave * 0.55;
        scale = 1 - apri * 0.05 + depthRank * 0.016 * apri;
      } else {
        // DESKTOP (> 1030px): True 3D Isometric Luxury Explosion!
        const vec = activeVectors[item.key] || { dx: 0, dy: 0, dz: 0, rot: 0, rx: 0, ry: 0, scale: 1.0 };
        autoRightExpandX = vec.dx * rawCos * apri;
        autoRightExpandY = vec.dy * rawCos * apri;
        kaddaTwistZ = vec.rot * apri;

        const cursorFactor = 0.08 * (0.3 + 0.7 * apri);
        const deskCursorX = st.smoothCursorX * cursorFactor * 25;
        const deskCursorY = st.smoothCursorY * cursorFactor * 18;

        rawSpreadX = (autoRightExpandX + deskCursorX) * mobScale;
        rawSpreadY = (autoRightExpandY + flipArcY * (1 - apri) + floatWave * 0.4 + deskCursorY) * mobScale;
        scale = (vec.scale || 1.0) - apri * 0.02 + depthRank * 0.012 * apri;
      }

      let spreadX, spreadY;
      if (!isDesktop) {
        const maxShiftX = Math.max(85, Math.min(185, wWidth * 0.34));
        spreadX = Math.max(-maxShiftX, Math.min(maxShiftX, rawSpreadX));
        spreadY = Math.max(-44, Math.min(44, rawSpreadY));
      } else {
        spreadX = rawSpreadX;
        spreadY = rawSpreadY;
      }

      const layerMirrorX = (item.order === 0 || item.order === 0.2)
        ? flipScaleX
        : Math.max(0.14, Math.abs(rawCos));

      item.el.style.transform =
        `translate3d(${spreadX.toFixed(1)}px, ${spreadY.toFixed(1)}px, 0px) ` +
        `scale(${(scale * layerMirrorX).toFixed(3)}, ${scale.toFixed(3)}) ` +
        `rotateZ(${kaddaTwistZ.toFixed(1)}deg)`;

      if (item.order === 3.5) {
        const crystalVis = Math.min(1, Math.max(0.08, apri * 0.92 + Math.abs(st.bezelCursorX) * 0.65));
        item.el.style.opacity = (crystalVis * (isBack ? 0.22 : 1)).toFixed(2);
      } else if (item.order > 0.5) {
        const minFrontBack = isDesktop ? 0.22 : 0.14;
        const frontFade = isBack ? Math.max(minFrontBack, 1 - (gira - 0.5) * 1.75) : 1;
        item.el.style.opacity = frontFade.toFixed(2);
      } else if (item.order < 0) {
        const backFade = isBack ? 1 : Math.max(0.0, apri * 0.95);
        item.el.style.opacity = backFade.toFixed(2);
      }

      if (!item.tag) continue;
      // Show watch callout tags & SVG leader lines ONLY on Desktop (> 1030px)
      const show = isDesktop && (item.side === 'front' ? (apri > 0.15 && gira < 0.45) : (apri > 0.28 && gira > 0.58));
      item.vis += ((show ? 1 : 0) - item.vis) * 0.16;
      if (item.vis < 0.03) {
        if (item.tag.style.opacity !== '0') {
          item.tag.style.opacity = '0';
          item.line.style.opacity = '0';
          item.dot.style.opacity = '0';
          if (item.halo) item.halo.style.opacity = '0';
          if (item.endDot) item.endDot.style.opacity = '0';
        }
        continue;
      }

      const sc = slotCoords[item.slot];
      item.tag.style.transform = `translate3d(${sc.x.toFixed(1)}px, ${sc.y.toFixed(1)}px, 0)`;
      item.tag.style.opacity = item.vis.toFixed(2);

      // Keep SVG leader lines hidden on <= 1030px and auto-fade desktop lines after 2.8s while keeping tags visible
      if (!isDesktop || calloutAutoHidden) {
        if (item.line.style.opacity !== '0') {
          item.line.style.opacity = '0';
          item.dot.style.opacity = '0';
          if (item.halo) item.halo.style.opacity = '0';
          if (item.endDot) item.endDot.style.opacity = '0';
        }
        continue;
      }

      // Layer connection point in widget coordinates
      const px = cxBase + spreadX;
      const py = cyBase + spreadY;
      const tw = cardW;
      const th = 42;

      const visStr = item.vis.toFixed(2);
      item.dot.setAttribute('cx', px.toFixed(1));
      item.dot.setAttribute('cy', py.toFixed(1));
      item.dot.style.opacity = visStr;
      if (item.halo) {
        item.halo.setAttribute('cx', px.toFixed(1));
        item.halo.setAttribute('cy', py.toFixed(1));
        item.halo.style.opacity = (item.vis * 0.85).toFixed(2);
      }

      const lineTargetX = sc.rightSide ? sc.x - 5 : sc.x + tw + 5;
      const lineTargetY = sc.y + th * 0.5;
      const dxSpan = Math.abs(lineTargetX - px);
      const stem = Math.min(24, dxSpan * 0.35);
      const elbowX = sc.rightSide ? lineTargetX - stem : lineTargetX + stem;

      item.line.setAttribute(
        'd',
        `M ${px.toFixed(1)} ${py.toFixed(1)} L ${elbowX.toFixed(1)} ${lineTargetY.toFixed(1)} L ${lineTargetX.toFixed(1)} ${lineTargetY.toFixed(1)}`
      );
      item.line.style.opacity = (item.vis * 0.92).toFixed(2);
      if (item.endDot) {
        item.endDot.setAttribute('cx', lineTargetX.toFixed(1));
        item.endDot.setAttribute('cy', lineTargetY.toFixed(1));
        item.endDot.style.opacity = visStr;
      }
    }

    // Gravity Rotor
    const gTarget = (st.smoothCursorX * 55) + (gira * 165) + Math.sin(st.clock * 0.9) * 28 * (0.3 + apri);
    st.rotorVel = (st.rotorVel + (gTarget - st.rotorAngle) * 0.08) * 0.88;
    st.rotorAngle += st.rotorVel;
    if (rotorEl) rotorEl.style.transform = `rotate(${st.rotorAngle.toFixed(1)}deg)`;

    // 28,800 BPH Hands
    const now = new Date();
    const sec = now.getSeconds() + (Math.floor(now.getMilliseconds() / 125) * 125) / 1000;
    const min = now.getMinutes() + sec / 60;
    const hr = (now.getHours() % 12) + min / 60;
    if (hrEl) hrEl.setAttribute('transform', `rotate(${(hr * 30).toFixed(2)} 200 200)`);
    if (minEl) minEl.setAttribute('transform', `rotate(${(min * 6).toFixed(2)} 200 200)`);
    if (secEl) secEl.setAttribute('transform', `rotate(${(sec * 6).toFixed(2)} 200 200)`);
  }
  requestAnimationFrame(animateFrame);
}

function bootOrvelApp() {
  if (window.__orvelAppInitialized) return;
  window.__orvelAppInitialized = true;
  const app = new OrvelApp();
  app.init();
  window.__orvelApp = app;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootOrvelApp);
} else {
  bootOrvelApp();
}


// Exact KVIST Float-To-Cart Animation
(function initOrvelExactFloatToCart() {
  document.querySelectorAll('.orvel-card-quick-add').forEach((el) => el.remove());

  let toastEl = null;
  let toastTimer = null;

  function findHeaderCartIcon() {
    return (
      document.querySelector('#site-header [data-action="open-cart"]') ||
      document.querySelector('[data-action="open-cart"]') ||
      document.querySelector('#cart-count-badge') ||
      document.querySelector('#cart-btn, #cart-toggle, .cart-btn, .cart-toggle')
    );
  }

  function openCartDrawerNow() {
    const bagBtn = findHeaderCartIcon();
    if (bagBtn) {
      bagBtn.click();
      return;
    }
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer) drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.classList.add('cart-open');
  }

  function showKvistToast(watchName) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'orvel-kvist-toast';
      toastEl.innerHTML = `
        <span class="orvel-kvist-toast-check">✓</span>
        <span class="orvel-kvist-toast-label"></span>
        <button type="button" class="orvel-kvist-toast-btn">View bag</button>
      `;
      document.body.appendChild(toastEl);
      toastEl.querySelector('.orvel-kvist-toast-btn').addEventListener('click', () => {
        toastEl.classList.remove('is-visible');
        openCartDrawerNow();
      });
    }
    toastEl.querySelector('.orvel-kvist-toast-label').textContent = `${(watchName || 'Timepiece').trim()} added to your bag`;
    toastEl.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('is-visible');
    }, 4200);
  }

  function createCleanWatchCutoutElement(sourceImg, width, height) {
    try {
      if (sourceImg && sourceImg.complete && sourceImg.naturalWidth > 0) {
        const cw = 240;
        const ch = Math.max(180, Math.round((height / Math.max(1, width)) * cw));
        const canvas = document.createElement('canvas');
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(sourceImg, 0, 0, cw, ch);

        const imgData = ctx.getImageData(0, 0, cw, ch);
        const data = imgData.data;
        const visited = new Uint8Array(cw * ch);
        const queue = new Int32Array(cw * ch);
        let head = 0;
        let tail = 0;

        function pushSeed(x, y) {
          const idx = y * cw + x;
          if (!visited[idx]) {
            visited[idx] = 1;
            queue[tail++] = idx;
          }
        }

        for (let x = 0; x < cw; x++) {
          pushSeed(x, 0);
          pushSeed(x, ch - 1);
        }
        for (let y = 0; y < ch; y++) {
          pushSeed(0, y);
          pushSeed(cw - 1, y);
        }

        while (head < tail) {
          const idx = queue[head++];
          const p = idx * 4;
          const m = Math.max(data[p], data[p + 1], data[p + 2]);
          if (m <= 22) {
            data[p + 3] = 0;
            const x = idx % cw;
            const y = (idx / cw) | 0;
            if (x > 0) pushSeed(x - 1, y);
            if (x + 1 < cw) pushSeed(x + 1, y);
            if (y > 0) pushSeed(x, y - 1);
            if (y + 1 < ch) pushSeed(x, y + 1);
          } else if (m <= 38) {
            data[p + 3] = Math.round(((m - 22) / 16) * 255);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        canvas.className = 'orvel-floating-watch-clone';
        canvas.style.opacity = '0';
        canvas.style.visibility = 'hidden';
        return canvas;
      }
    } catch (err) {
      console.warn('Canvas flood fill cutout error, using blend mode fallback:', err);
    }

    const clone = document.createElement('img');
    clone.src = (sourceImg && (sourceImg.currentSrc || sourceImg.src)) || 'assets/images/products/p-01-main.jpg';
    clone.className = 'orvel-floating-watch-clone';
    clone.style.objectFit = 'contain';
    clone.style.mixBlendMode = 'screen';
    clone.style.opacity = '0';
    clone.style.visibility = 'hidden';
    return clone;
  }

  function findHeaderWishlistIcon() {
    return (
      document.querySelector('#site-header [data-action="open-wishlist"]') ||
      document.querySelector('[data-action="open-wishlist"]') ||
      document.querySelector('#wishlist-count-badge') ||
      document.querySelector('.wishlist-count-badge')
    );
  }

  function findComparePillElement() {
    return (
      document.getElementById('compare-floating-pill') ||
      document.querySelector('.compare-floating-pill')
    );
  }

  function floatWatchToTarget(sourceImg, targetBtn, onComplete) {
    if (!targetBtn) {
      if (onComplete) onComplete();
      return;
    }

    let sRect = null;
    if (sourceImg && typeof sourceImg.getBoundingClientRect === 'function') {
      sRect = sourceImg.getBoundingClientRect();
    }
    if (!sRect || sRect.width < 20 || sRect.height < 20 || (sRect.top === 0 && sRect.left === 0)) {
      const card = sourceImg ? sourceImg.closest('.product-card, .watch-card, article, .signature-card, section, .detail-modal-body, .product-detail-modal') : null;
      if (card) {
        const wrap = card.querySelector('.product-image-container, .product-img-wrap, .detail-main-stage, img');
        if (wrap) sRect = wrap.getBoundingClientRect();
      }
    }

    if (!sRect || sRect.width < 20 || sRect.height < 20) {
      sRect = {
        left: window.innerWidth * 0.5 - 100,
        top: window.innerHeight * 0.5 - 100,
        width: 200,
        height: 200
      };
    }

    const eRect = targetBtn.getBoundingClientRect();
    const w = Math.max(130, Math.min(260, sRect.width));
    const h = Math.max(130, Math.min(260, sRect.height));

    const startX = sRect.left + sRect.width * 0.5 - w * 0.5;
    const startY = sRect.top + sRect.height * 0.5 - h * 0.5;
    let endX = eRect.left + eRect.width * 0.5 - w * 0.5;
    let endY = eRect.top + eRect.height * 0.5 - h * 0.5;

    const isDownward = endY >= startY;

    if (eRect.width === 0 || eRect.height === 0 || (eRect.left === 0 && eRect.top === 0)) {
      endX = isDownward ? 40 : (window.innerWidth - 120);
      endY = isDownward ? (window.innerHeight - 100) : 32;
    }

    const flyer = createCleanWatchCutoutElement(sourceImg, w, h);

    // CRITICAL: Set starting transform, dimensions and make visible BEFORE appending to DOM!
    // This 100% guarantees the flyer NEVER renders or flashes at (0, 0) top-left!
    flyer.style.width = `${w}px`;
    flyer.style.height = `${h}px`;
    flyer.style.transform = `translate3d(${startX.toFixed(1)}px, ${startY.toFixed(1)}px, 0) scale(1) rotate(0deg)`;
    flyer.style.opacity = '1';
    flyer.style.visibility = 'visible';

    document.body.appendChild(flyer);

    // Dynamic trajectory calculation based on flight direction:
    let ctrlX, ctrlY;
    if (isDownward) {
      // Downward flight to bottom-left Compare pill:
      // Elevate slightly off the card (-60px), curve outward to the left, then swoop down
      ctrlX = Math.max(10, Math.min(startX, endX) + Math.abs(endX - startX) * 0.25 - 40);
      ctrlY = Math.max(20, startY - 70);
    } else {
      // Upward flight to Header Cart or Wishlist:
      ctrlX = startX + (endX - startX) * 0.34;
      ctrlY = Math.min(startY - 140, endY - 60);
    }

    const duration = isDownward ? 780 : 820;
    const t0 = performance.now();

    function animate(now) {
      const raw = Math.min(1, (now - t0) / duration);
      const t = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
      const u = 1 - t;

      const x = u * u * startX + 2 * u * t * ctrlX + t * t * endX;
      const y = u * u * startY + 2 * u * t * ctrlY + t * t * endY;
      const scale = 1.0 - 0.86 * Math.pow(raw, 1.15);
      const tilt = isDownward ? (14 * Math.sin(raw * Math.PI)) : (-10 * Math.sin(raw * Math.PI));
      const opacity = raw > 0.88 ? (1 - raw) / 0.12 : 1;

      flyer.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${scale.toFixed(3)}) rotate(${tilt.toFixed(1)}deg)`;
      flyer.style.opacity = opacity.toFixed(2);

      if (raw < 1) {
        requestAnimationFrame(animate);
      } else {
        flyer.remove();
        targetBtn.classList.remove('orvel-cart-icon-pop', 'orvel-wishlist-icon-pop', 'orvel-compare-pill-pop');
        void targetBtn.offsetWidth;
        targetBtn.classList.add(isDownward ? 'orvel-compare-pill-pop' : 'orvel-cart-icon-pop');
        if (onComplete) onComplete();
      }
    }

    requestAnimationFrame(animate);
  }

  // Globally exported trigger with debounce guard to prevent double animation for Cart
  let isFlyingLock = false;
  window.triggerOrvelFloatToCart = function (sourceImg, watchName, onDone) {
    if (isFlyingLock) return;
    isFlyingLock = true;
    setTimeout(() => { isFlyingLock = false; }, 360);

    const cartBtn = findHeaderCartIcon();
    floatWatchToTarget(sourceImg, cartBtn, () => {
      showKvistToast(watchName);
      if (onDone) onDone();
    });
  };

  // Globally exported trigger with debounce guard for Wishlist
  let isWishlistFlyingLock = false;
  window.triggerOrvelFloatToWishlist = function (sourceImg, watchName, onDone) {
    if (isWishlistFlyingLock) return;
    isWishlistFlyingLock = true;
    setTimeout(() => { isWishlistFlyingLock = false; }, 360);

    const wishlistBtn = findHeaderWishlistIcon();
    floatWatchToTarget(sourceImg, wishlistBtn, () => {
      if (onDone) onDone();
    });
  };

  // Globally exported trigger with debounce guard for Compare ("pehle wo pop up ho kr aye phr ye us k andar jay")
  let isCompareFlyingLock = false;
  window.triggerOrvelFloatToCompare = function (sourceImg, watchName, onDone) {
    if (isCompareFlyingLock) return;
    isCompareFlyingLock = true;
    setTimeout(() => { isCompareFlyingLock = false; }, 400);

    const pill = findComparePillElement();
    if (!pill) {
      if (onDone) onDone();
      return;
    }

    // Ensure pill is in DOM, displayed, and triggers entrance pop-up if not already visible
    const wasVisible = pill.classList.contains('is-visible') && pill.style.display !== 'none';
    pill.style.display = 'flex';
    pill.classList.add('is-visible');

    if (!wasVisible) {
      pill.classList.remove('orvel-compare-pill-in');
      void pill.offsetWidth;
      pill.classList.add('orvel-compare-pill-in');
    }

    // Delay watch launch:
    // 160ms delay ensures user sees the pill pop up at bottom-left FIRST ("pehle wo pop up ho kr aye")
    const delay = wasVisible ? 60 : 160;

    setTimeout(() => {
      floatWatchToTarget(sourceImg, pill, () => {
        pill.classList.remove('orvel-compare-pill-pop');
        void pill.offsetWidth;
        pill.classList.add('orvel-compare-pill-pop');
        if (onDone) onDone();
      });
    }, delay);
  };

  // Capture phase listener so e.stopPropagation() from child elements cannot block it!
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a, [role="button"]');
    if (!btn) return;

    const action = btn.getAttribute('data-action') || '';
    const label = (btn.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase();

    // Wishlist Button Detection
    const isWishlistBtn =
      action === 'toggle-wishlist' ||
      btn.id === 'detail-wishlist-btn' ||
      btn.classList.contains('btn-detail-wishlist') ||
      btn.hasAttribute('data-wishlist');

    if (isWishlistBtn) {
      // If currently not active, user is adding to wishlist -> float to wishlist icon!
      const isCurrentlyActive = btn.classList.contains('is-active');
      if (!isCurrentlyActive) {
        const card = btn.closest('.product-card, .watch-card, .catalog-card, article, .signature-card, section, .detail-modal-body, .product-detail-modal');
        const watchImg = card ? card.querySelector('.product-img, #detail-main-img, .detail-main-img, img') : null;
        const titleNode = card ? card.querySelector('.product-name, h3, h4, h2, .product-title, .card-title, .watch-name') : null;
        const watchName = titleNode ? titleNode.textContent.trim() : 'ORVÉL Timepiece';

        window.triggerOrvelFloatToWishlist(watchImg, watchName);
      }
      return;
    }

    // Compare Button Detection
    const isCompareBtn =
      action === 'toggle-compare' ||
      btn.hasAttribute('data-compare');

    if (isCompareBtn) {
      const isCurrentlyActive = btn.classList.contains('is-active');
      if (!isCurrentlyActive) {
        const card = btn.closest('.product-card, .watch-card, .catalog-card, article, .signature-card, section, .detail-modal-body, .product-detail-modal');
        const watchImg = card ? card.querySelector('.product-img, #detail-main-img, .detail-main-img, img') : null;
        const titleNode = card ? card.querySelector('.product-name, h3, h4, h2, .product-title, .card-title, .watch-name') : null;
        const watchName = titleNode ? titleNode.textContent.trim() : 'ORVÉL Timepiece';

        window.triggerOrvelFloatToCompare(watchImg, watchName);
      }
      return;
    }

    const isAddBtn =
      action === 'add-to-cart' ||
      action === 'sig-add-to-bag' ||
      btn.id === 'sig-primary-add-btn' ||
      btn.id === 'detail-add-to-cart' ||
      btn.hasAttribute('data-add-to-cart') ||
      btn.classList.contains('btn-card-add') ||
      btn.classList.contains('add-to-cart') ||
      btn.classList.contains('add-to-bag') ||
      label.includes('ADD TO BAG') ||
      label.includes('ADD TO CART');

    if (!isAddBtn) return;

    // Prevent auto-opening cart drawer during the flight
    const closeAutoOpenedDrawer = () => {
      const drawer = document.querySelector('#cart-drawer, .cart-drawer');
      const overlay = document.querySelector('#cart-overlay, #cart-backdrop, .cart-overlay, .cart-backdrop');
      if (drawer) drawer.classList.remove('is-open', 'open', 'active');
      if (overlay) overlay.classList.remove('is-open', 'open', 'active');
      document.body.classList.remove('cart-open', 'drawer-open');
    };
    setTimeout(closeAutoOpenedDrawer, 0);
    setTimeout(closeAutoOpenedDrawer, 35);
    setTimeout(closeAutoOpenedDrawer, 90);

    const card = btn.closest('.product-card, .watch-card, .catalog-card, article, .signature-card, section, .detail-modal-body, .product-detail-modal');
    const watchImg = card ? card.querySelector('.product-img, #detail-main-img, .detail-main-img, img') : null;
    const titleNode = card ? card.querySelector('.product-name, h3, h4, h2, .product-title, .card-title, .watch-name') : null;
    const watchName = titleNode ? titleNode.textContent.trim() : 'ORVÉL Timepiece';

    window.triggerOrvelFloatToCart(watchImg, watchName);
  }, true);
})();


(function initOrvelFlagshipTextScrollReveal() {
  const TARGET_SECTIONS = [
    {
      sectionSelector: '#bento-collections',
      headingSelector: '.collections-editorial-title, h2',
      eyebrowSelector: '.eyebrow',
      subtitleSelector: '.collections-editorial-sub, p'
    },
    {
      sectionSelector: '#shop-catalog',
      headingSelector: '.catalog-title, h2',
      eyebrowSelector: '.catalog-eyebrow, .eyebrow',
      subtitleSelector: '.catalog-subtitle, p'
    },
    {
      sectionSelector: '#collector-perspectives',
      headingSelector: '.perspectives-title, h2',
      eyebrowSelector: '.perspectives-eyebrow, .eyebrow',
      subtitleSelector: '.perspectives-subtitle, p'
    },
    {
      sectionSelector: '#craftsmanship',
      headingSelector: '.orvel-savoir-title, h2',
      eyebrowSelector: '.orvel-savoir-eyebrow, .eyebrow',
      subtitleSelector: '.orvel-savoir-sub, p'
    }
  ];

  function setupAllReveals() {
    const instances = [];

    TARGET_SECTIONS.forEach((cfg) => {
      const section = document.querySelector(cfg.sectionSelector);
      if (!section || section.dataset.eugRevealInit === '1') return;

      const heading = section.querySelector(cfg.headingSelector);
      if (!heading) return;
      section.dataset.eugRevealInit = '1';

      const leftContainer = heading.parentElement;
      const eyebrow = cfg.eyebrowSelector
        ? (section.querySelector(cfg.eyebrowSelector) || (leftContainer ? leftContainer.querySelector('.eyebrow, .section-tag') : null))
        : null;
      const subtitle = cfg.subtitleSelector
        ? (section.querySelector(cfg.subtitleSelector) || (leftContainer ? leftContainer.querySelector('p, .section-subtitle, .section-sub, .section-desc') : null))
        : null;

      if (eyebrow && eyebrow !== heading && !heading.contains(eyebrow)) {
        eyebrow.classList.add('orvel-eug-eyebrow');
      }
      if (subtitle && subtitle !== heading) {
        subtitle.classList.add('orvel-eug-sub');
      }

      const charSpans = [];

      function splitNodeIntoChars(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.nodeValue || '';
          if (!text.trim()) return document.createTextNode(text);

          const frag = document.createDocumentFragment();
          const tokens = text.split(/(\s+)/);
          tokens.forEach((token) => {
            if (!token) return;
            if (/^\s+$/.test(token)) {
              frag.appendChild(document.createTextNode(token));
            } else {
              const wordSpan = document.createElement('span');
              wordSpan.className = 'orvel-eug-word';
              for (const ch of token) {
                const cSpan = document.createElement('span');
                cSpan.className = 'orvel-eug-char';
                cSpan.textContent = ch;
                wordSpan.appendChild(cSpan);
                charSpans.push(cSpan);
              }
              frag.appendChild(wordSpan);
            }
          });
          return frag;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName === 'BR') return node.cloneNode(false);
          const clone = node.cloneNode(false);
          Array.from(node.childNodes).forEach((child) => {
            clone.appendChild(splitNodeIntoChars(child));
          });
          return clone;
        }
        return node.cloneNode(true);
      }

      const originalChildren = Array.from(heading.childNodes);
      heading.innerHTML = '';
      originalChildren.forEach((child) => {
        heading.appendChild(splitNodeIntoChars(child));
      });

      instances.push({
        heading,
        eyebrow,
        subtitle,
        charSpans,
        totalChars: Math.max(1, charSpans.length),
        targetP: 0,
        smoothP: 0,
        done: false
      });
    });

    if (instances.length === 0) return;

    let rafId = null;

    function applyProgress(inst, p) {
      if (inst.eyebrow) {
        const eyeP = p >= 0.999 ? 1 : Math.max(0, Math.min(1, p / 0.35));
        inst.eyebrow.style.setProperty('--eye-p', eyeP.toFixed(3));
      }

      const spread = 0.52;
      const charWindow = 1 - spread;
      for (let i = 0; i < inst.totalChars; i++) {
        if (p >= 0.999) {
          inst.charSpans[i].style.setProperty('--char-p', '1');
        } else {
          const delay = (i / inst.totalChars) * spread;
          const cp = Math.max(0, Math.min(1, (p - delay) / charWindow));
          const eased = 1 - Math.pow(1 - cp, 2.2);
          inst.charSpans[i].style.setProperty('--char-p', eased.toFixed(3));
        }
      }

      if (inst.subtitle) {
        if (p >= 0.999) {
          inst.subtitle.style.setProperty('--sub-p', '1');
        } else {
          const subRaw = Math.max(0, Math.min(1, (p - 0.16) / 0.84));
          const subEased = subRaw * subRaw * (3 - 2 * subRaw);
          inst.subtitle.style.setProperty('--sub-p', subEased.toFixed(3));
        }
      }
    }

    function tick() {
      rafId = null;
      const vh = window.innerHeight || 800;
      let needsAnotherFrame = false;

      instances.forEach((inst) => {
        if (inst.done) return;

        const rect = inst.heading.getBoundingClientRect();
        // Complete 100% reveal cleanly early in viewport & latch one-way so pinned/scrolled sections never blink back
        const startY = vh * 0.95;
        const endY = vh * 0.68;
        const raw = Math.max(0, Math.min(1, (startY - rect.top) / Math.max(1, startY - endY)));
        inst.targetP = Math.max(inst.targetP, raw);

        inst.smoothP += (inst.targetP - inst.smoothP) * 0.22;
        const p = Math.abs(inst.targetP - inst.smoothP) < 0.002 ? inst.targetP : inst.smoothP;

        applyProgress(inst, p);

        if (inst.targetP >= 1 && p >= 0.998) {
          applyProgress(inst, 1);
          inst.done = true;
        } else if (Math.abs(inst.targetP - p) > 0.001) {
          needsAnotherFrame = true;
        }
      });

      if (needsAnotherFrame) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function scheduleTick() {
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    }

    window.addEventListener('scroll', scheduleTick, { passive: true });
    window.addEventListener('resize', scheduleTick, { passive: true });
    scheduleTick();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAllReveals);
  } else {
    setupAllReveals();
  }
})();

(function initOrvelUnifiedHeroScrollController() {
  const hero = document.getElementById("hero");
  const widget = document.querySelector("#orvel-right-watch-widget, #hero .orvel-watch-widget, #orvelWatchWidget");
  if (!hero || !widget) return;

  if (window.ScrollTrigger && typeof window.ScrollTrigger.config === "function") {
    window.ScrollTrigger.config({ ignoreMobileResize: true });
  }

  try {
    const OrigAudioCtx = window.AudioContext || window.webkitAudioContext;
    if (OrigAudioCtx && OrigAudioCtx.prototype) {
      OrigAudioCtx.prototype.createOscillator = function () {
        return {
          type: "sine",
          frequency: { value: 0, setValueAtTime() { }, exponentialRampToValueAtTime() { }, linearRampToValueAtTime() { } },
          connect() { return this; },
          start() { },
          stop() { },
          disconnect() { }
        };
      };
    }
  } catch (_) { }

  hero.addEventListener(
    "touchend",
    (e) => {
      if (!e.target.closest("button, a, .orvel-hud-btn, .orvel-lume-switch")) {
        e.stopImmediatePropagation();
      }
    },
    true
  );

  const HERO_STAGES = [
    {
      eyebrow: "01 / 03 — MIX INVENTORIES FLAGSHIP CURATION",
      line1: "TIME,",
      line2: "Redefined.",
      sub: "A bold expression of precision, elegance, and multi-brand luxury horology.",
      explodeState: "assembled",
      flipState: "front",
      hudMode: "assembled",
      showTags: false
    },
    {
      eyebrow: "02 / 03 — EIGHT HOROLOGICAL LAYERS",
      line1: "CRAFTED,",
      line2: "Layer by Layer.",
      sub: "18K Aurum fluted bezel, double-domed AR sapphire, and cold-forged 316L steel separated in 3D space.",
      explodeState: "exploded",
      flipState: "front",
      hudMode: "exploded",
      showTags: true
    },
    {
      eyebrow: "03 / 03 — 360° CALIBRE PRECISION",
      line1: "PRECISION,",
      line2: "In Motion.",
      sub: "360° horological exhibition revealing the 25-jewel Calibre MI-21 mechanical heart beating at 28,800 VPH.",
      explodeState: "exploded",
      flipState: "flipped",
      hudMode: "calibre",
      showTags: false
    }
  ];

  let mobStep = 0;
  let deskStep = 0;
  let lastVisualStage = 0;
  let stepLockedUntil = 0;
  let wheelDeltaAccum = 0;
  let lastWheelTime = 0;
  let autoGlideTimer = null;

  function isMobileView() {
    return window.innerWidth <= 820;
  }

  function scrollToNextSection(smooth = true) {
    const target = document.getElementById("watch-category-showcase") ||
      document.getElementById("bento-collections");
    if (!target) return;

    const header = document.getElementById("site-header");
    const offset = header ? header.offsetHeight : 70;
    const targetY = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - offset);

    if (window.lenis && typeof window.lenis.start === "function") {
      window.lenis.start();
    }

    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo(targetY, {
        duration: smooth ? 0.85 : 0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({ top: targetY, behavior: smooth ? "smooth" : "auto" });
    }
  }

  function applyVisualStage(stageIdx) {
    const st = HERO_STAGES[stageIdx] || HERO_STAGES[0];
    widget.setAttribute("data-explode-state", st.explodeState);
    widget.setAttribute("data-flip-state", st.flipState);
    widget.setAttribute("data-stage", String(stageIdx));

    if (st.showTags) {
      document.documentElement.classList.add("orvel-scrolled-tags-on");
    } else {
      document.documentElement.classList.remove("orvel-scrolled-tags-on");
    }

    hero.querySelectorAll(".orvel-hud-btn").forEach((btn) => {
      const m = (btn.getAttribute("data-mode") || btn.textContent || "").toLowerCase();
      const isMatch =
        (st.hudMode === "assembled" && m.includes("assembled")) ||
        (st.hudMode === "exploded" && m.includes("explode")) ||
        (st.hudMode === "calibre" && (m.includes("calibre") || m.includes("360")));
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });

    if (stageIdx !== lastVisualStage) {
      lastVisualStage = stageIdx;
      hero.classList.add("orvel-stage-switched");

      if (typeof window.__orvelSyncWatchAnimation === "function") {
        window.__orvelSyncWatchAnimation(stageIdx, stageIdx === 2 ? 1 : (stageIdx === 1 ? 0.50 : 0));
      }

      const tagEl = hero.querySelector(".hero-tag, .hero-eyebrow");
      const titleEl = hero.querySelector(".hero-title, h1");
      const subEl = hero.querySelector(".hero-subtext, .hero-desc");

      if (tagEl) tagEl.textContent = st.eyebrow;
      if (titleEl) {
        titleEl.innerHTML = `${st.line1}<br><em style="color:#D6B265;font-style:italic;font-weight:400;">${st.line2}</em>`;
      }
      if (subEl) {
        subEl.textContent = st.sub;
      }
    }
  }

  function setMobileStep(newStep) {
    mobStep = Math.max(0, Math.min(2, newStep));
    deskStep = mobStep;
    applyVisualStage(mobStep);
  }

  function setDesktopStep(newStep) {
    deskStep = Math.max(0, Math.min(2, newStep));
    mobStep = deskStep;
    applyVisualStage(deskStep);
  }

  // Single source of truth sync hook called by HUD buttons & #orvelExplodeSlider
  window.__orvelSyncScrollStep = function (idx) {
    const clamped = Math.max(0, Math.min(2, Number(idx) || 0));
    mobStep = clamped;
    deskStep = clamped;
    lastVisualStage = clamped;
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".orvel-hud-btn");
    if (btn) {
      const mode = (btn.getAttribute("data-mode") || btn.textContent || "").toLowerCase();
      if (mode.includes("assembled")) {
        setDesktopStep(0);
      } else if (mode.includes("explode")) {
        setDesktopStep(1);
      } else if (mode.includes("calibre") || mode.includes("360")) {
        setDesktopStep(2);
      }
      return;
    }

    // Anchor navigation back to #hero or logo resets Hero watch cleanly to Stage 0
    const heroAnchor = e.target.closest('a[href="#hero"], a[href="#"], .site-logo');
    if (heroAnchor) {
      wasBelowHero = false;
      stepLockedUntil = 0;
      wheelDeltaAccum = 0;
      setDesktopStep(0);
    }
  });

  document.querySelectorAll('.hero-scroll-cue a, a[href="#watch-category-showcase"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      clearTimeout(autoGlideTimer);
      setDesktopStep(2);
      scrollToNextSection(true);
    });
  });

  let wasBelowHero = false;
  let lastScrollY = window.scrollY || window.pageYOffset || 0;

  // Keep Hero stage state synced with scroll position so re-entering Hero never deadlocks
  window.addEventListener("scroll", () => {
    const sy = window.scrollY || window.pageYOffset || 0;
    const scrollingUp = sy < lastScrollY;
    lastScrollY = sy;

    if (sy > 80) {
      wasBelowHero = true;
      if (mobStep < 2 || deskStep < 2) {
        mobStep = 2;
        deskStep = 2;
        applyVisualStage(2);
      }
      stepLockedUntil = 0;
      wheelDeltaAccum = 0;
      if (document.body.style.overflow === "hidden") document.body.style.overflow = "";
      if (document.documentElement.style.overflow === "hidden") document.documentElement.style.overflow = "";
      if (window.lenis && typeof window.lenis.start === "function") {
        window.lenis.start();
      }
    } else if (sy <= 2 && wasBelowHero && scrollingUp) {
      // Returned to top of Hero from below via Lenis / anchor / scrollbar: reset cleanly to Stage 0
      wasBelowHero = false;
      wheelDeltaAccum = 0;
      stepLockedUntil = performance.now() + 200;
      setDesktopStep(0);
    }
  }, { passive: true });

  const MODAL_OPEN_SELECTOR = ".concierge-panel, .cart-drawer, .mobile-nav-drawer, .quickview-modal, .policy-modal-overlay, #product-detail-modal, #compare-drawer, #wishlist-drawer";
  const HERO_TOP_THRESHOLD = 4;

  window.addEventListener(
    "wheel",
    (e) => {
      if (e.target && e.target.closest(MODAL_OPEN_SELECTOR)) return;

      const sy = window.scrollY || window.pageYOffset || 0;
      const now = performance.now();

      // Decay accumulated delta only after 500ms of silence so slow wheel ticks are never dropped
      if (now - lastWheelTime > 500 || (wheelDeltaAccum > 0 && e.deltaY < 0) || (wheelDeltaAccum < 0 && e.deltaY > 0)) {
        wheelDeltaAccum = 0;
      }
      lastWheelTime = now;

      // Only intercept wheel when strictly at top of Hero (sy <= HERO_TOP_THRESHOLD)
      if (sy > HERO_TOP_THRESHOLD) return;

      const curStep = isMobileView() ? mobStep : deskStep;

      if (e.deltaY > 0 && curStep < 2) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (now < stepLockedUntil) return;
        wheelDeltaAccum += e.deltaY;
        if (wheelDeltaAccum < 8) return;
        wheelDeltaAccum = 0;
        stepLockedUntil = now + 220;
        setDesktopStep(curStep + 1);
        return;
      }

      if (e.deltaY < 0 && curStep > 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (now < stepLockedUntil) return;
        wheelDeltaAccum += e.deltaY;
        if (Math.abs(wheelDeltaAccum) < 8) return;
        wheelDeltaAccum = 0;
        stepLockedUntil = now + 220;
        setDesktopStep(curStep - 1);
        return;
      }
    },
    { capture: true, passive: false }
  );

  let touchStartY = 0;
  let touchStepDoneInGesture = false;

  window.addEventListener(
    "touchstart",
    (e) => {
      if (!e.touches || !e.touches.length) return;
      touchStartY = e.touches[0].clientY;
      touchStepDoneInGesture = false;
    },
    { capture: true, passive: true }
  );

  window.addEventListener(
    "touchend",
    () => {
      touchStepDoneInGesture = false;
    },
    { capture: true, passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (!e.touches || !e.touches.length) return;
      if (e.target && e.target.closest(MODAL_OPEN_SELECTOR)) return;

      const sy = window.scrollY || window.pageYOffset || 0;
      if (sy > HERO_TOP_THRESHOLD) return;

      const dy = touchStartY - e.touches[0].clientY;
      const now = performance.now();

      if (dy > 14 && mobStep < 2) {
        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        if (!touchStepDoneInGesture && now >= stepLockedUntil) {
          touchStepDoneInGesture = true;
          stepLockedUntil = now + 200;
          setMobileStep(mobStep + 1);
        }
        return;
      }

      if (dy < -14 && mobStep > 0) {
        if (e.cancelable) e.preventDefault();
        e.stopImmediatePropagation();
        if (!touchStepDoneInGesture && now >= stepLockedUntil) {
          touchStepDoneInGesture = true;
          stepLockedUntil = now + 200;
          setMobileStep(mobStep - 1);
        }
        return;
      }
    },
    { capture: true, passive: false }
  );
})();

(function fixOrvelSectionPinningAndVisibility() {
  function stabilizeSections() {
    const bento = document.getElementById('bento-collections');
    if (bento) {
      bento.style.removeProperty('transform');
      bento.style.removeProperty('opacity');
      bento.style.removeProperty('padding-bottom');
      bento.style.removeProperty('margin-bottom');
    }

    document.querySelectorAll('main > section, #collection, #watch-category-showcase').forEach((sec) => {
      if (sec.id !== 'hero') {
        sec.style.setProperty('opacity', '1', 'important');
        sec.style.setProperty('visibility', 'visible', 'important');
      }
    });

    if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') {
      window.ScrollTrigger.refresh();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stabilizeSections);
  } else {
    stabilizeSections();
  }
  window.addEventListener('load', stabilizeSections);
  setTimeout(stabilizeSections, 400);
})();

(function stripHero300vhInline() {
  function cleanHeroHeight() {
    const hero = document.getElementById('hero');
    const track = document.getElementById('hero-scroll-track');
    if (hero) {
      hero.style.removeProperty('min-height');
      hero.style.removeProperty('height');
    }
    if (track) {
      track.style.removeProperty('min-height');
      track.style.removeProperty('height');
    }
  }
  cleanHeroHeight();
  window.addEventListener('resize', cleanHeroHeight, { passive: true });
  setTimeout(cleanHeroHeight, 300);
})();
