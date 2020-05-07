import React from "react";

export default ({
  name,
  location,
  jobTitle,
  toggleHoverState,
  isHelloHovered,
}) => (
  <div className={`hero ${isHelloHovered ? " titus" : ""}`}>
    <div
      className="hero-content screen-wrapper"
      onMouseEnter={toggleHoverState}
      onMouseLeave={toggleHoverState}
    >
      <span className="hello">Hello!</span>
      <div className="who-am-i">
        <span>{`I'm ${name}- a ${jobTitle}, creative problem solver and cat lover based in ${location}. I design experiences that empower and delight users.`}</span>
      </div>
    </div>
  </div>
);
