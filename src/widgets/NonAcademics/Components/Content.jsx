"use client";

import { nonAcademics } from "@utils/utils";
import TitleBar from "@widgets/Common/TitleBar";
import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Content() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    const safeSrc = `/${src.replace(/^\/?/, "")}`;
    setSelectedImage(safeSrc);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = ""; // restore scroll
  };

  // Restore scroll on unmount (in case of errors)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-[5vw] pt-[100px] lg:pt-16 bg-white_shade">
      <div className="flex flex-col gap-10">
        <TitleBar title="Non Academics" />

        <div className="w-full flex flex-col gap-6">
          {nonAcademics.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 md:p-8 flex flex-col gap-6"
            >
              {/* Section Title */}
              <div className="flex items-center gap-3">
                <FiUsers className="text-primary text-2xl" />
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                  {item?.title}
                </span>
              </div>

              {/* Section Description */}
              <div className="text-sm sm:text-base md:text-lg text-font-secondary text-justify leading-relaxed">
                {item?.desc.split("\n").map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>

              {/* Image Grid */}
              {Array.isArray(item.images) && item.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {item.images.map((imgSrc, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.03] shadow-sm"
                      onClick={() => handleImageClick(imgSrc)}
                    >
                      <Image
                        src={`/${imgSrc.replace(/^\/?/, "")}`}
                        fill
                        alt={`${item.title} Image ${imgIndex + 1}`}
                        className="object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-[90vw] max-h-[85vh] p-4 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black transition"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              <IoClose />
            </button>
            <Image
              src={selectedImage}
              alt="Lightbox"
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] rounded-xl transition-transform duration-300"
            />
          </div>
        </div>
      )}

      {/* Lightbox fade-in animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
