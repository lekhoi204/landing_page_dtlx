import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes safely with clsx
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Utility to format currency to Vietnamese Dong (VND)
 */
export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clean phone number string for tel: link (removes dots, spaces, hyphens)
 */
export function formatTelLink(phone: string): string {
  return phone.replace(/[^0-9+]/g, "");
}
