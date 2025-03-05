"use client";

import CompletedProjectpdf from "../../../../components/Projects/Completedprojects";
import HighlightedDesign from "../../../../components/Projects/DesignHighlighted";
import Heroprojects from "../../../../components/Projects/HeroProjects";
import Highlighted from "../../../../components/Projects/HighlightedProjects";
import Projectpdf from "../../../../components/Projects/Ppt";
import ProjectDetails from "../../../../components/Projects/ProjectsDetails";

export default function Projects() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
        <Heroprojects />
        {/* <HighlightedDesign/> */}
        {/* <ProjectDetails/> */}

        <Projectpdf />
      </div>
    </>
  );
}
