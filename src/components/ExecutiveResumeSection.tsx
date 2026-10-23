"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, FileText } from "lucide-react";
import type { ResumeTrackLens, VisitorMode } from "@/types";
import {
  BRAND_CONFIG,
  EXECUTIVE_RESUME_DATA,
  RESUME_TRACK_LENSES,
} from "@/config/siteData";

interface ExecutiveResumeSectionProps {
  mode: VisitorMode;
}

export default function ExecutiveResumeSection({
  mode,
}: ExecutiveResumeSectionProps) {
  const [activeLens, setActiveLens] = useState<ResumeTrackLens>("All");
  const [showAllInCompactMode, setShowAllInCompactMode] =
    useState<boolean>(false);

  const matchingRoles =
    activeLens === "All"
      ? EXECUTIVE_RESUME_DATA.roles
      : EXECUTIVE_RESUME_DATA.roles.filter((role) =>
          role.tracks.includes(activeLens)
        );

  const shouldShowAll =
    mode === "fulltime" || activeLens !== "All" || showAllInCompactMode;

  const visibleRoles = shouldShowAll
    ? matchingRoles
    : matchingRoles.filter((role) => role.featured);

  const hiddenCount = matchingRoles.length - visibleRoles.length;

  return (
    <section
      id="resume"
      className="border-b border-neutral-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Top Header + Direct PDF / LinkedIn Actions */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
              Verified Executive Dossier • 2016 – 2026
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100">
              {EXECUTIVE_RESUME_DATA.fullName}
            </h2>
            <p className="mt-1.5 font-mono text-xs uppercase tracking-wider text-neutral-400">
              {EXECUTIVE_RESUME_DATA.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BRAND_CONFIG.assets.executiveResumePdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Amanda Dawn Maley Executive Resume PDF"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-amber-300 sm:text-sm"
            >
              <FileText className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={EXECUTIVE_RESUME_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Amanda Dawn Maley LinkedIn Profile"
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-[#141414] px-4 py-2.5 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-neutral-100 sm:text-sm"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          {EXECUTIVE_RESUME_DATA.summary}
        </p>

        {/* Role-Track Filter Bar */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-neutral-900 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Filter Dossier by Target Role Lens
          </p>

          <div
            role="group"
            aria-label="Filter resume by executive role track"
            className="flex flex-wrap gap-2"
          >
            {RESUME_TRACK_LENSES.map((lens) => {
              const isSelected = activeLens === lens;
              return (
                <button
                  key={lens}
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`Filter resume for ${lens}`}
                  onClick={() => setActiveLens(lens)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-neutral-100 text-neutral-950"
                      : "border border-neutral-800 bg-[#141414] text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {lens === "All" ? "All Tracks" : lens}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Core Operational Architecture */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {EXECUTIVE_RESUME_DATA.pillars.map((pillar) => {
            const isHighlighted =
              activeLens !== "All" && activeLens === pillar.track;
            return (
              <div
                key={pillar.title}
                className={`rounded-xl border bg-[#141414] p-5 transition-colors ${
                  isHighlighted
                    ? "border-amber-400/60"
                    : "border-neutral-800"
                }`}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {pillar.title}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Chronological Experience List */}
        <div className="mt-12 space-y-5">
          {visibleRoles.map((role) => (
            <article
              key={role.id}
              className="rounded-xl border border-neutral-800 bg-[#141414] p-6 sm:p-7"
            >
              <div className="flex flex-col justify-between gap-2 border-b border-neutral-800/80 pb-4 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100 sm:text-lg">
                    {role.company}
                    {role.descriptor && (
                      <span className="ml-2 text-xs font-normal text-neutral-400 sm:text-sm">
                        — {role.descriptor}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-amber-400/90 sm:text-sm">
                    {role.title}
                  </p>
                </div>

                <p className="shrink-0 font-mono text-xs text-emerald-400">
                  {role.location} • {role.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-300">
                {role.bullets.map((bullet) => (
                  <li key={bullet.lead} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" />
                    <span>
                      <strong className="font-semibold text-neutral-100">
                        {bullet.lead}:
                      </strong>{" "}
                      {bullet.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 pt-1">
                {role.tracks.map((track) => (
                  <span
                    key={track}
                    className="rounded border border-neutral-800 bg-[#0A0A0A] px-2 py-0.5 font-mono text-[11px] text-neutral-400"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Progressive Disclosure Toggle in Fractional Mode */}
        {mode === "freelance" && activeLens === "All" && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllInCompactMode((prev) => !prev)}
              aria-expanded={showAllInCompactMode}
              aria-label={
                showAllInCompactMode
                  ? "Collapse earlier career roles"
                  : "Expand full 10-year career history"
              }
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-[#141414] px-4 py-2.5 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-neutral-100"
            >
              {showAllInCompactMode ? (
                <>
                  <span>Show Compact Executive Summary</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span>
                    View Full 10-Year Career History (+{hiddenCount} Earlier
                    Roles)
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Education, Systems & Verified LinkedIn Endorsements */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Education & Honors */}
          <div className="rounded-xl border border-neutral-800 bg-[#141414] p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Education &amp; Academic Honors
            </p>
            <h3 className="mt-3 text-base font-semibold text-neutral-100">
              {EXECUTIVE_RESUME_DATA.education.institution}
            </h3>
            <p className="mt-1 text-sm font-medium text-amber-400/90">
              {EXECUTIVE_RESUME_DATA.education.degree}
            </p>
            <p className="mt-0.5 font-mono text-xs text-neutral-400">
              {EXECUTIVE_RESUME_DATA.education.locationYear}
            </p>

            <div className="mt-4 space-y-2 border-t border-neutral-800 pt-4 text-xs leading-relaxed text-neutral-300 sm:text-sm">
              <p>
                <strong className="text-neutral-100">Scholarships:</strong>{" "}
                {EXECUTIVE_RESUME_DATA.education.honors.join(" • ")}
              </p>
              <p>
                <strong className="text-neutral-100">Languages:</strong>{" "}
                {EXECUTIVE_RESUME_DATA.education.languages.join(" • ")}
              </p>
            </div>
          </div>

          {/* Enterprise Systems & AI Stack */}
          <div className="rounded-xl border border-neutral-800 bg-[#141414] p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Enterprise ERP, Financial &amp; AI Stack
            </p>
            <div className="mt-3 space-y-4 text-xs leading-relaxed text-neutral-300 sm:text-sm">
              {EXECUTIVE_RESUME_DATA.systems.map((sys) => (
                <div key={sys.category}>
                  <p className="font-semibold text-neutral-100">
                    {sys.category}
                  </p>
                  <p className="mt-1 text-neutral-400">{sys.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stakeholder Endorsements */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {EXECUTIVE_RESUME_DATA.endorsements.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-xl border border-neutral-800 border-l-2 border-l-amber-400 bg-[#141414] p-6"
            >
              <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-3 font-mono text-xs text-neutral-400">
                <strong className="text-neutral-200">{item.author}</strong> —{" "}
                {item.context}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
