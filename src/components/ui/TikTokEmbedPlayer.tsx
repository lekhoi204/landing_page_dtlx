"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface TikTokEmbedPlayerProps {
  videoId: string;
  videoUrl?: string;
  className?: string;
}

export function TikTokEmbedPlayer({
  videoId,
  videoUrl,
  className,
}: TikTokEmbedPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  // TikTok embed v2 official iframe URL
  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}?lang=vi-VN`;

  return (
    <div
      className={`relative w-full flex items-center justify-center bg-slate-950 rounded-2xl overflow-hidden shadow-inner ${
        className || ""
      }`}
      style={{ minHeight: "580px" }}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-slate-900 text-slate-400 gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-rose-500" />
          <span className="text-xs font-medium text-slate-300">
            Đang tải trình phát video Thầy Toàn...
          </span>
        </div>
      )}

      {/* Direct Native TikTok Embed Iframe (No script errors, no overload-protect) */}
      <iframe
        src={embedUrl}
        title="Video hướng dẫn Thầy Toàn Dạy Lái Xe"
        className="relative z-10 w-full max-w-[360px] sm:max-w-[380px] h-[580px] sm:h-[620px] border-0 rounded-2xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}


