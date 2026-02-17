const CART_KEY = 'rio_macca_cart';

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
}

function getTotals(cart) {
  const cartTotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + Number(item.quantity), 0);
  return { cartTotal, cartCount };
}

window.RioCart = {
  getCart() {
    return readCart();
  },
  getSummary() {
    return getTotals(readCart());
  },
  addToCart(product, quantity = 1) {
    const cart = readCart();
    const idx = cart.findIndex((item) => item.productCode === product.productCode);
    if (idx > -1) {
      cart[idx].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    writeCart(cart);
    return cart;
  },
  updateQuantity(productCode, quantity) {
    const cart = readCart().map((item) => (
      item.productCode === productCode ? { ...item, quantity: Math.max(1, Number(quantity)) } : item
    ));
    writeCart(cart);
    return cart;
  },
  removeFromCart(productCode) {
    const cart = readCart().filter((item) => item.productCode !== productCode);
    writeCart(cart);
    return cart;
  },
  clearCart() {
    writeCart([]);
    return [];
  },
  formatPrice(value) {
    return `${Number(value).toLocaleString('vi-VN')} ₫`;
  }
};
