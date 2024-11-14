
import Image from "next/image";

const HeroCon = () => {
    return (
        <>
            <div className='relative flex flex-col justify-center items-center mb-0 max-sm:px-4 text-white '>
                {/* Background Video */}
                <Image
                    src="/images/contact/contact-us-2993000_1280.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full -z-10"
                />
                <div className=" max-sm:hidden absolute top-[1px] left-0 w-full h-full bg-black opacity-60"></div>

                <div className='max-sm:w-full max-[1024px]:h-[35vh] max-[1024px]:w-[90%] max-sm:h-[40vh] w-[60%] h-[65vh] flex flex-col justify-center items-center max-sm:justify-start text-center gap-4 overflow-hidden z-10'>
                    <p className='max-sm:text-3xl max-[1024px]:text-5xl max-sm:pt-0 pt-20  text-6xl font-semibold max-[1024px]:pt-0'>
                        Reach out to us anytime.
                    </p>

                </div>
            </div>
        </>
    );
};

export default HeroCon;