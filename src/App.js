import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';
import HomePage from './components/home-page';
import CaseStudiesPage from './components/case-studies';
import DrinkrPage from './components/case-study-detailed-page';
import Navigation from './components/navigation';
import Footer from './components/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenuButton: false,
    }
  }

  onShowMenuButtonClicked = (event) => {
    event.preventDefault();
    this.setState({ showMenuButton: !this.state.showMenuButton });
  }

  render() {
    return (
      <Router >
        <ScrollToTop>
          <Navigation
            showMenuButton={this.state.showMenuButton}
            onShowMenuButtonClicked={this.onShowMenuButtonClicked}
          />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/case-studies" component={CaseStudiesPage} />
          <Route exact path="/case-studies/:id" component={DrinkrPage} />
          <Footer />
        </ScrollToTop>
      </Router >
    );
  }
}

export default App;
