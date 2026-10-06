import React from "react";
import { ReviewItem } from "@/types/reviews";
import { cn } from "@/lib/utils";
import { Star, CheckCircle2, Award, Quote, User } from "lucide-react";

interface ReviewCardProps {
  review: ReviewItem;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between relative",
        className
      )}
    >
      <div className="space-y-4">
        {/* Top Header: Author info & Score badge */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            {/* Structured Initials Avatar */}
            <div
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0",
                review.avatarColor || "bg-brand-600"
              )}
            >
              {review.authorName
                .split(" ")
                .slice(-2)
                .map((n) => n[0])
                .join("")}
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  {review.authorName}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-brand-700">
                  {review.licenseClass}
                </span>
                <span>•</span>
                <span>{review.courseBatch}</span>
              </div>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-0.5" aria-label={`Đánh giá ${review.rating} sao`}>
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-amber-400 fill-amber-400"
              />
            ))}
          </div>
        </div>

        {/* Score Tag */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-xs font-bold">
          <Award className="w-3.5 h-3.5 text-emerald-600" />
          <span>{review.scoreText}</span>
        </div>

        {/* Review Content */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
          &ldquo;{review.content}&rdquo;
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        {review.teacherMentored && (
          <span className="font-medium text-slate-600">
            Kèm bởi: <strong className="text-slate-800">{review.teacherMentored}</strong>
          </span>
        )}
        <span className="text-[11px] text-slate-400">{review.dateText}</span>
      </div>
    </div>
  );
}
