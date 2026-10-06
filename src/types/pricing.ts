import { LicenseId } from "@/types/estimator";

export interface PricingCourse {
  id: string;
  name: string;
  licenseCode: LicenseId;
  licenseName: string;
  vehicleType: string;
  tuition: number; // in VND
  isPlaceholder: boolean;
  priceNote: string;
  practiceHours: number;
  datKilometers?: number;
  duration: string;
  targetAudience: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface PricingData {
  title: string;
  subtitle: string;
  courses: PricingCourse[];
  disclaimer: string;
}
