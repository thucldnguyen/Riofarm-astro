import { test, expect } from '@playwright/test';

async function isMobileViewport(page: import('@playwright/test').Page) {
  const viewport = page.viewportSize();
  return !!viewport && viewport.width <= 768;
}

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero loads with correct title', async ({ page }) => {
    await expect(page.locator('.hero-title').first()).toContainText('Rio Farm');
  });

  test('hero image is visible', async ({ page }) => {
    const heroImg = page.locator('.hero-image').first();
    await expect(heroImg).toBeVisible();
  });

  test('navigation has correct links', async ({ page }) => {
    if (await isMobileViewport(page)) {
      await page.locator('#hamburger-btn').click();
      const mobileNav = page.locator('#mobile-menu');
      await expect(mobileNav.getByRole('link', { name: 'Sản Phẩm' })).toBeVisible();
      await expect(mobileNav.getByRole('link', { name: 'Blog' })).toBeVisible();
      await expect(mobileNav.getByRole('link', { name: 'Liên Hệ' })).toBeVisible();
      return;
    }

    const nav = page.locator('header .desktop-nav');
    await expect(nav.getByRole('link', { name: 'Sản Phẩm' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Liên Hệ' })).toBeVisible();
  });

  test('products section is visible', async ({ page }) => {
    const grid = page.locator('.product-collection-grid');
    await grid.scrollIntoViewIfNeeded();
    await expect(grid).toBeVisible();
  });

  test('blog preview section is visible', async ({ page }) => {
    await expect(page.getByText('Blog Rio Macca').first()).toBeVisible();
    await expect(page.locator('.blog-preview-grid')).toBeVisible();
  });

  test('contact form is visible with data-netlify', async ({ page }) => {
    const form = page.locator('form[data-netlify="true"]').first();
    await expect(form).toBeVisible();
  });

  test('contact form has name field', async ({ page }) => {
    await expect(page.locator('#name').first()).toBeVisible();
  });

  test('contact form has phone field', async ({ page }) => {
    await expect(page.locator('#phone').first()).toBeVisible();
  });

  test('contact form has address field', async ({ page }) => {
    await expect(page.locator('#address').first()).toBeVisible();
  });

  test('social grid is visible', async ({ page }) => {
    await expect(page.locator('#social-grid')).toBeVisible();
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Rio Farm/);
  });
});
