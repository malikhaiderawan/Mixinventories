/**
 * ORVÉL — Fine Timepieces
 * UI Manager: Cart, Wishlist, Watch Comparison, Product Details Modal, Search & Accordion
 * Designed & Engineered for MalikAxiom Technology
 */

import { store } from './store.js?v=20261111basic';
import { boutiqueConfig } from './config.js?v=20261125insta';

export class UIManager {
  constructor() {
    this.activeDetailProduct = null;
    this.selectedVariant = null;
    this.selectedQty = 1;
    this._scrollLockCount = 0;
  }

  lockBodyScroll() {
    this._scrollLockCount++;
    if (this._scrollLockCount === 1) {
      document.body.classList.add('modal-scroll-locked');
      document.documentElement.classList.add('modal-scroll-locked');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (window.lenis && typeof window.lenis.stop === 'function') {
        window.lenis.stop();
      }
    }
  }

  unlockBodyScroll() {
    this._scrollLockCount = Math.max(0, this._scrollLockCount - 1);
    if (this._scrollLockCount === 0) {
      document.body.classList.remove('modal-scroll-locked');
      document.documentElement.classList.remove('modal-scroll-locked');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (window.lenis && typeof window.lenis.start === 'function') {
        window.lenis.start();
      }
    }
  }

  init() {
    this.initCartDrawer();
    this.initWishlistDrawer();
    this.initComparisonModal();
    this.initProductDetailModal();
    this.initQuickView();
    this.initSearch();
    this.initConciergeTriggers();
    this.initFaqAccordion();
    this.initBestsellersCarousel();
    this.initMobileNav();
    this.initBackToTop();
    this.initNewsletterForm();
    this.initWhatsAppCheckoutFlow();
    this.initClientCareModal();

    // Store Event Listeners
    window.addEventListener('orvel:cart-updated', (e) => {
      this.renderCart(e.detail);
    });

    window.addEventListener('orvel:wishlist-updated', (e) => {
      this.renderWishlist(e.detail);
    });

    window.addEventListener('orvel:compare-updated', (e) => {
      this.renderComparison(e.detail);
    });

    // Initial Renders
    this.renderCart({
      cart: store.getCart(),
      subtotal: store.getSubtotal(),
      count: store.getItemCount(),
      freeShippingRemaining: store.getFreeShippingRemaining(),
      isFreeShippingEligible: store.isFreeShippingEligible()
    });

    this.renderWishlist({
      wishlist: store.getWishlist(),
      count: store.getWishlist().length
    });
  }

  /* ------------------------------------------------------------------------
     1. TOAST NOTIFICATIONS
     ------------------------------------------------------------------------ */
  showToast(message, title = 'Atelier Notice') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      <div>
        <div style="font-family:var(--font-mono); font-size:0.7rem; letter-spacing:0.1em; color:var(--color-champagne); text-transform:uppercase;">${title}</div>
        <div style="font-size:0.85rem; color:#FFFFFF;">${message}</div>
      </div>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('is-visible'));

    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  /* ------------------------------------------------------------------------
     2. CART DRAWER
     ------------------------------------------------------------------------ */
  initCartDrawer() {
    const bagButtons = document.querySelectorAll('[data-action="open-cart"]');
    const closeButtons = document.querySelectorAll('[data-action="close-cart"]');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const wishlistDrawer = document.getElementById('wishlist-drawer');

    const openDrawer = () => {
      cartDrawer?.classList.add('is-open');
      wishlistDrawer?.classList.remove('is-open');
      cartBackdrop?.classList.add('is-open');
      this.lockBodyScroll();
    };

    const closeDrawer = () => {
      cartDrawer?.classList.remove('is-open');
      wishlistDrawer?.classList.remove('is-open');
      cartBackdrop?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    this.openCart = openDrawer;
    this.closeCart = closeDrawer;

    bagButtons.forEach(btn => btn.addEventListener('click', openDrawer));
    closeButtons.forEach(btn => btn.addEventListener('click', closeDrawer));
    
    // Backdrop closes both cart and wishlist drawers
    cartBackdrop?.addEventListener('click', closeDrawer);
    cartBackdrop?.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, { passive: false });

    // Wheel event isolation for cart drawer on desktop
    cartDrawer?.addEventListener('wheel', (e) => {
      const list = cartDrawer.querySelector('.cart-items-list');
      if (!list) return;
      const { scrollTop, scrollHeight, clientHeight } = list;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    }, { passive: false });

    // Global keyboard Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
        this.closeWishlist();
        this.closeCompareModal();
        this.closeProductDetail();
        this.closeQuickView();
        this.closeSearch();
        this.closeDemoModal();
      }
    });

    // Delegation for cart actions
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList?.addEventListener('click', (e) => {
      const target = e.target.closest('button, .btn-remove-item');
      if (!target) return;

      const action = target.getAttribute('data-cart-action');
      const id = target.getAttribute('data-product-id');
      const variant = target.getAttribute('data-product-variant');

      if (action === 'increase') {
        store.updateQuantity(id, variant, 1);
      } else if (action === 'decrease') {
        store.updateQuantity(id, variant, -1);
      } else if (action === 'remove') {
        store.removeFromCart(id, variant);
        this.showToast('Timepiece removed from your order.');
      }
    });
  }

  renderCart({ cart, subtotal, count, freeShippingRemaining, isFreeShippingEligible }) {
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.classList.remove('bounce');
      void badge.offsetWidth;
      if (count > 0) badge.classList.add('bounce');
    });

    const cartItemsList = document.getElementById('cart-items-list');
    const cartSubtotalEl = document.getElementById('cart-subtotal-amount');
    const freeShippingTextEl = document.getElementById('free-shipping-text');
    const freeShippingFillEl = document.getElementById('free-shipping-fill');
    const cartFooter = document.getElementById('cart-footer');
    const freeShippingBarWrap = document.getElementById('free-shipping-bar-wrap');

    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = store.formatPKR(subtotal);
    }

    if (freeShippingTextEl && freeShippingFillEl) {
      const threshold = boutiqueConfig.shopping.freeShippingThreshold;
      const percentage = Math.min(100, Math.round((subtotal / threshold) * 100));
      freeShippingFillEl.style.width = `${percentage}%`;

      if (isFreeShippingEligible) {
        freeShippingTextEl.innerHTML = `<span>🛡️ <strong>Complimentary Insured Courier</strong> unlocked!</span>`;
      } else {
        freeShippingTextEl.innerHTML = `<span>Add <strong>${store.formatPKR(freeShippingRemaining)}</strong> for Complimentary Insured Courier</span> <span>${percentage}%</span>`;
      }
    }

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <h4 style="font-family:var(--font-serif); font-size:1.35rem; margin-top:0.5rem; color:#FFFFFF;">Your Bag is Empty</h4>
          <p style="font-size:0.85rem; color:var(--color-steel-light); max-width:240px;">Explore our precision calibres and chronographs to assemble your order.</p>
          <button class="btn btn-outline-light" style="font-size:0.72rem; padding:0.7rem 1.4rem; margin-top:0.5rem;" data-action="close-cart" onclick="document.getElementById('shop-catalog')?.scrollIntoView({behavior:'smooth'})">
            Discover Timepieces
          </button>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';
      if (freeShippingBarWrap) freeShippingBarWrap.style.display = 'none';
      return;
    }

    if (cartFooter) cartFooter.style.display = 'block';
    if (freeShippingBarWrap) freeShippingBarWrap.style.display = 'block';

    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="cart-item-info">
          <div>
            <h5 class="cart-item-name">${item.name}</h5>
            <div class="cart-item-meta">${item.caseSize} · ${item.selectedVariant}</div>
            <div class="cart-item-price">${store.formatPKR(item.price * item.quantity)}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" data-cart-action="decrease" data-product-id="${item.id}" data-product-variant="${item.selectedVariant}" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-cart-action="increase" data-product-id="${item.id}" data-product-variant="${item.selectedVariant}" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn-remove-item" data-cart-action="remove" data-product-id="${item.id}" data-product-variant="${item.selectedVariant}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     3. WISHLIST DRAWER
     ------------------------------------------------------------------------ */
  initWishlistDrawer() {
    const openBtns = document.querySelectorAll('[data-action="open-wishlist"]');
    const closeBtns = document.querySelectorAll('[data-action="close-wishlist"]');
    const drawer = document.getElementById('wishlist-drawer');
    const cartDrawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');

    const openWishlist = () => {
      drawer?.classList.add('is-open');
      cartDrawer?.classList.remove('is-open');
      backdrop?.classList.add('is-open');
      this.lockBodyScroll();
    };

    const closeWishlist = () => {
      drawer?.classList.remove('is-open');
      backdrop?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    this.openWishlist = openWishlist;
    this.closeWishlist = closeWishlist;

    openBtns.forEach(b => b.addEventListener('click', openWishlist));
    closeBtns.forEach(b => b.addEventListener('click', closeWishlist));

    // Wheel event isolation for wishlist drawer on desktop
    drawer?.addEventListener('wheel', (e) => {
      const list = drawer.querySelector('.wishlist-items-list');
      if (!list) return;
      const { scrollTop, scrollHeight, clientHeight } = list;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    }, { passive: false });

    // Delegation: move to bag & remove
    const list = document.getElementById('wishlist-items-list');
    list?.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;

      const action = target.getAttribute('data-wishlist-action');
      const id = target.getAttribute('data-product-id');
      const product = boutiqueConfig.products.find(p => p.id === id);

      if (action === 'move-to-cart' && product) {
        store.addToCart(product, null, 1);
        store.toggleWishlist(product);
        this.showToast(`Moved "${product.name}" to your shopping bag.`);
      } else if (action === 'remove' && product) {
        store.toggleWishlist(product);
        this.showToast(`Removed "${product.name}" from wishlist.`);
      }
    });
  }

  renderWishlist({ wishlist, count }) {
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(badge => {
      badge.textContent = count;
      badge.classList.remove('bounce');
      void badge.offsetWidth;
      if (count > 0) badge.classList.add('bounce');
    });

    const list = document.getElementById('wishlist-items-list');
    if (!list) return;

    if (wishlist.length === 0) {
      list.innerHTML = `
        <div class="cart-empty">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <h4 style="font-family:var(--font-serif); font-size:1.35rem; color:#FFFFFF;">Your Wishlist is Empty</h4>
          <p style="font-size:0.85rem; color:var(--color-steel-light);">Save your preferred timepieces for private consultation.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = wishlist.map(p => `
      <div class="cart-item" data-id="${p.id}">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}">
        <div class="cart-item-info">
          <div>
            <h5 class="cart-item-name">${p.name}</h5>
            <div class="cart-item-meta">${p.caseSize} · ${p.movement}</div>
            <div class="cart-item-price">${store.formatPKR(p.price)}</div>
          </div>
          <div style="display:flex; gap:0.5rem; margin-top:0.6rem;">
            <button class="btn btn-primary" style="font-size:0.68rem; padding:0.45rem 0.8rem;" data-wishlist-action="move-to-cart" data-product-id="${p.id}"><span>Add to Bag</span></button>
            <button class="btn-remove-item" style="font-size:0.7rem;" data-wishlist-action="remove" data-product-id="${p.id}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ------------------------------------------------------------------------
     4. WATCH COMPARISON MODAL (UP TO 3 TIMEPIECES)
     ------------------------------------------------------------------------ */
  initComparisonModal() {
    const modal = document.getElementById('comparison-modal');
    const closeBtn = document.getElementById('btn-close-compare');

    this.openCompareModal = () => {
      modal?.classList.add('is-open');
      this.lockBodyScroll();
    };

    this.closeCompareModal = () => {
      modal?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    closeBtn?.addEventListener('click', this.closeCompareModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) this.closeCompareModal();
    });

    const tableWrap = document.getElementById('compare-table-wrap');
    tableWrap?.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;

      const action = target.getAttribute('data-compare-action');
      const id = target.getAttribute('data-product-id');
      const product = boutiqueConfig.products.find(p => p.id === id);

      if (action === 'remove') {
        store.removeFromCompare(id);
      } else if (action === 'add-to-cart' && product) {
        store.addToCart(product, null, 1);
        this.showToast(`Added "${product.name}" to your bag.`);
      }
    });
  }

  renderComparison({ compareList, count }) {
    const tableWrap = document.getElementById('compare-table-wrap');
    const floatingPill = document.getElementById('compare-floating-pill');

    if (floatingPill) {
      if (count > 0) {
        const wasHidden = floatingPill.style.display === 'none' || !floatingPill.classList.contains('is-visible');
        floatingPill.style.display = 'flex';
        floatingPill.classList.add('is-visible');
        if (wasHidden) {
          floatingPill.classList.remove('orvel-compare-pill-in');
          void floatingPill.offsetWidth;
          floatingPill.classList.add('orvel-compare-pill-in');
        }
        floatingPill.innerHTML = `
          <div class="compare-pill-info">
            <span class="compare-pill-dot"></span>
            <span class="compare-pill-text-wrap">
              <span class="compare-full-text">Comparing <strong>${count}</strong> Timepiece${count > 1 ? 's' : ''}</span>
              <span class="compare-short-text">Comparing <strong>${count}</strong></span>
            </span>
          </div>
          <button class="compare-pill-btn" id="btn-open-compare-bar" type="button">
            <span class="compare-btn-full">View Comparison</span>
            <span class="compare-btn-short">Compare</span>
          </button>
          <button class="compare-pill-close" id="btn-clear-compare-pill" title="Clear Comparison" aria-label="Clear Comparison" type="button">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        `;
        document.getElementById('btn-open-compare-bar')?.addEventListener('click', () => this.openCompareModal());
        document.getElementById('btn-clear-compare-pill')?.addEventListener('click', (e) => {
          e.stopPropagation();
          store.clearCompare();
        });
      } else {
        floatingPill.classList.remove('is-visible', 'orvel-compare-pill-in', 'orvel-compare-pill-pop');
        floatingPill.style.display = 'none';
      }
    }

    if (!tableWrap) return;

    if (compareList.length === 0) {
      tableWrap.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--color-steel-light);">
          <p>No timepieces selected for comparison. Click the compare icon on any watch card to compare specifications side by side.</p>
        </div>
      `;
      return;
    }

    const colWidth = Math.round(80 / compareList.length);

    tableWrap.innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>
            <th style="width:20%; vertical-align:middle;">Specification</th>
            ${compareList.map(p => `
              <th style="width:${colWidth}%; vertical-align:top;">
                <div class="compare-card-head">
                  <div class="compare-img-box">
                    <img src="${p.image}" alt="${p.name}" class="compare-watch-img">
                  </div>
                  <h4 class="compare-watch-title">${p.name}</h4>
                  <div class="compare-watch-price">${store.formatPKR(p.price)}</div>
                  <button class="compare-btn-remove" data-compare-action="remove" data-product-id="${p.id}" type="button">Remove</button>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Collection</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.collectionName}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Case Diameter</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.caseSize}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Case Thickness</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.caseThickness || '10.5mm'}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Movement Type</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.movement}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Power Reserve</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.powerReserve || '44 Hours'}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Dial Finish</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.dialColor}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Strap Material</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.strapMaterial}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Crystal</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.crystal || 'Anti-Reflective Sapphire'}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Water Resistance</strong></td>
            ${compareList.map(p => `<td style="text-align:center;">${p.waterResistance}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Action</strong></td>
            ${compareList.map(p => `
              <td class="compare-col-action">
                <button class="compare-btn-add-to-cart" data-compare-action="add-to-cart" data-product-id="${p.id}" type="button">
                  Add to Bag
                </button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    `;
  }

  /* ------------------------------------------------------------------------
     5. DEDICATED PRODUCT DETAIL VIEW & MODAL (PREMIUM UPGRADE)
     ------------------------------------------------------------------------ */
  initProductDetailModal() {
    const modal = document.getElementById('product-detail-modal');
    const closeBtn = document.getElementById('btn-close-detail');
    const galleryCol = document.getElementById('detail-gallery-column');
    const prevBtn = document.getElementById('detail-gallery-prev');
    const nextBtn = document.getElementById('detail-gallery-next');
    const wishlistBtn = document.getElementById('detail-wishlist-btn');
    const askAiBtn = document.getElementById('detail-ask-ai');

    this.detailGalleryImages = [];
    this.detailGalleryIndex = 0;
    this.detailSlideshowTimer = null;
    this.detailResumeTimer = null;
    this.isDetailGalleryHovered = false;

    this.closeProductDetail = () => {
      this.stopDetailSlideshow();
      modal?.classList.remove('is-open');
      this.unlockBodyScroll();
      this.activeDetailProduct = null;
    };

    closeBtn?.addEventListener('click', this.closeProductDetail);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) this.closeProductDetail();
    });

    // Wheel event isolation: Prevent background webpage scroll when scrolling inside the product modal
    modal?.addEventListener('wheel', (e) => {
      const modalCard = modal?.querySelector('.product-detail-modal-card');
      const infoCol = modal?.querySelector('.detail-info-column');
      // On desktop, infoCol scrolls; on mobile/tablet, modalCard scrolls
      const scrollable = (infoCol && infoCol.scrollHeight > infoCol.clientHeight + 1)
        ? infoCol
        : (modalCard && modalCard.scrollHeight > modalCard.clientHeight + 1 ? modalCard : null);

      if (!scrollable) {
        e.preventDefault();
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = scrollable;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

      // If scrolling up past top or down past bottom, prevent scroll chaining to window
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
      }
    }, { passive: false });

    // Mobile Touch Event Management:
    // Allow native 120Hz touch scrolling inside modal card, prevent background drag on backdrop
    modal?.addEventListener('touchmove', (e) => {
      if (e.target === modal) {
        e.preventDefault();
      }
    }, { passive: false });

    // Swipe left/right on mobile image stage to switch photos smoothly
    const stage = modal?.querySelector('.detail-main-stage');
    let stageTouchStartX = 0;
    let stageTouchStartY = 0;
    stage?.addEventListener('touchstart', (e) => {
      stageTouchStartX = e.touches[0]?.clientX || 0;
      stageTouchStartY = e.touches[0]?.clientY || 0;
    }, { passive: true });

    stage?.addEventListener('touchend', (e) => {
      const stageTouchEndX = e.changedTouches[0]?.clientX || 0;
      const stageTouchEndY = e.changedTouches[0]?.clientY || 0;
      const diffX = stageTouchStartX - stageTouchEndX;
      const diffY = stageTouchStartY - stageTouchEndY;
      // If horizontal swipe is dominant and at least 40px
      if (Math.abs(diffX) > Math.abs(diffY) * 1.5 && Math.abs(diffX) > 40) {
        this.pauseDetailSlideshowManual();
        if (diffX > 0) {
          this.stepDetailGallery(1); // Swipe left = next image
        } else {
          this.stepDetailGallery(-1); // Swipe right = prev image
        }
      }
    }, { passive: true });

    // Gallery Navigation Arrows
    prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.pauseDetailSlideshowManual();
      this.stepDetailGallery(-1);
    });

    nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.pauseDetailSlideshowManual();
      this.stepDetailGallery(1);
    });

    // Gallery Hover Pause & Resume
    galleryCol?.addEventListener('pointerenter', () => {
      this.isDetailGalleryHovered = true;
      this.stopDetailSlideshow();
    });

    galleryCol?.addEventListener('pointerleave', () => {
      this.isDetailGalleryHovered = false;
      this.scheduleDetailSlideshowResume(2500);
    });

    // Wishlist Toggle inside Detail Modal
    wishlistBtn?.addEventListener('click', () => {
      if (!this.activeDetailProduct) return;
      const isAdded = store.toggleWishlist(this.activeDetailProduct);
      wishlistBtn.classList.toggle('is-active', isAdded);
      wishlistBtn.setAttribute('aria-label', isAdded ? 'Remove from Wishlist' : 'Save to Wishlist');
      wishlistBtn.setAttribute('title', isAdded ? 'Remove from Wishlist' : 'Save to Wishlist');

      if (isAdded) {
        const modal = document.getElementById('product-detail-modal');
        const watchImg = modal ? modal.querySelector('#detail-main-img, .detail-main-img, .detail-main-stage img, img') : null;
        if (typeof window.triggerOrvelFloatToWishlist === 'function') {
          window.triggerOrvelFloatToWishlist(watchImg, this.activeDetailProduct.name);
        }
      }

      this.showToast(isAdded ? `Saved "${this.activeDetailProduct.name}" to your wishlist.` : `Removed "${this.activeDetailProduct.name}" from wishlist.`);
    });

    // Ask with AI Button
    askAiBtn?.addEventListener('click', () => {
      if (!this.activeDetailProduct) return;
      const prod = this.activeDetailProduct;
      const variant = this.selectedVariant;
      this.closeProductDetail();
      this.openAiAssistant(prod, variant);
    });

    // Add to Bag
    document.getElementById('detail-add-to-cart')?.addEventListener('click', () => {
      if (!this.activeDetailProduct) return;
      store.addToCart(this.activeDetailProduct, this.selectedVariant, this.selectedQty);
      this.showToast(`Added "${this.activeDetailProduct.name}" (${this.selectedVariant}) to your bag.`);
      this.closeProductDetail();
      this.openCart();
    });

    // Direct WhatsApp Buy
    document.getElementById('detail-buy-whatsapp')?.addEventListener('click', () => {
      if (!this.activeDetailProduct) return;
      const brand = boutiqueConfig.brand.name || 'ORVÉL';
      const msg = `Hello ${brand},\n\nI am interested in acquiring the ${this.activeDetailProduct.name} (${this.selectedVariant || 'Standard'}).\nPrice: ${store.formatPKR(this.activeDetailProduct.price)}\n\nPlease confirm availability and delivery to my city.`;
      const url = `https://wa.me/${boutiqueConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });

    // Collapsible Accordions inside Detail Modal
    const accordionHeaders = modal?.querySelectorAll('.detail-accordion-header');
    accordionHeaders?.forEach(hdr => {
      hdr.addEventListener('click', () => {
        const item = hdr.closest('.detail-accordion-item');
        if (!item) return;
        const isOpen = item.classList.contains('is-open');
        item.classList.toggle('is-open', !isOpen);
        hdr.setAttribute('aria-expanded', String(!isOpen));
      });
    });

    // Initialize AI Concierge Modal
    this.initAiAssistantModal();
  }

  switchDetailGalleryImage(index, animate = true) {
    if (!this.detailGalleryImages || this.detailGalleryImages.length === 0) return;
    this.detailGalleryIndex = (index + this.detailGalleryImages.length) % this.detailGalleryImages.length;
    const targetSrc = this.detailGalleryImages[this.detailGalleryIndex];

    const mainImg = document.getElementById('detail-main-img');
    const nextImg = document.getElementById('detail-next-img');
    const thumbs = document.querySelectorAll('#detail-thumbs .detail-thumb');

    // Update active thumbnail
    thumbs.forEach((thumb, idx) => {
      thumb.classList.toggle('is-active', idx === this.detailGalleryIndex);
      if (idx === this.detailGalleryIndex) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    if (!mainImg) return;

    if (!animate) {
      mainImg.src = targetSrc;
      mainImg.classList.add('is-active');
      if (nextImg) nextImg.classList.remove('is-active');
      return;
    }

    // Soft crossfade transition
    if (nextImg) {
      nextImg.src = targetSrc;
      nextImg.classList.add('is-active');
      setTimeout(() => {
        mainImg.src = targetSrc;
        mainImg.classList.add('is-active');
        nextImg.classList.remove('is-active');
      }, 420);
    } else {
      mainImg.style.opacity = '0';
      mainImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        mainImg.src = targetSrc;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 180);
    }

    // Reset progress bar animation
    const pBar = document.getElementById('detail-progress-bar');
    if (pBar) {
      pBar.style.animation = 'none';
      pBar.offsetHeight; // trigger reflow
      pBar.style.animation = 'detailProgressLoop 4.2s linear infinite';
    }
  }

  stepDetailGallery(direction = 1) {
    if (this.detailGalleryImages.length <= 1) return;
    this.switchDetailGalleryImage(this.detailGalleryIndex + direction, true);
  }

  startDetailSlideshow() {
    this.stopDetailSlideshow();
    if (!this.detailGalleryImages || this.detailGalleryImages.length <= 1) {
      const pWrap = document.getElementById('detail-slideshow-progress');
      if (pWrap) pWrap.style.display = 'none';
      return;
    }

    const pWrap = document.getElementById('detail-slideshow-progress');
    if (pWrap) pWrap.style.display = 'block';

    const pBar = document.getElementById('detail-progress-bar');
    if (pBar) {
      pBar.style.animation = 'detailProgressLoop 4.2s linear infinite';
    }

    this.detailSlideshowTimer = setInterval(() => {
      if (this.isDetailGalleryHovered) return;
      this.stepDetailGallery(1);
    }, 4200);
  }

  stopDetailSlideshow() {
    if (this.detailSlideshowTimer) {
      clearInterval(this.detailSlideshowTimer);
      this.detailSlideshowTimer = null;
    }
    if (this.detailResumeTimer) {
      clearTimeout(this.detailResumeTimer);
      this.detailResumeTimer = null;
    }
    const pBar = document.getElementById('detail-progress-bar');
    if (pBar) pBar.style.animation = 'none';
  }

  pauseDetailSlideshowManual() {
    this.stopDetailSlideshow();
    this.scheduleDetailSlideshowResume(4500);
  }

  scheduleDetailSlideshowResume(delayMs = 3500) {
    if (this.detailResumeTimer) clearTimeout(this.detailResumeTimer);
    if (!this.activeDetailProduct || this.detailGalleryImages.length <= 1) return;
    this.detailResumeTimer = setTimeout(() => {
      if (!this.isDetailGalleryHovered && this.activeDetailProduct) {
        this.startDetailSlideshow();
      }
    }, delayMs);
  }

  openProductDetail(product) {
    if (!product) return;
    this.activeDetailProduct = product;
    this.selectedVariant = product.variants && product.variants[0] ? product.variants[0].name : product.strapMaterial;
    this.selectedQty = 1;

    const modal = document.getElementById('product-detail-modal');
    const title = document.getElementById('detail-title');
    const price = document.getElementById('detail-price');
    const tag = document.getElementById('detail-tag');
    const badge = document.getElementById('detail-badge');
    const desc = document.getElementById('detail-desc');
    const thumbsWrap = document.getElementById('detail-thumbs');
    const variantsWrap = document.getElementById('detail-variants');
    const variantLabel = document.getElementById('detail-selected-variant-label');
    const specsTable = document.getElementById('detail-specs-table');
    const highlightsList = document.getElementById('detail-highlights-list');
    const wishlistBtn = document.getElementById('detail-wishlist-btn');

    // Quick Specs elements
    const qsCase = document.getElementById('quick-spec-case');
    const qsMov = document.getElementById('quick-spec-movement');
    const qsRes = document.getElementById('quick-spec-reserve');
    const qsStrap = document.getElementById('quick-spec-strap');

    if (title) title.textContent = product.name;
    if (price) price.textContent = store.formatPKR(product.price);
    if (tag) tag.textContent = `${product.collectionName || 'Fine Horology'}`;
    if (badge) badge.textContent = product.badge || 'ATELIER REFERENCE';
    if (desc) desc.textContent = product.description;
    if (variantLabel) variantLabel.textContent = this.selectedVariant;

    // Quick specs injection
    if (qsCase) qsCase.textContent = product.caseSize || '40MM';
    if (qsMov) qsMov.textContent = product.movement ? product.movement.split(' ')[0] : 'Automatic';
    if (qsRes) qsRes.textContent = product.powerReserve || '44 Hours';
    if (qsStrap) qsStrap.textContent = this.selectedVariant;

    // Wishlist Button State
    if (wishlistBtn) {
      const isWish = store.isWishlisted(product.id);
      wishlistBtn.classList.toggle('is-active', isWish);
      wishlistBtn.setAttribute('aria-label', isWish ? 'Remove from Wishlist' : 'Save to Wishlist');
      wishlistBtn.setAttribute('title', isWish ? 'Remove from Wishlist' : 'Save to Wishlist');
    }

    // Build Comprehensive 2 to 4 Gallery Images Set
    const gallerySet = [];
    if (product.image) gallerySet.push(product.image);
    if (product.secondaryImage && !gallerySet.includes(product.secondaryImage)) {
      gallerySet.push(product.secondaryImage);
    }
    if (Array.isArray(product.gallery)) {
      product.gallery.forEach(img => {
        if (img && !gallerySet.includes(img)) gallerySet.push(img);
      });
    }
    if (Array.isArray(product.variants)) {
      product.variants.forEach(v => {
        if (v.image && !gallerySet.includes(v.image)) gallerySet.push(v.image);
      });
    }
    this.detailGalleryImages = gallerySet;
    this.detailGalleryIndex = 0;

    // Render Thumbnails
    if (thumbsWrap) {
      thumbsWrap.innerHTML = this.detailGalleryImages.map((imgSrc, idx) => `
        <button class="detail-thumb ${idx === 0 ? 'is-active' : ''}" type="button" data-index="${idx}" aria-label="View photo angle ${idx + 1}">
          <img src="${imgSrc}" alt="${product.name} angle ${idx + 1}" draggable="false">
        </button>
      `).join('');

      thumbsWrap.querySelectorAll('.detail-thumb').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(thumb.getAttribute('data-index') || '0', 10);
          this.pauseDetailSlideshowManual();
          this.switchDetailGalleryImage(idx, true);
        });
      });
    }

    // Initialize Main Gallery Image & Start Slideshow
    this.switchDetailGalleryImage(0, false);
    this.startDetailSlideshow();

    // Strap / Variant Options with image & spec synchronization
    if (variantsWrap) {
      const variants = product.variants || [{ name: product.strapMaterial, image: product.image }];
      variantsWrap.innerHTML = variants.map((v, idx) => `
        <button class="filter-pill ${idx === 0 ? 'is-active' : ''}" type="button" data-variant-name="${v.name}">${v.name}</button>
      `).join('');

      variantsWrap.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          variantsWrap.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          this.selectedVariant = btn.getAttribute('data-variant-name');
          if (variantLabel) variantLabel.textContent = this.selectedVariant;
          if (qsStrap) qsStrap.textContent = this.selectedVariant;

          const strapSpecCell = document.getElementById('spec-strap-cell');
          if (strapSpecCell) strapSpecCell.textContent = this.selectedVariant;

          const foundVar = variants.find(v => v.name === this.selectedVariant);
          if (foundVar && foundVar.image) {
            const foundIdx = this.detailGalleryImages.indexOf(foundVar.image);
            if (foundIdx !== -1) {
              this.pauseDetailSlideshowManual();
              this.switchDetailGalleryImage(foundIdx, true);
            }
          }
        });
      });
    }

    // Technical Specs Table
    if (specsTable) {
      specsTable.innerHTML = `
        <tr><td>Case Diameter</td><td>${product.caseSize}</td></tr>
        <tr><td>Case Thickness</td><td>${product.caseThickness || '10.8mm'}</td></tr>
        <tr><td>Movement Type</td><td>${product.movement}</td></tr>
        <tr><td>Power Reserve</td><td>${product.powerReserve || '44 Hours'}</td></tr>
        <tr><td>Dial Color</td><td>${product.dialColor}</td></tr>
        <tr><td>Strap Configuration</td><td id="spec-strap-cell">${this.selectedVariant}</td></tr>
        <tr><td>Lug Width</td><td>${product.strapWidth || '20mm'}</td></tr>
        <tr><td>Crystal Optics</td><td>${product.crystal || 'Anti-Reflective Sapphire'}</td></tr>
        <tr><td>Water Resistance</td><td>${product.waterResistance}</td></tr>
        <tr><td>Atelier Care</td><td>${boutiqueConfig.shopping.servicePolicy}</td></tr>
      `;
    }

    // Highlights list (compact luxury presentation)
    if (highlightsList && product.highlights) {
      highlightsList.innerHTML = product.highlights.slice(0, 3).map(h => `
        <li class="detail-highlight-item">
          <span class="highlight-check">✓</span>
          <span>${h}</span>
        </li>
      `).join('');
    }

    // By default, open the first 2 accordions (Highlights & Technical Specs), 3rd remains collapsed
    const accordionItems = modal?.querySelectorAll('.detail-accordion-item');
    accordionItems?.forEach((item, index) => {
      const hdr = item.querySelector('.detail-accordion-header');
      const shouldBeOpen = index < 2;
      item.classList.toggle('is-open', shouldBeOpen);
      if (hdr) {
        hdr.setAttribute('aria-expanded', String(shouldBeOpen));
      }
    });

    // Reset scroll positions to top
    const infoCol = modal?.querySelector('.detail-info-column');
    if (infoCol) infoCol.scrollTop = 0;
    const modalCard = modal?.querySelector('.product-detail-modal-card');
    if (modalCard) modalCard.scrollTop = 0;

    modal?.classList.add('is-open');
    this.lockBodyScroll();
  }

  /* ------------------------------------------------------------------------
     5B. ORVÉL AI CONCIERGE ASSISTANT MODAL (PRODUCT-AWARE)
     ------------------------------------------------------------------------ */
  initAiAssistantModal() {
    const aiModal = document.getElementById('ai-assistant-modal');
    const closeBtn = document.getElementById('btn-close-ai-assistant');
    const input = document.getElementById('ai-inquiry-input');
    const waBtn = document.getElementById('ai-btn-wa-consult');
    const chips = document.querySelectorAll('.ai-prompt-chip');

    this.closeAiAssistant = () => {
      aiModal?.classList.remove('is-open');
    };

    closeBtn?.addEventListener('click', this.closeAiAssistant);
    aiModal?.addEventListener('click', (e) => {
      if (e.target === aiModal) this.closeAiAssistant();
    });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (input) {
          input.value = chip.textContent;
          input.focus();
        }
      });
    });

    waBtn?.addEventListener('click', () => {
      const query = input?.value?.trim() || 'I would like expert horological advice on this timepiece.';
      const prod = this.activeAiProduct || this.activeDetailProduct;
      const brand = boutiqueConfig.brand.name || 'ORVÉL';
      const prodName = prod ? prod.name : `${brand} Timepiece`;
      const variant = this.selectedVariant || 'Standard';
      const msg = `Hello ${brand} Atelier Concierge,\n\nI am consulting regarding the ${prodName} (${variant}):\n"${query}"\n\nPlease advise on caliber specifications, wrist fit, and availability.`;
      const url = `https://wa.me/${boutiqueConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
      this.closeAiAssistant();
    });
  }

  openAiAssistant(product, selectedVariant) {
    if (!product) return;
    this.activeAiProduct = product;
    const brand = boutiqueConfig.brand.name || 'ORVÉL';

    const productContext = {
      productId: product.id,
      name: product.name,
      collection: product.collectionName,
      price: product.price,
      product: product,
      productId: product.id,
      productName: product.name,
      formattedPrice: store.formatPKR(product.price),
      selectedVariant: selectedVariant || this.selectedVariant,
      caseSize: product.caseSize,
      movement: product.movement,
      powerReserve: product.powerReserve || '44 Hours',
      waterResistance: product.waterResistance,
      description: product.description,
      timestamp: new Date().toISOString()
    };

    // Global hook for AI integrations
    window.orvelAiContext = productContext;
    if (window.concierge) {
      window.concierge.openWithProductContext(product, selectedVariant || this.selectedVariant);
    } else {
      window.dispatchEvent(new CustomEvent('orvel:ask-with-ai', { detail: productContext }));
    }

    this.showToast(`${brand} AI Concierge: Context loaded for ${product.name}`);
  }

  /* ------------------------------------------------------------------------
     6. QUICK VIEW MODAL
     ------------------------------------------------------------------------ */
  initQuickView() {
    const modal = document.getElementById('quickview-modal');
    const closeBtn = document.getElementById('btn-close-quickview');

    this.closeQuickView = () => {
      modal?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    closeBtn?.addEventListener('click', this.closeQuickView);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) this.closeQuickView();
    });
  }

  openQuickView(product) {
    this.openProductDetail(product);
  }

  /* ------------------------------------------------------------------------
     7. SEARCH MODAL OVERLAY
     ------------------------------------------------------------------------ */
  initSearch() {
    const openBtns = document.querySelectorAll('[data-action="open-search"]');
    const closeBtn = document.getElementById('btn-close-search');
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input-main');
    const resultsContainer = document.getElementById('search-results-list');

    const openSearch = () => {
      modal?.classList.add('is-open');
      setTimeout(() => input?.focus(), 150);
      this.lockBodyScroll();
    };

    const closeSearch = () => {
      modal?.classList.remove('is-open');
      this.unlockBodyScroll();
      if (input) input.value = '';
    };

    this.closeSearch = closeSearch;

    openBtns.forEach(btn => btn.addEventListener('click', openSearch));
    closeBtn?.addEventListener('click', closeSearch);

    input?.addEventListener('input', (e) => {
      const clean = e.target.value.trim().toLowerCase();
      if (!clean) {
        resultsContainer.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--color-steel-light); padding:2rem 0;">Type to search fine timepieces by model, calibre, or dial color...</p>`;
        return;
      }

      const matches = boutiqueConfig.products.filter(p =>
        p.name.toLowerCase().includes(clean) ||
        p.collectionName.toLowerCase().includes(clean) ||
        p.movement.toLowerCase().includes(clean) ||
        p.dialColor.toLowerCase().includes(clean) ||
        p.caseSize.toLowerCase().includes(clean)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--color-steel-light); padding:2rem 0;">No timepieces matching "${clean}". Try "Chronograph", "Automatic", "Classic", or "Steel".</p>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(p => `
        <div class="product-card" style="cursor:pointer;" data-id="${p.id}">
          <div class="product-image-container" style="aspect-ratio:1/1;">
            <img class="product-img" src="${p.image}" alt="${p.name}">
          </div>
          <div class="product-info">
            <span class="product-meta-specs">${p.collectionName} · ${p.caseSize}</span>
            <h4 class="product-name" style="font-size:1.05rem;">${p.name}</h4>
            <div class="product-price">${store.formatPKR(p.price)}</div>
            <button class="btn btn-outline-light" style="font-size:0.68rem; padding:0.55rem; margin-top:0.5rem;" data-search-inspect="${p.id}">Inspect Timepiece</button>
          </div>
        </div>
      `).join('');

      resultsContainer.querySelectorAll('[data-search-inspect]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const prodId = btn.getAttribute('data-search-inspect');
          const found = boutiqueConfig.products.find(p => p.id === prodId);
          if (found) {
            closeSearch();
            this.openProductDetail(found);
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     7B. PRIVATE CONCIERGE BUTTON TRIGGERS
     ------------------------------------------------------------------------ */
  initConciergeTriggers() {
    const conciergeBtns = document.querySelectorAll('[data-action="open-concierge"]');
    conciergeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        // If mobile drawer is open, close it
        const mobileDrawer = document.getElementById('mobile-nav-drawer');
        if (mobileDrawer?.classList.contains('is-open')) {
          document.getElementById('mobile-menu-btn')?.classList.remove('is-active');
          mobileDrawer.classList.remove('is-open');
          document.getElementById('mobile-drawer-overlay')?.classList.remove('is-open');
          this.unlockBodyScroll();
        }

        if (window.concierge && typeof window.concierge.open === 'function') {
          window.concierge.open();
        } else {
          const launcher = document.getElementById('orvel-concierge-launcher');
          if (launcher) {
            launcher.click();
          } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. FAQ ACCORDION
     ------------------------------------------------------------------------ */
  initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question?.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        faqItems.forEach(other => {
          other.classList.remove('is-open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isOpen && answer) {
          item.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     9. BESTSELLERS CAROUSEL CONTROLS
     ------------------------------------------------------------------------ */
  initBestsellersCarousel() {
    const track = document.getElementById('bestsellers-track');
    const prevBtn = document.getElementById('bestsellers-prev');
    const nextBtn = document.getElementById('bestsellers-next');

    prevBtn?.addEventListener('click', () => track?.scrollBy({ left: -360, behavior: 'smooth' }));
    nextBtn?.addEventListener('click', () => track?.scrollBy({ left: 360, behavior: 'smooth' }));

    if (track) {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let isDragging = false;

      track.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        track.style.cursor = 'grabbing';
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });

      track.addEventListener('mouseleave', () => {
        isDown = false;
        track.style.cursor = '';
      });

      track.addEventListener('mouseup', () => {
        isDown = false;
        track.style.cursor = '';
        setTimeout(() => { isDragging = false; }, 80);
      });

      track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 5) isDragging = true;
        track.scrollLeft = scrollLeft - walk;
      });

      // Prevent accidental modal open when dragging
      track.addEventListener('click', (e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);
    }
  }

  /* ------------------------------------------------------------------------
     10. MOBILE NAV
     ------------------------------------------------------------------------ */
  initMobileNav() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const links = document.querySelectorAll('.mobile-nav-link');
    const drawerCloseBtn = document.getElementById('mobile-drawer-close-btn');

    const toggleNav = () => {
      const isOpen = mobileDrawer?.classList.contains('is-open');
      if (isOpen) {
        closeNav();
      } else {
        mobileBtn?.classList.add('is-active');
        mobileDrawer?.classList.add('is-open');
        overlay?.classList.add('is-open');
        this.lockBodyScroll();
      }
    };

    const closeNav = () => {
      mobileBtn?.classList.remove('is-active');
      mobileDrawer?.classList.remove('is-open');
      overlay?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    mobileBtn?.addEventListener('click', toggleNav);
    drawerCloseBtn?.addEventListener('click', closeNav);
    overlay?.addEventListener('click', closeNav);
    links.forEach(l => l.addEventListener('click', closeNav));

    // Ensure touch and wheel events scroll the mobile drawer smoothly and don't bubble to outer locks
    mobileDrawer?.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });
    mobileDrawer?.addEventListener('wheel', (e) => {
      e.stopPropagation();
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     11. BACK TO TOP
     ------------------------------------------------------------------------ */
  initBackToTop() {
    document.getElementById('btn-back-to-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     12. NEWSLETTER FORM (The Private List)
     ------------------------------------------------------------------------ */
  initNewsletterForm() {
    document.getElementById('footer-newsletter-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.querySelector('input');
      if (input && input.value) {
        this.showToast('Thank you. You have been added to The Private List.', 'The Private List');
        input.value = '';
      }
    });
  }

  /* ------------------------------------------------------------------------
     13. WHATSAPP CHECKOUT FLOW
     ------------------------------------------------------------------------ */
  initWhatsAppCheckoutFlow() {
    const checkoutBtn = document.getElementById('btn-whatsapp-checkout');
    const demoModal = document.getElementById('whatsapp-demo-modal');
    const closeDemoBtn = document.getElementById('btn-close-demo-modal');
    const copyBtn = document.getElementById('btn-copy-wa-msg');
    const testSendBtn = document.getElementById('btn-test-wa-send');
    const customPhoneInput = document.getElementById('custom-wa-phone-input');

    this.closeDemoModal = () => {
      demoModal?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    closeDemoBtn?.addEventListener('click', this.closeDemoModal);
    demoModal?.addEventListener('click', (e) => {
      if (e.target === demoModal) this.closeDemoModal();
    });

    checkoutBtn?.addEventListener('click', () => {
      const cart = store.getCart();
      if (cart.length === 0) {
        this.showToast('Please add a timepiece to your bag before checking out.');
        return;
      }

      if (boutiqueConfig.contact.isWhatsAppConfigured) {
        const url = store.getWhatsAppCheckoutUrl();
        window.open(url, '_blank');
      } else {
        const previewEl = document.getElementById('demo-wa-preview');
        if (previewEl) {
          previewEl.textContent = store.generateWhatsAppOrderMessage();
        }
        demoModal?.classList.add('is-open');
        this.lockBodyScroll();
      }
    });

    copyBtn?.addEventListener('click', () => {
      const msg = store.generateWhatsAppOrderMessage();
      navigator.clipboard.writeText(msg).then(() => {
        this.showToast('Order details copied to clipboard. Ready to paste in WhatsApp.');
      }).catch(() => {
        this.showToast('Select and copy order text above.');
      });
    });

    testSendBtn?.addEventListener('click', () => {
      const phone = customPhoneInput?.value.trim() || boutiqueConfig.contact.whatsappNumber;
      if (!phone) {
        this.showToast('Please enter a WhatsApp number with country code (e.g., 923001234567)');
        return;
      }
      const url = store.getWhatsAppCheckoutUrl(phone);
      window.open(url, '_blank');
      this.closeDemoModal();
    });
  }

  /* ------------------------------------------------------------------------
     14. CLIENT CARE & POLICIES MODAL (DELIVERY & FAQS)
     ------------------------------------------------------------------------ */
  initClientCareModal() {
    const modal = document.getElementById('client-care-modal');
    const closeBtn = document.getElementById('btn-close-client-care');

    this.openClientCareModal = (targetSection = 'all') => {
      if (!modal) return;
      modal.classList.add('is-open');
      this.lockBodyScroll();

      setTimeout(() => {
        if (targetSection === 'delivery') {
          const delSec = document.getElementById('care-delivery-section');
          delSec?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (targetSection === 'faq') {
          const faqSec = document.getElementById('care-faqs-section');
          faqSec?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    };

    this.closeClientCareModal = () => {
      modal?.classList.remove('is-open');
      this.unlockBodyScroll();
    };

    closeBtn?.addEventListener('click', this.closeClientCareModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) this.closeClientCareModal();
    });

    // Triggers for Delivery & FAQ modals
    document.querySelectorAll('[data-action="open-delivery-modal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openClientCareModal('delivery');
      });
    });

    document.querySelectorAll('[data-action="open-faq-modal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openClientCareModal('faq');
      });
    });

    document.querySelectorAll('a[href="#faq"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.openClientCareModal('faq');
      });
    });
  }
}

export const ui = new UIManager();
if (typeof window !== 'undefined') {
  window.ui = ui;
}
