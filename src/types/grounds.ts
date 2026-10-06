export interface TrainingGround {
  id: string;
  name: string;
  area: string; // e.g., "Khu Vực TP.HCM / Hà Nội", "Khu Vực Phía Đông", etc.
  address: string;
  description: string;
  supportedLicenses: string[]; // ["B Tự Động", "B Số Sàn", "C"]
  standard: string; // e.g. "Sân chuẩn sa hình 11 bài", "Sân sát hạch loại 1"
  features: string[]; // ["Xe gắn chip chấm điểm", "Đèn chiếu sáng ban đêm", "Đón tận nơi"]
  googleMapsUrl: string;
  embedMapUrl?: string;
  hasVirtualTour?: boolean;
  videoUrl?: string;
  imagePlaceholderText: string;
  isPlaceholder: boolean;
}

export interface TrainingGroundsData {
  badge: string;
  title: string;
  description: string;
  areas: string[];
  grounds: TrainingGround[];
  pickupSupportNote: string;
}
