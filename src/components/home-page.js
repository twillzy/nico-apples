import React, { Component } from 'react';
import Navigation from './navigation';
import WhoAmI from './who-am-i';
import CaseStudies from './case-studies';
import Footer from './footer';
import { caseStudies } from '../data/case-studies.json';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isHelloHovered: false,
      showMenuButton: false,
    }
  }

  toggleHoverState = () => this.setState({ isHelloHovered: !this.state.isHelloHovered });

  onShowMenuButtonClicked = (event) => {
    event.preventDefault();
    this.setState({ showMenuButton: !this.state.showMenuButton });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          showMenuButton={this.state.showMenuButton}
          onShowMenuButtonClicked={this.onShowMenuButtonClicked}
        />
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
        />
        <Footer />
      </div>
    );
  }
}

export default HomePage
