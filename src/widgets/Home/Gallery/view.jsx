"use client";

import React from "react";

export default function GalleryView() {
  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/12.jpg",
  ];

  return (
    <section
      className="w-full px-2 sm:px-6 lg:px-[5vw] pb-10 bg-white_shade"
      data-aos="fade-up"
    >
      <div className="bg-white shadow-custom rounded-2xl p-2 xs:p-4 sm:p-8 md:p-10 flex flex-col gap-6 overflow-hidden">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary">
          Golden Moments
        </h2>

        {/* Animated Marquee Gallery (on all screens) */}
        <div className="relative overflow-hidden w-full group">
          <div className="flex w-max gap-3 xs:gap-4 sm:gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Golden Moment ${index + 1}`}
                className="h-48 xs:h-56 sm:h-60 md:h-72 w-auto rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
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
    </section>
  );
}
