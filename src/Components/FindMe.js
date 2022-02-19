import React, { useRef } from "react";
import "./FindMe.css";
import SocialLinks from "./SocialLinks";

const FindMe = () => {
  const name = useRef("");
  const mail = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("message sent" + name.value + mail.value);
  };

  return (
    <div className="contact" id="contact-id">
      <h1 className="heading">Contact</h1>
      <div className="contact_body">
        <div className="contact_form">
          <h3>Feel Free To Get In Touch</h3>
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder="John Smith" ref={name} required />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                ref={mail}
                required
              />
            </div>
            <div>
              <label>Subject</label>
              <input
                type="text"
                placeholder="Highlight of message"
                ref={subject}
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                rows="7"
                placeholder="Message"
                ref={message}
                required
              ></textarea>
            </div>
            <button onSubmit={handleSubmit}>Send</button>
          </form>
        </div>
        <div className="find_me">
          <h3>Find Me At</h3>
          <div className="find_me_body">
            {SocialLinks.map((info) => {
              return (
                <div className="link">
                  <img src={info.logo} alt="" />
                  <a href={info.href}>{info.title}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMe;
