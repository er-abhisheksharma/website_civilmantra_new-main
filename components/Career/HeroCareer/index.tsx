import { motion } from "framer-motion";

const HeroCareer = () => {
    return (
        <>
            <div className='relative flex flex-col justify-center items-center text-center mb-0 max-sm:px-4 text-white '>
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    className='absolute inset-0 w-full h-full object-cover z-0'
                >
                    <source src="/videos/WhatsApp Video 2024-11-14 at 12.43.45 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className=" absolute top-[1px] left-0 w-full h-full bg-black opacity-60"></div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='max-sm:w-full max-[1024px]:h-[35vh] max-[1024px]:w-[90%] max-sm:h-[40vh] w-[60%] h-[65vh] flex flex-col justify-center items-center max-sm:justify-start text-center gap-4 overflow-hidden z-10'>
                    <p className='max-sm:text-3xl max-[1024px]:text-4xl max-sm:pt-0 pt-20  text-6xl font-semibold max-[1024px]:pt-0 max-md:mt-36 md:mt-8'>
                        Join our world-class team of creators and dreamers
                    </p>
                    <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, delay: 0.2 }} className='max-sm:text-base max-sm:w-full max-[1024px]:mt-4 w-[65%] text-gray-200 text-lg max-lg:hidden'>
                        At Civilmantra, we believe in staying one step ahead of cyber attackers, keeping our customers' assets safe and secure.
                    </motion.p>
                </motion.div>
            </div>

        </>
    );
};
export default HeroCareer;
