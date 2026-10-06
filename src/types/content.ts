export interface TrustIndicator {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface LicensePill {
  code: string;
  name: string;
  target: string;
}

export interface HeroData {
  eyebrow: string;
  headline: string;
  highlightText: string;
  supportingText: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  trustIndicators: TrustIndicator[];
  licensePills: LicensePill[];
  quickStats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}
