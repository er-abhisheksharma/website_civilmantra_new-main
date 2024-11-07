import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    const [selectedYear, setSelectedYear] = useState(2024); 

    const currentYearData = data.find((yearData) => yearData.year === selectedYear);

    return (
        <div className="max-w-[88vw] mx-auto my-20">
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
                <h1 className="unihead mt-28">Life at Civil Mantra</h1>
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
                className="flex justify-center gap-8 mb-8"
            >
                {data.map((yearItem) => (
                    <button
                        key={yearItem.year}
                        className={`px-4 py-2 mt-10 
                        ${selectedYear === yearItem.year
                                ? 'bg-primary text-white relative -translate-y-1 scale-125 transition-transform duration-300 ease-in-out'
                                : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white  transition-colors duration-300 ease-in-out shadow-xl'} 
                        rounded-lg`}
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
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
                >
                    {currentYearData?.images.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden shadow-xl rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            <Image
                                src={item.image}
                                alt={`Gallery Image ${index + 1}`}
                                width={500}
                                height={250}
                                style={{ objectFit: 'cover' }}
                                className="rounded-lg"
                            />

                            {/* Text overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end transition-all duration-300 opacity-0 hover:opacity-100 rounded-lg">
                                <div className="p-4 text-white text-lg font-semibold bg-black bg-opacity-70 w-full text-center">
                                    {item.text}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
