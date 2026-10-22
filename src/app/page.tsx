"use client";

import React, { useState, useCallback } from "react";
import type { VisitorMode } from "@/types";
import Navbar from "@/components/Navbar";
import HeroRouter from "@/components/HeroRouter";
import TimeBackCalculator from "@/components/TimeBackCalculator";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import RetainerTiers from "@/components/RetainerTiers";
import DualTrackContact from "@/components/DualTrackContact";
import { BRAND_CONFIG } from "@/config/siteData";

export default function HomePage() {
  const [mode, setMode] = useState<VisitorMode>("freelance");
  const [userEmail, setUserEmail] = useState<string>("");
  const [diagnosticSummary, setDiagnosticSummary] = useState<{
    monthlyHoursSaved: number;
    recommendedTier: string;
  }>({
    monthlyHoursSaved: 75,
    recommendedTier: "Fractional OBM & Studio Command",
  });

  const handleDiagnosticUpdate = useCallback(
    (monthlyHoursSaved: number, recommendedTierName: string) => {
      setDiagnosticSummary({
        monthlyHoursSaved,
        recommendedTier: recommendedTierName,
      });
    },
    []
  );

  const handleSelectTierForBrief = useCallback((tierName: string) => {
    setDiagnosticSummary((prev) => ({
      ...prev,
      recommendedTier: tierName,
    }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5]">
      <Navbar mode={mode} onModeChange={setMode} />

      <main className="flex-1">
        <HeroRouter mode={mode} onModeChange={setMode} userEmail={userEmail} />

        {/* Dynamic Priority Ordering:
            In Fractional Mode -> Calculator first, then Case Studies.
            In Full-Time Mode  -> Case Studies first, then Calculator. */}
        {mode === "freelance" ? (
          <>
            <TimeBackCalculator
              mode={mode}
              userEmail={userEmail}
              onDiagnosticUpdate={handleDiagnosticUpdate}
            />
            <CaseStudyGrid />
          </>
        ) : (
          <>
            <CaseStudyGrid />
            <TimeBackCalculator
              mode={mode}
              userEmail={userEmail}
              onDiagnosticUpdate={handleDiagnosticUpdate}
            />
          </>
        )}

        <RetainerTiers
          userEmail={userEmail}
          onSelectTierForBrief={handleSelectTierForBrief}
        />

        <DualTrackContact
          mode={mode}
          onModeChange={setMode}
          recommendedTier={diagnosticSummary.recommendedTier}
          estimatedMonthlyHoursSaved={diagnosticSummary.monthlyHoursSaved}
          onEmailChange={setUserEmail}
        />
      </main>

      <footer className="border-t border-neutral-900 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-neutral-300">
              {BRAND_CONFIG.fullLegalName}
            </span>
            <span className="text-neutral-700">•</span>
            <a
              href="https://webintelagent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-neutral-500 transition-colors hover:text-neutral-300"
            >
              dawn.webintelagent.com
            </a>
          </div>
          <p className="text-xs text-neutral-500">
            C-Suite Executive Operations • Entertainment, Gaming &amp; Tech
          </p>
        </div>
      </footer>
    </div>
  );
}
