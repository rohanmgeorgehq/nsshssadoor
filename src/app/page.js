
import HomePage from "@widgets/Home";

export const metadata = {
  title: "NSS HSS Adoor",
  description:
    "Official Website of NSS Higher Secondary School Adoor, established in 1934. Providing quality education and holistic development in Kerala.",
  keywords:
    "NSS HSS Adoor, NSS Higher Secondary School, NSS Higher Secondary School Adoor, Adoor School, Kerala Education, NSS School, Higher Secondary Education, Education in Kerala, school, academics, non-academics, gallery, staff, contact",
  openGraph: {
    title: "NSS HSS Adoor",
    description:
      "Official Website of NSS Higher Secondary School Adoor, providing quality education and holistic development in Kerala.",
    url: "https://www.nsshssadoor.org",
    type: "website",
    images: [
      {
        url: "https://www.nsshssadoor.org/images/logo.png",
        width: 1200,
        height: 630,
        alt: "NSS HSS Adoor Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomePage />;
}
