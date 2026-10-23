export type VisitorMode = "freelance" | "fulltime";

export type CaseStudyCategory =
  | "All"
  | "Calendar Defense"
  | "Studio Ops"
  | "Global Travel"
  | "C-Suite Support";

export type ResumeTrackLens =
  | "All"
  | "Chief of Staff"
  | "Online Business Manager"
  | "Executive Assistant";

export type ResumeCoreTrack = Exclude<ResumeTrackLens, "All">;

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

export interface ResumePillar {
  title: string;
  track: ResumeCoreTrack;
  items: string[];
}

export interface ResumeRoleBullet {
  lead: string;
  detail: string;
}

export interface ResumeRole {
  id: string;
  company: string;
  descriptor?: string;
  location: string;
  period: string;
  title: string;
  tracks: ResumeCoreTrack[];
  bullets: ResumeRoleBullet[];
  featured?: boolean;
}

export interface ResumeEndorsement {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export interface ExecutiveResumeData {
  fullName: string;
  subtitle: string;
  location: string;
  phone: string;
  linkedinUrl: string;
  linkedinLabel: string;
  summary: string;
  pillars: ResumePillar[];
  roles: ResumeRole[];
  education: {
    institution: string;
    degree: string;
    locationYear: string;
    honors: string[];
    languages: string[];
  };
  systems: {
    category: string;
    detail: string;
  }[];
  endorsements: ResumeEndorsement[];
}
