import Image from "next/image";

const img = [
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
    { image: "/images/Sectors/Herosectors/Tunnel.jpg" },
];

const Transport = () => {
    return (
        <>
            <div id="Transport" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead text-center mb-10 mt-10">Transport Planning</h1>
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
                <div className="text-justify px-4 sm:px-2">
                    <div>
                        <h1 className="text-[24px] text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Optimizing Movement:
                            <span className="text-brown font-normal"> Transport Planning Solutions</span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            CivilMantra offers comprehensive transport planning services to help clients develop and optimize their transportation systems for a more efficient, sustainable, and user-friendly future. Our expertise covers:
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] max-sm:text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Traffic Management Studies
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            We conduct in-depth traffic analysis to identify congestion bottlenecks and develop data-driven solutions that improve traffic flow, reduce travel times, and enhance overall road safety.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] max-sm:text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Multimodal Transportation Planning
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            We believe in a holistic approach to transportation planning. We integrate various modes of transport, such as roads, railways, metro systems, and cycling infrastructure, to create seamless and sustainable mobility options that cater to diverse needs.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] max-sm:text-start md:text-[28px] leading-[28px] my-5 font-semibold text-primary">
                            Public Transport Planning
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                            We recognize the importance of accessible and efficient public transportation systems in reducing car dependence and promoting sustainable urban development. We collaborate with clients to enhance public transport infrastructure, improve service frequency and reliability, and create a user-friendly experience for commuters.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transport;
