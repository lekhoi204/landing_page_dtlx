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

// In-flight submission tracking to prevent accidental duplicate requests
let isSubmittingInFlight = false;

/**
 * Service Abstraction for Lead Submission to Google Sheets via Google Apps Script Web App
 * Flow: Frontend -> POST -> Google Apps Script Web App -> Google Sheets
 */
export async function submitConsultationLead(
  data: LeadFormData
): Promise<SubmitLeadResult> {
  // 1. In-flight duplicate prevention
  if (isSubmittingInFlight) {
    return {
      success: false,
      message: "Yêu cầu đang được xử lý, vui lòng không bấm liên tục.",
    };
  }

  // 2. Client-side validation
  const { isValid, errors } = validateLeadForm(data);
  if (!isValid) {
    return {
      success: false,
      message: "Vui lòng kiểm tra lại thông tin đăng ký.",
      errors,
    };
  }

  isSubmittingInFlight = true;

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();

  // Payload format matching user's Google Sheet: Thời Gian | Họ Tên | Số Điện Thoại | Nhu Cầu | Trạng Thái
  const payload = {
    name: data.fullName.trim(),
    phone: data.phone.trim(),
    demand: data.licenseInterest || "Hạng B (Tự động)",
    status: "Chưa xử lý",
    submittedAt: new Date().toISOString(),
  };

  try {
    // If endpoint is not yet configured (e.g. during dev before deploying Google Apps Script)
    if (!endpoint) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[LeadService] NEXT_PUBLIC_FORM_ENDPOINT is not configured in .env.local. Simulating success in development mode."
        );
      }

      // Simulate network latency in dev mode
      await new Promise((resolve) => setTimeout(resolve, 700));

      return {
        success: true,
        message:
          "Cảm ơn bạn! Thông tin đã được ghi nhận. Thầy/cô sẽ liên hệ tư vấn sớm nhất.",
        leadId: `DEV-${Date.now().toString().slice(-6)}`,
      };
    }

    // 3. Send POST request to Google Apps Script Web App
    // Note: Using text/plain;charset=utf-8 avoids CORS preflight restrictions on Google Apps Script Web Apps
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Try parsing response as JSON if provided
    let responseData: { status?: string; message?: string } | null = null;
    try {
      const text = await response.text();
      responseData = text ? JSON.parse(text) : null;
    } catch {
      // If response is not JSON, we still check HTTP 200 ok
    }

    if (responseData && responseData.status === "error") {
      return {
        success: false,
        message:
          responseData.message ||
          "Có lỗi xảy ra khi ghi nhận thông tin. Vui lòng liên hệ trực tiếp hotline.",
      };
    }

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
        "Có lỗi xảy ra khi kết nối. Bạn vui lòng gọi trực tiếp hotline để được tư vấn nhanh nhất.",
      errors: {
        general:
          "Không thể gửi thông tin đến máy chủ lúc này. Vui lòng thử lại sau.",
      },
    };
  } finally {
    isSubmittingInFlight = false;
  }
}
