import Image from 'next/image';

const CeoSpeaks = () => {
  return (
    <section className="flex mt-20 flex-col md:flex-row  md:items-start max-w-[88vw] mx-auto">
  {/* Image Section - 50% width */}
  <div className="w-full md:w-[40%] flex justify-center items-center">
    <div className="  bg-white rounded-lg overflow-hidden flex items-center justify-center ">
      <Image 
        src="/images/AboutUs/keymembers/Susheel bhardwaj.png" 
        alt="CEO"
        width={256}
        height={256}
        className="w-[360px] h-[370px]  "
      />
    </div>
  </div>

  {/* Text Content - 50% width */}
  <div className="w-full md:w-[60%] text-justify md:pr-20 max-md:mt-8">
    <h2 className="text-4xl font-bold">MD Speaks</h2>
    <h3 className="text-2xl text-gray-800 font-semibold">MD NAME, Shusheel Bhardwaj</h3>
    <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Euismod eu ornare non hendrerit sed sed. 
      Purus at elit pellentesque sem nunc molestie volutpat eu mauris. Pulvinar fames at ut amet quam eget. 
      Curabitur accumsan eu feugiat fusce lectus eget condimentum. Nisl vestibulum in quam habitasse praesent suspendisse sapien.
    </p>
    <p className="mt-4 text-base md:text-lg lg:text-xl leading-relaxed">
      Donec vitae ac vel lorem accumsan vel velit ipsum aliquam. Diam vel euismod et aenean duis laoreet dictumst turpis senectus.
    </p>
  </div>
</section>

  );
};

export default CeoSpeaks;
