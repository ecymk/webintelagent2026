export type VisitorMode = "freelance" | "fulltime";

export type CaseStudyCategory =
  | "All"
  | "Calendar Defense"
  | "Studio Ops"
  | "Global Travel"
  | "C-Suite Support";

export interface CaseStudy {
  id: string;
  company: string;
  roleTitle: string;
  categories: CaseStudyCategory[];
  brief: string;
  systemBuilt: string;
  outcome: string;
  highlightMetric: string;
}

export interface RetainerTier {
  id: string;
  name: string;
  badge: string;
  priceLabel: string;
  hoursPerMonth: number;
  description: string;
  deliverables: string[];
  stripeUrlKey: string;
  featured?: boolean;
}

export interface LeadSubmission {
  name: string;
  email: string;
  company: string;
  track: VisitorMode;
  recommendedTier?: string;
  estimatedMonthlyHoursSaved?: number;
  message: string;
  createdAt: string;
}

export interface CredibilityPartner {
  id: string;
  name: string;
  shortName: string;
  sector: string;
  executiveScope: string;
}

export interface DiagnosticSliderConfig {
  id: "inboxHours" | "calendarHours" | "logisticsHours" | "hourlyRate";
  label: string;
  operationalTerm: string;
  description: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  unit: string;
}
