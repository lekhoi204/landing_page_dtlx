import {
  LeadFormData,
  LeadFormErrors,
  SubmitLeadResult,
} from "@/types/lead";

/**
 * Validates full name (must not be empty, at least 2 characters)
 */
export function validateFullName(name: string): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) {
    return "Vui lòng nhập họ và tên của bạn.";
  }
  if (trimmed.length < 2) {
    return "Họ và tên phải có ít nhất 2 ký tự.";
  }
  return undefined;
}

/**
 * Validates Vietnamese phone numbers at a reasonable, flexible level
 * Accepts: 0983979307, 0983.979.307, 0983 979 307, +84983979307, 84983979307...
 * Avoids overly strict regex that might reject valid phone numbers.
 */
export function validateVietnamesePhone(phone: string): string | undefined {
  const trimmed = phone.trim();
  if (!trimmed) {
    return "Vui lòng nhập số điện thoại để nhận tư vấn.";
  }

  // Remove common separators like spaces, dots, dashes, parentheses
  const cleaned = trimmed.replace(/[\s.\-()]/g, "");

  // Check valid digits and prefix (starts with 0, 84, or +84)
  const isDigitsOnly = /^(\+84|84|0)[0-9]{8,10}$/.test(cleaned);

  if (!isDigitsOnly) {
    return "Số điện thoại chưa đúng định dạng (Ví dụ: 0983 979 307).";
  }

  return undefined;
}

/**
 * Validates entire lead form data
 */
export function validateLeadForm(data: LeadFormData): {
  isValid: boolean;
  errors: LeadFormErrors;
} {
  const errors: LeadFormErrors = {};

  const nameError = validateFullName(data.fullName);
  if (nameError) errors.fullName = nameError;

  const phoneError = validateVietnamesePhone(data.phone);
  if (phoneError) errors.phone = phoneError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Service Abstraction for Lead Submission
 * In current phase: Simulates async API call with localStorage caching.
 * In next phase: Simply replace the fetch logic with Google Apps Script Webhook URL.
 */
export async function submitConsultationLead(
  data: LeadFormData
): Promise<SubmitLeadResult> {
  // 1. Client-side validation
  const { isValid, errors } = validateLeadForm(data);
  if (!isValid) {
    return {
      success: false,
      message: "Vui lòng kiểm tra lại thông tin đăng ký.",
      errors,
    };
  }

  try {
    // 2. Simulated network latency for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const payload: LeadFormData = {
      fullName: data.fullName.trim(),
      phone: data.phone.trim(),
      licenseInterest: data.licenseInterest || "Tư vấn tổng quan",
      submittedAt: new Date().toISOString(),
      source: typeof window !== "undefined" ? window.location.href : "Website Landing Page",
    };

    // Save lead to localStorage for debugging/persistence if in browser
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const existingLeads = JSON.parse(
          localStorage.getItem("driving_school_leads") || "[]"
        );
        existingLeads.unshift(payload);
        localStorage.setItem(
          "driving_school_leads",
          JSON.stringify(existingLeads.slice(0, 50))
        );
      } catch {
        // Silently ignore storage quota issues
      }
    }

    /* 
     * TODO (Next Phase - Google Apps Script Integration):
     * const response = await fetch(GOOGLE_APPS_SCRIPT_WEBHOOK_URL, {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify(payload),
     * });
     * const result = await response.json();
     */

    return {
      success: true,
      message:
        "Cảm ơn bạn! Thông tin đã được ghi nhận. Thầy/cô sẽ liên hệ tư vấn sớm nhất.",
      leadId: `LEAD-${Date.now().toString().slice(-6)}`,
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Có lỗi xảy ra khi gửi thông tin. Bạn vui lòng gọi trực tiếp hotline để được hỗ trợ nhanh nhất.",
      errors: {
        general: "Không thể kết nối đến máy chủ. Vui lòng thử lại sau ít phút.",
      },
    };
  }
}
