import React from 'react';

export default ({
  sections,
  keyFindings,
  synthesis,
  problem,
  solution,
  personas,
  featurePrioritisations,
  userJourney,
}) => {
  return (
    <div className="research">
      <div className="interview-survey text-center">
        <div className="pd-vertical-lg narrow horizontally-center">
          <h1 className="text-left font-lg">{sections[0].header}</h1>
          {sections[0].body.map(b => <p className="text-left line-height-md font-md">{b}</p>)}
          <img src={sections[0].imageUrl} alt="interview" />
        </div>
      </div>
      <div className="key-findings section">
        <h3>Key Findings</h3>
        {/* {keyFindings.map(kf => (
          <div className="key-finding">
            <p>{kf.description}</p>
            <img src={kf.imageUrl} alt="key-finding" />
          </div>
        ))} */}
      </div>
      <div className="synthesis section">
        <h3>SYNTHETISING OUR RESEARCH</h3>
        <p>{synthesis}</p>
        <div className="problem-solution">
          <h4>PROBLEM</h4>
          <p>{problem}</p>
        </div>
        <div className="problem-solution">
          <h4>SOLUTION</h4>
          <p>{solution}</p>
        </div>
      </div>
      <div className="user-personas section">
        <h3>PERSONAS</h3>
        <p>{personas.message}</p>
      </div>
      <div className="feature-prioritisations section">
        <h3>FEATURE PRIORITISATION</h3>
        <p>{featurePrioritisations.message}</p>
        <div className="row">
          <img className="half" src={featurePrioritisations.imageUrls[0]} alt="" />
          <img className="half" src="https://static.wixstatic.com/media/bbeaac_d568f2fb03644f86bc2c5e324d30f708~mv2.png/v1/fill/w_788,h_510,al_c,usm_0.66_1.00_0.01/bbeaac_d568f2fb03644f86bc2c5e324d30f708~mv2.png" alt="" />
        </div>
        <img src={featurePrioritisations.imageUrls[1]} alt="" />
      </div>
      <div className="user-journey section">
        <h3>USER JOURNEY</h3>
        <p>{userJourney.message}</p>
        <img src={userJourney.imageUrl} alt="" />
      </div>

      <h2>Design</h2>
      <hr />
      <h3>RAPID WIREFRAMING</h3>
      <div className="row">
        <p className="half">After choosing the most important features, as a team we sketched rapid wireframes for our ideas. We decided to focus only on the “MUST” features at this stage. We timeboxed ourselves and compared the results. We then combined our ideas and worked collectively on the first iteration.</p>
        <img className="half" src="https://static.wixstatic.com/media/bbeaac_e90608b33993475db2ac035e1773d500~mv2.png/v1/fill/w_798,h_540,al_c,usm_0.66_1.00_0.01/bbeaac_e90608b33993475db2ac035e1773d500~mv2.png" alt="" />
      </div>

      <h3>EARLY FEEDBACK</h3>
      <p>We conducted a few user tests using paper prototypes to get early feedback on our flow. Positive reaction ensured that we are moving in the right direction. A few issues were raised by the testers, including unclear wording in some pages and some navigation issues.</p>
      <div className="row">
        <img className="half" src="https://static.wixstatic.com/media/bbeaac_97d1fdfaf6ac4a37ad9d26a08972976f~mv2.png/v1/fill/w_898,h_470,al_c,usm_0.66_1.00_0.01/bbeaac_97d1fdfaf6ac4a37ad9d26a08972976f~mv2.png" alt="" />
        <img className="half" src="https://static.wixstatic.com/media/bbeaac_90b18464f8354a4fae326c3a85c46cad~mv2.png/v1/fill/w_544,h_520,al_c,usm_0.66_1.00_0.01/bbeaac_90b18464f8354a4fae326c3a85c46cad~mv2.png" alt="" />
      </div>

      <h3>PROTOTYPING & USABILITY TESTING</h3>
      <p>We converted our paper prototype into mid-fidelity wireframes using Sketch. We then did guerrilla testing with 6 participants and asked them to complete the following actions:</p>
      <ol>
        <li>Find a bar nearby</li>
        <li>Place a drinks order</li>
        <li>Leave a special request with your order</li>
        <li>Collect your drinks at the bar</li>
        <li>Check how much money they have spent</li>
      </ol>
      <p>A few issues were raised by our testers.</p>
      <div className="row">
      </div>

      <h3>FINAL PROTOTYPE (HIGH-FIDELITY)</h3>
      <p>When the project finished, I decided to spend an additional week working on the user interface. I addressed the colour-contrast issues previously raised and did usability testing with a few other users. I produced the final high-fidelity interactive prototype below using Sketch and InVision. Enjoy!</p>
      <iframe
        title="drinkr"
        width="438"
        height="930"
        src="//invis.io/ZTF9S25F7"
        frameborder="0"
        allowfullscreen
      />

      <h3>FINAL STEPS</h3>
      <ul>
        <li>Implement additional features for the mobile app, including the possibility of splitting the bill with your friends and a review system.</li>
        <li>Implement the employee side interface</li>
      </ul>
    </div>
  );
};
