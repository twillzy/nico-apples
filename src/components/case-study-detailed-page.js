import React from 'react';
import { find, propEq } from 'ramda';
import { caseStudies } from '../data/case-studies.json';
import CaseStudyIntro from './case-studies/case-study-intro';
import CaseStudyOverview from './case-studies/case-study-overview';
import CaseStudyResearch from './case-studies/case-study-research';
import CaseStudyKeyFindings from './case-studies/case-study-key-findings';
import CaseStudySynthesis from './case-studies/case-study-synthesis';
import CaseStudyUserPersonas from './case-studies/case-study-user-personas';
import CaseStudyFeaturePrioritisation from './case-studies/case-study-feature-prioritisation';
import CaseStudyUserJourney from './case-studies/case-study-user-journey';
import CaseStudyDesign from './case-studies/case-study-design';

export default ({ match }) => {
  const caseStudyId = match.params.id;
  const caseStudy = find(propEq('id', caseStudyId))(caseStudies);
  return (
    <div className="padding-top-sm">
      <CaseStudyIntro caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyResearch caseStudy={caseStudy} />
      <CaseStudyKeyFindings caseStudy={caseStudy} />
      <CaseStudySynthesis caseStudy={caseStudy} />
      <CaseStudyUserPersonas caseStudy={caseStudy} />
      <CaseStudyFeaturePrioritisation caseStudy={caseStudy} />
      <CaseStudyUserJourney caseStudy={caseStudy} />
      <CaseStudyDesign caseStudy={caseStudy} />
    </div>
  );
}
