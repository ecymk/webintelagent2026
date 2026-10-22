"use client";

import React, { useState } from "react";
import type { CaseStudyCategory } from "@/types";
import { CASE_STUDIES, CASE_STUDY_CATEGORIES } from "@/config/siteData";

export default function CaseStudyGrid() {
  const [activeCategory, setActiveCategory] =
    useState<CaseStudyCategory>("All");

  const filteredStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) =>
          study.categories.includes(activeCategory)
        );

  return (
    <section
      id="case-studies"
      className="border-b border-neutral-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Clean Header + Filter Pills */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Proven Track Record
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-100">
              C-Suite Operational Case Studies
            </h2>
          </div>

          {/* Minimal Filter Pills */}
          <div
            role="group"
            aria-label="Filter case studies by operational category"
            className="flex flex-wrap gap-2"
          >
            {CASE_STUDY_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  aria-label={`Filter by ${category}`}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "bg-neutral-100 text-neutral-950"
                      : "border border-neutral-800 bg-[#141414] text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-[#141414] p-6 sm:p-8"
            >
              <div>
                {/* Top Metadata */}
                <div className="flex items-baseline justify-between gap-2 border-b border-neutral-800 pb-4">
                  <h3 className="text-lg font-semibold text-neutral-100">
                    {study.company}
                  </h3>
                  <span className="font-mono text-xs font-medium text-emerald-400">
                    {study.highlightMetric}
                  </span>
                </div>

                <p className="mt-3 text-xs font-medium text-amber-400/90">
                  {study.roleTitle}
                </p>

                {/* 3 Scannable Parts: The Brief, The System Built, The Outcome */}
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                      01. The Brief
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-neutral-300">
                      {study.brief}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                      02. The System Built
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-neutral-300">
                      {study.systemBuilt}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                      03. The Outcome
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-neutral-100">
                      {study.outcome}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Subtle Category Footnote */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-neutral-800/80 pt-4">
                {study.categories.map((cat) => (
                  <span
                    key={cat}
                    className="font-mono text-[11px] text-neutral-500"
                  >
                    #{cat.replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
