"use client";

import { academics } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

// Sample academic result data
const resultData = [
  { year: "2021", passPercentage: 95 },
  { year: "2022", passPercentage: 97 },
  { year: "2023", passPercentage: 98 },
  { year: "2024", passPercentage: 100 },
  { year: "2025", passPercentage: 100 },
];

export default function Content() {
  return (
    <div className="w-full px-5vw py-12 pt-[100px] lg:pt-16 bg-white_shade">
      <div className="flex flex-col gap-10">
        <TitleBar title="Academics" />

        {/* Academic Streams Section */}
        <div className="w-full flex flex-col gap-6">
          {academics.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <FiBookOpen className="text-primary text-2xl" />
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                  {item?.title}
                </span>
              </div>

              <div className="text-sm sm:text-base md:text-lg text-font-secondary text-justify leading-relaxed">
                {item?.desc.split("\n").map((line, lineIndex, arr) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Results Section */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-8 flex flex-col gap-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-left text-primary">
            Academic Results (2021 – 2025)
          </h3>

          <p className="text-font-secondary text-sm sm:text-base md:text-lg leading-relaxed text-left max-w-3xl">
            Our students have consistently delivered excellent results across
            all streams. Here's a glance at our pass percentages over the past
            years.
          </p>

          <div className="w-full h-[300px] overflow-x-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={resultData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar
                  dataKey="passPercentage"
                  fill="#FF7D29"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
