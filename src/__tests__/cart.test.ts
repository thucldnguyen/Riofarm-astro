import { describe, it, expect } from 'vitest';
import { addToCart, updateQuantity, removeFromCart, getCartSummary } from '../lib/cart';

describe('cart logic', () => {
  it('adds new product to cart', () => {
    const cart = addToCart([], { productCode: 'macca', name: 'Hạt macca', price: '120000' }, 2);
    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(2);
  });

  it('increments quantity for existing product', () => {
    const initial = [{ productCode: 'macca', name: 'Hạt macca', price: '120000', quantity: 1 }];
    const cart = addToCart(initial, { productCode: 'macca', name: 'Hạt macca', price: '120000' }, 3);
    expect(cart[0].quantity).toBe(4);
  });

  it('updates quantity with floor at 1', () => {
    const initial = [{ productCode: 'macca', name: 'Hạt macca', price: '120000', quantity: 2 }];
    const cart = updateQuantity(initial, 'macca', 0);
    expect(cart[0].quantity).toBe(1);
  });

  it('removes item', () => {
    const initial = [{ productCode: 'macca', name: 'Hạt macca', price: '120000', quantity: 2 }];
    const cart = removeFromCart(initial, 'macca');
    expect(cart).toHaveLength(0);
  });

  it('calculates summary', () => {
    const cart = [
      { productCode: 'macca', name: 'Hạt macca', price: '120000', quantity: 2 },
      { productCode: 'mix', name: 'Hạt mix', price: '100000', quantity: 1 },
    ];
    const summary = getCartSummary(cart);
    expect(summary.cartCount).toBe(3);
    expect(summary.cartTotal).toBe(340000);
  });
});
