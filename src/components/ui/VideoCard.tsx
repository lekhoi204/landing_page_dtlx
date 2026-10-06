"use client";

import React from "react";
import { VideoTip } from "@/types/tips";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Play, Clock, Eye, ExternalLink } from "lucide-react";

interface VideoCardProps {
  tip: VideoTip;
  onPlay?: (tip: VideoTip) => void;
  className?: string;
}

export function VideoCard({ tip, onPlay, className }: VideoCardProps) {
  const isTikTok =
    tip.platform === "tiktok" || tip.youtubeUrl?.includes("tiktok.com");

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPlay) {
      onPlay(tip);
    }
  };

  return (
    <div
      className={cn(
        "rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-brand-300 transition-all duration-200 overflow-hidden flex flex-col justify-between group",
        isTikTok && "hover:border-rose-300",
        className
      )}
    >
      <div>
        {/* Visual Thumbnail Area with Play Button */}
        <div
          onClick={handlePlay}
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 p-6 sm:p-7 text-white overflow-hidden aspect-video flex flex-col justify-between cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-15"
            aria-hidden="true"
          />

          {/* Top Badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
              {tip.categoryLabel}
            </span>

            {isTikTok ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-300 bg-rose-950/80 border border-rose-500/40 px-2.5 py-1 rounded-md backdrop-blur-xs">
                <span>🎵</span> TikTok Thầy Toàn
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-200 bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-xs">
                <Clock className="w-3 h-3 text-amber-400" />
                {tip.duration}
              </span>
            )}
          </div>

          {/* Center Play Icon Button */}
          <button
            type="button"
            onClick={handlePlay}
            className={cn(
              "relative z-10 mx-auto w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer",
              isTikTok
                ? "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-rose-950/50"
                : "bg-accent-500 hover:bg-accent-600 shadow-brand-950/50"
            )}
            aria-label={`Xem video bài giảng: ${tip.title}`}
          >
            <Play className="w-6 h-6 fill-white translate-x-0.5" />
          </button>

          {/* Bottom Views Counter */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-brand-400" />
              {tip.viewsEstimate}
            </span>
            <span className="font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              {tip.difficulty}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <h4
            onClick={handlePlay}
            className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors cursor-pointer"
          >
            {tip.title}
          </h4>

          <p className="text-xs text-slate-600 leading-relaxed">
            {tip.summary}
          </p>

          {/* Key Steps Checklist */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-700 block">
              Các bước thực hiện cốt lõi:
            </span>
            <ul className="space-y-1 text-[11px] text-slate-600">
              {tip.keySteps.map((step, idx) => (
                <li key={idx} className="line-clamp-1">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handlePlay}
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-bold hover:underline py-1 transition-colors cursor-pointer",
            isTikTok
              ? "text-rose-600 hover:text-rose-800"
              : "text-brand-600 hover:text-brand-800"
          )}
        >
          <span>🎵 Xem video trực tiếp</span>
          <Play className="w-3 h-3 fill-current" />
        </button>

        <Button
          variant="outline"
          size="sm"
          href="#consultation"
          className="text-xs font-bold hover:bg-brand-50 hover:text-brand-700 hover:border-brand-300"
        >
          Hỏi Thầy Về Bài Này
        </Button>
      </div>
    </div>
  );
}
