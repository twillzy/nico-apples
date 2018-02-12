import React from 'react';

export default ({ caseStudy }) => {
  return (
    <div>
      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <div className="narrow-container margin-bottom-sm">
            <h1>Design Studio</h1>
          </div>
          <h4 className="section-header">Rapid Wireframing</h4>
          <p className="margin-bottom-sm line-height-md">After choosing the most important features for our MVP, we sketched rapid wireframes for our ideas. We timeboxed ourselves and compared the results. We then produced a few paper sketches combining our initial ideas. Our focus was on making the process of entering the availability for a time slot as smooth as possible.</p>
          <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/paper-prototype.jpg" alt="" />
          <h4 className="section-header">Early Feedback</h4>
          <p className="margin-bottom-sm line-height-md">We visited the SES City of Sydney Unit and conducted rapid testing using our paper sketches with 5 users. This was a great chance to get early feedback on our design.</p>
          <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/wireframing.jpg" alt="" />
          <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/usability-testing-paper.png" alt="" />
        </div>
      </div>

      <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <div className="narrow-container margin-bottom-sm">
            <h1 className="">Prototyping & Usability Testing</h1>
          </div>
          <h4 className="section-header">Styleguide</h4>
          <p className="line-height-md">We decided to produce our interactive prototype using Axure as it would allow to create animations across screens. SES provided the style guide below for us to use to create our prototype.</p>
          <img className="width-100 margin-bottom-sm" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/style-guide.png" alt="" />

          <h4 className="section-header">Feedback from usability testing</h4>
          <p className="line-height-md">We decided to producte our interactive prototype using Axure as it would allow to create animations across screens. Once the prototype was created, it was time to test with real users. We visited the City of Sydney Unit again and did a few rounds of usability testing with SES members. We conducted the test giving the users three real scenarios that they had to complete:</p>
          <ol className="line-height-md">
            <li>Enter availability for selected dates after receiving a push notification</li>
            <li>Update availability already entered</li>
            <li>Send a request for availability</li>
          </ol>
          <p className="margin-bottom-sm line-height-md">We recorded the usability sessions with Loom so we could analyse how the testers interacted with the prototype. A few issues were raised by the testers.</p>
          <img className="margin-bottom-sm width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/usability-testing-results.png" alt="" />
          <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/usability-testing-2.png" alt="" />
          <img className="border-bottom-red width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/usability-testing-screenshot.png" alt="" />
        </div>
      </div>

      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1>User Flow</h1>
          <p className="margin-bottom-sm line-height-md">We decided to put together user flows to visualise the decision points and pathways for both our primary and secondary personas. User flow charts also helped us when we pitched our final prototype to the client.</p>
          <h4 className="section-header">User Flow: The Duty Officer</h4>
          <img className="margin-bottom-sm width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/user-flow-1.png" alt="" />
          <h4 className="section-header">User flow: the volunteer member</h4>
          <img className="width-100 " src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/user-flow-2-v2.png" alt="" />
        </div>
      </div>

      <div id="sesPrototype" className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Final Prototype</h1>
          <p className="margin-bottom-sm line-height-md">Our final prototype was the result of three design iterations and included feedback received from our users as well as the client. The prototype was presented to the NSW Commissioner in February 2018 and can be accessed through this <span className="nico-red"><a className="nostyle-link nostyle-visited" href="https://p9g8u0.axshare.com" target="_blank" rel="noopener noreferrer">link</a></span>.</p>
          <a className="nostyle-link nostyle-visited" href="https://p9g8u0.axshare.com" target="_blank" rel="noopener noreferrer"><img className="width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/ses/prototype.png" alt="" /></a>
        </div>
      </div>

      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Next Steps</h1>
          <ul className="margin-bottom-sm line-height-md">
            <li>Conduct further usability testing of our final prototype.</li>
            <li>Implement a desktop version of the application.</li>
            <li>Further iterate on the design.</li>
            <li>Work on the ‘Should’ features of the MVP.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
