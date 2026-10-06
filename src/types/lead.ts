export interface LeadFormData {
  fullName: string;
  phone: string;
  licenseInterest?: string; // Optional: "Hạng B (Tự động)", "Hạng B (Số sàn)", "C", "Bổ túc"
  preferredTime?: string; // Optional
  source?: string;
  submittedAt?: string;
}

export interface LeadFormErrors {
  fullName?: string;
  phone?: string;
  general?: string;
}

export interface SubmitLeadResult {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: LeadFormErrors;
}

export type FormSubmitStatus = "idle" | "loading" | "success" | "error";
