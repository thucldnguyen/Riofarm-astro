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
    description: 'Hạt macadamia sấy nguyên vỏ từ vườn Lâm Hà, Lâm Đồng — cao nguyên ở độ cao ~1.000 m, khí hậu lý tưởng cho cây mắc ca. Giàu chất béo không bão hòa đơn (oleic acid) bậc nhất trong các loại hạt, hỗ trợ tim mạch và não bộ. Đạt chứng nhận OCOP 3 sao, đóng gói hút chân không hoặc lon PET.',
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
    description: 'Dầu macadamia ép từ hạt mắc ca nguyên chất tại cơ sở Rio Macca, Lâm Hà. Tỷ lệ axit oleic (omega-9) cao đến 80% — vượt trội hơn dầu ô liu. Dùng được cho nấu ăn, trộn salad, và dưỡng da tóc tự nhiên.',
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
    description: 'Hỗn hợp các loại hạt dinh dưỡng được Rio Farm tuyển chọn và đóng gói tại Lâm Hà: macca, hạnh nhân, điều, dẻ cười và hơn thế nữa. Bữa ăn nhẹ cân bằng dinh dưỡng — cung cấp protein, chất béo lành mạnh, vitamin và khoáng chất từ nhiều nguồn hạt khác nhau.',
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
    description: 'Hạnh nhân nguyên hạt rang bơ vừa chín — béo thơm, giòn rụm, đậm vị. Giàu vitamin E, magiê và chất béo không bão hòa. Một trong những nguồn protein thực vật và canxi tốt nhất trong các loại hạt.',
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
    description: 'Hạt điều rang muối vừa ăn — béo bùi, mặn nhẹ, khó cưỡng. Giàu kẽm, sắt, đồng và magiê. Là loại hạt có hàm lượng sắt cao nhất — rất tốt cho người thiếu máu và phụ nữ.',
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
    description: 'Nam việt quất khô (dried cranberry) — vị chua ngọt tự nhiên, dẻo mềm, màu đỏ đẹp mắt. Nổi tiếng với hàm lượng proanthocyanidin cao, hỗ trợ sức khỏe đường tiết niệu và chống oxy hóa mạnh. Dùng ăn vặt, trộn salad, pha trà hoặc làm bánh.',
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
    description: 'Mít sấy giòn từ mít chín tươi — ngọt tự nhiên, thơm mùi mít đặc trưng, giòn tan không ngấy. Không dầu chiên, không phẩm màu. Nguồn cung cấp vitamin C, B6, kali và chất xơ tiêu hóa tốt.',
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
    description: 'Xoài sấy dẻo từ xoài chín ngọt — dẻo mềm, đậm vị xoài, màu vàng cam hấp dẫn. Giữ lại vitamin C, beta-carotene và kali từ xoài tươi. Ăn vặt lành mạnh, không chất bảo quản nhân tạo.',
  },
];

export function getProductByCode(code: string): Product | undefined {
  return products.find((p) => p.productCode === code);
}
