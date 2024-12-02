"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("Admin");
        localStorage.removeItem("Blogger");
        console.log("Logout");

        
        setTimeout(() => {
            router.replace("/AdminLogin"); 
        }, 100); 
    };

    return (
        <div>
            <div className="flex mb-10 items-center gap-[5px] ">
                <button className="text-logored" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Register;
