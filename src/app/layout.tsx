import type { Metadata, Viewport } from "next";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { MobileBottomBar } from "@/components/common/MobileBottomBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const siteUrl = "https://thaytoandaylaixe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thầy Toàn Dạy Lái Xe - Trung Tâm Đào Tạo Lái Xe Mỹ Phước | B Tự Động, B Số Sàn, C",
    template: "%s | Thầy Toàn Dạy Lái Xe",
  },
  description: `Trung tâm đào tạo lái xe Thầy Toàn & Sân tập GDNN Tư Thục Mỹ Phước (Đường Thới Hòa 29, KP Đông Hòa, Thới Hòa). Hotline: ${siteConfig.contact.hotlineDisplay}, Tư vấn: ${siteConfig.contact.consultantName} (${siteConfig.contact.consultantPhoneDisplay}). Học thật, thi đỗ thật >95%, cam kết 1 kèm 1 không phát sinh chi phí, xe chip chuẩn sát hạch.`,
  keywords: [
    "thầy toàn dạy lái xe",
    "thay toan day lai xe",
    "học lái xe thầy toàn",
    "thay toan day lai xe 999",
    "trung tâm giáo dục nghề nghiệp tư thục mỹ phước",
    "sân tập lái xe mỹ phước",
    "sân tập lái xe thới hòa",
    "học lái xe thới hòa bến cát",
    "học lái xe bến cát bình dương",
    "học lái xe ô tô",
    "học bằng lái xe b tự động",
    "học bằng lái xe b số sàn",
    "học bằng lái xe c",
    "bổ túc tay lái",
    "học lái xe 1 kèm 1",
    "học lái xe trọn gói",
    "mẹo thi sa hình 100 điểm",
    "ghép xe ngang thầy toàn",
  ],
  authors: [{ name: siteConfig.brandName, url: siteUrl }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google4dc3e7fd1ad5442a",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
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
    url: siteUrl,
    siteName: siteConfig.brandName,
    title: "Thầy Toàn Dạy Lái Xe - Trung Tâm Đào Tạo Lái Xe Mỹ Phước",
    description: `Đào tạo lái xe ô tô B Tự Động, B Số Sàn, C chuẩn thực tế tại Sân tập Mỹ Phước, Thới Hòa. Tỷ lệ đỗ >95%, giáo viên 1 kèm 1 tận tâm, học phí trọn gói minh bạch. Hotline: ${siteConfig.contact.hotlineDisplay}.`,
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Thầy Toàn Dạy Lái Xe - Trung Tâm GDNN Tư Thục Mỹ Phước",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thầy Toàn Dạy Lái Xe - Trung Tâm Đào Tạo Lái Xe Mỹ Phước",
    description: `Đào tạo lái xe ô tô B Tự Động, B Số Sàn, C chuẩn thực tế. Tỷ lệ đỗ >95%, 1 kèm 1 tận tâm, học phí trọn gói minh bạch. Hotline: ${siteConfig.contact.hotlineDisplay}.`,
    images: ["/images/banner.jpg"],
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
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}

