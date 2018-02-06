import React from 'react';

export default ({ caseStudy }) => {
  return (
    <div className="case-study-research white-bg padding-top-sm padding-bottom-sm">
      <div className="narrow-container margin-bottom-sm">
        <h1>Interviews and Surveys</h1>
      </div>
      <div className="narrow-container">
        <p className="margin-bottom-sm line-height-md">We started our preliminary research by interviewing people who go to bars regularly to understand their current experience. We conducted additional interviews with bar employees to get an additional perspective. We soon realised that some frustrations were related to having to wait for a long time to order drinks when a venue is busy. We then put out a survey to validate the patterns we identified during the interviews.</p>
        <img className="width-100 border-bottom-red" src="https://static.wixstatic.com/media/bbeaac_6fc56f656305443b8961979f35f8c119~mv2.png/v1/fill/w_762,h_508,al_c,usm_0.66_1.00_0.01/bbeaac_6fc56f656305443b8961979f35f8c119~mv2.png" alt="" />
      </div>
    </div>
  );
};
