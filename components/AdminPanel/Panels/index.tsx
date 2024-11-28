"use client";

import Link from "next/link";
import Image from "next/image";
import arrowup from "../../../public/arrowup.png";

const Panels = () => {
    // Retrieve both users from localStorage with null checks
    const adminUser = typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("Admin") || "null")
        : null;
    const blogWriterUser = typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("Blogger") || "null")
        : null;

    // Determine the current user
    const currentUser = adminUser || blogWriterUser;

    // Define the panels array without role-based filtering
    const panels = [
        {
            panel: "Testimonial Panel",
            url: "/AdminTestimonial",
        },
        {
            panel: "Clients Panel",
            url: "/",
        },
        {
            panel: "Achievements Panel",
            url: "/",
        },
        {
            panel: "Members Panel",
            url: "/",
        },
        {
            panel: "Galler Panel",
            url: "/",
        },
        {
            panel: "Sectors Panel",
            url: "/",
        },
        {
            panel: "Highlighted Projects Panel",
            url: "/",
        },
        {
            panel: "Design Highlighted Projects Panel",
            url: "/",
        },
        {
            panel: "Completed Projects Panel",
            url: "/",
        },
        {
            panel: "Completed Projects Panel",
            url: "/",
        },
        {
            panel: "Ongoing Projects Panel",
            url: "/",
        },
        {
            panel: "Innovation Panel",
            url: "/",
        },
        
    ];

    return (
        <div className=" flex flex-wrap max-w-[88vw] mx-auto items-center justify-center gap-10 py-10">
            {panels.map((items, i) => (
                <Link
                    key={i}
                    href={items.url}
                    className="group p-6 px-10 rounded-lg border-[1px] border-[#2f2f2f] hover:bg-[#990000] transition-all hover:scale-110 hover:translate-x-2 hover:-translate-y-2 duration-300"
                >
                    <div className="flex items-start justify-center">
                        <p className="text-lg font-medium text-gray-700 group-hover:text-white px-1">
                            {items.panel}
                        </p>
                        <Image
                            src={arrowup}
                            alt="arrow"
                            className="w-4 transition-all group-hover:invert group-hover:scale-150 rotate-[135deg] -mt-2"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Panels;
