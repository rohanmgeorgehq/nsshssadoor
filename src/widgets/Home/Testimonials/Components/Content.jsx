"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali Nair",
    role: "Alumni (Batch 2020)",
    message:
      "NSS HSS Adoor shaped my academic journey and instilled values that continue to guide me. A truly nurturing environment!",
    image: "/images/staff/default.png",
    rating: 5,
  },
  {
    name: "Ramesh P",
    role: "Parent",
    message:
      "The commitment of teachers here is commendable. My child is growing in a disciplined and caring environment.",
    image: "/images/staff/default.png",
    rating: 5,
  },
  {
    name: "Manu G",
    role: "Former Student",
    message:
      "From academics to extracurriculars, the school offers holistic development. I will always be grateful.",
    image: "/images/staff/default.png",
    rating: 5,
  },
];

export default function Content() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[5vw] pb-16 bg-white_shade" data-aos="fade-up">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        Testimonials
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-custom p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {/* Profile Image */}
            <Image
              src={t.image}
              width={80}
              height={80}
              alt={t.name}
              className="rounded-full object-cover border border-gray-300 shadow-sm w-20 h-20"
            />

            {/* Name & Role */}
            <div>
              <p className="font-semibold text-font-primary text-base">{t.name}</p>
              <p className="text-sm text-font-secondary">{t.role}</p>
            </div>

            {/* Rating */}
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < t.rating ? "text-primary" : "text-gray-300"}
                />
              ))}
            </div>

            {/* Message */}
            <p className="text-sm sm:text-base text-font-secondary leading-relaxed">
              {t.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
