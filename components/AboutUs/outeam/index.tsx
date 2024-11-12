import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of key members with their details
const keymembers = [
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Alina Burger",
        position: "Manager",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "John Doe",
        position: "Engineer",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Jane Smith",
        position: "Architect",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Michael Johnson",
        position: "Designer",
    },
    {
        image: "/images/AboutUs/Keymembers/helo.png",
        name: "Sarah Connor",
        position: "Developer",
    },
    {
        image: "/images/AboutUs/Keymembers/download (3).png",
        name: "Bruce Wayne",
        position: "CEO",
    },
];

// Custom Arrow Components

// Custom Next Arrow component
const NextArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowRight size={20} />
        </div>
    );
};

// Custom Prev Arrow component
const PrevArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white cursor-pointer z-10"
            onClick={onClick}
        >
            <FaArrowLeft size={20} />
        </div>
    );
};

const Ourteam = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={undefined} />,  // Using custom NextArrow component
        prevArrow: <PrevArrow onClick={undefined} />,  // Using custom PrevArrow component
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h1 className="unihead mb-10 text-center text-2xl md:text-3xl lg:text-4xl my-20">Our Members</h1>
            </motion.div>

            <div className="max-w-[85vw] mx-auto">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <Image
                        src="/images/AboutUs/Keymembers/download (3).png"
                        alt="Director"
                        width={120}
                        height={150}
                        className="rounded-xl object-cover"
                    />
                    <h1 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-brown">Mr. Head</h1>
                    <p className="text-gray-700 text-sm sm:text-lg lg:text-xl font-semibold">Director</p>
                </motion.div>

                {/* Carousel for key members */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="my-10"
                >
                    <Slider {...settings}>
                        {keymembers.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center rounded-xl  p-6 transition-opacity duration-500 hover:opacity-90"
                            >
                                <div className="flex items-center justify-center w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={120}
                                        height={120}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h1 className="text-md sm:text-lg lg:text-2xl font-bold text-brown">{item.name}</h1>
                                    <p className="text-gray-700 text-sm sm:text-lg">{item.position}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </>
    );
};

export default Ourteam;
