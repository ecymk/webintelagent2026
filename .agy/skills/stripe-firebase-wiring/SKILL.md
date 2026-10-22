---
name: stripe-firebase-wiring
description: Standardizes Stripe Payment Link checkout routing, URL query pre-filling, and Firebase lead capture with resilient local dev fallbacks.
---

# Stripe & Firebase Conversion Protocol

## 1. Stripe Payment Link Rules
- Always read Stripe checkout URLs from `process.env.NEXT_PUBLIC_STRIPE_*` with a safe fallback to `#contact` if an environment variable is empty during staging.
- Append `?prefilled_email=` when user email state is available in the session.
- Pair every high-ticket retainer button with a secondary low-friction option: `"Or book a 15-min fit call →"` pointing to `NEXT_PUBLIC_CALENDAR_BOOKING_URL`.

## 2. Resilient Firebase Lead Capture
- Before calling `addDoc(collection(db, "leads"), payload)`, check if `process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID` is defined.
- If undefined (local frontend-first staging), simulate a 600ms network delay, log the structured `LeadSubmission` object to the console, and display the tailored confirmation state (offering either the **Dawn Maley Executive Capabilities Deck PDF** for freelance leads or the **Executive Resume PDF** for full-time recruiters).
