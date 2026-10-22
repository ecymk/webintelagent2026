# IMPLEMENTATION.md — System Architecture & Execution Roadmap

## 1. Directory Structure
```text
dawn-executive-ops/
├── .agy/
│   └── skills/
│       ├── executive-copy-guard/SKILL.md
│       └── stripe-firebase-wiring/SKILL.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroRouter.tsx
│   │   ├── TimeBackCalculator.tsx
│   │   ├── CaseStudyGrid.tsx
│   │   ├── RetainerTiers.tsx
│   │   └── DualTrackContact.tsx
│   ├── config/
│   │   └── siteData.ts        # Single config file for case studies, pricing & Stripe links
│   ├── lib/
│   │   └── firebase.ts        # Firestore client initialization & lead submission helper
│   └── types/
│       └── index.ts           # Strict TypeScript interfaces
├── public/
│   ├── Dawn-Maley-Executive-Resume.pdf
│   └── Dawn-Maley-Capabilities-Deck.pdf
├── AGY.md
├── MARKUP_DOCUMENT.md
├── IMPLEMENTATION.md
└── ARTIFACT_VERIFICATION.md
```

## 2. Core TypeScript Interfaces (`src/types/index.ts`)
```typescript
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
```

## 3. Environment Configuration (`.env.example`)
```env
# Stripe Payment Links (Replace with live Dawn Maley Stripe Payment Links)
NEXT_PUBLIC_STRIPE_AUDIT_URL="https://buy.stripe.com/test_audit_90min"
NEXT_PUBLIC_STRIPE_DEFENSE_URL="https://buy.stripe.com/test_retainer_40hr"
NEXT_PUBLIC_STRIPE_OBM_URL="https://buy.stripe.com/test_retainer_80hr"
NEXT_PUBLIC_CALENDAR_BOOKING_URL="https://cal.com/dawn-maley/discovery"

# Firebase Config (For Dual-Track CRM Lead Capture)
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
```
