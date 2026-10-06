"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TikTokEmbedPlayer } from "@/components/ui/TikTokEmbedPlayer";
import { Button } from "@/components/ui/Button";
import { tipsData } from "@/data/tipsData";
import { siteConfig } from "@/data/siteConfig";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  UserCheck,
  ShieldCheck,
  Play,
} from "lucide-react";

export function TipsLibrarySection() {
  const currentTip = tipsData.tips[0];

  return (
    <section
      id="tips"
      aria-label="Video hướng dẫn lái xe sa hình thực tế của Thầy Toàn"
      className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={tipsData.badge}
          badgeVariant="brand"
          title={tipsData.title}
          description={tipsData.description}
          align="center"
        />

        {/* Main Interactive Video Showcase Card (Plays directly on the web!) */}
        {currentTip && (
          <div className="mt-8 max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Native High-Definition Video Player */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <div className="w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-black relative aspect-[9/16] max-h-[580px] flex items-center justify-center group">
                  {currentTip.videoSrc ? (
                    <video
                      src={currentTip.videoSrc}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain bg-black"
                    >
                      Trình duyệt của bạn không hỗ trợ phát video HTML5.
                    </video>
                  ) : (
                    <TikTokEmbedPlayer
                      videoId={currentTip.tiktokVideoId || "7677388767237393684"}
                      videoUrl={currentTip.youtubeUrl}
                    />
                  )}
                </div>
              </div>

              {/* Right Column: Detailed Lesson Steps & Teacher Callout */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200">
                      {currentTip.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      HD Chuẩn 100% • Thầy Toàn
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {currentTip.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {currentTip.summary}
                  </p>
                </div>

                {/* Key Steps Checklist */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Các bước căn điểm chuẩn 100/100:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {currentTip.keySteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Teacher Trust Box */}
                <div className="flex items-center gap-3 text-xs text-slate-600 pt-1">
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    TT
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Thầy Toàn Dạy Lái Xe</strong>
                    <span>12 năm kinh nghiệm • Kèm sát từng buổi thực hành</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    href="#consultation"
                    className="w-full sm:w-auto font-bold shadow-md text-sm sm:text-base"
                  >
                    Đăng Ký Học 1 Kèm 1 Với Thầy
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    href={`tel:${siteConfig.contact.hotlineRaw}`}
                    leftIcon={<Phone className="w-4 h-4 text-brand-600" />}
                    className="w-full sm:w-auto text-sm sm:text-base font-bold text-slate-700"
                  >
                    Hotline: {siteConfig.contact.hotlineDisplay}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TikTok Channel Banner & 1-on-1 Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-center lg:text-left">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30 font-black text-xl">
              🎵
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold">
                Kênh TikTok Chính Thức: @thaytoandaylai999
              </div>
              <h4 className="text-base sm:text-xl font-bold text-white">
                Theo Dõi TikTok Thầy Toàn Để Học Thêm Mẹo Thi Mới Mỗi Ngày
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Thầy Toàn thường xuyên chia sẻ các video thực tế về mẹo căn điểm sa hình 100/100, cách ghép xe dọc/ngang nhanh và kỹ năng xử lý tình huống giao thông thực tế.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <Button
              variant="accent"
              size="lg"
              href={siteConfig.contact.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-bold shadow-md text-sm sm:text-base bg-rose-600 hover:bg-rose-700"
            >
              <span className="mr-1.5">🎵</span> Xem Kênh TikTok
            </Button>

            <Button
              variant="white"
              size="lg"
              href="#consultation"
              rightIcon={<ArrowRight className="w-4 h-4 text-slate-900" />}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              Đăng Ký Tư Vấn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
