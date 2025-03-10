"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/AboutUs/Our Presence/1.JPG?height=400&width=600",
    "/images/AboutUs/Our Presence/2.JPG?height=400&width=600",
    "/images/AboutUs/Our Presence/3.JPG?height=400&width=600",
  "/images/AboutUs/Gallery/2024/Birthday.jpg?height=400&width=600",
  "/images/AboutUs/Gallery/2024/diwali.jpg?height=400&width=600",
  "/images/AboutUs/Gallery/2024/Trip.jpg?height=400&width=600",
  "/images/AboutUs/Gallery/2024/womenday.jpg?height=400&width=600",
  "/images/AboutUs/Gallery/2024/8thfoundation.jpg?height=400&width=600",
  "/images/AboutUs/Gallery/2024/holi.jpg?height=400&width=600",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full lg:w-1/2 h-[400px] relative overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full absolute"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
