import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ImageItem = {
  image: string;
  text: string;
};

type YearData = {
  year: number;
  images: ImageItem[];
};

const data = [
  {
      year: 2016,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2017,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2018,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2019,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2020,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2021,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2022,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2023,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
  {
      year: 2024,
      images: [
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date" },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg",
              text: "this event is held on date"  },
          { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg",
              text: "this event is held on date"  },
      ],
  },
];

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const currentYearData = data.find((yearData) => yearData.year === selectedYear);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="max-w-[88vw] mx-auto my-20  ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="unihead mt-28 text-center text-2xl sm:text-3xl lg:text-4xl">Life @ Civil Mantra</h1>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 my-8"
      >
        {data.map((yearItem) => (
          <button
            key={yearItem.year}
            className={`px-4 py-2 mt-4 text-sm sm:text-base ${
              selectedYear === yearItem.year
                ? 'bg-primary text-white relative -translate-y-1 scale-110 transition-transform duration-300 ease-in-out'
                : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out shadow-md'
            } rounded-lg`}
            onClick={() => setSelectedYear(yearItem.year)}
          >
            {yearItem.year}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentYearData?.images.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => openModal(item.image)}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={300}
                style={{ objectFit: 'cover' }}
                className="rounded-lg w-full h-64 sm:h-48 lg:h-64"
              />

              {/* Text overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end transition-all duration-300 opacity-0 hover:opacity-100 rounded-lg">
                <div className="p-2 text-white text-sm sm:text-base font-semibold bg-black bg-opacity-70 w-full text-center">
                  {item.text}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
            <Image
              src={modalImage!}
              alt="Fullscreen Image"
              width={1200}
              height={800}
              style={{ objectFit: 'contain' }}
              className="rounded-lg w-full h-auto"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl sm:text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
