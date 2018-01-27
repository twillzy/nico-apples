import React from 'react';

export default ({ name, location, jobTitle, message }) => <div className="hero">
  <div className="hero-content">
    <h1>{`Hi! I am ${name}, a ${jobTitle} based in ${location}.`}</h1>
    <p>{message}</p>
  </div>
</div>;
