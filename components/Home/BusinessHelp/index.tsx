import { motion } from "framer-motion";
import Image from "next/image";

const businessdata = [
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
        flipimage: "/images/Home/BusinessHelp/org_9d920f5e12a2b2b0_1707112846000.jpg",
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
        flipimage: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
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
        flipimage: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
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
        flipimage: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
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
        flipimage: "/images/AboutUs/journey/pexels-tranmautritam-448828 (1).jpg",
    },

];

const Business = () => {
    return (
        <>
            <div className="max-w-[88vw] mx-auto mb-20">
                {/* Header Section */}
                <div className="lg:max-w-[70vw] text-center mx-auto mb-10">
                    <h1 className="unihead">Our Projects</h1>
                    <p className="unip">
                        From concept to completion, CivilMantra Infracon offers a comprehensive suite of services to turn your construction goals into reality, combining expert engineering with innovative solutions and a commitment to the highest quality standards.
                    </p>
                </div>

                {/* Business Data Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 my-20 cursor-pointer">
                    {businessdata.map((item, index) => (
                        <div key={index} className="group perspective-1000 mx-auto h-[350px] w-[350px]">
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
                                            <p className="text-gray-800 font-medium  self-end   ">
                                                {item.paragraph}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>


                                {/* Back Side */}
                                <div className=" front-side bg-gray-100 rounded-lg shadow-md">
                                    <div className="flex justify-center items-center w-full h-full">
                                        <Image
                                            src={item.flipimage} // Back Image
                                            alt="Back Side Image"
                                            layout="fill"
                                            objectFit="cover"
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
                    ))}
                </div>
            </div>

        </>
    );
};

export default Business;
