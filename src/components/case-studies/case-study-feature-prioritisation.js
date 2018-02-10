import React from 'react';
import prior1 from '../../assets/images/drinkr-prior-1.JPG';
import prior2 from '../../assets/images/drinkr-prior-2.png';

export default () => {
  return (
    <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">Feature Prioritisation</h1>
        <p className="line-height-md">For our solution, we decided to focus only on our primary persona: Charlotte, the bar goer. We came up with a list of features that would benefit our primary persona and used them as a starting point for our design process.</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src={prior1} alt="" />
        <img className="width-100 border-bottom-red" src={prior2} alt="" />
      </div>
    </div>
  );
};
