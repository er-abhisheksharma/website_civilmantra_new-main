'use client'

const Sectors = [
    {
        Sector: "Expressway",
        bgimage: "/images/Sectors/Herosectors/1730806663019.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Expressway",
    },
    {
        Sector: "Tunnels",
        bgimage: "/images/Sectors/Tunnels/1720754084838.jpg",
        url: "#tunnels",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
    },
    {
        Sector: "Transport Planning",
        bgimage: "/images/Sectors/Herosectors/TRUCKS.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Transport",
    },
    {
        Sector: "Urban Infrastructure",
        bgimage: "/images/Sectors/Herosectors/DelhiFlyover_EDITED.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Urban",
    },
    {
        Sector: "Railway",
        bgimage: "/images/Sectors/Herosectors/train.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Railway",
    },
    {
        Sector: "Bridges",
        bgimage: "/images/Sectors/Herosectors/Bridges.jpg",
        discription: "lorem lipsum road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#roadsbridges",
    },
   
    {
        Sector: "Metro",
        bgimage: "/images/Sectors/Herosectors/metrotunnel-2.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Metro",
    },
    {
        Sector: "Waterways",
        bgimage: "/images/Sectors/Herosectors/waterway.jpg",
        discription: "lorem lipsun road over bridge stock photos, vectors, and illustrations are available royalty-free for download",
        url: "#Waterways",
    },
]

import { motion } from "framer-motion"



const Herosectors = () => {
    const handleScroll = (url: string) => {
        const section = document.querySelector(url);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <>
            <div className="relative w-full h-[95vh] ">
                {/* Background video */}
                <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted>
                    <source src="/videos/Home/Bgvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>

                {/* Centered Heading Content */}
                <div className="flex justify-center items-center h-full relative z-10">
                    <div className="mx-auto text-white  px-4 mt-10">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-4 max-w-[88vw] gap-x-2 mx-auto gap-y-2 mt-11">
                                {Sectors.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        onClick={() => handleScroll(item.url)} // Handle scroll on click
                                        variants={{
                                            hidden: { opacity: 0, y: -20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="h-[290px] w-80 flex flex-col relative overflow-hidden group cursor-pointer rounded-lg" // Use flex-col to arrange items vertically
                                    >
                                        {/* Background Image */}
                                        <div
                                            className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-cover bg-center opacity-100"
                                            style={{ backgroundImage: `url(${item.bgimage})` }}
                                        />

                                        {/* Dark Overlay */}
                                        <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out opacity-35" />

                                        {/* Content Container */}
                                        <div className="relative z-10 flex flex-col justify-between h-full p-5">
                                            {/* Title */}
                                            <h2 className="cursor-pointer transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 text-[22px] font-semibold">
                                                {item.Sector}
                                            </h2>

                                            {/* Description */}
                                            <p
                                                className="opacity-0 transition-transform text-gray-200 duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-1 group-hover:scale-110 text-sm font-normal">
                                                {item.discription}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Herosectors;