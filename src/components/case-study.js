import React from 'react';

export default ({ caseStudy }) => {
  const { title, description, imageUrl, projectType } = caseStudy;
  return <div className="case-study">
    <a href="" className="grid-item">
      <img src={imageUrl} alt="" />
    </a>
    <a href="" className="grid-item grid-item-big">
      <div className="case-study-content">
        <h1 className="case-study-title">
          {title}
        </h1>
        <p>2017 | <span>{projectType}</span><br />{description}</p>
      </div>
    </a></div>
};
