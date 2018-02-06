import React from 'react';
import prototype from '../../assets/images/drinkr-prototype.png';

export default ({ caseStudy }) => {
  return (
    <div>
      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Design Studio</h1>
          <p className="margin-bottom-sm line-height-md">After choosing the most important features for our MVP, we sketched rapid wireframes for our ideas. We timeboxed ourselves and compared the results. We then produced a few paper sketches combining our initial ideas. Our focus was on making the process of entering the availability for a time slot as smooth as possible. We visited the SES City of Sydney Unit and conducted rapid testing using our paper sketches with 5 users. This was a great chance to get early feedback on our design.</p>
          <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/sketches.png" alt="" />
        </div>
      </div>

      <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Prototyping & Usability Testing</h1>
          <p className="margin-bottom-sm line-height-md">We decided to producte our interactive prototype using Axure as it would allow to create animations across screens. Once the prototype was created, it was time to test with real users. We visited the City of Sydney Unit again and did a few rounds of usability testing with SES members. We conducted the test giving the users three real scenarios that they had to complete:</p>
          <ol className="margin-bottom-sm line-height-md">
            <li>Enter availability for selected dates after receiving a push notification</li>
            <li>Update availability already entered</li>
            <li>Send a request for availability</li>
          </ol>
          <p className="margin-bottom-sm line-height-md">We recorded the usability sessions with Loom so we could analyse how the testers interacted with the prototype. A few issues were raised by the testers.</p>
          <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses_testing.png" alt="" />
          <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/usability+testing+2.png" alt="" />
        </div>
      </div>

      <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Final Prototype</h1>
          <p className="margin-bottom-sm line-height-md">Our final interactive prototype can be accessed through the link <a href="https://p9g8u0.axshare.com">here</a>.</p>
          <img className="width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/prototype_final.png" alt="" />
        </div>
      </div>

      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Next Steps</h1>
          <p className="margin-bottom-sm line-height-md">
            <ul>
              <li>Conduct further usability testing of our final prototype with the users from the Facebook group (perhaps through a survey).</li>
              <li>Implement a desktop version of the application.</li>
              <li>Further iterate on the design to match beacon.</li>
              <li>Work on the ‘Should’ features of the MVP.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
