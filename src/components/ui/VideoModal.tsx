"use client";

import React, { useEffect } from "react";
import { VideoTip } from "@/types/tips";
import { X, ExternalLink, Sparkles, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-900/60">
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

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden aspect-video max-h-[60vh]">
          {hasLocalVideo ? (
            /* 1. Local MP4 / WebM Player (Fastest & direct on website) */
            <video
              src={tip.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Trình duyệt của bạn không hỗ trợ phát video HTML5.
            </video>
          ) : isTikTok && tip.tiktokVideoId ? (
            /* 2. TikTok Direct Iframe Player */
            <iframe
              src={`https://www.tiktok.com/player/v1/${tip.tiktokVideoId}?autoplay=1&description=1`}
              title={tip.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : tip.youtubeEmbedId ? (
            /* 3. YouTube Embed Player */
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${tip.youtubeEmbedId}?autoplay=1&rel=0`}
              title={tip.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            /* 4. Direct TikTok / Fallback Card */
            <div className="p-8 text-center text-white space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-rose-600/20 text-rose-400 border border-rose-500/30 flex items-center justify-center text-2xl font-black">
                🎵
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">{tip.title}</h4>
                <p className="text-xs text-slate-300">
                  {tip.summary}
                </p>
              </div>
              <div className="pt-2 flex items-center justify-center gap-3">
                <Button
                  variant="accent"
                  size="md"
                  href={tip.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-600 hover:bg-rose-700 font-bold"
                >
                  <span className="mr-1.5">🎵</span> Xem Ngay Trên TikTok
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Content */}
        <div className="p-5 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-y-auto">
          <div className="space-y-1 text-xs text-slate-300 max-w-xl">
            <p className="font-semibold text-slate-200">{tip.summary}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-bold">✓ {tip.difficulty}</span>
              <span>•</span>
              <span>Thời lượng: {tip.duration}</span>
              {tip.author && (
                <>
                  <span>•</span>
                  <span className="text-amber-400 font-medium">Giáo viên: {tip.author}</span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            {tip.youtubeUrl && (
              <a
                href={tip.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <span>Mở trong app</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}

            <Button
              variant="primary"
              size="sm"
              href="#consultation"
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-bold"
            >
              Đăng Ký Học 1 Kèm 1
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
