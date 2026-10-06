import { FeeEstimatorConfig, RoadmapStep } from "@/types/estimator";

// Roadmap 4 Giai Đoạn Chuẩn
const fullBeginnerRoadmap: RoadmapStep[] = [
  {
    stepNumber: 1,
    title: "Lý Thuyết & 120 Tình Huống Mô Phỏng",
    durationText: "Giai đoạn 1 (Tuần 1 - 3)",
    description:
      "Nắm vững luật giao thông đường bộ 600 câu, biển báo, văn hóa giao thông và rèn phản xạ xử lý 120 tình huống mô phỏng trên phần mềm chuẩn Tổng Cục.",
    highlights: [
      "Bộ đề 600 câu có mẹo nhớ nhanh",
      "Phần mềm thi thử 120 tình huống mô phỏng",
      "Học trực tiếp trên lớp hoặc online linh hoạt",
    ],
  },
  {
    stepNumber: 2,
    title: "Thực Hành Sa Hình & Chạy DAT Đường Trường",
    durationText: "Giai đoạn 2 (Tuần 4 - 10)",
    description:
      "Tập lái 1 kèm 1 trên xe đời mới: làm quen chân côn/ga, thành thạo 11 bài thi sa hình liên hoàn và hoàn thành 810km DAT đường trường thực tế.",
    highlights: [
      "100% xe tập đời mới có điều hòa",
      "Giáo viên 1 kèm 1 tận tình, kiên nhẫn",
      "Hoàn thành đủ 810km đường trường thiết bị DAT",
    ],
  },
  {
    stepNumber: 3,
    title: "Ôn Thi Tổng Dượt & Tập Xe Chip Sân Thi",
    durationText: "Giai đoạn 3 (Tuần 11 - 12)",
    description:
      "Tập trực tiếp trên sân sát hạch với xe gắn chip chấm điểm tự động, làm quen áp lực phòng thi và hoàn thiện các điểm trừ thường gặp.",
    highlights: [
      "Chạy xe cảm ứng gắn chip chấm điểm chuẩn",
      "Thầy giáo ngồi cùng chỉ mẹo canh điểm 100/100",
      "Thi tốt nghiệp cấp chứng chỉ nghề",
    ],
  },
  {
    stepNumber: 4,
    title: "Sát Hạch Chính Thức & Nhận Bằng",
    durationText: "Giai đoạn 4 (Tuần 13 - 14)",
    description:
      "Tham gia kỳ thi sát hạch do Sở GTVT tổ chức. Tự tin vượt qua 4 phần thi: Lý thuyết, Mô phỏng, Sa hình và Đường trường để nhận bằng lái xe.",
    highlights: [
      "Đội ngũ thầy cô hỗ trợ tại sân thi",
      "Tỷ lệ đỗ ngay lần đầu >95%",
      "Nhận bằng sau 7 - 14 ngày làm việc",
    ],
  },
];

const examPrepRoadmap: RoadmapStep[] = [
  {
    stepNumber: 1,
    title: "Kiểm Tra Trình Độ & Cập Nhật Luật Mới",
    durationText: "Buổi 1 - 2",
    description: "Đánh giá kỹ năng hiện tại, rà soát 60 câu điểm liệt lý thuyết và 120 tình huống mô phỏng theo phần mềm cập nhật mới nhất.",
    highlights: ["Rà soát 60 câu điểm liệt", "Mẹo đạt điểm tối đa mô phỏng"],
  },
  {
    stepNumber: 2,
    title: "Khắc Phục Lỗi Sai Sa Hình 11 Bài",
    durationText: "Buổi 3 - 6",
    description: "Luyện chuyên sâu các bài khó: Dừng & khởi hành xe ngang dốc (đề pa), Ghép xe dọc, Ghép xe ngang vào nơi đỗ và qua vệt bánh xe.",
    highlights: ["Mẹo canh điểm căn chuẩn từng bài", "Kỹ thuật chống tắt máy đề-pa dốc"],
  },
  {
    stepNumber: 3,
    title: "Tổng Dượt Xe Cảm Ứng Chip Sân Thi",
    durationText: "Buổi 7 - 8",
    description: "Chạy thử các vòng thi tính điểm thực tế trên xe sát hạch chính thức để căn thời gian và làm quen hệ thống loa báo điểm.",
    highlights: ["Chạy thử sa hình xe chip", "Ổn định tâm lý thi cử"],
  },
  {
    stepNumber: 4,
    title: "Sát Hạch & Cấp Giấy Phép Lái Xe",
    durationText: "Ngày thi",
    description: "Tự tin thi sát hạch với tỷ lệ đỗ cao nhất, có giáo viên đồng hành tại hội đồng thi.",
    highlights: ["Hỗ trợ thủ tục phòng thi", "Nhận bằng nhanh chóng"],
  },
];

const postLicenseRoadmap: RoadmapStep[] = [
  {
    stepNumber: 1,
    title: "Làm Quen Xe Thực Tế & Cảm Giác Không Gian",
    durationText: "Buổi 1",
    description: "Thầy hướng dẫn làm quen các nút bấm trên xe thực tế, chỉnh gương, ghế, căn lề đường, căn khoảng cách mũi xe và đuôi xe.",
    highlights: ["Căn chuẩn kích thước xe", "Kỹ năng quay đầu trong phố hẹp"],
  },
  {
    stepNumber: 2,
    title: "Luyện Lái Phố Đông & Giờ Cao Điểm",
    durationText: "Buổi 2 - 3",
    description: "Tập lái trong điều kiện giao thông đông đúc, ngã tư đèn đỏ, bùng binh, lùi chuồng hầm chung cư, trung tâm thương mại.",
    highlights: ["Ghép xe thực tế giữa 2 xe thật", "Xử lý tình huống xe máy tạt đầu"],
  },
  {
    stepNumber: 3,
    title: "Luyện Lái Cao Tốc, Quốc Lộ & Đèo Dốc",
    durationText: "Buổi 4",
    description: "Thực hành nhập làn cao tốc tốc độ cao (100 - 120km/h), giữ khoảng cách an toàn, vượt xe an toàn và xử lý phanh gấp.",
    highlights: ["Kỹ năng chuyển làn cao tốc", "Lái xe an toàn trời mưa/ban đêm"],
  },
  {
    stepNumber: 4,
    title: "Tự Tin Độc Lập Cầm Lái 100%",
    durationText: "Tổng kết",
    description: "Học viên hoàn toàn tự tin tự lái xe gia đình đi làm, đi công tác, đưa đón gia đình an toàn trên mọi cung đường.",
    highlights: ["Tự tin ôm vô lăng độc lập", "Tư vấn kinh nghiệm chăm sóc xe"],
  },
];

export const courseData: FeeEstimatorConfig = {
  categories: [
    {
      id: "B1",
      name: "Bằng Lái B1 (Số Tự Động)",
      code: "B1",
      vehicleType: "Ô tô số tự động dưới 9 chỗ, xe tải tự động < 3.5 tấn",
      minAge: 18,
      description: "Dễ học, không lo tắt máy giữa dốc, phù hợp lái xe gia đình và đi làm hàng ngày.",
      popular: true,
      badge: "Phổ biến nhất",
      icon: "Car",
    },
    {
      id: "B2",
      name: "Bằng Lái B2 (Số Sàn & Tự Động)",
      code: "B2",
      vehicleType: "Ô tô số sàn & tự động dưới 9 chỗ, xe tải < 3.5 tấn",
      minAge: 18,
      description: "Lái được cả số sàn và số tự động, phù hợp kinh doanh vận tải, taxi, chạy dịch vụ.",
      popular: false,
      badge: "Kinh doanh / Đa dụng",
      icon: "Gauge",
    },
    {
      id: "C",
      name: "Bằng Lái Hạng C (Xe Tải)",
      code: "C",
      vehicleType: "Ô tô tải trên 3.5 tấn, ô tô chở người dưới 9 chỗ",
      minAge: 21,
      description: "Dành cho tài xế chuyên nghiệp điều khiển xe tải nặng, xe đầu kéo, cơ hội việc làm rộng mở.",
      popular: false,
      badge: "Tài xế chuyên nghiệp",
      icon: "Truck",
    },
    {
      id: "D",
      name: "Nâng Hạng Bằng D (Xe Khách)",
      code: "D",
      vehicleType: "Ô tô chở người từ 10 đến 30 chỗ ngồi",
      minAge: 24,
      description: "Khóa nâng hạng từ B2 hoặc C lên D dành cho tài xế có kinh nghiệm và đủ số năm thâm niên.",
      popular: false,
      badge: "Nâng hạng",
      icon: "Bus",
    },
  ],

  goals: [
    {
      id: "beginner",
      title: "Học Từ Đầu Trọn Gói",
      subtitle: "Chưa từng lái xe hoặc mới bắt đầu",
      description: "Đào tạo trọn gói từ cơ bản đến nâng cao, bao gồm toàn bộ lý thuyết, sa hình, 810km DAT đường trường và hồ sơ thi.",
      badge: "Khuyên dùng",
      icon: "Sparkles",
    },
    {
      id: "exam_prep",
      title: "Ôn Thi & Luyện Sa Hình",
      subtitle: "Đã biết lái cơ bản, cần thi sát hạch",
      description: "Tập trung rèn 11 bài thi sa hình, khắc phục lỗi đề-pa dốc, ghép xe và tổng dượt trên xe gắn chip cảm ứng.",
      badge: "Cấp tốc",
      icon: "Target",
    },
    {
      id: "post_license",
      title: "Bổ Túc Tay Lái Thực Tế",
      subtitle: "Đã có bằng nhưng còn yếu tay lái",
      description: "Rèn phản xạ phố đông, leo dốc hầm chung cư, lùi chuồng hẹp, chạy cao tốc tốc độ cao trên xe thực tế của thầy hoặc học viên.",
      badge: "Tự tin lái xe",
      icon: "Compass",
    },
  ],

  schedules: [
    {
      id: "morning",
      title: "Ca Sáng",
      timeRange: "07:30 - 11:30",
      description: "Không khí mát mẻ, đầu óc tỉnh táo, sân tập thoáng rộng.",
      icon: "Sun",
    },
    {
      id: "afternoon",
      title: "Ca Chiều",
      timeRange: "13:30 - 17:30",
      description: "Thời gian linh động, thuận tiện xếp lịch giữa các ngày trong tuần.",
      icon: "Sunset",
    },
    {
      id: "evening",
      title: "Ca Tối (Ngoài Giờ)",
      timeRange: "18:00 - 21:00",
      description: "Phù hợp cho người bận rộn đi làm, luyện kỹ năng lái xe ban đêm.",
      badge: "Tiện cho dân văn phòng",
      icon: "Moon",
    },
    {
      id: "weekend",
      title: "Thứ 7 & Chủ Nhật",
      timeRange: "Sáng / Chiều cuối tuần",
      description: "Không lo vướng bận công việc ngày thường, không phụ thu thêm phí cuối tuần.",
      badge: "Không phụ thu",
      icon: "CalendarCheck",
    },
  ],

  // Bảng giá cấu hình mẫu tách bạch hoàn toàn - Dễ dàng cập nhật giá thực tế bất kỳ lúc nào
  pricingMatrix: {
    B1: {
      beginner: {
        baseTuition: 16500000,
        isPlaceholderPrice: true,
        practiceHours: 36,
        estimatedDuration: "3.5 - 4 tháng",
        datKilometers: 810,
        priceNote: "Dự toán trọn gói tham khảo (Bao gồm hồ sơ, học phí, sân tập, xăng xe, giáo viên 1 kèm 1)",
        benefits: [
          "Trọn gói đào tạo 1 kèm 1 trên xe tự động đời mới",
          "Hoàn thành đủ 810km đường trường thiết bị DAT",
          "Học sa hình chuẩn 11 bài trên sân sát hạch",
          "Phần mềm luyện 600 câu lý thuyết & 120 tình huống mô phỏng",
          "Hỗ trợ chia học phí làm 2 - 3 đợt linh hoạt",
        ],
      },
      exam_prep: {
        baseTuition: 4500000,
        isPlaceholderPrice: true,
        practiceHours: 12,
        estimatedDuration: "2 - 3 tuần",
        priceNote: "Dự toán khóa ôn tập cấp tốc & tổng dượt xe chip",
        benefits: [
          "Rà soát 11 bài thi sa hình trọng điểm",
          "Tập trực tiếp với xe gắn chip cảm ứng",
          "Chỉ rõ mẹo canh điểm 100/100 từ giám khảo",
          "Luyện phản xạ 120 tình huống mô phỏng",
        ],
      },
      post_license: {
        baseTuition: 3200000,
        isPlaceholderPrice: true,
        practiceHours: 10,
        estimatedDuration: "1 - 2 tuần",
        priceNote: "Dự toán gói bổ túc tay lái theo giờ/buổi (khoảng 300k - 350k/giờ)",
        benefits: [
          "Bổ túc đường phố thực tế giờ cao điểm",
          "Tập lùi chuồng hầm chung cư, trung tâm thương mại",
          "Trải nghiệm cao tốc và đường đèo dốc",
          "Thầy ngồi cạnh hỗ trợ chân phanh an toàn 100%",
        ],
      },
    },

    B2: {
      beginner: {
        baseTuition: 15500000,
        isPlaceholderPrice: true,
        practiceHours: 40,
        estimatedDuration: "3.5 - 4 tháng",
        datKilometers: 810,
        priceNote: "Dự toán trọn gói tham khảo hạng B2 số sàn & số tự động",
        benefits: [
          "Học lái cả xe số sàn và số tự động",
          "Kỹ thuật côn - ga - phanh mượt mà không tắt máy",
          "Đủ 810km thiết bị giám sát hành trình DAT",
          "Tập sa hình trên sân chuẩn thi quốc gia",
          "Hỗ trợ đóng học phí nhiều đợt",
        ],
      },
      exam_prep: {
        baseTuition: 4200000,
        isPlaceholderPrice: true,
        practiceHours: 12,
        estimatedDuration: "2 - 3 tuần",
        priceNote: "Dự toán khóa ôn luyện sa hình & xe chip B2",
        benefits: [
          "Khắc phục triệt để lỗi đề-pa dốc số sàn",
          "Ghép xe dọc, ghép xe ngang chuẩn xác từng centimet",
          "Chạy xe chip cảm ứng chấm điểm thi thử",
          "Giáo viên kèm riêng từng buổi ôn",
        ],
      },
      post_license: {
        baseTuition: 3000000,
        isPlaceholderPrice: true,
        practiceHours: 10,
        estimatedDuration: "1 - 2 tuần",
        priceNote: "Dự toán gói bổ túc tay lái B2 thực chiến",
        benefits: [
          "Côn ga thuần thục khi kẹt xe đường dốc",
          "Căn lề, quay đầu, lùi chuồng hẹp thực tế",
          "Thực hành chạy quốc lộ và cao tốc",
          "Tự tin lái mọi dòng xe số sàn lẫn số tự động",
        ],
      },
    },

    C: {
      beginner: {
        baseTuition: 19500000,
        isPlaceholderPrice: true,
        practiceHours: 48,
        estimatedDuration: "5 - 6 tháng",
        datKilometers: 825,
        priceNote: "Dự toán trọn gói tham khảo hạng C xe tải hạng nặng",
        benefits: [
          "Tập lái trên xe tải tiêu chuẩn đào tạo",
          "Đủ 825km DAT đường trường theo quy chuẩn",
          "Luyện 11 bài thi sa hình xe tải rộng rãi",
          "Thực hành kiểm tra an toàn kỹ thuật xe tải",
          "Cam kết không phát sinh phụ phí xăng xe",
        ],
      },
      exam_prep: {
        baseTuition: 5500000,
        isPlaceholderPrice: true,
        practiceHours: 16,
        estimatedDuration: "3 - 4 tuần",
        priceNote: "Dự toán khóa ôn luyện sa hình & xe chip hạng C",
        benefits: [
          "Chạy sa hình xe tải với chip cảm ứng",
          "Kỹ thuật căn đuôi xe tải và góc cua hẹp",
          "Mẹo thi lý thuyết và mô phỏng xe tải",
          "Luyện thi cấp tốc với giáo viên lâu năm",
        ],
      },
      post_license: {
        baseTuition: 4000000,
        isPlaceholderPrice: true,
        practiceHours: 12,
        estimatedDuration: "2 tuần",
        priceNote: "Dự toán bổ túc xe tải thực tế",
        benefits: [
          "Chạy xe tải trên đường phố và đường ngoại thành",
          "Luyện kỹ năng lùi xe vào kho bãi, bến bãi",
          "Xử lý điểm mù góc nhìn xe tải an toàn",
        ],
      },
    },

    D: {
      beginner: {
        baseTuition: 11500000,
        isPlaceholderPrice: true,
        practiceHours: 24,
        estimatedDuration: "2 - 2.5 tháng",
        priceNote: "Dự toán khóa nâng hạng B2/C lên D (Yêu cầu đủ năm kinh nghiệm & km an toàn)",
        benefits: [
          "Hồ sơ nâng hạng trọn gói theo đúng quy định",
          "Thực hành lái xe khách 10 - 30 chỗ",
          "Luyện sa hình xe khách trên sân chuẩn",
          "Học lý thuyết và văn hóa phục vụ hành khách",
        ],
      },
      exam_prep: {
        baseTuition: 4000000,
        isPlaceholderPrice: true,
        practiceHours: 10,
        estimatedDuration: "2 tuần",
        priceNote: "Dự toán ôn thi sa hình xe khách hạng D",
        benefits: [
          "Tổng dượt sa hình xe khách có chip",
          "Mẹo canh điểm xe khách thân dài",
          "Hỗ trợ thủ tục phòng thi sát hạch",
        ],
      },
      post_license: {
        baseTuition: 3500000,
        isPlaceholderPrice: true,
        practiceHours: 10,
        estimatedDuration: "1 - 2 tuần",
        priceNote: "Dự toán bổ túc đường trường xe khách",
        benefits: [
          "Căn khoảng cách và bán kính quay vòng xe khách",
          "Kỹ năng đón trả khách và dừng đỗ an toàn",
        ],
      },
    },
  },

  roadmaps: {
    beginner: fullBeginnerRoadmap,
    exam_prep: examPrepRoadmap,
    post_license: postLicenseRoadmap,
  },
};
