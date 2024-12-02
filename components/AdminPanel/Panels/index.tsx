"use client";

import Link from "next/link";
import Image from "next/image";
import arrowup from "../../../public/arrowup.png";
import { useState } from "react";
import Dprpanel from "../DprProjects";

const Panels = () => {
  // Retrieve both users from localStorage with null checks
  const adminUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("Admin") || "null")
      : null;
  const blogWriterUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("Blogger") || "null")
      : null;

  // Determine the current user
  const currentUser = adminUser || blogWriterUser;

  // State to manage the open/close state of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Define the panels array
  const panels = [
    { panel: "Achievements Panel", url: "/" },
    { panel: "Clients Panel", url: "/" },
    { panel: "Innovation Panel", url: "/" },
    { panel: "Members Panel", url: "/" },
    { panel: "Sectors Panel", url: "/" },
    { panel: "Testimonial Panel", url: "/AdminTestimonial" },
    {
      panel: "Projects Panel",
      url: "#",
      isDropdown: true, 
      subPanels: [
        { panel: "Key Projects Panel", url: "/" },
        { panel: "Highlighted Projects Panel", url: "/" },
        { panel: "Design Highlighted Projects Panel", url: "/" },
        { panel: "DPR Projects Panel", url: "/DprProjects" },
        { panel: "Completed Projects Panel", url: "/" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap max-w-[88vw] mx-auto items-center justify-center gap-10 py-10">
      {panels.map((items, i) => (
        <div key={i} className="relative flex">
          {!items.isDropdown ? (
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
          ) : (
            <>
              <button
                onClick={toggleDropdown}
                className="group p-6 px-10 w-full rounded-lg border-[1px] border-[#2f2f2f] hover:bg-[#990000] transition-all hover:scale-110 hover:translate-x-2 hover:-translate-y-2 duration-300"
              >
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-700 group-hover:text-white px-1">
                    {items.panel}
                  </p>
                  <Image
                    src={arrowup}
                    alt="arrow"
                    className={`w-4 transition-all group-hover:invert ${
                      isDropdownOpen ? "rotate-180" : "rotate-[135deg]"
                    } -mt-2`}
                  />
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 ml-52 h-48 overflow-y-scroll w-full bg-white border border-[#2f2f2f] rounded-lg shadow-lg">
                  {items.subPanels.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.url}
                      className="block px-6 py-4 text-gray-700 hover:bg-[#990000] hover:text-white"
                    >
                      {subItem.panel}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Panels;
