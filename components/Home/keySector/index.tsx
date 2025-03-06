import type React from "react"
import { Building2, RouteIcon as Road, Train, Waves, Mountain, Layers } from "lucide-react"
import Link from "next/link"

interface SectorProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const Sector = ({ icon, title, description, href }: SectorProps) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={href} className="group block">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md  h-[280px] xl:w-[400px] xl:h-[280px] transition-all duration-300 hover:shadow-lg hover:scale-[1.01] border border-gray-100 cursor-pointer">
        <div className="p-3 bg-blue-50 rounded-full mb-4 transition-all duration-300 group-hover:bg-blue-100">
          <div className="text-blue-500 group-hover:text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary">{title}</h3>
        <p className="text-gray-600 text-center mb-4">{description}</p>
        <div className="text-blue-500 font-medium group-hover:text-primary flex items-center">
          Learn more
          <svg
            className="w-4 h-4 ml-1 transition-all duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default function KeySectors() {
  const sectors = [
    {
      icon: <Road size={24} />,
      title: "Roads/Engineering",
      description: "Expert design and construction of sustainable road infrastructure with focus on durability and safety.",
      href: "/Projects?sector=Roads",
    },
    {
      icon: <Mountain size={24} />,
      title: "Tunneling/Underground Engineering",
      description: "Specialized engineering solutions for complex tunnel projects in challenging environments.",
      href: "/Projects?sector=Tunneling",
    },
    {
      icon: <Train size={24} />,
      title: "Metro & Railways",
      description: "Comprehensive railway infrastructure development with cutting-edge technology and precision.",
      href: "/Projects?sector=Railways",
    },
    {
      icon: <Waves size={24} />,
      title: "Waterways",
      description: "Innovative waterway solutions balancing functionality with environmental conservation.",
      href: "/Projects?sector=Waterways",
    },
    {
      icon: <Building2 size={24} />,
      title: "Building/Architecture",
      description: "Architectural excellence and structural integrity for commercial and residential buildings.",
      href: "/Projects?sector=Building",
    },
    {
      icon: <Layers size={24} />,
      title: "Our Projects",
      description: "Delivering innovative, high-quality construction for commercial and infrastructure projects.",
      href: "/Projects?sector=All",
    },
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto max-w-[88vw] px-4">
        <div className="text-center mb-12">
          <h2 className="unihead mb-4">Our Sectors</h2>
          <p className="unip">
            Delivering excellence across diverse civil engineering domains with innovation and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 gap-8 xl:gap-y-12 justify-center items-center">
          {sectors.map((sector, index) => (
            <Sector key={index} icon={sector.icon} title={sector.title} description={sector.description} href={sector.href} />
          ))}
        </div>
      </div>
    </section>
  )
}
