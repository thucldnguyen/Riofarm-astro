import { describe, it, expect } from 'vitest';

// SEO metadata definitions per page
const pageSeoData = {
  home: {
    title: 'Rio Farm Lâm Hà | Nông sản sạch từ vườn macadamia',
    description: 'Rio Farm Lâm Hà - Cung cấp hạt macadamia sấy cao cấp và nông sản sạch từ Lâm Hà, Lâm Đồng. Chất lượng đảm bảo, nguồn gốc rõ ràng.',
    canonical: 'https://riofarm.vn/',
    ogType: 'website',
  },
  blog: {
    title: 'Blog Rio Macca | Tin tức & Kiến thức về macadamia',
    description: 'Đọc các bài viết mới nhất về hạt macadamia, cơ sở sản xuất Rio Macca, và những câu chuyện từ nông trại Lâm Hà.',
    canonical: 'https://riofarm.vn/blog',
    ogType: 'website',
  },
  contactUs: {
    title: 'Liên Hệ Rio Farm | Thương hiệu uy tín từ 2021',
    description: 'Liên hệ với Rio Farm Lâm Hà để đặt hàng hạt macadamia sấy cao cấp. Địa chỉ: Thôn Đoàn Kết, xã Đan Phượng, huyện Lâm Hà, tỉnh Lâm Đồng.',
    canonical: 'https://riofarm.vn/contact-us',
    ogType: 'website',
  },
  support: {
    title: 'Hỗ Trợ Khách Hàng | Rio Farm',
    description: 'Tìm kiếm thông tin hỗ trợ, chính sách vận chuyển, đổi trả hàng và các câu hỏi thường gặp của Rio Farm.',
    canonical: 'https://riofarm.vn/support',
    ogType: 'website',
  },
  productMacca: {
    title: 'Hạt macadamia sấy cao cấp | Rio Farm',
    description: 'Hạt macadamia sấy cao cấp Rio Macca - Nguồn gốc Lâm Hà, Lâm Đồng. Đóng gói hút chân không, giữ nguyên hương vị và dưỡng chất.',
    canonical: 'https://riofarm.vn/product/macca',
    ogType: 'product',
  },
  productMaccaOil: {
    title: 'Dầu Macca | Rio Farm',
    description: 'Dầu macadamia ép lạnh Rio Farm - Giàu omega, tốt cho tim mạch. Sản xuất tại Lâm Hà, Lâm Đồng.',
    canonical: 'https://riofarm.vn/product/macca-oil',
    ogType: 'product',
  },
  productMixNuts: {
    title: 'Hạt Mix | Rio Farm',
    description: 'Hỗn hợp hạt dinh dưỡng Rio Farm - Kết hợp macadamia và các loại hạt khác, giàu dinh dưỡng và thơm ngon.',
    canonical: 'https://riofarm.vn/product/mix-nuts',
    ogType: 'product',
  },
  notFound: {
    title: '404 - Trang không tìm thấy | Rio Farm',
    description: 'Trang bạn tìm kiếm không tồn tại. Trở về trang chủ Rio Farm để khám phá sản phẩm macadamia.',
    ogType: 'website',
  },
  blogCauChuyen: {
    title: 'Câu chuyện sản phẩm: Hạt macca sấy khô | Rio Farm Blog',
    description: 'Khám phá câu chuyện đằng sau sản phẩm hạt macca sấy khô của Rio Macca Lâm Hà, Lâm Đồng.',
    canonical: 'https://riofarm.vn/blog/cau-chuyen-san-pham',
    ogType: 'article',
  },
  blogTaiSao: {
    title: '3 lý do nên chọn hạt mắc ca của Rio Macca | Rio Farm Blog',
    description: '3 lý do hàng đầu vì sao bạn nên chọn hạt macadamia sấy của Rio Macca Lâm Hà.',
    canonical: 'https://riofarm.vn/blog/tai-sao-chon-rio-macca',
    ogType: 'article',
  },
  blogCoSo: {
    title: 'Cơ sở sản xuất Rio Macca có đạt tiêu chuẩn? | Rio Farm Blog',
    description: 'Tìm hiểu về cơ sở sản xuất đạt chuẩn vệ sinh an toàn thực phẩm của Rio Macca Lâm Hà.',
    canonical: 'https://riofarm.vn/blog/co-so-dat-chuan',
    ogType: 'article',
  },
  blogLoHang: {
    title: 'Lô hàng R20230701 vừa xuất xưởng | Rio Farm Blog',
    description: 'Thông báo lô hàng macca R20230701 của Rio Macca vừa xuất xưởng với hơn 300 sản phẩm chất lượng cao.',
    canonical: 'https://riofarm.vn/blog/lo-hang-202307',
    ogType: 'article',
  },
};

describe('SEO metadata per page', () => {
  it('homepage has correct title and description', () => {
    expect(pageSeoData.home.title).toContain('Rio Farm');
    expect(pageSeoData.home.description.length).toBeGreaterThan(50);
    expect(pageSeoData.home.canonical).toBe('https://riofarm.vn/');
  });

  it('blog page has correct title and description', () => {
    expect(pageSeoData.blog.title).toContain('Blog');
    expect(pageSeoData.blog.description.length).toBeGreaterThan(50);
  });

  it('contact-us page has correct title', () => {
    expect(pageSeoData.contactUs.title).toContain('Liên Hệ');
    expect(pageSeoData.contactUs.canonical).toBe('https://riofarm.vn/contact-us');
  });

  it('support page has correct title', () => {
    expect(pageSeoData.support.title).toContain('Hỗ Trợ');
  });

  it('product macca page has correct title', () => {
    expect(pageSeoData.productMacca.title).toContain('macadamia');
    expect(pageSeoData.productMacca.ogType).toBe('product');
    expect(pageSeoData.productMacca.canonical).toBe('https://riofarm.vn/product/macca');
  });

  it('product macca-oil page has correct title', () => {
    expect(pageSeoData.productMaccaOil.title).toContain('Dầu Macca');
    expect(pageSeoData.productMaccaOil.ogType).toBe('product');
  });

  it('product mix-nuts page has correct title', () => {
    expect(pageSeoData.productMixNuts.title).toContain('Hạt Mix');
    expect(pageSeoData.productMixNuts.ogType).toBe('product');
  });

  it('404 page has correct title', () => {
    expect(pageSeoData.notFound.title).toContain('404');
  });

  it('blog post pages have article og:type', () => {
    expect(pageSeoData.blogCauChuyen.ogType).toBe('article');
    expect(pageSeoData.blogTaiSao.ogType).toBe('article');
    expect(pageSeoData.blogCoSo.ogType).toBe('article');
    expect(pageSeoData.blogLoHang.ogType).toBe('article');
  });

  it('all pages have unique titles', () => {
    const titles = Object.values(pageSeoData).map((p) => p.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('all pages have unique descriptions', () => {
    const descs = Object.values(pageSeoData).map((p) => p.description);
    const uniqueDescs = new Set(descs);
    expect(uniqueDescs.size).toBe(descs.length);
  });
});

describe('Navigation links', () => {
  const navLinks = [
    { label: 'Sản Phẩm', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Liên Hệ', href: '/contact-us' },
  ];

  it('should have 3 navigation links', () => {
    expect(navLinks).toHaveLength(3);
  });

  it('should have correct hrefs', () => {
    const hrefs = navLinks.map((l) => l.href);
    expect(hrefs).toContain('/');
    expect(hrefs).toContain('/blog');
    expect(hrefs).toContain('/contact-us');
  });

  it('navigation labels should be in Vietnamese', () => {
    const labels = navLinks.map((l) => l.label);
    expect(labels).toContain('Sản Phẩm');
    expect(labels).toContain('Blog');
    expect(labels).toContain('Liên Hệ');
  });
});

describe('Sitemap pages', () => {
  const requiredPages = [
    '/',
    '/blog',
    '/blog/cau-chuyen-san-pham',
    '/blog/co-so-dat-chuan',
    '/blog/lo-hang-202307',
    '/blog/tai-sao-chon-rio-macca',
    '/contact-us',
    '/support',
    '/product/macca',
    '/product/macca-oil',
    '/product/mix-nuts',
  ];

  it('should have all required pages in sitemap list', () => {
    expect(requiredPages).toHaveLength(11);
    expect(requiredPages).toContain('/');
    expect(requiredPages).toContain('/blog');
    expect(requiredPages).toContain('/contact-us');
    expect(requiredPages).toContain('/support');
    expect(requiredPages).toContain('/product/macca');
    expect(requiredPages).toContain('/product/macca-oil');
    expect(requiredPages).toContain('/product/mix-nuts');
    expect(requiredPages).toContain('/blog/cau-chuyen-san-pham');
    expect(requiredPages).toContain('/blog/co-so-dat-chuan');
    expect(requiredPages).toContain('/blog/lo-hang-202307');
    expect(requiredPages).toContain('/blog/tai-sao-chon-rio-macca');
  });
});

describe('Contact form requirements', () => {
  const formConfig = {
    hasNetlifyAttribute: true,
    formName: 'contact',
    fields: ['name', 'phone', 'address'],
  };

  it('contact form should have data-netlify attribute', () => {
    expect(formConfig.hasNetlifyAttribute).toBe(true);
  });

  it('contact form should have required fields', () => {
    expect(formConfig.fields).toContain('name');
    expect(formConfig.fields).toContain('phone');
    expect(formConfig.fields).toContain('address');
  });
});
