import React from "react";

export default function Content() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-[5vw] py-2" // Much less vertical padding
      data-aos="fade-up"
    >
      <div className="bg-white shadow-custom rounded-2xl px-4 sm:px-8 py-4 flex flex-col items-center text-center gap-4">
        {/* 📱 Mobile View: One-line format */}
        <h2 className="text-sm xs:text-base font-medium text-font-secondary sm:hidden flex flex-wrap justify-center items-center gap-1 leading-snug">
          <span className="whitespace-nowrap">
            Learn with Culture, Succeed with Values
          </span>
          <span className="font-bold text-primary whitespace-nowrap">
            @ NSS Higher Secondary School Adoor
          </span>
        </h2>

        {/* 💻 Tablet & Desktop View */}
        <div className="hidden sm:flex flex-col gap-2 max-w-4xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-font-secondary leading-snug">
            <span className="text-primary">&ldquo;</span>
            Learn with Culture, Succeed with Values
            <span className="text-primary">&rdquo;</span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
            @ NSS Higher Secondary School Adoor
          </h3>
        </div>
      </div>
    </section>
  );
}
