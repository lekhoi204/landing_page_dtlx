import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { heroData } from "@/data/heroData";
import { siteConfig } from "@/data/siteConfig";
import {
  ShieldCheck,
  UserCheck,
  Calendar,
  Car,
  Phone,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  Award,
} from "lucide-react";

// Icon mapping helper
const iconMap = {
  ShieldCheck: ShieldCheck,
  UserCheck: UserCheck,
  Calendar: Calendar,
  Car: Car,
};

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Giới thiệu khóa học lái xe"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/70"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Main 2-Column Hero Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge
                variant="brand"
                size="md"
                className="font-semibold px-3 py-1 text-xs sm:text-sm shadow-xs"
                icon={<Sparkles className="w-3.5 h-3.5 text-brand-600" />}
              >
                {heroData.eyebrow}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] text-balance">
              Học thật - Thi thật -{" "}
              <span className="text-brand-600 relative inline-block">
                Tỷ lệ đỗ &gt;95%
                <span
                  className="absolute bottom-1 left-0 w-full h-2 bg-amber-300/40 -z-10 rounded-sm"
                  aria-hidden="true"
                />
              </span>{" "}
              ngay lần đầu
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty">
              {heroData.supportingText}
            </p>

            {/* License Categories Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                Đào tạo:
              </span>
              {heroData.licensePills.map((pill) => (
                <div
                  key={pill.code}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-xs text-xs font-medium text-slate-700 hover:border-brand-300 transition-colors"
                >
                  <span className="font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded text-[11px]">
                    Hạng {pill.code}
                  </span>
                  <span className="text-slate-600">{pill.name}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons Group */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary CTA */}
              <Button
                variant="accent"
                size="lg"
                href="#pricing"
                leftIcon={<Car className="w-5 h-5" />}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="text-base font-bold shadow-md hover:shadow-lg transition-all"
              >
                Xem Bảng Giá Khóa Học
              </Button>

              {/* TikTok CTA */}
              <Button
                variant="outline"
                size="lg"
                href={siteConfig.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all group"
              >
                <span className="inline-block mr-2 font-black text-rose-500 group-hover:text-rose-400">🎵</span>
                TikTok Thầy Toàn
              </Button>
            </div>

            {/* Direct Phone, Zalo & TikTok Info Pill */}
            <div className="w-full pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 bg-slate-100/80 px-4 py-2.5 rounded-xl border border-slate-200/70">
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Hotline 24/7:</span>
                <a
                  href={`tel:${siteConfig.contact.hotlineRaw}`}
                  className="font-bold text-slate-900 hover:text-brand-600 transition-colors"
                >
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5">
                <span>Tư vấn trực tiếp:</span>
                <span className="font-semibold text-slate-800">
                  {siteConfig.contact.consultantName}
                </span>
                <a
                  href={`tel:${siteConfig.contact.consultantPhoneRaw}`}
                  className="font-bold text-emerald-700 hover:underline"
                >
                  ({siteConfig.contact.consultantPhoneDisplay})
                </a>
              </div>
              <span className="hidden md:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-900">TikTok:</span>
                <a
                  href={siteConfig.contact.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-rose-600 hover:underline"
                >
                  @thaytoandaylai999
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Training & Trust Visual with Banner (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-white rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200/90 space-y-4">
              {/* Real Hero Banner Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group">
                <Image
                  src="/images/banner.jpg"
                  alt="Thầy Toàn Dạy Lái Xe - Trung tâm đào tạo lái xe chuyên nghiệp"
                  width={600}
                  height={350}
                  priority
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Thầy Toàn Dạy Lái Xe
                </div>
              </div>

              {/* Top Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    🚗
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      Lộ Trình Đào Tạo Thực Tế
                    </h2>
                    <p className="text-[11px] text-slate-500">
                      Chuẩn quy chuẩn Tổng cục Đường bộ
                    </p>
                  </div>
                </div>

                <Badge variant="success" size="sm" className="font-semibold text-[10px]">
                  Tuyển sinh K48
                </Badge>
              </div>

              {/* Training Modules Preview Checklist */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-800">
                      Lý thuyết & 120 Tình huống mô phỏng
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Học mẹo nhớ nhanh, bao gồm phần mềm thi thử chuẩn 100%
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-800">
                      Thực hành 11 bài thi Sa hình chuẩn
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Xe gắn chip cảm ứng chấm điểm thi như thi thật
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-800">
                      Chạy đường trường DAT (810km)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Rèn phản xạ thực tế, tự tin cầm lái sau khi nhận bằng
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights Mini Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-center">
                <div className="p-2 rounded-xl bg-brand-50/60 border border-brand-100/80">
                  <div className="text-sm sm:text-base font-extrabold text-brand-700">
                    &gt;95%
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Tỷ lệ đỗ lần 1
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-100/80">
                  <div className="text-sm sm:text-base font-extrabold text-emerald-700">
                    1 Kèm 1
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Giáo viên riêng
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-accent-50/60 border border-accent-100/80">
                  <div className="text-sm sm:text-base font-extrabold text-accent-700">
                    100%
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Xe máy lạnh
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Award className="w-4 h-4" /> Cam kết hợp đồng minh bạch
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Học linh hoạt
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators Grid (4 Pillars) */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {heroData.trustIndicators.map((item) => {
              const IconComponent =
                iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-brand-200 transition-all duration-200 flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 border border-brand-100/60">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
