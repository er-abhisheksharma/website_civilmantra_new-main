import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import { Navigation } from 'swiper/modules'; // Only import Navigation

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
        <div className="max-w-[88vw] mx-auto">
            <div>
                <h1 className="unihead my-20 text-center">Highlighted Projects</h1>
            </div>
            <Swiper
                spaceBetween={3}
                slidesPerView={3}
                navigation={{ enabled: true }}
                modules={[Navigation]} // Only use Navigation module
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
                                className=""
                            />
                            <div className='w-full max-w-[370px]'>
                            <h1 className="my-1 text-xl text-left "><span className="font-bold">Project:</span> {item.project}</h1>
                            <h3 className="my-1 text-xl text-left "><span className="font-bold">Location:</span> {item.location}</h3>
                            <p className="text-base text-left "><span className="font-bold">Description:</span> {item.description}</p>
                            <button>
                                <p className='mt-2 text-primary text-xl rounded-sm'><a href={item.url}>View more {'>'}{'>'}</a></p>
                            </button>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Highlighted;
