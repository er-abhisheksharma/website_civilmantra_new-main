import Image from "next/image";

const CeoSpeaks = () => {
  return (
    <section className="flex mt-20 flex-col md:flex-row  md:items-start max-w-[88vw] mx-auto">
      {/* Image Section - 50% width */}
      <div className="w-full md:w-[40%] flex justify-center items-center">
        <div className="  bg-white rounded-lg overflow-hidden flex items-center justify-center ">
          <Image
            src="/images/AboutUs/keymembers/1.JPG"
            alt="CEO"
            width={256}
            height={256}
            className="w-[360px] h-[370px]  "
          />
        </div>
      </div>

      {/* Text Content - 50% width */}
      <div className="w-full md:w-[60%] text-justify md:pr-20 max-md:mt-8">
        <h2 className="text-4xl text-logored font-bold">MD Speaks</h2>
        <h3 className="text-2xl text-gray-800 font-semibold">
          Mr. Susheel Bhardwaj
        </h3>
        <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed">
          At{" "}
          <span className="text-primary font-bold text-lg md:text-xl lg:text-2xl">
            Civil
            <span className="text-logored font-bold text-lg md:text-xl lg:text-2xl">
              Mantra
            </span>
          </span>
          , we take pride in shaping the future of infrastructure. Our journey
          has been defined by engineering excellence, innovation, and a
          commitment to delivering world-class projects in roads, tunnels,
          railways, waterways, and buildings.
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed">
          With a dedicated team of experts and cutting-edge technology, we
          continue to transform landscapes and connect communities. As we expand
          into new frontiers like ropeways, urban infrastructure, aviation, and
          high-speed rail, our vision remains clear—to build a sustainable and
          resilient tomorrow.
        </p>
      </div>
    </section>
  );
};

export default CeoSpeaks;
