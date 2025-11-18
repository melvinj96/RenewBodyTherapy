import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo.png';
import { FaInstagram, FaFacebook, FaTiktok, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubmenu(null); // Close any open submenus when toggling main menu
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Define your navigation structure with sub-pages
  const navItems = [
    { path: '/', label: 'Home' },
    { 
      path: '/about', 
      label: 'About'
    },
    { path: '/team', label: 'Team' },
    { 
      path: '/services', 
      label: 'Services',
      submenu: [
        { path: '/services/sports-massage', label: 'Sports Massage' },
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

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
            {navItems.map((item) => (
              <div key={item.path} className="nav-item-wrapper">
                {item.submenu ? (
                  <>
                    <div 
                      className={`nav-link-with-submenu ${isActive(item.path)}`}
                      onMouseEnter={() => !window.matchMedia('(max-width: 900px)').matches && setOpenSubmenu(item.path)}
                      onMouseLeave={() => !window.matchMedia('(max-width: 900px)').matches && setOpenSubmenu(null)}
                    >
                      <Link 
                        to={item.path} 
                        className={isActive(item.path)}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                      <span 
                        className="submenu-toggle"
                        onClick={() => toggleSubmenu(item.path)}
                      >
                        <FaChevronDown className={openSubmenu === item.path ? 'rotated' : ''} />
                      </span>
                    </div>
                    <ul 
                      className={`submenu ${openSubmenu === item.path ? 'active' : ''}`}
                      onMouseEnter={() => !window.matchMedia('(max-width: 900px)').matches && setOpenSubmenu(item.path)}
                      onMouseLeave={() => !window.matchMedia('(max-width: 900px)').matches && setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link 
                            to={subItem.path} 
                            className={isActive(subItem.path)}
                            onClick={toggleMenu}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className={isActive(item.path)}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="social-media">
            <a href="https://instagram.com/renewtherapies_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/renewbodytherapies" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://tiktok.com/@renewbodytherapy_" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;