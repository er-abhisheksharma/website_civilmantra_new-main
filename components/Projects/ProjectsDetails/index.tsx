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
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={onClick}
        >
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10"
            onClick={onClick}
        >
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};

const ProjectDetails = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData>(data[0]);

    // Slider settings with custom arrows and responsive slides
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,  // Default for larger screens
        slidesToScroll: 3,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
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
                className="flex justify-center gap-x-8 flex-wrap"
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
                            <div key={index} className="flex justify-center items-center lg:my-10">
                                <div className="group  perspective-1000 mt-10 mb-8 mx-auto md:h-[250px] md:w-[250px] h-[300px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[290px] lg:w-[290px] xl:h-[350px] xl:w-[350px]">
                                    {/* Flip Container */}
                                    <div className="rotate-container">
                                        {/* front Side */}
                                        <div className="front-side bg-gray-100 rounded-lg shadow-md relative flex items-center justify-center ">
                                            <Image
                                                src={item.flipimage}
                                                alt="Back Side Image"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, y: -20 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 0.5, delay: index * 0 }}
                                                viewport={{ once: true }}
                                                className="relative z-10 text-left"
                                            >
                                                <ul className="list-none space-y-1 sm:space-y-2">
                                                    <li className="text-base sm:text-lg md:text-xl mb-1 font-semibold text-gray-200">
                                                        Sector - <span className="text-gray-100 font-normal">{item.work}</span>
                                                    </li>
                                                    <li className="text-base sm:text-lg md:text-xl mb-1 font-semibold text-gray-200">
                                                        Client - <span className="text-gray-100 font-normal">{item.client}</span>
                                                    </li>
                                                    <li className="text-base sm:text-lg md:text-xl mb-1 font-semibold text-gray-200">
                                                        Department - <span className="text-gray-100 font-normal">{item.Department}</span>
                                                    </li>
                                                </ul>
                                            </motion.div>
                                        </div>
                                        {/* Back Side */}
                                        <div className="back-side bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-8 border-brown">
                                            <motion.div
                                                variants={{
                                                    hidden: { opacity: 0, y: -20 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 0, }}
                                                viewport={{ once: true }}
                                                className="flex flex-col justify-between h-full"
                                            >
                                                <div className="">
                                                    <ul className="space-y-2 sm:space-y-3">
                                                        <li className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-semibold">
                                                            Location - <span className="text-primary font-normal">{item.location}</span>
                                                        </li>
                                                        <li className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                                                            {item.head}
                                                        </li>
                                                        <li className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-semibold">
                                                            Length - <span className="text-primary font-normal">{item.km}</span>
                                                        </li>
                                                        <li className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-semibold">
                                                            Duration - <span className="text-primary font-normal">{item.duration}</span>
                                                        </li>
                                                    </ul>
                                                    <p className="text-gray-800 font-medium self-end text-sm sm:text-base">
                                                        {item.paragraph}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </AnimatePresence>
            <style jsx>{`
        .mySwiper .swiper-pagination {
          position: static;
          margin-top: 20px;
        }
      `}</style>
        </div>
        
    );
};

export default ProjectDetails;
