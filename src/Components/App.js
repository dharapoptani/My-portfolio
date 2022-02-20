import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
import Skills from "./Skills";
import FindMe from "./FindMe";
import Projects from "./Projects";
import { ModeContext } from "./Light";
import Footer from "./Footer";

const App = () => {
  const { dark } = ModeContext();
  return (
    <div className="app_body">
      <div className={dark ? "app_container dark" : "app_container"}>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <FindMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
