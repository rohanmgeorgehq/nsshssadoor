"use client";

import React from "react";

export default function Bottombar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-[5vw] py-5 bg-white border-t border-gray-200 text-font-secondary">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left text-xs sm:text-sm">
        {/* Left - Copyright */}
        <div className="opacity-80">
          © {currentYear} <strong>NSS HSS Adoor</strong>. All rights reserved.
        </div>
        {/* Right - Developer Credit */}
        <div className="opacity-90">
          Made with{" "}
          <span 
            role="img"
            aria-label="heart"
            className="inline-block text-red-500 animate-pulse"
            style={{ animationDuration: "2s", animationIterationCount: "infinite" }}
          >
            ❤️
          </span>{" "}
          by{" "}
          <span className="font-semibold text-primary">
            Rohan M George
          </span>
          <span className="hidden sm:inline">
            &nbsp;| +2 Computer Science, 2024–2026 Batch
          </span>
          <br className="sm:hidden" />
          <span className="inline sm:hidden">
            &nbsp;+2 Computer Science, 2024–2026 Batch
          </span>
        </div>
      </div>
    </footer>
  );
}
