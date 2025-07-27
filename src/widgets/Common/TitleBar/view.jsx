import React from "react";

export default function TitleBar({ title }) {
  return (
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight inline-block border-b-4 border-primary pb-1">
        {title}
      </h2>
    </div>
  );
}
