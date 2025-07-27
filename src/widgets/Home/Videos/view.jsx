"use client";

import React from "react";

export default function Video() {
  return (
    <section
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[5vw] py-12 bg-white_shade flex justify-center"
      data-aos="fade-up"
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-custom p-6 sm:p-8 md:p-10 flex flex-col items-center gap-6 transition-all duration-300">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center">
          School Highlights
        </h2>

        {/* Video Container */}
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
