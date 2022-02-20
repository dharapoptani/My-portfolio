import React, { useRef } from "react";
import "./FindMe.css";
import SocialLinks from "./SocialLinks";

const FindMe = () => {
  return (
    <div className="find_me">
      <p className="too_big heading">Find Me At</p>
      <div className="find_me_body">
        {SocialLinks.map((info) => {
          return (
            <div className="link">
              <img src={info.logo} />
              <a href={info.href}>{info.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FindMe;
