import React from "react";
import "./Projects.css";

function Projects({ projects }) {
  console.log(projects);
  return (
    <div className="Projects-container">
      {projects.map((project, index) => (
        <div className="Project-item">
          <div className="Project-description">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="Project-technologies">
              {project.technologies.map((tech, index) => (
                <div className="Project-tech">
                  <p>{tech.name}</p> <img src={tech.icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="Project-image">
            <img src={project.image} alt="" />
            <a href={project.pageUrl} target="_blank">
              {" "}
              Ver Página{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
