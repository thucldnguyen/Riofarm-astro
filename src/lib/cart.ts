export interface CartItem {
  productCode: string;
  name: string;
  price: string | number;
  quantity: number;
}

export function addToCart(cart: CartItem[], product: Omit<CartItem, 'quantity'>, quantity = 1): CartItem[] {
  const idx = cart.findIndex((i) => i.productCode === product.productCode);
  if (idx > -1) {
    const next = [...cart];
    next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
    return next;
  }
  return [...cart, { ...product, quantity }];
}

export function updateQuantity(cart: CartItem[], code: string, quantity: number): CartItem[] {
  return cart.map((i) => i.productCode === code ? { ...i, quantity: Math.max(1, quantity) } : i);
}

export function removeFromCart(cart: CartItem[], code: string): CartItem[] {
  return cart.filter((i) => i.productCode !== code);
}

export function getCartSummary(cart: CartItem[]) {
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0);
  return { cartCount, cartTotal };
}
