import Staff from "@widgets/Staff";
import React from "react";

export const metadata = {
  title: "Staff Details | NSS HSS Adoor",
  description:
    "Meet the dedicated staff members of NSS Higher Secondary School Adoor, including teachers, administrative staff, and support staff who contribute to the school's academic excellence.",
  keywords:
    "staff details, NSS HSS Adoor, NSS Higher Secondary School, NSS Higher Secondary School Adoor, Adoor, Kerala, teaching staff, administrative staff, school faculty, NSS Adoor team",
  openGraph: {
    title: "Staff Details | NSS HSS Adoor",
    description:
      "Get to know the talented staff members at NSS Higher Secondary School Adoor, from academic instructors to administrative personnel.",
    url: "https://nsshssadoor.org/staff",
    site_name: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.org/images/staff-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Staff Members At NSS HSS Adoor",
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
  return <Staff />;
}
