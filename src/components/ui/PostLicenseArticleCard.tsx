import React from "react";
import { PostLicenseArticle } from "@/types/postLicense";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Clock,
  Gift,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Tag,
} from "lucide-react";

interface PostLicenseArticleCardProps {
  article: PostLicenseArticle;
  className?: string;
}

export function PostLicenseArticleCard({
  article,
  className,
}: PostLicenseArticleCardProps) {
  const isPerk = article.categoryId === "partner_perks";

  return (
    <div
      className={cn(
        "rounded-3xl p-6 bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between group",
        isPerk && "border-amber-200/90 bg-gradient-to-b from-amber-50/20 to-white",
        className
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5 mb-3.5">
          <Badge
            variant={isPerk ? "accent" : "brand"}
            size="sm"
            className="font-bold text-[11px]"
          >
            {article.badge || article.categoryLabel}
          </Badge>

          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
            {isPerk ? (
              <Gift className="w-3.5 h-3.5 text-amber-600" />
            ) : (
              <Clock className="w-3.5 h-3.5 text-slate-400" />
            )}
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
          {article.title}
        </h4>

        {/* Partner Offer Box (If perk) */}
        {article.partnerOfferText && (
          <div className="my-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{article.partnerOfferText}</span>
          </div>
        )}

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 mb-4">
          {article.summary}
        </p>

        {/* Key Points */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
          <span className="text-[11px] font-bold text-slate-700 block">
            Nội dung trọng tâm:
          </span>
          <ul className="space-y-1 text-[11px] text-slate-600">
            {article.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                <span className="leading-tight">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-medium">
          Cẩm nang học viên
        </span>

        <Button
          variant={isPerk ? "accent" : "outline"}
          size="sm"
          href="#consultation"
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          className="text-xs font-bold"
        >
          {article.actionLabel || "Đọc cẩm nang"}
        </Button>
      </div>
    </div>
  );
}
