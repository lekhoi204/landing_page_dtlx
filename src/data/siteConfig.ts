import { SiteConfig } from "@/types/navigation";

export const siteConfig: SiteConfig = {
  brandName: "Thầy Toàn Dạy Lái Xe",
  shortName: "Thầy Toàn Dạy Lái Xe",
  tagline: "Vững tay lái - Vững niềm tin - Đào tạo chuẩn thực tế",
  contact: {
    hotlineDisplay: "0593.999.593",
    hotlineRaw: "0593999593",
    consultantName: "Ms. Dương",
    consultantPhoneDisplay: "0983.979307",
    consultantPhoneRaw: "0983979307",
    zaloUrl: "https://zalo.me/0983979307",
    tiktokUrl: "https://www.tiktok.com/@thaytoandaylai999?is_from_webapp=1&sender_device=pc",
  },
  navigation: [
    { label: "Trang chủ", href: "#hero" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Cam kết", href: "#commitments" },
    { label: "Giáo viên", href: "#instructors" },
    { label: "Sân tập", href: "#grounds" },
    { label: "Mẹo thi", href: "#tips" },
    { label: "Gói đặc biệt", href: "#special-packages" },
    { label: "Sau khi có bằng", href: "#post-license" },
  ],
};
