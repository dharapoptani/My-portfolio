import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactsIcon from "@material-ui/icons/Contacts";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import "./Navbar.css";
import { ModeContext } from "./Light";

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const { dark, setDark } = ModeContext();

  return (
    <nav className="nav-item">
      <div className="logo">
        <p>Dhara Poptani</p>
        <div className="toggle" onClick={() => setDark(!dark)}>
          {dark ? <Brightness5Icon /> : <Brightness2Icon />}
        </div>
      </div>
      <div className="burger" onClick={() => setIsClicked(!isClicked)}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul
        className={isClicked ? "nav-menu active" : "nav-menu"}
        onClick={() => setIsClicked(!isClicked)}
      >
        <li>
          <EmailIcon />
          <a href="#footer-id">Contact</a>
        </li>
        <li>
          <ContactsIcon />
          <a
            href="https://drive.google.com/file/d/1FEj-x0-0WvhfSU8sioC4vcQbkuWzwYTr/view?usp=sharing"
            download="Resume"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <DescriptionIcon />
          <a href="#mywork">My Works</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
