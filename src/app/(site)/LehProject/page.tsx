
export default function LehProject() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/images/AboutUs/journey/bgi.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                {/* Dark overlay covering the entire div */}
                <div className=" max-sm:hidden absolute top-[1px] left-0 w-full h-full bg-black opacity-50"></div>

                <h1 className="text-white text-6xl font-bold z-10">Leh Project</h1>
            </div>
            <div className="max-w-[88vw] mx-auto my-10">
                <h1 className=" text-3xl text-left text-gray-800"><span className="text-4xl font-bold text-black ">Project:</span> Highway </h1>
                <h3 className="my-4 text-3xl text-left  text-gray-800 "><span className="text-4xl font-bold text-black">Location:</span> Leh </h3>
                <p className=" text-left text-3xl text-gray-800"><span className="text-4xl font-bold text-black ">Description:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
        </>
    );
};
