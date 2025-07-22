"use client";

import React, { useState } from "react";
import { teachingStaffDetails } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Content() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imagePath) => {
    const cleanPath = imagePath?.startsWith("/") ? imagePath : `/${imagePath}`;
    setSelectedImage(cleanPath);
  };

  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="w-full px-[5vw] py-12 pt-[100px] lg:pt-16 bg-white_shade">
      <div className="flex flex-col gap-10">
        <TitleBar title="Staff" />

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-justify text-font-secondary text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            The teaching faculty of NSS Higher Secondary School Adoor forms a tremendous task force comprising of around 50. They are highly qualified and well-equipped to handle their respective classes.
          </p>
          <br />
          <p>
            Every year, faculty improvement programmes are arranged in order to make the teachers aware of the developments occurring in the field of education and to keep them abreast of the advances in educational technology.
          </p>
          <br />
          <p>
            Our school has various clubs functioning under the able guidance of the teachers. The students and teachers work together to make the Cultural Fest, Sports Meet, Fun Streak and the Annual Day programme a grand success.
          </p>
          <br />
          <p>
            The smooth conduct of daily activities is ensured by the non-teaching staff who work with precision and care. The staff members function as a single unit to fulfill the mission of our school.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="w-full mt-4">
          <h2 className="text-primary font-bold text-base sm:text-lg md:text-xl border-b-4 border-primary pb-2 mb-6">
            Higher Secondary Staff
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingStaffDetails.map((staff, index) => {
              const imageSrc = staff.photo
                ? staff.photo.startsWith("/")
                  ? staff.photo
                  : `/${staff.photo}`
                : "/images/staff/default.png";

              return (
                <div
                  key={`${staff.name}_${index}`}
                  className="bg-white shadow-md rounded-xl p-5 flex items-center gap-4 cursor-pointer"
                  onClick={() => openLightbox(imageSrc)}
                >
                  <Image
                    src={imageSrc}
                    alt={staff.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-full border border-gray-300"
                  />
                  <div className="flex flex-col text-left">
                    <p className="font-semibold text-font-primary capitalize text-sm sm:text-base">
                      {staff.name}
                    </p>
                    <p className="text-font-secondary text-xs sm:text-sm">
                      {staff.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black/50 rounded-full p-1 hover:bg-black"
              onClick={closeLightbox}
            >
              <IoClose />
            </button>
            <Image
              src={selectedImage}
              alt="Staff Image"
              width={1000}
              height={1000}
              className="w-full h-auto max-h-[80vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
