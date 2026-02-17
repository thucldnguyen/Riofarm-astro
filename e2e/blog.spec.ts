import { test, expect } from '@playwright/test';

test.describe('Blog Index', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('blog page loads', async ({ page }) => {
    await expect(page).toHaveTitle(/Blog/);
  });

  test('hero is visible', async ({ page }) => {
    await expect(page.locator('.hero-root')).toBeVisible();
  });

  test('all 4 blog posts are listed', async ({ page }) => {
    const cards = page.locator('.blog-preview-grid .blog-preview-card');
    await expect(cards).toHaveCount(4);
  });

  test('cau-chuyen-san-pham link exists', async ({ page }) => {
    const link = page.getByRole('link', { name: /Câu chuyện sản phẩm/i });
    await expect(link.first()).toBeVisible();
    await expect(link.first()).toHaveAttribute('href', '/blog/cau-chuyen-san-pham');
  });

  test('tai-sao-chon-rio-macca link exists', async ({ page }) => {
    const link = page.getByRole('link', { name: /3 lý do/i });
    await expect(link.first()).toBeVisible();
  });

  test('co-so-dat-chuan link exists', async ({ page }) => {
    const link = page.getByRole('link', { name: /Cơ sở sản xuất/i });
    await expect(link.first()).toBeVisible();
  });

  test('lo-hang-202307 link exists', async ({ page }) => {
    const link = page.getByRole('link', { name: /Lô hàng/i });
    await expect(link.first()).toBeVisible();
  });
});

test.describe('Blog Post: Câu chuyện sản phẩm', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto('/blog/cau-chuyen-san-pham');
    await expect(page).toHaveTitle(/Câu chuyện sản phẩm/);
  });

  test('content renders', async ({ page }) => {
    await page.goto('/blog/cau-chuyen-san-pham');
    await expect(page.locator('article.blog-content')).toBeVisible();
    await expect(page.locator('article.blog-content').getByText('Rio Macca').first()).toBeVisible();
  });

  test('breadcrumbs work', async ({ page }) => {
    await page.goto('/blog/cau-chuyen-san-pham');
    await expect(page.locator('.breadcrumbs')).toBeVisible();
    await expect(page.locator('.breadcrumbs a[href="/blog"]')).toBeVisible();
  });
});

test.describe('Blog Post: Tại sao chọn Rio Macca', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto('/blog/tai-sao-chon-rio-macca');
    await expect(page).toHaveTitle(/3 lý do/);
  });

  test('content renders', async ({ page }) => {
    await page.goto('/blog/tai-sao-chon-rio-macca');
    await expect(page.locator('article.blog-content')).toBeVisible();
  });
});

test.describe('Blog Post: Cơ sở đạt tiêu chuẩn', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto('/blog/co-so-dat-chuan');
    await expect(page).toHaveTitle(/Cơ sở sản xuất/);
  });

  test('content renders', async ({ page }) => {
    await page.goto('/blog/co-so-dat-chuan');
    await expect(page.locator('article.blog-content')).toBeVisible();
  });
});

test.describe('Blog Post: Lô hàng 202307', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto('/blog/lo-hang-202307');
    await expect(page).toHaveTitle(/Lô hàng/);
  });

  test('content renders', async ({ page }) => {
    await page.goto('/blog/lo-hang-202307');
    await expect(page.locator('article.blog-content')).toBeVisible();
  });
});
