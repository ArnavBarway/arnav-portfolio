import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">Arnav Barway</div>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;
