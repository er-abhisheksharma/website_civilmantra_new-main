import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const journeydata = [
    {
        year: "16",
        image: "/images/AboutUs/journey/Screenshot 2024-11-28 133545.png",
        info: " Founded as a Prebid and Detailed Design Company",
        turnover: "1 cr"
    },
    {
        year: "19",
        image: "/images/AboutUs/journey/Screenshot 2024-11-28 134020.png",
        info: "Entered In all sector of Highway, Bridges and Tunnels",
        turnover: "8 cr"
    },
    {
        year: "21",
        image: "/images/AboutUs/journey/WhatsApp Image 2024-11-27 at 3.24.28 PM.jpeg",
        info: "1st DPR Project in Highway",
        info2: "Entered in water segment(DPR of Dam)",
        info3: "Founded GreenMantra(Geotech Solution)",
        turnover: "15+ cr"
    },
    {
        year: "23",
        image: "/images/AboutUs/journey/2023.png",
        info: "Foundation of AiMantra (ITSolutions)",
        info2: "CIPL entered into authority and supervision.",
        turnover: "40+ cr"
    },
    {
        year: "24",
        image: "/images/AboutUs/journey/office2.jpeg",
        info: "Acquired G-eng along with NABL Lab and machinery (NSV,FWD,MBIU)",
        info2: "Secured first railway project(FLS)",
        turnover: "150+ cr"
    },

]

const Journey = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollUp = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ top: -200, behavior: "smooth" });
        }
    };

    const scrollDown = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ top: 200, behavior: "smooth" });
        }
    };

    return (
        <div className="max-lg:hidden">
            <div>
                <h1 className="unihead my-20 "> Our Achievements</h1>
            </div>
            <div
                className="overflow-hidden h-[75vh] flex mb-20 bg-black"
                style={{ backgroundImage: "url('/images/AboutUs/journey/pexels-rdne-7414284.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <div className="absolute left-0 w-full h-[75vh] bg-black opacity-50"></div>

                {/* Static 20 */}
                <div className="max-w-[88vw] mx-auto pb-52 pt-32 text-white flex justify-between items-center z-10">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-[200px]">20 <hr /></h1>
                    </motion.div>

                    {/* Scrolling Text Section with Up/Down Arrows */}
                    <div className="relative w-full">


                        <div
                            ref={scrollContainerRef}
                            className="flex flex-col overflow-y-scroll h-[500px] scrollbar-hidden group"
                        >
                            {journeydata.map((item, index) => (
                                <div key={index}>
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.8, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className={`flex ${index === 0 ? "mt-[99px]" : "my-[51.5px]"} gap-x-24 `}
                                    >
                                        <h1 className="text-[200px] w-52 text-primary">
                                            {item.year}
                                            <hr className="border-primary mt-[1px]" />
                                        </h1>

                                        <Image
                                            src={item.image}
                                            alt="Journey Image"
                                            height={300}
                                            width={300}
                                            className="h-[400px]  rounded-md "
                                        />
                                        <div className="w-96">
                                            <h1 className="text-6xl font-bold mb-2 une">Achievements</h1>
                                            <ul className="list-disc marker:text-primary marker:text-[30px] space-y-2">
                                                <li className="text-[25px]">{item.info}</li>
                                                {item.info2 && <li className="text-[25px]">{item.info2}</li>}
                                                {item.info3 && <li className="text-[25px]">{item.info3}</li>}
                                            </ul>



                                            <h2 className="text-[40px] underline underline-offset-8 decoration-white">Turnover - <span className="text-primary">{item.turnover}</span></h2>

                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;
