"use client";

import React from "react";
import { announcements } from "@utils/utils";
import { FaBullhorn } from "react-icons/fa";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-white text-xs sm:text-sm md:text-base py-2 z-[60] relative overflow-hidden shadow-md">
      <div className="px-[5vw] flex items-center gap-4 group">
        {/* Icon + NEW Badge */}
        <div className="flex items-center gap-2 font-semibold shrink-0">
          <FaBullhorn className="animate-pulse" />
          <span className="bg-white text-primary text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
            NEW
          </span>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden flex-1">
          <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
            {[...announcements, ...announcements].map((item, i) => (
              <span key={i} className="whitespace-nowrap font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
