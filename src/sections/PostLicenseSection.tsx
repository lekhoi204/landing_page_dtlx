"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostLicenseArticleCard } from "@/components/ui/PostLicenseArticleCard";
import { Button } from "@/components/ui/Button";
import { postLicenseData } from "@/data/postLicenseData";
import { siteConfig } from "@/data/siteConfig";
import { PostLicenseCategoryId } from "@/types/postLicense";
import { cn } from "@/lib/utils";
import {
  Layers,
  ShoppingBag,
  Wrench,
  Compass,
  Gift,
  Users,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// Icon mapping helper
const categoryIcons = {
  Layers: Layers,
  ShoppingBag: ShoppingBag,
  Wrench: Wrench,
  Compass: Compass,
  Gift: Gift,
};

export function PostLicenseSection() {
  const [activeCategory, setActiveCategory] = useState<PostLicenseCategoryId>("all");

  const filteredArticles =
    activeCategory === "all"
      ? postLicenseData.articles
      : postLicenseData.articles.filter((a) => a.categoryId === activeCategory);

  return (
    <section
      id="post-license"
      aria-label="Góc hỗ trợ và cẩm nang sau khi có bằng lái xe"
      className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={postLicenseData.badge}
          badgeVariant="brand"
          title={postLicenseData.title}
          description={postLicenseData.description}
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {postLicenseData.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const IconComponent =
              categoryIcons[cat.icon as keyof typeof categoryIcons] || Layers;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none",
                  "focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2",
                  isActive
                    ? "bg-brand-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                )}
              >
                <IconComponent className="w-3.5 h-3.5 shrink-0" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Articles Grid (2 columns on lg, 1 on md/sm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredArticles.map((article) => (
            <PostLicenseArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Community & Partner Support Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-850 to-brand-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" /> Cộng Đồng Tài Xế Văn Minh
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                {postLicenseData.communityCallout.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {postLicenseData.communityCallout.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <Button
                variant="accent"
                size="lg"
                href={siteConfig.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageSquare className="w-4 h-4 text-white" />}
                className="w-full sm:w-auto font-bold shadow-lg text-sm sm:text-base"
              >
                {postLicenseData.communityCallout.ctaText}
              </Button>

              <Button
                variant="outline-dark"
                size="lg"
                href="#consultation"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Hỏi Chuyên Gia Lái Xe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
