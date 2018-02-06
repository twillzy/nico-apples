import React from 'react';
import persona1 from '../../assets/images/drinkr-persona-1.png';
import persona2 from '../../assets/images/drinkr-persona-2.png';

export default ({ caseStudy }) => {
  const {
  } = caseStudy;

  return (
    <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">User Personas</h1>
        <p className="margin-bottom-sm line-height-md">We developed two personas to synthesise our research. Both personas were created based on our initial interviews. One persona would represent the customer perspective while the other one would represent the bar perspective.</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src={persona1} alt="" />
        <img className="width-100 border-bottom-red" src={persona2} alt="" />
      </div>
    </div>
  );
};
