"use client";

import React, { useEffect } from "react";
import Image from "@components/Image"; // Replace if using next/image directly
import AOS from "aos";
import "aos/dist/aos.css";

export default function GeneralSecretary() {
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
        {/* Image */}
        <Image
          src="/images/g-sukumaran-nair.jpg"
          height={500}
          width={500}
          alt="Sri. G Sukumaran Nair"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full object-cover border border-gray-300 shadow-md"
        />

        {/* Titles */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
          NSS General Secretary
        </h3>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-font-secondary">
          Sri. G Sukumaran Nair
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-font-secondary leading-relaxed max-w-4xl text-center sm:text-center">
          Sri G Sukumaran Nair is the present General Secretary of the Nair Service Society (NSS),
          guiding the organization with visionary leadership and deep commitment to social reform.
          Under his stewardship, NSS continues to thrive as a beacon of educational and cultural
          empowerment. His dedication inspires institutions like ours to maintain the highest
          standards in values, service, and academic excellence.
        </p>
      </div>
    </section>
  );
}
