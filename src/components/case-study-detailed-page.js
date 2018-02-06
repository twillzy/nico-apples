import React from 'react';
import { find, propEq } from 'ramda';
import { caseStudies } from '../data/case-studies.json';
import CaseStudyOverview from './case-studies/case-study-overview';
import Research from './case-studies/research';

export default ({ match }) => {
  const caseStudyId = match.params.id;
  const caseStudy = find(propEq('id', caseStudyId))(caseStudies);
  return (
    <div className="">
      <CaseStudyOverview caseStudy={caseStudy} />
      <Research
        sections={caseStudy.research.sections}
        keyFindings={caseStudy.research.keyFindings}
        synthesis={caseStudy.research.synthesis}
        problem={caseStudy.research.problem}
        solution={caseStudy.research.solution}
        personas={caseStudy.research.personas}
        featurePrioritisations={caseStudy.research.featurePrioritisations}
        userJourney={caseStudy.research.userJourney}
      />
    </div>
  );
}
