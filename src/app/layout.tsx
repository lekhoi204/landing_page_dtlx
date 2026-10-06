import type { Metadata, Viewport } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { MobileBottomBar } from "@/components/common/MobileBottomBar";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.shortName} - ${siteConfig.tagline}`,
  description: `Trung tâm đào tạo lái xe chuyên nghiệp các hạng B1, B2, C. Hotline: ${siteConfig.contact.hotlineDisplay}, Tư vấn: ${siteConfig.contact.consultantName} (${siteConfig.contact.consultantPhoneDisplay}). Học thật, thi đỗ thật, cam kết không phát sinh chi phí, 1 kèm 1 với giáo viên giàu kinh nghiệm.`,
  keywords: [
    "học lái xe",
    "dạy lái xe",
    "bằng lái B1",
    "bằng lái B2",
    "bằng lái C",
    "bổ túc tay lái",
    "thầy dạy lái xe",
    "học lái xe trọn gói",
    "sân tập lái xe",
    "mẹo thi sa hình",
  ],
  authors: [{ name: siteConfig.brandName }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: siteConfig.brandName,
    title: `${siteConfig.shortName} - ${siteConfig.tagline}`,
    description: `Đào tạo lái xe ô tô B1, B2, C chuẩn thực tế. Tỷ lệ đỗ >95%, giáo viên 1 kèm 1, xe máy lạnh đời mới, hỗ trợ học phí chia đợt linh hoạt. Hotline: ${siteConfig.contact.hotlineDisplay}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} - ${siteConfig.tagline}`,
    description: `Đào tạo lái xe ô tô chuẩn thực tế. Tỷ lệ đỗ >95%, 1 kèm 1 tận tâm, học phí trọn gói minh bạch.`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f2942",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}

