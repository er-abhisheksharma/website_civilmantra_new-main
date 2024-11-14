import Image from "next/image";

const img = [
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
];

const Urbaninfra = () => {
    return (
        <>
            <div id="Urban" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead text-center mb-10 mt-10">Urban Infrastructure</h1>
                </div>

                {/* Responsive Flex container for images */}
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
                <div className="text-justify px-4 sm:px-4">
                    <div>
                        <h1 className="text-[24px] text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Shaping Livable Cities
                            <span className="text-brown font-normal"> Urban Infrastructure Development</span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            At CivilMantra, we are passionate about creating vibrant and livable cities. We offer a full spectrum of urban infrastructure development services, including:
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">
                            Water Supply & Sanitation
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            Safe and reliable access to clean water and effective waste disposal systems are fundamental to public health and well-being. Our team designs and manages projects that ensure clean water distribution networks, efficient wastewater treatment plants, and robust sanitation systems.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">
                            Stormwater Management
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            Climate change has intensified the need for effective stormwater management solutions. We design and implement innovative stormwater drainage systems, green infrastructure projects, and flood protection measures to mitigate flooding risks and protect communities.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">
                            Smart City Development
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            We believe in harnessing the power of technology to create intelligent and efficient urban environments. We collaborate with clients to integrate smart technologies in areas like traffic management, waste collection, and energy efficiency, fostering sustainable and resilient cities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Urbaninfra;
