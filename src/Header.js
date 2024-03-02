import React from 'react';
import logo from './OIP.jpg'; // Import the image file
import Nav from './Nav';
import './header.css'; // Import your CSS file

function Header() {
  return (
    <header>
        <div class="header">
            <img src={logo}></img>
            <h2>Little Lemon</h2>
        </div>
    </header>

  );
}

export default Header;
