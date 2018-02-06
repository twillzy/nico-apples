import React from 'react';

export default ({ caseStudy }) => {
  const {
  } = caseStudy;

  return (
    <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">User Personas</h1>
        <p className="margin-bottom-sm line-height-md">We developed two user personas based on our initial interviews. Our primary persona would be an SES duty officer collecting availability from members and our secondary persona would be an SES volunteer member entering availability.</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/Persona+1.png" alt="" />
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/Persona+2.png" alt="" />
        <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/persona+photo.png" alt="" />
      </div>
    </div>
  );
};
