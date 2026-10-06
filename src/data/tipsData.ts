import { TipsData } from "@/types/tips";

export const tipsData: TipsData = {
  badge: "Thư Viện Kiến Thức & Mẹo Thi",
  title: "Tổng Hợp Video Mẹo Thi Sa Hình & Kỹ Năng Lái Xe Thực Tế",
  description:
    "Bộ video giáo trình trực quan do đội ngũ giáo viên tổng hợp, chỉ rõ các điểm căn chuẩn xác từng centimet giúp bạn tự tin đạt 100/100 điểm sa hình và ôm vô lăng an toàn.",
  categories: [
    {
      id: "all",
      label: "Tất Cả Video",
      description: "Toàn bộ bài giảng video mẹo thi và kỹ năng thực hành",
    },
    {
      id: "vertical_parking",
      label: "Ghép Xe Dọc",
      description: "Kỹ thuật lùi xe vào chuồng dọc chuẩn xác không đè vạch",
    },
    {
      id: "parallel_parking",
      label: "Ghép Xe Ngang",
      description: "Mẹo căn góc 45 độ ghép xe song song vào nơi đỗ hẹp",
    },
    {
      id: "sa_hinh",
      label: "11 Bài Sa Hình",
      description: "Bí quyết vượt qua dốc cầu đề-pa, vệt bánh xe và đường hẹp vuông góc",
    },
    {
      id: "difficult_situations",
      label: "Tình Huống Khó",
      description: "120 tình huống mô phỏng, lái xe trời mưa và lùi dốc hầm chung cư",
    },
  ],
  tips: [
    {
      id: "tip-01",
      title: "Mẹo Ghép Xe Dọc Vào Nơi Đỗ (Chuồng Dọc) Chuẩn 100/100",
      categoryId: "vertical_parking",
      categoryLabel: "Ghép Xe Dọc",
      duration: "5:20",
      difficulty: "Trọng điểm thi",
      summary:
        "Hướng dẫn chi tiết điểm căn vai ngang mép chuồng, đánh hết lái phải, nhìn gương trái lấy góc 45 độ và trả lái thẳng lùi vào chuồng an toàn.",
      keySteps: [
        "1. Cho xe chạy song song cách mép chuồng 20 - 30cm",
        "2. Vai người lái ngang giữa chuồng -> Đánh hết lái phải",
        "3. Nhìn gương trái thấy góc chuồng -> Trả lái lùi xe",
        "4. Thân xe song song -> Trả thẳng lái qua vạch vàng nhận chip",
      ],
      youtubeUrl: "https://www.youtube.com/results?search_query=meo+ghep+xe+doc+thi+sat+hach",
      viewsEstimate: "18.500+ lượt xem",
      isPlaceholder: true,
    },
    {
      id: "tip-02",
      title: "Thầy Toàn Hướng Dẫn Kỹ Thuật Ghép Xe Ngang (Chuồng Ngang) Chuẩn 100/100 Không Đè Vạch",
      categoryId: "parallel_parking",
      categoryLabel: "Ghép Xe Ngang",
      duration: "Video TikTok",
      difficulty: "Trọng điểm thi",
      platform: "tiktok",
      author: "Thầy Toàn Dạy Lái Xe",
      tiktokVideoId: "7677388767237393684",
      videoSrc: "/videos/ghep-xe-ngang-thay-toan.mp4",
      summary:
        "Video thực tế Thầy Toàn trực tiếp hướng dẫn bí quyết ghép xe ngang chuẩn 3 bước: Căn đuôi xe ngang cọc góc, đánh lái lùi 45 độ và đưa bánh sau vào vạch chip cực nhanh không đè vạch.",
      keySteps: [
        "1. Đưa xe song song cách chuồng ngang 30 - 40cm",
        "2. Đuôi xe ngang vạch đầu chuồng -> Đánh hết lái phải lùi",
        "3. Gương trái nhìn thấy góc trong chuồng -> Đánh hết lái trái",
        "4. Bánh sau đè vạch cảm ứng -> Tiếng 'Tu' nhận bài thành công",
      ],
      youtubeUrl:
        "https://www.tiktok.com/@thaytoandaylai999/video/7677388767237393684?is_from_webapp=1&sender_device=pc",
      viewsEstimate: "Video TikTok Thầy Toàn",
      isPlaceholder: false,
    },
    {
      id: "tip-03",
      title: "Bí Quyết Vượt Dốc Cầu Đề-Pa B Số Sàn & B Tự Động Không Tắt Máy, Không Trôi Xe",
      categoryId: "sa_hinh",
      categoryLabel: "11 Bài Sa Hình",
      duration: "7:10",
      difficulty: "Trọng điểm thi",
      summary:
        "Bài thi dễ mất điểm nhất: Hướng dẫn kỹ thuật phanh tay, cảm nhận độ rung côn số sàn và kỹ thuật chân ga phanh xe số tự động mượt mà.",
      keySteps: [
        "1. Nhìn cột mốc dừng đúng vạch trắng trước dốc",
        "2. Đối với B Số Sàn: Kéo phanh tay, nhả côn từ từ đến khi đầu xe rung",
        "3. Giữ nguyên chân côn, đệm nhẹ chân ga và hạ phanh tay",
        "4. Đối với B Tự Động: Giữ chân phanh, chuyển sang chân ga dứt khoát",
      ],
      youtubeUrl: "https://www.youtube.com/results?search_query=meo+de+pa+len+doc+thi+lai+xe",
      viewsEstimate: "31.000+ lượt xem",
      isPlaceholder: true,
    },
    {
      id: "tip-04",
      title: "Mẹo Qua Vệt Bánh Xe & Đường Vòng Vuông Góc (Chữ Z)",
      categoryId: "sa_hinh",
      categoryLabel: "11 Bài Sa Hình",
      duration: "4:50",
      difficulty: "Trung bình",
      summary:
        "Kỹ thuật căn núm cúc áo thẳng hàng với điểm mốc trên đường để bánh xe bên phải lọt hoàn toàn qua hàng đinh mà không chạm vạch cảm ứng.",
      keySteps: [
        "1. Căn tâm vô lăng và cúc áo thẳng điểm đánh dấu phía trước",
        "2. Giữ thẳng lái cho bánh xe lăn qua vệt đinh",
        "3. Gương ngang góc cua vuông -> Đánh nhanh hết lái",
      ],
      youtubeUrl: "https://www.youtube.com/results?search_query=meo+vet+banh+xe+sa+hinh",
      viewsEstimate: "14.800+ lượt xem",
      isPlaceholder: true,
    },
    {
      id: "tip-05",
      title: "Mẹo Đạt 50/50 Điểm 120 Tình Huống Mô Phỏng Cabin Điện Tử",
      categoryId: "difficult_situations",
      categoryLabel: "Tình Huống Khó",
      duration: "8:30",
      difficulty: "Trọng điểm thi",
      summary:
        "Tổng hợp dấu hiệu nhận biết bấm phím Space đúng thời điểm: xe trước đỏ đèn phanh, người đi bộ thò chân xuống đường hoặc biển báo giao thông xuất hiện.",
      keySteps: [
        "1. Không bấm quá sớm (dễ dính 0 điểm)",
        "2. Nhìn đèn phanh đỏ đuôi xe phía trước -> Nhấn Space ngay",
        "3. Nhìn đầu xe vượt ở ngã tư khuất tầm nhìn -> Nhấn Space",
      ],
      youtubeUrl: "https://www.youtube.com/results?search_query=meo+120+tinh+huong+mo+phong+lai+xe",
      viewsEstimate: "42.000+ lượt xem",
      isPlaceholder: true,
    },
    {
      id: "tip-06",
      title: "Kỹ Năng Lùi Xe Lên Dốc Hầm Chung Cư & Cua Hẹp Trong Phố Đông",
      categoryId: "difficult_situations",
      categoryLabel: "Tình Huống Khó",
      duration: "6:15",
      difficulty: "Cơ bản",
      summary:
        "Kinh nghiệm thực chiến sau khi có bằng: Cách căn lề đường, lấy góc cua tránh xe máy tạt đầu và kỹ thuật dừng dốc hầm an toàn tuyệt đối.",
      keySteps: [
        "1. Chỉnh gương hậu cụp xuống nhìn rõ bánh sau và gờ vỉa hè",
        "2. Tiến bám lưng - lùi bám bụng khi vào cua hẹp",
        "3. Luôn giữ khoảng cách tối thiểu 2m với xe phía trước khi dừng dốc",
      ],
      youtubeUrl: "https://www.youtube.com/results?search_query=kinh+nghiem+lai+xe+phố+dong+ham+chung+cu",
      viewsEstimate: "19.300+ lượt xem",
      isPlaceholder: true,
    },
  ],
};
