"use client";

import React, { useEffect, useState, useRef } from "react";
import "@styles/banner.scss";
import Image from "@components/Image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const images = [
  "/images/bg/bg2.jpg",
  "/images/bg/bg1.jpg",
  "/images/bg/bg4.jpg",
  "/images/bg/bg3.jpg",
  "/images/bg/bg5.jpg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const imageCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-screen h-[90vh] md:h-[82vh] overflow-hidden mt-[10vh] md:mt-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
            index === currentIndex
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-95 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Centered Content */}
          <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-[5vw] text-center gap-6">
            <div className="bg-black/30 backdrop-blur-md p-4 sm:p-6 rounded-lg max-w-[90vw] md:max-w-[60vw] transition-all">
              <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                Welcome to <br />
                NSS Higher Secondary School
              </h1>
            </div>

            <Link href="/about">
              <button className="px-4 py-2 bg-primary text-white rounded-md font-semibold flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:bg-primary-700">
                Learn more <GoArrowRight />
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Dot Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125 shadow-md"
                : "bg-primary-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
