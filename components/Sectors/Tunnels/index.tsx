const img = [
    { image: "/images/Sectors/Tunnels/1729263877541 (1).jpg" },
    { image: "/images/Sectors/Tunnels/1720754084821.jpg" },
    { image: "/images/Sectors/Tunnels/1720754084838.jpg" },

]

import Image from "next/image";

const Tunnels = () => {
    return (
        <>
            <div id="tunnels" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead mb-10 mt-10">Tunnels</h1>
                </div>
                <div className="flex justify-center  items-center gap-x-10"> {/* Flex container */}
                    {img.map((item, index) => (
                        <div key={index} className="flex-shrink-0"> {/* Prevent shrinking of images */}
                            <div className="my-5">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={index === 0 ? 350 : index === 2 ? 350 : 430}
                                    height={index === 1 ? 450 : 300}
                                    className="rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-justify">
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Tunneling Expertise:
                        <span className="text-[28px] leading-[28px] mb-5 font-normal text-brown " > Navigating Complexities</span>
                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                        CivilMantra tackles even the most intricate tunneling projects with a commitment to safety, efficiency, and environmental responsibility. We utilize a combination of innovative techniques, meticulous planning, and advanced technology to deliver:
                    </p>
                </div>
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Safe & Efficient Tunneling

                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                        Safety is paramount at CivilMantra. We employ rigorous safety protocols and best practices throughout the tunneling process to protect our workers and the surrounding environment. Additionally, we optimize project timelines and costs through efficient excavation methods and advanced material handling techniques.
                         
                    </p>
                </div>
                <div  className="text-justify">
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Urban Tunneling
                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                    Navigating the dense urban landscape with its existing infrastructure and utilities requires exceptional planning and expertise. Our team specializes in urban tunneling projects, minimizing disruption to daily life and ensuring the integrity of existing structures.
                     
                    </p>
                </div>
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Utility Tunnels
                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                    Efficient and well-maintained utility tunnels are essential for the smooth functioning of urban areas. CivilMantra designs and constructs utility tunnels that house essential services such as power lines, water pipes, and communication cables, ensuring their long-term functionality and accessibility for maintenance.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
};

export default Tunnels;
