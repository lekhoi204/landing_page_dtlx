export type PostLicenseCategoryId =
  | "all"
  | "buying_first_car"
  | "car_maintenance"
  | "driving_experience"
  | "partner_perks";

export interface PostLicenseCategory {
  id: PostLicenseCategoryId;
  label: string;
  icon: string;
  description: string;
}

export interface PostLicenseArticle {
  id: string;
  categoryId: PostLicenseCategoryId;
  categoryLabel: string;
  title: string;
  summary: string;
  readTime: string;
  badge?: string;
  keyPoints: string[];
  actionLabel?: string;
  partnerOfferText?: string;
  isPlaceholder: boolean;
}

export interface PostLicenseData {
  badge: string;
  title: string;
  description: string;
  categories: PostLicenseCategory[];
  articles: PostLicenseArticle[];
  communityCallout: {
    title: string;
    description: string;
    ctaText: string;
  };
}
