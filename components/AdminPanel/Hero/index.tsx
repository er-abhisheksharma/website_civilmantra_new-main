import React from "react";

const HeroAdmin = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-red-600 font-semibold text-xl mb-5">Admin's Access Only</p>
                <h1 className="text-5xl black font-normal">
                    Welcome to <span className="text-logored font-semibold">Civil</span>
                    <span className="text-primary font-semibold">Mantra</span> Admin
                    Panel
                </h1>
            </div>
        </div>
    );
};

export default HeroAdmin;