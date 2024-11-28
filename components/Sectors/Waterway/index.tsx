import Image from "next/image";

const img = [
    { image: "/images/Sectors/Waterways/beautiful-view-old-stone-bridge-reflecting-clear-water-river-dawn (1).jpg" },
    { image: "/images/Sectors/Waterways/dam-ter-river-sau-reservoir.jpg" },
    { image: "/images/Sectors/Waterways/waterway.jpg" },
];

const Waterway = () => {
    return (
        <>
            <div id="water" className="max-w-[88vw] mx-auto">
                <div>
                    <h1 className="unihead text-center mb-10 mt-10">Waterways</h1>
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
                        Waterway Infrastructure:
                            <span className="text-brown font-normal"> Efficient and Environmentally Friendly (Optional, if applicable to CivilMantra)
                            </span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        If CivilMantra offers services related to waterway infrastructure development, consider including a section like this:
                        </p>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        CivilMantra understands the importance of waterways as a sustainable and cost-effective mode of transportation. Our expertise encompasses:
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Port Development:   </h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        We design and manage efficient and functional ports that facilitate international trade and economic activity. Our focus is on optimizing port operations, cargo handling efficiency, and sustainability considerations.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Inland Waterways Revitalization:</h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] mb-5 font-normal">
                        We advocate for the revitalization of inland waterways as a viable transportation option. Our team develops strategies for improving waterway infrastructure, ensuring navigability, and promoting multimodal transport integration.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-[24px] md:text-[28px] leading-[28px] my-5 font-semibold text-primary">Flood Protection Measures:</h1>
                        <p className="text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] font-normal mb-20">
                        We recognize the potential dangers of flooding for communities residing along waterways. Our engineers design and implement effective flood protection measures, such as levees, flood walls, and natural infrastructure solutions, to safeguard communities and infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Waterway;
