import React from 'react';

export default ({ caseStudy }) => {
  const {
  } = caseStudy;

  return (
    <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">Synthesising Our Research</h1>
        <p className="margin-bottom-sm line-height-md">Looking through the research, we noticed patterns that were consistent across our interviews and surveys. This helped us come up with a problem statement and a solution to some of the points raised by our users.</p>
        <h2 className="section-header">Problem</h2>
        <p className="margin-bottom-sm line-height-md">Bar goers don’t like waiting in line for too long to have their order taken. Bar goers want to keep track of how much money they are spending throughout the night.</p>
        <h2 className="section-header">Solution</h2>
        <p className="margin-bottom-sm line-height-md">A mobile app that allows to order drinks at bars, clubs and events. The app has a budget tracker that tells the user how much he has already spent.</p>
      </div>
    </div>
  );
};
