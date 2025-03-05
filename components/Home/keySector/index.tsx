import type React from "react"
import { Building2, RouteIcon as Road, Train, Waves, Mountain } from "lucide-react"
import Link from "next/link"

interface SectorProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const   Sector = ({ icon, title, description, href }: SectorProps) => {
  return (
    <div className="justify-center items-center flex">
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-[400px] h-[280px] transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="p-3 bg-blue-50 rounded-full mb-4  ">
        <div className="text-blue-600">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <Link href={href} className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
    </div>
  )
}

export default function KeySectors() {
  const sectors = [
    {
      icon: <Road size={24} />,
      title: "Roads & Highways",
      description:
        "Expert design and construction of sustainable road infrastructure with focus on durability and safety.",
      href: "/Sectors",
    },
    {
      icon: <Mountain size={24} />,
      title: "Tunnels",
      description: "Specialized engineering solutions for complex tunnel projects in challenging environments.",
      href: "/Sectors",
    },
    {
      icon: <Train size={24} />,
      title: "Railways",
      description: "Comprehensive railway infrastructure development with cutting-edge technology and precision.",
      href: "/Sectors",
    },
    {
      icon: <Waves size={24} />,
      title: "Waterways",
      description: "Innovative waterway solutions balancing functionality with environmental conservation.",
      href: "/Sectors",
    },
    {
      icon: <Building2 size={24} />,
      title: "Buildings",
      description: "Architectural excellence and structural integrity for commercial and residential buildings.",
      href: "/Sectors",
    },
  ]

  return (
    <section className="py-10 ">
      <div className="container mx-auto max-w-[88vw] px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Sectors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across diverse civil engineering domains with innovation and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
  {sectors.map((sector, index) => (
    <Sector
      key={index}
      icon={sector.icon}
      title={sector.title}
      description={sector.description}
      href={sector.href}
    />
    
  ))}

        </div>
      </div>
    </section>
  )
}
