import Image from "next/image";

const img = [
    { image: "/images/Sectors/Tunnels/1729263877541 (1).jpg" },
    { image: "/images/Sectors/Tunnels/1720754084821.jpg" },
    { image: "/images/Sectors/Tunnels/1720754084838.jpg" },
];

const Tunnels = () => {
    return (
        <>
            <div id="tunnels" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead mb-10 mt-10 text-center">Tunnels</h1>
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
                <div className="text-justify  px-4 sm:px-2">
                    <div>
                        <h1 className="text-[24px] text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Tunneling Expertise:
                            <span className="text-brown  font-normal"> Navigating Complexities</span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            CivilMantra tackles even the most intricate tunneling projects with a commitment to safety, efficiency, and environmental responsibility. We utilize a combination of innovative techniques, meticulous planning, and advanced technology to deliver:
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">
                            Safe & Efficient Tunneling
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            Safety is paramount at CivilMantra. We employ rigorous safety protocols and best practices throughout the tunneling process to protect our workers and the surrounding environment. Additionally, we optimize project timelines and costs through efficient excavation methods and advanced material handling techniques.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">
                            Urban Tunneling
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            Navigating the dense urban landscape with its existing infrastructure and utilities requires exceptional planning and expertise. Our team specializes in urban tunneling projects, minimizing disruption to daily life and ensuring the integrity of existing structures.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary max-sm:text-start">
                            Utility Tunnels
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            Efficient and well-maintained utility tunnels are essential for the smooth functioning of urban areas. CivilMantra designs and constructs utility tunnels that house essential services such as power lines, water pipes, and communication cables, ensuring their long-term functionality and accessibility for maintenance.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tunnels;
