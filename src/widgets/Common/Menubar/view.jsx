"use client";

import React from "react";
import { navItems } from "../../../common/Utils/utils";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menubar({ handleClose }) {
  const pathname = usePathname();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      handleClose(false);
    }
  };

  return (
    <nav
      onClick={handleClick}
      className="w-full flex flex-col items-center justify-center bg-white lg:bg-primary md:bg-primary py-4 lg:flex-row md:flex-row"
    >
      {/* Mobile View: Cards */}
      <div className="flex flex-col gap-3 px-[5vw] w-full md:hidden lg:hidden">
        {navItems?.map((item, index) => (
          <Link
            key={`${item?.title}_${index}`}
            href={item?.link}
            className={`flex justify-between items-center w-full p-4 rounded-xl shadow-sm border transition-all duration-200 ${
              pathname === item?.link
                ? "border-primary text-primary font-semibold"
                : "border-gray-200 text-font-secondary hover:border-primary"
            }`}
          >
            <div className="flex items-center gap-3 text-base">
              {item.icon && (
                <item.icon className="text-primary text-lg shrink-0" />
              )}
              <span>{item.title}</span>
            </div>
            <MdOutlineArrowForwardIos className="text-xs text-font-secondary" />
          </Link>
        ))}
      </div>

      {/* Desktop View: Original Horizontal Layout */}
      <div className="hidden md:flex lg:flex items-center justify-center w-full gap-0 px-[5vw]">
        {navItems?.map((item, index) => (
          <div
            key={`${item?.title}_${index}`}
            className={`flex items-center justify-center px-[1.3vw] lg:px-[2vw] ${
              item?.hr ? "border-r border-primary-200" : ""
            }`}
          >
            <Link
              href={item?.link}
              className={`capitalize flex items-center gap-1 text-[1.2vw] font-medium transition-colors duration-200 ${
                pathname === item?.link
                  ? "text-white font-semibold underline underline-offset-4"
                  : "text-white_shade hover:text-yellow-300"
              }`}
            >
              {item.icon && <item.icon className="text-white text-base" />}
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
