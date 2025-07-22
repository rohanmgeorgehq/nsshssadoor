"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TitleBar from "@widgets/Common/TitleBar";
import { galleryImages } from "../../../common/Utils/utils";
import { IoClose } from "react-icons/io5";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  // Handle click outside & escape key
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedImage(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-[5vw] pt-[100px] lg:pt-16 pb-16 flex flex-col gap-8 bg-white_shade">
      <TitleBar title="Gallery" />

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            onClick={() => setSelectedImage(src.imgPath)}
          >
            <Image
              src={src.imgPath}
              alt={src.alt || `Gallery Image ${index + 1}`}
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center transition-opacity animate-fadeIn">
          <div
            ref={modalRef}
            className="relative max-w-[95vw] max-h-[90vh] px-4"
          >
            <button
              className="absolute top-3 right-3 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <IoClose />
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged Gallery"
              width={1200}
              height={800}
              className="rounded-lg max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
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
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
