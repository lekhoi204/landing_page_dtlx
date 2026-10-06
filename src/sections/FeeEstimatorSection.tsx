"use client";

import React, { useState, useId } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { courseData } from "@/data/courseData";
import { siteConfig } from "@/data/siteConfig";
import { calculateCourseEstimate } from "@/lib/feeCalculation";
import { formatVND, cn } from "@/lib/utils";
import { LicenseId, GoalId, ScheduleId } from "@/types/estimator";
import {
  Car,
  Gauge,
  Truck,
  Bus,
  Sparkles,
  Target,
  Compass,
  Sun,
  Sunset,
  Moon,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ShieldCheck,
  Calculator,
  Phone,
  MessageSquare,
  Clock,
  Check,
  Info,
  Calendar,
} from "lucide-react";

// Icon mapping helper
const vehicleIcons = {
  Car: Car,
  Gauge: Gauge,
  Truck: Truck,
  Bus: Bus,
};

const goalIcons = {
  Sparkles: Sparkles,
  Target: Target,
  Compass: Compass,
};

const scheduleIcons = {
  Sun: Sun,
  Sunset: Sunset,
  Moon: Moon,
  CalendarCheck: CalendarCheck,
};

export function FeeEstimatorSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedLicense, setSelectedLicense] = useState<LicenseId>("B1");
  const [selectedGoal, setSelectedGoal] = useState<GoalId>("beginner");
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleId>("weekend");

  const categoryRadioGroupId = useId();
  const goalRadioGroupId = useId();
  const scheduleRadioGroupId = useId();

  // Calculate current estimate based on selections
  const estimate = calculateCourseEstimate(
    selectedLicense,
    selectedGoal,
    selectedSchedule,
    courseData
  );

  const stepsList = [
    { number: 1, title: "Hạng Xe", subtitle: selectedLicense },
    { number: 2, title: "Nhu Cầu", subtitle: courseData.goals.find((g) => g.id === selectedGoal)?.title.split(" ")[0] || "Học" },
    { number: 3, title: "Thời Gian", subtitle: courseData.schedules.find((s) => s.id === selectedSchedule)?.title || "Lịch" },
    { number: 4, title: "Kết Quả", subtitle: "Dự toán" },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleReset = () => {
    setSelectedLicense("B1");
    setSelectedGoal("beginner");
    setSelectedSchedule("weekend");
    setCurrentStep(1);
  };

  return (
    <section
      id="fee-estimator"
      aria-label="Dự toán chi phí và lộ trình đào tạo lái xe"
      className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-14"
    >
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Interactive Fee Estimator"
          badgeVariant="accent"
          title="Dự Toán Chi Phí & Lộ Trình Học Cá Nhân Hóa"
          description="Chỉ mất 30 giây chọn nhu cầu để nhận bảng dự toán học phí trọn gói minh bạch, số giờ thực hành và lộ trình 4 giai đoạn chuẩn mực."
          align="center"
        />

        {/* Estimator Main Container Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-200/90 overflow-hidden">
          {/* Progress Header / Steps Bar */}
          <div className="bg-slate-900 text-white p-4 sm:p-6 border-b border-slate-800">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white leading-tight">
                    Tính Toán Học Phí & Lộ Trình
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Bước {currentStep}/4: {stepsList[currentStep - 1].title}
                  </p>
                </div>
              </div>

              {/* Reset Button */}
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Chọn lại từ đầu"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Chọn lại</span>
                </button>
              )}
            </div>

            {/* Stepper Navigation Pills */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-4 pt-4 border-t border-slate-800" role="tablist">
              {stepsList.map((step) => {
                const isCurrent = currentStep === step.number;
                const isPassed = currentStep > step.number;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setCurrentStep(step.number as 1 | 2 | 3 | 4)}
                    role="tab"
                    aria-selected={isCurrent}
                    className={cn(
                      "flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2.5 p-1.5 sm:p-2 rounded-xl text-left transition-all duration-150 select-none min-h-[44px] justify-center sm:justify-start",
                      isCurrent && "bg-brand-600 text-white shadow-xs font-semibold",
                      isPassed && "bg-slate-800/80 text-emerald-400 hover:bg-slate-800",
                      !isCurrent && !isPassed && "bg-slate-800/30 text-slate-400 hover:bg-slate-800/60"
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0",
                        isCurrent && "bg-white text-brand-600",
                        isPassed && "bg-emerald-500 text-white",
                        !isCurrent && !isPassed && "bg-slate-700 text-slate-400"
                      )}
                    >
                      {isPassed ? <Check className="w-3 h-3 stroke-[3]" /> : step.number}
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left overflow-hidden">
                      <span className="text-[11px] sm:text-xs leading-none line-clamp-1 font-medium">
                        {step.title}
                      </span>
                      <span className="text-[9px] sm:text-[10px] opacity-80 leading-none mt-0.5 hidden sm:inline-block">
                        {step.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step Content Area */}
          <div className="p-5 sm:p-8">
            {/* STEP 1: Chọn Hạng Xe */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    Bước 1: Bạn muốn học lái loại xe nào?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Chọn hạng bằng phù hợp với nhu cầu sử dụng thực tế của bạn.
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                  role="radiogroup"
                  aria-labelledby={categoryRadioGroupId}
                >
                  {courseData.categories.map((cat) => {
                    const isSelected = selectedLicense === cat.id;
                    const VehicleIcon =
                      vehicleIcons[cat.icon as keyof typeof vehicleIcons] || Car;

                    return (
                      <div
                        key={cat.id}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onClick={() => setSelectedLicense(cat.id)}
                        onKeyDown={(e) => {
                          if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            setSelectedLicense(cat.id);
                          }
                        }}
                        className={cn(
                          "relative p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-150 flex flex-col justify-between gap-3 select-none",
                          "focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2",
                          isSelected
                            ? "border-brand-600 bg-brand-50/60 shadow-sm ring-1 ring-brand-500/20"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg shrink-0",
                                isSelected
                                  ? "bg-brand-600 text-white shadow-xs"
                                  : "bg-slate-100 text-slate-600"
                              )}
                            >
                              <VehicleIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-extrabold text-slate-900 text-base">
                                  {cat.name}
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-500 font-medium block">
                                {cat.vehicleType}
                              </span>
                            </div>
                          </div>

                          {/* Selected Checkmark Indicator */}
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                              isSelected
                                ? "border-brand-600 bg-brand-600 text-white"
                                : "border-slate-300 bg-white"
                            )}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {cat.description}
                        </p>

                        <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px] text-slate-500">
                          <span>Độ tuổi: từ {cat.minAge} tuổi</span>
                          {cat.badge && (
                            <span className="font-bold text-brand-700 bg-brand-100/70 px-2 py-0.5 rounded text-[10px]">
                              {cat.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Controls */}
                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Tiếp tục: Chọn Nhu Cầu
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Chọn Nhu Cầu Học */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    Bước 2: Mục tiêu học lái xe của bạn là gì?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Giúp trung tâm cá nhân hóa số giờ thực hành và giáo trình sát thực tế nhất.
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-3.5"
                  role="radiogroup"
                  aria-labelledby={goalRadioGroupId}
                >
                  {courseData.goals.map((goal) => {
                    const isSelected = selectedGoal === goal.id;
                    const GoalIcon =
                      goalIcons[goal.icon as keyof typeof goalIcons] || Sparkles;

                    return (
                      <div
                        key={goal.id}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onClick={() => setSelectedGoal(goal.id)}
                        onKeyDown={(e) => {
                          if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            setSelectedGoal(goal.id);
                          }
                        }}
                        className={cn(
                          "relative p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-150 flex flex-col justify-between gap-3 select-none",
                          "focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2",
                          isSelected
                            ? "border-brand-600 bg-brand-50/60 shadow-sm ring-1 ring-brand-500/20"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                        )}
                      >
                        <div className="flex items-start justify-between">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shrink-0",
                              isSelected
                                ? "bg-brand-600 text-white"
                                : "bg-slate-100 text-slate-600"
                            )}
                          >
                            <GoalIcon className="w-5 h-5" />
                          </div>

                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                              isSelected
                                ? "border-brand-600 bg-brand-600 text-white"
                                : "border-slate-300 bg-white"
                            )}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>

                        <div>
                          <div className="font-extrabold text-slate-900 text-base leading-snug">
                            {goal.title}
                          </div>
                          <div className="text-[11px] font-semibold text-brand-700 mt-0.5">
                            {goal.subtitle}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed mt-2">
                            {goal.description}
                          </p>
                        </div>

                        {goal.badge && (
                          <div className="pt-2 border-t border-slate-100">
                            <span className="font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded text-[10px]">
                              {goal.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Controls */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleBack}
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Quay lại
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Tiếp tục: Chọn Thời Gian
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Chọn Thời Gian Rảnh */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    Bước 3: Bạn thường rảnh vào khung giờ nào?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Trung tâm chủ động sắp xếp xe và giáo viên theo lịch sinh hoạt của bạn.
                  </p>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                  role="radiogroup"
                  aria-labelledby={scheduleRadioGroupId}
                >
                  {courseData.schedules.map((sch) => {
                    const isSelected = selectedSchedule === sch.id;
                    const SchIcon =
                      scheduleIcons[sch.icon as keyof typeof scheduleIcons] || Clock;

                    return (
                      <div
                        key={sch.id}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        onClick={() => setSelectedSchedule(sch.id)}
                        onKeyDown={(e) => {
                          if (e.key === " " || e.key === "Enter") {
                            e.preventDefault();
                            setSelectedSchedule(sch.id);
                          }
                        }}
                        className={cn(
                          "relative p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-150 flex flex-col justify-between gap-2.5 select-none",
                          "focus-visible:outline-2 focus-visible:outline-brand-600 focus-visible:outline-offset-2",
                          isSelected
                            ? "border-brand-600 bg-brand-50/60 shadow-sm ring-1 ring-brand-500/20"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shrink-0",
                                isSelected
                                  ? "bg-brand-600 text-white"
                                  : "bg-slate-100 text-slate-600"
                              )}
                            >
                              <SchIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-extrabold text-slate-900 text-base leading-tight">
                                {sch.title}
                              </div>
                              <span className="text-xs font-semibold text-brand-700">
                                {sch.timeRange}
                              </span>
                            </div>
                          </div>

                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                              isSelected
                                ? "border-brand-600 bg-brand-600 text-white"
                                : "border-slate-300 bg-white"
                            )}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {sch.description}
                        </p>

                        {sch.badge && (
                          <div className="pt-1 border-t border-slate-100">
                            <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px]">
                              {sch.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Navigation Controls */}
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleBack}
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Quay lại
                  </Button>
                  <Button
                    variant="accent"
                    size="lg"
                    onClick={handleNext}
                    rightIcon={<Calculator className="w-4 h-4" />}
                    className="w-full sm:w-auto font-bold shadow-md"
                  >
                    Xem Kết Quả Dự Toán & Lộ Trình
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: KẾT QUẢ DỰ TOÁN & LỘ TRÌNH CHI TIẾT */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-in fade-in duration-200" aria-live="polite">
                {/* 1. Summary Selection Badges */}
                <div className="bg-brand-50/70 border border-brand-200/80 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
                      Lựa chọn của bạn:
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                        🚗 {estimate.licenseName}
                      </span>
                      <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                        🎯 {estimate.goalTitle}
                      </span>
                      <span className="font-bold text-slate-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                        🕒 {estimate.scheduleTitle}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-brand-700 hover:text-brand-900 hover:underline font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Thay đổi lựa chọn
                  </button>
                </div>

                {/* 2. Key Metrics Grid (Price, Practice Hours, Duration) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Estimated Price Card */}
                  <div className="bg-gradient-to-br from-brand-900 to-brand-950 text-white p-5 sm:p-6 rounded-2xl shadow-md border border-brand-800 space-y-2">
                    <span className="text-xs text-brand-200 font-medium">
                      Tổng chi phí dự toán trọn gói
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">
                      {formatVND(estimate.baseTuition)}
                      <span className="text-xs font-normal text-slate-300 ml-1">
                        *
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {estimate.priceNote}
                    </p>
                  </div>

                  {/* Practice Hours */}
                  <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs space-y-1.5">
                    <span className="text-xs text-slate-500 font-medium">
                      Thời lượng thực hành
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900">
                      {estimate.practiceHours} Giờ{" "}
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-1">
                        1 Kèm 1
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {estimate.datKilometers
                        ? `Bao gồm đủ ${estimate.datKilometers}km DAT đường trường & sa hình`
                        : "Tập trung rèn kỹ năng thực chiến và xử lý tình huống"}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs space-y-1.5">
                    <span className="text-xs text-slate-500 font-medium">
                      Thời gian hoàn thành
                    </span>
                    <div className="text-2xl font-extrabold text-slate-900">
                      {estimate.estimatedDuration}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Chủ động thi sớm theo lịch đăng ký sát hạch của Sở GTVT
                    </p>
                  </div>
                </div>

                {/* 3. Included Benefits List */}
                <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h5 className="font-bold text-sm text-slate-900">
                      Quyền lợi & Cam kết trong gói đào tạo:
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {estimate.includedBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. 4-Step Detailed Roadmap */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        Lộ Trình Đào Tạo 4 Giai Đoạn Chi Tiết
                      </h4>
                      <p className="text-xs text-slate-500">
                        Quy trình học bài bản, vững vàng tay lái trước khi nhận bằng
                      </p>
                    </div>
                    <Badge variant="brand" size="sm">
                      Chuẩn 4 Bước
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {estimate.roadmap.map((step) => (
                      <div
                        key={step.stepNumber}
                        className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 hover:border-brand-300 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                            Bước {step.stepNumber}: {step.durationText}
                          </span>
                        </div>

                        <h5 className="font-bold text-sm text-slate-900 leading-snug">
                          {step.title}
                        </h5>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="pt-2 border-t border-slate-100 space-y-1">
                          {step.highlights.map((item, hIdx) => (
                            <div
                              key={hIdx}
                              className="text-[11px] text-slate-500 flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Pricing Disclaimer Notice */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Lưu ý minh bạch:</strong> Mức học phí trên là chi phí dự toán tham khảo trọn gói theo khung đào tạo. Để nhận lịch khai giảng gần nhất và ưu đãi học phí cụ thể tại thời điểm hiện tại, vui lòng nhấn <em>&ldquo;Đăng ký tư vấn&rdquo;</em> hoặc liên hệ trực tiếp số điện thoại bên dưới.
                  </p>
                </div>

                {/* 6. High Conversion CTAs */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">
                        Bạn muốn đăng ký theo lộ trình này?
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Để lại thông tin để giáo viên liên hệ xác nhận lịch học thử và giữ chỗ khóa mới.
                      </p>
                    </div>

                    <Button
                      variant="accent"
                      size="lg"
                      href="#consultation"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="text-base font-bold shadow-lg shrink-0"
                    >
                      Đăng Ký Tư Vấn Ngay
                    </Button>
                  </div>

                  {/* Direct Contact Alternatives */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-400" />
                        <span>Hotline:</span>
                        <a
                          href={`tel:${siteConfig.contact.hotlineRaw}`}
                          className="font-bold text-white hover:text-amber-400"
                        >
                          {siteConfig.contact.hotlineDisplay}
                        </a>
                      </div>
                      <span className="text-slate-600">|</span>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Tư vấn Ms. Dương:</span>
                        <a
                          href={siteConfig.contact.zaloUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-400 hover:underline"
                        >
                          {siteConfig.contact.consultantPhoneDisplay} (Zalo)
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-slate-400 hover:text-white underline text-xs ml-auto"
                    >
                      Tính lại với thông số khác
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
