"use client";

import Image from "next/image";
import React from "react";

export default function About() {
  const aboutText = `NSS HSS Adoor, founded in 1934 by scholar Vaikom Narayana Pillai, later known by Dayanandaswamikal with the goal of making Sanskrit education available for the masses, managed by the Nair Service Society. The school carries forward the visionary legacy of Bharata Kesari Sri Mannath Padmanabhan, who kindled the flame of empowerment through education.

For nearly a century, we’ve remained committed to making quality education accessible to every strata of society, nurturing each student to reach their fullest potential—be it in academics, arts, or any field they’re passionate about.

Our journey with students has always been grounded in strong secular and ethical values. We believe in shaping individuals who grow without barriers of bias or prejudice, and who are encouraged to discover their strengths, refine their talents, and pursue their dreams with confidence.`;

  const renderTextWithLineBreaks = (text) =>
    text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-[5vw]  bg-white_shade"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-10">
        {/* Responsive Card */}
        <div className="bg-white shadow-custom rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-6 w-full">
          {/* Image Section */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="/images/about/1.jpg"
                alt="nsshssadoor"
                fill
                className="object-cover rounded-lg"
                sizes="100vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/images/about/3.jpg"
                  alt="nsshssadoor"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/images/about/2.jpg"
                  alt="nsshssadoor"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <h3 className="text-[5.5vw] sm:text-[3.5vw] md:text-[2vw] font-bold text-primary leading-snug">
              About
            </h3>
            <h3 className="text-[5.5vw] sm:text-[3.5vw] md:text-[2vw] font-bold text-primary leading-snug">
              NSS Higher Secondary School
            </h3>
            <p className="text-font-secondary font-semibold text-[3.5vw] sm:text-[2.8vw] md:text-[1.2vw]">
              Since 1934, Adoor, Pathanamthitta, Kerala
            </p>
            <p className="text-font-secondary text-[3.2vw] sm:text-[2.6vw] md:text-base leading-relaxed text-justify">
              {renderTextWithLineBreaks(aboutText)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
