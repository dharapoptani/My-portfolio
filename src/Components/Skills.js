import React from "react";
import SkillsInfo from "./SkillsInfo";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="heading">More About Me</h1>

      <div className="skills_info">
        <p>
          I'm a third year engineering student.I love to play around ReactJS and
          develop some web applications.I'm a self taught programmer.Currently
          working on my coding skills and trying to improve my understanding of
          various algorithms.
        </p>

        <div className="skills_info_table">
          <h3>Some of my skills</h3>
          <div className="table">
            {SkillsInfo.map((skill) => {
              return <h4>{skill}</h4>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
