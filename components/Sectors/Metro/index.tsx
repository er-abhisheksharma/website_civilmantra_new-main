import Image from "next/image";

const img = [
    { image: "/images/Sectors/Metro/pexels-annamw-1057858.jpg" },
    { image: "/images/Sectors/Metro/pexels-piyush-arora-654655-1463008.jpg" },
    { image: "/images/Sectors/Metro/pexels-rick98-10751048.jpg" },
];

const Metro = () => {
    return (
        <>
            <div id="metro" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead text-center mb-10 mt-10">Metro</h1>
                </div>

                {/* Responsive image container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-10">
                    {img.map((item, index) => (
                        <div key={index} className=" w-full md:w-auto">
                            <div className="my-5">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={index === 1 ? 420 : 370}
                                    height={index === 1 ? 350 : 300}
                                    className="rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-500 mx-auto" 
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Responsive text content */}
                <div className="text-justify px-4 sm:px-2">
                    <div>
                        <h1 className="text-[24px] max-sm:text-left md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                        Sustainable Urban Mobility:
                            <span className="text-brown font-normal"> Metro Services Integration</span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        CivilMantra recognizes the critical role that metro systems play in fostering sustainable and efficient urban mobility. With our extensive experience, we guide clients on integrating metro services seamlessly into existing transportation networks, promoting:
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Reduced Traffic Congestion & Pollution:   </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        By providing a high-capacity, rapid transit option, metro systems significantly alleviate traffic congestion on roads, leading to reduced air and noise pollution. This contributes to a cleaner and more sustainable urban environment.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Enhanced Connectivity & Accessibility:</h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        Metro networks create a web of connections within cities and surrounding areas, improving access to jobs, educational institutions, and recreational facilities. This promotes a more inclusive and equitable city experience.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Urban Development & Transit-Oriented Communities:</h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        Effective metro integration can act as a catalyst for urban development. We collaborate with clients to plan and design metro stations as hubs for development, fostering vibrant mixed-use communities with residential, commercial, and recreational spaces.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Metro;
