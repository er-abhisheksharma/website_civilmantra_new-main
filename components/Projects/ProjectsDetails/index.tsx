import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const data = [
    {
        id: 1,
        description: "Highlighted Projects",
        images: [
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        id: 2,
        description: "Government Projects",
        images: [
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        id: 3,
        description: "Completed Projects",
        images: [
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
    {
        id: 4,
        description: "Ongoing Projects",
        images: [
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-jplenio-2566850 (1).jpg" },
            { image: "/images/AboutUs/journey/pexels-life-of-pix-2489 (1).jpg" },
        ],
    },
];

const ProjectDetails = () => {
    const [selectedProject, setSelectedProject] = useState(data[0]); // State to track selected project

    return (
        <div className="max-w-[88vw] mx-auto mb-20">
            

            {/* Project selection buttons */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }} className="flex justify-center gap-8 mb-8"
            >
                {data.map((projectItem) => (
                    <button
                        key={projectItem.id}
                        className={`px-4 py-2 mb-10 
                        ${selectedProject.id === projectItem.id
                                ? 'bg-primary text-white relative -translate-y-1 scale-125 transition-transform duration-300 ease-in-out'
                                : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out shadow-xl'} 
                        rounded-lg`}
                        onClick={() => setSelectedProject(projectItem)} // Update selected project on click
                    >
                        {projectItem.description} {/* Use descriptive text instead of id */}
                    </button>
                ))}
            </motion.div>

            {/* Gallery Grid with Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-y-10"
                >
                    {selectedProject.images.map((item, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }} key={index} className="flex justify-center items-center mb-10">
                            <div>
                                <Image
                                    src={item.image}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={500}
                                    height={150}
                                    style={{ width: '350px', height: '350px', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    className="shadow-xl shadow-gray-700 hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out"
                                />
                                
                            </div>
                            
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
