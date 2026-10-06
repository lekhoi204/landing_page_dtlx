import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecialPackageCard } from "@/components/ui/SpecialPackageCard";
import { specialPackagesData } from "@/data/specialPackagesData";
import { ShieldCheck, Sparkles, Award } from "lucide-react";

export function SpecialPackagesSection() {
  return (
    <section
      id="special-packages"
      aria-label="Các gói dịch vụ đào tạo lái xe đặc biệt"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={specialPackagesData.badge}
          badgeVariant="accent"
          title={specialPackagesData.title}
          description={specialPackagesData.description}
          align="center"
        />

        {/* Special Package Card (Door-to-Door Service) */}
        <div className="max-w-2xl mx-auto">
          {specialPackagesData.packages.map((pkg) => (
            <SpecialPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-center gap-2 text-center max-w-3xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{specialPackagesData.assuranceNote}</span>
        </div>
      </Container>
    </section>
  );
}
