"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import type { LeadSubmission, VisitorMode } from "@/types";
import { BRAND_CONFIG, resolveCalendarBookingUrl } from "@/config/siteData";
import { submitDualTrackLead } from "@/lib/firebase";

interface DualTrackContactProps {
  mode: VisitorMode;
  onModeChange: (mode: VisitorMode) => void;
  recommendedTier?: string;
  estimatedMonthlyHoursSaved?: number;
  onEmailChange?: (email: string) => void;
}

export default function DualTrackContact({
  mode,
  onModeChange,
  recommendedTier,
  estimatedMonthlyHoursSaved,
  onEmailChange,
}: DualTrackContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTrack, setSubmittedTrack] = useState<VisitorMode | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const calendarUrl = resolveCalendarBookingUrl();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const payload: LeadSubmission = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      track: mode,
      ...(mode === "freelance" && recommendedTier ? { recommendedTier } : {}),
      ...(mode === "freelance" &&
      typeof estimatedMonthlyHoursSaved === "number"
        ? { estimatedMonthlyHoursSaved }
        : {}),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      await submitDualTrackLead(payload);
      setSubmittedTrack(mode);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Unable to submit right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Direct Inquiry
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100">
            Initiate an Executive Brief
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Select your track below to book a fractional engagement or request
            full-time executive credentials.
          </p>
        </div>

        {/* Dual-Track Tabs */}
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="Inquiry Track"
            className="inline-flex rounded-lg border border-neutral-800 bg-[#141414] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "freelance"}
              aria-label="Book Fractional Intro"
              onClick={() => {
                onModeChange("freelance");
                setSubmittedTrack(null);
              }}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                mode === "freelance"
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              Book Fractional Intro
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={mode === "fulltime"}
              aria-label="Request Full-Time Executive Dossier"
              onClick={() => {
                onModeChange("fulltime");
                setSubmittedTrack(null);
              }}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                mode === "fulltime"
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              Request Full-Time Executive Dossier
            </button>
          </div>
        </div>

        {/* Form or Confirmation Card */}
        <div className="mt-8 rounded-xl border border-neutral-800 bg-[#141414] p-6 sm:p-8">
          {submittedTrack ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
              <h3 className="mt-4 text-xl font-semibold text-neutral-100">
                {submittedTrack === "freelance"
                  ? "Fractional Operations Brief Received"
                  : "Executive Dossier Request Confirmed"}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-neutral-400">
                {submittedTrack === "freelance"
                  ? "Dawn Maley will review your operational parameters and respond within one business day."
                  : "Thank you. You may immediately download Dawn Maley’s C-Suite Executive Resume below."}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {submittedTrack === "freelance" ? (
                  <a
                    href={BRAND_CONFIG.assets.capabilitiesDeckPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Download Capabilities Deck (PDF)</span>
                  </a>
                ) : (
                  <a
                    href={BRAND_CONFIG.assets.executiveResumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Download Executive Resume (PDF)</span>
                  </a>
                )}

                {calendarUrl.startsWith("http") && (
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    <span>Schedule 15-min call</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "freelance" && recommendedTier && (
                <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-[#0A0A0A] px-4 py-3 text-xs text-neutral-400">
                  <span>
                    Diagnostic Track:{" "}
                    <strong className="text-neutral-200">
                      {recommendedTier}
                    </strong>
                  </span>
                  {typeof estimatedMonthlyHoursSaved === "number" && (
                    <span className="font-mono text-emerald-400">
                      ~{estimatedMonthlyHoursSaved} hrs/mo reclaimed
                    </span>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-xs font-medium text-neutral-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="mt-2 w-full rounded-lg border border-neutral-800 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-email"
                    className="block text-xs font-medium text-neutral-300"
                  >
                    Work Email
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (onEmailChange) {
                        onEmailChange(e.target.value);
                      }
                    }}
                    placeholder="alex@studio.com"
                    className="mt-2 w-full rounded-lg border border-neutral-800 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lead-company"
                  className="block text-xs font-medium text-neutral-300"
                >
                  Company / Studio
                </label>
                <input
                  id="lead-company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={
                    mode === "freelance"
                      ? "Studio or Agency Name"
                      : "Organization & Executive Office"
                  }
                  className="mt-2 w-full rounded-lg border border-neutral-800 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="lead-message"
                  className="block text-xs font-medium text-neutral-300"
                >
                  {mode === "freelance"
                    ? "Current Operational Bottlenecks"
                    : "Role Scope & Leadership Office Details"}
                </label>
                <textarea
                  id="lead-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    mode === "freelance"
                      ? "Share your primary goals for Calendar Defense, Inbox Triage Architecture, or Studio SOPs..."
                      : "Share details on the C-Suite principal, location/hybrid cadence, and target start window..."
                  }
                  className="mt-2 w-full rounded-lg border border-neutral-800 bg-[#0A0A0A] px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300 disabled:opacity-50"
              >
                {isSubmitting
                  ? "Transmitting..."
                  : mode === "freelance"
                    ? "Submit Fractional Inquiry & Unlock Capabilities Deck"
                    : "Request Full-Time Executive Dossier & Resume"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
