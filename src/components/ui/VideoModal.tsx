"use client";

import React, { useEffect, useState } from "react";
import { VideoTip } from "@/types/tips";
import { X, ExternalLink, Play, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface VideoModalProps {
  isOpen: boolean;
  tip: VideoTip | null;
  onClose: () => void;
}

export function VideoModal({ isOpen, tip, onClose }: VideoModalProps) {
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setIframeError(false);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isTikTok && !hasLocalVideo ? "max-w-md" : "max-w-3xl"
        } max-h-[96vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-slate-800/80 bg-slate-900/80">
          <div className="flex items-center gap-2 pr-3 min-w-0">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 uppercase tracking-wider shrink-0">
              {tip.categoryLabel}
            </span>
            <h3
              id="video-modal-title"
              className="text-xs sm:text-sm font-bold text-white truncate"
            >
              {tip.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng video"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 hover:text-white flex items-center justify-center transition-all shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative bg-black flex items-center justify-center overflow-y-auto p-1 sm:p-3">
          {hasLocalVideo ? (
            /* 1. Local MP4 / WebM Player */
            <div className="w-full aspect-video max-h-[60vh] flex items-center justify-center bg-black rounded-2xl overflow-hidden">
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
          ) : isTikTok && tip.tiktokVideoId ? (
            /* 2. TikTok Direct Iframe Player (Portrait Format) */
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-[520px] sm:h-[580px] bg-slate-900 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${tip.tiktokVideoId}`}
                title={tip.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 rounded-2xl"
                onError={() => setIframeError(true)}
              />
            </div>
          ) : tip.youtubeEmbedId ? (
            /* 3. YouTube Embed Player */
            <div className="w-full aspect-video max-h-[60vh] flex items-center justify-center bg-black rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${tip.youtubeEmbedId}?autoplay=1&rel=0`}
                title={tip.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* 4. Fallback Card */
            <div className="p-8 text-center text-white space-y-4 max-w-sm mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-rose-600/20 text-rose-400 border border-rose-500/30 flex items-center justify-center text-2xl font-black">
                🎵
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">{tip.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>
              </div>
              <Button
                variant="accent"
                size="md"
                href={tip.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 hover:bg-rose-700 font-bold w-full"
              >
                <span className="mr-1.5">🎵</span> Mở Xem Trên TikTok
              </Button>
            </div>
          )}
        </div>

        {/* Footer Action Bar */}
        <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-2">
          <a
            href={tip.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition-colors py-1"
          >
            <span>🎵 Mở trong app TikTok</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <Button
            variant="primary"
            size="sm"
            href="#consultation"
            onClick={onClose}
            className="text-xs font-bold shrink-0"
          >
            Đăng Ký Học 1 Kèm 1
          </Button>
        </div>
      </div>
    </div>
  );
}
