import About from "@widgets/Common/About";
import React from "react";

export const metadata = {
  title: "About Us | NSS HSS Adoor",
  description:
    "Learn more about NSS Higher Secondary School Adoor, its history, legacy, and educational contributions to the region. Established in 1927, it offers high-quality education to the students of Adoor and surrounding areas.",
  keywords:
    "NSS HSS Adoor, NSS Higher Secondary School, NSS Higher Secondary School Adoor, Adoor, Kerala, education, history, academic excellence, NSS, Adoor School, educational legacy",
  openGraph: {
    title: "About Us | NSS HSS Adoor",
    description:
      "Discover the history and legacy of NSS Higher Secondary School in Adoor, Pathanamthitta, Kerala. Offering quality education since 1934.",
    url: "https://www.nsshssadoor.com/about",
    site_name: "NSS HSS Adoor",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="flex items-center justify-center pt-[50px] lg:pt-0">
      <About />
    </div>
  );
}
