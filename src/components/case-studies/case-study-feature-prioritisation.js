import React from 'react';
import persona1 from '../../assets/images/drinkr-persona-1.png';
import persona2 from '../../assets/images/drinkr-persona-2.png';

export default ({ caseStudy }) => {
  const {
  } = caseStudy;

  return (
    <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">Feature Prioritisation</h1>
        <p className="line-height-md">For our solution, we decided to focus only on our primary persona: Charlotte, the bar goer. We came up with a list of features that would benefit our primary persona and used them as a starting point for our design process.</p>
      </div>
    </div>
  );
};
