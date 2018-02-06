/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ showMenuButton, onShowMenuButtonClicked }) =>
  <header className="navigation" role="banner">
    <div className="navigation-wrapper">
      <a href="#" role="button" className="navigation-menu-button" id="js-mobile-menu" onClick={onShowMenuButtonClicked}>MENU</a>
      <nav>
        <ul id="js-navigation-menu" className={`navigation-menu ${showMenuButton ? "show" : ""}`}>
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/case-studies">Case Studies</Link></li>
          <li className="nav-link"><Link to="">About</Link></li>
        </ul>
      </nav>
    </div>
  </header>;
