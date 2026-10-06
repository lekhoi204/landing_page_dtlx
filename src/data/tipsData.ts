import { TipsData } from "@/types/tips";

export const tipsData: TipsData = {
  badge: "Video Hướng Dẫn Thực Tế",
  title: "Video Mẹo Lái Xe Sa Hình Cùng Thầy Toàn",
  description:
    "Video bài giảng thực tế do Thầy Toàn trực tiếp hướng dẫn điểm căn mốc chuẩn xác từng centimet giúp bạn tự tin đạt 100/100 điểm thi sát hạch.",
  categories: [
    {
      id: "all",
      label: "Tất Cả Video",
      description: "Toàn bộ bài giảng video mẹo thi và kỹ năng thực hành",
    },
    {
      id: "parallel_parking",
      label: "Ghép Xe Ngang",
      description: "Mẹo căn góc 45 độ ghép xe song song vào nơi đỗ hẹp",
    },
  ],
  tips: [
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
  ],
};
