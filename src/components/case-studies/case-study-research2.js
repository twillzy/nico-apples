import React from 'react';

export default ({ caseStudy }) => {
  return (
    <div className="case-study-research white-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container margin-bottom-sm">
        <h1>Understanding the Users</h1>
      </div>
      <div className="narrow-container">
        <h4 className="section-header">Interviews and Surveys</h4>
        <p className="line-height-md">Coming in as consultants, we wanted to get a clear understanding of how SES units operate and how availability is currently collected and managed. We visited the City of Sydney SES Unit and conducted several interviews with SES volunteers. Some of the duty officers we interviewed raised a few issues with the process:</p>
        <ul className="line-height-md">
          <li>It is a manual job and takes a long time.</li>
          <li>Often volunteers do not respond in a timely manner. </li>
          <li>There are often issues with the accuracy of the availability. </li>
        </ul>
        <p className="line-height-md">
          We then decided to put out a survey to validate some of the patterns identified through our interviews.
        </p>
        <img className="margin-bottom-sm width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/Interviews+Surveys+Summary.png" alt="" />
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/understanding-users-1.jpg" alt="" />
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/understanding-users-2.jpg" alt="" />
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/understanding-users-3.jpg" alt="" />

        <h4 className="section-header">What Users Said</h4>
        <img className="margin-bottom-sm width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/quotes.png" alt="" />

        <h4 className="section-header">Key Findings From Surveys</h4>
        <img className="margin-bottom-sm width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/survey.png" alt="" />
      </div>
    </div>
  );
};
