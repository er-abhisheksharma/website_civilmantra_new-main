'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

const img = [
    { image: "/images/Sectors/Herosectors/DelhiFlyover_EDITED.jpg" },
    { image: "/images/Sectors/Herosectors/Expressway.webp" },
    { image: "/images/Sectors/Herosectors/bridge-over-highway-on-background-260nw-745861345.png" },
];

const Roadsbridges = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % img.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div id="roadsbridges" className="max-w-[88vw] mx-auto ">
            <div>
                <h1 className="unihead mb-10 mt-10 ">Roads </h1>
            </div>

            {/* Flex container with responsive adjustments */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-10">
                    {img.map((item, index) => (
                        <div key={index} className=" w-full md:w-auto">
                            <div className="my-5">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={index === 1 ? 420 : 370}
                                    height={index === 1 ? 350 : 300}
                                    className="rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-500 mx-auto
                               " // responsive width classes
                                />
                            </div>
                        </div>
                    ))}
                </div>

            <div className="text-justify mt-8 space-y-8  px-4 sm:px-2">
                <div>
                    <h1 className="text-2xl text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                        Building Enduring Connections:
                        <span className="text-brown font-normal"> Roads </span>
                    </h1>
                    <p className="text-base md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        At CivilMantra, we understand the critical role that roads and bridges play in connecting communities, facilitating trade, and driving economic prosperity. Our team of skilled engineers and experienced project managers works collaboratively with clients to design, construct, and supervise the development of:
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">Highways & Expressways</h1>
                    <p className="text-base md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        At CivilMantra, we understand the critical role that roads and bridges play in connecting communities, facilitating trade, and driving economic prosperity. Our team of skilled engineers and experienced project managers works collaboratively with clients to design, construct, and supervise the development of:
                    </p>
                </div>
                {/* <div>
                    <h1 className="text-2xl md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Bridges</h1>
                    <p className="text-base md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        Our bridge design expertise encompasses a broad spectrum, from elegant pedestrian bridges to complex multi-span structures. We prioritize aesthetics, functionality, and long-term sustainability, considering factors like traffic volume, seismic resilience, and ease of maintenance.
                    </p>
                </div> */}
                <div>
                    <h1 className="text-2xl md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">Rural Roads</h1>
                    <p className="text-base md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        We recognize the unique challenges faced by rural communities in terms of accessibility and infrastructure development. Our team designs and implements rural road projects that improve connectivity to essential services, markets, and educational opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Roadsbridges;
