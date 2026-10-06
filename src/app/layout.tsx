import type { Metadata, Viewport } from "next";
import { Header } from "@/components/common/Header";
import { MobileBottomBar } from "@/components/common/MobileBottomBar";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.shortName} - ${siteConfig.tagline}`,
  description: `Trung tâm đào tạo lái xe chuyên nghiệp các hạng B1, B2, C. Hotline: ${siteConfig.contact.hotlineDisplay}, Tư vấn: ${siteConfig.contact.consultantName} (${siteConfig.contact.consultantPhoneDisplay}). Học thật, thi đỗ thật, vững vàng tay lái.`,
  keywords: [
    "học lái xe",
    "dạy lái xe",
    "bằng lái B1",
    "bằng lái B2",
    "bằng lái C",
    "bổ túc tay lái",
    "thầy dạy lái xe",
  ],
  authors: [{ name: siteConfig.shortName }],
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
        <MobileBottomBar />
      </body>
    </html>
  );
}
