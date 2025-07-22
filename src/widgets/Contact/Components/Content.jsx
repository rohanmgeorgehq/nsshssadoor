"use client";

import TitleBar from "@widgets/Common/TitleBar";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

export default function Content() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-[5vw] pt-[100px] lg:pt-16 pb-16 bg-white_shade">
      <div className="flex flex-col gap-10">
        <TitleBar title="Contact" />

        {/* Google Map Embed */}
        <div className="w-full rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="NSS HSS Adoor Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.1814141681116!2d76.74776589999999!3d9.138081900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061210d6abfe61%3A0xf27d1ae396da2c0d!2sNSS%20HSS%20Adoor!5e0!3m2!1sen!2sin!4v1751904183957!5m2!1sen!2sin"
            className="w-full h-[60vh]"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full">
          <div className="bg-white shadow-custom rounded-2xl p-6 sm:p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                How can we help you?
              </h3>
              <p className="text-sm sm:text-base text-font-secondary max-w-xl">
                For any queries or support, reach out to us using the details below.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm sm:text-base text-font-secondary">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 flex items-center justify-center rounded-full">
                  <IoLocationSharp className="text-2xl text-primary" aria-label="Address Icon" />
                </div>
                <address className="not-italic">
                  <p className="font-semibold text-font-primary">Address:</p>
                  <p>
                    4PQX+64J, Road, Vadakadathucavu P.O,<br />
                    Ezhamkulam, Adoor, Kerala 691529
                  </p>
                </address>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 flex items-center justify-center rounded-full">
                  <FaPhone className="text-lg text-primary" aria-label="Phone Icon" />
                </div>
                <div>
                  <p className="font-semibold text-font-primary">Phone:</p>
                  <Link
                    href="tel:+918281821908"
                    className="hover:underline block text-blue-600"
                  >
                    +91 8281821908
                  </Link>
                  <Link
                    href="tel:04734220908"
                    className="hover:underline block text-blue-600"
                  >
                    04734 220908
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 w-12 h-12 flex items-center justify-center rounded-full">
                  <MdOutlineMail className="text-2xl text-primary" aria-label="Mail Icon" />
                </div>
                <div>
                  <p className="font-semibold text-font-primary">Email:</p>
                  <Link
                    href="mailto:nsshssadoor@gmail.com"
                    className="hover:underline text-blue-600 block"
                  >
                    nsshssadoor@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
