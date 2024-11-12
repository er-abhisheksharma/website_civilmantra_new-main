const img = [
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },

]

import Image from "next/image";

const Transport = () => {
    return (
        <>
            <div id="Transport" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead mb-10 mt-10">Transport Planning</h1>
                </div>
                <div className="flex justify-center  items-center gap-x-10"> {/* Flex container */}
                    {img.map((item, index) => (
                        <div key={index} className="flex-shrink-0"> {/* Prevent shrinking of images */}
                            <div className="my-5">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={index === 1 ? 450 : 370}
                                    height={index === 1 ? 350 : 300}
                                    className="rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-justify">
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Optimizing Movement:
                        <span className="text-[28px] leading-[28px] mb-5 font-normal text-brown " > Transport Planning Solutions</span>
                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                    CivilMantra offers comprehensive transport planning services to help clients develop and optimize their transportation systems for a more efficient, sustainable, and user-friendly future. Our expertise covers
                    </p>
                </div>
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Traffic Management Studies

                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                    We conduct in-depth traffic analysis to identify congestion bottlenecks and develop data-driven solutions that improve traffic flow, reduce travel times, and enhance overall road safety.
                    </p>
                </div>
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Multimodal Transportation Planning
                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                    We believe in a holistic approach to transportation planning. We integrate various modes of transport, such as roads, railways, metro systems, and cycling infrastructure, to create seamless and sustainable mobility options that cater to diverse needs.
                    </p>
                </div>
                <div>
                    <h1 className="text-[28px] leading-[28px] my-5 font-semibold text-primary">Public Transport Planning
                    </h1>
                    <p className="text-[18px] leading-[32px] mb-5 font-normal ">
                    We recognize the importance of accessible and efficient public transportation systems in reducing car dependence and promoting sustainable urban development. We collaborate with clients to enhance public transport infrastructure, improve service frequency and reliability, and create a user-friendly experience for commuters.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
};

export default Transport;
