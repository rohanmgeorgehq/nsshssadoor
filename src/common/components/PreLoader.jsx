"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl px-8 py-6 flex flex-col items-center gap-4 w-[90vw] max-w-sm sm:max-w-md border border-gray-100">
        <Link href="/" className="flex flex-col items-center gap-2">
          <Image
            src="/images/logo.png"
            height={1000}
            width={1000}
            priority={true}
            className="w-16 sm:w-20 md:w-24"
            alt="nsshssadoor"
          />
          <div className="text-center">
            <span className="block text-base sm:text-lg md:text-xl font-semibold text-primary">
              NSS Higher Secondary School
            </span>
            <span className="block text-xs sm:text-sm text-font-secondary">
              Adoor, Pathanamthitta, Kerala
            </span>
          </div>
        </Link>
        <span className="loader" />
      </div>
    </div>
  );
}
