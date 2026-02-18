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
  {
    slug: 'so-sanh-hat-macca',
    title: 'Macca vs Hạnh Nhân vs Óc Chó vs Hạt Điều — Loại nào tốt nhất?',
    category: 'Kiến thức',
    excerpt: 'So sánh hạt macca với hạnh nhân, óc chó và hạt điều về dinh dưỡng. Loại nào phù hợp với bạn?',
    image: '/blogs/riomacca2.jpeg',
    alt: 'Hạt mắc ca tươi và sấy khô của Rio Macca',
    link: '/blog/so-sanh-hat-macca',
    publishDate: '2025-06-01',
    description: 'So sánh hạt macca với hạnh nhân, óc chó và hạt điều về dinh dưỡng, lợi ích sức khỏe. Loại nào phù hợp với bạn?',
  },
  {
    slug: 'cach-an-hat-macca',
    title: '5 Cách Ăn Hạt Macca Ngon Nhất Bạn Chưa Thử',
    category: 'Ẩm thực',
    excerpt: '5 cách ăn hạt macca sáng tạo nhất — từ ăn vặt trực tiếp đến làm bánh và pha cacao.',
    image: '/blogs/cach-an-macca.jpg',
    alt: 'Thưởng thức hạt macca Rio Macca trực tiếp từ hộp',
    link: '/blog/cach-an-hat-macca',
    publishDate: '2025-06-15',
    description: '5 cách ăn hạt macca ngon và sáng tạo nhất — từ ăn vặt trực tiếp đến nấu ăn, làm bánh và pha cacao.',
  },
  {
    slug: 'bao-quan-hat-macca',
    title: 'Bảo Quản Hạt Macca Đúng Cách — Giữ Trọn Hương Vị Tươi Lâu',
    category: 'Mẹo hay',
    excerpt: 'Hướng dẫn bảo quản hạt macca đúng cách để giữ hương vị tươi ngon lâu nhất.',
    image: '/blogs/macca-story03.jpg',
    alt: 'Đóng gói hạt macca trong lọ kín tại cơ sở Rio Macca',
    link: '/blog/bao-quan-hat-macca',
    publishDate: '2025-07-01',
    description: 'Hướng dẫn bảo quản hạt macca đúng cách để giữ hương vị tươi ngon lâu dài — từ nhiệt độ, ánh sáng đến cách nhận biết hạt hỏng.',
  },
  {
    slug: 'khoi-nghiep-rio-macca',
    title: 'Từ Cô Gái Nông Dân Đến Thương Hiệu Macca Lâm Hà — Câu Chuyện Khởi Nghiệp Của Rio Macca',
    category: 'Câu chuyện',
    excerpt: 'Câu chuyện khởi nghiệp của Nguyễn Thị Ánh — cô gái 9x Lâm Hà dám bắt đầu khi thị trường macca đang khó nhất.',
    image: '/blogs/anh-founder.png',
    alt: 'Nguyễn Thị Ánh - Founder Rio Macca',
    link: '/blog/khoi-nghiep-rio-macca',
    publishDate: '2025-07-15',
    description: 'Câu chuyện khởi nghiệp của Nguyễn Thị Ánh — cô gái 9x Lâm Hà đã biến nỗi trăn trở của người nông dân thành thương hiệu macca được tin yêu khắp cả nước.',
  },
  {
    slug: 'quy-trinh-san-xuat',
    title: 'Từ Vườn Đến Tay Bạn: Quy Trình Sản Xuất Chuẩn Của Rio Macca',
    category: 'Chất lượng',
    excerpt: 'Toàn bộ quy trình từ vườn đến tay bạn: nguyên liệu 10 năm tuổi, sấy chuẩn cùng ngày, đóng gói hút chân không có QR xác minh.',
    image: '/blogs/macca-story05.jpg',
    alt: 'Hạt mắc ca trên giàn sấy tại cơ sở Rio Macca Lâm Hà',
    link: '/blog/quy-trinh-san-xuat',
    publishDate: '2025-08-01',
    description: 'Toàn bộ quy trình từ vườn đến tay bạn của Rio Macca: nguyên liệu 10 năm tuổi, sấy chuẩn cùng ngày thu hái, đóng gói hút chân không, có QR xác minh.',
  },
  {
    slug: 'hat-macca-lam-ha',
    title: "Vì Sao Hạt Macca Lâm Hà Được Gọi Là 'Nữ Hoàng Quả Khô'?",
    category: 'Kiến thức',
    excerpt: "Tại sao macca được mệnh danh là 'nữ hoàng quả khô'? Và điều gì làm cho macca Lâm Hà đặc biệt hơn nơi khác?",
    image: '/blogs/coso6.jpeg',
    alt: 'Hạt mắc ca Lâm Hà — đặc sản vùng cao nguyên',
    link: '/blog/hat-macca-lam-ha',
    publishDate: '2025-08-15',
    description: "Tại sao macca được gọi là 'nữ hoàng quả khô'? Và tại sao vùng đất Lâm Hà lại đặc biệt phù hợp với loại cây này? Câu trả lời từ chính những người trồng và chế biến macca.",
  },
];
