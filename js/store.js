/**
 * ORVÉL — Fine Timepieces
 * State Management: Cart, Wishlist, Comparison & WhatsApp Checkout
 * Designed & Engineered for MalikAxiom Technology
 */

import { boutiqueConfig } from './config.js?v=20261125insta';

const CART_STORAGE_KEY = 'orvel_cart_v1';
const WISHLIST_STORAGE_KEY = 'orvel_wishlist_v1';
const MAX_COMPARE_ITEMS = 3;

export class WatchStore {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.compareList = [];
  }

  /* ------------------------------------------------------------------------
     1. CART MANAGEMENT & LOCALSTORAGE PERSISTENCE
     ------------------------------------------------------------------------ */
  loadCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      const parsed = data ? JSON.parse(data) : [];
      if (!Array.isArray(parsed)) return [];
      const validIds = new Set((boutiqueConfig.products || []).map(p => p.id));
      return parsed.filter(item => item && validIds.has(item.id) && !String(item.image || '').includes('orvel-'));
    } catch (e) {
      console.warn('LocalStorage error, falling back to memory cart', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
    this.dispatchCartUpdate();
  }

  dispatchCartUpdate() {
    if (typeof window === 'undefined' || typeof CustomEvent === 'undefined') return;
    const event = new CustomEvent('orvel:cart-updated', {
      detail: {
        cart: this.cart,
        subtotal: this.getSubtotal(),
        count: this.getItemCount(),
        freeShippingRemaining: this.getFreeShippingRemaining(),
        isFreeShippingEligible: this.isFreeShippingEligible()
      }
    });
    window.dispatchEvent(event);
  }

  getCart() {
    return this.cart;
  }

  getItemCount() {
    return this.cart.reduce((total, item) => total + (item.quantity || 1), 0);
  }

  getSubtotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getFreeShippingRemaining() {
    const remaining = boutiqueConfig.shopping.freeShippingThreshold - this.getSubtotal();
    return remaining > 0 ? remaining : 0;
  }

  isFreeShippingEligible() {
    return this.getSubtotal() >= boutiqueConfig.shopping.freeShippingThreshold;
  }

  /**
   * Adds a watch to the cart with strap/dial variant
   */
  addToCart(product, variant = null, quantity = 1) {
    if (!product || !product.id) return false;

    const variantName = (typeof variant === 'object' && variant !== null ? (variant.name || variant.id) : variant) ||
      (product.variants && product.variants[0] ? (product.variants[0].name || product.variants[0].id) : product.strapMaterial);

    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.selectedVariant === variantName
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        caseSize: product.caseSize,
        movement: product.movementType || product.movement,
        selectedVariant: variantName,
        quantity: quantity,
        collectionName: product.collectionName || 'Fine Timepieces'
      });
    }

    this.saveCart();
    return true;
  }

  updateQuantity(productId, variant, delta) {
    const variantName = (typeof variant === 'object' && variant !== null ? (variant.name || variant.id) : variant);
    const item = this.cart.find(i => i.id === productId && i.selectedVariant === variantName);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId, variantName);
      return;
    }
    this.saveCart();
  }

  removeFromCart(productId, variant) {
    const variantName = (typeof variant === 'object' && variant !== null ? (variant.name || variant.id) : variant);
    this.cart = this.cart.filter(i => !(i.id === productId && i.selectedVariant === variantName));
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  /* ------------------------------------------------------------------------
     2. WISHLIST MANAGEMENT
     ------------------------------------------------------------------------ */
  loadWishlist() {
    try {
      const data = localStorage.getItem(WISHLIST_STORAGE_KEY);
      const parsed = data ? JSON.parse(data) : [];
      if (!Array.isArray(parsed)) return [];
      const validIds = new Set((boutiqueConfig.products || []).map(p => p.id));
      return parsed.filter(item => item && validIds.has(item.id) && !String(item.image || '').includes('orvel-'));
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist', e);
    }
    this.dispatchWishlistUpdate();
  }

  dispatchWishlistUpdate() {
    if (typeof window === 'undefined' || typeof CustomEvent === 'undefined') return;
    const event = new CustomEvent('orvel:wishlist-updated', {
      detail: {
        wishlist: this.wishlist,
        count: this.wishlist.length
      }
    });
    window.dispatchEvent(event);
  }

  isWishlisted(productId) {
    return this.wishlist.some(p => p.id === productId);
  }

  isInWishlist(productId) {
    return this.isWishlisted(productId);
  }

  toggleWishlist(product) {
    if (!product || !product.id) return false;

    const exists = this.isWishlisted(product.id);
    if (exists) {
      this.wishlist = this.wishlist.filter(p => p.id !== product.id);
    } else {
      this.wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        caseSize: product.caseSize,
        movement: product.movementType || product.movement,
        collectionName: product.collectionName
      });
    }
    this.saveWishlist();
    return !exists;
  }

  getWishlist() {
    return this.wishlist;
  }

  /* ------------------------------------------------------------------------
     3. PRODUCT COMPARISON (UP TO 3 TIMEPIECES)
     ------------------------------------------------------------------------ */
  getCompareList() {
    return this.compareList;
  }

  isComparing(productId) {
    return this.compareList.some(p => p.id === productId);
  }

  addToCompare(product) {
    if (!product || !product.id) return { success: false, reason: 'Invalid product' };
    if (this.isComparing(product.id)) {
      return { success: false, reason: 'Already in comparison list' };
    }
    if (this.compareList.length >= MAX_COMPARE_ITEMS) {
      return { success: false, reason: `Maximum ${MAX_COMPARE_ITEMS} timepieces can be compared simultaneously` };
    }

    this.compareList.push(product);
    this.dispatchCompareUpdate();
    return { success: true };
  }

  removeFromCompare(productId) {
    this.compareList = this.compareList.filter(p => p.id !== productId);
    this.dispatchCompareUpdate();
  }

  clearCompare() {
    this.compareList = [];
    this.dispatchCompareUpdate();
  }

  dispatchCompareUpdate() {
    if (typeof window === 'undefined' || typeof CustomEvent === 'undefined') return;
    const event = new CustomEvent('orvel:compare-updated', {
      detail: {
        compareList: this.compareList,
        count: this.compareList.length
      }
    });
    window.dispatchEvent(event);
  }

  /* ------------------------------------------------------------------------
     4. CURRENCY & WHATSAPP FORMATTING
     ------------------------------------------------------------------------ */
  formatPKR(amount) {
    return `${boutiqueConfig.shopping.currencySymbol} ${Number(amount).toLocaleString('en-PK')}`;
  }

  /**
   * Generates formatted WhatsApp order message as specified:
   * 
   * Hello ORVÉL,
   * 
   * I would like to order:
   * 
   * Model: [Watch Model]
   * Variant: [Strap / Dial]
   * Quantity: [Quantity]
   * Price: PKR [Price]
   * 
   * Delivery: [Complimentary Insured Courier / Standard]
   * Total: PKR [Total]
   * 
   * Please confirm availability and delivery details.
   */
  generateWhatsAppOrderMessage(brandName = boutiqueConfig.brand.name) {
    if (this.cart.length === 0) {
      return `Hello ${brandName},\n\nI am viewing your fine timepieces collection and would like to speak with an atelier horologist.`;
    }

    let itemsBlock = '';
    this.cart.forEach((item, index) => {
      const itemHeader = this.cart.length > 1 ? `Timepiece ${index + 1}:\n` : '';
      itemsBlock += `${itemHeader}` +
        `Model: ${item.name}\n` +
        `Variant: ${item.selectedVariant || 'Standard Configuration'}\n` +
        `Quantity: ${item.quantity}\n` +
        `Price: ${this.formatPKR(item.price * item.quantity)}\n\n`;
    });

    const total = this.formatPKR(this.getSubtotal());
    const deliveryStatus = this.isFreeShippingEligible()
      ? "Delivery: Complimentary Insured Armoured Delivery (Above PKR 15,000)"
      : `Delivery: Standard Insured Shipping (${this.formatPKR(boutiqueConfig.shopping.standardShippingFee)})`;

    return `Hello ${brandName},\n\n` +
      `I would like to order:\n\n` +
      `${itemsBlock}` +
      `${deliveryStatus}\n` +
      `Total: ${total}\n\n` +
      `Please confirm availability and delivery details.`;
  }

  getWhatsAppCheckoutUrl(phoneNumber = boutiqueConfig.contact.whatsappNumber, brandName) {
    const message = this.generateWhatsAppOrderMessage(brandName);
    const cleanPhone = (phoneNumber || '').replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
}

export const store = new WatchStore();
if (typeof window !== 'undefined') {
  window.store = store;
}
