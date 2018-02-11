import React from 'react';

export default ({ caseStudy }) => {
  const {
    title,
    projectType,
    year,
    description,
    imageUrl,
    prototypeUrl,
  } = caseStudy;

  return (
    <div className="case-study-intro white-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container">
        <h1>{title}</h1>
        <p className="grey line-height-md"><span>{year} | {projectType}</span><br />{description}</p>
        <img className="width-100 margin-bottom-sm" src={imageUrl} alt="case study" />
        {prototypeUrl &&
          <div className="next-button-container">
            <a href={prototypeUrl} className="next-button" role="button">Jump To Prototype</a>
          </div>
        }
      </div>
    </div>
  );
};
