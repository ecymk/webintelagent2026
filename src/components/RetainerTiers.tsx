"use client";

import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import {
  RETAINER_TIERS,
  resolveCalendarBookingUrl,
  resolveStripeUrl,
} from "@/config/siteData";

interface RetainerTiersProps {
  userEmail?: string;
  onSelectTierForBrief?: (tierName: string) => void;
}

export default function RetainerTiers({
  userEmail,
  onSelectTierForBrief,
}: RetainerTiersProps) {
  const calendarUrl = resolveCalendarBookingUrl();

  return (
    <section
      id="retainers"
      className="border-b border-neutral-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Clean Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Fractional Engagements
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100">
            Productized Executive Operations
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Transparent monthly retainers and diagnostic audits with zero
            recruiting overhead.
          </p>
        </div>

        {/* 3-Card Retainer Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {RETAINER_TIERS.map((tier) => {
            const checkoutUrl = resolveStripeUrl(tier.stripeUrlKey, userEmail);

            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-xl border p-6 sm:p-8 ${
                  tier.featured
                    ? "border-amber-400/50 bg-[#141414]"
                    : "border-neutral-800 bg-[#141414]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                      {tier.badge}
                    </span>
                    {tier.hoursPerMonth > 2 && (
                      <span className="font-mono text-xs text-neutral-400">
                        {tier.hoursPerMonth} hrs/mo
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-neutral-100">
                    {tier.name}
                  </h3>

                  <p className="mt-2 font-mono text-2xl font-semibold text-amber-400">
                    {tier.priceLabel}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-neutral-800 pt-6 text-sm text-neutral-300">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stripe CTA + Secondary Fit Call Link */}
                <div className="mt-8 space-y-3 pt-4">
                  <a
                    href={checkoutUrl}
                    onClick={() => {
                      if (
                        checkoutUrl === "#contact" &&
                        onSelectTierForBrief
                      ) {
                        onSelectTierForBrief(tier.name);
                      }
                    }}
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      tier.featured
                        ? "bg-amber-400 text-neutral-950 hover:bg-amber-300"
                        : "bg-neutral-100 text-neutral-950 hover:bg-neutral-300"
                    }`}
                  >
                    <span>
                      {tier.id === "ops-audit-90"
                        ? "Book 90-Min Audit"
                        : "Start Retainer"}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="text-center">
                    <a
                      href={calendarUrl}
                      target={
                        calendarUrl.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        calendarUrl.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-block text-xs text-neutral-400 transition-colors hover:text-neutral-200"
                    >
                      Or book a 15-min fit call →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
