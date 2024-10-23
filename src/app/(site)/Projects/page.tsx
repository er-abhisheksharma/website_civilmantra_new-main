'use client'

import Business from "../../../../components/Home/BusinessHelp";
import Heroprojects from "../../../../components/Projects/HeroProjects";
import Projectpdf from "../../../../components/Projects/Ppt";
import ProjectDetails from "../../../../components/Projects/ProjectsDetails";


export default function Projects() {
    return(
        <>
          <Heroprojects/>
          <ProjectDetails/>
          <Projectpdf/>
        </>
    );
};
