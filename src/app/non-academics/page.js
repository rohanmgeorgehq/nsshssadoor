import NonAcademics from "@widgets/NonAcademics";

export const metadata = {
  title: "Non Academics | NSS HSS Adoor",
  description:
    "Explore the non-academic side of NSS Higher Secondary School Adoor including clubs, cultural programs, sports, and student activities that enrich campus life.",
  keywords:
    "non academics, NSS Higher Secondary School, NSS Higher Secondary School Adoor NSS HSS Adoor, student clubs, cultural activities, sports, extracurriculars, Kerala schools, NSS School Adoor",
  openGraph: {
    title: "Non Academics | NSS HSS Adoor",
    description:
      "Discover how NSS Higher Secondary School Adoor encourages holistic student development through various non-academic programs.",
    url: "https://nsshssadoor.org/non-academics",
    site_name: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.org/images/non-academics-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Non Academics At NSS HSS Adoor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshssadoor",
    title: "Non Academics | NSS HSS Adoor",
    description:
      "Clubs, arts, sports, and more. Dive into the non-academic experiences at NSS Higher Secondary School Adoor.",
    image: "https://nsshssadoor.org/images/non-academics-banner.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <NonAcademics />;
}
