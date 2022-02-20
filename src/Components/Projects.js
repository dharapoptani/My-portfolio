import React, { useState } from "react";
import data from "./ProjectLinks";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="mywork">
      <p className="too_big heading">My Projects</p>
      <p className="side_heading">Here are some of my past projects</p>
      <div className="projects_body">
        {data.map((project) => {
          return (
            <div className="card">
              <img src={project.img} alt="" />
              <div className="card_info">
                <p className="project_title">{project.title}</p>
                <div className="small_underline"></div>

                <p>{project.description}</p>
                <div className="small_underline"></div>
                <h3>Stack</h3>
                <div className="stack_body">
                  {project.stack.map((tech) => {
                    return <p>{tech}</p>;
                  })}
                </div>
                <div className="button_body">
                  <button>
                    <a href={project.href}>See Live</a>
                  </button>
                  <button>
                    <a href={project.gitlink}></a>Source
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
