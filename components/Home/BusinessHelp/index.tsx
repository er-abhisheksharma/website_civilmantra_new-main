import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const businessdata = [
  {
    location: "Mumbai - Nagpur",
    head: "Lane 6, expandable to 8 ",
    km: "701 Km",
    work: "Expressway ",
    duration: "Dec,2022 - Ongoing",
    client: "MSRDC",
    Department: "MSRDC",
    paragraph: "The Mumbai-Nagpur Expressway spans 701 kilometers, linking Mumbai and Nagpur in Maharashtra, India. It features remarkable tunnels, including India's widest at 17.5 meters and Maharashtra's longest, stretching 8 kilometers.",
    flipimage: "/images/Home/BusinessHelp/Screenshot 2024-11-28 133505.png",
  },
  {
    location: "Delhi-Gurugram",
    head: "6-lane elevated expressway ",
    km: "29  Km",
    work: "Expressway",
    duration: "March,2024 - Ongoing",
    client: "NHAI",
    Department: "NHAI",
    paragraph: "The Dwarka Expressway is a 29-kilometer, 8-lane highway linking Dwarka in Delhi to Gurgaon in Haryana. It features numerous flyovers, underpasses, and bridges.",
    flipimage: "/images/Home/BusinessHelp/DelhiFlyover_EDITED.jpg",
  },
  {
    location: "Delhi-Dehradun",
    head: "6-Lane ",
    km: "210 Km",
    work: "Expressway",
    duration: "January,2021 - Ongoing",
    client: "NHAI",
    Department: "NHAI",
    paragraph: "The expressway, spanning 210 kilometers, will connect Delhi, Uttar Pradesh, and Uttarakhand. Initially designed with six lanes, it can be expanded to eight lanes in the future.",
    flipimage: "/images/Home/BusinessHelp/Screenshot 2024-11-27 145324.png",
  },


];
const Business = () => {
  return (
    <>
      <div className="max-w-[88vw] mx-auto mb-10">
        {/* Header Section */}
        <div className="lg:max-w-[80vw] text-center mx-auto mb-10 px-4">
          <h1 className="unihead my-4 ">Key Projects</h1>
          <p className="unip ">
            From concept to completion, CivilMantra Infracon offers a comprehensive suite of services to turn your
            construction goals into reality, combining expert engineering with innovative solutions and a commitment to
            the highest quality standards.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            768: { slidesPerView: 2 },

            1024: { slidesPerView: 3 },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper py-10 px-4 "
        >
          {businessdata.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group  perspective-1000 mt-10 mb-8 mx-auto md:h-[250px] md:w-[250px] h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] lg:h-[290px] lg:w-[290px] xl:h-[350px] xl:w-[350px]">
                {/* Flip Container */}
                <div className="rotate-container">
                  {/* front Side */}
                  <div className="front-side  duration-1000  bg-gray-100 rounded-lg shadow-lg relative flex items-center justify-center  ">
                    <Image
                      src={item.flipimage}
                      alt="Back Side Image"
                      fill 
                      style={{ objectFit: "cover" }} 
                      className="rounded-lg"
                    />

                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.5, delay: index * 0 }}
                      viewport={{ once: true }}
                      className="relative z-10 text-left"
                    >
                      <ul className="list-none space-y-1 sm:space-y-2">
                        <li className="text-base sm:text-lg md:text-xl mb-1 font-semibold text-gray-200">
                          Sector : <span className="text-gray-100 font-normal">{item.work}</span>
                        </li>
                        <li className="text-base sm:text-lg md:text-xl mb-1 font-semibold text-gray-200">
                          Client : <span className="text-gray-100 font-normal">{item.client}</span>
                        </li>
                        <li className="text-base sm:text-lg md:text-xl mb-1 font-semibold text-gray-200">
                          Location : <span className="text-gray-100 font-normal">{item.location}</span>
                        </li>

                      </ul>
                    </motion.div>
                  </div>
                  {/* Back Side */}
                  <div className="back-side bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-8 border-brown">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col justify-between h-full"
                    >
                      <div className="">
                        <ul className="space-y-2 sm:space-y-3">
                          <li className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-semibold">
                            Department : <span className="text-primary font-normal">{item.Department}</span>
                          </li>
                          <li className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                            {item.head}
                          </li>
                          <li className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-semibold">
                            Length : <span className="text-primary font-normal">{item.km}</span>
                          </li>
                          <li className="text-base sm:text-lg md:text-xl mb-1  sm:mb-2 font-semibold">
                            Duration : <span className="text-primary font-normal">{item.duration}</span>
                          </li>
                        </ul>
                        <p className="text-gray-800 pt-3 font-medium self-end text-sm sm:text-base">
                          {item.paragraph}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom CSS for Swiper pagination */}
      <style jsx>{`
        .mySwiper .swiper-pagination {
          position: static;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default Business;
