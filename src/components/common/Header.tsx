"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenuDrawer } from "@/components/common/MobileMenuDrawer";
import { Menu, Phone, Sparkles } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        {/* Top utility bar on desktop for extra trust & direct phone */}
        <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 border-b border-slate-800">
          <Container className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Đang tuyển sinh khóa mới
              </span>
              <span className="text-slate-600">|</span>
              <span>{siteConfig.tagline}</span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={siteConfig.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-semibold transition-colors"
              >
                <span>🎵</span>
                <span>TikTok: @thaytoandaylai999</span>
              </a>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Tư vấn:</span>
                <span className="text-slate-200 font-medium">{siteConfig.contact.consultantName}</span>
                <a
                  href={`tel:${siteConfig.contact.consultantPhoneRaw}`}
                  className="text-amber-400 hover:text-amber-300 font-bold ml-1"
                >
                  {siteConfig.contact.consultantPhoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Hotline:</span>
                <a
                  href={`tel:${siteConfig.contact.hotlineRaw}`}
                  className="text-white hover:text-brand-300 font-bold tracking-wide"
                >
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Navigation Bar */}
        <Container size="xl" className="flex items-center justify-between h-16 md:h-20 gap-3">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-brand-600 rounded-lg p-1 shrink-0"
            aria-label={`${siteConfig.brandName} - Trang chủ`}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:bg-brand-700 transition-colors">
              🚗
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight group-hover:text-brand-600 transition-colors whitespace-nowrap">
                {siteConfig.shortName}
              </span>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block whitespace-nowrap">
                Đào tạo lái xe chuẩn thực tế
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-0.5 2xl:gap-1 text-sm font-medium text-slate-700 shrink-0"
            aria-label="Điều hướng chính"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 rounded-lg hover:text-brand-600 hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone & TikTok */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={siteConfig.contact.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap"
              aria-label="Kênh TikTok Thầy Toàn Dạy Lái Xe"
            >
              <span>🎵</span>
              <span>TikTok</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.hotlineRaw}`}
              className="hidden lg:flex flex-col text-right group py-1 px-2 whitespace-nowrap"
            >
              <span className="text-[11px] text-slate-500 font-medium leading-none">
                Hotline 24/7
              </span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                {siteConfig.contact.hotlineDisplay}
              </span>
            </a>

            <Button
              variant="accent"
              size="md"
              href="#consultation"
              rightIcon={<Sparkles className="w-4 h-4" />}
              className="whitespace-nowrap"
            >
              Đăng ký tư vấn
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${siteConfig.contact.hotlineRaw}`}
              className="p-2.5 rounded-xl bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors flex items-center justify-center"
              aria-label="Gọi hotline"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600"
              aria-label="Mở menu điều hướng"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
