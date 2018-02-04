/*eslint-disable */
import React from 'react';

export default ({ showMenuButton, onShowMenuButtonClicked }) =>
  <header className="navigation" role="banner">
    <div className="navigation-wrapper">
      <a href="#" role="button" className="navigation-menu-button" id="js-mobile-menu" onClick={onShowMenuButtonClicked}>MENU</a>
      <nav>
        <ul id="js-navigation-menu" className={`navigation-menu ${showMenuButton ? "show" : ""}`}>
          <li className="nav-link"><a href="">Home</a></li>
          <li className="nav-link"><a href="">Case Studies</a></li>
          <li className="nav-link"><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>;
