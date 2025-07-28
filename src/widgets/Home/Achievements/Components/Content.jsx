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
    <section className="w-full px-4 sm:px-6 lg:px-[5vw] pb-14 bg-white_shade" data-aos="fade-up">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        Achievements
      </h2>

      {/* Marquee Section */}
      <div className="bg-white shadow-custom rounded-2xl p-6 md:p-10 overflow-hidden">
        <div className="relative overflow-hidden w-full group">
          <div className="flex w-max animate-marquee gap-4 sm:gap-6 group-hover:[animation-play-state:paused]">
            {[...achievements, ...achievements].map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] sm:min-w-[300px] bg-primary-100 text-primary rounded-xl px-5 py-3 sm:px-6 sm:py-4 shadow-md flex items-center gap-3 font-medium"
              >
                <FiAward className="text-lg shrink-0" />
                <span className="text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
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
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
