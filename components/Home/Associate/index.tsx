import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { image: "/images/Home/Associates/Adani_2012.png" },
  { image: "/images/Home/Associates/ARCONS.png" },
  { image: "/images/Home/Associates/Border_Roads_Organisation.png" },
  { image: "/images/Home/Associates/CDS.png" },
  { image: "/images/Home/Associates/GHV.png" },
  { image: "/images/Home/Associates/GMDA.png" },
  { image: "/images/Home/Associates/MCG.png" },
  { image: "/images/Home/Associates/MPRDC.jpg" },
  { image: "/images/Home/Associates/NHAI-Black.png" },
  { image: "/images/Home/Associates/Sadbhav_Engineering.png" },
];

const Associate = () => {
  const [scrollSpeed, setScrollSpeed] = useState(20); // Default speed

  useEffect(() => {
    // Update scroll speed based on screen size
    const updateScrollSpeed = () => {
      if (window.innerWidth <= 768) { // max-md breakpoint for small screens
        setScrollSpeed(15); // Increase speed for smaller screens
      } else if (window.innerWidth <= 1024) { // max-lg breakpoint
        setScrollSpeed(18); 
      } else {
        setScrollSpeed(20); // Normal speed for larger screens
      }
    };

    updateScrollSpeed(); // Check on initial load
    window.addEventListener("resize", updateScrollSpeed); // Check on resize

    return () => window.removeEventListener("resize", updateScrollSpeed);
  }, []);

  return (
    <div className="overflow-hidden pb-8 md:pb-12">
      <motion.div
        className="flex space-x-4 md:space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: scrollSpeed,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Create an infinite loop effect by repeating the image array */}
        {[...images, ...images].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-3xl my-8 md:my-16 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center"
          >
            <Image
              src={item.image}
              alt="Associate logo"
              width={200}
              height={200}
              className="object-contain w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Associate;
