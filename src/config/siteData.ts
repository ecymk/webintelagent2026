import type {
  CaseStudy,
  CaseStudyCategory,
  CredibilityPartner,
  DiagnosticSliderConfig,
  ExecutiveResumeData,
  ResumeTrackLens,
  RetainerTier,
} from "@/types";

export const BRAND_CONFIG = {
  principalName: "Dawn Maley",
  fullLegalName: "Amanda Dawn Maley",
  entityName: "Executive Operations & Advisory",
  heroBadge:
    "CHIEF OF STAFF • ONLINE BUSINESS MANAGER • C-SUITE EXECUTIVE OPERATIONS",
  heroHeadline: "Protect Your Creative Vision. Reclaim Your Calendar.",
  tracks: {
    freelance: {
      toggleLabel: "For Founders & Agencies (Fractional)",
      shortBadge: "FRACTIONAL OBM & EXECUTIVE DEFENSE",
      subheadline:
        "Deploy C-suite operational command without full-time overhead. Dawn Maley combines 10+ years across PlayStation, Sony Pictures, Crunchyroll, and creative studios with Oracle PO governance, weekly payroll, and Calendar Defense.",
      primaryCtaLabel: "Run Founder Time-Back Diagnostic",
      primaryCtaHref: "#diagnostic",
      secondaryCtaLabel: "Or book a 15-min fit call →",
      pillars: [
        {
          label: "Calendar Defense Protocol",
          metric: "Multi-Principal",
          detail:
            "Deep-work blocks protected via tiered Gatekeeping & Stakeholder Routing.",
        },
        {
          label: "Oracle PO & Financial Ops",
          metric: "Zero Discrepancy",
          detail:
            "Long-form PO lifecycles, SAP Concur, client billing, and weekly payroll.",
        },
        {
          label: "Studio & Agency SOPs",
          metric: "Turnkey Command",
          detail:
            "Master podcast/show slates, vendor SLAs, recruiting, and travel logistics.",
        },
      ],
    },
    fulltime: {
      toggleLabel: "For Executive Hiring",
      shortBadge: "CHIEF OF STAFF • OBM • SENIOR EXECUTIVE ASSISTANT",
      subheadline:
        "UCLA-educated Executive Operations Partner with 10+ years anchoring CEOs, COOs, CMOs, General Counsel, and UHNW principals across Sony Interactive Entertainment (PlayStation), Sony Pictures, Crunchyroll, MALKA Media, and Trailer Park Group.",
      primaryCtaLabel: "View Interactive Executive Resume",
      primaryCtaHref: "#resume",
      secondaryCtaLabel: "Download Executive Resume (PDF) →",
      pillars: [
        {
          label: "3+ Yr Sony Ecosystem Pedigree",
          metric: "SIE • SPE • Crunchyroll",
          detail:
            "Trusted across PlayStation, Crunchyroll COO, and Sony Pictures SEVP & General Counsel.",
        },
        {
          label: "Chief of Staff & Scale Ops",
          metric: "20+ Hires & HQ Build",
          detail:
            "Weekly CEO goal cadences, CEO–CMO alignment, full-cycle recruiting, and HQ relocation.",
        },
        {
          label: "ERP & Quantitative Rigor",
          metric: "Oracle • Concur • Advantage",
          detail:
            "Rare combination of UCLA English precision and complex long-form PO & CFO ledger mastery.",
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
    name: "Sony Interactive Entertainment (PlayStation)",
    shortName: "PlayStation / SIE",
    sector: "Global Gaming & Interactive Platform (2024 – 2026)",
    executiveScope:
      "Oracle ERP Long-Form PO Governance, SAP Concur & Offsite Summit Command",
  },
  {
    id: "spe-crunchyroll",
    name: "Sony Pictures Entertainment & Crunchyroll",
    shortName: "Sony Pictures & Crunchyroll",
    sector: "Global Studio & Streaming Media (2023)",
    executiveScope:
      "Office of the COO (Crunchyroll), SEVP & General Counsel (Leah Weil) & Business Affairs",
  },
  {
    id: "studios-tech",
    name: "Skill-Up • MALKA Media • Trailer Park Group",
    shortName: "Skill-Up • MALKA • TPG",
    sector: "Enterprise Microsoft Partner & Creative Studios (2016 – 2022)",
    executiveScope:
      "CEO Priority Cadence, 20+ Hires, UHNW/Celebrity Relations & Studio Financial Ops",
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
    label: "Studio Ops, POs, Payroll & Travel Logistics",
    operationalTerm: "Cross-Functional Studio Logistics",
    description:
      "Weekly hours consumed by travel changes, PO/invoice approvals, contractor onboarding, and meeting prep.",
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
    company: "Sony Interactive Entertainment (PlayStation)",
    roleTitle:
      "Department Administrative Assistant — Procurement, Travel & Stakeholder Ops (2024 – 2026)",
    categories: ["Studio Ops", "Global Travel", "C-Suite Support"],
    brief:
      "High-velocity PlayStation teams required zero-error financial tracking across complex vendor engagements alongside seamless offsite summit and travel execution.",
    systemBuilt:
      "Owned long-form Purchase Order (PO) lifecycles and vendor billing reconciliations inside Oracle ERP, paired with SAP Concur expense governance and end-to-end offsite travel planning.",
    outcome:
      "Delivered 2.5+ years of uninterrupted procurement accuracy, cross-functional client/stakeholder routing, and executive offsite readiness inside PlayStation.",
    highlightMetric: "ORACLE ERP & POs",
  },
  {
    id: "sony-pictures-crunchyroll",
    company: "Sony Pictures & Crunchyroll",
    roleTitle:
      "C-Suite Executive Operations — COO, General Counsel & Business Affairs (2023)",
    categories: ["Calendar Defense", "C-Suite Support", "Global Travel"],
    brief:
      "High-stakes executive offices—including Sony Pictures’ Senior EVP & General Counsel (Leah Weil), Crunchyroll’s COO (Former CMO), and Business Affairs—required immediate C-suite gatekeeping.",
    systemBuilt:
      "Deployed high-discretion Calendar Defense, multi-party legal and executive scheduling, series contract review/distribution workflows, VIP gifting logistics, and SAP Concur reconciliations.",
    outcome:
      "Earned three consecutive executive re-deployments across the Sony Pictures and Crunchyroll leadership bench, transitioning directly into a multi-year tenure at PlayStation.",
    highlightMetric: "COO & SEVP/GC",
  },
  {
    id: "skillup-malka-tpg",
    company: "Skill-Up • MALKA Media • Trailer Park",
    roleTitle:
      "Chief of Staff, Online Business Manager & Studio EA Scope (2016 – 2022)",
    categories: ["Calendar Defense", "Studio Ops", "C-Suite Support", "Global Travel"],
    brief:
      "Scaling enterprise partners and creative studios needed a single operator bridging CEO/CMO priorities, UHNW & celebrity diplomacy, recruiting, payroll, and studio/HQ operations.",
    systemBuilt:
      "Ran weekly CEO goal-setting cadences, full-cycle hiring, commercial HQ + IT relocation (Skill-Up), master podcast/show calendars (MALKA), weekly payroll (SMR), and Advantage client accounting (Trailer Park).",
    outcome:
      "Recruited and onboarded 20 full-time hires plus Microsoft contractors, protected Fox/Sony/Universal studio relationships, and unified C-suite + financial operations.",
    highlightMetric: "20+ HIRES & OBM OPS",
  },
];

export const RESUME_TRACK_LENSES: ResumeTrackLens[] = [
  "All",
  "Chief of Staff",
  "Online Business Manager",
  "Executive Assistant",
];

export const EXECUTIVE_RESUME_DATA: ExecutiveResumeData = {
  fullName: "Amanda Dawn Maley",
  subtitle:
    "Chief of Staff • Online Business Manager (OBM) • Senior Executive Assistant",
  location: "Los Angeles, CA",
  phone: "213.369.3007",
  linkedinUrl: "https://www.linkedin.com/in/amanda-dawn-maley/",
  linkedinLabel: "linkedin.com/in/amanda-dawn-maley",
  summary:
    "Executive Operations Partner with 10+ years of C-Suite, agency, and studio command across Sony Interactive Entertainment (PlayStation), Sony Pictures Entertainment, Crunchyroll, Trailer Park Group, and venture-backed technology firms. Combines a UCLA English Literature foundation with rare quantitative fluency across long-form Purchase Orders (Oracle ERP), SAP Concur, payroll, client billing, and operating budgets. Trusted by CEOs, COOs, CMOs, General Counsel, and UHNW/celebrity principals to architect Calendar Defense, align cross-functional priorities, scale hiring and workplace infrastructure, and integrate modern AI workflows into calm, high-velocity leadership offices.",
  pillars: [
    {
      title: "Chief of Staff & Strategy",
      track: "Chief of Staff",
      items: [
        "Weekly CEO Priority & Goal Cadence",
        "CEO / CMO / COO / General Counsel Alignment",
        "Full-Cycle Recruiting (20+ Internal Hires)",
        "Commercial HQ Relocations & IT Rollouts",
        "Cross-Departmental Contract & Special Projects",
      ],
    },
    {
      title: "Online Business Ops (OBM)",
      track: "Online Business Manager",
      items: [
        "Oracle ERP & Long-Form PO Governance",
        "Client Billing, Invoicing & Vendor SLAs",
        "SAP Concur & 3-Card CFO Reconciliation",
        "Weekly Company-Wide Payroll & Benefits",
        "Agency Utilization & Operating Budgets",
      ],
    },
    {
      title: "C-Suite & Studio Command (EA)",
      track: "Executive Assistant",
      items: [
        "Multi-Principal Calendar Defense",
        "UHNW, Celebrity & Studio Diplomacy",
        "Domestic & International Travel Logistics",
        "Master Show & Podcast Production Slates",
        "AI-Assisted Executive & Inbox Workflows",
      ],
    },
  ],
  roles: [
    {
      id: "sie-playstation",
      company: "Sony Interactive Entertainment — PlayStation",
      location: "Los Angeles, CA",
      period: "Feb 2024 – Aug 2026",
      title:
        "Department Administrative Assistant — Procurement, Travel & Stakeholder Operations",
      tracks: ["Online Business Manager", "Executive Assistant", "Chief of Staff"],
      featured: true,
      bullets: [
        {
          lead: "PO & ERP Financial Governance",
          detail:
            "Owned complex, long-form Purchase Order (PO) lifecycles, vendor billing reconciliations, and back-end procurement tracking utilizing Oracle software with zero-discrepancy mathematical precision.",
        },
        {
          lead: "Travel, Offsites & Expense Command",
          detail:
            "Engineered multi-stakeholder travel itineraries, executive offsite summits, and departmental SAP Concur expense workflows across high-velocity PlayStation teams.",
        },
        {
          lead: "Client & Cross-Functional Liaison",
          detail:
            "Served as primary operational bridge between internal studio/platform stakeholders, external vendors, and client service teams, building executive trackers and decks in Excel, PowerPoint, and Word.",
        },
      ],
    },
    {
      id: "spe-crunchyroll",
      company: "Sony Pictures Entertainment & Crunchyroll",
      descriptor: "via Yoh Staffing",
      location: "Culver City, CA",
      period: "May 2023 – Dec 2023",
      title:
        "C-Suite Executive Operations Progression (Office of the COO • Office of the General Counsel • Business Affairs)",
      tracks: ["Executive Assistant", "Chief of Staff"],
      featured: true,
      bullets: [
        {
          lead: "Second Assistant to COO (Former CMO), Crunchyroll (Oct – Dec 2023)",
          detail:
            "Partnered with the Office of the COO at Sony’s global anime streaming subsidiary to orchestrate executive travel, offsite leadership planning, VIP/stakeholder gifting programs, and SAP Concur expense governance.",
        },
        {
          lead: "Executive Assistant to Senior EVP & General Counsel (Leah Weil), Sony Pictures (Jul – Aug 2023)",
          detail:
            "Directed high-discretion calendaring, executive gatekeeping, multi-party legal scheduling, travel logistics, and Concur reconciliations for Sony Pictures’ Chief Legal Officer.",
        },
        {
          lead: "Administrative Assistant, Business Affairs, Sony Pictures (May 2023)",
          detail:
            "Governed series-level production file architecture, initial contract reviews, and cross-departmental agreement distribution across active entertainment slates.",
        },
      ],
    },
    {
      id: "malka-media",
      company: "MALKA Media, LLC",
      descriptor: "Bi-Coastal Creative Studio & Entertainment Agency",
      location: "Santa Monica, CA",
      period: "Jun 2022 – Dec 2022",
      title:
        "Executive Assistant & Office Manager — Founding Partners & Studio Operations",
      tracks: ["Executive Assistant", "Online Business Manager"],
      featured: true,
      bullets: [
        {
          lead: "Multi-Principal Calendar Defense",
          detail:
            "Commanded daily schedules, inbox routing, and operational priorities for 2 UHNW Founding Partners plus multiple Department Heads while acting as executive face of the studio.",
        },
        {
          lead: "Production Slate & Talent Diplomacy",
          detail:
            "Managed high-touch celebrity and enterprise client relations alongside master show and podcast production calendars, studio billing coordination, internal/external events, and facility operations.",
        },
      ],
    },
    {
      id: "social-media-relations",
      company: "Social Media Relations, LLC",
      descriptor: "Digital & Advertising Agency",
      location: "Los Angeles, CA",
      period: "Aug 2021 – Jan 2022",
      title:
        "Executive Assistant — Agency Business Management, Finance & People Operations",
      tracks: ["Online Business Manager", "Executive Assistant", "Chief of Staff"],
      featured: true,
      bullets: [
        {
          lead: "Online Business Management (OBM) Scope",
          detail:
            "Combined C-Suite calendar defense and UHNW client engagement with full back-office command—running weekly company-wide payroll, agency-hour utilization budgets, accounting/vendor operations, HR administration, and end-to-end internal recruiting.",
        },
      ],
    },
    {
      id: "skill-up-technologies",
      company: "Skill-Up Technologies",
      descriptor: "Enterprise Microsoft Learning Partner",
      location: "Seattle, WA",
      period: "May 2019 – Aug 2020",
      title:
        "Executive Assistant to the CEO — Chief of Staff, Talent Acquisition & Workplace Operations Scope",
      tracks: ["Chief of Staff", "Online Business Manager", "Executive Assistant"],
      featured: true,
      bullets: [
        {
          lead: "CEO Priority Cadence & C-Suite Bridge",
          detail:
            "Partnered directly with 3 C-level UHNW principals (including CEO & CMO), driving weekly CEO goal-and-objective alignment sessions, bridging CEO–CMO execution, and liaising with senior Microsoft clients.",
        },
        {
          lead: "Full-Cycle Recruiting & People Ops",
          detail:
            "Built the internal team by recruiting and onboarding 20 full-time hires plus numerous Microsoft contract specialists end-to-end, while administering company-wide employee healthcare benefits across carriers and accounting.",
        },
        {
          lead: "Commercial HQ Relocation",
          detail:
            "Led end-to-end operational execution of moving the company from coworking into a dedicated headquarters, directing IT network cabling installation, facilities readiness, and corporate events.",
        },
      ],
    },
    {
      id: "the-oaks-school",
      company: "The Oaks School",
      descriptor: "Independent K–6 501(c)(3) Institution",
      location: "Los Angeles, CA",
      period: "Jan 2022 – Jun 2022",
      title:
        "School Executive Assistant — Leadership Office, Recruiting & UHNW Stakeholder Relations",
      tracks: ["Executive Assistant", "Online Business Manager"],
      featured: false,
      bullets: [
        {
          lead: "Leadership & UHNW Liaison",
          detail:
            "Managed calendars for Heads of School and served as trusted point of contact for UHNW and celebrity families, while leading multi-role faculty/staff recruiting and campus-wide event logistics (recruited into MALKA Media).",
        },
      ],
    },
    {
      id: "ohana-fiduciary",
      company: "Ohana Fiduciary",
      descriptor: "Private Fiduciary & Financial Services",
      location: "Seattle, WA",
      period: "Jul 2018 – May 2019",
      title: "Executive Assistant — Office of the CEO & CFO Financial Operations",
      tracks: ["Online Business Manager", "Executive Assistant"],
      featured: false,
      bullets: [
        {
          lead: "Executive & CFO Billing Operations",
          detail:
            "Directed CEO scheduling and operational support for a 15-professional fiduciary firm serving UHNW clients; reconciled all 3 corporate credit cards and expense ledgers for the CFO and executed monthly client billing.",
        },
      ],
    },
    {
      id: "heavybit-industries",
      company: "Heavybit Industries",
      descriptor: "Venture-Backed Developer Startup Incubator",
      location: "San Francisco, CA",
      period: "Jan 2018 – Apr 2018",
      title:
        "Operations Manager — Incubator Facilities, Vendor Budgets & Portfolio Liaison",
      tracks: ["Online Business Manager", "Chief of Staff"],
      featured: false,
      bullets: [
        {
          lead: "Incubator & Budget Command",
          detail:
            "Managed 3-story San Francisco headquarters supporting multiple resident tech startups; negotiated the operating budget, contracted building/trade vendors, liaised with founders, and produced bi-monthly community events.",
        },
      ],
    },
    {
      id: "trailer-park-group",
      company: "Trailer Park (Trailer Park Group)",
      descriptor: "Entertainment Marketing Agency",
      location: "Hollywood, CA",
      period: "Feb 2016 – Jan 2018",
      title:
        "Executive Assistant / Accounting Assistant — C-Suite Support & Studio Financial Tracking",
      tracks: ["Executive Assistant", "Online Business Manager"],
      featured: false,
      bullets: [
        {
          lead: "Studio C-Suite & Global Travel Support",
          detail:
            "Managed complex calendars and domestic/international travel for 2 C-level executives, acting as primary liaison to studio executives across Fox, Sony Pictures, and Universal.",
        },
        {
          lead: "Agency Financial Architecture",
          detail:
            "Governed SAP Concur expense reporting for 6–7 senior principals and designed custom client-identifier tracking structures inside Advantage agency accounting software.",
        },
      ],
    },
  ],
  education: {
    institution: "University of California, Los Angeles (UCLA)",
    degree: "Bachelor of Arts (B.A.), English Literature",
    locationYear: "Los Angeles, CA • 2010",
    honors: [
      "CHP 11-99 Foundation Scholarship (Multi-Year Recipient)",
      "UCLA Club of the Desert Scholarship",
    ],
    languages: [
      "English (Native)",
      "French (Conversational / Working Knowledge)",
    ],
  },
  systems: [
    {
      category: "ERP, Finance & Billing",
      detail:
        "Oracle ERP (PO & Procurement), Long-Form PO Reconciliation, SAP Concur, Advantage Accounting, Weekly Payroll, AP/AR & Client Invoicing",
    },
    {
      category: "Executive & AI Stack",
      detail:
        "Microsoft 365 (Advanced Excel, PowerPoint, Word, Outlook), Google Workspace, AI-Assisted Executive & Operational Workflows",
    },
  ],
  endorsements: [
    {
      id: "benjamin-flower",
      quote:
        "At every point of the process, before and after being hired, Amanda did an exceptional job bringing me aboard and setting me up for success. Her communication skills, attention to detail, follow-up, and office management created an efficient, productive environment.",
      author: "Benjamin Flower",
      context: "Colleague & Direct Stakeholder • LinkedIn Recommendation",
    },
    {
      id: "rion-haber",
      quote:
        "Amanda and I worked as mutual points of contact in a client/vendor relationship. She’s a wonderful partner, very communicative, and works quickly and proactively to resolve pain points before they become ongoing challenges.",
      author: "Rion Haber",
      context: "External Client / Vendor Partner • LinkedIn Recommendation",
    },
  ],
};

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
      "Tooling & delegation audit across Slack, Google Workspace / M365, and Concur/Oracle",
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
      "End-to-end domestic & international travel logistics, SAP Concur expenses, and VIP scheduling",
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
      "Comprehensive Online Business Manager (OBM) & fractional Chief of Staff partnership embedding studio-grade SOPs and financial rigor across your organization.",
    deliverables: [
      "80 hours/month of Fractional OBM & Chief of Staff operational leadership",
      "Long-form PO governance, client billing, weekly payroll coordination, and vendor SLAs",
      "Weekly CEO priority alignment, full-cycle recruiting support, and master production slates",
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
