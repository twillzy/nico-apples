import React from 'react';

export default () => {
  return (
    <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
      <div className="margin-bottom-sm narrow-container ">
        <h1 className="">Feature Prioritisation</h1>
        <p className="line-height-md">Given the complexity of the project and based on the brief received from the SES, we have divided the features into 3 different tables based on our primary and secondary personas. These features will be used to produce our MVP.</p>
        <p className="line-height-md section-header">Requester -</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/mvp_requester.png" alt="" />
        <p className="line-height-md section-header">Volunteer -</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/mvp_member.png" alt="" />
        <p className="line-height-md section-header">Both -</p>
        <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/mvp_both.png" alt="" />
        <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/mvp+group+photo.png" alt="" />
      </div>
    </div>
  );
};
