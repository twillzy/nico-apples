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
          <div className="narrow-container margin-bottom-sm">
            <h1 className="">Prototyping & Usability Testing</h1>
          </div>
          <h4 className="section-header">Styleguide</h4>
          <p className="line-height-md">We created a styleguide and converted our paper prototype into mid-fidelity wireframes using Sketch.</p>
          <img className="width-100 margin-bottom-sm" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/style-guide-v2.png" alt="" />

          <h4 className="section-header">Feedback from usability testing</h4>
          <p className="line-height-md">We conducted guerrilla testing with 6 participants and asked them to complete the following actions:</p>
          <ol className="line-height-md">
            <li>Find a bar nearby</li>
            <li>Place a drinks order</li>
            <li>Leave a special request with your order</li>
            <li>Collect your drinks at the bar</li>
            <li>Check how much money they have spent</li>
          </ol>
          <p className="margin-bottom-sm line-height-md">
            A few issues were raised by our testers.
          </p>
          <img className="width-100" src="https://s3-ap-southeast-2.amazonaws.com/nicoapples-images/drinkr/usability-testing-v2.png" alt="" />
        </div>
      </div>

      <div id="drinkrPrototype" className="case-study-overview porcelain-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Final Prototype (High-Fidelity)</h1>
          <p className="line-height-md">When the project finished, I decided to spend an additional week working on the user interface. I addressed the colour-contrast issues previously raised and did usability testing with a few other users. I produced the final high-fidelity interactive prototype below using Sketch and InVision.</p>
          <p className="margin-bottom-sm line-height-md">How about you try ordering a round of drinks at the closest bar?  Keep in mind you’ve got to keep track of your spending.</p>
          <div className="center">
            <iframe
              title="drinkr"
              width="438"
              height="930"
              src="//invis.io/ZTF9S25F7"
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>
          <p className="center margin-bottom-sm line-height-md">Demo doesn’t work? Try using this InVision <span className="nico-red"><a className="nostyle-link nostyle-visited" href="https://invis.io/BFF7VVXG8" target="_blank" rel="noopener noreferrer">link</a></span>.</p>
        </div>
      </div>

      <div className="case-study-overview white-bg padding-top-sm padding-bottom-sm">
        <div className="margin-bottom-sm narrow-container ">
          <h1 className="">Next Steps</h1>
          <ul className="margin-bottom-sm line-height-md">
            <li>Implement additional features for the mobile app, including the possibility of splitting the bill with your friends and a review system.</li>
            <li>Implement the employee side interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
