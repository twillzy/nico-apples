import React from 'react';

export default ({ caseStudy }) => {
  const {
    title,
    description,
    imageUrl,
    brief,
    team,
    role,
    projectTools,
    skills,
    duration,
  } = caseStudy;

  return (
    <div className="case-study-overview">
      <div className="case-study-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="case-study-image">
        <img src={imageUrl} alt="case study" />
      </div>
      <div className="grid-items-lines">
        <div className="grid-item">
          <h1>BRIEF</h1>
          <p>{brief}</p>
        </div>
        <div className="grid-item">
          <h1>SKILLS</h1>
          <p>{skills}</p>
        </div>
        <div className="grid-item">
          <h1>PROJECT TOOLS</h1>
          <p>{projectTools}</p>
        </div>
        <div className="grid-item">
          <h1>MY ROLE</h1>
          <p>{role}</p>
        </div>
        <div className="grid-item">
          <h1>DURATION</h1>
          <p>{duration}</p>
        </div>
        <div className="grid-item">
          <h1>TEAM</h1>
          <p>{team}</p>
        </div>
      </div>
    </div>
  );
};
