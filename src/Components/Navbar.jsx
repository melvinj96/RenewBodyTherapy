import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo.png';
import { FaInstagram, FaFacebook, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="RBT Logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-content ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/" className={isActive('/')} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className={isActive('/about')} onClick={toggleMenu}>
              About
            </Link>
            <Link to="/team" className={isActive('/team')} onClick={toggleMenu}>
              Meet the Team
            </Link>
            <Link to="/services" className={isActive('/services')} onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/gallery" className={isActive('/gallery')} onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/testimonials" className={isActive('/testimonials')} onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link to="/contact" className={isActive('/contact')} onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          <div className="social-media">
            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://tiktok.com/@your-handle" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;