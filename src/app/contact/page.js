import Contact from "@widgets/Contact";
import React from "react";

export const metadata = {
  title: "Contact Us | NSS HSS Adoor",
  description:
    "Get in touch with NSS Higher Secondary School Adoor for inquiries, feedback, and support. We are here to assist you.",
  keywords:
    "contact, NSS HSS Adoor, NSS Higher Secondary School, NSS Higher Secondary School Adoor, Adoor, Kerala, school contact, inquiries, feedback, support, education",
  openGraph: {
    title: "Contact Us | NSS HSS Adoor",
    description:
      "Reach out to NSS Higher Secondary School Adoor for any inquiries or support. Our team is here to help with your academic needs.",
    url: "https://nsshssadoor.org/contact",
    site_name: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.org/images/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact NSS HSS Adoor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshssadoor",
    title: "Contact Us | NSS HSS Adoor",
    description:
      "Contact NSS Higher Secondary School Adoor for any questions, support, or information related to our programs.",
    image: "https://nsshssadoor.org/images/contact-banner.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Contact />;
}
