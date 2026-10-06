"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/siteConfig";
import {
  submitConsultationLead,
  validateFullName,
  validateVietnamesePhone,
} from "@/lib/contact-form";
import {
  LeadFormData,
  LeadFormErrors,
  FormSubmitStatus,
} from "@/types/lead";
import { cn } from "@/lib/utils";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Clock,
  Lock,
  User,
  Send,
  RotateCcw,
} from "lucide-react";

export function ConsultationFormSection() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    phone: "",
    licenseInterest: "B1",
  });

  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [touched, setTouched] = useState<{ fullName?: boolean; phone?: boolean }>({});
  const [status, setStatus] = useState<FormSubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const licenseOptions = [
    { id: "B1", label: "Hạng B1 (Tự động)" },
    { id: "B2", label: "Hạng B2 (Số sàn)" },
    { id: "C", label: "Hạng C (Xe tải)" },
    { id: "post_license", label: "Bổ túc tay lái" },
  ];

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation if touched
    if (touched[name as keyof typeof touched]) {
      if (name === "fullName") {
        setErrors((prev) => ({ ...prev, fullName: validateFullName(value) }));
      } else if (name === "phone") {
        setErrors((prev) => ({ ...prev, phone: validateVietnamesePhone(value) }));
      }
    }
  };

  // Handle Blur
  const handleBlur = (field: "fullName" | "phone") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "fullName") {
      setErrors((prev) => ({ ...prev, fullName: validateFullName(formData.fullName) }));
    } else if (field === "phone") {
      setErrors((prev) => ({ ...prev, phone: validateVietnamesePhone(formData.phone) }));
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({ fullName: true, phone: true });

    // Validate
    const nameError = validateFullName(formData.fullName);
    const phoneError = validateVietnamesePhone(formData.phone);

    if (nameError || phoneError) {
      setErrors({
        fullName: nameError,
        phone: phoneError,
      });
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const result = await submitConsultationLead(formData);

      if (result.success) {
        setStatus("success");
        setServerMessage(result.message);
      } else {
        setStatus("error");
        setServerMessage(
          result.message || "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại."
        );
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Không thể kết nối đến hệ thống. Vui lòng gọi trực tiếp hotline."
      );
    }
  };

  // Reset Form
  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      licenseInterest: "B1",
    });
    setErrors({});
    setTouched({});
    setStatus("idle");
    setServerMessage("");
  };

  return (
    <section
      id="consultation"
      aria-label="Đăng ký nhận tư vấn khóa học lái xe"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-brand-950 text-white scroll-mt-14 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Main 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Direct Contact Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Tuyển Sinh Khóa Mới - Đặt Lịch Học Thử
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Đăng Ký Tư Vấn &amp; Giữ Suất Học Ưu Đãi
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Chỉ mất <strong>30 giây</strong> để lại thông tin. Giáo viên trung tâm sẽ liên hệ lại trong vòng <strong>15 phút</strong> để giải đáp lộ trình, học phí và lịch học thử 1 kèm 1 miễn phí.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Hotline Card */}
              <a
                href={`tel:${siteConfig.contact.hotlineRaw}`}
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-900 flex items-center justify-center font-bold shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Hotline Tuyển Sinh 24/7
                    </span>
                    <span className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                      {siteConfig.contact.hotlineDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Gọi ngay <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Zalo Card */}
              <a
                href={siteConfig.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-300 font-medium block">
                      Tư vấn trực tiếp qua Zalo
                    </span>
                    <span className="text-base font-black text-white group-hover:text-emerald-300 transition-colors">
                      {siteConfig.contact.consultantName} ({siteConfig.contact.consultantPhoneDisplay})
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Chat Zalo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* 3 Trust Assurances */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Lock className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-300 font-medium block leading-tight">
                  Bảo mật 100%
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-300 font-medium block leading-tight">
                  Gọi lại trong 15p
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-brand-400 mx-auto mb-1" />
                <span className="text-[10px] text-slate-300 font-medium block leading-tight">
                  Không chèo kéo
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & High Converting Consultation Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-200">
              {/* SUCCESS STATE */}
              {status === "success" && (
                <div
                  className="space-y-6 text-center py-6 animate-in fade-in zoom-in-95 duration-200"
                  role="alert"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      Đăng Ký Thành Công!
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      {serverMessage}
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 max-w-sm mx-auto text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Họ và tên:</span>
                      <strong className="text-slate-900">{formData.fullName}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Số điện thoại:</span>
                      <strong className="text-brand-700">{formData.phone}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Quan tâm khóa:</span>
                      <strong className="text-slate-900">{formData.licenseInterest}</strong>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Button
                      variant="primary"
                      size="md"
                      href={`tel:${siteConfig.contact.hotlineRaw}`}
                      leftIcon={<Phone className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Gọi Ngay Hotline: {siteConfig.contact.hotlineDisplay}
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleReset}
                      leftIcon={<RotateCcw className="w-4 h-4" />}
                      className="w-full sm:w-auto text-slate-700"
                    >
                      Gửi Đăng Ký Khác
                    </Button>
                  </div>
                </div>
              )}

              {/* ACTIVE FORM STATE (Idle, Loading, Error) */}
              {status !== "success" && (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                      Phiếu Đăng Ký Nhận Tư Vấn &amp; Báo Giá
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Vui lòng nhập họ tên và số điện thoại, giáo viên sẽ hỗ trợ bạn ngay.
                    </p>
                  </div>

                  {/* General Error Banner */}
                  {status === "error" && (
                    <div
                      className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2 animate-in fade-in"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Thông báo:</strong> {serverMessage}
                      </div>
                    </div>
                  )}

                  {/* Quick License Selection Pills */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Khóa học bạn đang quan tâm:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {licenseOptions.map((opt) => {
                        const isSelected = formData.licenseInterest === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                licenseInterest: opt.id,
                              }))
                            }
                            className={cn(
                              "p-2 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer select-none",
                              isSelected
                                ? "bg-brand-600 text-white border-brand-600 shadow-xs"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            )}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Field 1: Họ và Tên */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-between"
                    >
                      <span>
                        Họ và tên của bạn <span className="text-rose-600">*</span>
                      </span>
                    </label>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("fullName")}
                        disabled={status === "loading"}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        aria-required="true"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={cn(
                          "w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white border text-slate-900 transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600",
                          errors.fullName
                            ? "border-rose-500 bg-rose-50/20 text-rose-900 focus:border-rose-600 focus:ring-rose-500/20"
                            : "border-slate-300 hover:border-slate-400"
                        )}
                      />
                    </div>

                    {errors.fullName && (
                      <p
                        id="fullName-error"
                        className="text-xs text-rose-600 flex items-center gap-1 mt-1 font-medium animate-in fade-in duration-150"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Field 2: Số Điện Thoại */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-between"
                    >
                      <span>
                        Số điện thoại nhận tư vấn <span className="text-rose-600">*</span>
                      </span>
                    </label>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        disabled={status === "loading"}
                        placeholder="Ví dụ: 0983 979 307"
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={cn(
                          "w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-white border text-slate-900 transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600",
                          errors.phone
                            ? "border-rose-500 bg-rose-50/20 text-rose-900 focus:border-rose-600 focus:ring-rose-500/20"
                            : "border-slate-300 hover:border-slate-400"
                        )}
                      />
                    </div>

                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="text-xs text-rose-600 flex items-center gap-1 mt-1 font-medium animate-in fade-in duration-150"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      fullWidth
                      isLoading={status === "loading"}
                      rightIcon={status !== "loading" ? <Send className="w-4 h-4" /> : undefined}
                      className="font-bold text-base shadow-lg hover:shadow-xl transition-all"
                    >
                      {status === "loading" ? "Đang Gửi Đăng Ký..." : "Gửi Thông Tin Đăng Ký"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-600" /> Cam kết bảo mật thông tin 100% - Không làm phiền
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
