import React from 'react';

export default ({ caseStudy }) => {
  const {
    title,
    projectType,
    year,
    description,
    imageUrl,
  } = caseStudy;

  return (
    <div className="case-study-intro white-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container">
        <h1>{title}.</h1>
        <p className="grey line-height-md"><span>{year} | {projectType}</span><br />{description}</p>
        <img class="width-100" src={imageUrl} alt="case study" />
      </div>
    </div>
  );
};
