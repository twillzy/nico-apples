import React from "react";

export default ({
  name,
  location,
  jobTitle,
  message,
  toggleHoverState,
  isHelloHovered
}) => (
  <div className={`hero ${isHelloHovered ? " titus" : ""}`}>
    <div className="hero-content screen-wrapper" onMouseEnter={toggleHoverState} onMouseLeave={toggleHoverState}>
      <span className="hello">Hello!</span>
      <div className="who-am-i">
        <span>{`I am ${name}- a fabulous ${jobTitle} and creative problem solver based in ${location}. In the UX world full of Michelles, I strive to be like Beyoncé.`}</span>
      </div>
    </div>
  </div>
);
