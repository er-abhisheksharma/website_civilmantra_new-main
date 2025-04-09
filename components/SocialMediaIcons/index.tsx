import React from "react";
import Image from "next/image";

const SocialIcon = () => {
  const socialIcons = [
    {
      src: "/images/Consultai.jpeg",
      alt: "Consult-Ai",
      label: "Consult-AI",
      url: "https://civilmantra.consult-ai.in/"
    },
    {
      src: "/images/Footer/whatsapp.png",
      alt: "whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/8120444777?text="
    },
    // Add more icons as needed
  ];

  return (
    <div className="fixed z-10 bottom-20 max-sm:right-2 right-6 transform -translate-y-1/2 flex flex-col gap-y-4">
      {socialIcons.map((icon, index) => (
        <div
          key={index}
          className="group relative flex items-center bg-white rounded-full hover:scale-110 transition-transform duration-300 hover:-translate-x-2"
        >
          <a href={icon.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={20}
              className={index === 0 ? "py-3 px-2" : "p-2"}
            />
            {/* Tooltip Text */}
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-white text-black px-2 py-1 rounded shadow-lg whitespace-nowrap">
              {icon.label}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcon;
