'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Sectors = [
  {
    Sector: "Roads/Engineering",
    bgimage: "/images/Sectors/Herosectors/1730806663019.jpg",
    discription: "Expert expressway construction services ensuring efficiency, durability, and safety.",
    url: "#roadsbridges",
  },
  {
    Sector: "Tunelling/Underground",
    bgimage: "/images/Sectors/Herosectors/Tunnel.jpg",
    url: "#tunnels",
    discription: "Professional tunnel construction services with a focus on safety, precision, and durability.",
  },
  {
    Sector: "Urban Infrastructure",
    bgimage: "/images/Sectors/Herosectors/arq-2645763_1280.jpg",
    discription: "Delivering innovative urban infrastructure solutions to transform cities.",
    url: "#Urban",
  },

  {
    Sector: "Bridges",
    bgimage: "/images/Sectors/Herosectors/Bridges.jpg",
    discription: "Building strong, durable bridges that connect communities and drive progress.",
    url: "#bridges",
  },
  {
    Sector: "Metro",
    bgimage: "/images/Sectors/Herosectors/metrotunnel-2.jpg",
    discription: "Delivering advanced metro systems with precision and expertise.",
    url: "#metro",
  },
  {
    Sector: "Railway",
    bgimage: "/images/Sectors/Railway/Railway.jpeg",
    discription: "Expertly crafting railway infrastructure, from track alignment to stations.",
    url: "#Railway",
  },
  {
    Sector: "Waterways",
    bgimage: "/images/Sectors/Herosectors/waterway.jpg",
    discription: "Transforming waterways into efficient transport and trade routes.",
    url: "#water",
  },
  {
    Sector: "OUR PROJECTS",
    bgimage: "/images/Sectors/Herosectors/pexels-maren-3055534-29502895.jpg",
    discription: "Crafting excellence in roadways and infrastructure, delivering quality that stands the test of time.",
    url: "/Projects",
  },
];

const Herosectors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (url: string) => {
    // If URL is an anchor (e.g., #projects), scroll to that section
    if (url.startsWith('#')) {
      const section = document.querySelector(url);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Otherwise, navigate to the page (for links like '/Projects')
    else {
      window.location.href = url; // Direct page navigation
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Sectors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Sectors.length) % Sectors.length);
  };

  return (
    <div className="relative w-full h-[95vh]">
      {/* Background image */}
      <Image
        src="/images/AboutUs/Top/pexels-anilsharma65-10504911.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

      {/* Responsive Carousel for lg screens and below */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div className="mx-auto text-white px-4 mt-10 max-w-[88vw] xl:w-full">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            {/* Grid layout for extra-large screens */}
            <div className="hidden xl:grid grid-cols-4 gap-x-2 gap-y-2 mx-auto mt-11">
              {Sectors.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleScroll(item.url)} // Handles both anchor and page link
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-[290px] w-80 flex flex-col relative overflow-hidden group cursor-pointer rounded-lg hover:border-white duration-100  hover:border-2"
                >
                  <div
                    className="absolute inset-0   transition-opacity duration-300 ease-in-out bg-cover bg-center opacity-100"
                    style={{ backgroundImage: `url(${item.bgimage})` }}
                  />
                  <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-35" />
                  <div className="relative  z-10 flex flex-col justify-between h-full p-5">
                    <h2 className="text-[22px] font-semibold transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-5">
                      {item.Sector}
                    </h2>
                    <p className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-gray-200 text-base font-normal">
                      {item.discription}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel for lg and smaller screens */}
            <div className="xl:hidden flex justify-center items-center relative">
              <button
                onClick={handlePrev}
                className="absolute left-0 p-2 text-white bg-black bg-opacity-50 rounded-full focus:outline-none z-20"
                style={{ visibility: currentIndex > 0 ? 'visible' : 'hidden' }}
              >
                <svg
                  className="w-6 h-6 sm:w-10 sm:h-10"
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
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="h-[250px] w-full flex flex-col relative overflow-hidden group cursor-pointer rounded-lg"
                  onClick={() => handleScroll(Sectors[currentIndex].url)} // Handles both anchor and page link
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-cover bg-center opacity-100"
                    style={{ backgroundImage: `url(${Sectors[currentIndex].bgimage})` }}
                  />
                  <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-35" />
                  <div className="relative z-10 flex flex-col justify-between h-full p-5">
                    <h2 className="text-lg font-semibold">{Sectors[currentIndex].Sector}</h2>
                    <p className="text-gray-200 text-sm font-normal">
                      {Sectors[currentIndex].discription}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={handleNext}
                className="absolute right-0 p-2 text-white bg-black bg-opacity-50 rounded-full focus:outline-none"
              >
                <svg
                  className="w-6 h-6 sm:w-10 sm:h-10"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosectors;
