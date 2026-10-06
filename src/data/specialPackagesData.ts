import { SpecialPackagesData } from "@/types/specialPackages";

export const specialPackagesData: SpecialPackagesData = {
  badge: "Dịch Vụ Đào Tạo Cao Cấp",
  title: "Gói Dịch Vụ Đào Tạo Đưa Đón Tận Nhà",
  description:
    "Giải pháp đào tạo cá nhân hóa tiện lợi giúp học viên tiết kiệm tối đa thời gian di chuyển: Giáo viên đón tận nơi theo đúng lịch hẹn của bạn.",
  assuranceNote:
    "Gói dịch vụ đặc biệt được cam kết rõ ràng trong hợp đồng đào tạo, đảm bảo chuẩn số giờ thực hành và tỷ lệ đỗ cao nhất.",
  packages: [
    {
      id: "pkg-door-to-door",
      code: "door_to_door",
      title: "Gói Học Lái Xe Đưa Đón Tận Nhà",
      badge: "Tiện Lợi & Tiết Kiệm Thời Gian",
      tagline: "Thầy đón tận cửa - Học lái ngay trên cung đường bạn đi hàng ngày",
      description:
        "Giải pháp tối ưu cho những học viên bận rộn: Giáo viên sẽ lái xe tập lái đến đón bạn tận nhà hoặc cơ quan, cùng bạn luyện tay lái thực tế ngay trên các tuyến đường bạn thường xuyên di chuyển.",
      targetAudience:
        "Dành cho người bận rộn, doanh nhân, nhân viên văn phòng, phụ huynh hoặc người không tiện phương tiện di chuyển đến sân tập.",
      highlights: [
        "Giáo viên đánh xe đến đón tận cửa nhà / cơ quan theo đúng giờ hẹn",
        "Thực hành lái xe trực tiếp trên cung đường hàng ngày (Nhà -> Cơ quan -> Trường học con)",
        "Không tốn thời gian di chuyển, tiết kiệm 1 - 2 tiếng mỗi buổi học",
        "Chủ động xếp lịch học linh hoạt: sáng sớm, giờ nghỉ trưa, tan tầm hoặc cuối tuần",
        "Áp dụng cho cả khóa học mới từ đầu lẫn các gói bổ túc tay lái",
      ],
      vehicleNote: "Xe tập lái chuẩn kiểm định, trang bị đầy đủ máy lạnh & thắng phụ an toàn",
      pricingEstimateNote: "Chi phí trọn gói linh hoạt theo bán kính khu vực đưa đón",
      ctaText: "Đăng Ký Gói Đưa Đón Tận Nhà",
      themeColor: "brand",
      icon: "MapPinHouse",
      isPlaceholder: false,
    },
  ],
};
