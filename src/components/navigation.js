import React from 'react';

export default () =>
  <header className="navigation" role="banner">
    <div className="navigation-wrapper">
      <a href="" className="navigation-menu-button" id="js-mobile-menu">MENU</a>
      <nav>
        <ul id="js-navigation-menu" className="navigation-menu show">
          <li className="nav-link"><a href="">Home</a></li>
          <li className="nav-link"><a href="">Case Studies</a></li>
          <li className="nav-link"><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>;
