import type {
  CaseStudy,
  CaseStudyCategory,
  CredibilityPartner,
  DiagnosticSliderConfig,
  RetainerTier,
} from "@/types";

export const BRAND_CONFIG = {
  principalName: "Dawn Maley",
  fullLegalName: "Amanda Dawn Maley",
  entityName: "Executive Operations & Advisory",
  heroBadge: "C-SUITE EXECUTIVE OPERATIONS • ENTERTAINMENT, GAMING & TECH",
  heroHeadline: "Protect Your Creative Vision. Reclaim Your Calendar.",
  tracks: {
    freelance: {
      toggleLabel: "For Founders & Agencies (Fractional)",
      shortBadge: "FRACTIONAL OBM & EXECUTIVE DEFENSE",
      subheadline:
        "Deploy C-suite operational command without full-time overhead. Dawn Maley engineers Calendar Defense, Inbox Triage Architecture, and Cross-Functional Studio Logistics for creative founders, game studios, and scaling agencies.",
      primaryCtaLabel: "Run Founder Time-Back Diagnostic",
      primaryCtaHref: "#diagnostic",
      secondaryCtaLabel: "Or book a 15-min fit call →",
      pillars: [
        {
          label: "Calendar Defense Protocol",
          metric: "15–25+ hrs/wk",
          detail: "Deep-work blocks protected via tiered Gatekeeping & Stakeholder Routing.",
        },
        {
          label: "Inbox Triage Architecture",
          metric: "Zero Bottlenecks",
          detail: "Executive brief digests, SLA-driven routing, and autonomous draft execution.",
        },
        {
          label: "Studio & Agency SOPs",
          metric: "90-Day Turnkey",
          detail: "Vendor onboarding, production cadences, and cross-timezone travel command.",
        },
      ],
    },
    fulltime: {
      toggleLabel: "For Executive Hiring",
      shortBadge: "FULL-TIME C-SUITE OPERATIONS PARTNER",
      subheadline:
        "Battle-tested Senior Executive Operations Partner to SVPs, Studio Heads, and C-Suite Principals across Sony Interactive Entertainment, Crunchyroll, and Trailer Park Group. Ready to anchor high-velocity entertainment, gaming, and tech leadership offices.",
      primaryCtaLabel: "Inspect C-Suite Case Studies",
      primaryCtaHref: "#case-studies",
      secondaryCtaLabel: "Request Full-Time Executive Dossier →",
      pillars: [
        {
          label: "Enterprise Pedigree",
          metric: "SIE • Crunchyroll • TPG",
          detail: "Proven C-suite gatekeeping across global gaming, streaming, and entertainment agencies.",
        },
        {
          label: "Global Travel & Summit Command",
          metric: "Multi-Continent",
          detail: "End-to-end itinerary engineering, board summits, and greenroom logistics.",
        },
        {
          label: "Executive Bandwidth Recovery",
          metric: "38% Velocity Gain",
          detail: "High-discretion board prep, budget reconciliation, and cross-studio alignment.",
        },
      ],
    },
  },
  assets: {
    executiveResumePdf: "/Dawn-Maley-Executive-Resume.pdf",
    capabilitiesDeckPdf: "/Dawn-Maley-Capabilities-Deck.pdf",
  },
} as const;

export const CREDIBILITY_PARTNERS: CredibilityPartner[] = [
  {
    id: "sie",
    name: "Sony Interactive Entertainment",
    shortName: "PlayStation / SIE",
    sector: "Global Gaming & Hardware Ecosystem",
    executiveScope: "C-Suite Calendar Defense & Cross-Studio Alignment",
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    shortName: "Crunchyroll",
    sector: "Global Anime & Streaming Media",
    executiveScope: "Executive Operations, Global Travel & Production Logistics",
  },
  {
    id: "tpg",
    name: "Trailer Park Group",
    shortName: "TPG",
    sector: "Premier Entertainment Marketing & Creative Agency",
    executiveScope: "Creative Leadership Gatekeeping & High-Volume Studio Ops",
  },
];

export const DIAGNOSTIC_SLIDERS: DiagnosticSliderConfig[] = [
  {
    id: "inboxHours",
    label: "Inbox Triage & Stakeholder Routing",
    operationalTerm: "Inbox Triage Architecture",
    description:
      "Weekly hours lost sorting high-volume email, Slack threads, vendor follow-ups, and unvetted requests.",
    min: 2,
    max: 25,
    step: 1,
    defaultValue: 8,
    unit: "hrs/wk",
  },
  {
    id: "calendarHours",
    label: "Calendar Rescheduling & Gatekeeping",
    operationalTerm: "Calendar Defense",
    description:
      "Weekly hours fragmented by scheduling conflicts, back-to-back context switching, and unprotected creative blocks.",
    min: 2,
    max: 20,
    step: 1,
    defaultValue: 6,
    unit: "hrs/wk",
  },
  {
    id: "logisticsHours",
    label: "Studio Ops, Vendor & Travel Logistics",
    operationalTerm: "Cross-Functional Studio Logistics",
    description:
      "Weekly hours consumed by travel changes, invoice approvals, contractor onboarding, and meeting prep.",
    min: 2,
    max: 25,
    step: 1,
    defaultValue: 7,
    unit: "hrs/wk",
  },
  {
    id: "hourlyRate",
    label: "Founder / Principal Effective Hourly Valuation",
    operationalTerm: "Executive Bandwidth Recovery",
    description:
      "Estimated revenue or strategic enterprise value generated per hour of focused leadership execution.",
    min: 150,
    max: 1000,
    step: 25,
    defaultValue: 350,
    unit: "$/hr",
  },
];

export const CASE_STUDY_CATEGORIES: CaseStudyCategory[] = [
  "All",
  "Calendar Defense",
  "Studio Ops",
  "Global Travel",
  "C-Suite Support",
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sony-interactive-entertainment",
    company: "Sony Interactive Entertainment",
    roleTitle: "Senior Executive Operations Partner — Studio & Platform Leadership",
    categories: ["Calendar Defense", "C-Suite Support", "Global Travel"],
    brief:
      "Senior leadership faced relentless multi-timezone scheduling collisions across Tokyo, San Mateo, and European studio hubs, threatening deep-work product review cycles and milestone sign-offs.",
    systemBuilt:
      "Engineered a tiered Calendar Defense architecture with color-coded priority buffers, asynchronous pre-read enforcement 24 hours prior to all executive reviews, and automated Gatekeeping & Stakeholder Routing protocols.",
    outcome:
      "Reclaimed 16+ hours of weekly leadership bandwidth, eliminated double-booked global summit windows, and accelerated cross-studio decision velocity by 38%.",
    highlightMetric: "16+ HRS/WK RECLAIMED",
  },
  {
    id: "crunchyroll",
    company: "Crunchyroll",
    roleTitle: "Executive Operations & Global Logistics Partner",
    categories: ["Global Travel", "Studio Ops", "C-Suite Support"],
    brief:
      "Rapid global expansion and high-stakes international expo appearances created acute friction across executive travel itineraries, cross-border vendor approvals, and quarterly town-hall production.",
    systemBuilt:
      "Deployed end-to-end Global Travel Command SOPs with contingency routing, centralized Inbox Triage Architecture for external licensing partners, and standardized quarterly board-deck assembly pipelines.",
    outcome:
      "Delivered 100% zero-drop international executive roadshows across 4 continents while cutting vendor procurement and expense reconciliation turnaround times by 52%.",
    highlightMetric: "52% FASTER OPS TURNAROUND",
  },
  {
    id: "trailer-park-group",
    company: "Trailer Park Group",
    roleTitle: "Executive Operations Partner — Creative & Agency Leadership",
    categories: ["Studio Ops", "Calendar Defense", "C-Suite Support"],
    brief:
      "High-volume theatrical and gaming campaign launches required constant creative principal sign-offs, causing inbox saturation and bottlenecking studio producers awaiting executive feedback.",
    systemBuilt:
      "Architected a twice-daily Executive Bandwidth Recovery briefing cadence, separating urgent studio approvals from routine stakeholder updates and installing strict creative review blocks.",
    outcome:
      "Protected 20 hours per week of uninterrupted creative direction time and reduced internal producer sign-off wait times from 48 hours to under 4 hours.",
    highlightMetric: "<4 HR APPROVAL VELOCITY",
  },
];

export const RETAINER_TIERS: RetainerTier[] = [
  {
    id: "ops-audit-90",
    name: "90-Min Executive Ops Audit",
    badge: "LOW-FRICTION DIAGNOSTIC",
    priceLabel: "$495 One-Time",
    hoursPerMonth: 2,
    description:
      "Rapid architectural diagnostic for founders and creative principals ready to eliminate calendar fragmentation and inbox bottlenecks immediately.",
    deliverables: [
      "90-minute live Calendar Defense & Inbox Triage Architecture teardown",
      "Custom 30-Day Executive Bandwidth Recovery blueprint & SOP checklist",
      "Tooling & delegation audit across Slack, Google Workspace / M365, and Notion/Linear",
      "100% credited toward your first month if upgrading to a monthly retainer within 14 days",
    ],
    stripeUrlKey: "NEXT_PUBLIC_STRIPE_AUDIT_URL",
    featured: false,
  },
  {
    id: "executive-defense-40",
    name: "Executive Defense Retainer",
    badge: "MOST POPULAR • FRACTIONAL EA",
    priceLabel: "$3,600 / mo",
    hoursPerMonth: 40,
    description:
      "Dedicated C-suite shield protecting 10 hours per week of leadership focus through disciplined Gatekeeping & Stakeholder Routing.",
    deliverables: [
      "40 hours/month of dedicated senior executive operations execution",
      "Daily Inbox Triage Architecture & 9:00 AM / 4:00 PM executive command briefs",
      "Active Calendar Defense, time-block fortification, and conflict resolution",
      "End-to-end domestic & international travel logistics, expenses, and VIP scheduling",
    ],
    stripeUrlKey: "NEXT_PUBLIC_STRIPE_DEFENSE_URL",
    featured: true,
  },
  {
    id: "fractional-obm-80",
    name: "Fractional OBM & Studio Command",
    badge: "FULL STUDIO & AGENCY OPS",
    priceLabel: "$6,800 / mo",
    hoursPerMonth: 80,
    description:
      "Comprehensive Online Business Manager (OBM) partnership embedding studio-grade Standard Operating Procedures (SOPs) across your entire organization.",
    deliverables: [
      "80 hours/month of Fractional OBM & C-suite operational leadership",
      "Cross-Functional Studio Logistics, vendor/contractor onboarding, and SLA tracking",
      "Executive board prep, quarterly OKR tracking, and financial/invoice hygiene",
      "Full SOP library creation + everything included in Executive Defense",
    ],
    stripeUrlKey: "NEXT_PUBLIC_STRIPE_OBM_URL",
    featured: false,
  },
];

export function resolveStripeUrl(
  stripeUrlKey: string,
  prefilledEmail?: string
): string {
  const envMap: Record<string, string | undefined> = {
    NEXT_PUBLIC_STRIPE_AUDIT_URL: process.env.NEXT_PUBLIC_STRIPE_AUDIT_URL,
    NEXT_PUBLIC_STRIPE_DEFENSE_URL: process.env.NEXT_PUBLIC_STRIPE_DEFENSE_URL,
    NEXT_PUBLIC_STRIPE_OBM_URL: process.env.NEXT_PUBLIC_STRIPE_OBM_URL,
  };

  const rawUrl = envMap[stripeUrlKey]?.trim();
  if (!rawUrl) {
    return "#contact";
  }

  if (prefilledEmail && prefilledEmail.includes("@")) {
    const separator = rawUrl.includes("?") ? "&" : "?";
    return `${rawUrl}${separator}prefilled_email=${encodeURIComponent(
      prefilledEmail.trim()
    )}`;
  }

  return rawUrl;
}

export function resolveCalendarBookingUrl(): string {
  const rawUrl = process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL?.trim();
  return rawUrl && rawUrl.length > 0 ? rawUrl : "#contact";
}
