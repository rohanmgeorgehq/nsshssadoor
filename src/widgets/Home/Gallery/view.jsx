"use client";

import React from "react";

export default function GalleryView() {
  const images = [
    "/images/bg/bg2.jpg",
    "/images/bg/bg1.jpg",
    "/images/bg/bg4.jpg",
    "/images/bg/bg3.jpg",
    "/images/bg/bg5.jpg",
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-[5vw] py-12 bg-white_shade"
      data-aos="fade-up"
    >
      <div className="bg-white shadow-custom rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 overflow-hidden">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-primary">
          Golden Moments
        </h2>

        {/* Marquee Gallery */}
        <div className="relative overflow-hidden w-full group">
          <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Golden Moment ${index + 1}`}
                className="h-40 sm:h-48 md:h-60 w-auto rounded-lg shadow-md object-cover transition-transform duration-300 hover:scale-105"
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
