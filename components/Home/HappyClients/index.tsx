import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

// Sample data with rating
const info = [
    {
        img: "/images/AboutUs/Keymembers/helo.png",
        name: "John Doe",
        review: "Amazing service! Couldn't ask for better.",
        rating: 5
    },
    {
        img: "/images/AboutUs/Keymembers/download (3).png",
        name: "Jane Smith",
        review: "The team was extremely professional and delivered on time.",
        rating: 4
    },
    {
        img: "/images/AboutUs/Keymembers/download (2).jpg",
        name: "Mike Johnson",
        review: "Highly recommend their services for any construction needs!",
        rating: 5
    },
    {
        img: "/images/AboutUs/Keymembers/helo.png",
        name: "John Doe",
        review: "Amazing service! Couldn't ask for better.",
        rating: 5
    },
    {
        img: "/images/AboutUs/Keymembers/download (3).png",
        name: "Jane Smith",
        review: "The team was extremely professional and delivered on time.",
        rating: 4
    },
    {
        img: "/images/AboutUs/Keymembers/download (2).jpg",
        name: "Mike Johnson",
        review: "Highly recommend their services for any construction needs!",
        rating: 5
    }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    return (
        <div className="flex space-x-1">
            {Array.from({ length: totalStars }, (_, index) => (
                <span key={index} className='mt-2'>
                    {index < rating ? (
                        <span className="text-yellow-400 text-2xl">&#9733;</span> // Filled star
                    ) : (
                        <span className="text-gray-300 text-2xl">&#9734;</span> // Empty star
                    )}
                </span>
            ))}
        </div>
    );
};

// Custom Previous Button
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 text-5xl  p-2 rounded-full hover:text-primary"
        onClick={onClick}
    >
        &#8249;
    </button>
);

// Custom Next Button
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 text-5xl  p-2 rounded-full hover:text-primary"
        onClick={onClick}
    >
        &#8250;
    </button>
);

const Clients = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true, 
        centerPadding: '40px', 
        beforeChange: (current: number, next: number) => setActiveIndex(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="client-carousel max-w-[83vw] mb-14 mx-auto relative">
            <h2 className="unihead mb-8"> Our Clients</h2>
            <p className='unip pb-8'>We take pride in delivering exceptional service and value to our clients.</p>
            
            <Slider {...settings}>
                {info.map((client, index) => (
                    <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay:  0.2 }}
                    viewport={{ once: true }} key={index} className="px-5"> 
                        <div className="bg-white px-10 py-8 rounded-2xl h-[300px] mx-8 ">
                            <img
                                src={client.img}
                                alt={client.name}
                                className="rounded-full w-20 h-20"
                            />
                            <h3 className="text-xl font-bold my-2">{client.name}</h3>
                            {/* Star rating component */}
                            <StarRating rating={client.rating} />
                            <p className="text-gray-800 mt-2">"{client.review}"</p>
                        </div>
                    </motion.div>
                ))} 
            </Slider>

           
        </div>
    );
};

export default Clients;
