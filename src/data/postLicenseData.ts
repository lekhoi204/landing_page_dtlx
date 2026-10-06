import { PostLicenseData } from "@/types/postLicense";

export const postLicenseData: PostLicenseData = {
  badge: "Đồng Hành Dài Lâu",
  title: "Góc Sau Khi Có Bằng - Cẩm Nang & Đặc Quyền Dành Cho Học Viên",
  description:
    "Nhận bằng lái chỉ là bước khởi đầu. Chúng tôi tiếp tục đồng hành cùng bạn với cẩm nang lái xe an toàn, kinh nghiệm mua xe, bảo dưỡng và các ưu đãi độc quyền từ mạng lưới đối tác.",
  categories: [
    {
      id: "all",
      label: "Tất Cả Cẩm Nang",
      icon: "Layers",
      description: "Toàn bộ bài viết chia sẻ kinh nghiệm và ưu đãi",
    },
    {
      id: "buying_first_car",
      label: "1. Mua Xe Lần Đầu",
      icon: "ShoppingBag",
      description: "Kinh nghiệm chọn xe, thủ tục đăng ký và sang tên đổi chủ",
    },
    {
      id: "car_maintenance",
      label: "2. Bảo Dưỡng Xe",
      icon: "Wrench",
      description: "Kiểm tra cơ bản, lịch bảo dưỡng và đọc đèn cảnh báo",
    },
    {
      id: "driving_experience",
      label: "3. Kinh Nghiệm Lái",
      icon: "Compass",
      description: "Chạy cao tốc, đường dài, đi đêm và xử lý sự cố khẩn cấp",
    },
    {
      id: "partner_perks",
      label: "4. Ưu Đãi Đối Tác",
      icon: "Gift",
      description: "Voucher giảm giá showroom, gara và bảo hiểm thân vỏ",
    },
  ],
  articles: [
    // 1. Mua Xe Lần Đầu
    {
      id: "art-buy-01",
      categoryId: "buying_first_car",
      categoryLabel: "Mua Xe Lần Đầu",
      title: "Cẩm Nang Mua Ô Tô Lần Đầu: Nên Chọn Xe Mới Hay Xe Lướt?",
      summary:
        "Phân tích ưu nhược điểm giữa xe mới 100% và xe lướt đã qua sử dụng, cách cân đối ngân sách lăn bánh và chọn phân khúc xe (Sedan hạng B, CUV hạng A/B) phù hợp với người mới lái.",
      readTime: "4 phút đọc",
      badge: "Kinh nghiệm mua xe",
      keyPoints: [
        "Cách tính chính xác tổng chi phí lăn bánh (thuế trước bạ, biển số, bảo hiểm)",
        "5 dấu hiệu nhận biết xe lướt từng bị đâm đụng hoặc thủy kích",
        "Có nên vay trả góp mua ô tô lần đầu không?",
      ],
      actionLabel: "Xem chi tiết cẩm nang",
      isPlaceholder: true,
    },
    {
      id: "art-buy-02",
      categoryId: "buying_first_car",
      categoryLabel: "Mua Xe Lần Đầu",
      title: "Quy Trình Thủ Tục Đăng Ký, Bấm Biển Số & Sang Tên Đổi Chủ Mới Nhất",
      summary:
        "Hướng dẫn từng bước thực hiện thủ tục đăng ký xe mới, kê khai lệ phí trước bạ điện tử, thủ tục thu hồi và sang tên đổi chủ xe cũ theo đúng thông tư mới nhất.",
      readTime: "5 phút đọc",
      badge: "Thủ tục pháp lý",
      keyPoints: [
        "Hồ sơ cần chuẩn bị khi đi nộp thuế và bấm biển số định danh",
        "Thủ tục rút hồ sơ gốc và sang tên đổi chủ chính chủ",
        "Kinh nghiệm làm thủ tục nhanh gọn không mất tiền dịch vụ",
      ],
      actionLabel: "Xem hướng dẫn thủ tục",
      isPlaceholder: true,
    },

    // 2. Bảo Dưỡng Xe
    {
      id: "art-maint-01",
      categoryId: "car_maintenance",
      categoryLabel: "Bảo Dưỡng Xe",
      title: "4 Hạng Mục Kiểm Tra Xe Cơ Bản Tài Mới Phải Nắm Rõ",
      summary:
        "Tự kiểm tra dầu động cơ bằng que thăm dầu, nước làm mát máy, mực nước rửa kính và áp suất lốp trước mỗi chuyến đi xa giúp xe luôn bền bỉ và tiết kiệm nhiên liệu.",
      readTime: "3 phút đọc",
      badge: "Kiểm tra cơ bản",
      keyPoints: [
        "Cách đo áp suất lốp đúng chuẩn (2.2 - 2.5 bar tùy dòng xe)",
        "Nhận biết màu sắc dầu động cơ cần thay thế",
        "Cách châm nước làm mát máy xe đúng loại không gây đóng cặn",
      ],
      actionLabel: "Xem hướng dẫn tự kiểm tra",
      isPlaceholder: true,
    },
    {
      id: "art-maint-02",
      categoryId: "car_maintenance",
      categoryLabel: "Bảo Dưỡng Xe",
      title: "Lịch Bảo Dưỡng Định Kỳ & Ý Nghĩa Các Đèn Cảnh Báo Táp-lô Thường Gặp",
      summary:
        "Hiểu rõ các mốc bảo dưỡng 5.000km, 10.000km, 20.000km, 40.000km và phân biệt đèn cảnh báo màu vàng (cần kiểm tra sớm) với đèn màu đỏ (phải dừng xe ngay lập tức).",
      readTime: "4 phút đọc",
      badge: "Bảo dưỡng định kỳ",
      keyPoints: [
        "Đèn đỏ: Áp suất dầu nhớt, Nhiệt độ nước làm mát, Hệ thống phanh",
        "Đèn vàng: Check Engine (lỗi động cơ), Áp suất lốp, Đèn ABS",
        "Bảng chi phí bảo dưỡng định kỳ các cấp xe phổ thông",
      ],
      actionLabel: "Xem bảng mã đèn táp-lô",
      isPlaceholder: true,
    },

    // 3. Kinh Nghiệm Lái Thực Tế
    {
      id: "art-drive-01",
      categoryId: "driving_experience",
      categoryLabel: "Kinh Nghiệm Lái",
      title: "Kỹ Năng Lái Xe Trên Đường Cao Tốc (100 - 120km/h) An Toàn Tuyệt Đối",
      summary:
        "Quy tắc nhập làn cao tốc dứt khoát, giữ khoảng cách 4 giây an toàn, kỹ thuật chuyển làn có xi-nhan dứt khoát và nguyên tắc tuyệt đối không đi bám đuôi xe tải nặng.",
      readTime: "5 phút đọc",
      badge: "Lái xe cao tốc",
      keyPoints: [
        "Cách tính khoảng cách an toàn theo tốc độ (vận tốc - 30m)",
        "Xử lý khi xe bị nổ lốp ở tốc độ cao: giữ chặt vô lăng, không phanh gấp",
        "Kỹ năng thoát hiểm khi xe gặp sự cố trên cao tốc",
      ],
      actionLabel: "Đọc cẩm nang cao tốc",
      isPlaceholder: true,
    },
    {
      id: "art-drive-02",
      categoryId: "driving_experience",
      categoryLabel: "Kinh Nghiệm Lái",
      title: "Kinh Nghiệm Lái Xe Ban Đêm, Trời Mưa Lớn & Chống Ngập Nước Thủy Kích",
      summary:
        "Bí quyết sử dụng đèn pha/cos văn minh, kỹ thuật căn vạch kẻ đường khi trời mưa tối, mẹo chống mờ kính lái và nguyên tắc vàng không để xe bị thủy kích chết máy.",
      readTime: "4 phút đọc",
      badge: "Xử lý tình huống",
      keyPoints: [
        "Quy tắc đi số thấp, giữ đều chân ga qua vũng nước ngập",
        "Nếu xe chết máy trong nước ngập: Tuyệt đối không đề nổ lại",
        "Cách chống lóa mắt khi xe đối diện bật pha vô ý thức",
      ],
      actionLabel: "Xem mẹo xử lý ngập nước",
      isPlaceholder: true,
    },

    // 4. Ưu Đãi Đối Tác
    {
      id: "art-perk-01",
      categoryId: "partner_perks",
      categoryLabel: "Ưu Đãi Đối Tác",
      title: "Ưu Đãi Độc Quyền Tại Showroom Ô Tô & Gói Phụ Kiện Chính Hãng",
      summary:
        "Học viên tốt nghiệp tại trung tâm được nhận voucher giảm giá trực tiếp từ 10 - 20 triệu khi mua xe tại các đại lý liên kết (Toyota, Hyundai, Kia, Honda, VinFast).",
      readTime: "Đặc quyền học viên",
      badge: "Ưu đãi Showroom",
      partnerOfferText: "Tặng gói bảo hiểm thân vỏ 1 năm + Phim cách nhiệt",
      keyPoints: [
        "Hỗ trợ lái thử xe tận nhà trước khi quyết định mua",
        "Tặng kèm camera hành trình 4K và thảm lót sàn cao cấp",
        "Tư vấn gói vay ngân hàng lãi suất ưu đãi nhất",
      ],
      actionLabel: "Nhận mã ưu đãi mua xe",
      isPlaceholder: true,
    },
    {
      id: "art-perk-02",
      categoryId: "partner_perks",
      categoryLabel: "Ưu Đãi Đối Tác",
      title: "Voucher Giảm 30% Dịch Vụ Chăm Sóc Xe, Dán Phim & Phủ Ceramic",
      summary:
        "Mạng lưới trung tâm chăm sóc xe (Detailing) liên kết dành riêng cho học viên trung tâm: Rửa xe bọt tuyết chuyên sâu, dán phim cách nhiệt 3M/Ceramic và khử mùi nội thất.",
      readTime: "Đặc quyền học viên",
      badge: "Chăm sóc & Gara",
      partnerOfferText: "Giảm 30% toàn bộ dịch vụ Detailing & Phủ bóng",
      keyPoints: [
        "Miễn phí kiểm tra 20 hạng mục an toàn xe trước mỗi chuyến đi xa",
        "Giảm 30% chi phí dán phim cách nhiệt chống nóng chính hãng",
        "Ưu tiên phục vụ không phải xếp hàng chờ đợi",
      ],
      actionLabel: "Nhận mã giảm giá chăm sóc xe",
      isPlaceholder: true,
    },
  ],
  communityCallout: {
    title: "Gia Nhập Cộng Đồng Học Viên & Tài Xế Văn Minh",
    description:
      "Nơi giao lưu, giải đáp thắc mắc về kỹ năng lái xe thực tế, hỗ trợ nhau khi gặp sự cố trên đường và cập nhật các luật giao thông mới nhất.",
    ctaText: "Tham Gia Nhóm Zalo Học Viên",
  },
};
