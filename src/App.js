import React, { Component } from 'react';
import Navigation from './components/navigation';
import WhoAmI from './components/who-am-i';
import CaseStudies from './components/case-studies';
import { caseStudies } from './data/case-studies.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <WhoAmI
          name="Nico"
          location="Sydney"
          jobTitle="User Experience Designer"
          message="Don't ask me to make a button bigger. Ask me why the button should be bigger."
        />
        <CaseStudies
          caseStudies={caseStudies}
        />
      </div>
    );
  }
}

export default App;
