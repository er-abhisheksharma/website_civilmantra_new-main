import Image from 'next/image';
import React, { useState } from 'react';
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
    // Add more projects here...
];

const designProjects = [
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    {
        img: "/images/AboutUs/journey/bgi.jpeg",
        location: "Leh",
        project: "Design Highway",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        url: "/LehDesignProject",
    },
    // Add more design projects here...
];

const HighlightedSection = () => {
    const [activeTab, setActiveTab] = useState("projects"); // State to track selected tab

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-[88vw] mx-auto px-4 md:px-0">
            {/* Tab Buttons */}
            <div className="text-center my-6">
    <div className="flex flex-col sm:flex-row justify-center items-center">
        <button
            className={`px-4 py-2 text-xl ${activeTab === "projects" ? "font-bold" : ""} sm:mx-4 my-2 sm:my-0`}
            onClick={() => handleTabChange("projects")}
        >
            Highlighted Projects
        </button>
        <span className="sm:mx-4 mx-0">|</span>
        <button
            className={`px-4 py-2 text-xl ${activeTab === "designProjects" ? "font-bold" : ""} sm:mx-4 my-2 sm:my-0`}
            onClick={() => handleTabChange("designProjects")}
        >
            Design Highlighted Projects
        </button>
    </div>
</div>


            {/* Content Based on Selected Tab */}
            {activeTab === "projects" ? (
                <div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 15 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
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
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next max-lg:hidden" />
                        <div className="swiper-button-prev max-lg:hidden" />
                    </Swiper>
                </div>
            ) : (
                <div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 15 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {designProjects.map((item, index) => (
                            <SwiperSlide key={index} className="flex flex-col items-center">
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={item.img}
                                        alt={`Design Project ${index + 1}`}
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
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next max-lg:hidden" />
                        <div className="swiper-button-prev max-lg:hidden" />
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default HighlightedSection;
