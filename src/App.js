import React, { Component } from 'react';
import Navigation from './components/navigation';
import WhoAmI from './components/who-am-i';
import CaseStudies from './components/case-studies';
import AboutMe from './components/about-me';
import Footer from './components/footer';
import { caseStudies } from './data/case-studies.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isHelloHovered: false,
      isCaseStudyHovered: false,
    }
  }

  toggleHoverState = () => this.setState({ isHelloHovered: !this.state.isHelloHovered });

  toggleCaseStudyHovered = () => this.setState({ isCaseStudyHovered: !this.state.isCaseStudyHovered });

  render() {
    return (
      <div className="App">
        <Navigation />
        <WhoAmI
          name="Nico"
          location="Sydney"
          jobTitle="User Experience Designer"
          message="Don't ask me to make a button bigger. Ask me why the button should be bigger."
          toggleHoverState={this.toggleHoverState}
          isHelloHovered={this.state.isHelloHovered}
        />
        <CaseStudies
          caseStudies={caseStudies}
          toggleCaseStudyHovered={this.toggleCaseStudyHovered}
          isCaseStudyHovered={this.state.isCaseStudyHovered}
        />
        {/* <AboutMe /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
