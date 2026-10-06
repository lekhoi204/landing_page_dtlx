"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { trainingGroundsData } from "@/data/training-grounds";
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Navigation,
  Bus,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

export function TrainingGroundsSection() {
  const ground = trainingGroundsData.grounds[0];

  if (!ground) return null;

  return (
    <section
      id="grounds"
      aria-label="Địa chỉ sân tập lái xe chính thức"
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

        {/* Official Training Ground Showcase Card with Live Google Maps */}
        <div className="mt-8 max-w-6xl mx-auto rounded-3xl bg-white border-2 border-slate-200/90 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Interactive Google Maps Iframe (6 cols) */}
            <div className="lg:col-span-6 bg-slate-100 min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] relative flex flex-col">
              <iframe
                title="Bản đồ vị trí Trung Tâm Giáo Dục Nghề Nghiệp Tư Thục Mỹ Phước"
                src={
                  ground.embedMapUrl ||
                  `https://maps.google.com/maps?q=${encodeURIComponent(
                    ground.address
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`
                }
                className="w-full h-full min-h-[360px] lg:min-h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Indicator */}
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-1.5 shadow-md pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Vị Trí Sân Tập Chính Thức
              </div>

              {/* Mobile Quick Map Button */}
              <div className="p-3 bg-slate-900 text-white flex items-center justify-between lg:hidden text-xs">
                <span className="text-slate-300 font-medium">Bấm để chỉ đường:</span>
                <a
                  href={ground.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Mở Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Detailed Training Center Info & Amenities (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white via-slate-50/40 to-slate-50/80">
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="brand" size="md" className="font-bold text-[11px]">
                    {ground.standard}
                  </Badge>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Xe Chip Chuẩn Sát Hạch
                  </span>
                </div>

                {/* Center Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {ground.name}
                  </h3>
                  <div className="mt-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-amber-50/80 border border-amber-200/70 p-3 rounded-2xl">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{ground.address}</span>
                  </div>
                </div>

                {/* License Badges */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-xs font-semibold text-slate-500">
                    Đào tạo các hạng:
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

                {/* Features Checklist */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    Trang thiết bị &amp; Tiện ích tại sân:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {ground.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-200">
                <Button
                  variant="primary"
                  size="lg"
                  href="#consultation"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto font-bold shadow-md text-sm"
                >
                  Đăng Ký Học Tại Sân Này
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href={ground.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<Navigation className="w-4 h-4 text-brand-600" />}
                  rightIcon={<ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
                  className="w-full sm:w-auto text-sm font-bold text-slate-700 hover:bg-slate-100"
                >
                  Chỉ Đường Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Support Callout Notice */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-brand-50/70 border border-brand-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Bus className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-brand-950">
                Hỗ Trợ Điểm Đón &amp; Đưa Đón Học Viên Tận Nhà
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

