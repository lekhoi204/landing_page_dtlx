import {
  FeeEstimatorConfig,
  LicenseId,
  GoalId,
  ScheduleId,
  CoursePlanEstimate,
} from "@/types/estimator";
import { courseData } from "@/data/courseData";

/**
 * Pure calculation function to get CoursePlanEstimate based on user selection
 */
export function calculateCourseEstimate(
  licenseId: LicenseId,
  goalId: GoalId,
  scheduleId: ScheduleId,
  config: FeeEstimatorConfig = courseData
): CoursePlanEstimate {
  const category = config.categories.find((c) => c.id === licenseId) || config.categories[0];
  const goal = config.goals.find((g) => g.id === goalId) || config.goals[0];
  const schedule = config.schedules.find((s) => s.id === scheduleId) || config.schedules[0];

  const pricingEntry =
    config.pricingMatrix[licenseId]?.[goalId] ||
    config.pricingMatrix["B1"]["beginner"];

  const roadmap = config.roadmaps[goalId] || config.roadmaps["beginner"];

  return {
    licenseId: category.id,
    goalId: goal.id,
    scheduleId: schedule.id,
    licenseName: category.name,
    goalTitle: goal.title,
    scheduleTitle: `${schedule.title} (${schedule.timeRange})`,
    baseTuition: pricingEntry.baseTuition,
    isPlaceholderPrice: pricingEntry.isPlaceholderPrice,
    priceNote: pricingEntry.priceNote,
    practiceHours: pricingEntry.practiceHours,
    estimatedDuration: pricingEntry.estimatedDuration,
    datKilometers: pricingEntry.datKilometers,
    includedBenefits: pricingEntry.benefits,
    roadmap: roadmap,
  };
}
