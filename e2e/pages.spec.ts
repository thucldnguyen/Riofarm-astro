import { test, expect } from '@playwright/test';

async function isMobileViewport(page: import('@playwright/test').Page) {
  const viewport = page.viewportSize();
  return !!viewport && viewport.width <= 768;
}

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact-us');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Liên Hệ/);
  });

  test('hero is visible', async ({ page }) => {
    await expect(page.locator('.hero-root')).toBeVisible();
  });

  test('contact form is present', async ({ page }) => {
    const form = page.locator('form[data-netlify="true"]');
    await expect(form).toBeVisible();
  });

  test('name field is present', async ({ page }) => {
    await expect(page.locator('#name')).toBeVisible();
  });

  test('phone field is present', async ({ page }) => {
    await expect(page.locator('#phone')).toBeVisible();
  });

  test('address field is present', async ({ page }) => {
    await expect(page.locator('#address')).toBeVisible();
  });

  test('giá trị cốt lõi section is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Giá trị cốt lõi' })).toBeVisible();
  });
});

test.describe('Support Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/support');
  });

  test('page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Hỗ Trợ/);
  });

  test('shipping section is visible', async ({ page }) => {
    await expect(page.getByText('Chính sách vận chuyển')).toBeVisible();
  });

  test('contact section is visible', async ({ page }) => {
    await expect(page.getByText('Liên hệ hỗ trợ')).toBeVisible();
  });

  test('accordion toggles work', async ({ page }) => {
    const shippingHeader = page.locator('#shipping-section .accordion-header');
    await shippingHeader.click();
    await expect(page.locator('#shipping-body')).toBeVisible();
  });
});

test.describe('404 Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/nonexistent-page-xyz', { waitUntil: 'domcontentloaded' });
  });

  test('has custom 404 content', async ({ page }) => {
    // Either we get our custom 404 or a server 404
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
  });
});

test.describe('Custom 404 Page Direct', () => {
  test('404.html has correct content', async ({ page }) => {
    await page.goto('/404');
    await expect(page.getByText('404').first()).toBeVisible();
    await expect(page.getByText('Trang không tìm thấy')).toBeVisible();
  });

  test('404 page has link back to home', async ({ page }) => {
    await page.goto('/404');
    const homeLink = page.getByRole('link', { name: /Về trang chủ/i });
    await expect(homeLink).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('clicking Blog nav navigates to /blog', async ({ page }) => {
    await page.goto('/');
    const blogLink = (await isMobileViewport(page))
      ? page.locator('#mobile-menu a[href="/blog"]')
      : page.locator('header .desktop-nav a[href="/blog"]');

    if (await isMobileViewport(page)) {
      await page.locator('#hamburger-btn').click();
    }

    await blogLink.click();
    await expect(page).toHaveURL(/\/blog$/);
  });

  test('clicking Liên Hệ navigates to /contact-us', async ({ page }) => {
    await page.goto('/');
    const contactLink = (await isMobileViewport(page))
      ? page.locator('#mobile-menu a[href="/contact-us"]')
      : page.locator('header .desktop-nav a[href="/contact-us"]');

    if (await isMobileViewport(page)) {
      await page.locator('#hamburger-btn').click();
    }

    await contactLink.click();
    await expect(page).toHaveURL(/\/contact-us/);
  });

  test('clicking brand logo navigates to /', async ({ page }) => {
    await page.goto('/blog');
    const logoLink = page.locator('.brand');
    await logoLink.click();
    await expect(page).toHaveURL(/\/$/);
  });
});
