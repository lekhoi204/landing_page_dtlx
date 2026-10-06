export type LicenseId = "B1" | "B2" | "C" | "D";
export type GoalId = "beginner" | "exam_prep" | "post_license";
export type ScheduleId = "morning" | "afternoon" | "evening" | "weekend";

export interface LicenseCategory {
  id: LicenseId;
  name: string;
  code: string;
  vehicleType: string;
  minAge: number;
  description: string;
  popular?: boolean;
  badge?: string;
  icon: string;
}

export interface LearningGoal {
  id: GoalId;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  icon: string;
}

export interface ScheduleSlot {
  id: ScheduleId;
  title: string;
  timeRange: string;
  description: string;
  badge?: string;
  icon: string;
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  durationText: string;
  description: string;
  highlights: string[];
}

export interface CoursePlanEstimate {
  licenseId: LicenseId;
  goalId: GoalId;
  scheduleId: ScheduleId;
  licenseName: string;
  goalTitle: string;
  scheduleTitle: string;
  baseTuition: number; // in VND
  isPlaceholderPrice: boolean;
  priceNote: string;
  practiceHours: number; // in hours
  estimatedDuration: string;
  datKilometers?: number; // km DAT if applicable
  includedBenefits: string[];
  roadmap: RoadmapStep[];
}

export interface FeeEstimatorConfig {
  categories: LicenseCategory[];
  goals: LearningGoal[];
  schedules: ScheduleSlot[];
  pricingMatrix: Record<
    LicenseId,
    Record<
      GoalId,
      {
        baseTuition: number;
        isPlaceholderPrice: boolean;
        practiceHours: number;
        estimatedDuration: string;
        datKilometers?: number;
        priceNote: string;
        benefits: string[];
      }
    >
  >;
  roadmaps: Record<GoalId, RoadmapStep[]>;
}
