"use client";

import CompletedProjectpdf from "../../../../components/Projects/Completedprojects";
import HighlightedDesign from "../../../../components/Projects/DesignHighlighted";
import Heroprojects from "../../../../components/Projects/HeroProjects";
import Highlighted from "../../../../components/Projects/HighlightedProjects";
import Projectpdf from "../../../../components/Sectors/Ppt";
import ProjectDetails from "../../../../components/Projects/ProjectsDetails";
import ProjectsExcel from "../../../../components/Projects/ProjectExcel";

export default function Projects() {
  return (
    <>
      <div className="">
        <Heroprojects />
        <ProjectsExcel/>
        {/* <HighlightedDesign/> */}
        {/* <ProjectDetails/> */}
      </div>
    </>
  );
}
