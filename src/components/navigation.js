/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/documents/nico-resume-final.pdf';

export default ({ showMenuButton, onShowMenuButtonClicked, onNavLinkClicked }) =>
  <div>
    <div className="header-push"></div>
    <header className="navigation" role="banner">
      <div className="navigation-wrapper">
        <a href="#" role="button" className="navigation-menu-button" id="js-mobile-menu" onClick={onShowMenuButtonClicked}>MENU</a>
        <nav>
          <ul id="js-navigation-menu" className={`navigation-menu ${showMenuButton ? "show" : ""}`}>
            <li className="nav-link" onClick={onNavLinkClicked}><Link to="/">HOME</Link></li>
            <li className="nav-link" onClick={onNavLinkClicked}><Link to="/case-studies">CASE STUDIES</Link></li>
            <li className="nav-link" onClick={onNavLinkClicked}><Link to="/about">ABOUT</Link></li>
            <li className="nav-link"><a href={resume} target="_blank">RESUME</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
