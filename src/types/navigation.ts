export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isCta?: boolean;
}

export interface ContactInfo {
  hotlineDisplay: string;
  hotlineRaw: string;
  consultantName: string;
  consultantPhoneDisplay: string;
  consultantPhoneRaw: string;
  zaloUrl: string;
  tiktokUrl: string;
}

export interface SiteConfig {
  brandName: string;
  shortName: string;
  tagline: string;
  contact: ContactInfo;
  navigation: NavItem[];
}
