import React from "react";
import Image from "next/image";

const SocialIcon = () => {
  const socialIcons = [
    { 
      src: "/images/Footer/whatsapp.png", 
      alt: "whatsapp", 
      url: "https://wa.me/8120444777?text=" 
    },
    // Uncomment and add URLs for other icons as needed
    // { src: "/images/Footer/twitter.png", alt: "Twitter", url: "" },
    // { src: "/images/Footer/linkedin.png", alt: "LinkedIn", url: "" },
    // { src: "/images/Footer/instagram (1).png", alt: "Instagram", url: "" },
  ];

  return (
    <div className="fixed z-10 bottom-20 max-sm:right-2 right-6 transform -translate-y-1/2 flex flex-col gap-y-4">
      {socialIcons.map((icon, index) => (
        <div key={index} className="bg-white rounded-full hover:scale-110 transition-transform duration-300 hover:-translate-x-2">
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={20}
              className="p-2"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcon;
