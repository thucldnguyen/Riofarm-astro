import { describe, it, expect } from 'vitest';
import { blogPosts } from '../data/blog';
import { products, getProductByCode } from '../data/products';

describe('Blog data', () => {
  it('should have 4 blog posts', () => {
    expect(blogPosts).toHaveLength(4);
  });

  it('should have correct slugs for all required blog posts', () => {
    const slugs = blogPosts.map((b) => b.slug);
    expect(slugs).toContain('cau-chuyen-san-pham');
    expect(slugs).toContain('tai-sao-chon-rio-macca');
    expect(slugs).toContain('co-so-dat-chuan');
    expect(slugs).toContain('lo-hang-202307');
  });

  it('each blog post should have required fields', () => {
    blogPosts.forEach((post) => {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.image).toBeTruthy();
      expect(post.link).toBeTruthy();
      expect(post.publishDate).toBeTruthy();
      expect(post.description).toBeTruthy();
    });
  });

  it('blog post links should match /blog/<slug>', () => {
    blogPosts.forEach((post) => {
      expect(post.link).toBe(`/blog/${post.slug}`);
    });
  });

  it('each blog post should have a valid image path', () => {
    blogPosts.forEach((post) => {
      expect(post.image).toMatch(/^\//);
    });
  });
});

describe('Product data', () => {
  it('should have 9 products', () => {
    expect(products).toHaveLength(9);
  });

  it('should have macca product', () => {
    const macca = getProductByCode('macca');
    expect(macca).toBeDefined();
    expect(macca?.name).toBe('Hạt macadamia sấy cao cấp');
    expect(macca?.vendor).toBe('Rio Farm');
    expect(macca?.price).toBe('120000');
  });

  it('should have macca-oil product', () => {
    const oil = getProductByCode('macca-oil');
    expect(oil).toBeDefined();
    expect(oil?.name).toBe('Dầu Macca');
  });

  it('should have mix-nuts product', () => {
    const mix = getProductByCode('mix-nuts');
    expect(mix).toBeDefined();
    expect(mix?.name).toBe('Hạt mix');
  });

  it('each product should have a gallery with at least one image', () => {
    products.forEach((product) => {
      expect(product.gallery.length).toBeGreaterThan(0);
      product.gallery.forEach((img) => {
        expect(img.image).toMatch(/^\//);
        expect(img.alt).toBeTruthy();
      });
    });
  });

  it('each product should have all required fields', () => {
    products.forEach((product) => {
      expect(product.productCode).toBeTruthy();
      expect(product.name).toBeTruthy();
      expect(product.vendor).toBe('Rio Farm');
      expect(product.price).toBeTruthy();
      expect(product.image).toBeTruthy();
      expect(product.description).toBeTruthy();
    });
  });

  it('getProductByCode returns undefined for unknown code', () => {
    expect(getProductByCode('unknown')).toBeUndefined();
  });
});
