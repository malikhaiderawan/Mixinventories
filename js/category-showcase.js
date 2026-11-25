/**
 * 03.6 SCROLL-DRIVEN 3D WATCH CATEGORY SHOWCASE
 * Features 3 Watch Categories: Automatic, Quartz, Digital
 * Interactivity: Pinned scroll, horizontal watch slide, ghost previews,
 * 4-5 cards per category, interactive zoom & callout inspection.
 */

import { boutiqueConfig } from './config.js?v=20261125insta';
import { store } from './store.js?v=20261111basic';
import { ui } from './ui.js?v=20261125scrollfix';

export const categoryShowcaseData = [
  {
    id: "automatic",
    name: "Automatic",
    pillLabel: "AUTOMATIC MOVEMENT",
    titleMain: "Automatic",
    titleSub: "Masterpieces",
    themeClass: "inspect-theme-automatic",
    telemetryHeader: "ATELIER TELEMETRY // 01 AUTOMATIC CO-AXIAL",
    heroImage: "assets/images/cushion/cushion-automatic.png",
    ghostLeftImage: "assets/images/cushion/quartz.png?v=20261124v8",
    ghostRightImage: "assets/images/cushion/semiauto.png?v=20261124v8",
    calloutItems: [
      {
        id: "auto-1",
        posClass: "callout-auto-1",
        side: "left",
        tag: "01 · CO-AXIAL ESCAPEMENT",
        badge: "28,800 VPH · 48H RESERVE",
        title: "Twin-Barrel Calibre 8900",
        desc: "Bidirectional automatic winding rotor with free-sprung balance and silicon balance spring."
      },
      {
        id: "auto-2",
        posClass: "callout-auto-2",
        side: "right",
        tag: "02 · TEAK CONCEPT DIAL",
        badge: "HORIZONTAL RELIEF · DATE AT 6",
        title: "Anti-Reflective Sapphire Dial",
        desc: "Laser-cut maritime teak motif with rhodium-plated indices and Super-LumiNova."
      },
      {
        id: "auto-3",
        posClass: "callout-auto-3",
        side: "left",
        tag: "03 · SOLID 316L STEEL",
        badge: "150M WATERPROOF · DUAL LOCK",
        title: "Dual-Satin Integrated Flanks",
        desc: "Cold-forged steel case with chamfered flanks and screw-in crown."
      }
    ],
    callouts: {
      calibreTitle: "Twin-Barrel Calibre 8900",
      calibreDesc: "Bidirectional automatic winding rotor with free-sprung balance and silicon balance spring.",
      caseTitle: "Anti-Reflective Sapphire Dial",
      caseDesc: "Laser-cut maritime teak motif with rhodium-plated indices and Super-LumiNova.",
      strapTitle: "Dual-Satin Integrated Flanks",
      strapDesc: "Cold-forged steel case with chamfered flanks and screw-in crown."
    },
    watches: [
      {
        id: "csv-prod-03",
        tag: "CO-AXIAL MASTER",
        name: "Omega Seamaster Aqua Terra",
        price: "PKR 8,500",
        priceRaw: 8500,
        image: "assets/images/products/p-03-main.jpg?v=20261124v3"
      },
      {
        id: "csv-prod-08",
        tag: "TWO-TONE CHRONO",
        name: "Tissot PRX 1853 Chronograph",
        price: "PKR 9,500",
        priceRaw: 9500,
        image: "assets/images/products/p-08-main.jpg"
      },
      {
        id: "csv-prod-11",
        tag: "CHRONOMETER '57",
        name: "Omega Speedmaster Master Chrono",
        price: "PKR 11,500",
        priceRaw: 11500,
        image: "assets/images/products/p-11-main.jpg?v=20261124v2"
      },
      {
        id: "csv-prod-15",
        tag: "FULLY AUTOMATIC",
        name: "INSUCH 1998 Bottle Blue",
        price: "PKR 9,500",
        priceRaw: 9500,
        image: "assets/images/products/p-15-main.jpg"
      },
      {
        id: "csv-prod-16",
        tag: "BOTTLE GREEN AUTO",
        name: "INSUCH 1998 Bottle Green",
        price: "PKR 9,500",
        priceRaw: 9500,
        image: "assets/images/products/p-16-main.jpg"
      }
    ]
  },
  {
    id: "semiautomatic",
    name: "Semi-Automatic",
    pillLabel: "SEMI-AUTOMATIC MOVEMENT",
    titleMain: "Semi-Automatic",
    titleSub: "Kinetic Calibres",
    themeClass: "inspect-theme-semiautomatic",
    telemetryHeader: "KINETIC KINEMATICS // 02 SEMI-AUTOMATIC HYBRID",
    heroImage: "assets/images/cushion/semiauto.png?v=20261124v8",
    ghostLeftImage: "assets/images/cushion/cushion-automatic.png",
    ghostRightImage: "assets/images/cushion/quartz.png?v=20261124v8",
    calloutItems: [
      {
        id: "semi-1",
        posClass: "callout-semi-1",
        side: "right",
        tag: "01 · KINETIC ROTOR SYSTEM",
        badge: "HYBRID TORQUE · SMOOTH SWEEP",
        title: "Rotor-Assisted Powermatic",
        desc: "Weighted kinetic rotor capturing natural wrist momentum to deliver continuous sweeping seconds."
      },
      {
        id: "semi-2",
        posClass: "callout-semi-2",
        side: "left",
        tag: "02 · BOTTLE GREEN SUNBURST",
        badge: "METALLIC SUNRAY · 18K GOLD PVD",
        title: "Radial Brushed Emerald Face",
        desc: "Deep bottle-green sunburst lacquer framed by authentic 18K gold-plated fixed bezel."
      },
      {
        id: "semi-3",
        posClass: "callout-semi-3",
        side: "right",
        tag: "03 · 1978 TAPERED CHAIN",
        badge: "40MM SLIMLINE · DUAL LOCK",
        title: "Integrated Two-Tone Bracelet",
        desc: "Iconic 70s flat-link chain combining brushed steel and mirror-polished gold links."
      }
    ],
    callouts: {
      calibreTitle: "Rotor-Assisted Powermatic",
      calibreDesc: "Weighted kinetic rotor capturing natural wrist momentum to deliver continuous sweeping seconds.",
      caseTitle: "Radial Brushed Emerald Face",
      caseDesc: "Deep bottle-green sunburst lacquer framed by authentic 18K gold-plated fixed bezel.",
      strapTitle: "Integrated Two-Tone Bracelet",
      strapDesc: "Iconic 70s flat-link chain combining brushed steel and mirror-polished gold links."
    },
    watches: [
      {
        id: "csv-prod-09",
        tag: "SUNBURST BLUE",
        name: "Tissot PRX 1853 Blue",
        price: "PKR 4,500",
        priceRaw: 4500,
        image: "assets/images/products/p-09-main.jpg?v=20261124v2"
      },
      {
        id: "csv-prod-10",
        tag: "TWO-TONE GREEN",
        name: "Tissot PRX 1853 Two-Tone Green",
        price: "PKR 4,500",
        priceRaw: 4500,
        image: "assets/images/products/p-10-main.jpg?v=20261124v2"
      }
    ]
  },
  {
    id: "quartz",
    name: "Quartz",
    pillLabel: "QUARTZ MOVEMENT",
    titleMain: "Quartz",
    titleSub: "Chronometers",
    themeClass: "inspect-theme-quartz",
    telemetryHeader: "CHRONOMETRIC FREQUENCY // 03 SWISS QUARTZ",
    heroImage: "assets/images/cushion/quartz.png?v=20261124v8",
    ghostLeftImage: "assets/images/cushion/semiauto.png?v=20261124v8",
    ghostRightImage: "assets/images/cushion/cushion-automatic.png",
    calloutItems: [
      {
        id: "quartz-1",
        posClass: "callout-quartz-1",
        side: "left",
        tag: "01 · 32,768 HZ RESONATOR",
        badge: "SWISS CELL · ±10 SEC/YEAR",
        title: "High-Frequency Quartz Oscillator",
        desc: "Synthetic quartz crystal vibrating at 32,768 Hz for extreme chronometric accuracy."
      },
      {
        id: "quartz-2",
        posClass: "callout-quartz-2",
        side: "right",
        tag: "02 · MOTORSPORT CHRONO REGISTERS",
        badge: "DOWN-SECOND · INSTANT CALENDAR",
        title: "Dynamic Racing Subdials",
        desc: "Active dual chronograph registers with precision down-second sweep and date wheel."
      },
      {
        id: "quartz-3",
        posClass: "callout-quartz-3",
        side: "left",
        tag: "03 · ALLIGATOR EMBOSSED LEATHER",
        badge: "GENUINE LEATHER · MASTER DEPLOYANT",
        title: "Curved Ergonomic Flanks",
        desc: "Supple Italian leather strap fastened with custom stainless steel butterfly deployant clasp."
      }
    ],
    callouts: {
      calibreTitle: "High-Frequency Quartz Oscillator",
      calibreDesc: "Synthetic quartz crystal vibrating at 32,768 Hz for extreme chronometric accuracy.",
      caseTitle: "Dynamic Racing Subdials",
      caseDesc: "Active dual chronograph registers with precision down-second sweep and date wheel.",
      strapTitle: "Curved Ergonomic Flanks",
      strapDesc: "Supple Italian leather strap fastened with custom stainless steel butterfly deployant clasp."
    },
    watches: [
      {
        id: "csv-prod-01",
        tag: "CALIBRE 5 STYLE",
        name: "TAG Heuer Carrera Day-Date",
        price: "PKR 3,500",
        priceRaw: 3500,
        image: "assets/images/products/p-01-main.jpg"
      },
      {
        id: "csv-prod-02",
        tag: "TIFFANY SUNBURST",
        name: "Tissot PRX Quartz Ice Blue",
        price: "PKR 4,500",
        priceRaw: 4500,
        image: "assets/images/products/p-02-main.jpg"
      },
      {
        id: "csv-prod-04",
        tag: "HAUTE TONNEAU",
        name: "Patek Philippe Genève Chrono",
        price: "PKR 9,000",
        priceRaw: 9000,
        image: "assets/images/products/p-04-main.jpg"
      },
      {
        id: "csv-prod-05",
        tag: "AVANT-GARDE WHITE",
        name: "Richard Mille Moon White",
        price: "PKR 4,500",
        priceRaw: 4500,
        image: "assets/images/products/p-05-main.jpg"
      },
      {
        id: "csv-prod-07",
        tag: "TWO-TONE RIBBED",
        name: "Patek Philippe Nautilus Two-Tone",
        price: "PKR 4,750",
        priceRaw: 4750,
        image: "assets/images/products/p-07-main.jpg?v=20261124v3"
      }
    ]
  }
];

class WatchCategoryShowcaseController {
  constructor() {
    this.section = document.getElementById('watch-category-showcase');
    if (!this.section) return;

    this.currentIndex = 0;
    this.isInspecting = false;
    this.isTransitioning = false;

    this.initDOMElements();
    this.renderCategory(0, true);
    this.bindEvents();
    this.initScrollDrivenPinning();
  }

  initDOMElements() {
    this.container = document.getElementById('categoryShowcaseContainer');
    this.backdrop = document.getElementById('showcaseInspectBackdrop');
    this.viewport = document.getElementById('cushionWatchViewport');
    this.slidesTrack = document.getElementById('cushionSlidesTrack');
    this.slides = document.querySelectorAll('.cushion-watch-slide');
    this.ghostLeft = document.getElementById('cushionGhostLeft');
    this.ghostRight = document.getElementById('cushionGhostRight');
    this.pillText = document.getElementById('cushionPillText');
    this.titleMain = document.getElementById('showcaseTitleMain');
    this.titleSub = document.getElementById('showcaseTitleSub');
    this.cardsTrack = document.getElementById('showcaseCardsTrack');
    this.tabs = document.querySelectorAll('.showcase-tab');
    this.mobileDots = document.querySelectorAll('.mobile-showcase-dot');
    this.stageWrap = this.section.querySelector('.cushion-stage-wrap');
    this.prevBtn = document.getElementById('showcasePrevBtn');
    this.nextBtn = document.getElementById('showcaseNextBtn');
    this.exitInspectBtn = document.getElementById('btnExitInspect');

    // Callout elements
    this.calloutsOverlay = document.getElementById('showcaseCalloutsOverlay');
    this.calloutsList = document.getElementById('showcaseCalloutsList');
    this.telemetryLabel = document.getElementById('inspectionTelemetryLabel');
    this.reticleRing = document.getElementById('inspectionReticleRing');

    this.calloutCalibreTitle = document.getElementById('calloutCalibreTitle');
    this.calloutCalibreDesc = document.getElementById('calloutCalibreDesc');
    this.calloutCaseTitle = document.getElementById('calloutCaseTitle');
    this.calloutCaseDesc = document.getElementById('calloutCaseDesc');
    this.calloutStrapTitle = document.getElementById('calloutStrapTitle');
    this.calloutStrapDesc = document.getElementById('calloutStrapDesc');
  }

  renderCategory(index, immediate = false) {
    if (index < 0) index = categoryShowcaseData.length - 1;
    if (index >= categoryShowcaseData.length) index = 0;

    const prevIndex = this.currentIndex;
    this.currentIndex = index;
    const data = categoryShowcaseData[index];

    // 1. Update Slides on Cushion
    this.slides.forEach((slide, idx) => {
      slide.classList.remove('is-active', 'slide-prev');
      if (idx === index) {
        slide.classList.add('is-active');
      } else if (idx < index) {
        slide.classList.add('slide-prev');
      }
    });

    // 2. Update Ghost Images
    if (this.ghostLeft && data.ghostLeftImage) {
      const img = this.ghostLeft.querySelector('img');
      if (img) img.src = data.ghostLeftImage;
    }
    if (this.ghostRight && data.ghostRightImage) {
      const img = this.ghostRight.querySelector('img');
      if (img) img.src = data.ghostRightImage;
    }

    // 3. Update Pill Text & Title
    if (this.pillText) {
      this.pillText.textContent = data.pillLabel;
    }
    if (this.titleMain && this.titleSub) {
      this.titleMain.textContent = data.titleMain;
      this.titleSub.textContent = data.titleSub;
    }

    // 4. Update Category Tabs & Mobile Pagination Dots
    this.tabs.forEach((tab, idx) => {
      tab.classList.toggle('is-active', idx === index);
    });
    if (this.mobileDots && this.mobileDots.length) {
      this.mobileDots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === index);
      });
    }

    // 5. Update Callouts (Dynamic unique specs & layout)
    this.renderCallouts(data);

    // 6. Render 4–5 Watch Cards
    if (this.cardsTrack) {
      const cardsHtml = data.watches.map((w) => {
        const isWish = store.isWishlisted(w.id);
        return `
        <article class="showcase-card" data-watch-id="${w.id}">
          <div class="showcase-card-media">
            <button type="button"
                    class="btn-icon-card showcase-wishlist-btn ${isWish ? 'is-active' : ''}"
                    data-action="toggle-wishlist"
                    data-product-id="${w.id}"
                    aria-label="Save ${w.name} to Wishlist"
                    title="Save to Wishlist">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <img src="${w.image}" alt="${w.name}" class="showcase-card-img" loading="lazy" />
          </div>
          <div class="showcase-card-info">
            <span class="showcase-card-tag">${w.tag}</span>
            <h4 class="showcase-card-title">${w.name}</h4>
            <span class="showcase-card-price">${w.price}</span>
          </div>
          <button type="button" class="showcase-add-btn" data-watch-id="${w.id}" data-name="${w.name}" data-price="${w.priceRaw}">
            ADD TO BAG
          </button>
        </article>
      `;
      }).join('');

      if (immediate) {
        this.cardsTrack.innerHTML = cardsHtml;
        this.attachAddButtonListeners();
        this.initAntiGravityFloat();
      } else {
        this.cardsTrack.style.opacity = '0';
        this.cardsTrack.style.transform = 'translateY(8px)';
        setTimeout(() => {
          this.cardsTrack.innerHTML = cardsHtml;
          this.cardsTrack.style.opacity = '1';
          this.cardsTrack.style.transform = 'translateY(0)';
          this.attachAddButtonListeners();
          this.initAntiGravityFloat();
        }, 180);
      }
    }
  }

  renderCallouts(data) {
    if (!this.calloutsList) {
      this.calloutsList = document.getElementById('showcaseCalloutsList');
    }
    if (this.telemetryLabel && data.telemetryHeader) {
      this.telemetryLabel.textContent = data.telemetryHeader;
    }

    // Update section theme classes
    if (this.section) {
      this.section.classList.remove('inspect-theme-automatic', 'inspect-theme-semiautomatic', 'inspect-theme-quartz');
      if (data.themeClass) {
        this.section.classList.add(data.themeClass);
      }
    }

    if (!this.calloutsList || !data.calloutItems) return;

    const itemsHtml = data.calloutItems.map((item, idx) => {
      const isLeft = item.side === 'left';
      return `
        <div class="callout-item ${item.posClass} ${isLeft ? 'callout-side-left' : 'callout-side-right'}" style="--stagger-idx: ${idx};">
          ${isLeft ? `
            <div class="callout-card">
              <div class="callout-card-top">
                <span class="callout-tag">${item.tag}</span>
                <span class="callout-badge-pill">${item.badge}</span>
              </div>
              <h4 class="callout-title">${item.title}</h4>
              <p class="callout-desc">${item.desc}</p>
            </div>
            <div class="callout-line"></div>
            <div class="callout-dot">
              <span class="callout-dot-core"></span>
              <span class="callout-dot-pulse"></span>
            </div>
          ` : `
            <div class="callout-dot">
              <span class="callout-dot-core"></span>
              <span class="callout-dot-pulse"></span>
            </div>
            <div class="callout-line"></div>
            <div class="callout-card">
              <div class="callout-card-top">
                <span class="callout-tag">${item.tag}</span>
                <span class="callout-badge-pill">${item.badge}</span>
              </div>
              <h4 class="callout-title">${item.title}</h4>
              <p class="callout-desc">${item.desc}</p>
            </div>
          `}
        </div>
      `;
    }).join('');

    this.calloutsList.innerHTML = itemsHtml;
  }

  /**
   * GSAP Anti-Gravity Levitation for Product Card Watches
   * Organic staggered floating along Y-axis (-10px to +10px) with subtle 3D tilt (-2deg to +2deg)
   */
  initAntiGravityFloat() {
    if (!this.cardsTrack) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const runFloat = () => {
      const { gsap } = window;
      if (typeof gsap === 'undefined') return;

      const watchImgs = this.cardsTrack.querySelectorAll('.showcase-card-img');
      if (!watchImgs.length) return;

      gsap.killTweensOf(watchImgs);

      watchImgs.forEach((img, idx) => {
        const direction = idx % 2 === 0 ? 1 : -1;
        const duration = 2.7 + (idx % 3) * 0.42;
        const staggerDelay = idx * 0.32;

        gsap.fromTo(
          img,
          {
            y: -10 * direction,
            rotation: -1.8 * direction
          },
          {
            y: 10 * direction,
            rotation: 1.8 * direction,
            duration,
            delay: staggerDelay,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            force3D: true
          }
        );
      });
    };

    if (typeof window.gsap !== 'undefined') {
      runFloat();
    } else {
      window.addEventListener('load', runFloat, { once: true });
    }
  }

  attachAddButtonListeners() {
    if (!this.cardsTrack) return;

    // 1. Entire Card Click -> Open Product Detail Modal
    this.cardsTrack.querySelectorAll('.showcase-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.showcase-wishlist-btn') || e.target.closest('.showcase-add-btn')) return;
        const watchId = card.getAttribute('data-watch-id');
        const fullProd = (boutiqueConfig.products || []).find((p) => p.id === watchId);
        if (fullProd && ui && typeof ui.openProductDetail === 'function') {
          ui.openProductDetail(fullProd);
        }
      });
    });

    // 2. Top-Right Wishlist Heart Toggle (synced with global store)
    this.cardsTrack.querySelectorAll('.showcase-wishlist-btn').forEach((wishBtn) => {
      wishBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const watchId = wishBtn.getAttribute('data-product-id');
        const fullProd = (boutiqueConfig.products || []).find((p) => p.id === watchId);
        if (!fullProd) return;

        store.toggleWishlist(fullProd);
        const nowWish = store.isWishlisted(watchId);

        document.querySelectorAll(`[data-action="toggle-wishlist"][data-product-id="${watchId}"]`).forEach((btn) => {
          btn.classList.toggle('is-active', nowWish);
          const svg = btn.querySelector('svg');
          if (svg) svg.setAttribute('fill', nowWish ? 'currentColor' : 'none');
        });
      });
    });

    // 3. ADD TO BAG Button
    this.cardsTrack.querySelectorAll('.showcase-add-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = btn.getAttribute('data-name') || 'Luxury Timepiece';
        const price = Number(btn.getAttribute('data-price')) || 25000;
        const watchId = btn.getAttribute('data-watch-id') || 'mi-item';

        // Add to Bag toast feedback in champagne gold
        btn.textContent = 'ADDED ✓';
        btn.style.background = '#C6A46B';
        btn.style.color = '#08090B';
        btn.style.borderColor = '#C6A46B';
        btn.style.boxShadow = '0 0 18px rgba(198, 164, 107, 0.35)';
        setTimeout(() => {
          btn.textContent = 'ADD TO BAG';
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
          btn.style.boxShadow = '';
        }, 1500);

        // Dispatch custom event for global cart integration
        const cartEvent = new CustomEvent('orvel:add-to-cart', {
          detail: { id: watchId, name, price, quantity: 1 }
        });
        window.dispatchEvent(cartEvent);
      });
    });
  }

  toggleInspection(forceState = null) {
    const targetState = forceState !== null ? forceState : !this.isInspecting;
    this.isInspecting = targetState;

    if (this.section) {
      this.section.classList.toggle('is-inspecting', this.isInspecting);
      const data = categoryShowcaseData[this.currentIndex];
      if (this.isInspecting && data) {
        this.renderCallouts(data);
      }
    }
    if (this.backdrop) {
      this.backdrop.classList.toggle('is-active', this.isInspecting);
    }
  }

  bindEvents() {
    // 1. Cushion Watch Click to Inspect
    if (this.viewport) {
      this.viewport.addEventListener('click', (e) => {
        if (e.target.closest('#btnExitInspect')) return;
        this.toggleInspection();
      });
    }
    const inspectCue = document.getElementById('cushionInteractionCue');
    if (inspectCue) {
      inspectCue.style.cursor = 'pointer';
      inspectCue.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleInspection(true);
      });
    }

    // 2. Exit Inspection Button & Backdrop Click
    if (this.exitInspectBtn) {
      this.exitInspectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleInspection(false);
      });
    }
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        this.toggleInspection(false);
      });
    }

    // Escape Key Exits Inspection
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isInspecting) {
        this.toggleInspection(false);
      }
    });

    // 3. Navigation Arrows
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.renderCategory(this.currentIndex - 1);
      });
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.renderCategory(this.currentIndex + 1);
      });
    }

    // 4. Category Tabs & Mobile Pagination Dots
    this.tabs.forEach((tab, idx) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        this.renderCategory(idx);
      });
    });

    if (this.mobileDots && this.mobileDots.length) {
      this.mobileDots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
          e.preventDefault();
          this.renderCategory(idx);
        });
      });
    }

    // 5. Mobile Horizontal Touch-Swipe on Featured Watch Stage
    if (this.stageWrap) {
      let touchStartX = 0;
      let touchStartY = 0;

      this.stageWrap.addEventListener('touchstart', (e) => {
        if (!e.touches || !e.touches.length) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      this.stageWrap.addEventListener('touchend', (e) => {
        if (window.innerWidth > 767 || this.isInspecting) return;
        if (!e.changedTouches || !e.changedTouches.length) return;

        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;

        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          if (dx < 0) {
            this.renderCategory(this.currentIndex + 1);
          } else {
            this.renderCategory(this.currentIndex - 1);
          }
        }
      }, { passive: true });
    }
  }

  initScrollDrivenPinning() {
    const { gsap, ScrollTrigger } = window;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Desktop GSAP ScrollTrigger Pinning & Category Cycling
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const totalCategories = categoryShowcaseData.length; // 3 categories

      const st = ScrollTrigger.create({
        trigger: this.section,
        start: "top top",
        end: "+=1800",
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 10,
        onUpdate: (self) => {
          if (this.isInspecting) return; // Do not switch while inspecting
          const progress = self.progress;
          // Split into 3 discrete segments: 0..0.33, 0.33..0.66, 0.66..1.0
          const activeIndex = Math.min(
            totalCategories - 1,
            Math.floor(progress * totalCategories * 0.99)
          );
          if (activeIndex !== this.currentIndex) {
            this.renderCategory(activeIndex);
          }
        }
      });

      requestAnimationFrame(() => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });

      return () => {
        st.kill();
      };
    });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.categoryShowcase = new WatchCategoryShowcaseController();
  });
} else {
  window.categoryShowcase = new WatchCategoryShowcaseController();
}
