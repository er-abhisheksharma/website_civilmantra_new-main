import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for business data
interface BusinessData {
    location: string;
    head: string;
    km: string;
    work: string;
    duration: string;
    client: string;
    Department: string;
    paragraph: string;
    flipimage: string; // Ensure this is a string for image paths
}

// Define the type for project data
interface ProjectData {
    id: number;
    description: string;
    businessdata: BusinessData[]; // Use the defined type
}

const data: ProjectData[] = [
    {
        id: 1,
        description: "Highlighted Projects",
        businessdata: [
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
        ],
    },
    {
        id: 2,
        description: "Government Projects",
        businessdata: [
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
        ],
    },
    {
        id: 3,
        description: "Completed Projects",
        businessdata: [
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
        ],
    },
    {
        id: 4,
        description: "Ongoing Projects",
        businessdata: [
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
            {
                location: "Leh",
                head: "4-Lane ",
                km: "48.32 Km",
                work: "Highway",
                duration: "5 Months",
                client: "NHIDCL",
                Department: "NHIDCL",
                paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
                flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
            },
        ],
    },
];

const ProjectDetails = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData>(data[0]); // State to track selected project

    return (
        <div className="max-w-[88vw] mx-auto my-20">
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
                    {selectedProject.businessdata.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }} className="flex justify-center items-center mb-10">
                            <div className="group perspective-1000 mx-auto h-[350px] w-[350px]">
                                {/* Flip Container */}
                                <div className="rotate-container">
                                    {/* Front Side */}
                                    <div className="back-side bg-white p-6 rounded-lg shadow-md border-t-8 border-brown">
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: -20 },
                                                visible: { opacity: 1, y: 0 },
                                            }}
                                            initial="hidden"
                                            whileInView="visible"
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="flex flex-col justify-between h-full"
                                        >
                                            {/* Front Content Section */}
                                            <div className="">
                                                <ul>
                                                    <li className="text-xl mb-3 font-semibold">Location - <span className="text-primary font-normal">{item.location }</span></li>
                                                    <li className="text-xl font-semibold mb-3">{item.head}</li>
                                                    <li className="text-xl mb-3 font-semibold">Length - <span className="text-primary font-normal">{item.km}</span></li>
                                                    <li className="text-xl mb-3 font-semibold">Duration - <span className="text-primary font-normal">{item.duration}</span></li>
                                                </ul>
                                                <p className="text-gray-800 font-medium self-end">
                                                    {item.paragraph}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="front-side bg-gray-100 rounded-lg shadow-md">
                                        <div className="flex justify-center items-center w-full h-full">
                                            <Image
                                                src={item.flipimage} // Back Image
                                                alt="Back Side Image"
                                                fill // Use fill for Next.js 13
                                                style={{ objectFit: "cover" }}
                                                className="rounded-lg"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
                                            <div>
                                                <motion.div
                                                    variants={{
                                                        hidden: { opacity: 0, y: -20 },
                                                        visible: { opacity: 1, y: 0 },
                                                    }}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                                    viewport={{ once: true }}
                                                    className="flex flex-col justify-between h-full relative"
                                                >
                                                    {/* Front Content Section */}
                                                    <div className="p-6">
                                                        <ul className="list-none">
                                                            <li className="text-xl mb-3 font-semibold text-gray-200">
                                                                Work - <span className="text-gray-100 font-normal">{item.work}</span>
                                                            </li>
                                                            <li className="text-xl mb-3 font-semibold text-gray-200">
                                                                Client - <span className="text-gray-100 font-normal">{item.client}</span>
                                                            </li>
                                                            <li className="text-xl mb-3 font-semibold text-gray-200">
                                                                Department - <span className="text-gray-100 font-normal">{item.Department}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
