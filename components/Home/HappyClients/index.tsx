import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

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
    // Additional clients
];
interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className="flex space-x-1">
            {Array.from({ length: totalStars }, (_, index) => (
                <span key={index} className='mt-2'>
                    {index < rating ? (
                        <span className="text-yellow-400 text-2xl">&#9733;</span>
                    ) : (
                        <span className="text-gray-300 text-2xl">&#9734;</span>
                    )}
                </span>
            ))}
        </div>
    );
};

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 text-5xl  p-2 rounded-full hover:text-primary"
        onClick={onClick}
    >
        &#8249;
    </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 text-5xl  p-2 rounded-full hover:text-primary"
        onClick={onClick}
    >
        &#8250;
    </button>
);

const Clients = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '40px',
        beforeChange: (current: any, next: React.SetStateAction<number>) => setActiveIndex(next),
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '5px',
                },
            },
        ],
    };

    return (
        <div className="client-carousel max-w-[83vw] mb-14 mx-auto relative px-4 md:px-0">
            <h2 className="unihead text-center mb-4">Our Clients</h2>
            <p className="unip text-center pb-8">
                We take pride in delivering exceptional service and value to our clients.
            </p>
            
            <Slider {...settings}>
                {info.map((client, index) => (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        key={index}
                        className="px-5 mb-5"
                    >
                        <div className="bg-white px-5 md:px-10 py-8 rounded-2xl h-[300px] md:h-[320px]  md:mx-8 shadow-lg">
                            <img
                                src={client.img}
                                alt={client.name}
                                className="rounded-full w-16 h-16 md:w-20 md:h-20"
                            />
                            <h3 className="text-lg md:text-xl font-bold my-2 ">{client.name}</h3>
                            <StarRating rating={client.rating} />
                            <p className="text-gray-800 mt-2 text-sm md:text-base">"{client.review}"</p>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
};

export default Clients;
