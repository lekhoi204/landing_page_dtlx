import React from "react";
import { Teacher } from "@/types/teachers";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  Award,
  Star,
  Users,
  CheckCircle2,
  Car,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

interface TeacherCardProps {
  teacher: Teacher;
  className?: string;
}

export function TeacherCard({ teacher, className }: TeacherCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between group",
        className
      )}
    >
      <div>
        {/* Top Header: Avatar Placeholder & Experience */}
        <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
          {/* Visual Avatar Placeholder (Professional SVG/Badge without fake photo) */}
          <div className="relative shrink-0">
            <div
              className={cn(
                "w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex flex-col items-center justify-center text-white shadow-sm font-bold",
                teacher.avatarColor || "bg-brand-600"
              )}
            >
              <Car className="w-6 h-6 mb-0.5 opacity-90" />
              <span className="text-[11px] font-black uppercase tracking-tight">
                {teacher.name.split(" ").slice(-2).join(" ")}
              </span>
            </div>

            {/* Verified Badge */}
            <div
              className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-xs"
              title="Chứng chỉ sư phạm Sở GTVT"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-1 flex-1 min-w-0">
            {teacher.badge && (
              <Badge variant="brand" size="sm" className="font-semibold text-[10px]">
                {teacher.badge}
              </Badge>
            )}
            <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
              {teacher.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium line-clamp-1">
              {teacher.title}
            </p>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 gap-2 my-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
          <div>
            <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              {teacher.passRateText}
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Tỷ lệ đỗ lần 1</span>
          </div>
          <div className="border-l border-slate-200">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1">
              <Users className="w-3.5 h-3.5 text-brand-600" />
              {teacher.studentsTrainedText}
            </div>
            <span className="text-[10px] text-slate-500 font-medium">Đã tốt nghiệp</span>
          </div>
        </div>

        {/* Experience & Specialties */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-800 bg-brand-50/70 px-2.5 py-1 rounded-lg">
            <Award className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span>{teacher.experienceText}</span>
          </div>

          {/* Specialties Pills */}
          <div className="flex flex-wrap gap-1.5">
            {teacher.specialties.map((spec, sIdx) => (
              <span
                key={sIdx}
                className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Bio & Teaching Philosophy */}
          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            {teacher.bio}
          </p>

          <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/80 text-[11px] text-emerald-900 flex items-start gap-2">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed italic">
              &ldquo;{teacher.teachingPhilosophy}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Card CTA */}
      <div className="pt-5 mt-5 border-t border-slate-100">
        <Button
          variant="outline"
          size="md"
          fullWidth
          href="#consultation"
          rightIcon={<ArrowRight className="w-4 h-4" />}
          className="text-xs font-bold hover:bg-brand-50 hover:text-brand-700 hover:border-brand-300"
        >
          Chọn Học Với {teacher.name.split(" ").slice(-1)[0]}
        </Button>
      </div>
    </div>
  );
}
