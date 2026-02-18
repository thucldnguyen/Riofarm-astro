export interface ProductGalleryItem {
  image: string;
  alt: string;
}

export interface Product {
  productCode: string;
  name: string;
  vendor: string;
  price: string;
  alt: string;
  image: string;
  gallery: ProductGalleryItem[];
  description: string;
  tags: string[];
}

export const products: Product[] = [
  {
    productCode: 'macca',
    name: 'Hạt macadamia sấy cao cấp',
    vendor: 'Rio Farm',
    price: '120000',
    alt: 'hạt macadamia sấy cao cấp',
    image: '/blogs/macca-story04.jpg',
    tags: ['macca'],
    gallery: [
      { image: '/blogs/macca-story04.jpg', alt: 'Hạt macadamia Rio sấy khô — hộp và túi' },
      { image: '/products/macca2.jpg', alt: 'Hạt macadamia Rio sấy khô 2' },
      { image: '/products/macca3.jpg', alt: 'Hạt macadamia Rio sấy khô 3' },
      { image: '/products/macca4.jpg', alt: 'Hạt macadamia Rio sấy khô 4' },
    ],
    description: 'Hạt macadamia do cơ sở Rio Macca sản xuất có nguồn gốc tại chỗ, sấy và đóng gói ở Lâm Hà, Lâm Đồng.',
  },
  {
    productCode: 'macca-oil',
    name: 'Dầu Macca',
    vendor: 'Rio Farm',
    price: '120000',
    alt: 'dầu macadamia Rio Farm',
    image: '/products/dau-macca.jpg',
    tags: ['oil'],
    gallery: [
      { image: '/products/dau-macca.jpg', alt: 'Dầu macadamia Rio Farm' },
      { image: '/products/dau-macca2.jpg', alt: 'Dầu macadamia Rio Farm 2' },
    ],
    description: 'Dầu macadamia do cơ sở Rio Macca sản xuất có nguồn gốc tại chỗ, ép lạnh và đóng gói ở Lâm Hà, Lâm Đồng.',
  },
  {
    productCode: 'mix-nuts',
    name: 'Hạt mix',
    vendor: 'Rio Farm',
    price: '120000',
    alt: 'hạt mix Rio Farm',
    image: '/products/hat_mix.jpg',
    tags: ['mix'],
    gallery: [
      { image: '/products/hat_mix.jpg', alt: 'Hạt mix Rio Farm' },
    ],
    description: 'Hỗn hợp các loại hạt dinh dưỡng do cơ sở Rio Macca tuyển chọn và đóng gói ở Lâm Hà, Lâm Đồng.',
  },
  {
    productCode: 'hat-de-cuoi',
    name: 'Hạt Dẻ Cười',
    vendor: 'Rio Farm',
    price: '0',
    alt: 'hạt dẻ cười pistachio Rio Farm',
    image: '/products/hat_de_cuoi_1.jpg',
    tags: ['hat', 'pistachio'],
    gallery: [
      { image: '/products/hat_de_cuoi_1.jpg', alt: 'Hạt dẻ cười Rio Farm 1' },
      { image: '/products/hat_de_cuoi_2.jpg', alt: 'Hạt dẻ cười Rio Farm 2' },
      { image: '/products/hat_de_cuoi_3.jpg', alt: 'Hạt dẻ cười Rio Farm 3' },
    ],
    description: 'Hạt dẻ cười (pistachio) Rio Farm — tuyển chọn kỹ, rang vừa lửa, đóng gói kín khí. Giàu protein, chất béo không bão hòa đơn, chất xơ và các vi chất thiết yếu như vitamin B6, kali, magiê. Thơm bùi, vỏ nứt tự nhiên, tiện lợi ăn vặt mọi lúc.',
  },
  {
    productCode: 'hanh-nhan-rang-bo',
    name: 'Hạnh Nhân Rang Bơ',
    vendor: 'Rio Farm',
    price: '0',
    alt: 'hạnh nhân rang bơ Rio Farm',
    image: '/products/hanh_nhan_rang_bo.jpg',
    tags: ['hat', 'almond'],
    gallery: [
      { image: '/products/hanh_nhan_rang_bo.jpg', alt: 'Hạnh nhân rang bơ Rio Farm' },
    ],
    description: 'Hạnh nhân rang bơ thơm ngậy, giàu vitamin E và chất béo tốt. Đóng gói tiêu chuẩn tại riofarm.vn, hạn sử dụng 6 tháng.',
  },
  {
    productCode: 'hat-dieu-rang-muoi',
    name: 'Hạt Điều Rang Muối',
    vendor: 'Rio Farm',
    price: '0',
    alt: 'hạt điều rang muối Rio Farm',
    image: '/products/hat_dieu_rang_muoi.jpg',
    tags: ['hat', 'cashew'],
    gallery: [
      { image: '/products/hat_dieu_rang_muoi.jpg', alt: 'Hạt điều rang muối Rio Farm' },
    ],
    description: 'Hạt điều rang muối RIO - 99.9% hạt điều tự nhiên, 1% muối. Đóng hộp 500gr, NSX 30/01/2026, HSD 6 tháng. Địa chỉ: Đoàn Kết, Đan Phượng, Lâm Hà, Lâm Đồng.',
  },
  {
    productCode: 'nam-viet-quat-kho',
    name: 'Nam Việt Quất Khô',
    vendor: 'Rio Farm',
    price: '0',
    alt: 'nam việt quất khô Rio Farm',
    image: '/products/nam_viet_quat_kho.jpg',
    tags: ['say', 'berry'],
    gallery: [
      { image: '/products/nam_viet_quat_kho.jpg', alt: 'Nam việt quất khô Rio Farm' },
    ],
    description: 'Nam việt quất khô (dried blueberry/cranberry) phân phối bởi Rio Macca. Dùng ăn trực tiếp hoặc làm bánh mứt. Nguồn gốc tự nhiên, không chất bảo quản.',
  },
  {
    productCode: 'mit-say',
    name: 'Mít Sấy',
    vendor: 'Rio Farm',
    price: '0',
    alt: 'mít sấy Rio Farm',
    image: '/products/mit_say_1.jpg',
    tags: ['say', 'jackfruit'],
    gallery: [
      { image: '/products/mit_say_1.jpg', alt: 'Mít sấy Rio Farm 1' },
      { image: '/products/mit_say_2.jpg', alt: 'Mít sấy Rio Farm 2' },
    ],
    description: 'Mít sấy 100% nguyên chất tự nhiên. Mít thái không đường, vị ngọt tự nhiên. Đóng túi các size, giao hàng toàn quốc.',
  },
  {
    productCode: 'xoai-say-deo',
    name: 'Xoài Sấy Dẻo',
    vendor: 'Rio Farm',
    price: '0',
    alt: 'xoài sấy dẻo Rio Farm',
    image: '/products/xoai_say_deo.jpg',
    tags: ['say', 'mango'],
    gallery: [
      { image: '/products/xoai_say_deo.jpg', alt: 'Xoài sấy dẻo Rio Farm' },
    ],
    description: 'Xoài sấy dẻo RIO - ngọt mềm tự nhiên, đóng hộp kín. Phân phối bởi Rio Macca, Lâm Hà. HSD 6 tháng. Dùng ăn trực tiếp.',
  },
];

export function getProductByCode(code: string): Product | undefined {
  return products.find((p) => p.productCode === code);
}
