'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Home/Hero";
import Aboutus from "../../components/Home/Abooutushome";
import Business from "../../components/Home/BusinessHelp";
import Projects from "../../components/Home/Projects";
import Associate from "../../components/Home/Associate";
import Clients from "../../components/Home/HappyClients";
import BusinessGrowthStages from "../../components/Home/Growth";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import KeySectors from "../../components/Home/keySector";



// Typing effect hook


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu


  return (
    <>
      
      <Hero />
      {/* <BusinessGrowthStages/> */}
      <Aboutus/>
      <Projects/>
      <Business/>
      <KeySectors/>
      <WhyChooseUs/>
      <Associate/>
      {/* <Clients/> */}
      
      
      


    </>
  );
}
