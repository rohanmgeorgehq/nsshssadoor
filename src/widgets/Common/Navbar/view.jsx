"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { NssLogo } from "../../../common/Icons/NssLogo/NssLogo";
import { HiMenuAlt2 } from "react-icons/hi";
import Menubar from "../Menubar";
import Link from "next/link";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className={`fixed md:border-none lg:border-none border-b-1 border-b-primary-300 px-5vw py-2 md:py-2 lg:py-2 min-h-[11vh] md:h-[13vh] lg:h-[13vh] md:relative lg:relative bg-white_shade top-0 z-50 flex flex-col w-screen items-center justify-center`}
      >
        <div className="flex flex-col md:flex-row lg:flex-row w-full">
          <div className="flex w-full justify-between">
            <Link href="/" className="">
              <div className="flex sm:flex-1 lg:flex-1 p-0 items-center gap-2 lg:gap-4 md:gap-4">
                <NssLogo />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap">
                    NSS Higher Secondary School
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-font-secondary">
                    Adoor, Pathanamthitta, Kerala
                  </span>
                </div>
              </div>
            </Link>
            <div className="md:flex lg:flex flex-1 hidden items-center justify-end gap-10">
              <div className="self-end mb-2 text-sm text-font-secondary leading-tight">
                <div>
                  <span>School Code: </span>
                  <span className="font-sans font-semibold">03030</span>
                </div>
                <div>
                  <span>UDISE Code: </span>
                  <span className="font-sans font-semibold">32120100714</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-6 text-primary"
                />
                <div className="flex flex-col leading-tight text-sm text-font-secondary">
                  <span>
                    <span className="font-sans">9:00</span>AM –{" "}
                    <span className="font-sans">5:00</span>PM
                  </span>
                  <span>Monday to Friday</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="h-6 text-primary"
                />
                <div className="flex flex-col leading-tight text-sm text-font-secondary">
                  <span>Call us</span>
                  <span className="font-sans">
                    <Link href="tel:04734220908" className="hover:underline">
                      04734 220908
                    </Link>
                    <br />
                    <Link href="tel:+918281821908" className="hover:underline">
                      +91 8281821908
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex md:hidden lg:hidden items-center justify-center text-[1.8rem] cursor-pointer">
              <HiMenuAlt2 onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`${
          isDrawerOpen ? "flex fixed" : "hidden"
        } h-[90vh] top-0 mt-[10vh] w-screen md:hidden lg:hidden bg-white_shade z-50`}
      >
        <div className="w-full">
          <Menubar handleClose={handleClose} />
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 w-full px-[5vw] text-center text-xs sm:text-sm text-font-secondary">
          <div className="flex flex-col items-center gap-2 opacity-90">
            {/* Codes */}
            <div className="flex flex-col gap-1">
              <p>
                <strong>School Code:</strong>{" "}
                <span className="font-sans">03030</span>
              </p>
              <p>
                <strong>UDISE Code:</strong>{" "}
                <span className="font-sans">32120100714</span>
              </p>
            </div>

            {/* Copyright */}
            <p className="opacity-80">
              © {new Date().getFullYear()} <strong>NSS HSS Adoor</strong>. All
              rights reserved.
            </p>

            {/* Developer Credit */}
            <p>
              Made with <span className="text-red-500">❤️</span> by{" "}
              <span className="font-semibold text-primary">Rohan M George</span>
              <span className="block md:inline">
                &nbsp;+2 Computer Science, 2024–2026 Batch
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
