import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Founders 
      </h1>
      <div className="h-1/2 w-1/2 flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/w.png"
          title="CEO Project - Waira "
          description="Creadora del Proyecto, Fundadora, Integracion Blockchain Aportando Ideas para el Proyecto."
        />
        <ProjectCard
          src="/profile-pic (4).png"
          title="CTO Project - Sebastian X-e II"
          description="Desarrollador del Proyecto, Implementando las Tecnologias , Aportando ideas de Desarrollo."
        />
        {/* <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
      
    </div>
  );
};

export default Projects;
