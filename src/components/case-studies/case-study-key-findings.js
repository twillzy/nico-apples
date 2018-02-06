import React from 'react';
import drinkrInfo from '../../assets/images/drinkr-info.png';

export default ({ caseStudy }) => {
  const {
  } = caseStudy;

  return (
    <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container margin-bottom-sm">
        <h1 className="">Key Findings</h1>
        <img className="margin-bottom-sm width-100 border-bottom-red" src={drinkrInfo} alt="" />
      </div>
    </div>
  );
};
