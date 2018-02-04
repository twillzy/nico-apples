import React from 'react';
import CaseStudy from './case-study';

export default ({ caseStudies, toggleCaseStudyHovered, isCaseStudyHovered }) =>
  <div className="grid-items-lines screen-wrapper">
    <h4 className="section-header">Case Studies —</h4>
    {caseStudies.map(cs =>
      <CaseStudy
        caseStudy={cs}
        toggleCaseStudyHovered={toggleCaseStudyHovered}
        isCaseStudyHovered={isCaseStudyHovered}
        key={cs.title} />)}
    <div className="bottom-cover"></div>
  </div>
