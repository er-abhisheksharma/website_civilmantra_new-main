import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";

const data = [
    {
        image: "/images/Home/Projects/teammembers.png",
        id: 300,
        name: "TEAM MEMBERS",
    },
    {
        image: "/images/Home/Projects/growingscale.png",
        id: 10,
        name: "GROWING SCALE",
    },
    {
        image: "/images/Home/Projects/clients.png",
        id: 350,
        name: "HAPPY CLIENTS",
    },
    {
        image: "/images/Home/Projects/projects.png",
        id: 1900,
        name: "PROJECTS",
    }
];

const Projects = () => {
    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="mb-16 bg-primary">
            <div className="flex max-[336px]:grid-cols-1 max-lg:grid max-lg:grid-cols-2 gap-6 max-w-[88vw] mx-auto justify-between py-14 text-white">
                {data.map((item, index) => (
                    <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex flex-col max-lg:items-center max-lg:justify-center max-lg:text-center" // Add centering classes here
                >
                    <div className="group cursor-pointer  max-lg:mt-5 lg:w-52">
                        <div className="flex items-center gap-x-2 max-lg:flex-col max-lg:items-center"> {/* Adjust for max-sm */}
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={40}
                                className="rounded-xl"
                            />
                            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] pt-2 text-center font-extrabold transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                                {startCounting && <CountUp start={0} end={item.id} duration={2} delay={index * 0} />}+
                            </h1>
                        </div>
                        <p className="text-[16px] sm:text-[20px] lg:text-[22px] font-bold pt-1">
                            {item.name}
                        </p>
                    </div>
                </motion.div>
                
                ))}
            </div>
        </div>
    );
};

export default Projects;
