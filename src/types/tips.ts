export type TipCategoryId =
  | "all"
  | "vertical_parking"
  | "parallel_parking"
  | "sa_hinh"
  | "difficult_situations";

export interface TipCategory {
  id: TipCategoryId;
  label: string;
  description: string;
}

export interface VideoTip {
  id: string;
  title: string;
  categoryId: TipCategoryId;
  categoryLabel: string;
  duration: string;
  difficulty: "Cơ bản" | "Trung bình" | "Trọng điểm thi";
  summary: string;
  keySteps: string[];
  youtubeUrl: string;
  videoSrc?: string; // e.g. "/videos/sa-hinh-thay-toan.mp4" for local video upload
  tiktokVideoId?: string; // e.g. "7677388767237393684"
  platform?: "tiktok" | "youtube" | "local";
  author?: string;
  youtubeEmbedId?: string;
  viewsEstimate: string;
  isPlaceholder: boolean;
}

export interface TipsData {
  badge: string;
  title: string;
  description: string;
  categories: TipCategory[];
  tips: VideoTip[];
}
