import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";

const serviceItems = [
  { name: "Expressway", image: "/images/Home/herorail/motorway.png" },
  { name: "Tunnels", image: "/images/Home/herorail/tunnel.png" },
  {
    name: "Urban Infrastructure",
    image: "/images/Home/herorail/buildings.png",
  },
  { name: "Railway", image: "/images/Home/herorail/train-station.png" },
  { name: "Bridges", image: "/images/Home/herorail/vincent-thomas-bridge.png" },
  { name: "Metro", image: "/images/Home/herorail/metro.png" },
  { name: "Waterways", image: "/images/Home/herorail/waterfall_6735800.png" },
];

// Custom Hook for Typing Effect
const useTypingEffect = (
  fullText: string,
  speed: number = 20,
  delay: number = 400
) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    if (!fullText) return;

    // Reset displayedText whenever fullText changes
    setDisplayedText("");
    let index = 0;

    const startTyping = () => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          // Check to ensure index is in bounds
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingInterval); // Stop the interval when typing is done
        }
      }, speed);
    };

    // Start typing after the specified delay
    const delayTimeout = setTimeout(startTyping, delay);

    // Cleanup function to prevent memory leaks
    return () => {
      clearTimeout(delayTimeout);
      clearInterval(delayTimeout);
    };
  }, [fullText, speed, delay]);

  return displayedText;
};

const Hero = () => {
  const backgroundVideos = [
    "https://cipl-aimantra.s3.ap-south-1.amazonaws.com/website/1.mp4/",
    "https://cipl-aimantra.s3.ap-south-1.amazonaws.com/website/2+(1).mp4/",
    "https://cipl-aimantra.s3.ap-south-1.amazonaws.com/website/3.mp4/",
    "https://cipl-aimantra.s3.ap-south-1.amazonaws.com/website/4.mp4/",
  ];

  // State to track current video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  // Text for your paragraph
  const Text =
    "At CivilMantra, we understand the importance of turning your vision into reality. We are a dedicated team of engineers and consultants with a passion for excellence in project consultancy, construction management, and structural design. We partner with our clients to deliver exceptional results, combining innovative solutions with the highest quality standards. Leverage our expertise to bring your next project to life.";

  // Service items for the sliding section
  const serviceItems = [
    {
      name: "Urban Infrastructure",
      image: "/images/Home/herorail/buildings.png",
    },
    { name: "Metro", image: "/images/Home/herorail/metro.png" },
    { name: "Expressway", image: "/images/Home/herorail/motorway.png" },
    { name: "Railway", image: "/images/Home/herorail/train-station.png" },
    { name: "Tunnels", image: "/images/Home/herorail/tunnel.png" },
    {
      name: "Bridges",
      image: "/images/Home/herorail/vincent-thomas-bridge.png",
    },
    { name: "Waterways", image: "/images/Home/herorail/waterfall_6735800.png" },
    // Add more service items as needed
  ];

  // Handle video end event
  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  // Effect to change video when current one ends
  useEffect(() => {
    if (isVideoEnded) {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % backgroundVideos.length
      );
      setIsVideoEnded(false);
    }
  }, [isVideoEnded, backgroundVideos.length]);
  // Full text for the paragraph

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          CivilMantra | Excellence in Project Consultancy and Structural Design
        </title>
        <meta
          name="description"
          content="At CivilMantra, we are experts in project consultancy, construction management, and structural design. Our experienced team ensures your vision becomes reality with innovative solutions and exceptional quality."
        />
        <meta
          name="keywords"
          content="Civil Engineering, Project Consultancy, Construction Management, Structural Design, CivilMantra"
        />
        <meta name="author" content="CivilMantra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.civilmantra.com/" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="CivilMantra | Excellence in Project Consultancy and Structural Design"
        />
        <meta
          property="og:description"
          content="At CivilMantra, we provide world-class services in project consultancy, construction management, and structural design to deliver your vision with excellence."
        />
        <meta property="og:url" content="https://www.civilmantra.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/civilmantra-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.civilmantra.com/" />
        <meta
          property="twitter:title"
          content="CivilMantra | Excellence in Project Consultancy and Structural Design"
        />
        <meta
          property="twitter:description"
          content="Leverage the expertise of CivilMantra in project consultancy and structural design for outstanding results in construction management."
        />
        <meta
          property="twitter:image"
          content="/images/civilmantra-twitter.jpg"
        />
      </Head>

      <div className="mb-10">
        <div className="relative w-full h-[88vh] max-sm:h-[80vh]">
          {/* Background video */}
          <video
            key={currentVideoIndex} // Key ensures React creates a new video element
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
            autoPlay
            muted
            playsInline
            webkit-playsinline
            onEnded={handleVideoEnd}
          >
            <source
              src={backgroundVideos[currentVideoIndex]}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

          {/* Centered Heading Content */}
          <div className="flex items-center h-full relative z-10 max-w-[88vw] mx-auto">
            <div className="text-white max-w-[70vw] max-sm:max-w-[80vw] mt-[62px]">
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
                <h2 className="font-semibold leading-7 lg:text-xl md:text-lg sm:text-base">
                  We make a Difference
                </h2>
                <h1 className="mt-3 lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-4xl">
                  <span className="text-secondary">We Don't Just Build</span>{" "}
                  <span className="text-red-600 text-6xl">Structures</span>
                </h1>
                <h2 className="mt-1 lg:text-5xl md:text-4xl sm:text-4xl max-sm:text-4xl text-secondary">
                  We Build a Better{" "}
                  <span className="text-red-600 text-6xl">Tomorrow</span>
                </h2>
              </motion.div>

              {/* Typing animation for paragraph */}
              <motion.p
                className="mt-5 font-normal leading-7 lg:text-xl md:text-lg sm:text-base max-sm:hidden text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {Text}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Sliding Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0 }}
          viewport={{ once: true }}
          className="bg-primary overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <ul className="flex gap-x-52 py-2 cursor-default whitespace-nowrap animate-slide text-white text-xl">
              {/* Original List */}
              {serviceItems.map((item, index) => (
                <li key={index} className="flex items-center gap-x-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 invert"
                  />
                  <span className="mt-2">{item.name}</span>
                </li>
              ))}
              {/* Duplicate List */}
              {serviceItems.map((item, index) => (
                <li
                  key={`duplicate-${index}`}
                  className="flex items-center gap-x-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 invert"
                  />
                  <span className="mt-2">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .animate-slide {
              animation: slide 30s linear infinite; /* Default for large screens */
              animation-timing-function: linear;
            }

            @media (max-width: 768px) {
              .animate-slide {
                animation: slide 5s linear infinite; /* Faster animation for small screens */
              }
            }
          `}</style>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
