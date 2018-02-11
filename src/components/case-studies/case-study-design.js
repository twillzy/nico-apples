import React from 'react';

export default ({ caseStudy }) => {
  return (
    <div>
      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Design Studio</h1>
          <h4 className="section-header">Rapid Wireframing</h4>
          <p className="margin-bottom-sm line-height-md">After choosing the most important features, as a team we sketched rapid wireframes for our ideas. We decided to focus only on the “MUST” features at this stage. We timeboxed ourselves and compared the results. We then combined our ideas and worked collectively on the first iteration.</p>
          <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/wireframing.jpg" alt="" />
          <h4 className="section-header">Early Feedback</h4>
          <p className="margin-bottom-sm line-height-md">We conducted a few user tests using paper prototypes to get early feedback on our flow. Positive reaction ensured that we are moving in the right direction. A few issues were raised by the testers, including unclear wording in some pages and some navigation issues.</p>
          <img className="margin-bottom-sm width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/paper-prototype.jpg" alt="" />
          <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/paper-testing.jpg" alt="" />
        </div>
      </div>

      <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Prototyping & Usability Testing</h1>
          <p className="line-height-md">We converted our paper prototype into mid-fidelity wireframes using Sketch. We then did guerrilla testing with 6 participants and asked them to complete the following actions:</p>
          <p className="margin-bottom-sm line-height-md">
            <ol>
              <li>Find a bar nearby</li>
              <li>Place a drinks order</li>
              <li>Leave a special request with your order</li>
              <li>Collect your drinks at the bar</li>
              <li>Check how much money they have spent</li>
            </ol>
            A few issues were raised by our testers.
          </p>
          <img className="width-100 border-bottom-red" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/usability-testing.png" alt="" />
        </div>
      </div>

      <div className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Final Prototype (High-Fidelity)</h1>
          <p className="margin-bottom-sm line-height-md">When the project finished, I decided to spend an additional week working on the user interface. I addressed the colour-contrast issues previously raised and did usability testing with a few other users. I produced the final high-fidelity interactive prototype below using Sketch and InVision. Enjoy!</p>
          <div className="center">
            <iframe
              title="drinkr"
              width="438"
              height="930"
              src="//invis.io/ZTF9S25F7"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Next Steps</h1>
          <p className="margin-bottom-sm line-height-md">
            <ul>
              <li>Implement additional features for the mobile app, including the possibility of splitting the bill with your friends and a review system.</li>
              <li>Implement the employee side interface</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
