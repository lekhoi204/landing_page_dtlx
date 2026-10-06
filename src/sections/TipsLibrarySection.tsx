"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { Button } from "@/components/ui/Button";
import { tipsData } from "@/data/tipsData";
import { TipCategoryId } from "@/types/tips";
import { cn } from "@/lib/utils";
import { BookOpen, Sparkles, ArrowRight, PlayCircle, Video } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function TipsLibrarySection() {
  const [activeCategory, setActiveCategory] = useState<TipCategoryId>("all");

  const filteredTips =
    activeCategory === "all"
      ? tipsData.tips
      : tipsData.tips.filter((t) => t.categoryId === activeCategory);

  return (
    <section
      id="tips"
      aria-label="Thư viện video mẹo thi và kỹ năng lái xe"
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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tipsData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none",
                  "focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2",
                  isActive
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tips Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredTips.map((tip) => (
            <VideoCard key={tip.id} tip={tip} />
          ))}
        </div>

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
              <span className="mr-1.5">🎵</span> Xem TikTok Thầy Toàn
            </Button>

            <Button
              variant="white"
              size="lg"
              href="#consultation"
              rightIcon={<ArrowRight className="w-4 h-4 text-slate-900" />}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              Đăng Ký Học 1 Kèm 1
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
