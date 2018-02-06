import React from 'react';
import { find, propEq } from 'ramda';
import { caseStudies } from '../data/case-studies.json';
import CaseStudyIntro from './case-studies/case-study-intro';
import CaseStudyOverview from './case-studies/case-study-overview';
import CaseStudyResearch from './case-studies/case-study-research';

export default ({ match }) => {
  const caseStudyId = match.params.id;
  const caseStudy = find(propEq('id', caseStudyId))(caseStudies);
  return (
    <div className="">
      <CaseStudyIntro caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyResearch caseStudy={caseStudy} />
    </div>
  );
}
