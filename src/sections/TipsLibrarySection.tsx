"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { Button } from "@/components/ui/Button";
import { tipsData } from "@/data/tipsData";
import { TipCategoryId } from "@/types/tips";
import { cn } from "@/lib/utils";
import { BookOpen, Sparkles, ArrowRight, PlayCircle } from "lucide-react";

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

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0 mt-0.5 border border-accent-200/60">
              <PlayCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Bạn Muốn Được Hướng Dẫn Trực Tiếp Các Mẹo Này Trên Xe Thật?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Đăng ký ngay khóa học 1 kèm 1 để được các thầy cầm tay chỉ việc, rèn mẹo căn điểm sa hình trực tiếp trên xe tập đời mới.
              </p>
            </div>
          </div>

          <Button
            variant="accent"
            size="lg"
            href="#consultation"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 w-full sm:w-auto font-bold shadow-xs text-sm sm:text-base"
          >
            Đăng Ký Học 1 Kèm 1
          </Button>
        </div>
      </Container>
    </section>
  );
}
