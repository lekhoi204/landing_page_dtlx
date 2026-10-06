import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["DrivingSchool", "EducationalOrganization", "LocalBusiness"],
        "@id": "https://thaytoandaylaixe.vercel.app/#organization",
        name: "Thầy Toàn Dạy Lái Xe - Trung Tâm GDNN Tư Thục Mỹ Phước",
        alternateName: [
          "Thầy Toàn Dạy Lái Xe",
          "Trung Tâm Giáo Dục Nghề Nghiệp Tư Thục Mỹ Phước",
          "Đào Tạo Lái Xe Thầy Toàn",
        ],
        url: "https://thaytoandaylaixe.vercel.app",
        logo: "https://thaytoandaylaixe.vercel.app/images/logo.jpg",
        image: "https://thaytoandaylaixe.vercel.app/images/banner.jpg",
        description:
          "Trung tâm đào tạo & sát hạch lái xe chuẩn quốc gia các hạng B Tự Động, B Số Sàn, C. Học 1 kèm 1 cùng Thầy Toàn và Thầy Huy, tỷ lệ đỗ >95%, học phí trọn gói minh bạch không phát sinh.",
        telephone: siteConfig.contact.hotlineRaw,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Đường Thới Hòa 29, KP Đông Hòa, Thới Hòa",
          addressLocality: "Hồ Chí Minh",
          postalCode: "820000",
          addressCountry: "VN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 11.1342,
          longitude: 106.6085,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "06:00",
            closes: "21:00",
          },
        ],
        sameAs: [
          siteConfig.contact.tiktokUrl,
          siteConfig.contact.zaloUrl,
        ],
        areaServed: [
          "Hồ Chí Minh",
          "Bình Dương",
          "Bến Cát",
          "Thới Hòa",
          "Mỹ Phước",
        ],
      },
      {
        "@type": "Course",
        name: "Khóa Học Lái Xe Ô Tô Hạng B Tự Động (B Số Tự Động)",
        description:
          "Đào tạo lái xe số tự động từ cơ bản đến vững tay lái, kèm 1-1, học mẹo sa hình 11 bài thi và chạy đủ 810km DAT.",
        provider: {
          "@id": "https://thaytoandaylaixe.vercel.app/#organization",
        },
      },
      {
        "@type": "Course",
        name: "Khóa Học Lái Xe Ô Tô Hạng B Số Sàn (B Cơ Bản & Chuyên Nghiệp)",
        description:
          "Đào tạo lái xe số sàn chuẩn kỹ thuật đề-pa dốc không tụt dốc, ghép xe nhanh và chạy đường trường DAT.",
        provider: {
          "@id": "https://thaytoandaylaixe.vercel.app/#organization",
        },
      },
      {
        "@type": "Course",
        name: "Khóa Học Lái Xe Tải Hạng C",
        description:
          "Đào tạo tài xế xe tải chuyên nghiệp hạng C, sát hạch cấp bằng chuẩn Tổng cục Đường bộ.",
        provider: {
          "@id": "https://thaytoandaylaixe.vercel.app/#organization",
        },
      },
      {
        "@type": "VideoObject",
        name: "Thầy Toàn Hướng Dẫn Kỹ Thuật Ghép Xe Ngang (Chuồng Ngang) Chuẩn 100/100",
        description:
          "Video thực tế Thầy Toàn trực tiếp hướng dẫn bí quyết ghép xe ngang chuẩn 3 bước không đè vạch chip cảm ứng.",
        thumbnailUrl: "https://thaytoandaylaixe.vercel.app/images/banner.jpg",
        uploadDate: "2026-09-01T08:00:00+07:00",
        contentUrl: "https://thaytoandaylaixe.vercel.app/videos/video_huong_dan_ghep_xe_ngang.mp4",
        embedUrl: "https://www.tiktok.com/embed/v2/7677388767237393684",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
