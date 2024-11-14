import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const projects = [
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehProject",
    },
    // Add other project objects as needed
];

const Highlighted = () => {
    return (
        <div className="max-w-[88vw] mx-auto px-4 md:px-0">
            <div>
                <h1 className="unihead my-10 md:my-20 text-center">Highlighted Projects</h1>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={1} // Default to 1 slide on small screens
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 15 }, // Adjust at 640px
                    768: { slidesPerView: 2, spaceBetween: 20 },  // Adjust at 768px
                    1024: { slidesPerView: 3, spaceBetween: 30 }, // Adjust at 1024px and above
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {projects.map((item, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src={item.img}
                                alt={`Project ${index + 1}`}
                                width={370}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="w-full max-w-[370px] py-4 md:py-6">
                                <h1 className="my-1 text-lg md:text-xl text-left">
                                    <span className="font-bold">Project:</span> {item.project}
                                </h1>
                                <h3 className="my-1 text-lg md:text-xl text-left">
                                    <span className="font-bold">Location:</span> {item.location}
                                </h3>
                                <p className="text-sm md:text-base text-left">
                                    <span className="font-bold">Description:</span> {item.description}
                                </p>
                                <button className="mt-2 text-primary text-lg md:text-xl rounded-sm">
                                    <a href={item.url}>View more &gt;&gt;</a>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Navigation buttons */}
                <div className="swiper-button-next max-lg:hidden" />
                <div className="swiper-button-prev max-lg:hidden" />
            </Swiper>
        </div>
    );
}

export default Highlighted;
