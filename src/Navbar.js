import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">WeConnect</a>
        <ul className="navbar-menu">
          <li className="navbar-menu-item active"><a href="/">Home</a></li>
          <li className="navbar-menu-item"><a href="/about">About</a></li>
          <li className="navbar-menu-item"><a href="/services">Services</a></li>
          <li className="navbar-menu-item"><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
