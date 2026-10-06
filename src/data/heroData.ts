import { HeroData } from "@/types/content";

export const heroData: HeroData = {
  eyebrow: "Khóa Học Lái Xe Ô Tô Chuẩn Quốc Gia",
  headline: "Học thật - Thi thật - Tỷ lệ đỗ >95% ngay lần đầu",
  highlightText: "Tỷ lệ đỗ >95% ngay lần đầu",
  supportingText:
    "Chương trình đào tạo thực chiến 1 kèm 1, cam kết trọn gói không phát sinh chi phí. Linh hoạt tự chọn thời gian học lý thuyết, mô phỏng 120 tình huống, 11 bài thi sa hình và vững tay lái thực tế trên đường trường.",
  primaryCtaText: "Tính chi phí & lộ trình",
  primaryCtaHref: "#fee-estimator",
  secondaryCtaText: "Đăng ký tư vấn",
  secondaryCtaHref: "#consultation",
  licensePills: [
    { code: "B1", name: "Xe số tự động", target: "Gia đình, đi làm hàng ngày" },
    { code: "B2", name: "Xe số sàn & tự động", target: "Kinh doanh, lái xe dịch vụ" },
    { code: "C", name: "Xe tải > 3.5 tấn", target: "Tài xế chuyên nghiệp" },
  ],
  trustIndicators: [
    {
      id: "no-hidden-fee",
      icon: "ShieldCheck",
      title: "Học phí trọn gói",
      description: "Minh bạch hợp đồng, không phát sinh chi phí xăng xe, bồi dưỡng",
    },
    {
      id: "one-on-one",
      icon: "UserCheck",
      title: "Giáo viên 1 kèm 1",
      description: "Tận tâm, kiên nhẫn, không quát mắng, kèm sát từng buổi học",
    },
    {
      id: "flexible-time",
      icon: "Calendar",
      title: "Lịch học linh hoạt",
      description: "Tự chọn ca sáng / chiều / tối hoặc cuối tuần không phụ thu",
    },
    {
      id: "modern-fleet",
      icon: "Car",
      title: "100% xe tập đời mới",
      description: "Vios, Accent, Fadil có máy lạnh, trợ lực lái êm ái, an toàn",
    },
  ],
  quickStats: [
    {
      value: ">95%",
      label: "Tỷ lệ đỗ lần 1",
      subtext: "Theo thống kê các khóa gần nhất",
    },
    {
      value: "1 Kèm 1",
      label: "Kèm sát thực tế",
      subtext: "Tối đa thời gian ôm vô lăng",
    },
    {
      value: "100%",
      label: "Xe có máy lạnh",
      subtext: "Tập lái êm ái, an toàn",
    },
  ],
};
