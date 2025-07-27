"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurTeam() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const cards = [
    {
      name: "Adv. T. G. Jayakumar",
      title: "Manager",
      message: [
        "NSS HSS Adoor has always stood as a beacon of discipline, culture, and educational excellence.",
        "As the manager, I am proud to support a team of dedicated educators and visionary leaders who work tirelessly for the upliftment of our students.",
        "Let us continue to grow together and uphold the values that make this institution truly remarkable.",
      ],
      img: "/images/staff/manager.jpg",
      reverse: true,
    },
    {
      name: "Smt. Resmi P",
      title: "Principal",
      message: [
        "At NSS Higher Secondary School Adoor, we believe in nurturing both intellect and character. Our vision is to create a space where education is driven by values, discipline, and holistic growth.",
        "We strive to empower students with the skills and confidence they need to meet the challenges of tomorrow while staying rooted in our culture and traditions.",
        "Thank you for being part of our journey toward excellence. Together, let's build a brighter, value-rich future.",
      ],
      img: "/images/staff/principal.jpg",
      reverse: false,
    },
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[5vw] py-16 bg-white_shade"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        {cards.map((person, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col ${
              person.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Image
                src={person.img}
                width={256}
                height={256}
                alt={`${person.name}, ${person.title}`}
                className="rounded-full object-cover border border-gray-300 shadow-md w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64"
              />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                {person.title}&apos;s Message
              </h3>

              <p className="font-semibold text-font-secondary text-sm sm:text-base md:text-lg">
                {person.name}, {person.title}
              </p>

              {/* The paragraph block: centered on mobile, justified on sm+ */}
              <div className="text-font-secondary text-sm sm:text-base leading-relaxed space-y-4 text-center sm:text-justify">
                {person.message.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
