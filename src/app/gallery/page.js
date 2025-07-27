import Gallery from "@widgets/Gallery";
import React from "react";

export const metadata = {
  title: "Gallery | NSS HSS Adoor",
  description:
    "Explore the vibrant gallery of NSS Higher Secondary School Adoor. Discover memorable moments from school events, cultural activities, sports, and much more.",
  keywords:
    "gallery, NSS Higher Secondary School, Adoor, NSS HSS Adoor, Kerala, school events, cultural activities, sports, student life, photo gallery",
  openGraph: {
    title: "Gallery | NSS HSS Adoor",
    description:
      "View the stunning gallery showcasing the best moments at NSS Higher Secondary School Adoor. A visual representation of the school's academic, cultural, and sports activities.",
    url: "https://nsshssadoor.org/gallery",
    site_name: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.org/images/gallery-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Gallery Of NSS HSS Adoor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshssadoor",
    title: "Gallery | NSS HSS Adoor",
    description:
      "Check out the gallery of NSS Higher Secondary School Adoor and relive the best moments from our events and activities.",
    image: "https://nsshssadoor.org/images/gallery-banner.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Gallery />;
}
