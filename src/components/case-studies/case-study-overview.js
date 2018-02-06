import React from 'react';

export default ({ caseStudy }) => {
  const {
    title,
    description,
    imageUrl,
  } = caseStudy;

  return (
    <div className="case-study-overview">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt="case study" />
    </div>
  );
};
