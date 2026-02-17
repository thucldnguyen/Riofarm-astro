export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  link: string;
  publishDate: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cau-chuyen-san-pham',
    title: 'Câu chuyện sản phẩm: Hạt macca sấy khô',
    category: 'Macadamia',
    excerpt: 'Sản phẩm Macca RIO - Hạt macca sấy khô',
    image: '/blogs/macca-story01.jpg',
    alt: 'Câu chuyện sản phẩm',
    link: '/blog/cau-chuyen-san-pham',
    publishDate: '2023-07-01',
    description: 'Khám phá câu chuyện đằng sau sản phẩm hạt macca sấy khô của Rio Macca Lâm Hà, Lâm Đồng.',
  },
  {
    slug: 'tai-sao-chon-rio-macca',
    title: '3 lý do nên chọn hạt mắc ca của Rio Macca',
    category: 'Macadamia',
    excerpt: 'Hạt macadamia của Rio Macca Lâm Hà có chất lượng tuyệt vời',
    image: '/blogs/macadamia-nuts.jpeg',
    alt: 'Tại sao nên chọn hạt mắc ca của Rio Macca',
    link: '/blog/tai-sao-chon-rio-macca',
    publishDate: '2023-07-15',
    description: '3 lý do hàng đầu vì sao bạn nên chọn hạt macadamia sấy của Rio Macca Lâm Hà.',
  },
  {
    slug: 'co-so-dat-chuan',
    title: 'Cơ sở sản xuất Rio Macca có đạt tiêu chuẩn?',
    category: 'General',
    excerpt: 'Nhà xưởng sản xuất mắc ca của Rio Macca đặt tại Lâm Hà - Lâm Đồng.',
    image: '/blogs/coso3.jpeg',
    alt: 'cơ sở đạt tiêu chuẩn',
    link: '/blog/co-so-dat-chuan',
    publishDate: '2023-08-01',
    description: 'Tìm hiểu về cơ sở sản xuất đạt chuẩn vệ sinh an toàn thực phẩm của Rio Macca Lâm Hà.',
  },
  {
    slug: 'lo-hang-202307',
    title: 'Lô hàng R20230701 vừa xuất xưởng',
    category: 'News',
    excerpt: 'Lô hàng R20230701 của Rio Macca vừa xuất xưởng với hơn 300 sản phẩm.',
    image: '/blogs/coso2.jpeg',
    alt: 'lô hàng R20230701',
    link: '/blog/lo-hang-202307',
    publishDate: '2023-07-01',
    description: 'Thông báo lô hàng macca R20230701 của Rio Macca vừa xuất xưởng với hơn 300 sản phẩm chất lượng cao.',
  },
];
