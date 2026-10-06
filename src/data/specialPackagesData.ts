import { SpecialPackagesData } from "@/types/specialPackages";

export const specialPackagesData: SpecialPackagesData = {
  badge: "Dịch Vụ Đào Tạo Đặc Biệt",
  title: "Các Gói Dịch Vụ Đào Tạo Cá Nhân Hóa",
  description:
    "Được thiết kế chuyên biệt để đáp ứng tối đa nhu cầu của từng nhóm học viên: từ dịch vụ đưa đón tại nhà tiện lợi đến chương trình học riêng biệt cùng nữ giáo viên tận tâm.",
  assuranceNote:
    "Mọi gói dịch vụ đặc biệt đều được cam kết rõ ràng trong hợp đồng đào tạo, đảm bảo chuẩn số giờ thực hành và tỷ lệ đỗ cao nhất.",
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
    {
      id: "pkg-female-instructor",
      code: "female_instructor",
      title: "Gói Học Kèm 1-1 Cùng Nữ Giáo Viên",
      badge: "Nhẹ Nhàng & Thấu Hiểu Tâm Lý",
      tagline: "Không gian học thoải mái, tỉ mỉ, kiên nhẫn - Tuyệt đối không quát mắng",
      description:
        "Chương trình đào tạo được thiết kế dành riêng cho phái nữ: Được kèm cặp trực tiếp bởi các nữ giáo viên chuẩn sư phạm của trung tâm, giúp gỡ bỏ hoàn toàn tâm lý lo lắng sau vô lăng.",
      targetAudience:
        "Dành cho chị em phụ nữ, học viên nữ mới bắt đầu, người hay bị hồi hộp, giật mình hoặc muốn học cùng cô giáo hướng dẫn nhẹ nhàng, tỉ mỉ.",
      highlights: [
        "100% giáo viên nữ có chứng chỉ sư phạm dạy nghề của Sở GTVT",
        "Hướng dẫn nhẹ nhàng, kiên nhẫn, điềm tĩnh, chia sẻ kinh nghiệm lái xe an toàn cho phái nữ",
        "Phương pháp căn lề, chỉnh gương, cảm nhận chân ga chân phanh cực kỳ tỉ mỉ và dễ nhớ",
        "Rèn thói quen chống nhầm chân ga - chân phanh và xử lý các tình huống bất ngờ",
        "Luyện kỹ năng lùi xe hầm chung cư, ghép xe phố đông và ghé trung tâm mua sắm",
      ],
      vehicleNote: "Xe số tự động đời mới, trang bị máy lạnh, tay lái trợ lực điện êm ái",
      pricingEstimateNote: "Học phí tương đương gói chuẩn - Không phụ thu thêm phí",
      ctaText: "Đăng Ký Học Với Nữ Giáo Viên",
      themeColor: "rose",
      icon: "UserHeart",
      isPlaceholder: false,
    },
  ],
};
