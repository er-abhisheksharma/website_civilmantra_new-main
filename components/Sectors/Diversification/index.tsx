import type React from "react";
import { ArrowUpRight, Plane, Building2, Mountain, Train } from "lucide-react";

interface DiversificationSectorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const DiversificationSector = ({
  icon,
  title,
  description,
  image,
}: DiversificationSectorProps) => {
  return (
    <div
      className="group relative flex flex-col justify-between gap-2 rounded-lg lg:h-[240px] duration-300 border border-border bg-cover bg-center p-6 transition-all hover:shadow-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/65 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-white">
          {icon}
        </div>

        {/* Push title & description to the bottom */}
        <div className="mt-auto">
          <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>


  );
};

export default function DiversificationSection() {
  const newSectors = [
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Ropeways",
      description:
        "Innovative aerial transportation solutions connecting challenging terrains and urban environments.",
      image: "/images/Sectors/diversing/cable-cars-6605261_1280.svg",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Urban Infrastructures",
      description:
        "Comprehensive urban development projects creating sustainable and smart city solutions.",
      image: "/images/Sectors/diversing/shot-burj-park-from-dubai-uae.jpg",
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Aviation",
      description:
        "Airport infrastructure and aviation facilities designed for efficiency and future growth.",
      image: "/images/Sectors/diversing/ai-generated-8498715_1280.jpg",
    },
    {
      icon: <Train className="h-6 w-6" />,
      title: "Hyperloop/Highspeed Rails",
      description:
        "Next-generation transportation systems delivering unprecedented speed and connectivity.",
      image: "/images/Sectors/diversing/futuristic-exploration-dubai-s-evolving-cityscape.jpg",
    },
  ];

  return (
    <section className="w-full pt-10 pb-5">
      <div className="mx-auto px-4 mt-10 max-w-[88vw] xl:w-full">
        <div className="mx-auto px-4 mt-10 max-w-[88vw] xl:w-full">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Expanding Our Expertise
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Shaping the Future: Expanding into New Frontiers
          </h2>
          <p className="mt-4 text-xl text-muted-foreground py-2">
            Building on our core engineering excellence, we're expanding our
            capabilities to address emerging infrastructure needs.
          </p>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-white/10 backdrop-blur-lg rounded-lg p-6"
        >
          {newSectors.map((sector, index) => (
            <DiversificationSector
              key={index}
              icon={sector.icon}
              title={sector.title}
              description={sector.description}
              image={sector.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
