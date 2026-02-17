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
    image: '/products/macca1.jpg',
    tags: ['macca'],
    gallery: [
      { image: '/products/macca1.jpg', alt: 'Hạt macadamia Rio sấy khô 1' },
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
    image: '/products/macca6.jpg',
    tags: ['oil'],
    gallery: [
      { image: '/products/macca6.jpg', alt: 'Dầu macadamia Rio Farm' },
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
];

export function getProductByCode(code: string): Product | undefined {
  return products.find((p) => p.productCode === code);
}
