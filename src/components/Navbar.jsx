import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleNavClick = () => {
    const checkbox = document.getElementById('nav-toggle');
    if (checkbox) checkbox.checked = false;
  };

  return (
    <header className="navbar-header">
      <div className="logo">🐾 PetNest</div>

      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>

      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleNavClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/mypets" onClick={handleNavClick}>
              Pets
            </Link>
          </li>
          <li>
            <Link to="/health" onClick={handleNavClick}>
              Health
            </Link>
          </li>
          <li>
            <Link to="/diet" onClick={handleNavClick}>
              Diet
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={handleNavClick}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/adoption" onClick={handleNavClick}>
              Adoption
            </Link>
          </li>
          <li>
            <Link to="/playdates" onClick={handleNavClick}>
              Playdates
            </Link>
          </li>
          <li>
            <Link to="/reminders" onClick={handleNavClick}>
              Reminders
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleNavClick}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
