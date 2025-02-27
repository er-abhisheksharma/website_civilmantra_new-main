import Link from "next/link";
import { motion } from "framer-motion";

const Presence = [
    { text: "HIGHWAYS & EXPRESSWAYS", url: "/Sectors#roadsbridges" },
    { text: "BRIDGES & FLYOVER", url: "/Sectors#bridges" },
    { text: "TUNNELS", url: "/Sectors#tunnels" },
    { text: "URBAN INFRASTRUCTURE", url: "/Sectors#Urban" },
    { text: "METRO & RAILWAYS", url: "/Sectors#metro" },
    { text: "WATERWAYS", url: "/Sectors#water" },
    
];

const Projects = [
        { place: "Arunachal Pradesh" },
        { place: "Assam" },
        { place: "Bihar" },
        { place: "Chhattisgarh" },
        { place: "Delhi" },
        { place: "Gujarat" },
        { place: "Haryana" },
        { place: "Himachal Pradesh" },
        { place: "Jharkhand" },
        { place: "Karnataka" },
        { place: "Madhya Pradesh" },
        { place: "Maharashtra" },
        { place: "Mizoram" },
        { place: "Nagaland" },
        { place: "Orissa" },
        { place: "Punjab" },
        { place: "Rajasthan" },
        { place: "Tamilnadu" },
        { place: "Telangana" },
        { place: "Uttar Pradesh" },
        { place: "Uttarakhand" },
        { place: "West Bengal" }
     
      
];

const OurPresence = () => {
    return (
        <div className="max-w-[88vw] mx-auto mb-20">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}>
                <h1 className="unihead my-10 text-center text-2xl md:text-3xl lg:text-4xl">Our Presence</h1>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Presence Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-1/2">
                    {Presence.map((item, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index} className="px-2">
                            <Link
                                className="relative border-[3px] rounded-md border-gray-600 p-5 h-28 text-center flex items-center justify-center overflow-hidden group shadow-2xl"
                                href={item.url} // Link to the specific section on the target page
                            >
                                <span className="absolute inset-0 transition-transform duration-500 bg-primary transform -translate-x-[-280px] max-lg:-translate-x-full xl:-translate-x-[-490px] group-hover:translate-x-0 translate-y-10 rounded-sm hover:rounded-none group-hover:translate-y-0"></span>
                                <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300 text-lg md:text-xl">
                                    {item.text}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Locations Section */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}>
                        {/* <h1 className="text-xl md:text-2xl font-bold">Our Locations</h1> */}
                        <h2 className="text-lg md:text-xl font-bold mt-2 py-2">Offices</h2>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="px-4">
                        <ul className="list-disc marker:text-lg marker:text-primary text-justify space-y-2">
                            <li><span className="text-primary">Registered Office</span> - 277 VPO, Hiran Kudna West Delhi 110041</li>
                            <li><span className="text-primary">Corporate Office</span> - 3rd Floor, Tower 3A, DLF CORPORATE GREENS, Sector 74A, Gurugram, Haryana 122004</li>
                            <li><span className="text-primary">Regional Office</span> - Vasantam Hotel, Deotsidh road, Barsar, Himachal Pradesh - 174305</li>
                            <li><span className="text-primary">Site Office</span> - House No 11, Village Saini Majra, Tehsil and District S.A.S Nagar, Mohali</li>
                            <li><span className="text-primary">Site Office</span> - 071, Opposite Energy Park , MOWB - 1, Papum Pare, Itanagar 791111 Arunachal Pardesh</li>
                            <li><span className="text-primary">Site Office</span> - 1st & 2nd Floor, Talwal(Tandwal), Near J&K Bank, Rajouri Tehsil & District Rajouri U.T of J&K</li>
                            <li><span className="text-primary">Site Office</span> - Kanispora, Tehsil and District Baramulla, J&K</li>
                            <li><span className="text-primary">Site Office</span> - Singpora Pattan, District Baramulla, J&K</li>
                        </ul>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-bold mt-2 py-2">Project Locations</motion.h2>

                    <div className="px-4">
                        <ul className="flex lg:justify-between flex-wrap gap-2 md:gap-3 marker:text-lg marker:text-primary">
                            {Projects.map((item, index) => (
                                <motion.li
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    key={index}
                                    className="border-[2px] px-2 md:px-3 py-1 border-primary rounded-lg hover:bg-primary hover:text-white cursor-pointer shadow-xl text-sm md:text-base">
                                    {item.place}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPresence;
