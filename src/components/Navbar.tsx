"use client";

import React from "react";
import type { VisitorMode } from "@/types";
import { BRAND_CONFIG } from "@/config/siteData";

interface NavbarProps {
  mode: VisitorMode;
  onModeChange: (mode: VisitorMode) => void;
}

export default function Navbar({ mode }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-[#0A0A0A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-neutral-100 transition-opacity hover:opacity-80"
          aria-label="Dawn Maley Home"
        >
          {BRAND_CONFIG.principalName}
        </a>

        <nav
          className="hidden items-center gap-8 sm:flex"
          aria-label="Primary navigation"
        >
          <a
            href="#diagnostic"
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
          >
            Calculator
          </a>
          <a
            href="#case-studies"
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
          >
            Experience
          </a>
          <a
            href="#retainers"
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
          >
            Services
          </a>
        </nav>

        <a
          href={mode === "freelance" ? "#retainers" : "#contact"}
          className="rounded-lg bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-950 transition-colors hover:bg-neutral-300"
        >
          {mode === "freelance" ? "Work Together" : "Request Dossier"}
        </a>
      </div>
    </header>
  );
}
