import React from 'react';

export default () => {
  return (
    <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">User Personas</h1>
        <p className="margin-bottom-sm line-height-md">We developed two personas to synthesise our research. Both personas were created based on our initial interviews. One persona would represent the customer perspective while the other one would represent the bar perspective.</p>
        <h4 className="section-header">Primary Persona</h4>
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/persona-1.png" alt="" />
        <h4 className="section-header">Secondary Persona</h4>
        <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/persona-2.png" alt="" />
      </div>
    </div>
  );
};
