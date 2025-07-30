"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiInfo,
  FiBookOpen,
  FiUsers,
  FiImage,
  FiPhone,
} from "react-icons/fi";
import { logos, navItems } from "../../../common/Utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Icon mapping
const iconMap = {
  Home: <FiHome className="text-primary" />,
  About: <FiInfo className="text-primary" />,
  Academics: <FiBookOpen className="text-primary" />,
  "Non Academics": <FiUsers className="text-primary" />,
  Staff: <FiUsers className="text-primary" />,
  Gallery: <FiImage className="text-primary" />,
  Contact: <FiPhone className="text-primary" />,
};

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full px-[5vw] pb-12 mt-10 bg-white_shade">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & About Section */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-start gap-4">
            {/* <div className="p-1 bg-white rounded-full shadow border border-primary-200">
              <Image
                src={logos.nssLogoPng}
                height={1000}
                width={1000}
                className="w-12 h-12 object-contain"
                alt="NSS HSS Adoor Logo"
              />
            </div> */}
            <div className="flex flex-col justify-center">
              <span className="text-lg font-bold text-font-secondary">
                NSS Higher Secondary School
              </span>
              <span className="text-sm text-font-secondary">
                Adoor, Pathanamthitta, Kerala
              </span>
            </div>
          </div>
          <p className="text-sm text-font-secondary text-justify leading-relaxed">
            At NSS Higher Secondary School, we provide quality education focused
            on academics, values, and preparing students for the future.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-font-secondary">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  className={`capitalize flex items-center gap-2 text-sm transition-colors duration-200
          hover:text-primary
          ${
            isActive
              ? "text-primary font-semibold underline underline-offset-4"
              : "text-font-secondary"
          }`}
                >
                  {iconMap[item.title] || <FiHome className="text-primary" />}
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-font-secondary">
            Get In Touch
          </h3>
          <div className="space-y-3 text-sm text-font-secondary">
            {/* Email */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-4 text-primary" />
              <a
                href="mailto:nsshssadoor@gmail.com"
                className="hover:underline"
              >
                nsshssadoor@gmail.com
              </a>
            </div>
            {/* Phone Numbers */}
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="h-4 text-primary mt-1"
              />
              <div className="flex flex-col">
                <a href="tel:04734220908" className="hover:underline">
                  04734 220908
                </a>
                <a href="tel:+918281821908" className="hover:underline">
                  +91 8281821908
                </a>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="h-4 mt-1 text-primary"
              />
              <span>
                4PQX+64J, Road, Vadakadathucavu P.O, Ezhamkulam, Adoor, Kerala
                691529
              </span>
            </div>
            {/* Social Media */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com/nsshssadoorparuthippara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-6 text-[#4267B2] hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://wa.me/+918281821908"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="h-6 text-[#25D366] hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://instagram.com/nsshss.adoor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 text-[#C13584] hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
