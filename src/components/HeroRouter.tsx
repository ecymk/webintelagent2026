"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import type { VisitorMode } from "@/types";
import {
  BRAND_CONFIG,
  CREDIBILITY_PARTNERS,
  resolveCalendarBookingUrl,
} from "@/config/siteData";

interface HeroRouterProps {
  mode: VisitorMode;
  onModeChange: (mode: VisitorMode) => void;
  userEmail?: string;
}

export default function HeroRouter({ mode, onModeChange }: HeroRouterProps) {
  const activeTrack = BRAND_CONFIG.tracks[mode];
  const calendarUrl = resolveCalendarBookingUrl();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      onModeChange(mode === "freelance" ? "fulltime" : "freelance");
    }
  };

  return (
    <section id="top" className="border-b border-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Clean Eyebrow */}
        <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
          {BRAND_CONFIG.heroBadge}
        </p>

        {/* Simple Headline */}
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
          {BRAND_CONFIG.heroHeadline}
        </h1>

        {/* Concise Subheadline */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {activeTrack.subheadline}
        </p>

        {/* Minimal Dual-Track Segmented Control */}
        <div className="mt-10">
          <div
            role="tablist"
            aria-label="Engagement Track Router"
            onKeyDown={handleKeyDown}
            className="inline-flex rounded-lg border border-neutral-800 bg-[#141414] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "freelance"}
              aria-label="For Founders and Agencies Fractional Mode"
              onClick={() => onModeChange("freelance")}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                mode === "freelance"
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {BRAND_CONFIG.tracks.freelance.toggleLabel}
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={mode === "fulltime"}
              aria-label="For Executive Hiring Full-Time Mode"
              onClick={() => onModeChange("fulltime")}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                mode === "fulltime"
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {BRAND_CONFIG.tracks.fulltime.toggleLabel}
            </button>
          </div>
        </div>

        {/* Clean Two-Action CTA Row */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={activeTrack.primaryCtaHref}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
          >
            <span>{activeTrack.primaryCtaLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          {mode === "freelance" ? (
            <a
              href={calendarUrl}
              target={calendarUrl.startsWith("http") ? "_blank" : undefined}
              rel={
                calendarUrl.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {activeTrack.secondaryCtaLabel}
            </a>
          ) : (
            <a
              href={BRAND_CONFIG.assets.executiveResumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              Download Executive Resume (PDF) →
            </a>
          )}
        </div>

        {/* Minimal Credibility Strip */}
        <div className="mt-20 border-t border-neutral-900 pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Proven C-Suite Operations Experience
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {CREDIBILITY_PARTNERS.map((partner) => (
              <div key={partner.id}>
                <p className="text-base font-medium text-neutral-200">
                  {partner.name}
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  {partner.executiveScope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
