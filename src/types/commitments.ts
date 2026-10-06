export interface CommitmentItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  keyPoints: string[];
  icon: string;
  tagColor?: "brand" | "accent" | "success";
}

export interface CommitmentsData {
  badge: string;
  title: string;
  description: string;
  commitments: CommitmentItem[];
  bottomNotice: string;
}
