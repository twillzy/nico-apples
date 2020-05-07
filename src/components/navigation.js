/*eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/documents/nico-resume-final.pdf";

const HiddenLinks = () => {
  const show = false;
  return (
    show && (
      <React.Fragment>
        <li className="nav-link" onClick={onNavLinkClicked}>
          <Link to="/case-studies">Case Studies</Link>
        </li>
        <li className="nav-link" onClick={onNavLinkClicked}>
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <a href={resume} target="_blank">
            Resume
          </a>
        </li>
      </React.Fragment>
    )
  );
};

export default ({
  showMenuButton,
  onShowMenuButtonClicked,
  onNavLinkClicked,
}) => (
  <div>
    <div className="header-push"></div>
    <header className="navigation" role="banner">
      <div className="navigation-wrapper">
        <a
          href="#"
          role="button"
          className="navigation-menu-button"
          id="js-mobile-menu"
          onClick={onShowMenuButtonClicked}
        >
          MENU
        </a>
        <nav>
          <ul
            id="js-navigation-menu"
            className={`navigation-menu ${showMenuButton ? "show" : ""}`}
          >
            <li className="nav-link" onClick={onNavLinkClicked}>
              <Link to="/">Home</Link>
            </li>
            {<HiddenLinks />}
          </ul>
        </nav>
      </div>
    </header>
  </div>
);
