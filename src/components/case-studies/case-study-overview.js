import React from 'react';

export default ({ caseStudy }) => {
  const {
    role,
    brief,
    duration,
    team,
    skills,
    tools,
  } = caseStudy;

  return (
    <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container">
        <div className="margin-bottom-sm">
          <h1 className="">Overview</h1>
        </div>
        <h2 className="section-header">My Role</h2>
        <p className="margin-bottom-sm">{role}</p>
        <h2 className="section-header">Brief</h2>
        <p className="margin-bottom-sm">{brief}</p>
        <h2 className="section-header">Duration</h2>
        <p className="margin-bottom-sm">{duration}</p>
        <h2 className="section-header">Skills</h2>
        <p className="margin-bottom-sm">{skills}</p>
        <h2 className="section-header">Tools</h2>
        <p className="margin-bottom-sm">{tools}</p>
        <h2 className="section-header">Team</h2>
        <p className="margin-bottom-sm">{team}</p>
      </div>
    </div>
  );
};
