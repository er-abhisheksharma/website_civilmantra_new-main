'use client'


import Heroprojects from "../../../../components/Projects/HeroProjects";
import Highlighted from "../../../../components/Projects/HighlightedProjects";
import Projectpdf from "../../../../components/Projects/Ppt";
import ProjectDetails from "../../../../components/Projects/ProjectsDetails";


export default function Projects() {
    return(
        <>
          <Heroprojects/>
          <Highlighted/>
          <ProjectDetails/>
          <Projectpdf/>
        </>
    );
};
