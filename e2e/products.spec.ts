import { test, expect } from '@playwright/test';

test.describe('Product: Macca', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/product/macca');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/macadamia/i);
  });

  test('product name is visible', async ({ page }) => {
    await expect(page.locator('#product-name, h1').first()).toContainText('macadamia');
  });

  test('main product image is visible', async ({ page }) => {
    const img = page.locator('#main-product-img');
    await expect(img).toBeVisible();
  });

  test('contact label is displayed instead of fixed price', async ({ page }) => {
    await expect(page.locator('#product-price-label')).toContainText('Liên hệ');
  });

  test('order button is visible', async ({ page }) => {
    await expect(page.locator('#buy-now')).toBeVisible();
  });

  test('breadcrumbs are visible', async ({ page }) => {
    await expect(page.locator('.breadcrumbs')).toBeVisible();
  });
});

test.describe('Product: Macca Oil', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/product/macca-oil');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Dầu Macca/);
  });

  test('product name is visible', async ({ page }) => {
    const h1 = page.locator('main h1').first();
    await expect(h1).toContainText('Dầu Macca');
  });

  test('product image is visible', async ({ page }) => {
    const img = page.locator('img').first();
    await expect(img).toBeVisible();
  });
});

test.describe('Product: Mix Nuts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/product/mix-nuts');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Hạt Mix/);
  });

  test('product name is visible', async ({ page }) => {
    const h1 = page.locator('main h1').first();
    await expect(h1).toContainText('Hạt mix');
  });

  test('product image is visible', async ({ page }) => {
    const img = page.locator('img').first();
    await expect(img).toBeVisible();
  });
});
