import { test, expect } from '@playwright/test';

// These tests simulate mobile by setting a mobile viewport
test.describe('Mobile Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport to trigger mobile styles
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('hamburger button is visible on mobile', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('#hamburger-btn');
    await expect(hamburger).toBeVisible();
  });

  test('mobile menu opens when hamburger is clicked', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('#hamburger-btn');
    await hamburger.click();
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toHaveClass(/open/);
  });

  test('mobile menu has navigation links', async ({ page }) => {
    await page.goto('/');
    const hamburger = page.locator('#hamburger-btn');
    await hamburger.click();
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(mobileMenu.getByRole('link', { name: 'Liên Hệ' })).toBeVisible();
  });

  test('mobile menu closes when nav link clicked', async ({ page }) => {
    await page.goto('/');
    await page.locator('#hamburger-btn').click();
    await page.locator('#mobile-menu a[href="/blog"]').click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('contact form is accessible on mobile', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('form[data-netlify="true"]').first();
    await expect(form).toBeVisible();
  });

  test('product grid is visible on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.product-collection-grid')).toBeVisible();
  });
});
