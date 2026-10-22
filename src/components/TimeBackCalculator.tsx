"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import type { RetainerTier, VisitorMode } from "@/types";
import {
  DIAGNOSTIC_SLIDERS,
  RETAINER_TIERS,
  resolveCalendarBookingUrl,
  resolveStripeUrl,
} from "@/config/siteData";

interface TimeBackCalculatorProps {
  mode: VisitorMode;
  userEmail?: string;
  onDiagnosticUpdate?: (
    monthlyHoursSaved: number,
    recommendedTierName: string
  ) => void;
}

interface SliderValues {
  inboxHours: number;
  calendarHours: number;
  logisticsHours: number;
  hourlyRate: number;
}

export default function TimeBackCalculator({
  userEmail,
  onDiagnosticUpdate,
}: TimeBackCalculatorProps) {
  const [values, setValues] = useState<SliderValues>({
    inboxHours: 8,
    calendarHours: 6,
    logisticsHours: 7,
    hourlyRate: 350,
  });

  const weeklyOperationalDrag =
    values.inboxHours + values.calendarHours + values.logisticsHours;
  const monthlyHoursReclaimed = Math.round(weeklyOperationalDrag * 4.33 * 0.82);
  const monthlyDollarValueReclaimed =
    monthlyHoursReclaimed * values.hourlyRate;

  const recommendedTier: RetainerTier =
    monthlyHoursReclaimed < 32
      ? RETAINER_TIERS[0]
      : monthlyHoursReclaimed <= 68
        ? RETAINER_TIERS[1]
        : RETAINER_TIERS[2];

  useEffect(() => {
    if (onDiagnosticUpdate) {
      onDiagnosticUpdate(monthlyHoursReclaimed, recommendedTier.name);
    }
  }, [monthlyHoursReclaimed, recommendedTier.name, onDiagnosticUpdate]);

  const handleSliderChange = (key: keyof SliderValues, newValue: number) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const stripeCheckoutUrl = resolveStripeUrl(
    recommendedTier.stripeUrlKey,
    userEmail
  );
  const calendarUrl = resolveCalendarBookingUrl();

  return (
    <section id="diagnostic" className="border-b border-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Clean Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Time-Back Diagnostic
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100">
            Estimate Your Reclaimed Bandwidth
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Adjust the sliders to see how much leadership capacity is recovered
             through structured Calendar Defense and Inbox Triage Architecture.
          </p>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: 4 Simple Sliders (7 Cols) */}
          <div className="space-y-8 lg:col-span-7">
            {DIAGNOSTIC_SLIDERS.map((slider) => {
              const currentValue = values[slider.id];
              return (
                <div key={slider.id} className="space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <label
                      htmlFor={`slider-${slider.id}`}
                      className="text-sm font-medium text-neutral-200"
                    >
                      {slider.label}
                    </label>
                    <span className="font-mono text-sm font-semibold text-amber-400">
                      {slider.unit === "$/hr"
                        ? `$${currentValue.toLocaleString()}/hr`
                        : `${currentValue} ${slider.unit}`}
                    </span>
                  </div>

                  <input
                    id={`slider-${slider.id}`}
                    type="range"
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    value={currentValue}
                    aria-label={slider.label}
                    onChange={(e) =>
                      handleSliderChange(slider.id, Number(e.target.value))
                    }
                    className="executive-slider"
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Minimal Summary Card (5 Cols) */}
          <div className="rounded-xl border border-neutral-800 bg-[#141414] p-6 sm:p-8 lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 border-b border-neutral-800 pb-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Time Reclaimed
                </p>
                <p className="mt-2 font-mono text-3xl font-semibold text-emerald-400">
                  {monthlyHoursReclaimed}h
                  <span className="ml-1 text-sm font-normal text-neutral-500">
                    /mo
                  </span>
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Monthly Value
                </p>
                <p className="mt-2 font-mono text-3xl font-semibold text-neutral-100">
                  ${monthlyDollarValueReclaimed.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                Recommended Engagement
              </p>
              <div className="mt-2 flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-neutral-100">
                  {recommendedTier.name}
                </h3>
                <span className="font-mono text-sm text-amber-400">
                  {recommendedTier.priceLabel}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {recommendedTier.description}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={stripeCheckoutUrl}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
              >
                <span>Select {recommendedTier.name}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="text-center">
                <a
                  href={calendarUrl}
                  target={calendarUrl.startsWith("http") ? "_blank" : undefined}
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
        </div>
      </div>
    </section>
  );
}
