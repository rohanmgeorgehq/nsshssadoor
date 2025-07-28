"use client";

import React from "react";
import { FiAward } from "react-icons/fi";

const achievements = [
  "State-level Science Fair Winner 2024",
  "District Arts Festival Champions 2023",
  "Best NSS Unit Award 2023",
  "100% SSLC & Plus Two Result 2023",
  "Top Scorer in Higher Secondary Exams 2024",
  "Best Eco Club Award 2023",
];

export default function Content() {
  return (
    <section
      className="w-full px-3 sm:px-6 lg:px-[5vw] py-14 bg-white_shade"
      data-aos="fade-up"
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary text-center mb-8">
        Achievements
      </h2>

      {/* Default Card Container */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-10 md:p-12">
        <div className="relative overflow-hidden w-full group">
          <div className="flex w-max animate-marquee gap-8 sm:gap-10 group-hover:[animation-play-state:paused]">
            {[...achievements, ...achievements].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 px-2 sm:px-3 py-2"
              >
                <FiAward className="text-primary text-lg sm:text-xl md:text-2xl shrink-0" />
                <span className="text-base sm:text-lg md:text-xl text-gray-900">
                  {item}
                </span>
              </div>
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
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
