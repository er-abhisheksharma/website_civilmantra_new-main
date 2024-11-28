"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0001.jpg",
    alt: "Image 1",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0002.jpg",
    alt: "Image 2",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0003.jpg",
    alt: "Image 3",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0004.jpg",
    alt: "Image 4",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0005.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0006.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0007.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0008.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0009.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0010.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0011.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0012.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0013.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0014.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0015.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0016.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0017.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0018.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0019.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0020.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0021.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0022.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0023.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0024.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0025.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0026.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0027.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0028.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0029.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0030.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0031.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0032.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0033.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0034.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0035.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0036.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0037.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0038.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0039.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0040.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0041.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0042.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0043.jpg",
    alt: "Image 5",
  },
  {
    src: "/images/inovation/ilovepdf_pages-to-jpg/CivilMantra (RAILWAY)_page-0044.jpg",
    alt: "Image 5",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative max-w-[82vw] w-full  mx-auto my-10 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={600}
              className="mx-auto h-[60vh]  sm:h-[75vh] object-fill"
              priority={index === 0} // Improve LCP
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full  transition sm:p-3"
      >
        <svg
          className="w-6 h-6 sm:w-20 sm:h-20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full  transition sm:p-3"
      >
        <svg
          className="w-6 h-6 sm:w-20 sm:h-20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-primary" : "bg-gray-300"
              } transition sm:w-2 sm:h-2`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
