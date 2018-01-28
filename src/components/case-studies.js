import React from 'react';
import CaseStudy from './case-study';

export default ({ caseStudies }) => < div className="flex-boxes" >
  {caseStudies.map(cs => <CaseStudy caseStudy={cs} key={cs.title} />)}
</div>
