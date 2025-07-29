"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PreLoader() {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center">
      <Link href="/" className="flex flex-col items-center gap-2 mb-4">
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
  );
}
