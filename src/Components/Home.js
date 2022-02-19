import React from "react";
import mypic from "./images/mypic.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="home_body">
      <div className="home_pic">
        <img src={mypic} alt="" />
      </div>
      <div className="home_info">
        <h3>HEY THERE</h3>
        <h1>I'm Dhara</h1>
        <p>
          Welcome to my corner of internet.I'm glad that you are here.I'm
          pursuing Bachelor's of Technology in the stream of computer
          science(2023).I am a Web Development enthusiast and dedicated problem
          solver skilled in data structures and algorithms.
        </p>
      </div>
      <div className="Cv">
        <button className="btn">
          <a
            href="https://drive.google.com/file/d/1FEj-x0-0WvhfSU8sioC4vcQbkuWzwYTr/view?usp=sharing"
            download="Resume"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
