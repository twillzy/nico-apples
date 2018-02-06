import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './components/home-page';
import DrinkrPage from './components/case-study-detailed-page';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/case-studies/:id" component={DrinkrPage} />
    </div>
  </Router>
);

export default App;
