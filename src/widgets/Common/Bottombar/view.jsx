"use client";

import React from "react";

export default function Bottombar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-[5vw] py-5 bg-white border-t border-gray-200 text-font-secondary">
      <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Left - Copyright */}
        <div className="opacity-80">
          © {currentYear} <strong>NSS HSS Adoor</strong>. All rights reserved.
        </div>

        {/* Right - Developer Credit */}
        <div className="opacity-90">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-semibold text-primary">Rohan M George</span>{" "}
          <span className="block sm:inline">
            &nbsp;| +2 Computer Science, 2024–2026 Batch
          </span>
        </div>
      </div>
    </footer>
  );
}
