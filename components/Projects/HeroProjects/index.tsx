'use client'

import { motion } from "framer-motion";
import React from 'react'
import Image from "next/image";

const Heroprojects = () => {
    return (
        <>
            <div className='relative flex flex-col justify-center items-center text-center mb-0 max-sm:px-4 text-white '>
                {/* Background Video */}
                <Image
                    src="/images/Projects/pexels-yashwanth-186691934-11373628.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full -z-10"
                />
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
                        Projects
                    </p>

                </motion.div>
            </div>
        </>
    )
}

export default Heroprojects;