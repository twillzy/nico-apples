import React from 'react';

export default ({ name, location, jobTitle, message, toggleHoverState, isHelloHovered }) => <div className={`hero ${isHelloHovered ? " titus" : ""}`}>
  <div className="hero-content">
    <span onMouseEnter={toggleHoverState} onMouseLeave={toggleHoverState} className="hello">Hello!</span>
    <div className="who-am-i">
      <span>{`I am ${name}- a fabulous ${jobTitle}, problem solver and quirky-socks advocate based in ${location}.`}</span>
    </div>
  </div >
</div >;
