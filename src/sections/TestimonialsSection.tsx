"use client";

import React, { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { reviewsData } from "@/data/reviewsData";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
  Calendar,
} from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const reviews = reviewsData.reviews;
  const totalReviews = reviews.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      nextSlide(); // Swiped left -> next
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // Swiped right -> prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="reviews"
      aria-label="Cảm nhận học viên và hình ảnh nhận bằng"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge={reviewsData.badge}
          badgeVariant="success"
          title={reviewsData.title}
          description={reviewsData.description}
          align="center"
        />

        {/* 1. Interactive Reviews Carousel */}
        <div className="relative mb-16">
          {/* Controls Bar on Top */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Badge variant="brand" size="sm" className="font-semibold">
                Đánh giá 5 Sao ({totalReviews} học viên tiêu biểu)
              </Badge>
              <span className="text-xs text-slate-400 hidden sm:inline">
                • Dùng phím mũi tên hoặc vuốt trên di động
              </span>
            </div>

            {/* Prev / Next Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-600"
                aria-label="Đánh giá trước đó"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-600"
                aria-label="Đánh giá tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Slide Container */}
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop 2-Card View, Mobile 1-Card View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <ReviewCard review={reviews[currentIndex]} />
              <ReviewCard
                review={reviews[(currentIndex + 1) % totalReviews]}
                className="hidden md:flex"
              />
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  currentIndex === idx
                    ? "w-8 bg-brand-600"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                )}
                aria-label={`Chuyển đến đánh giá ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2. Gallery: Học Viên Nhận Bằng */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Khoảnh Khắc Học Viên Tốt Nghiệp &amp; Nhận Bằng
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Chứng nhận kết quả thi sát hạch thực tế qua các khóa đào tạo gần nhất.
              </p>
            </div>

            <Badge variant="success" size="sm" className="w-fit">
              Tỷ lệ đỗ &gt;95%
            </Badge>
          </div>

          {/* Graduates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reviewsData.graduates.map((grad) => (
              <div
                key={grad.id}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 hover:border-brand-300 hover:bg-white transition-all duration-200"
              >
                {/* Top Badge: License & Score */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-brand-700 bg-brand-100/70 px-2 py-0.5 rounded">
                    {grad.licenseClass}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {grad.scoreText}
                  </span>
                </div>

                {/* Graduate Visual Card Box */}
                <div className="p-4 rounded-xl bg-white border border-slate-100 text-center space-y-1.5 shadow-2xs">
                  <div
                    className={cn(
                      "w-12 h-12 mx-auto rounded-full text-white flex items-center justify-center font-black text-sm shadow-xs",
                      grad.avatarColor
                    )}
                  >
                    🚗
                  </div>
                  <div className="font-bold text-slate-900 text-sm">
                    {grad.name}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {grad.courseBatch} ({grad.completionDate})
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 italic text-center leading-relaxed">
                  &ldquo;{grad.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Transparent Disclaimer Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs text-slate-500 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{reviewsData.placeholderNotice}</p>
        </div>

        {/* 4. Bottom CTA */}
        <div className="mt-10 text-center space-y-3">
          <Button
            variant="accent"
            size="lg"
            href="#consultation"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-bold shadow-md"
          >
            Đăng Ký Để Trở Thành Học Viên Tiếp Theo Nhận Bằng
          </Button>
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Cam kết đào tạo thực tế, học thật - thi đỗ thật
          </p>
        </div>
      </Container>
    </section>
  );
}
