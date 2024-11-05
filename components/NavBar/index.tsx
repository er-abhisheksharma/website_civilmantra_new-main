'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from 'next/navigation'; // Import usePathname for current route detection

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
    <div className={`w-full fixed top-0 z-50 ${isScrolled ? 'bg-white text-gray-700 shadow-lg' : 'bg-transparent text-white'} transition-all duration-300 ease-in-out`}>
      <div className="absolute top-0 left-0 w-full h-full bg-grays transition-opacity duration-300 "></div>

      <div className="flex flex-row justify-between items-center text-center max-w-[92vw] mx-auto relative z-50">
        {/* Logo */}
        <div className="mb-2 sm:mb-0">
          <Image
            src={"/images/logo/logo2.png"}
            alt="Image"
            height={50}
            width={90}
            className="animate-spin-slow py-[2px]"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-white px-4 py-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Desktop Navigation */}
        <div className={`max-lg:hidden lg:flex flex-wrap gap-x-4 gap-y-2 text-lg items-center ${isScrolled ? 'text-gray-800' : 'text-gray-800'} transition-all duration-300`}>
          {[
            { name: "Home", url: "/" },
            { name: "About us", url: "/AboutUs" },
            { name: "Sectors", url: "/Sectors" },
            { name: "Project", url: "/Projects" },
            { name: "Innovation", url: "/Innovation" },
            { name: "Career", url: "/Career" },
          ].map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={` px-2 py-1 rounded-lg relative hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out
                ${pathname === link.url ? ' scale-125  text-gray-800 font-bold hover:no-underline hover:bg-white hover:text-black' : 'hover:bg-white hover:text-black'}`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/ContactUs"
            className={`ml-2 px-6 py-2 border-gray-800 hover:border-white border-[2px] rounded-lg text-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out
              ${pathname === '/ContactUs' ? 'bg-primary border-none text-white ' : ''}`}
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-grays text-gray-700 flex flex-col rounded-md z-10">
            {[
              { name: "Home", url: "/" },
              { name: "About us", url: "/AboutUs" },
              { name: "Sectors", url: "/Sectors" },
              { name: "Project", url: "/Projects" },
              { name: "Innovation", url: "/Innovation" },
              { name: "Career", url: "/Career" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={`px-3 py-2 hover:bg-gray-800 ${pathname === link.url ? 'bg-gray-800 text-white' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/ContactUs"
              className={`hover:bg-amber-600 text-white bg-primary px-10 py-3 rounded-md mt-2 ${pathname === '/ContactUs' ? 'bg-amber-600' : ''}`}
              onClick={closeMenu}
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
