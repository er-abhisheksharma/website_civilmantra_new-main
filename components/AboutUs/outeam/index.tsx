import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of key members with their details
const keymembers = [
  {
    image: "/images/AboutUs/keymembers/123.JPG",
    name: "Sumit Bhati",
    position: "COO",
  },
  {
    image: "/images/AboutUs/keymembers/Lingam1.jpg",
    name: "Bhaskar Lingam",
    position: "BDE Head",
  },
  {
    image: "/images/AboutUs/keymembers/Manindedr Kumar.JPG",
    name: "Maninder Kumar",
    position: "CFO Accounts",
  },
  // {
  //   image: "/images/AboutUs/keymembers/SumitMangotra.JPG",
  //   name: "Sumit Magotra",
  //   position: "BU Head Structure",
  // },
  {
    image: "/images/AboutUs/keymembers/Sunil K.JPG",
    name: "Sunil Kumar",
    position: "Senior VP",
  },
  {
    image: "/images/AboutUs/keymembers/Rajveer Dangi.JPG",
    name: "Rajveer Dangi",
    position: "VP",
  },
  {
    image: "/images/AboutUs/keymembers/akshay.JPG",
    name: "Akshay Kumar",
    position: "BU Head Highway",
  },
  {
    image: "/images/AboutUs/keymembers/Ankush.JPG",
    name: "Ankush Sharma",
    position: "BU Head Structure",
  },
  {
    image: "/images/AboutUs/keymembers/Shshank Gupta.JPG",
    name: "Shashank Gupta",
    position: "BU Head",
  },
];

// Custom Next Arrow component
const NextArrow = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className="absolute top-1/2 md:-right-10 -right-5 transform active:scale-95 -translate-y-1/2 p-2 rounded-full border-gray-500 border-[2px] text-gray-800 cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

// Custom Prev Arrow component
const PrevArrow = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className="absolute top-1/2 md:-left-10 -left-5 transform -translate-y-1/2 p-2 rounded-full active:scale-95 border-gray-500 border-[2px] cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const Ourteam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="unihead mb-10 text-center text-2xl md:text-3xl lg:text-4xl my-20">
          Our Key Members
        </h1>
      </motion.div>

      <div className="max-w-[85vw] mx-auto">
        {/* Director Section */}
        {/* <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <Image
                        src="/images/AboutUs/keymembers/Susheel bhardwaj.png"
                        alt="Director"
                        width={150}
                        height={150}
                        className="rounded-xl h-[220px] w-[200px] object-cover"
                    />
                    <h1 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-brown">Mr. Susheel Bhardwaj</h1>
                    <p className="text-gray-700 text-sm sm:text-lg lg:text-xl font-semibold">Managing Director</p>
                </motion.div> */}

        {/* Carousel for key members */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="my-10"
        >
          <Slider {...settings}>
            {keymembers.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl p-4 sm:p-6 transition-opacity duration-500 hover:opacity-90"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg w-[220px] max-md:w-[250px] h-[250px] object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h1 className="text-md sm:text-lg lg:text-2xl font-bold text-brown">
                    {item.name}
                  </h1>
                  <p className="text-gray-700 text-sm sm:text-lg">
                    {item.position}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default Ourteam;
