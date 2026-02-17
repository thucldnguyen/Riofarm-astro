import { test, expect } from '@playwright/test';

test.describe('Cart & Checkout flow', () => {
  test('add to cart from product page then checkout', async ({ page }) => {
    await page.goto('/product/macca');

    await page.locator('#qty').fill('2');
    await page.locator('#add-to-cart').click();
    await expect(page.locator('#cart-feedback')).toContainText('Đã thêm 2 sản phẩm');

    await page.goto('/cart');
    await expect(page.locator('h1')).toContainText('Giỏ hàng');
    await expect(page.getByText('Hạt macadamia sấy cao cấp')).toBeVisible();
    await expect(page.locator('#cart-total')).toContainText('240.000');

    await page.locator('#checkout-btn').click();
    await expect(page).toHaveURL(/\/checkout/);
    await expect(page.locator('#checkout-items')).toContainText('Hạt macadamia sấy cao cấp × 2');

    await page.locator('#checkout-form input').first().fill('Nguyen Van A');
    await page.locator('#checkout-form input').nth(1).fill('0900000000');
    await page.locator('#checkout-form textarea').first().fill('Lâm Hà, Lâm Đồng');

    page.on('dialog', (dialog) => dialog.accept());
    await page.locator('#checkout-form button').click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('mua ngay redirects to checkout with item in cart', async ({ page }) => {
    await page.goto('/product/mix-nuts');
    await page.locator('#buy-now').click();
    await expect(page).toHaveURL(/\/checkout/);
    await expect(page.locator('#checkout-items')).toContainText('Hạt mix');
  });
});
