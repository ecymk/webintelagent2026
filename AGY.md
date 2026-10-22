# AGY.md — Workspace Configuration & Core Directives

## 1. Project Identity
- **Project Name:** `dawn-executive-ops`
- **Principal / Brand:** Amanda Dawn Maley (`Executive Operations & Advisory`)
- **Primary Objective:** High-converting dual-track web platform that books fractional retainer clients via Stripe Payment Links AND converts C-suite entertainment/tech recruiters for senior full-time roles.
- **Staging Target:** Subdomain on `webintelagent.com` -> Production custom domain via Vercel/Firebase Hosting.

## 2. Core Architectural Rules
- **Frontend-First Sequence:** Build, verify, and polish all client-facing UI components and interactive state with deterministic mock/config data BEFORE wiring external Firebase writes or webhook handlers.
- **Tech Stack:**
  - Framework: Next.js 15+ (App Router), React 19, TypeScript (Strict Mode)
  - Styling: Tailwind CSS + Lucide React icons
  - Backend / Lead Store: Firebase (Firestore for Dual-Track Lead CRM)
  - Payments: Stripe Payment Links (zero-bloat checkout redirect with URL config)
- **Code Quality Bar:**
  - Zero `any` types. All props and data structures must adhere to interfaces in `types/index.ts`.
  - Mobile-first responsiveness tested at `375px`, `768px`, and `1280px`.
  - All interactive sliders, filter tabs, and track-switchers must have keyboard accessibility and `aria-label` attributes.

## 3. Active Skills Index
- `.agy/skills/executive-copy-guard/SKILL.md` — Enforces high-trust, concrete C-suite operational language and bans generic assistant clichés.
- `.agy/skills/stripe-firebase-wiring/SKILL.md` — Governs frictionless Stripe Payment Link routing, calendar booking handoffs, and Firebase lead tagging.

## 4. Definition of Done (DoD)
A task is only complete when:
1. Component renders cleanly in both `freelance` and `fulltime` visitor modes.
2. `npm run build` and `npx tsc --noEmit` pass with zero errors.
3. `ARTIFACT_VERIFICATION.md` is updated with verification proof.
