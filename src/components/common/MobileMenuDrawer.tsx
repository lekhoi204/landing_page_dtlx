"use client";

import React, { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { X, Phone, MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  // Prevent scrolling when drawer is open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Menu điều hướng"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                🚗
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 text-sm leading-tight">
                  {siteConfig.shortName}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Đào tạo lái xe chuyên nghiệp
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Đóng menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1" aria-label="Menu di động">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-brand-50/60 font-medium text-sm transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info & CTA Bottom of Drawer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
          {/* Consultant Info Card */}
          <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Tư vấn tuyển sinh:</span>
              <span className="font-bold text-slate-900">
                {siteConfig.contact.consultantName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Hotline trung tâm:</span>
              <a
                href={`tel:${siteConfig.contact.hotlineRaw}`}
                className="font-bold text-brand-600 hover:underline"
              >
                {siteConfig.contact.hotlineDisplay}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              href={`tel:${siteConfig.contact.consultantPhoneRaw}`}
              leftIcon={<Phone className="w-3.5 h-3.5 text-brand-600" />}
              className="w-full text-xs"
            >
              Gọi tư vấn
            </Button>
            <Button
              variant="outline"
              size="sm"
              href={siteConfig.contact.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<MessageSquare className="w-3.5 h-3.5 text-emerald-600" />}
              className="w-full text-xs text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300"
            >
              Chat Zalo
            </Button>
          </div>

          <a
            href={siteConfig.contact.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold transition-all shadow-sm"
          >
            <span>🎵</span>
            <span>Xem TikTok Thầy Toàn (@thaytoandaylai999)</span>
          </a>

          <Button
            variant="accent"
            size="md"
            href="#consultation"
            onClick={onClose}
            fullWidth
            className="shadow-sm"
          >
            Đăng ký tư vấn ngay
          </Button>

          <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> Cam kết đào tạo chuẩn thực tế
          </p>
        </div>
      </div>
    </div>
  );
}
