import { HeroSection } from "@/sections/HeroSection";
import { FeeEstimatorSection } from "@/sections/FeeEstimatorSection";
import { PricingSection } from "@/sections/PricingSection";
import { CommitmentsSection } from "@/sections/CommitmentsSection";
import { InstructorsSection } from "@/sections/InstructorsSection";
import { TrainingGroundsSection } from "@/sections/TrainingGroundsSection";
import { TipsLibrarySection } from "@/sections/TipsLibrarySection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { SpecialPackagesSection } from "@/sections/SpecialPackagesSection";
import { PostLicenseSection } from "@/sections/PostLicenseSection";
import { ConsultationFormSection } from "@/sections/ConsultationFormSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Fee Estimator Section */}
      <FeeEstimatorSection />

      {/* 3. Pricing Section (Bảng Giá) */}
      <PricingSection />

      {/* 4. Commitments Section (Cam Kết 3 Không) */}
      <CommitmentsSection />

      {/* 5. Instructors Section (Đội Ngũ Giáo Viên) */}
      <InstructorsSection />

      {/* 6. Training Grounds Section (Hệ Thống Sân Tập) */}
      <TrainingGroundsSection />

      {/* 7. Tips & Video Library Section (Thư Viện Mẹo Thi) */}
      <TipsLibrarySection />

      {/* 8. Testimonials & Graduates Section (Review & Gallery Nhận Bằng) */}
      <TestimonialsSection />

      {/* 9. Special Packages Section (Gói Dịch Vụ Đặc Biệt) */}
      <SpecialPackagesSection />

      {/* 10. Post-License Hub Section (Góc Sau Khi Có Bằng) */}
      <PostLicenseSection />

      {/* 11. Consultation & Lead Form Section */}
      <ConsultationFormSection />
    </main>
  );
}
