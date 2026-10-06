export interface ReviewItem {
  id: string;
  authorName: string;
  licenseClass: string; // e.g. "B1 Số Tự Động", "B2 Số Sàn"
  scoreText: string; // e.g. "100/100 Điểm Sa Hình"
  courseBatch: string; // e.g. "Khóa K46"
  content: string;
  rating: number; // 5
  dateText: string;
  isPlaceholder: boolean;
  avatarColor?: string;
  teacherMentored?: string;
}

export interface GraduateShowcase {
  id: string;
  name: string;
  licenseClass: string;
  scoreText: string;
  courseBatch: string;
  completionDate: string;
  quote: string;
  avatarColor: string;
}

export interface ReviewsData {
  badge: string;
  title: string;
  description: string;
  reviews: ReviewItem[];
  graduates: GraduateShowcase[];
  placeholderNotice: string;
}
