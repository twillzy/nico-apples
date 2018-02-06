import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/documents/nico-resume.pdf';

export default () => <footer className="footer" role="contentinfo">
  <div className="footer-links">
    <ul>
      <li><h3>Content</h3></li>
      <li><Link to="/case-studies">Case Studies</Link></li>
      <li><Link to="/about">About</Link></li>
      <li className="nav-link"><a href={resume} target="_blank">Resume</a></li>
    </ul>
    <ul>
      <li><h3>Follow Me</h3></li>
      <li><a href="https://www.instagram.com/nicoapples/">Instagram</a></li>
      <li><a href="https://www.linkedin.com/in/nicomele/">LinkedIn</a></li>
    </ul>
  </div>
  <hr />
  <p>Made with <span role="img" aria-label="love">♥️</span> by Nico Mele. Coded by twillzy.</p>
</footer>
