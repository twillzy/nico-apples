import React from 'react';

export default ({ caseStudy }) => {
  const { title, description } = caseStudy;
  return <a href="" className="flex-box">
    <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png" alt="" />
    <h1 className="flex-title">{title}</h1>
    <p>{description}</p>
  </a>
};
