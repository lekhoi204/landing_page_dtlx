import { SiteConfig } from "@/types/navigation";

export const siteConfig: SiteConfig = {
  brandName: "Đào Tạo Lái Xe Chuyên Nghiệp",
  shortName: "Thầy Dạy Lái Xe",
  tagline: "Vững tay lái - Vững niềm tin - Đào tạo chuẩn thực tế",
  contact: {
    hotlineDisplay: "0593.999.593",
    hotlineRaw: "0593999593",
    consultantName: "Ms. Dương",
    consultantPhoneDisplay: "0983.979307",
    consultantPhoneRaw: "0983979307",
    zaloUrl: "https://zalo.me/0983979307",
  },
  navigation: [
    { label: "Trang chủ", href: "#hero" },
    { label: "Học phí", href: "#fee-estimator" },
    { label: "Lộ trình", href: "#roadmap" },
    { label: "Sân tập", href: "#grounds" },
    { label: "Mẹo thi", href: "#tips" },
    { label: "Review", href: "#reviews" },
    { label: "Sau khi có bằng", href: "#post-license" },
  ],
};
