import { HeroSection } from "@/sections/HeroSection";
import { PricingSection } from "@/sections/PricingSection";
import { CommitmentsSection } from "@/sections/CommitmentsSection";
import { InstructorsSection } from "@/sections/InstructorsSection";
import { TrainingGroundsSection } from "@/sections/TrainingGroundsSection";
import { TipsLibrarySection } from "@/sections/TipsLibrarySection";
import { SpecialPackagesSection } from "@/sections/SpecialPackagesSection";
import { PostLicenseSection } from "@/sections/PostLicenseSection";
import { ConsultationFormSection } from "@/sections/ConsultationFormSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Pricing Section (Bảng Giá Khóa Học) */}
      <PricingSection />

      {/* 3. Commitments Section (Cam Kết 3 Không) */}
      <CommitmentsSection />

      {/* 4. Instructors Section (Đội Ngũ Giáo Viên) */}
      <InstructorsSection />

      {/* 5. Training Grounds Section (Hệ Thống Sân Tập) */}
      <TrainingGroundsSection />

      {/* 6. Tips & Video Library Section (Thư Viện Mẹo Thi & Kênh TikTok) */}
      <TipsLibrarySection />

      {/* 7. Special Packages Section (Gói Dịch Vụ Đặc Biệt) */}
      <SpecialPackagesSection />

      {/* 8. Post-License Hub Section (Góc Sau Khi Có Bằng) */}
      <PostLicenseSection />

      {/* 9. Consultation & Lead Form Section */}
      <ConsultationFormSection />
    </main>
  );
}

