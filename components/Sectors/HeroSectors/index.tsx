'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Sectors = [
    {
        Sector: "Expressway",
        bgimage: "/images/Sectors/Herosectors/1730806663019.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#roadsbridges",
    },
    {
        Sector: "Tunnels",
        bgimage: "/images/Sectors/Tunnels/1720754084838.jpg",
        url: "#tunnels",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
    },
    {
        Sector: "Transport Planning",
        bgimage: "/images/Sectors/Herosectors/TRUCKS.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Transport",
    },
    {
        Sector: "Urban Infrastructure",
        bgimage: "/images/Sectors/Herosectors/DelhiFlyover_EDITED.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Urban",
    },
    {
        Sector: "Railway",
        bgimage: "/images/Sectors/Herosectors/train.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Railway",
    },
    {
        Sector: "Bridges",
        bgimage: "/images/Sectors/Herosectors/Bridges.jpg",
        discription: "lorem lipsum road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#bridges",
    },
    {
        Sector: "Metro",
        bgimage: "/images/Sectors/Herosectors/metrotunnel-2.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Metro",
    },
    {
        Sector: "Waterways",
        bgimage: "/images/Sectors/Herosectors/waterway.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Waterways",
    },
];

const Herosectors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (url: string) => {
    const section = document.querySelector(url);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              onClick={() => handleScroll(item.url)}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[290px] w-80 flex flex-col relative overflow-hidden group cursor-pointer rounded-lg"
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url(${item.bgimage})` }}
              />
              <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-35" />
              <div className="relative z-10 flex flex-col justify-between h-full p-5">
                <h2 className="text-[22px] font-semibold transition-transform duration-300 ease-in-out group-hover:scale-105">
                  {item.Sector}
                </h2>
                <p className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-gray-200 text-sm font-normal">
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
            &#8592;
          </button>
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="h-[250px] w-full flex flex-col relative overflow-hidden group cursor-pointer rounded-lg"
              onClick={() => handleScroll(Sectors[currentIndex].url)}
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
            &#8594;
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</div>

  );
};

export default Herosectors;
