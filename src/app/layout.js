import "@styles/globals.scss";
import Navbar from "@widgets/Common/Navbar";
import Menubar from "@widgets/Common/Menubar";
import Footer from "@widgets/Common/Footer";
import Bottombar from "@widgets/Common/Bottombar";
import AOSProvider from "@components/AOSProvider";
import AnnouncementBar from "@widgets/Common/AnnouncementBar";

export const metadata = {
  title: "NSS HSS Adoor",
  description:
    "Official Website of NSS Higher Secondary School Adoor, providing quality education and holistic development in Kerala.",
  keywords:
    "NSS HSS Adoor,nss hss adoor, NSS Higher Secondary School, NSS Higher Secondary School Adoor, Adoor School, Kerala Education, NSS School, Higher Secondary Education, Education in Kerala",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hidden sm:flex ...">
          <AnnouncementBar />
        </div>
        <Navbar />
        <div className=" hidden md:flex lg:flex">
          <Menubar />
        </div>
        <AOSProvider>{children}</AOSProvider>
        <Footer />
        <Bottombar />
      </body>
    </html>
  );
}
