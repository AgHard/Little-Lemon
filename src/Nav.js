// Nav.js
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Reserve</Link></li>
        </ul>
      </nav>
  );
}

export default Nav;
