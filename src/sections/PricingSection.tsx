import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { pricingData } from "@/data/pricingData";
import { formatVND, cn } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  Car,
  User,
  ArrowRight,
  ShieldCheck,
  Info,
  Sparkles,
} from "lucide-react";

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-label="Bảng giá các khóa học lái xe"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Bảng Giá Minh Bạch"
          badgeVariant="brand"
          title={pricingData.title}
          description={pricingData.subtitle}
          align="center"
        />

        {/* Pricing Cards Grid (4 columns on lg, 2 on md, 1 on sm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingData.courses.map((course) => (
            <div
              key={course.id}
              className={cn(
                "relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-200 bg-white border",
                course.isPopular
                  ? "border-2 border-brand-600 shadow-lg ring-1 ring-brand-500/20"
                  : "border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300"
              )}
            >
              {/* Popular Badge */}
              {course.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  {course.badge}
                </div>
              )}

              {/* Card Header & Category */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2 pt-2">
                  <div>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2 py-0.5 rounded">
                      Hạng {course.licenseCode}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 leading-tight">
                      {course.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {course.licenseName}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[11px] text-slate-500 font-medium block">
                    {course.priceNote}
                  </span>
                  <div className="text-2xl font-black text-slate-900">
                    {formatVND(course.tuition)}
                    <span className="text-xs font-normal text-slate-400 ml-1">
                      *
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-semibold block">
                    Hỗ trợ chia làm 2 - 3 đợt đóng
                  </span>
                </div>

                {/* Practice Hours & Duration Summary */}
                <div className="space-y-2 text-xs border-b border-slate-100 pb-4">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      Giờ thực hành:
                    </span>
                    <span className="font-bold text-slate-900">
                      {course.practiceHours} Giờ (1 Kèm 1)
                    </span>
                  </div>

                  {course.datKilometers && (
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        Đường trường DAT:
                      </span>
                      <span className="font-bold text-slate-900">
                        {course.datKilometers} km
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      Thời gian đào tạo:
                    </span>
                    <span className="font-bold text-slate-900">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Target Audience Note */}
                <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/50 text-[11px] text-amber-900 flex items-start gap-2">
                  <User className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <p className="leading-snug">{course.targetAudience}</p>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold text-slate-800 block">
                    Quyền lợi bao gồm:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {course.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer / CTA */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Button
                  variant={course.isPopular ? "accent" : "outline"}
                  size="md"
                  fullWidth
                  href="#consultation"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className={cn(
                    "font-bold",
                    course.isPopular && "shadow-md hover:shadow-lg"
                  )}
                >
                  {course.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer & Policy Notice */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-3">
          <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{pricingData.disclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
