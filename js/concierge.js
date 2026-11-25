/**
 * ORVÉL — Fine Timepieces
 * Premium AI Brand Concierge Engine (js/concierge.js)
 * Designed & Engineered for MalikAxiom Technology
 *
 * Deterministic local Basic Engine bridge UI integration (`window.ORVEL_V3_PROCESS`).
 * Zero runtime dependency on legacy `engine-v3.js`.
 */

import { boutiqueConfig } from './config.js?v=20261125insta';
import { store } from './store.js?v=20261111basic';
import { ui } from './ui.js?v=20261125scrollfix';

const SAFE_BRIDGE_FALLBACK_REPLY =
  "I'm temporarily unable to retrieve an automated response. Please reach our concierge directly on WhatsApp below for immediate assistance.";

class OrvelConcierge {
  constructor() {
    this.isOpen = false;
    this.isGenerating = false;
    this.activeProductContext = null;
    this.conversationHistory = [];
    this.hasGreeted = false;

    // ── Bridge Session State ────────────────────────────────────────────────
    this.v3Session = null;      // Current session state

    // DOM Elements
    this.widgetEl = null;
    this.launcherBtn = null;
    this.panelEl = null;
    this.feedEl = null;
    this.suggestionsWrapEl = null;
    this.formEl = null;
    this.inputEl = null;
    this.contextBannerEl = null;
    this.contextDescEl = null;
    this.contextClearBtn = null;
    this.closeBtn = null;
    this.resetBtn = null;

    // Standard initial suggestions
    this.defaultSuggestions = [
      "Show Tissot PRX watches",
      "Show Omega Seamaster watches",
      "What is your Cash on Delivery policy?",
      "Best watches under 8,000"
    ];

    // Contextual watch suggestions
    this.watchSuggestions = [
      "What is the price?",
      "What is its strap material?",
      "Is it water resistant?",
      "Explain its movement"
    ];
  }

  init() {
    this.cacheDom();
    if (!this.widgetEl || !this.launcherBtn || !this.panelEl) return;

    this.bindEvents();
    this.renderInitialWelcome();
    this.initTeaser();
    this.initVoiceRecognition();
  }

  cacheDom() {
    this.widgetEl = document.getElementById('orvel-concierge-widget');
    this.launcherBtn = document.getElementById('orvel-concierge-launcher');
    this.panelEl = document.getElementById('orvel-concierge-panel');
    this.feedEl = document.getElementById('concierge-messages-feed');
    this.suggestionsWrapEl = document.getElementById('concierge-suggestions-wrap');
    this.formEl = document.getElementById('concierge-chat-form');
    this.inputEl = document.getElementById('concierge-input-field');
    this.micBtn = document.getElementById('concierge-btn-mic');
    this.contextBannerEl = document.getElementById('concierge-context-banner');
    this.contextDescEl = document.getElementById('concierge-context-desc');
    this.contextClearBtn = document.getElementById('concierge-context-clear');
    this.minimizeBtn = document.getElementById('concierge-btn-minimize');
    this.closeBtn = document.getElementById('concierge-btn-close');
    this.resetBtn = document.getElementById('concierge-btn-reset');
    this.expandBtn = document.getElementById('concierge-btn-expand');

    // Pre-chat closed state teaser bubble
    this.teaserEl = document.getElementById('concierge-teaser');
    this.teaserMsgEl = document.getElementById('concierge-teaser-msg');
    this.teaserChipEl = document.getElementById('concierge-teaser-chip');
    this.teaserChipTextEl = document.getElementById('concierge-teaser-chip-text');
    this.teaserDismissBtn = document.getElementById('concierge-teaser-dismiss');
    this.teaserDots = document.querySelectorAll('.teaser-dot');
  }

  bindEvents() {
    // Launcher Toggle
    this.launcherBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Close & Minimize Buttons
    this.minimizeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    this.closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    // Expand / Big Screen Button
    this.expandBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleExpand();
    });

    // Reset Conversation
    this.resetBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.resetConversation();
    });

    // Context Clear
    this.contextClearBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.clearProductContext();
    });

    // Form Submission
    this.formEl?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleUserSubmit();
    });

    // Input Keydown (Enter to send, Shift+Enter for newline)
    this.inputEl?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleUserSubmit();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Auto-resize input height up to 3 lines
    this.inputEl?.addEventListener('input', () => {
      this.inputEl.style.height = 'auto';
      this.inputEl.style.height = `${Math.min(this.inputEl.scrollHeight, 100)}px`;
    });

    // Global escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Wheel event isolation: Ensure chat feed scrolls and prevent background scroll chaining
    this.panelEl?.addEventListener('wheel', (e) => {
      const feed = this.feedEl;
      if (!feed) {
        e.preventDefault();
        return;
      }

      const overFeed = e.target.closest('#concierge-messages-feed');
      if (overFeed) {
        const { scrollTop, scrollHeight, clientHeight } = feed;
        const canScroll = scrollHeight > clientHeight + 1;
        if (!canScroll) {
          e.preventDefault();
          return;
        }

        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
          e.preventDefault();
        }
      } else {
        // Over header, composer, suggestions, or footer: don't let it scroll background webpage
        e.preventDefault();
      }
    }, { passive: false });

    // Touch event isolation for mobile devices
    let touchStartY = 0;
    this.panelEl?.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0]?.clientY || 0;
    }, { passive: true });

    this.panelEl?.addEventListener('touchmove', (e) => {
      const feed = this.feedEl;
      if (!feed) {
        e.preventDefault();
        return;
      }

      const overFeed = e.target.closest('#concierge-messages-feed');
      if (overFeed) {
        const { scrollTop, scrollHeight, clientHeight } = feed;
        const canScroll = scrollHeight > clientHeight + 1;
        if (!canScroll) {
          e.preventDefault();
          return;
        }

        const currentY = e.touches[0]?.clientY || 0;
        const deltaY = touchStartY - currentY;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

        if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    }, { passive: false });

    // Listen for custom external ask-with-ai event
    window.addEventListener('orvel:ask-with-ai', (e) => {
      if (e.detail?.product) {
        this.openWithProductContext(e.detail.product, e.detail.variant);
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.hideTeaser();
    this.widgetEl?.classList.add('has-chat-open');

    // Smooth RAF schedule ensures initial closed translate3d(0, 102%, 0)
    // is cleanly composited by the GPU before sliding up
    requestAnimationFrame(() => {
      this.panelEl?.classList.add('is-open');
      this.launcherBtn?.classList.add('is-active');
      this.launcherBtn?.setAttribute('aria-expanded', 'true');
      this.panelEl?.setAttribute('aria-hidden', 'false');
    });

    if (!this.hasGreeted) {
      this.renderInitialWelcome();
    }

    const isMobile = window.innerWidth < 880 || ('ontouchstart' in window);
    setTimeout(() => {
      if (!isMobile) {
        this.inputEl?.focus();
      }
      this.scrollToBottom();
    }, 350);
  }

  close() {
    if (this.isListening && this.recognition) {
      try {
        this.recognition.stop();
      } catch (_) {}
    }
    this.isOpen = false;
    this.panelEl?.classList.remove('is-open', 'open', 'active');
    this.launcherBtn?.classList.remove('is-active');
    this.launcherBtn?.setAttribute('aria-expanded', 'false');
    this.panelEl?.setAttribute('aria-hidden', 'true');

    if (this.panelEl) {
      this.panelEl.style.removeProperty('display');
      this.panelEl.style.removeProperty('visibility');
      this.panelEl.style.removeProperty('opacity');
      this.panelEl.style.removeProperty('pointer-events');
    }

    setTimeout(() => {
      if (!this.isOpen) {
        this.widgetEl?.classList.remove('has-chat-open');
      }
    }, 520);

    // Optionally re-show teaser message after user has closed the chat, if not dismissed
    if (!this.teaserDismissed) {
      clearTimeout(this.teaserTimer);
      this.teaserTimer = setTimeout(() => {
        if (!this.isOpen && !this.teaserDismissed) {
          const nextIdx = (this.activeTeaserIndex + 1) % (this.teaserMessages?.length || 2);
          this.showTeaser(nextIdx);
        }
      }, 14000);
    }
  }

  toggleExpand(forceState = null) {
    if (!this.panelEl) return;
    const isNowExpanded = forceState !== null
      ? this.panelEl.classList.toggle('is-expanded', forceState)
      : this.panelEl.classList.toggle('is-expanded');

    if (this.expandBtn) {
      const expandIcon = this.expandBtn.querySelector('.icon-expand');
      const collapseIcon = this.expandBtn.querySelector('.icon-collapse');
      if (expandIcon && collapseIcon) {
        expandIcon.style.display = isNowExpanded ? 'none' : 'block';
        collapseIcon.style.display = isNowExpanded ? 'block' : 'none';
      }
      const label = isNowExpanded ? 'Restore default window' : 'Expand to big screen';
      this.expandBtn.setAttribute('title', label);
      this.expandBtn.setAttribute('aria-label', label);
    }

    setTimeout(() => {
      this.scrollToBottom(true);
    }, 200);
  }

  /* --------------------------------------------------------------------------
     PRE-CHAT CLOSED-STATE TEASER POPUP BUBBLE LOGIC (1 or 2 messages)
     -------------------------------------------------------------------------- */
  initTeaser() {
    this.teaserMessages = [
      {
        text: "Looking for a timepiece recommendation? I can help you find your ideal watch.",
        chip: "Help me choose a watch",
        prompt: "Help me choose a watch"
      },
      {
        text: `Have questions about movements, case sizing, or WhatsApp ordering? Ask ${boutiqueConfig.brand?.name || 'ORVÉL'} Concierge.`,
        chip: "Which case size suits me?",
        prompt: "Which case size suits me?"
      }
    ];
    this.activeTeaserIndex = 0;
    this.teaserInterval = null;
    this.teaserTimer = null;
    this.teaserDismissed = false;

    try {
      this.teaserDismissed = sessionStorage.getItem('orvel_teaser_dismissed') === '1';
    } catch (_) {}

    if (!this.teaserEl) return;

    // Bind Dismiss Button
    this.teaserDismissBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.dismissTeaser();
    });

    // Bind Quick Action Chip Click
    this.teaserChipEl?.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentPrompt = this.teaserMessages[this.activeTeaserIndex]?.prompt || "Help me choose a watch";
      this.hideTeaser();
      this.open();
      if (this.inputEl) {
        this.inputEl.value = currentPrompt;
      }
      this.handleUserSubmit();
    });

    // Bind Teaser Card Click (opens chat)
    this.teaserEl?.addEventListener('click', (e) => {
      if (e.target.closest('#concierge-teaser-dismiss') || e.target.closest('.teaser-dot')) {
        return;
      }
      this.hideTeaser();
      this.open();
    });

    // Bind Teaser Dots
    this.teaserDots?.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        this.setTeaserMessage(idx);
      });
    });

    // Pause rotation on hover
    this.teaserEl?.addEventListener('mouseenter', () => {
      if (this.teaserInterval) {
        clearInterval(this.teaserInterval);
        this.teaserInterval = null;
      }
    });

    this.teaserEl?.addEventListener('mouseleave', () => {
      if (!this.isOpen && this.teaserEl.classList.contains('is-visible')) {
        this.startTeaserRotation();
      }
    });

    // Auto-open teaser ONLY below Hero section (window.scrollY >= 450) or on user scroll
    if (!this.isOpen && !this.teaserDismissed) {
      const onScrollCheckTeaser = () => {
        if (this.isOpen || this.teaserDismissed) {
          window.removeEventListener('scroll', onScrollCheckTeaser);
          return;
        }
        if (window.scrollY >= 450) {
          window.removeEventListener('scroll', onScrollCheckTeaser);
          this.showTeaser();
        }
      };
      if (window.scrollY >= 450) {
        this.teaserTimer = setTimeout(() => {
          if (!this.isOpen && !this.teaserDismissed && window.scrollY >= 450) {
            this.showTeaser();
          }
        }, 1200);
      } else {
        window.addEventListener('scroll', onScrollCheckTeaser, { passive: true });
      }
    }
  }

  showTeaser(index = 0) {
    if (this.isOpen || !this.teaserEl) return;
    if (window.scrollY < 450) return; // Never show over Hero section
    this.setTeaserMessage(index);
    this.teaserEl.style.display = 'block';
    // Force layout reflow before adding animation class
    void this.teaserEl.offsetWidth;
    this.teaserEl.classList.add('is-visible');
    this.startTeaserRotation();

    // Auto-hide teaser after 7 seconds so it doesn't perpetually obstruct page content
    if (this.autoHideTimer) clearTimeout(this.autoHideTimer);
    this.autoHideTimer = setTimeout(() => {
      if (!this.isOpen) this.hideTeaser();
    }, 7000);
  }

  hideTeaser() {
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
      this.autoHideTimer = null;
    }
    if (!this.teaserEl) return;
    if (this.teaserInterval) {
      clearInterval(this.teaserInterval);
      this.teaserInterval = null;
    }
    this.teaserEl.classList.remove('is-visible');
    setTimeout(() => {
      if (!this.teaserEl.classList.contains('is-visible')) {
        this.teaserEl.style.display = 'none';
      }
    }, 350);
  }

  dismissTeaser() {
    this.teaserDismissed = true;
    try {
      sessionStorage.setItem('orvel_teaser_dismissed', '1');
    } catch (_) {}
    this.hideTeaser();
  }

  setTeaserMessage(index) {
    if (!this.teaserMessages || !this.teaserMessages[index]) return;
    this.activeTeaserIndex = index;
    const msgData = this.teaserMessages[index];

    if (this.teaserMsgEl) {
      this.teaserMsgEl.classList.add('is-fading');
      setTimeout(() => {
        this.teaserMsgEl.textContent = msgData.text;
        if (this.teaserChipTextEl) {
          this.teaserChipTextEl.textContent = msgData.chip;
        }
        this.teaserMsgEl.classList.remove('is-fading');
      }, 150);
    }

    // Update Dots
    this.teaserDots?.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  }

  startTeaserRotation() {
    if (this.teaserInterval) clearInterval(this.teaserInterval);
    this.teaserInterval = setInterval(() => {
      if (this.isOpen || !this.teaserEl || !this.teaserEl.classList.contains('is-visible')) {
        clearInterval(this.teaserInterval);
        return;
      }
      const nextIdx = (this.activeTeaserIndex + 1) % this.teaserMessages.length;
      this.setTeaserMessage(nextIdx);
    }, 7000);
  }

  /**
   * Connects the Product Detail Modal "ASK WITH AI" button seamlessly
   */
  openWithProductContext(product, selectedVariant) {
    if (!product) return;
    const now = Date.now();
    if (this._lastContextTime && now - this._lastContextTime < 400 && this.activeProductContext?.id === product.id) {
      this.open();
      return;
    }
    this._lastContextTime = now;

    this.activeProductContext = {
      id: product.id,
      name: product.name,
      collection: product.collectionName || product.collection,
      price: product.price,
      variant: selectedVariant || (product.variants && product.variants[0]?.name) || product.strapMaterial,
      caseSize: product.caseSize,
      movement: product.movement,
      movementType: product.movementType || 'Precision',
      image: product.image
    };

    // Sync with V3 session
    if (this.v3Session) {
      this.v3Session.activeProductContext = product.id;
      if (!Array.isArray(this.v3Session.selectedProducts)) {
        this.v3Session.selectedProducts = [];
      }
      if (!this.v3Session.selectedProducts.includes(product.id)) {
        this.v3Session.selectedProducts.unshift(product.id);
        if (this.v3Session.selectedProducts.length > 2) {
          this.v3Session.selectedProducts = this.v3Session.selectedProducts.slice(0, 2);
        }
      }
    }

    // Update Context Banner
    if (this.contextBannerEl && this.contextDescEl) {
      this.contextDescEl.textContent = `Focused on: ${product.name} — ${this.activeProductContext.variant} (${store.formatPKR(product.price)})`;
      this.contextBannerEl.style.display = 'flex';
    }

    // Open Concierge Panel
    this.open();

    // Add contextual welcome message
    const welcomeContextMsg = `Welcome! I see you are inspecting the **${product.name}** (${this.activeProductContext.variant}) from our ${this.activeProductContext.collection} collection, priced at **${store.formatPKR(product.price)}**.\n\nWould you like to explore its ${product.movementType} calibre specifications, evaluate its ${product.caseSize} wrist proportion, or compare it with another timepiece in our atelier?`;

    this.appendMessage({
      role: 'assistant',
      text: welcomeContextMsg,
      products: [product],
      timestamp: Date.now()
    });

    this.renderSuggestions(this.watchSuggestions);
  }

  clearProductContext() {
    this.activeProductContext = null;
    if (this.contextBannerEl) {
      this.contextBannerEl.style.display = 'none';
    }
    if (typeof window.ORVEL_V3_CLEAR_CONTEXT === 'function') {
      window.ORVEL_V3_CLEAR_CONTEXT();
    }
    // Sync V3 session
    if (this.v3Session) {
      this.v3Session.activeProductContext = null;
    }
    this.renderSuggestions(this.defaultSuggestions);
    this.appendMessage({
      role: 'assistant',
      text: "I have cleared our timepiece focus. How may I assist you with our full collection today?",
      timestamp: Date.now()
    });
  }

  renderInitialWelcome() {
    if (!this.feedEl || this.hasGreeted) return;
    this.hasGreeted = true;

    const titleEl = document.getElementById('concierge-title');
    if (titleEl) {
      titleEl.textContent = 'Mix Inventories Concierge';
    }

    const welcomeText = "Welcome to Mix Inventories. Ask me about our curated brands (Rolex, Tissot, Omega, TAG Heuer, Patek Philippe, Audemars Piguet, Richard Mille, Orient, Curren, Tommy Hilfiger, Swatch, Cartier), pricing, or Cash on Delivery across Pakistan.";

    this.appendMessage({
      role: 'assistant',
      text: welcomeText,
      timestamp: Date.now()
    });

    this.renderSuggestions(this.defaultSuggestions);
  }

  renderSuggestions(suggestions) {
    if (!this.suggestionsWrapEl) return;
    this.suggestionsWrapEl.innerHTML = '';

    const label = document.createElement('span');
    label.className = 'concierge-suggestions-label';
    label.textContent = 'SUGGESTED INQUIRIES:';
    this.suggestionsWrapEl.appendChild(label);

    const list = document.createElement('div');
    list.className = 'concierge-suggestions-list';

    suggestions.forEach(queryText => {
      const chip = document.createElement('button');
      chip.className = 'concierge-suggestion-chip';
      chip.type = 'button';
      chip.textContent = queryText;
      chip.addEventListener('click', () => {
        this.submitQuery(queryText);
      });
      list.appendChild(chip);
    });

    this.suggestionsWrapEl.appendChild(list);
  }

  handleUserSubmit() {
    if (this.isListening && this.recognition) {
      try {
        this.recognition.stop();
      } catch (_) {}
    }
    if (!this.inputEl) return;
    const text = this.inputEl.value.trim();
    if (!text || this.isGenerating) return;

    this.inputEl.value = '';
    this.inputEl.style.height = 'auto';
    this.submitQuery(text);
  }

  async submitQuery(text) {
    if (!text || this.isGenerating) return;

    // Append User Message
    this.appendMessage({
      role: 'user',
      text: text,
      timestamp: Date.now()
    });

    this.isGenerating = true;

    try {
      // 1. Instant Local Match: Specific watch/brand/budget catalog search with zero delay
      const instantMatch = this._tryInstantLocalMatch(text);
      if (instantMatch) {
        this.appendMessage({
          role: 'assistant',
          text: instantMatch.text,
          products: instantMatch.products,
          timestamp: Date.now(),
          whatsappUrl: instantMatch.whatsappUrl || null
        });
        if (Array.isArray(instantMatch.suggestions) && instantMatch.suggestions.length > 0) {
          this.renderSuggestions(instantMatch.suggestions);
        }
        return;
      }

      // 2. AI Fallback (/api/chat) for general questions, comparisons, recommendations, or FAQs
      this.showTypingIndicator();
      const aiResult = await this._callHybridAiEndpoint(text);

      if (aiResult && aiResult.ok && aiResult.text) {
        this.removeTypingIndicator();
        this.appendMessage({
          role: 'assistant',
          text: aiResult.text,
          products: aiResult.products || [],
          timestamp: Date.now(),
          whatsappUrl: null
        });
        this.renderSuggestions(
          aiResult.products && aiResult.products.length > 0
            ? ['Compare these watches', 'Cash on Delivery?', 'Delivery time in Pakistan?', 'Order via WhatsApp']
            : ['Show Tissot PRX watches', 'Best watches under 8,000', 'Automatic vs Quartz?', 'Order via WhatsApp']
        );
        return;
      }

      // 3. Graceful Fallback if API key is unconfigured or offline: try V3 basic bridge or local keyword search + WhatsApp
      let bridgeResult = null;
      if (typeof window.ORVEL_V3_PROCESS === 'function') {
        if (!this.v3Session) {
          this.v3Session = {
            turns: [],
            selectedProducts: [],
            activePreferences: { budget: null, dialColor: null, movement: null, count: null },
            negativeConstraints: { colors: new Set(), movements: new Set() },
            lastRecommended: []
          };
        }
        bridgeResult = await window.ORVEL_V3_PROCESS(text, this.v3Session, null, {
          catalog: boutiqueConfig.products,
          activeProductContext: this.activeProductContext || null,
          merchantData: this.v3Session?.merchantData
        });
      }

      this.removeTypingIndicator();
      if (bridgeResult && bridgeResult.text) {
        const sanitized = this._sanitizeAndEnsureCards(
          bridgeResult.text,
          (bridgeResult.products || []).map((p) => p.id),
          text
        );
        this.appendMessage({
          role: 'assistant',
          text: sanitized.text,
          products: sanitized.products.length ? sanitized.products : (bridgeResult.products || []),
          timestamp: Date.now(),
          whatsappUrl: bridgeResult.whatsappUrl || null
        });
        if (Array.isArray(bridgeResult.suggestions) && bridgeResult.suggestions.length > 0) {
          this.renderSuggestions(bridgeResult.suggestions.slice(0, 4));
        } else {
          this._updateSuggestionsFromIntent(bridgeResult.intent ? [bridgeResult.intent] : []);
        }
        return;
      }

      const localFallback = this._localKeywordFallback(text);
      this.appendMessage({
        role: 'assistant',
        text: localFallback.text,
        products: localFallback.products,
        timestamp: Date.now(),
        whatsappUrl: this._getSafeWhatsAppUrl()
      });
    } catch (err) {
      console.error('Concierge hybrid error:', err);
      this.removeTypingIndicator();
      const localFallback = this._localKeywordFallback(text);
      this.appendMessage({
        role: 'assistant',
        text: localFallback.text,
        products: localFallback.products,
        timestamp: Date.now(),
        whatsappUrl: this._getSafeWhatsAppUrl()
      });
    } finally {
      this.isGenerating = false;
    }
  }

  /**
   * Instant Local Catalog Match (zero delay) for direct brand, model, or budget queries.
   * Returns null for general questions, comparisons, delivery/warranty FAQs, or occasion advice
   * so those route to /api/chat.
   */
  _tryInstantLocalMatch(text) {
    const q = String(text || '').trim().toLowerCase();
    if (!q) return null;

    // Route general questions, comparisons, policies, and occasion/advice queries to AI
    const isAiIntent = /\b(vs|versus|compare|farq|difference|better|best for|wedding|shadi|gift|occasion|suit me|recommend|suggest|help me choose|why|how|explain|warranty|guarantee|exchange|return|refund|delivery|shipping|cod|cash on delivery|jazzcash|easypaisa|pakistan|lahore|karachi|islamabad|open parcel|box|original|whatsapp|contact|kya|kyun|kaise|kitne din|batao|btao)\b/i.test(q);
    if (isAiIntent && !/^(show|find|search|dikhao)\s+/i.test(q)) {
      return null;
    }

    const catalog = boutiqueConfig.products || [];
    if (!catalog.length) return null;

    // Check explicit budget filter like "under 8000", "under 8,000", "under 10k"
    const budgetMatch = q.match(/(?:under|below|less than|within|max)\s*(?:pkr|rs\.?)?\s*([\d,]+)\s*(k)?/i);
    if (budgetMatch) {
      let maxPrice = parseInt(budgetMatch[1].replace(/,/g, ''), 10);
      if (budgetMatch[2] && maxPrice < 1000) maxPrice *= 1000;
      if (maxPrice > 0) {
        const matched = catalog
          .filter((p) => Number(p.price) <= maxPrice)
          .sort((a, b) => Number(b.price) - Number(a.price))
          .slice(0, 4);
        if (matched.length > 0) {
          return {
            text: `Here are top Mix Inventories timepieces available **under PKR ${maxPrice.toLocaleString()}** (Free COD nationwide):`,
            products: matched,
            suggestions: ['Compare these watches', 'Cash on Delivery?', 'Show Automatic watches', 'Order via WhatsApp']
          };
        }
      }
    }

    // Direct brand or model keyword match
    const brandAliases = [
      { key: 'tissot', match: (p) => /tissot|prx/i.test(`${p.brand} ${p.name}`) },
      { key: 'prx', match: (p) => /prx/i.test(p.name) },
      { key: 'omega', match: (p) => /omega|seamaster/i.test(`${p.brand} ${p.name}`) },
      { key: 'seamaster', match: (p) => /seamaster/i.test(p.name) },
      { key: 'patek', match: (p) => /patek|nautilus|geneve/i.test(`${p.brand} ${p.name}`) },
      { key: 'nautilus', match: (p) => /nautilus/i.test(p.name) },
      { key: 'tag heuer', match: (p) => /tag heuer|carrera|monaco/i.test(`${p.brand} ${p.name}`) },
      { key: 'carrera', match: (p) => /carrera/i.test(p.name) },
      { key: 'monaco', match: (p) => /monaco/i.test(p.name) },
      { key: 'richard mille', match: (p) => /richard mille/i.test(`${p.brand} ${p.name}`) },
      { key: 'tubular', match: (p) => /tubular/i.test(`${p.brand} ${p.name}`) },
      { key: 'martyn', match: (p) => /martyn/i.test(`${p.brand} ${p.name}`) },
      { key: 'cartier', match: (p) => /cartier/i.test(`${p.brand} ${p.name}`) },
      { key: 'insuch', match: (p) => /insuch/i.test(`${p.brand} ${p.name}`) }
    ];

    const matchedBrands = brandAliases.filter((b) => q.includes(b.key));
    if (matchedBrands.length === 1 && q.split(/\s+/).length <= 7) {
      const matched = catalog.filter(matchedBrands[0].match).slice(0, 4);
      if (matched.length > 0) {
        return {
          text: `Here are our curated **${matched[0].brand}** timepieces in stock with nationwide Cash on Delivery:`,
          products: matched,
          suggestions: ['Compare these models', 'What is the warranty?', 'Delivery time?', 'Order via WhatsApp']
        };
      }
    }

    return null;
  }

  /**
   * Call server-side /api/chat (Groq / Gemini) with conversation history.
   */
  async _callHybridAiEndpoint(latestUserText) {
    const historySlice = this.conversationHistory
      .slice(-10)
      .map((m) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: String(m.text || '')
      }))
      .filter((m) => m.content.trim().length > 0);

    if (historySlice.length === 0 || historySlice[historySlice.length - 1].content !== latestUserText) {
      historySlice.push({ role: 'user', content: latestUserText });
    }

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: historySlice,
        productContext: this.activeProductContext || null,
        brandName: boutiqueConfig.brand?.name || 'Mix Inventories'
      })
    });

    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.ok) return data;

    const sanitized = this._sanitizeAndEnsureCards(data.text || '', data.recommendedIds || [], latestUserText);
    return {
      ok: true,
      text: sanitized.text,
      products: sanitized.products
    };
  }

  /**
   * Strip internal IDs (e.g. csv-prod-01 / SKU:) from visible chat text, replace with
   * watch titles when needed, and ensure 2-3 watch photo cards are attached for suggestions.
   */
  _sanitizeAndEnsureCards(rawText, initialIds = [], userQuery = '') {
    const catalog = boutiqueConfig.products || [];
    const byId = new Map(catalog.map((p) => [String(p.id).toLowerCase(), p]));

    const textIds = Array.from(String(rawText || '').matchAll(/\bcsv-prod-\d{2}\b/gi)).map((m) => m[0].toLowerCase());
    const combinedIds = [...new Set([...(initialIds || []).map((id) => String(id || '').toLowerCase()), ...textIds])];

    let cleanText = String(rawText || '')
      // Remove "(SKU: csv-prod-01)" or "(csv-prod-01)" when preceded by watch title
      .replace(/\s*\((?:SKU:\s*)?csv-prod-\d{2}\)/gi, '')
      // Remove "SKU: csv-prod-01" bullets/labels
      .replace(/\bSKU:\s*(csv-prod-\d{2})\b/gi, (_, id) => {
        const p = byId.get(id.toLowerCase());
        return p ? p.name : '';
      })
      // Replace any remaining bare csv-prod-XX with the watch's exact title
      .replace(/\b(csv-prod-\d{2})\b/gi, (_, id) => {
        const p = byId.get(id.toLowerCase());
        return p ? `**${p.name}**` : '';
      })
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    let products = this._hydrateRecommendedProducts(combinedIds, cleanText);

    const isSuggestionQuery = /\b(suggest|recommend|btao|batao|dikhao|show|best|under|below|gift|wedding|shadi|party|office|casual|automatic|quartz|semi|budget|options?|choices?)\b/i.test(String(userQuery || ''));
    if (isSuggestionQuery && products.length > 0 && products.length < 2 && catalog.length >= 2) {
      const seen = new Set(products.map((p) => p.id));
      const baseBrand = String(products[0].brand || '').toLowerCase();
      const baseCat = String(products[0].movementType || products[0].category || '').toLowerCase();
      const extras = catalog
        .filter((p) => !seen.has(p.id))
        .sort((a, b) => {
          const scoreA = (String(a.brand || '').toLowerCase() === baseBrand ? 2 : 0) + (String(a.movementType || '').toLowerCase() === baseCat ? 1 : 0);
          const scoreB = (String(b.brand || '').toLowerCase() === baseBrand ? 2 : 0) + (String(b.movementType || '').toLowerCase() === baseCat ? 1 : 0);
          return scoreB - scoreA;
        })
        .slice(0, 3 - products.length);
      products = [...products, ...extras];
    }

    return { text: cleanText, products: products.slice(0, 3) };
  }

  _hydrateRecommendedProducts(recommendedIds, responseText) {
    const catalog = boutiqueConfig.products || [];
    const byId = new Map(catalog.map((p) => [String(p.id).toLowerCase(), p]));
    const picked = [];
    const seen = new Set();

    if (Array.isArray(recommendedIds)) {
      for (const id of recommendedIds) {
        const found = byId.get(String(id || '').toLowerCase());
        if (found && !seen.has(found.id)) {
          seen.add(found.id);
          picked.push(found);
        }
      }
    }

    // Fallback: match exact product titles mentioned in AI reply if no IDs were attached
    if (picked.length === 0 && responseText) {
      const lowerText = responseText.toLowerCase();
      for (const p of catalog) {
        if (lowerText.includes(String(p.name).toLowerCase()) && !seen.has(p.id)) {
          seen.add(p.id);
          picked.push(p);
          if (picked.length >= 3) break;
        }
      }
    }

    return picked.slice(0, 4);
  }

  _localKeywordFallback(text) {
    const q = String(text || '').toLowerCase();
    const tokens = q.split(/\s+/).filter((t) => t.length >= 3);
    const catalog = boutiqueConfig.products || [];
    const scored = catalog
      .map((p) => {
        const hay = `${p.name} ${p.brand} ${p.category} ${p.movementType || ''} ${p.description || ''}`.toLowerCase();
        const score = tokens.reduce((acc, tok) => acc + (hay.includes(tok) ? 1 : 0), 0);
        return { p, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.p);

    if (scored.length > 0) {
      if (scored.length === 1 && catalog.length >= 2) {
        const seen = new Set(scored.map((p) => p.id));
        const extras = catalog.filter((p) => !seen.has(p.id)).slice(0, 2);
        scored.push(...extras);
      }
      return {
        text: "Here are matching timepieces from our Mix Inventories collection. You can add any watch directly to your bag or message us on WhatsApp for live video/pictures:",
        products: scored.slice(0, 3)
      };
    }

    return {
      text: "Here are 3 popular picks from our Mix Inventories collection (all with Free Cash on Delivery across Pakistan and a 6-month movement warranty):",
      products: catalog.slice(0, 3)
    };
  }

  /**
   * Update quick-reply suggestions based on matched intent category.
   */
  _updateSuggestionsFromIntent(intentIds) {
    if (!intentIds || intentIds.length === 0) return;
    const topId = String(intentIds[0] || '');

    // Named intent overrides
    if (topId === 'RECOMMENDATION' || topId === 'BUDGET_FILTER' || topId === 'COLOUR_FILTER') {
      this.renderSuggestions(['In dono mein kya farq hai?', 'Pehle wali watch dikhao', 'Order via WhatsApp', 'Under 20k watches']);
      return;
    }
    if (topId === 'CONTACT' || topId === 'PAYMENT_COD' || topId === 'DELIVERY') {
      this.renderSuggestions(['Mujhe 2 watches best btao', 'Cash on delivery?', 'Delivery time?', 'Order via WhatsApp']);
      return;
    }
    if (topId === 'MOVEMENT_INFO') {
      this.renderSuggestions(['Automatic watches dikhao', 'Under 20k watches', 'Case sizing guide', 'WhatsApp concierge']);
      return;
    }
    if (topId === 'IDENTITY' || topId === 'GREETING_RU' || topId === 'GREETING_EN' || topId === 'SMALL_TALK') {
      this.renderSuggestions(['Mujhe 2 watches best btao', 'Show watches under 20000', 'Automatic vs quartz', 'Official WhatsApp']);
      return;
    }

    const catId = topId ? topId.slice(0, 6) : '';  // e.g. 'ORV-04'

    // Rough category grouping for follow-up suggestions
    const num = parseInt(topId?.replace('ORV-', '') || '0', 10);

    if (num >= 49 && num <= 54) {
      // Budget → suggest comparisons
      this.renderSuggestions(['Compare two models', 'Which is best value?', 'Show all watches', 'WhatsApp inquiry']);
    } else if (num >= 115 && num <= 126) {
      // Comparison / alternatives → suggest specs
      this.renderSuggestions(['Show specs', 'Price difference?', 'Which suits daily wear?', 'Order via WhatsApp']);
    } else if (num >= 205 && num <= 210) {
      // WhatsApp → show contact
      this.renderSuggestions(['What is your WhatsApp?', 'How to order?', 'Cash on delivery?', 'Delivery time?']);
    } else if (this.activeProductContext) {
      this.renderSuggestions(this.watchSuggestions);
    } else {
      // Default
      this.renderSuggestions(this.defaultSuggestions);
    }
  }

  /**
   * Build safe fallback WhatsApp URL respecting valid URL customization overrides.
   */
  _getSafeWhatsAppUrl() {
    let rawWa = boutiqueConfig.contact?.whatsappNumber || '923284037431';
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const waOverride = (params.get('whatsapp') || params.get('wa') || params.get('phone') || '').trim();
      if (waOverride) {
        const overrideDigits = waOverride.replace(/[^\d]/g, '');
        if (overrideDigits.length >= 7) {
          rawWa = overrideDigits;
        }
      }
    }
    const digits = String(rawWa).replace(/[^\d]/g, '') || '923284037431';
    return `https://wa.me/${digits}`;
  }

  appendMessage({ role, text, products = [], timestamp = Date.now(), whatsappUrl = null }) {
    if (!this.feedEl) return;

    this.conversationHistory.push({ role, text, products, timestamp });

    const msgEl = document.createElement('div');
    msgEl.className = `concierge-message ${role === 'user' ? 'is-user' : 'is-assistant'}`;

    if (role === 'assistant') {
      const avatarEl = document.createElement('div');
      avatarEl.className = 'concierge-msg-avatar';
      avatarEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`;
      msgEl.appendChild(avatarEl);
    }

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'concierge-msg-bubble';

    // Format markdown bold & line breaks safely
    const formattedHtml = this.formatMarkdown(text);
    const textWrapEl = document.createElement('div');
    textWrapEl.className = 'concierge-msg-text';
    textWrapEl.innerHTML = formattedHtml;
    bubbleEl.appendChild(textWrapEl);

    // WhatsApp CTA button (only when V3 engine supplies a URL — user-triggered)
    if (whatsappUrl && role === 'assistant') {
      const waBtn = document.createElement('a');
      waBtn.href = whatsappUrl;
      waBtn.target = '_blank';
      waBtn.rel = 'noopener noreferrer';
      waBtn.className = 'concierge-wa-btn';
      waBtn.setAttribute('aria-label', 'Open WhatsApp inquiry');
      waBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 2C6.473 2 2 6.473 2 12.002c0 1.74.449 3.479 1.308 5.002L2.013 22l5.173-1.278A9.985 9.985 0 0 0 11.998 22c5.524 0 9.998-4.473 9.998-9.998C21.996 6.473 17.522 2 11.998 2z"/></svg>
        Open WhatsApp
      `;
      bubbleEl.appendChild(waBtn);
    }

    // Render Compact Product Cards if any
    if (Array.isArray(products) && products.length > 0) {
      const cardsWrap = document.createElement('div');
      cardsWrap.className = 'concierge-product-cards-wrap';

      const baseWaUrl = this._getSafeWhatsAppUrl();

      products.forEach(prod => {
        // Authoritative hydration from boutiqueConfig.products
        const targetProd = (boutiqueConfig.products || []).find(p => p.id === (prod.id || prod)) || prod;
        const pId = targetProd.id || 'csv-prod-01';
        const pName = targetProd.name || 'Mix Inventories Timepiece';
        const pCategory = targetProd.movementType || targetProd.collectionName || targetProd.collection || 'Signature';
        const pBrand = targetProd.brand || targetProd.collectionName || '';
        const pMeta = pBrand ? `${pBrand} · ${pCategory}` : pCategory;
        const pPrice = typeof targetProd.price === 'number' ? store.formatPKR(targetProd.price) : (targetProd.price || '');
        const pImage = targetProd.image || 'assets/images/products/p-01-main.jpg';
        const waText = encodeURIComponent(`Hi Mix Inventories! I want to order "${pName}" (${pPrice}).`);
        const waHref = `${baseWaUrl}?text=${waText}`;

        const card = document.createElement('div');
        card.className = 'concierge-card-compact';
        card.setAttribute('data-product-id', pId);
        card.style.cursor = 'pointer';

        card.innerHTML = `
          <div class="concierge-card-img-wrap" data-hover-image="${targetProd.secondaryImage || targetProd.image || ''}">
            <img src="${pImage}" data-secondary="${targetProd.secondaryImage || targetProd.image || ''}" alt="${pName}" loading="lazy" decoding="async">
          </div>
          <div class="concierge-card-body">
            <span class="concierge-card-meta">${pMeta}</span>
            <h4 class="concierge-card-title">${pName}</h4>
            <div class="concierge-card-price">${pPrice}</div>
          </div>
          <div class="concierge-card-actions">
            <button class="btn-concierge-card-add" type="button" aria-label="Add ${pName} to Bag">Add to Bag</button>
            <a class="btn-concierge-card-wa" href="${waHref}" target="_blank" rel="noopener noreferrer" aria-label="Order ${pName} on WhatsApp">WhatsApp</a>
          </div>
        `;

        // Bind View Timepiece Action (clicking card thumbnail/body)
        const handleOpen = (e) => {
          if (e.target.closest('.btn-concierge-card-add') || e.target.closest('.btn-concierge-card-wa')) return;
          e.stopPropagation();
          const fullProd = (boutiqueConfig.products || []).find(p => p.id === pId) || targetProd;
          if (fullProd && window.ui && typeof window.ui.openProductDetail === 'function') {
            this.close();
            window.ui.openProductDetail(fullProd);
          }
        };

        card.addEventListener('click', handleOpen);

        const addBtn = card.querySelector('.btn-concierge-card-add');
        addBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          const fullProd = (boutiqueConfig.products || []).find(p => p.id === pId) || targetProd;
          const defaultVariant = fullProd.variants?.[0]?.name || 'Standard Reference';
          store.addToCart(fullProd, defaultVariant, 1);
          addBtn.textContent = 'Added ✓';
          addBtn.classList.add('is-added');
          setTimeout(() => {
            addBtn.textContent = 'Add to Bag';
            addBtn.classList.remove('is-added');
          }, 1500);
        });

        card.querySelector('.btn-concierge-card-wa')?.addEventListener('click', (e) => {
          e.stopPropagation();
        });

        cardsWrap.appendChild(card);
      });

      bubbleEl.appendChild(cardsWrap);
    }

    msgEl.appendChild(bubbleEl);
    this.feedEl.appendChild(msgEl);

    if (role === 'assistant') {
      requestAnimationFrame(() => {
        if (!this.feedEl) return;
        this.feedEl.scrollTo({
          top: Math.max(0, msgEl.offsetTop - 12),
          behavior: 'smooth'
        });
      });
    } else {
      this.scrollToBottom();
    }
  }

  showTypingIndicator() {
    if (!this.feedEl || document.getElementById('concierge-typing-indicator')) return;

    const typingEl = document.createElement('div');
    typingEl.id = 'concierge-typing-indicator';
    typingEl.className = 'concierge-message is-assistant is-typing';
    typingEl.innerHTML = `
      <div class="concierge-msg-avatar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      </div>
      <div class="concierge-msg-bubble">
        <div class="concierge-typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    this.feedEl.appendChild(typingEl);
    this.scrollToBottom();
  }

  removeTypingIndicator() {
    const el = document.getElementById('concierge-typing-indicator');
    el?.remove();
  }

  resetConversation() {
    if (!this.feedEl) return;
    this.feedEl.innerHTML = '';
    this.conversationHistory = [];
    this.hasGreeted = false;
    this.activeProductContext = null;
    if (this.contextBannerEl) {
      this.contextBannerEl.style.display = 'none';
    }
    if (typeof window.ORVEL_V3_RESET === 'function') {
      window.ORVEL_V3_RESET();
    }
    this.v3Session = null;
    this.renderInitialWelcome();
  }

  formatMarkdown(text) {
    if (!text) return '';
    // Escape basic HTML
    let out = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold **text**
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Bullet points
    out = out.replace(/^[•*]\s+(.*)$/gm, '<li>$1</li>');
    out = out.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    // Links [text](#anchor) or external https:// links
    out = out.replace(/\[(.*?)\]\((.*?)\)/g, (_, label, href) => {
      if (/^https?:\/\//i.test(href)) {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="concierge-inline-link">${label}</a>`;
      }
      return `<a href="${href}" class="concierge-inline-link">${label}</a>`;
    });
    // Line breaks
    out = out.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');

    return out;
  }

  scrollToBottom() {
    if (this.feedEl) {
      this.feedEl.scrollTo({
        top: this.feedEl.scrollHeight,
        behavior: 'smooth'
      });
    }
  }

  /* --------------------------------------------------------------------------
     VOICE TO TEXT (SPEECH RECOGNITION) INTEGRATION
     -------------------------------------------------------------------------- */
  initVoiceRecognition() {
    if (!this.micBtn) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      this.micBtn.setAttribute('title', 'Voice dictation is supported in Chrome, Safari & Edge');
      this.micBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.ui && typeof window.ui.showToast === 'function') {
          window.ui.showToast('Voice dictation is supported in Chrome, Safari & Edge browsers.');
        } else {
          alert('Voice dictation is supported in Chrome, Safari & Edge browsers.');
        }
      });
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = navigator.language || 'en-US';
      this.isListening = false;
      this.preDictationText = '';

      this.recognition.onstart = () => {
        this.isListening = true;
        this.micBtn?.classList.add('is-listening');
        this.micBtn?.setAttribute('title', 'Listening... Click to stop');
        this.micBtn?.setAttribute('aria-label', 'Stop voice dictation');
        this.preDictationText = this.inputEl?.value || '';
        if (this.inputEl) {
          this.inputEl.placeholder = 'Listening... Speak now';
        }
      };

      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const item = event.results[i];
          if (item.isFinal) {
            finalTranscript += item[0].transcript;
          } else {
            interimTranscript += item[0].transcript;
          }
        }

        const transcript = finalTranscript || interimTranscript;
        if (this.inputEl && transcript) {
          const base = this.preDictationText ? this.preDictationText.trim() + ' ' : '';
          this.inputEl.value = base + transcript;
          this.inputEl.style.height = 'auto';
          this.inputEl.style.height = `${Math.min(this.inputEl.scrollHeight, 100)}px`;
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('Concierge speech recognition error:', event.error);
        this.stopListening();
        if (event.error === 'not-allowed') {
          if (window.ui && typeof window.ui.showToast === 'function') {
            window.ui.showToast('Microphone access denied. Please allow microphone permissions in your browser.');
          }
        }
      };

      this.recognition.onend = () => {
        this.stopListening();
      };

      this.micBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.isListening) {
          this.recognition.stop();
        } else {
          try {
            this.recognition.start();
          } catch (err) {
            console.warn('Could not start speech recognition:', err);
            this.stopListening();
          }
        }
      });
    } catch (err) {
      console.warn('Speech recognition initialization failed:', err);
    }
  }

  stopListening() {
    this.isListening = false;
    this.micBtn?.classList.remove('is-listening');
    this.micBtn?.setAttribute('title', 'Dictate message');
    this.micBtn?.setAttribute('aria-label', 'Dictate message');
    if (this.inputEl) {
      this.inputEl.placeholder = 'Inquire about our timepieces...';
      this.inputEl.focus();
    }
  }
}

export const concierge = new OrvelConcierge();
window.concierge = concierge;
