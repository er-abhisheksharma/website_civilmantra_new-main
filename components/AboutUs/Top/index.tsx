import Image from "next/image";
import { motion } from "framer-motion";
const images = [
    "/images/AboutUs/Top/tunnel-6723643_1280.jpg",
    "/images/AboutUs/Top/traffic-7272520_1280.jpg",
    "/images/AboutUs/Top/tunnel-4427609_1280.jpg",
    "/images/AboutUs/Top/pexels-anilsharma65-10504911.jpg"
];

const Top = () => {


    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Background slideshow using multiple images */}
            <div className="absolute inset-0 w-full h-full bg-slideshow -z-10"></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Centered Heading Content */}
            <div className="flex items-center h-full z-10 px-4 max-w-[90vw] mx-auto">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-[70vw] mt-12"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-secondary my-5">
                        A Legacy Etched in <span className="text-red-600">Stone</span>
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                        The Enduring Power of Civil Engineering
                    </h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-5 text-base max-sm:hidden sm:text-lg md:text-xl leading-relaxed text-white"
                    >
                        Civil engineering is a testament to human ingenuity. From the pyramids of Giza to the Golden Gate Bridge, civil engineers have shaped our world by designing and building the structures that define civilization. Throughout history, this field has continuously evolved, adapting to new technologies and materials. Today, civil engineers are at the forefront of sustainable practices, smart infrastructure, and resilient design, ensuring a future where our built environment works in harmony with the natural world.
                    </motion.p>
                </motion.div>
            </div>

            <style jsx>{`
                /* Background slideshow animation */
@keyframes slideshow {
    0% { background-image: url(${images[0]}); }
    25% { background-image: url(${images[1]}); }
    50% { background-image: url(${images[2]}); }
    75% { background-image: url(${images[3]}); }
    100% { background-image: url(${images[0]}); }
}


                /* Apply slideshow keyframes */
                .bg-slideshow {
                    animation: slideshow 20s infinite ease-in-out;
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
        </div>
    );
};

export default Top;
