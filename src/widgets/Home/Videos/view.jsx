"use client";

import React from "react";

export default function Video() {
  return (
    <section
      className="w-full px-2 sm:px-4 md:px-6 lg:px-[5vw] py-10 bg-white_shade flex justify-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-3xl bg-white rounded-2xl shadow-custom px-2 sm:px-4 md:px-8 py-4 md:py-8 flex flex-col items-center gap-4 sm:gap-6 transition-all duration-300">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center mb-2">
          School Highlights
        </h2>

        {/* Video container */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md border border-gray-200">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <source src="/videos/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
