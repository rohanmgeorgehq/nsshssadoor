"use client";

import {
  faChalkboardTeacher,
  faLaptop,
  faSchoolCircleCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Content() {
  const stats = [
    {
      icon: faUsers,
      count: 500,
      suffix: "+",
      label: "Students",
    },
    {
      icon: faChalkboardTeacher,
      count: 20,
      suffix: "+",
      label: "Teachers",
    },
    {
      icon: faLaptop,
      count: 10,
      suffix: "+",
      label: "Digital Classrooms",
    },
    {
      icon: faSchoolCircleCheck,
      count: 1000,
      suffix: "+",
      label: "Alumni",
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-[5vw] bg-white_shade">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-10">
        School At A Glance
      </h2>
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
        data-aos="fade-up"
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-custom hover:shadow-xl transition-all duration-300 gap-3 hover:scale-[1.03]"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-3xl sm:text-4xl text-primary mb-2"
            />
            <span className="text-2xl sm:text-3xl font-bold text-font-primary">
              {inView ? (
                <CountUp end={item.count} duration={2} suffix={item.suffix} />
              ) : (
                `0${item.suffix}`
              )}
            </span>
            <span className="text-sm sm:text-base md:text-lg text-font-secondary">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
