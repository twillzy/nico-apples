import React from 'react';
import { Link } from 'react-router-dom';

export default ({ caseStudy }) => {
  const { id, title, description, imageUrl, projectType } = caseStudy;
  return (
    <div className="case-study">
      <Link to={`/case-studies/${id}`} className="grid-item">
        <img src={imageUrl} alt="" />
      </Link>
      <Link to={`/case-studies/${id}`} className="grid-item grid-item-big">
        <div className="case-study-content">
          <h1 className="case-study-title">
            {title}
          </h1>
          <p>2017 | <span>{projectType}</span><br />{description}</p>
        </div>
      </Link>
    </div>);
};
