import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeacherCard } from "@/components/ui/TeacherCard";
import { Button } from "@/components/ui/Button";
import { teachersData } from "@/data/teachers";
import { ShieldCheck, ArrowRight, UserCheck } from "lucide-react";

export function InstructorsSection() {
  return (
    <section
      id="instructors"
      aria-label="Đội ngũ giáo viên dạy lái xe"
      className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={teachersData.badge}
          badgeVariant="brand"
          title={teachersData.title}
          description={teachersData.description}
          align="center"
        />

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {teachersData.teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {/* Guarantee Callout Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Cam Kết Sư Phạm & Quyền Lợi Học Viên
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {teachersData.guaranteeText}
              </p>
            </div>
          </div>

          <Button
            variant="accent"
            size="md"
            href="#consultation"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 w-full sm:w-auto font-bold shadow-xs"
          >
            Đăng Ký Học Thử 1 Buổi
          </Button>
        </div>
      </Container>
    </section>
  );
}
