import React from 'react';
import persona1 from '../../assets/images/drinkr-persona-1.png';
import persona2 from '../../assets/images/drinkr-persona-2.png';

export default ({ caseStudy }) => {
  const {
  } = caseStudy;

  return (
    <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">User Journey</h1>
        <p className="margin-bottom-sm line-height-md">I then mapped out a typical user journey for Charlotte breaking down the process of when she goes out to a bar. The user journey map shows shows the experience before and after our proposed solution.</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://static.wixstatic.com/media/bbeaac_87b3fc3efea54948809d297dc5e16d6a~mv2.png/v1/fill/w_1200,h_300,al_c,usm_0.66_1.00_0.01/bbeaac_87b3fc3efea54948809d297dc5e16d6a~mv2.png" alt="" />
      </div>
    </div>
  );
};
