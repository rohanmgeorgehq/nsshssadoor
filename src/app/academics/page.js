import Academics from "@widgets/Academics";
import React from "react";

export const metadata = {
  title: "Academics | NSS HSS Adoor",
  description:
    "Explore the academic offerings at NSS Higher Secondary School Adoor, including courses, subjects, and educational programs designed to foster student growth and excellence.",
  keywords:
    "academics, NSS HSS Adoor, NSS Higher Secondary School, NSS Higher Secondary School Adoor, Adoor, Kerala, education, courses, academic programs, high school education, higher secondary education",
  openGraph: {
    title: "Academics | NSS HSS Adoor",
    description:
      "Discover the academic programs and courses offered at NSS Higher Secondary School Adoor, designed to nurture the intellectual and personal growth of students.",
    url: "https://nsshssadoor.org/academics",
    site_name: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.org/images/academics-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Academics At NSS HSS Adoor",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Academics />;
}
