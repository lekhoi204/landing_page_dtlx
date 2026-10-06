export interface Teacher {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  experienceText: string;
  specialties: string[];
  bio: string;
  teachingPhilosophy: string;
  studentsTrainedText: string;
  passRateText: string;
  badge?: string;
  isPlaceholder: boolean;
  avatarColor?: string;
}

export interface TeachersSectionData {
  badge: string;
  title: string;
  description: string;
  guaranteeText: string;
  teachers: Teacher[];
}
