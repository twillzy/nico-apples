import React from 'react';

export default ({ caseStudy }) => {
  return (
    <div className="case-study-research white-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container margin-bottom-sm">
        <h1>Understanding the Users</h1>
        <h4 className="section-header">Interviews and Surveys</h4>
      </div>
      <div className="narrow-container">
        <p className="margin-bottom-sm line-height-md">We started our preliminary research by interviewing people who go to bars regularly to understand their current experience. We conducted additional interviews with bar employees to get an additional perspective. We soon realised that some frustrations were related to having to wait for a long time to order drinks when a venue is busy. We then put out a survey to validate the patterns we identified during the interviews.</p>
        <img className="margin-bottom-sm width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/interview-stats.png" alt="" />
        <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/interview.jpg" alt="" />
      </div>
    </div>
  );
};
