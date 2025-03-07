import type React from "react"
import { ArrowUpRight, Plane, Building2, Mountain, Train } from "lucide-react"

interface DiversificationSectorProps {
  icon: React.ReactNode
  title: string
  description: string
}

const DiversificationSector = ({ icon, title, description }: DiversificationSectorProps) => {
  return (
    <div className="group relative flex flex-col gap-2 rounded-lg border border-border hover:scale-[1.01] bg-card p-6 transition-all hover:shadow-md">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      {/* <div className="mt-2 flex items-center text-sm font-medium text-primary">
        <span>Learn more</span>
        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div> */}
    </div>
  )
}

export default function DiversificationSection() {
  const newSectors = [
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Ropeways",
      description: "Innovative aerial transportation solutions connecting challenging terrains and urban environments.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Urban Infrastructures",
      description: "Comprehensive urban development projects creating sustainable and smart city solutions.",
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Aviation",
      description: "Airport infrastructure and aviation facilities designed for efficiency and future growth.",
    },
    {
      icon: <Train className="h-6 w-6" />,
      title: "Hyperloop/Highspeed Rails",
      description: "Next-generation transportation systems delivering unprecedented speed and connectivity.",
    },
  ]

  return (
    <section className="w-full py-10 ">
      <div className="mx-auto  px-4 mt-10 max-w-[88vw] xl:w-full">
        <div className="mx-auto  px-4 mt-10 max-w-[88vw] xl:w-full">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Expanding Our Expertise
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            We are diversifying to new sectors
          </h2>
          <p className="mt-4 text-xl text-muted-foreground py-2">
            Building on our core engineering excellence, we're expanding our capabilities to address emerging
            infrastructure needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg
">
          {newSectors.map((sector, index) => (
            <DiversificationSector
              key={index}
              icon={sector.icon}
              title={sector.title}
              description={sector.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

