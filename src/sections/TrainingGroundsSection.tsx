"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { trainingGroundsData } from "@/data/training-grounds";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Compass,
  ExternalLink,
  Car,
  CheckCircle2,
  Navigation,
  Eye,
  Bus,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function TrainingGroundsSection() {
  const [activeArea, setActiveArea] = useState<string>("Tất Cả Khu Vực");

  const filteredGrounds =
    activeArea === "Tất Cả Khu Vực"
      ? trainingGroundsData.grounds
      : trainingGroundsData.grounds.filter((g) => g.area === activeArea);

  return (
    <section
      id="grounds"
      aria-label="Danh sách hệ thống sân tập lái xe"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={trainingGroundsData.badge}
          badgeVariant="accent"
          title={trainingGroundsData.title}
          description={trainingGroundsData.description}
          align="center"
        />

        {/* Area Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {trainingGroundsData.areas.map((area) => {
            const isActive = activeArea === area;
            return (
              <button
                key={area}
                type="button"
                onClick={() => setActiveArea(area)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none",
                  "focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2",
                  isActive
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {area}
              </button>
            );
          })}
        </div>

        {/* Grounds Grid / List Layout (2 columns on lg, 1 on md/sm) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredGrounds.map((ground) => (
            <div
              key={ground.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Map & Sa Hinh Placeholder Banner */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-brand-950 text-white p-5 sm:p-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                        {ground.standard}
                      </span>

                      {ground.hasVirtualTour && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-400/30">
                          <Eye className="w-3 h-3" /> Chế độ xem Sa hình 360°
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {ground.name}
                    </h3>

                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{ground.address}</span>
                    </div>
                  </div>
                </div>

                {/* Ground Body Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Supported License Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-slate-500">
                      Tập các hạng:
                    </span>
                    {ground.supportedLicenses.map((lic) => (
                      <Badge
                        key={lic}
                        variant="brand"
                        size="sm"
                        className="font-bold text-[11px]"
                      >
                        Hạng {lic}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ground.description}
                  </p>

                  {/* Ground Features Checklist */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <span className="text-xs font-bold text-slate-800 block">
                      Tiện ích & Trang thiết bị tại sân:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {ground.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Google Maps Link & Choose Ground CTA */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={ground.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 hover:underline py-1 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-600" />
                  <span>Chỉ đường trên Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <Button
                  variant="accent"
                  size="sm"
                  href="#consultation"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto font-bold text-xs shadow-xs"
                >
                  Chọn Học Tại Sân Này
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pickup Support Callout Notice */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-brand-50/70 border border-brand-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Bus className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-brand-950">
                Hỗ Trợ Điểm Đón & Đưa Đón Tận Nơi
              </h4>
              <p className="text-xs sm:text-sm text-brand-900/80 leading-relaxed">
                {trainingGroundsData.pickupSupportNote}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            href="#consultation"
            className="shrink-0 w-full sm:w-auto border-brand-300 text-brand-800 hover:bg-brand-100 font-bold text-xs sm:text-sm"
          >
            Hỏi Điểm Đón Gần Nhà Bạn
          </Button>
        </div>
      </Container>
    </section>
  );
}
