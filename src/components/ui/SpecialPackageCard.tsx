import React from "react";
import { SpecialPackage } from "@/types/specialPackages";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Heart,
  Car,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";

interface SpecialPackageCardProps {
  pkg: SpecialPackage;
  className?: string;
}

export function SpecialPackageCard({ pkg, className }: SpecialPackageCardProps) {
  const isRose = pkg.themeColor === "rose";

  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-8 bg-white border-2 flex flex-col justify-between transition-all duration-200 relative overflow-hidden group shadow-sm hover:shadow-lg",
        isRose
          ? "border-rose-300/80 hover:border-rose-400 bg-gradient-to-b from-rose-50/40 via-white to-white"
          : "border-brand-300/80 hover:border-brand-500 bg-gradient-to-b from-brand-50/40 via-white to-white",
        className
      )}
    >
      <div>
        {/* Top Tag & Badge */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
          <Badge
            variant={isRose ? "accent" : "brand"}
            size="md"
            className="font-bold uppercase tracking-wider text-[11px]"
            icon={<Sparkles className="w-3.5 h-3.5" />}
          >
            {pkg.badge}
          </Badge>

          <span className="text-xs text-slate-400 font-medium">
            Gói Cao Cấp
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
          {pkg.title}
        </h3>

        <p
          className={cn(
            "text-xs sm:text-sm font-semibold mt-2 mb-3 leading-relaxed",
            isRose ? "text-rose-700" : "text-brand-700"
          )}
        >
          {pkg.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {pkg.description}
        </p>

        {/* Target Audience Box */}
        <div
          className={cn(
            "p-3.5 rounded-2xl border text-xs space-y-1 mb-5",
            isRose
              ? "bg-rose-50/60 border-rose-200/70 text-rose-950"
              : "bg-brand-50/60 border-brand-200/70 text-brand-950"
          )}
        >
          <div className="font-bold flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 shrink-0" />
            <span>Đối tượng phù hợp nhất:</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {pkg.targetAudience}
          </p>
        </div>

        {/* Highlights Checklist */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-800 block">
            Đặc quyền nổi bật của gói:
          </span>
          <ul className="space-y-2 text-xs text-slate-600">
            {pkg.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  className={cn(
                    "w-4 h-4 shrink-0 mt-0.5",
                    isRose ? "text-rose-600" : "text-brand-600"
                  )}
                />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer & CTA */}
      <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Car className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="line-clamp-1">{pkg.vehicleNote}</span>
        </div>

        <Button
          variant={isRose ? "accent" : "primary"}
          size="lg"
          fullWidth
          href="#consultation"
          rightIcon={<ArrowRight className="w-4 h-4" />}
          className={cn(
            "font-bold shadow-md",
            isRose && "bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white"
          )}
        >
          {pkg.ctaText}
        </Button>
      </div>
    </div>
  );
}
