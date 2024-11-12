import Image from "next/image";
import { motion } from "framer-motion";

const Dealsin = () => {
    return (
        <>
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
                <h1 className="unihead mt-12 md:mt-20 max-lg:mb-10 text-center">We Deals In</h1>
            </motion.div>

            <div className="xl:py-10 lg:my-10">
                <div className="flex flex-col lg:flex-row max-w-[88vw] mx-auto gap-x-10 justify-between gap-y-10 md:gap-y-0">
                    <div className="w-full lg:w-1/2 relative xl:justify-center xl:items-center mx-auto">
                        <div className="flex flex-col  gap-y-5 lg:mt-6 max-xl:mt-2 md:flex-row md:gap-x-5">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={"/images/AboutUs/Wedeal/1730806663019.jpg"}
                                    alt=""
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-xl h-[250px] md:h-[300px]"
                                />
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0 }}
                                viewport={{ once: true }}
                                className="absolute top-[200px]  md:top-[220px] left-[420px] md:left-[350px] xl:top-[220px] xl:left-[420px] lg:left-[200px] lg:top-[290px]"
                            >
                                <Image
                                    src={"/images/AboutUs/Wedeal/1720754084821.jpg"}
                                    alt=""
                                    width={250}
                                    height={300}
                                    className="rounded-lg  h-[150px] shadow-2xl max-sm:w-[550px] max-sm:h-[250px]  max-sm:hidden"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4 md:px-0">
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0 }}
                            viewport={{ once: true }}
                            className="text-base md:text-lg lg:text-xl mb-4 :mt-20 lg:mt-0  max-sm:mt-0 text-justify"
                        >
                            <span className="text-primary">CIVIL</span><span className="text-brown">MANTRA</span> is providing services in various sectors like Roads & Bridges, Expressways, Tunnels, Irrigation, Urban Development. The team of CIVILMANTRA has vast experience in designing various types of roads. Currently, we are executing detailed Project Reports/ Detailed Design of over 3500 km of major NH projects and providing consultancy for another 32,000 km of NH/SH.
                        </motion.h2>

                        <motion.ul
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="list-disc text-base md:text-lg lg:text-xl text-justify text-primary ml-5 mb-4 marker:text-brown"
                        >
                            <li>Pre-Feasibility Studies</li>
                            <li>Pre & Post Tender Engineering Services</li>
                            <li>Proof & Safety Consultant</li>
                            <li>Detailed Project Report (DPR)</li>
                            <li>Project Management Consultancy (PMC)</li>
                            <li>Authority Engineer (AE)</li>
                        </motion.ul>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-sm md:text-base text-justify "
                        >
                            The following abstract shows the complete order book scenario: CivilMantra is an Engineering & Management Consultancy providing services for Design and Construction Supervision, Pre-bid services for National Highway Authority of India, Ministry of Surface Transport, Government of India, and Private Developers/ Contractors.
                        </motion.p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dealsin;
