"use client";

import React, { useEffect } from "react";
import Image from "@components/Image"; // If you're not wrapping next/image, switch to `import Image from "next/image"`
import AOS from "aos";
import "aos/dist/aos.css";

export default function Content() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-[5vw] bg-white_shade">
      <div
        className="bg-white shadow-custom rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center gap-6 text-center"
        data-aos="fade-up"
      >
        {/* Founder Image */}
        <Image
          src="/images/mannam.webp"
          height={500}
          width={500}
          alt="Sri Mannathu Padmanabhan"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full object-cover border border-gray-300 shadow-md"
        />

        {/* Titles */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
          Our Founder
        </h3>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-font-secondary leading-snug">
          Bharata Kesari
          <br />
          Sri. Mannathu Padmanabhan
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-font-secondary leading-relaxed max-w-4xl text-center sm:text-center">
          Sri Mannathu Padmanabhan was a visionary social reformer, freedom
          fighter, and educationist. He founded the Nair Service Society (NSS)
          in 1914 with a mission to uplift and empower the Nair community
          through education and social development. His relentless dedication
          and leadership laid the foundation for numerous educational
          institutions, including our school. We honor his legacy by upholding
          the values of discipline, service, and excellence in everything we do.
        </p>
      </div>
    </section>
  );
}
