import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default () => (
  <footer className="footer" role="contentinfo">
    <p>
      <span className="font-md margin-horizontal-xsm">
        <a className="nostyle-link nostyle-visited" href="mailto:nicomele1@gmail.com"><FontAwesomeIcon icon={["far", "envelope"]} /></a>
      </span>
      <span className="font-md margin-horizontal-xsm">
        <a className="nostyle-link nostyle-visited" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicomele/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
      </span>
      <span className="font-md margin-horizontal-xsm">
        <a className="nostyle-link nostyle-visited" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nicoapples/"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
      </span>
    </p>
    <hr />
    <p>Designed with <span role="img" aria-label="love">♥️</span> by Nico Mele. Coded by <a className="nostyle-link nostyle-visited" href="https://www.github.com/twillzy">twillzy</a>.</p>
  </footer >
);
