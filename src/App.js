import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';
import HomePage from './components/home-page';
import DrinkrPage from './components/case-study-detailed-page';

const App = () => (
  <Router>
    <ScrollToTop>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/case-studies/:id" component={DrinkrPage} />
    </ScrollToTop>
  </Router >
);

export default App;
