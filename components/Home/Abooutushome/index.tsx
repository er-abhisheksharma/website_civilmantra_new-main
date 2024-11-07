import { motion } from "framer-motion";
import Image from "next/image";

const Aboutus = () => {
    return (
        <>
            <div className="mb-20 relative">
                <div className="max-w-[88vw] mx-auto flex flex-wrap items-center justify-center ">
                    {/* Image Section */}
                    <div className="w-full sm:w-1/2 p-2 flex justify-center relative group">
                        <Image
                            src={"/images/Home/AboutusHome/Map5.png"}
                            alt="image"
                            width={450}
                            height={300}
                            className="object-cover max-w-full h-auto duration-300 ease-in-out hover:-translate-y-4 hover:scale-110 transition-transform opacity-80 hover:opacity-90"
                        />
                        {/* Dots */}
                        {/* <div className="absolute top-60 left-76 w-2 h-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-20 left-20 w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-52 left-15 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-5 right-0 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                        {/* Add more dots as needed */}
                    </div>


                    {/* Text Section */}
                    <div className="w-full sm:w-1/2 max-lg:py-4 flex justify-center items-center">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-l-3xl text-left"
                        >
                            <h1 className="text-4xl  font-bold font-montserrat mb-4 text-logored">About Us</h1>
                            <h2 className=" text-lg sm:text-xl text-justify ">
                                <span className="font-bold"><span className="text-primary">Civil<span className="text-logored">Mantra</span></span> Infracon Pvt. Ltd.</span> is your one-stop shop for all your construction needs. We're a team of passionate engineers and consultants dedicated to exceeding client expectations. 
                            </h2>
                            <p className=" text-lg sm:text-xl text-justify my-2">
                            <span className="font-bold"><span className="text-primary">Civil<span className="text-logored">Mantra</span></span> Infracon Pvt. Ltd.</span> transforms visions into reality. We're a passionate team of engineers and consultants providing comprehensive construction solutions. From design and planning to construction supervision, we leverage cutting-edge techniques to deliver exceptional results.
                            </p>
                            <h3 className="text-lg sm:text-xl font-bold hover:bg-logored transition-all duration-300 hover:translate-x-1 hover:scale-110 rounded bg-primary text-center w-[110px] text-white py-2"><a href="/AboutUs">Read More </a></h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
