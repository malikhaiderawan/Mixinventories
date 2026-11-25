/**
 * ORVÉL — Fine Timepieces
 * Advanced Motion System: GSAP, ScrollTrigger, Lenis, Pinned Story & Parallax
 * Designed & Engineered for MalikAxiom Technology
 */

import { boutiqueConfig } from './config.js?v=20261125insta';

// No-op audio tick sounds so scrolling NEVER produces ticking noises
export function playTickSound() { return; }
export function playMechanicalTick() { return; }
if (typeof window !== 'undefined') {
  window.playTickSound = () => { };
  window.playMechanicalTick = () => { };
}

export class MotionSystem {
  constructor() {
    this.lenis = null;
    this.currentHeroSlide = 0;
    this.heroTimer = null;
    this.heroSlidesCount = boutiqueConfig.heroSlides.length;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resizeTimeout = null;
    this.hasMobileCatalogRevealed = false;
  }

  init() {
    if (typeof window.ScrollTrigger !== 'undefined') {
      window.ScrollTrigger.config({ ignoreMobileResize: true });
    }
    this.initSmoothScroll();
    this.initLuxuryIntro();
    this.initCustomCursor();
    this.initHeaderScroll();
    this.initHeroSlider();
    this.initHeroParallax();
    this.initHeroTickerMarquee();
    this.initHeroScrollCue();
    this.initScrollCollections();
    this.initPerspectivesAnimations();
    this.initInstagramAnimations();
    this.initFinalCtaAnimations();
    this.initFooterAnimations();
    this.initScrollAnimations();
    this.initResizeHandler();
    this.handleUrlScroll();

    // Global Resilience Failsafe: Guarantees no section or footer brand is ever stuck invisible
    const safetyReveal = () => {
      document.querySelectorAll('.site-header, .site-logo, .desktop-nav, .header-actions, .site-footer, .footer-hero-brand, .footer-col, .footer-bottom, .catalog-section-header, .catalog-filter-bar, .arch-card, .perspective-panel, .final-cta-section, .instagram-card, .sig-card, .insta-track-wrapper, #instagram-gallery, .insta-stage, .insta-card').forEach(el => {
        if (window.getComputedStyle(el).opacity === '0') {
          el.style.opacity = '1';
          el.style.visibility = 'visible';
          el.style.transform = 'none';
        }
      });
      document.querySelectorAll('.perspective-img-wrap, .sig-craft-img-wrap, .sig-macro-img-wrap').forEach(w => {
        const cp = window.getComputedStyle(w).clipPath;
        if (cp && (cp.includes('94%') || cp.includes('100% 100%'))) {
          w.style.clipPath = 'none';
        }
      });
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    };
    setTimeout(safetyReveal, 600);
    setTimeout(safetyReveal, 1500);
    setTimeout(safetyReveal, 3000);
    if (document.readyState === 'complete') {
      safetyReveal();
    } else {
      window.addEventListener('load', safetyReveal);
    }
    setTimeout(safetyReveal, 900);
    setTimeout(safetyReveal, 2200);
  }

  handleUrlScroll() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollToTarget = urlParams.get('scroll_to');
      if (scrollToTarget) {
        setTimeout(() => {
          const el = document.getElementById(scrollToTarget);
          if (el) {
            const offset = parseFloat(urlParams.get('scroll_offset') || '0');
            const targetPos = el.getBoundingClientRect().top + window.pageYOffset + offset;
            if (this.lenis) {
              this.lenis.scrollTo(targetPos, { immediate: true });
            } else {
              window.scrollTo(0, targetPos);
            }
            if (window.ScrollTrigger) window.ScrollTrigger.update();
          }
        }, 150);
      }
    } catch (e) {
      console.warn('Url scroll notice:', e);
    }
  }

  /* ------------------------------------------------------------------------
     1. LENIS SMOOTH INERTIA SCROLLING
     ------------------------------------------------------------------------ */
  initSmoothScroll() {
    if (this.isReducedMotion || typeof window.Lenis === 'undefined') return;

    try {
      this.lenis = new window.Lenis({
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.4
      });
      window.lenis = this.lenis;

      if (typeof window.ScrollTrigger !== 'undefined') {
        this.lenis.on('scroll', window.ScrollTrigger.update);

        window.gsap.ticker.add((time) => {
          this.lenis.raf(time * 1000);
        });

        window.gsap.ticker.lagSmoothing(0);

        // Prevent ScrollTrigger from fighting Lenis for scroll control
        if (typeof window.ScrollTrigger.normalizeScroll === 'function') {
          window.ScrollTrigger.normalizeScroll(false);
        }
      } else {
        const raf = (time) => {
          this.lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.warn('Lenis notice:', e);
    }
  }

  /* ------------------------------------------------------------------------
     2. LUXURY INTRO PRELOADER & LOGO REVEAL (2.0s - 2.4s)
     ------------------------------------------------------------------------ */
  initLuxuryIntro() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Hard failsafe: preloader never blocks the screen longer than 3.2s
    let isDismissed = false;
    const dismissPreloader = () => {
      if (isDismissed) return;
      isDismissed = true;
      preloader.classList.add('is-hidden');
      document.documentElement.classList.add('orvel-hero-entered');
      document.body.classList.add('orvel-hero-entered');
      this.triggerHeroEntrance();
    };

    const safetyTimer = setTimeout(dismissPreloader, 3200);

    // Allow user to instantly dismiss by clicking anywhere or pressing Escape
    preloader.addEventListener('click', () => {
      clearTimeout(safetyTimer);
      dismissPreloader();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        clearTimeout(safetyTimer);
        dismissPreloader();
      }
    }, { once: true });

    // Allow developer or automated tests to bypass intro via ?skip_intro=true
    const skipIntro = new URLSearchParams(window.location.search).has('skip_intro');
    if (skipIntro) {
      clearTimeout(safetyTimer);
      preloader.classList.add('is-hidden');
      this.triggerHeroEntrance();
      return;
    }

    if (this.isReducedMotion || typeof window.gsap === 'undefined') {
      setTimeout(() => {
        clearTimeout(safetyTimer);
        dismissPreloader();
      }, 150);
      return;
    }

    const tl = window.gsap.timeline({
      onComplete: () => {
        clearTimeout(safetyTimer);
        dismissPreloader();
      }
    });

    // Graceful Luxury Monogram Entrance, Full Progress Line Fill & Curtain Lift
    tl.fromTo('.preloader-monogram .brand-letters, .preloader-monogram [data-brand-name]',
      { opacity: 0, y: 20, letterSpacing: '0.12em' },
      { opacity: 1, y: 0, letterSpacing: '0.22em', duration: 0.65, ease: 'power3.out' }
    )
      // Note: .gold-dot element was removed from preloader HTML; skip that tween
      .fromTo('#preloader-tagline',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo('#preloader-progress-bar',
        { width: '0%' },
        {
          width: '100%',
          duration: 1.45,
          ease: 'power1.inOut'
        },
        '-=0.15'
      )
      .to('#preloader-curtain', {
        y: 0,
        duration: 0.65,
        ease: 'power4.inOut'
      }, '+=0.1')
      .to(preloader, {
        y: '-100%',
        duration: 0.75,
        ease: 'expo.inOut',
        onStart: () => {
          document.documentElement.classList.add('orvel-hero-entered');
          document.body.classList.add('orvel-hero-entered');
        }
      }, '-=0.35');
  }

  /* ------------------------------------------------------------------------
     3. WATCH HERO SLIDER & ENTRANCE
     ------------------------------------------------------------------------ */
  triggerHeroEntrance() {
    if (typeof window.gsap === 'undefined' || this.isReducedMotion) return;

    // Header & Brand Logo Graceful Reveal
    const siteLogo = document.querySelector('.site-logo');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const headerActions = document.querySelector('.header-actions');
    const announceBar = document.querySelector('.announcement-bar');

    if (siteLogo) {
      window.gsap.fromTo(siteLogo,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.05, clearProps: 'all' }
      );
    }
    if (navLinks && navLinks.length > 0) {
      window.gsap.fromTo(navLinks,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.15, clearProps: 'all' }
      );
    }
    if (headerActions) {
      window.gsap.fromTo(headerActions,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.25, clearProps: 'all' }
      );
    }
    if (announceBar) {
      window.gsap.fromTo(announceBar,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }

    const activeSlide = document.querySelector('.hero-slide.is-active');
    if (!activeSlide) return;

    const tag = activeSlide.querySelector('.hero-tag');
    const rule = activeSlide.querySelector('.hero-accent-rule');
    const lines = activeSlide.querySelectorAll('.hero-title .line-inner');
    const subtext = activeSlide.querySelector('.hero-subtext');
    const actions = activeSlide.querySelector('.hero-actions');

    const killTargets = [tag, rule, subtext, actions].filter(Boolean);
    if (lines && lines.length > 0) killTargets.push(...lines);
    if (killTargets.length > 0) window.gsap.killTweensOf(killTargets);

    if (tag) {
      window.gsap.fromTo(tag,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.1 }
      );
    }

    if (rule) {
      window.gsap.fromTo(rule,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.75, ease: 'power3.out', delay: 0.2 }
      );
    }

    if (lines && lines.length > 0) {
      window.gsap.fromTo(lines,
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.12, ease: 'power4.out', delay: 0.22 }
      );
    }

    if (subtext) {
      window.gsap.fromTo(subtext,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.42 }
      );
    }

    if (actions) {
      window.gsap.fromTo(actions,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.58 }
      );
    }

    const watchImg = activeSlide.querySelector('.hero-watch-img');
    const watchAura = activeSlide.querySelector('.hero-watch-aura');

    if (watchImg) {
      window.gsap.fromTo(watchImg,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.28,
          clearProps: 'transform'
        }
      );
    }

    if (watchAura) {
      window.gsap.fromTo(watchAura,
        { opacity: 0, scale: 0.65 },
        { opacity: 0.85, scale: 1, duration: 1.3, ease: 'power2.out', delay: 0.2 }
      );
    }
  }

  handleSlideVideoPlayback(slideElement, isActive) {
    if (!slideElement) return;
    const video = slideElement.querySelector('video.hero-bg-video');
    if (!video) return;

    if (isActive && !this.isReducedMotion) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          video.classList.add('is-playing');
          slideElement.classList.add('has-video-playing');
        }).catch(() => {
          // Autoplay blocked or media file not yet present - fallback smoothly to motion poster
          video.classList.remove('is-playing');
          slideElement.classList.remove('has-video-playing');
        });
      }
    } else {
      video.pause();
      try {
        video.currentTime = 0;
      } catch (e) { }
      video.classList.remove('is-playing');
      slideElement.classList.remove('has-video-playing');
    }
  }

  initHeroSlider() {
    const heroSection = document.getElementById('hero');
    const slides = document.querySelectorAll('.hero-slide');
    const bullets = document.querySelectorAll('.hero-bullet');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');

    if (slides.length === 0) return;

    const goToSlide = (index) => {
      if (this.resetHeroParallax) {
        this.resetHeroParallax();
      }
      slides.forEach((s, idx) => {
        const isActive = (idx === index);
        s.classList.toggle('is-active', isActive);
        this.handleSlideVideoPlayback(s, isActive);
      });
      bullets.forEach((b, idx) => {
        b.classList.toggle('is-active', idx === index);
      });
      this.currentHeroSlide = index;
      if (index === 0 && this.heroTimer) {
        clearInterval(this.heroTimer);
        this.heroTimer = null;
      }
      this.triggerHeroEntrance();
      if (this.isPointerInsideHero && this.applyHeroParallax && this.currentNormalizedCoords) {
        this.applyHeroParallax(index, this.currentNormalizedCoords.xNorm, this.currentNormalizedCoords.yNorm);
      }
    };

    // Initialize first slide's video playback
    if (slides[0]) {
      this.handleSlideVideoPlayback(slides[0], true);
    }

    bullets.forEach((bullet, idx) => {
      bullet.addEventListener('click', () => goToSlide(idx));
    });

    prevBtn?.addEventListener('click', () => {
      const prevIndex = (this.currentHeroSlide - 1 + this.heroSlidesCount) % this.heroSlidesCount;
      goToSlide(prevIndex);
    });

    nextBtn?.addEventListener('click', () => {
      const nextIndex = (this.currentHeroSlide + 1) % this.heroSlidesCount;
      goToSlide(nextIndex);
    });

    this.goToHeroSlide = goToSlide;
  }

  startHeroAutoplay() {
    // Hero slides auto-loop disabled per user request
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
      this.heroTimer = null;
    }
  }

  /* ------------------------------------------------------------------------
     4. ADVANCED HERO CURSOR-FOLLOW 2.5D PARALLAX (GSAP quickTo)
     ------------------------------------------------------------------------ */
  initHeroParallax() {
    if (this.isReducedMotion) return;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const hero = document.getElementById('hero');
    if (!hero || typeof window.gsap === 'undefined') return;

    const slides = hero.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    this.isPointerInsideHero = false;
    this.currentNormalizedCoords = { xNorm: 0, yNorm: 0 };

    // Cache GSAP quickTo setters per slide to achieve performant 60–120Hz tracking with zero GC
    this.parallaxControllers = Array.from(slides).map((slide) => {
      const bgMotion = slide.querySelector('.hero-bg-motion-wrap');
      const lightMotion = slide.querySelector('.hero-light-motion-wrap');
      const textBlock = slide.querySelector('.hero-text-block');
      const watchWrap = slide.querySelector('.hero-watch-wrap');

      return {
        slide,
        // Layer 1: Background image motion wrap (±20px horizontal, ±13px vertical, subtle 2.5D perspective tilt)
        bgX: bgMotion ? window.gsap.quickTo(bgMotion, 'x', { duration: 0.95, ease: 'power2.out' }) : null,
        bgY: bgMotion ? window.gsap.quickTo(bgMotion, 'y', { duration: 0.95, ease: 'power2.out' }) : null,
        bgRotY: bgMotion ? window.gsap.quickTo(bgMotion, 'rotationY', { duration: 1.15, ease: 'power2.out' }) : null,
        bgRotX: bgMotion ? window.gsap.quickTo(bgMotion, 'rotationX', { duration: 1.15, ease: 'power2.out' }) : null,

        // Layer 2: Luxury Atmospheric Gold Lighting (moves more: ±30px / ±18px for rich metallic sheen)
        lightX: lightMotion ? window.gsap.quickTo(lightMotion, 'x', { duration: 0.8, ease: 'power2.out' }) : null,
        lightY: lightMotion ? window.gsap.quickTo(lightMotion, 'y', { duration: 0.8, ease: 'power2.out' }) : null,

        // Layer 3: Foreground watch (if separate cutout layer exists: ±28px)
        watchX: watchWrap ? window.gsap.quickTo(watchWrap, 'x', { duration: 0.85, ease: 'power2.out' }) : null,
        watchY: watchWrap ? window.gsap.quickTo(watchWrap, 'y', { duration: 0.85, ease: 'power2.out' }) : null,
        watchRotY: watchWrap ? window.gsap.quickTo(watchWrap, 'rotationY', { duration: 1.0, ease: 'power2.out' }) : null,
        watchRotX: watchWrap ? window.gsap.quickTo(watchWrap, 'rotationX', { duration: 1.0, ease: 'power2.out' }) : null,

        // Layer 4: Text Block (primarily stationary, tiny ±3.5px subtle counter-depth)
        textX: textBlock ? window.gsap.quickTo(textBlock, 'x', { duration: 1.25, ease: 'power3.out' }) : null,
        textY: textBlock ? window.gsap.quickTo(textBlock, 'y', { duration: 1.25, ease: 'power3.out' }) : null,

        reset() {
          if (this.bgX) { this.bgX(0); this.bgY(0); this.bgRotY(0); this.bgRotX(0); }
          if (this.lightX) { this.lightX(0); this.lightY(0); }
          if (this.watchX) { this.watchX(0); this.watchY(0); this.watchRotY(0); this.watchRotX(0); }
          if (this.textX) { this.textX(0); this.textY(0); }
        }
      };
    });

    const applyParallax = (slideIndex, xNorm, yNorm) => {
      const ctrl = this.parallaxControllers[slideIndex];
      if (!ctrl) return;

      // Layer 1: Background image movement
      if (ctrl.bgX) {
        ctrl.bgX(xNorm * 20);
        ctrl.bgY(yNorm * 13);
        ctrl.bgRotY(xNorm * 1.6);
        ctrl.bgRotX(-yNorm * 1.3);
      }

      // Layer 2: Atmospheric gold lighting
      if (ctrl.lightX) {
        ctrl.lightX(xNorm * 30);
        ctrl.lightY(yNorm * 18);
      }

      // Layer 3: Foreground watch (if present)
      if (ctrl.watchX) {
        ctrl.watchX(xNorm * 28);
        ctrl.watchY(yNorm * 18);
        ctrl.watchRotY(xNorm * 7);
        ctrl.watchRotX(-yNorm * 6);
      }

      // Layer 4: Text subtle counter-depth
      if (ctrl.textX) {
        ctrl.textX(xNorm * -3.5);
        ctrl.textY(yNorm * -2.5);
      }
    };

    const updateParallax = (e) => {
      this.isPointerInsideHero = true;
      const rect = hero.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      // Normalized coordinates from -1.0 to +1.0 (center is 0)
      const xNorm = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2));
      const yNorm = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2));
      this.currentNormalizedCoords = { xNorm, yNorm };

      applyParallax(this.currentHeroSlide, xNorm, yNorm);
    };

    const resetAll = () => {
      this.isPointerInsideHero = false;
      this.currentNormalizedCoords = { xNorm: 0, yNorm: 0 };
      this.parallaxControllers.forEach((ctrl) => ctrl.reset());
    };

    hero.addEventListener('pointerenter', () => {
      this.isPointerInsideHero = true;
    }, { passive: true });

    hero.addEventListener('pointermove', updateParallax, { passive: true });
    hero.addEventListener('pointerleave', resetAll, { passive: true });

    this.applyHeroParallax = applyParallax;
    this.resetHeroParallax = resetAll;
  }

  /* ------------------------------------------------------------------------
     4.5 LUXURY HERO TICKER MARQUEE (SLOW, SUBTLE & CONTINUOUS SEAMLESS LOOP)
     ------------------------------------------------------------------------ */
  initHeroTickerMarquee() {
    const band = document.getElementById('hero-ticker-band');
    const track = document.getElementById('hero-ticker-track');
    const sets = track?.querySelectorAll('.hero-ticker-set');

    if (!band || !track || !sets || sets.length === 0) return;

    if (this.isReducedMotion) {
      track.classList.remove('is-css-fallback');
      if (window.gsap) window.gsap.set(track, { x: 0 });
      return;
    }

    const { gsap } = window;
    if (typeof gsap === 'undefined') {
      track.classList.add('is-css-fallback');
      return;
    }

    // Target linear movement speed: refined luxury glide (32 px/s, previously 12 px/s)
    const TARGET_SPEED_PX_PER_SEC = 32.0;

    // Measure exact width of a single repeating set
    let setWidth = sets[0].offsetWidth || 1400;
    let baseSpeed = TARGET_SPEED_PX_PER_SEC;
    let loopDuration = setWidth / baseSpeed;

    const updateDimensions = () => {
      if (sets[0]) {
        const measured = sets[0].offsetWidth;
        if (measured > 100) {
          setWidth = measured;
          // Calculate loop duration dynamically from distance and target speed
          loopDuration = setWidth / TARGET_SPEED_PX_PER_SEC;
          baseSpeed = setWidth / loopDuration; // exactly TARGET_SPEED_PX_PER_SEC (32 px/s)
        }
      }
    };

    updateDimensions();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateDimensions);
    }
    setTimeout(updateDimensions, 400);

    let currentX = 0;

    // Window resize handler to maintain exact speed and boundary
    window.addEventListener('resize', () => {
      updateDimensions();
    }, { passive: true });

    // Perfectly smooth, continuous linear motion via GSAP ticker
    // Constant speed, unaffected by scroll direction or momentum
    const tickerCallback = (time, deltaTime) => {
      const dt = Math.min((deltaTime || 16.67) / 1000, 0.1);

      // Move steadily right to left at consistent luxury speed
      currentX -= baseSpeed * dt;

      // Seamless infinite modulo wrapping on setWidth with no visual jump
      if (currentX <= -setWidth) {
        currentX += setWidth;
      }

      gsap.set(track, {
        x: currentX,
        force3D: true
      });
    };

    gsap.ticker.add(tickerCallback);
  }

  /* ------------------------------------------------------------------------
     4.7 HERO SCROLL CUE ANIMATION (INTERACTIVE SCROLL-DRIVEN LINE MOTION)
     ------------------------------------------------------------------------ */
  initHeroScrollCue() {
    // Disabled per 5-scroll hero state machine: js/animations.js must not attach ScrollTrigger or scroll overrides to #hero
    return;
  }

  /* ------------------------------------------------------------------------
     4.8 SCROLL-DRIVEN COLLECTIONS (ARCH CARDS HORIZONTAL PIN & SCRUB)
     ------------------------------------------------------------------------ */
  initScrollCollections() {
    const section = document.getElementById("bento-collections");
    const track = document.getElementById("collections-scroll-track");
    const container = document.getElementById("collections-scroll-container");
    const header = section ? section.querySelector(".collections-sticky-header") : null;

    if (!section || !track) return;
    if (this.isReducedMotion) return;

    const { gsap, ScrollTrigger } = window;
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    const mm = gsap.matchMedia();

    // Desktop/Tablet landscape: Pin section, scroll down scrubs cards horizontally to the right, then unpins to next section
    mm.add("(min-width: 992px)", () => {
      const cards = track.querySelectorAll(".arch-card");

      // 1. SCROLLING ENTRANCE TRANSITION
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true
        }
      });

      if (header) {
        entranceTl.from(header, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all"
        }, 0);
      }

      if (cards.length) {
        entranceTl.from(cards, {
          x: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power2.out",
          clearProps: "all"
        }, 0.1);
      }

      // 2. HORIZONTAL SCROLL CALCULATION
      const getScrollDistance = () => {
        const cardElements = track.querySelectorAll(".arch-card");
        if (!cardElements.length) return 0;
        const containerWidth = container ? container.clientWidth : (window.innerWidth * 0.65);
        const maxTrackScroll = track.scrollWidth - containerWidth + 40;
        return Math.max(0, maxTrackScroll);
      };

      // 3. HORIZONTAL PIN & SCRUB TIMELINE
      const pinDistance = () => Math.max(300, getScrollDistance() + 180);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${pinDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 5,
          onUpdate: (self) => {
            const counter = document.getElementById("collections-track-counter");
            if (counter) {
              const totalCards = track.querySelectorAll(".arch-card").length || 9;
              const scrubProgress = Math.min(1, Math.max(0, self.progress / 0.88));
              const activeIdx = Math.min(totalCards, Math.max(1, Math.round(scrubProgress * (totalCards - 1)) + 1));
              const curStr = activeIdx < 10 ? `0${activeIdx}` : `${activeIdx}`;
              const totStr = totalCards < 10 ? `0${totalCards}` : `${totalCards}`;
              counter.textContent = `${curStr} / ${totStr}`;
            }
          }
        }
      });

      tl.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        duration: 1
      });

      // Brief settle buffer before unpinning cleanly into #collection
      tl.to({}, { duration: 0.12 });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      // Arrow navigation buttons
      const prevBtn = document.getElementById("collections-prev-btn");
      const nextBtn = document.getElementById("collections-next-btn");

      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.preventDefault();
          const st = tl.scrollTrigger;
          if (st) {
            const cardW = (track.querySelector(".arch-card")?.offsetWidth || 320) + 24;
            const dist = getScrollDistance();
            const stepRatio = dist > 0 ? (cardW / dist) : 0.15;
            const targetProg = Math.max(0, st.progress - stepRatio);
            const targetY = st.start + (targetProg * (st.end - st.start));
            if (window.lenis) {
              window.lenis.scrollTo(targetY);
            } else {
              window.scrollTo({ top: targetY, behavior: "smooth" });
            }
          }
        };
      }

      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.preventDefault();
          const st = tl.scrollTrigger;
          if (st) {
            const cardW = (track.querySelector(".arch-card")?.offsetWidth || 320) + 24;
            const dist = getScrollDistance();
            const stepRatio = dist > 0 ? (cardW / dist) : 0.15;
            const targetProg = Math.min(1, st.progress + stepRatio);
            const targetY = st.start + (targetProg * (st.end - st.start));
            if (window.lenis) {
              window.lenis.scrollTo(targetY);
            } else {
              window.scrollTo({ top: targetY, behavior: "smooth" });
            }
          }
        };
      }

      return () => {
        entranceTl.kill();
        tl.kill();
        gsap.set(track, { clearProps: "x" });
      };
    });

    // Mobile & Touch Carousel (width < 992px): Native swipe with live counter
    mm.add("(max-width: 991px)", () => {
      const cards = track.querySelectorAll(".arch-card");

      if (header) {
        gsap.from(header, {
          y: 14,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: section,
            start: "top 92%",
            once: true
          }
        });
      }

      if (cards.length) {
        gsap.from(cards, {
          x: 28,
          opacity: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: section,
            start: "top 92%",
            once: true
          }
        });
      }

      const updateCounter = () => {
        const counter = document.getElementById("collections-track-counter");
        if (!counter || !container) return;
        const total = cards.length || 9;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll <= 10) {
          counter.textContent = `01 / 0${total}`;
          return;
        }
        const progress = Math.min(1, Math.max(0, container.scrollLeft / maxScroll));
        const activeIdx = Math.min(total, Math.max(1, Math.round(progress * (total - 1)) + 1));
        const curStr = activeIdx < 10 ? `0${activeIdx}` : `${activeIdx}`;
        const totStr = total < 10 ? `0${total}` : `${total}`;
        counter.textContent = `${curStr} / ${totStr}`;
      };

      container.addEventListener("scroll", updateCounter, { passive: true });
      setTimeout(updateCounter, 100);

      const prevBtn = document.getElementById("collections-prev-btn");
      const nextBtn = document.getElementById("collections-next-btn");

      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.preventDefault();
          const cardWidth = (container.querySelector(".arch-card")?.offsetWidth || 300) + 20;
          container.scrollBy({ left: -cardWidth, behavior: "smooth" });
        };
      }

      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.preventDefault();
          const cardWidth = (container.querySelector(".arch-card")?.offsetWidth || 300) + 20;
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        };
      }
    });
  }

  /* ------------------------------------------------------------------------
     6. HEADER SCROLL STATE
     ------------------------------------------------------------------------ */
  initHeaderScroll() {
    const header = document.getElementById('site-header');
    const announcement = document.querySelector('.announcement-bar');
    if (!header) return;

    let isScrolled = false;
    const onScroll = () => {
      const nextSection = document.getElementById('watch-category-showcase') || document.getElementById('bento-collections');
      const scrolled = nextSection
        ? nextSection.getBoundingClientRect().top <= 120
        : window.scrollY > (window.innerHeight * 0.65);

      if (scrolled !== isScrolled) {
        isScrolled = scrolled;
        header.classList.toggle('is-scrolled', isScrolled);
        if (announcement) {
          announcement.classList.toggle('is-hidden', isScrolled);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    if (this.lenis && typeof this.lenis.on === 'function') {
      this.lenis.on('scroll', onScroll);
    }
    onScroll();
  }

  /* ------------------------------------------------------------------------
     7. CUSTOM PRECISION HOROLOGY CURSOR
     ------------------------------------------------------------------------ */
  initCustomCursor() {
    const isTouchDevice = window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches;
    if (this.isReducedMotion || isTouchDevice) {
      const dot = document.getElementById('custom-cursor-dot');
      const ring = document.getElementById('custom-cursor-ring');
      if (dot) dot.style.display = 'none';
      if (ring) ring.style.display = 'none';
      return;
    }

    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    if (!dot || !ring) return;

    document.body.classList.add('has-custom-cursor');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isTicking = false;

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(mouseX - ringX) > 0.1 || Math.abs(mouseY - ringY) > 0.1) {
        requestAnimationFrame(renderCursor);
      } else {
        isTicking = false;
      }
    };

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(renderCursor);
      }
    }, { passive: true });

    const interactiveSelectors = 'a, button, .btn, .product-card, .bento-card, .arch-card, .faq-question, .hotspot-pin, select, input';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.add('is-hover');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        ring.classList.remove('is-hover');
      }
    }, { passive: true });

    document.addEventListener('mousedown', () => ring.classList.add('is-clickable'), { passive: true });
    document.addEventListener('mouseup', () => ring.classList.remove('is-clickable'), { passive: true });
  }

  /* ------------------------------------------------------------------------
     8. GSAP SCROLL REVEALS
     ------------------------------------------------------------------------ */
  initScrollAnimations() {
    if (typeof window.ScrollTrigger === 'undefined' || this.isReducedMotion) {
      document.querySelectorAll('.reveal-clip-up').forEach(el => el.classList.add('is-revealed'));
      document.querySelectorAll('.reveal-fade-up').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelectorAll('.reveal-clip-up').length > 0) {
      ScrollTrigger.batch('.reveal-clip-up', {
        onEnter: (batch) => {
          batch.forEach(el => el.classList.add('is-revealed'));
        },
        start: 'top 88%',
        once: true
      });
    }

    if (document.querySelectorAll('.reveal-fade-up').length > 0) {
      ScrollTrigger.batch('.reveal-fade-up', {
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 1.15,
              stagger: 0.12,
              ease: 'power3.out',
              overwrite: 'auto',
              clearProps: 'transform'
            }
          );
        },
        start: 'top 88%',
        once: true
      });
    }

    // Bento grid staggered entrance
    if (document.querySelectorAll('.bento-card').length > 0) {
      ScrollTrigger.batch('.bento-card', {
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { opacity: 0, y: 40, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 1.1, stagger: 0.14, ease: 'power3.out', overwrite: 'auto', clearProps: 'transform' }
          );
        },
        start: 'top 88%',
        once: true
      });
    }

    // Catalog Header Luxury Editorial Mask Reveal
    const catalogHeader = document.querySelector('.catalog-section-header');
    if (catalogHeader) {
      const eyebrow = catalogHeader.querySelector('.catalog-eyebrow');
      const title = catalogHeader.querySelector('.catalog-title');
      const line = catalogHeader.querySelector('.catalog-header-accent-line');
      const subtitle = catalogHeader.querySelector('.catalog-subtitle');
      const count = catalogHeader.querySelector('.catalog-count-wrap');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: catalogHeader,
          start: 'top 86%',
          once: true
        }
      });

      if (eyebrow) {
        tl.from(eyebrow, { opacity: 0.7, y: 15, duration: 0.8, ease: 'power3.out', clearProps: 'all' }, 0);
      }
      if (title) {
        tl.from(title, { yPercent: 40, opacity: 0.8, duration: 0.9, ease: 'power3.out', clearProps: 'all' }, 0.1);
      }
      if (line) {
        tl.from(line, { scaleX: 0.2, duration: 0.8, ease: 'power2.out', clearProps: 'all' }, 0.2);
      }
      if (subtitle) {
        tl.from(subtitle, { opacity: 0.75, y: 15, duration: 0.8, ease: 'power3.out', clearProps: 'all' }, 0.25);
      }
      if (count) {
        tl.from(count, { opacity: 0.75, y: 12, duration: 0.8, ease: 'power3.out', clearProps: 'all' }, 0.3);
      }
    }

    // Catalog Filter Bar Scroll Reveal
    const catalogFilterBar = document.querySelector('.catalog-filter-bar');
    if (catalogFilterBar) {
      gsap.from(catalogFilterBar, {
        scrollTrigger: {
          trigger: catalogFilterBar,
          start: 'top 92%',
          once: true
        },
        opacity: 0.75,
        y: 18,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'all'
      });
    }

    // Catalog Products Grid Initial Setup
    const catalogGrid = document.getElementById('shop-catalog-grid');
    if (catalogGrid) {
      this.revealCatalogCards(catalogGrid);
    }

    // Bestselling Timepieces Carousel Track Scroll Reveal
    const bestsellersTrack = document.getElementById('bestsellers-track');
    if (bestsellersTrack) {
      ScrollTrigger.create({
        trigger: bestsellersTrack,
        start: 'top 86%',
        once: true,
        onEnter: () => {
          const cards = bestsellersTrack.querySelectorAll('.product-card');
          if (cards.length > 0) {
            gsap.fromTo(cards,
              { opacity: 0, x: 50, scale: 0.97 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1.15,
                stagger: 0.1,
                ease: 'power3.out',
                overwrite: 'auto',
                clearProps: 'transform'
              }
            );
          }
        }
      });
    }

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  /**
   * Refined luxury entry motion for catalog product cards on scroll and filter:
   * - Cards visible in viewport animate with silky stagger
   * - Cards below viewport batch-reveal as the user scrolls down to them
   * - Gentle vertical lift (y: 40px -> 0), opacity (0 -> 1), scale (0.98 -> 1)
   * - Product image scales from 1.08 -> 1 with deep luxury power3.out curve
   */
  revealCatalogCards(container) {
    if (!container) return;
    const cards = Array.from(container.querySelectorAll('.product-card'));
    if (!cards || cards.length === 0) return;

    if (this.isReducedMotion) {
      if (window.gsap) {
        window.gsap.set(cards, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform,opacity' });
        window.gsap.set(container.querySelectorAll('.product-img'), { scale: 1, clearProps: 'transform' });
      }
      return;
    }

    const { gsap, ScrollTrigger } = window;
    if (typeof gsap === 'undefined') return;

    const isMobile = window.innerWidth <= 991;

    // Mobile View: Products section transitions strictly ONCE on scroll and never repeats
    if (isMobile) {
      if (this.hasMobileCatalogRevealed) {
        // Already transitioned once on mobile: preserve solid visibility, no repeat animation
        gsap.set(cards, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform,opacity' });
        gsap.set(container.querySelectorAll('.product-img'), { scale: 1, clearProps: 'transform' });
        return;
      }

      const catalogSection = document.getElementById('shop-catalog') || container;
      const rect = catalogSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

      if (inView) {
        // Already in view: animate in once
        this.hasMobileCatalogRevealed = true;
        gsap.fromTo(cards,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            overwrite: 'auto'
          }
        );
      } else if (typeof ScrollTrigger !== 'undefined') {
        // Not yet in view: trigger once when user scrolls down to products section
        ScrollTrigger.create({
          trigger: catalogSection,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            if (this.hasMobileCatalogRevealed) return;
            this.hasMobileCatalogRevealed = true;
            gsap.fromTo(cards,
              { opacity: 0, y: 28, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
                overwrite: 'auto'
              }
            );
          }
        });
      } else {
        this.hasMobileCatalogRevealed = true;
        gsap.set(cards, { opacity: 1, x: 0, y: 0, scale: 1 });
      }
      return;
    }

    // Desktop View: Staggered entry motion on scroll & filter
    const viewportHeight = window.innerHeight;
    const inViewport = [];
    const belowViewport = [];

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) {
        inViewport.push(card);
      } else {
        belowViewport.push(card);
      }
    });

    // In-viewport cards animate immediately with staggered smooth glide
    if (inViewport.length > 0) {
      inViewport.forEach((card, idx) => {
        const fromLeft = (idx % 2 === 0);
        const startX = fromLeft ? -20 : 20;
        const img = card.querySelector('.product-img');

        gsap.fromTo(card,
          { opacity: 0, y: 40, x: startX, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 1.1,
            delay: Math.min(idx * 0.08, 0.4),
            ease: 'power3.out',
            overwrite: 'auto',
            clearProps: 'transform'
          }
        );

        if (img) {
          gsap.fromTo(img,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 1.25,
              delay: Math.min(idx * 0.08, 0.4),
              ease: 'power3.out',
              overwrite: 'auto',
              clearProps: 'transform'
            }
          );
        }
      });
    }

    // Below-viewport cards batch-reveal smoothly as the user scrolls down to each row
    if (belowViewport.length > 0) {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.batch(belowViewport, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => {
            batch.forEach((card, idx) => {
              const cardIdx = cards.indexOf(card);
              const fromLeft = (cardIdx % 2 === 0);
              const startX = fromLeft ? -20 : 20;
              const img = card.querySelector('.product-img');

              gsap.fromTo(card,
                { opacity: 0, y: 45, x: startX, scale: 0.98 },
                {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  duration: 1.15,
                  delay: idx * 0.09,
                  ease: 'power3.out',
                  overwrite: 'auto',
                  clearProps: 'transform'
                }
              );

              if (img) {
                gsap.fromTo(img,
                  { scale: 1.08 },
                  {
                    scale: 1,
                    duration: 1.25,
                    delay: idx * 0.09,
                    ease: 'power3.out',
                    overwrite: 'auto',
                    clearProps: 'transform'
                  }
                );
              }
            });
          }
        });
      } else {
        gsap.set(belowViewport, { opacity: 1, y: 0, x: 0, scale: 1 });
      }
    }

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  /* ------------------------------------------------------------------------
     5A. COLLECTOR PERSPECTIVES EXPANDING GALLERY ENTRANCE (IMAGE CLIP REVEAL)
     ------------------------------------------------------------------------ */
  initPerspectivesAnimations() {
    if (this.isReducedMotion || typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;

    const section = document.getElementById('collector-perspectives');
    if (!section) return;

    const { gsap, ScrollTrigger } = window;
    const header = section.querySelector('.perspectives-header');
    const panels = Array.from(section.querySelectorAll('.perspective-panel'));

    // GSAP Vault Image Clip Reveal Aperture Definitions (6-point architectural wedge)
    const CLOSED_CLIPS = {
      up: "polygon(0% 100%, 42% 100%, 50% 94%, 58% 100%, 100% 100%, 0% 100%)",
      down: "polygon(0% 0%, 42% 0%, 50% 6%, 58% 0%, 100% 0%, 0% 0%)",
      left: "polygon(100% 0%, 100% 42%, 94% 50%, 100% 58%, 100% 100%, 100% 0%)",
      right: "polygon(0% 0%, 0% 42%, 6% 50%, 0% 58%, 0% 100%, 0% 0%)",
    };
    const OPEN_CLIP = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)";
    const IMG_START_SCALE = 1.15;

    // 1. Header Reveal Timeline
    if (header) {
      const eyebrow = header.querySelector('.perspectives-eyebrow');
      const title = header.querySelector('.perspectives-title');
      const subtitle = header.querySelector('.perspectives-subtitle');

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          once: true
        }
      });

      if (eyebrow) {
        headerTl.from(eyebrow, { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', clearProps: 'all' });
      }
      if (title) {
        headerTl.from(title, { opacity: 0, y: 25, duration: 0.9, ease: 'power2.out', clearProps: 'all' }, '-=0.5');
      }
      if (subtitle) {
        headerTl.from(subtitle, { opacity: 0, y: 18, duration: 0.8, ease: 'power2.out', clearProps: 'all' }, '-=0.5');
      }
    }

    // 2. Image Clip Reveal Gallery Entrance
    if (panels.length > 0) {
      const galleryTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
          onComplete: () => {
            panels.forEach(p => {
              p.classList.add('is-revealed');
              const w = p.querySelector('.perspective-img-wrap');
              if (w) w.style.clipPath = 'none';
            });
          }
        }
      });

      panels.forEach((panel, idx) => {
        const wrap = panel.querySelector('.perspective-img-wrap');
        const img = panel.querySelector('.perspective-img');
        const expandedContent = panel.querySelector('.perspective-expanded-content');
        const collapsedPill = panel.querySelector('.perspective-collapsed-pill');

        const direction = (wrap && wrap.getAttribute('data-reveal-direction')) || 'up';
        const closedClip = CLOSED_CLIPS[direction] || CLOSED_CLIPS.up;
        const panelDelay = idx * 0.12;

        if (wrap) {
          // Aperture wipe opens with expo.inOut
          galleryTl.fromTo(wrap, {
            clipPath: closedClip
          }, {
            clipPath: OPEN_CLIP,
            duration: 1.45,
            ease: "expo.inOut",
            onComplete: () => {
              wrap.style.clipPath = 'none';
              panel.classList.add('is-revealed');
            }
          }, panelDelay);
        }

        if (img) {
          // Inner photograph settles from restrained Ken Burns scale
          galleryTl.fromTo(img, {
            scale: IMG_START_SCALE
          }, {
            scale: 1.0,
            duration: 1.65,
            ease: "power3.out",
            clearProps: "transform"
          }, panelDelay);
        }

        if (expandedContent && panel.classList.contains('is-expanded')) {
          // Floating review card lands as aperture completes
          galleryTl.fromTo(expandedContent, {
            y: 40,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "expo.out",
            clearProps: "transform,opacity"
          }, panelDelay + 0.7);
        }

        if (collapsedPill && !panel.classList.contains('is-expanded')) {
          // Collapsed compact indicator lands
          galleryTl.fromTo(collapsedPill, {
            y: 20,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "transform,opacity"
          }, panelDelay + 0.8);
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     8D. INSTAGRAM GALLERY SCROLL REVEAL ANIMATIONS
     ------------------------------------------------------------------------ */
  initInstagramAnimations() {
    const section = document.getElementById('instagram-gallery');
    if (!section || typeof window.gsap === 'undefined') return;

    if (this.isReducedMotion) {
      window.gsap.set(['.insta-title', '.insta-eyebrow', '.insta-card', '.btn-insta-cta', '.insta-nav-arrows', '.insta-track-wrapper'], { clearProps: 'all' });
      return;
    }

    const { gsap } = window;
    const title = section.querySelector('.insta-title');
    const eyebrow = section.querySelector('.insta-eyebrow');
    const navArrows = section.querySelector('.insta-nav-arrows');
    const trackWrapper = section.querySelector('.insta-track-wrapper');
    const cta = section.querySelector('.btn-insta-cta');

    // Immediate baseline visibility assurance
    if (trackWrapper) {
      trackWrapper.style.visibility = 'visible';
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 92%',
        once: true,
        onEnter: () => {
          if (trackWrapper) trackWrapper.style.opacity = '1';
        }
      }
    });

    if (eyebrow) {
      tl.from(eyebrow, {
        opacity: 0,
        y: 18,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      }, 0);
    }

    if (title) {
      tl.from(title, {
        opacity: 0,
        y: 24,
        scale: 0.98,
        duration: 0.85,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      }, 0.08);
    }

    if (navArrows) {
      tl.from(navArrows, {
        opacity: 0,
        x: 18,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      }, 0.15);
    }

    if (trackWrapper) {
      tl.from(trackWrapper, {
        opacity: 0,
        y: 28,
        duration: 0.95,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      }, 0.18);
    }

    if (cta) {
      tl.from(cta, {
        opacity: 0,
        y: 18,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      }, 0.35);
    }
  }

  /* ------------------------------------------------------------------------
     8E. FINAL SHOPPING CTA SCROLL REVEAL ANIMATIONS
     ------------------------------------------------------------------------ */
  initFinalCtaAnimations() {
    const section = document.getElementById('found-your-fit');
    if (!section || typeof window.gsap === 'undefined') return;

    if (this.isReducedMotion) {
      window.gsap.set(['.final-cta-eyebrow', '.final-cta-title', '.final-cta-lead', '.btn-final-primary', '.btn-final-secondary'], { clearProps: 'all' });
      return;
    }

    const { gsap, ScrollTrigger } = window;
    const bg = section.querySelector('.final-cta-bg');
    const eyebrow = section.querySelector('.final-cta-eyebrow');
    const title = section.querySelector('.final-cta-title');
    const lead = section.querySelector('.final-cta-lead');
    const btnPrimary = section.querySelector('.btn-final-primary');
    const btnSecondary = section.querySelector('.btn-final-secondary');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        once: true
      }
    });

    if (bg) {
      tl.fromTo(bg, {
        scale: 1.25,
        opacity: 0
      }, {
        scale: 1.0,
        opacity: 0.08,
        duration: 1.6,
        ease: 'power2.out',
        clearProps: 'transform'
      }, 0);
    }

    if (eyebrow) {
      tl.fromTo(eyebrow, {
        opacity: 0,
        y: 25,
        letterSpacing: '0.12em'
      }, {
        opacity: 1,
        y: 0,
        letterSpacing: '0.22em',
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all'
      }, 0.1);
    }

    if (title) {
      tl.fromTo(title, {
        opacity: 0,
        y: 35,
        scale: 0.96
      }, {
        opacity: 1,
        y: 0,
        scale: 1.0,
        duration: 1.1,
        ease: 'power3.out',
        clearProps: 'all'
      }, 0.25);
    }

    if (lead) {
      tl.fromTo(lead, {
        opacity: 0,
        y: 25
      }, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        clearProps: 'all'
      }, 0.4);
    }

    if (btnPrimary) {
      tl.fromTo(btnPrimary, {
        opacity: 0,
        y: 28,
        scale: 0.94
      }, {
        opacity: 1,
        y: 0,
        scale: 1.0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all'
      }, 0.55);
    }

    if (btnSecondary) {
      tl.fromTo(btnSecondary, {
        opacity: 0,
        y: 28,
        scale: 0.94
      }, {
        opacity: 1,
        y: 0,
        scale: 1.0,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'all'
      }, 0.65);
    }

    // Parallax on background silhouette during scroll
    if (bg && typeof ScrollTrigger !== 'undefined') {
      gsap.to(bg, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        },
        y: 35,
        ease: 'none'
      });
    }
  }

  /* ------------------------------------------------------------------------
     8F. OVERSIZED FOOTER SCROLL REVEAL ANIMATIONS
     ------------------------------------------------------------------------ */
  initFooterAnimations() {
    const footer = document.querySelector('#contact.site-footer, .site-footer');
    if (!footer) return;

    const heroBrand = footer.querySelector('.footer-hero-brand');
    const cols = Array.from(footer.querySelectorAll('.footer-col'));
    const bottom = footer.querySelector('.footer-bottom');

    const resetFooterVars = () => {
      footer.style.setProperty('--footer-p', '1');
      footer.style.setProperty('--footer-wrap-y', '0px');
      footer.style.setProperty('--footer-line-scale', '1');
      footer.style.setProperty('--footer-line-op', '0.85');
      footer.style.setProperty('--footer-glow-y', '0px');
      footer.style.setProperty('--footer-brand-y', '0px');
      footer.style.setProperty('--footer-brand-scale', '1');
      footer.style.setProperty('--footer-brand-op', '1');
      footer.style.setProperty('--footer-bottom-y', '0px');
      footer.style.setProperty('--footer-bottom-op', '1');
      cols.forEach(c => {
        c.style.setProperty('--col-y', '0px');
        c.style.setProperty('--col-scale', '1');
        c.style.setProperty('--col-op', '1');
      });
    };

    if (this.isReducedMotion) {
      resetFooterVars();
      return;
    }

    const clamp01 = v => Math.max(0, Math.min(1, v));
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    const updateFooterScrollReveal = () => {
      const vh = window.innerHeight || 900;
      const vw = window.innerWidth || 1280;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docH = Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0);
      const maxScroll = Math.max(0, docH - vh);

      // Ramps to 1 in the last ~16% viewport height before bottom so short/desktop viewports always settle cleanly
      const nearBottomP = maxScroll > 0
        ? clamp01(1 - Math.max(0, maxScroll - scrollY) / Math.max(80, vh * 0.16))
        : 1;

      const fRect = footer.getBoundingClientRect();
      const startY = vh * 0.98;
      const travelDist = Math.max(180, vh * 0.68);
      const rawFooterP = (startY - fRect.top) / travelDist;
      const footerP = easeOutCubic(clamp01(Math.max(rawFooterP, nearBottomP)));

      const isMobile = vw < 640;

      // Footer container subtle curtain lift + champagne seam expansion
      const wrapY = ((1 - footerP) * (isMobile ? 32 : 44)).toFixed(1) + 'px';
      const lineScale = (0.12 + 0.88 * footerP).toFixed(3);
      const lineOp = (0.18 + 0.74 * footerP).toFixed(3);
      const glowY = ((1 - footerP) * 52).toFixed(1) + 'px';

      footer.style.setProperty('--footer-p', footerP.toFixed(3));
      footer.style.setProperty('--footer-wrap-y', wrapY);
      footer.style.setProperty('--footer-line-scale', lineScale);
      footer.style.setProperty('--footer-line-op', lineOp);
      footer.style.setProperty('--footer-glow-y', glowY);

      // Oversized ORVEL wordmark rising up into frame
      if (heroBrand) {
        const bRect = heroBrand.getBoundingClientRect();
        const rawBrandP = (vh * 0.96 - bRect.top) / Math.max(150, vh * 0.56);
        const brandP = easeOutCubic(clamp01(Math.max(rawBrandP, nearBottomP)));
        const brandY = ((1 - brandP) * (isMobile ? 46 : 68)).toFixed(1) + 'px';
        const brandScale = (0.92 + 0.08 * brandP).toFixed(3);
        const brandOp = (0.16 + 0.84 * brandP).toFixed(3);

        heroBrand.style.setProperty('--footer-brand-y', brandY);
        heroBrand.style.setProperty('--footer-brand-scale', brandScale);
        heroBrand.style.setProperty('--footer-brand-op', brandOp);
      }

      // Footer columns: per-column scroll-up on mobile, staggered upward cascade on desktop/tablet
      cols.forEach((col, idx) => {
        let colP;
        if (isMobile) {
          const cRect = col.getBoundingClientRect();
          const rawColP = (vh * 0.97 - cRect.top) / Math.max(110, vh * 0.36);
          colP = easeOutCubic(clamp01(Math.max(rawColP, nearBottomP)));
        } else {
          const delay = idx * 0.09;
          const span = Math.max(0.35, 0.92 - delay);
          const rawGridP = (vh * 0.96 - fRect.top) / Math.max(180, vh * 0.64);
          const staggeredRaw = (rawGridP - delay) / span;
          colP = easeOutCubic(clamp01(Math.max(staggeredRaw, nearBottomP)));
        }
        const colY = ((1 - colP) * (isMobile ? 40 : 52)).toFixed(1) + 'px';
        const colScale = (0.965 + 0.035 * colP).toFixed(3);
        const colOp = (0.16 + 0.84 * colP).toFixed(3);

        col.style.setProperty('--col-y', colY);
        col.style.setProperty('--col-scale', colScale);
        col.style.setProperty('--col-op', colOp);
      });

      // Footer bottom bar: clean upward finish (always completes cleanly in view)
      if (bottom) {
        const botRect = bottom.getBoundingClientRect();
        const rawBotP = (vh * 1.03 - botRect.top) / Math.max(50, vh * 0.12);
        const botP = easeOutCubic(clamp01(Math.max(rawBotP, nearBottomP)));
        bottom.style.setProperty('--footer-bottom-y', (((1 - botP) * 26).toFixed(1) + 'px'));
        bottom.style.setProperty('--footer-bottom-op', (0.20 + 0.80 * botP).toFixed(3));
      }
    };

    let rafId = null;
    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateFooterScrollReveal();
      });
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    if (this.lenis && typeof this.lenis.on === 'function') {
      this.lenis.on('scroll', scheduleUpdate);
    }
    updateFooterScrollReveal();
  }

  /* ------------------------------------------------------------------------
     9. DEBOUNCED RESIZE REFRESH
     ------------------------------------------------------------------------ */
  initResizeHandler() {
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        if (window.innerWidth !== lastWidth) {
          lastWidth = window.innerWidth;
          if (typeof window.ScrollTrigger !== 'undefined') {
            window.ScrollTrigger.refresh();
          }
        }
      }, 250);
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (typeof window.ScrollTrigger !== 'undefined') {
          window.ScrollTrigger.refresh();
        }
      });
    }
  }
}

export const motion = new MotionSystem();
if (typeof window !== 'undefined') {
  window.motion = motion;
}
