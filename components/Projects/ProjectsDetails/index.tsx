import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    flipimage: string;
}

// Define the type for project data
interface ProjectData {
    id: number;
    description: string;
    businessdata: BusinessData[];
}

const data: ProjectData[] = [
    // {
    //     id: 1,
    //     description: "Highlighted Projects",
    //     businessdata: [
    //         {
    //             location: "Leh",
    //             head: "4-Lane ",
    //             km: "48.32 Km",
    //             work: "Highway",
    //             duration: "5 Months",
    //             client: "NHIDCL",
    //             Department: "NHIDCL",
    //             paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
    //             flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
    //         },
    //         {
    //             location: "Leh",
    //             head: "4-Lane ",
    //             km: "48.32 Km",
    //             work: "Highway",
    //             duration: "5 Months",
    //             client: "NHIDCL",
    //             Department: "NHIDCL",
    //             paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
    //             flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
    //         },
    //         {
    //             location: "Leh",
    //             head: "4-Lane ",
    //             km: "48.32 Km",
    //             work: "Highway",
    //             duration: "5 Months",
    //             client: "NHIDCL",
    //             Department: "NHIDCL",
    //             paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
    //             flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
    //         },
    //         {
    //             location: "Leh",
    //             head: "4-Lane ",
    //             km: "48.32 Km",
    //             work: "Highway",
    //             duration: "5 Months",
    //             client: "NHIDCL",
    //             Department: "NHIDCL",
    //             paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
    //             flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
    //         },
    //         {
    //             location: "Leh",
    //             head: "4-Lane ",
    //             km: "48.32 Km",
    //             work: "Highway",
    //             duration: "5 Months",
    //             client: "NHIDCL",
    //             Department: "NHIDCL",
    //             paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
    //             flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
    //         },
    //         {
    //             location: "Leh",
    //             head: "4-Lane ",
    //             km: "48.32 Km",
    //             work: "Highway",
    //             duration: "5 Months",
    //             client: "NHIDCL",
    //             Department: "NHIDCL",
    //             paragraph: "Consultancy Services for Preparation of Detailed Project Report and providing Pre-Construction activities for Construction of 03 Nos By-Pass roads at Leh in the Union Territory of Ladakh-2nd Call",
    //             flipimage: "/images/Home/BusinessHelp/Leh.jpeg",
    //         },
    //     ],
    // },
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

// Custom Next Arrow
const NextArrow = (props: { onClick: any; }) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10" // Change 'right-4' to 'right-8'
            onClick={onClick}
        >
            <svg className="" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

// Custom Previous Arrow
const PrevArrow = (props: { onClick: any; }) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10" // Change 'left-4' to 'left-8'
            onClick={onClick}
        >
            <svg className="" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};


const ProjectDetails = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData>(data[0]);

    // Slider settings with custom arrows
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
    };

    return (
        <div className="max-w-[90vw] mx-auto my-20">
            {/* Project selection buttons */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center gap-8"
            >
                {data.map((projectItem) => (
                    <button
                        key={projectItem.id}
                        className={`px-4 py-2 mb-10 
                        ${selectedProject.id === projectItem.id
                                ? 'bg-primary text-white relative -translate-y-1 scale-110 transition-transform duration-300 ease-in-out'
                                : 'bg-white text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out shadow-xl hover:scale-110 '} 
                        rounded-lg`}
                        onClick={() => setSelectedProject(projectItem)}
                    >
                        {projectItem.description}
                    </button>
                ))}
            </motion.div>

            {/* Carousel for Business Data */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Slider {...sliderSettings}>
                        {selectedProject.businessdata.map((item, index) => (
                            <div key={index} className="flex justify-center items-center my-10">
                                <div className="group perspective-1000 mx-auto h-[350px] w-[350px]">
                                    <div className="rotate-container">
                                        {/* Front Side */}
                                        <div className="back-side bg-white p-6 rounded-lg shadow-md border-t-8 border-brown">
                                            <ul>
                                                <li className="text-xl mb-3 font-semibold">Location - <span className="text-primary font-normal">{item.location}</span></li>
                                                <li className="text-xl font-semibold mb-3">{item.head}</li>
                                                <li className="text-xl mb-3 font-semibold">Length - <span className="text-primary font-normal">{item.km}</span></li>
                                                <li className="text-xl mb-3 font-semibold">Duration - <span className="text-primary font-normal">{item.duration}</span></li>
                                            </ul>
                                            <p className="text-gray-800 font-medium">{item.paragraph}</p>
                                        </div>

                                        {/* Back Side */}
                                        <div className="front-side bg-gray-100 rounded-lg shadow-md y-5">
                                            <div className="flex justify-center items-center w-full h-full">
                                                <Image
                                                    src={item.flipimage}
                                                    alt="Back Side Image"
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    className="rounded-lg"
                                                />
                                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
                                                <div className="p-6 text-gray-200 z-10">
                                                    <ul>
                                                        <li className="text-xl mb-3 font-semibold">Work - <span className="font-normal">{item.work}</span></li>
                                                        <li className="text-xl mb-3 font-semibold">Client - <span className="font-normal">{item.client}</span></li>
                                                        <li className="text-xl mb-3 font-semibold">Department - <span className="font-normal">{item.Department}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
