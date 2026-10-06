import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Phone, MessageSquare, Edit3 } from "lucide-react";

export function MobileBottomBar() {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      aria-label="Thanh tác vụ nhanh di động"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.contact.hotlineRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 text-slate-700 hover:bg-brand-50 hover:text-brand-600 active:scale-95 transition-all text-center border border-slate-200/70"
          aria-label={`Gọi hotline ${siteConfig.contact.hotlineDisplay}`}
        >
          <Phone className="w-4 h-4 text-brand-600 mb-1" />
          <span className="text-[11px] font-bold leading-none">Gọi ngay</span>
          <span className="text-[9px] text-slate-400 mt-0.5 leading-none">
            {siteConfig.contact.hotlineDisplay}
          </span>
        </a>

        {/* Zalo Chat Button */}
        <a
          href={siteConfig.contact.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50/70 text-emerald-800 hover:bg-emerald-100/80 active:scale-95 transition-all text-center border border-emerald-200/70"
          aria-label={`Chat Zalo ${siteConfig.contact.consultantName} ${siteConfig.contact.consultantPhoneDisplay}`}
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-1" />
          <span className="text-[11px] font-bold leading-none">Chat Zalo</span>
          <span className="text-[9px] text-emerald-600/80 mt-0.5 leading-none">
            {siteConfig.contact.consultantName}
          </span>
        </a>

        {/* Consultation Register CTA Button */}
        <a
          href="#consultation"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-accent-500 text-white hover:bg-accent-600 active:scale-95 transition-all text-center shadow-sm font-semibold"
          aria-label="Đăng ký nhận tư vấn khóa học lái xe"
        >
          <Edit3 className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-bold leading-none">Đăng ký</span>
          <span className="text-[9px] text-amber-100 mt-0.5 leading-none">
            Tư vấn miễn phí
          </span>
        </a>
      </div>
    </aside>
  );
}
