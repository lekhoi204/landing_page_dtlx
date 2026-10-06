import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { commitmentsData } from "@/data/commitmentsData";
import { siteConfig } from "@/data/siteConfig";
import {
  ShieldAlert,
  CalendarClock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageSquare,
} from "lucide-react";

// Icon mapping helper
const commitmentIcons = {
  ShieldAlert: ShieldAlert,
  CalendarClock: CalendarClock,
  UserCheck: UserCheck,
};

export function CommitmentsSection() {
  return (
    <section
      id="commitments"
      aria-label="Bộ cam kết 3 không vì quyền lợi học viên"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={commitmentsData.badge}
          badgeVariant="success"
          title={commitmentsData.title}
          description={commitmentsData.description}
          align="center"
        />

        {/* 3 Commitments Cards (Desktop: 3 horizontal, Mobile: 3 stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {commitmentsData.commitments.map((item) => {
            const IconComponent =
              commitmentIcons[item.icon as keyof typeof commitmentIcons] ||
              ShieldCheck;

            return (
              <div
                key={item.id}
                className="relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold group-hover:bg-brand-600 group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50/70 px-2.5 py-1 rounded-lg">
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-brand-200 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-accent-700 bg-accent-50/80 px-2.5 py-1 rounded-md mt-2 mb-3 inline-block">
                    {item.highlightText}
                  </div>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Guaranteed Points Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-800 block">
                      Chi tiết cam kết:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {item.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Tag */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Cam kết hợp đồng
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Bảo lưu học phí
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner & Direct CTA */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Đổi Giáo Viên Miễn Phí Nếu Không Hài Lòng
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                An Tâm Tuyệt Đối - Học Thật Để Tự Tin Ôm Vô Lăng
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {commitmentsData.bottomNotice}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <Button
                variant="accent"
                size="lg"
                href="#consultation"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-bold shadow-lg text-sm sm:text-base"
              >
                Đăng Ký Nhận Tư Vấn
              </Button>

              <Button
                variant="outline-dark"
                size="lg"
                href={`tel:${siteConfig.contact.hotlineRaw}`}
                leftIcon={<Phone className="w-4 h-4 text-amber-400" />}
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Hotline: {siteConfig.contact.hotlineDisplay}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
