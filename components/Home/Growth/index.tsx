import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const stages = [
  { stage: "Stage 1", name: "Start Up", range: "1 - 10", color: "bg-blue-600", zone: "Flood Zone", icon: "🚀", height: "h-28" },
  { stage: "Stage 2", name: "Ramp Up", range: "11 - 19", color: "bg-red-600", zone: "Wind Funnel", icon: "📈", height: "h-32" },
  { stage: "Stage 3", name: "Delegation", range: "20 - 34", color: "bg-yellow-500", zone: "Flood Zone", icon: "🤝", height: "h-36" },
  { stage: "Stage 4", name: "Professional", range: "35 - 57", color: "bg-yellow-600", zone: "Flood Zone", icon: "💼", height: "h-40" },
  { stage: "Stage 5", name: "Integration", range: "58 - 95", color: "bg-green-600", zone: "Wind Funnel", icon: "🔗", height: "h-44" },
  { stage: "Stage 6", name: "Strategic", range: "96 - 160", color: "bg-red-600", zone: "Flood Zone", icon: "🐌", height: "h-48" },
  { stage: "Stage 7", name: "Visionary", range: "161 - 500", color: "bg-blue-900", zone: "Wind Funnel", icon: "🔭", height: "h-52" },
];

const BusinessGrowthStages = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // Type it as number or null

  useEffect(() => {
    const interval = setInterval(() => {
      setHoverIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % stages.length)); // 
    }, 1300); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1 className="unihead mt-24 mb-10">Key Milestone of CivilMantra</h1>
      <div className="flex flex-col items-center mx-auto justify-center px-4 py-8 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-5 max-w-[88vw]">
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-300 group"
            animate={{
              scale: hoverIndex === index ? 1.1 : 1, 
              y: hoverIndex === index ? -19 : -19, 
            }}
            transition={{
              duration: 1,
            }}
          >
            {/* Stage Container with increasing height */}
            <div
              className={`w-24 lg:w-40 ${stage.height} ${stage.color} text-white font-semibold rounded-t-lg flex flex-col justify-center transition-transform`}
            >
              {/* Increased icon size */}
              <p className="text-2xl lg:text-3xl group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-200">
                {stage.icon}
              </p>
              <p className="group-hover:scale-125 transition-transform duration-200">{stage.name}</p>
            </div>

            {/* Stage Info */}
            <div className="bg-white w-24 lg:w-40 text-center shadow-md rounded-b-lg py-3">
              <p className="text-sm font-bold">{stage.stage}</p>
              <p className="text-md font-medium group-hover:text-black group-hover:scale-125 transition-transform duration-200 group-hover:font-semibold text-gray-800">
                {stage.range}
              </p>
            </div>

            {/* Zone Info */}
            <p className="mt-2 text-sm text-gray-800 font-medium transition-transform duration-200 group-hover:scale-110 group-hover:text-black"
            >

              {stage.zone}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BusinessGrowthStages;
