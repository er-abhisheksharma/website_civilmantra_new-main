'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from 'next/navigation'; // Import usePathname for current route detection
import { motion } from "framer-motion";
import { prefetchDNS } from "react-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > -5); // When scrolled more than 0px, it activates.
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (

    <motion.div
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0 }}
      className={`w-full fixed top-0 z-50 ${isScrolled ? 'bg-grays bg-opacity-100' : 'bg-white bg-opacity-100'
        } text-gray-700 shadow-lg transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-row justify-between items-center text-center max-w-[88vw] mx-auto relative z-50">
        {/* Logo */}
        <div className="mb-2 sm:mb-0">
          <a href="/">
            <Image
              src={"/images/logo/Untitled design.png"}
              alt="Image"
              height={50}
              width={100}
              className="animate-spin-slow py-[7px]"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden  px-4 py-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src="/images/logo/menu.png"
            alt="Menu icon"
            width={24} // Adjust size as needed
            height={24}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="max-lg:hidden lg:flex flex-wrap gap-x-4 gap-y-2 text-lg items-center text-gray-800 transition-all duration-300">
          {[
            { name: "Home", url: "/" },
            { name: "About us", url: "/AboutUs" },
            { name: "Sectors", url: "/Sectors" },
            { name: "Projects", url: "/Projects" },
            { name: "Innovation", url: "/Innovation" },
            { name: "Career", url: "/Career" },
            { name: "Consult-Ai", url: "https://civilmantra.consult-ai.in/" },
          ].map((link, index) =>
            link.name === "Consult-Ai" ? (
              <div key={index} className="relative inline-block animate-pop">
                {/* NEW Ribbon */}
                <Image
                  src="/images/badge.png"
                  alt="New Ribbon"
                  width={30}
                  height={20}
                  className="absolute -top-2 -left-2 z-10"
                />

                {/* Button */}
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 overflow-hidden font-medium transition-all text-gray-800 hover:text-black rounded-full group ml-2 text-xl duration-300 shadow-black hover:scale-105 animate-pop"
                >
                  {link.name}
                </a>
              </div>



            ) : (
              <Link
                key={index}
                href={link.url}
                prefetch={false}
                className={`px-2 py-1 rounded-lg text-xl relative hover:scale-110 transition-transform duration-300 ease-in-out ${pathname === link.url
                  ? 'scale-110 text-gray-800 font-bold hover:no-underline hover:text-black'
                  : 'hover:text-black'
                  }`}
              >
                {link.name}
              </Link>
            )
          )}


          <Link
            href="/ContactUs"
            prefetch={false}
            className="px-6 py-2 overflow-hidden font-medium transition-all text-white rounded-full  group ml-2 bg-primary text-xl hover:shadow-2xl duration-300 shadow-black hover:scale-105"
          >

            Contact us

          </Link>

        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.1, delay: 0 }}
            className={`lg:hidden absolute top-[66px] left-0 w-full bg-gray-200 text-gray-700 flex flex-col rounded-b-md z-10 max-sm:mt-[28px] mt-[20px]
            transform transition-transform duration-500 ease-in-out opacity-0
            ${isMenuOpen ? 'translate-y-0 opacity-100' : ''}`}
          >
            {[
              { name: "Home", url: "/" },
              { name: "About us", url: "/AboutUs" },
              { name: "Sectors", url: "/Sectors" },
              { name: "Project", url: "/Projects" },
              { name: "Innovation", url: "/Innovation" },
              { name: "Career", url: "/Career" },
              // { name: "Consult-Ai", url: "/Career" },
            ].map((link, index) => (
              <Link
                prefetch={false}
                key={index}
                href={link.url}
                className={`px-3 py-2 hover:bg-gray-800 ${pathname === link.url ? ' scale-125 text-black font-bold' : ''
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/ContactUs"
              className={`hover:bg-amber-600 text-white bg-primary px-10 py-3 rounded-b-md mt-2 ${pathname === '/ContactUs' ? 'bg-logored' : ''
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}




export default NavBar;
