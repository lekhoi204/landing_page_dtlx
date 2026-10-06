"use client";

import React, { useEffect } from "react";
import { VideoTip } from "@/types/tips";
import { X, ExternalLink, Play, CheckCircle2, Sparkles, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TikTokEmbedPlayer } from "@/components/ui/TikTokEmbedPlayer";

interface VideoModalProps {
  isOpen: boolean;
  tip: VideoTip | null;
  onClose: () => void;
}

export function VideoModal({ isOpen, tip, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tip) return null;

  const isTikTok =
    tip.platform === "tiktok" || tip.youtubeUrl?.includes("tiktok.com");
  const hasLocalVideo = Boolean(tip.videoSrc);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-900/80">
          <div className="flex items-center gap-2 pr-4 min-w-0">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 uppercase tracking-wider shrink-0">
              {tip.categoryLabel}
            </span>
            <h3
              id="video-modal-title"
              className="text-sm sm:text-base font-bold text-white truncate"
            >
              {tip.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng video"
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white flex items-center justify-center transition-all shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player / Showcase Area */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden">
          {hasLocalVideo ? (
            /* Local MP4 Player */
            <div className="w-full aspect-video max-h-[60vh] flex items-center justify-center bg-black">
              <video
                src={tip.videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Trình duyệt của bạn không hỗ trợ phát video HTML5.
              </video>
            </div>
          ) : (
            /* Direct TikTok In-Place Player */
            <div className="w-full flex justify-center bg-black p-2 sm:p-4">
              <div className="w-full max-w-[380px]">
                <TikTokEmbedPlayer
                  videoId={tip.tiktokVideoId || "7677388767237393684"}
                  videoUrl={tip.youtubeUrl}
                />
              </div>
            </div>
          )}
        </div>

        {/* Key Steps & Footer Info */}
        <div className="p-5 sm:p-6 bg-slate-900/95 border-t border-slate-800 space-y-4 overflow-y-auto">
          {tip.keySteps && tip.keySteps.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Các bước cốt lõi cần nhớ trong bài thi:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {tip.keySteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-brand-400" />
              <span>Giáo viên phụ trách: <strong className="text-slate-200">Thầy Toàn</strong></span>
            </div>

            <Button
              variant="primary"
              size="md"
              href="#consultation"
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-bold"
            >
              Đăng Ký Học 1 Kèm 1 Với Thầy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
