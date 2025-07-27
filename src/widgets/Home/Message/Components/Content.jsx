"use client";

import { FaEye, FaBullseye } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionMissionStack() {
  useEffect(() => {
    AOS.init({ once: true, disable: "phone", duration: 700 });
  }, []);

  const sections = [
    {
      title: "Our Vision",
      icon: <FaEye className="text-white text-xl" />,
      items: [
        "To inculcate spontaneous willingness to savour pleasant and positive thoughts in young minds.",
        "To address the intellectual, emotional and educational needs of the society.",
        "To widen the mental and intellectual horizon of the younger generation.",
        "To enlighten the academic and non-academic endeavours to sensitise society.",
      ],
      bg: "bg-primary",
    },
    {
      title: "Our Mission",
      icon: <FaBullseye className="text-white text-xl" />,
      items: [
        "To provide quality education.",
        "To enable the development of total personality through activities.",
        "To extend guidance and consultancy service.",
        "To motivate achievement of excellence in every field.",
      ],
      bg: "bg-primary-700",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[5vw] py-16 bg-white_shade">
      <div className="flex flex-col gap-8" data-aos="fade-up">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col gap-6"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-4">
              <div className={`p-3 sm:p-4 rounded-full ${section.bg}`}>
                {section.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-font-primary">
                {section.title}
              </h3>
            </div>

            {/* List */}
            <ul className="space-y-3 pl-1 text-font-secondary text-sm sm:text-base leading-relaxed">
              {section.items.map((item, i) => (
                <li key={i} className="relative pl-5">
                  <span className="absolute left-0 top-1 text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
