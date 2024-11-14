import Image from "next/image";

const img = [
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
];

const Railway = () => {
    return (
        <>
            <div id="Railway" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead text-center mb-10 mt-10">Railway</h1>
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
                                    className="rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-500 mx-auto
                               " // responsive width classes
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Responsive text content */}
                <div className="text-justify px-4 sm:px-2">
                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Railway Station Design:
                            <span className="text-brown font-normal"> Enhancing Passenger Experience and Operational Efficiency</span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            CivilMantra brings a unique blend of design expertise and operational knowledge to railway station design. We focus on creating:
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Passenger-Centric Stations</h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            We prioritize passenger experience by designing user-friendly stations that are accessible, safe, and comfortable. Our stations incorporate clear signage, intuitive wayfinding systems, and amenities that cater to diverse needs, including people with disabilities.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Operational Efficiency</h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            Beyond passenger comfort, we optimize station layouts for efficient passenger movement and freight handling.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Railway;
