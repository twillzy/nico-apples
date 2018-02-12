import React from 'react';
import { find, propEq } from 'ramda';
import { caseStudies } from '../data/case-studies.json';
import CaseStudyIntro from './case-studies/case-study-intro';
import CaseStudyOverview from './case-studies/case-study-overview';
import CaseStudyResearch from './case-studies/case-study-research';
import CaseStudyResearch2 from './case-studies/case-study-research2';
import CaseStudySynthesis from './case-studies/case-study-synthesis';
import CaseStudyUserPersonas from './case-studies/case-study-user-personas';
import CaseStudyUserPersonas2 from './case-studies/case-study-user-personas2';
import CaseStudyFeaturePrioritisation from './case-studies/case-study-feature-prioritisation';
import CaseStudyFeaturePrioritisation2 from './case-studies/case-study-feature-prioritisation2';
import CaseStudyUserJourney from './case-studies/case-study-user-journey';
import CaseStudyDesign from './case-studies/case-study-design';
import CaseStudyDesign2 from './case-studies/case-study-design2';

export default ({ match }) => {
  const caseStudyId = match.params.id;
  const caseStudy = find(propEq('id', caseStudyId))(caseStudies);
  switch (caseStudyId) {
    case "1":
      return (
        <div className="">
          <CaseStudyIntro caseStudy={caseStudy} />
          <CaseStudyOverview caseStudy={caseStudy} />
          <CaseStudyResearch caseStudy={caseStudy} />
          <CaseStudySynthesis caseStudy={caseStudy} />
          <CaseStudyUserPersonas caseStudy={caseStudy} />
          <CaseStudyFeaturePrioritisation caseStudy={caseStudy} />
          <CaseStudyUserJourney caseStudy={caseStudy} />
          <CaseStudyDesign caseStudy={caseStudy} />
        </div>)
    case "3":
      return (
        <div className="">
          <CaseStudyIntro caseStudy={caseStudy} />
          <CaseStudyOverview caseStudy={caseStudy} />
          <CaseStudyResearch2 caseStudy={caseStudy} />
          <CaseStudyUserPersonas2 caseStudy={caseStudy} />
          <CaseStudyFeaturePrioritisation2 caseStudy={caseStudy} />
          <CaseStudyDesign2 caseStudy={caseStudy} />
        </div>)
    default:
      return (
        <div className="">
          <CaseStudyIntro caseStudy={caseStudy} />
        </div>)
  }
}
