'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { url } from "inspector";

// Social media icons and links
const Socialmedia = [
    { image: "/images/Footer/facebook.png", link: "https://www.facebook.com/CivilMantra/" },
    // { image: "/images/Footer/instagram (1).png", link: "https://www.instagram.com" },
    // { image: "/images/Footer/twitter.png", link: "https://www.twitter.com" },
    { image: "/images/Footer/linkedin.png", link: "https://www.linkedin.com/company/civilmantra-infrastructure-consultant/" },
];

// Quick links and services
const Quicklinks = [
    { page: "Home", url: "/" },
    { page: "About us", url: "/AboutUs" },
    { page: "Sectors", url: "/Sectors" },
    { page: "Projects", url: "/Projects" },
    { page: "Innovation", url: "/Innovation" },
    { page: "Career", url: "/Career" },
    { page: "Contact us", url: "/ContactUs" },
];

const Services = [
    { name: "Expressway",url: "/Sectors#roadsbridges" },
    { name: "Tunnels",url: "/Sectors#tunnels" },
    { name: "Urban Infrastructure",url: "/Sectors#Urban" },
    { name: "Railway",url: "/Sectors#Railway" },
    { name: "Bridges",url: "/Sectors#roadsbridges" },
    { name: "Metro",url: "/Sectors#roadsbridges" },
    { name: "Waterways",url: "/Sectors#roadsbridges" },
];

const Footer = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleLogoClick = () => {
        setClickCount((prevCount: number) => prevCount + 1);
        if (clickCount + 1 === 1) {
            window.location.href = "/";
        }
    };

    return (
        <>
            <div className="bg-grays ">
                <div className="max-w-[88vw] mx-auto py-7   flex flex-col max-lg:grid max-lg:grid-cols-2 gap-x-5 max-lg:gap-x-8 lg:flex-row lg:justify-between gap-y-8 lg:gap-y-0 ">
                    {/* Logo and Address */}
                    <div className="lg:w-1/4 ">
                        <Image
                            src={"/images/logo/Untitled design.png"}
                            alt="Logo"
                            height={100}
                            width={100}
                            className="mb-4"
                            onClick={handleLogoClick}
                        />
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0 }}
                            viewport={{ once: true }}>
                            <h1 className=" text-sm sm:text-base md:text-lg lg:text-lg font-bold text-gray-700 hover:text-primary cursor-pointer">
                                <a
                                    href="https://maps.app.goo.gl/qmEY2k2LH61BnPwq5?g_st=com.google.maps.preview.copy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    3rd Floor, Tower 3A, Dlf Corporate Greens, Sector 74A, Gurugram- 122004, India.
                                </a>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className=" ">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary ">Quick Links</h1>
                        <ul className="grid grid-cols-2 gap-4 mt-2 gap-x-12 text-sm sm:text-base md:text-lg lg:text-base text-gray-800 max-lg:gap-x-6">
                            {Quicklinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    className=""
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 1, delay: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Link className="cursor-pointer hover:text-primary  " href={link.url}>{link.page}</Link>
                                </motion.li>
                            ))}
                        </ul>

                    </div>


                    {/* Services */}
                    <div className="">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary ">Services</h1>
                        <ul className="grid grid-cols-2 gap-y-4 gap-x-12 mt-2 text-sm sm:text-base md:text-lg lg:text-base text-gray-800 max-lg:gap-x-6">
                            {Services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    className=" "
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 1, delay: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Link className="cursor-pointer hover:text-primary " href={service.url}>{service.name}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact Info and Social Media */}
                    <div className="">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl text-primary">Contact Us</h1>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0 }}
                            viewport={{ once: true }}>
                            <ul className="mt-2 text-sm sm:text-base md:text-lg lg:text-base text-gray-800">
                                <div className="flex gap-x-2 items-center max-w-full group">
                                    <div className="group">
                                        <Image
                                            src={"/images/Footer/mail.png"}
                                            alt="Email"
                                            width={30}
                                            height={40}
                                            className="max-md:w-7 max-md:h-7 cursor-pointer transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-125 group-hover:filter  "
                                        />
                                    </div>

                                    <li className="text-gray-800 overflow-hidden group-hover:text-primary text-lg">
                                        <a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=services@civilmantra.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="max-w-full"
                                        >
                                            services@<br className="md:hidden" />civilmantra.com
                                        </a>
                                    </li>

                                </div>

                                <div className="flex gap-x-2 items-center mt-4 group">
                                    <Image
                                        src={"/images/Footer/telephone.png"}
                                        alt="Phone"
                                        width={30}
                                        height={20}
                                        className="max-md:w-7 max-md:h-7 cursor-pointer group-hover:-translate-y-1 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                                    />
                                    <li className="hover:text-gray-100 text-gray-800 group-hover:text-primary text-lg">
                                        <a href="tel:+918120444777">+91 81204 - 44777</a>
                                    </li>
                                </div>
                            </ul>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0 }}
                            viewport={{ once: true }}>
                            <div className="flex gap-x-5 max-sm:gap-x-0 max-sm:grid grid-cols-2 md:mt-5 ">
                                {Socialmedia.map((social, index) => (
                                    <div key={index}>
                                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={social.image}
                                                alt="Social Media"
                                                height={35}
                                                width={35}
                                                className="
                                                shrink-0
                                                cursor-pointer
                                                 p-1
                                                sm:p-[2px]
                                                hover:-translate-y-1 hover:scale-125
                                                transition-transform duration-300 ease-in-out
                                            "
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t-2 border-gray-500 py-4">
                    <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 overflow-wrap break-word">
                        © {new Date().getFullYear()} All Rights Reserved. Website designed by AiMantra
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
