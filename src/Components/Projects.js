import React, { useState } from "react";
import data from "./ProjectLinks";
import "./Projects.css";

const Projects = () => {
  const [index, setIndex] = useState(1);
  const len = data.length;
  const project = data[index];
  return (
    <div className="projects" id="mywork">
      <h1 className="heading">My Work</h1>
      <h3 style={{ marginTop: "1rem" }}>Here are some of my past projects</h3>
      <div className="projects_body">
        <div className="card">
          <img src={project.img} alt="" />
          <div className="card_info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button>
              <a href={project.href}>See Live</a>
            </button>
            <button onClick={() => setIndex((index + 1) % len)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
