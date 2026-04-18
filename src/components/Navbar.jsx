import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#top">VS.</a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
