export interface SpecialPackage {
  id: string;
  code: "door_to_door" | "female_instructor";
  title: string;
  badge: string;
  tagline: string;
  description: string;
  targetAudience: string;
  highlights: string[];
  vehicleNote: string;
  pricingEstimateNote: string;
  ctaText: string;
  themeColor: "brand" | "rose" | "accent";
  icon: string;
  isPlaceholder: boolean;
}

export interface SpecialPackagesData {
  badge: string;
  title: string;
  description: string;
  packages: SpecialPackage[];
  assuranceNote: string;
}
