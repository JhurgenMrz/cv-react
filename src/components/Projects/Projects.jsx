import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiIllustrator } from "react-icons/di";


function Projects({ projects }) {
  const DisplayIcon = name => {
    if(name==="react") return <FaReact style={{ color: "#34bdeb" }}/>
    if(name==="firebase") return <FaReact/>
    if(name==="nodejs") return <FaNodeJs/>
    if(name==="mongodb") return <DiMongodb/>
  }


  return (
    <div className="Projects-container">
      {projects.map((project, index) => (
        <div className="Project-item" key={`Project-${index}`}>
          <div className="Project-description">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="Project-technologies">
              {project.technologies.map((tech, index) => (
                <div className="Project-tech" key={`tech-${index}`}>
                  <p>{tech.name}</p> 
                  {
                    tech.icon_url ? <img src={tech.icon_url} alt={tech.name} /> : DisplayIcon(tech.icon_name)
                  }
                </div>
              ))}
            </div>
          </div>
          <div className="Project-image">
            <img src={project.image} alt="" />
            <a href={project.pageUrl} target="_blank">
              Ver Página
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
