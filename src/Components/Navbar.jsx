import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaInstagram, FaFacebook, FaTiktok, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setOpenSubmenu(null);
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    document.body.style.overflow = 'unset';
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
        { path: '/services/deep-tissue-massage', label: 'Deep Tissue Massage' },
        { path: '/services/swedish-massage', label: 'Swedish Massage' },
        { path: '/services/acupuncture-dry-needling', label: 'Dry Needling' },
        { path: '/services/stroke-rehabilitation', label: 'Stroke Rehabilitation' },
        { path: '/services/falls-intervention', label: 'Falls Intervention' },
        { path: '/services/post-hospital-rehabilitation', label: 'Post-Hospital Rehabilitation' },
        { path: '/services/respiratory-rehabilitation', label: 'Respiratory & Long Covid Rehab' },
        { path: '/services/mobile-physiotherapy', label: 'Mobile Physiotherapy' },
        { path: '/services/occupational-therapy', label: 'Occupational Therapy' },
        { path: '/services/vitamin-b12', label: 'Vitamin B12 Injections' },
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/awards', label: 'Awards' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#11111F] backdrop-blur-md shadow-lg' 
          : 'bg-[#11111F] backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center z-50 group"
            onClick={closeMenu}
          >
            <img 
              src={logo} 
              alt="RBT Logo" 
              className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <div 
                  key={item.path} 
                  className="relative group"
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.path)}
                  onMouseLeave={() => item.submenu && setOpenSubmenu(null)}
                >
                  {item.submenu ? (
                    <>
                      <Link
                        to={item.path}
                        className={`relative px-3 py-2 text-sm font-primary font-medium transition-all duration-300 ${
                          isActive(item.path)
                            ? 'text-white'
                            : 'text-secondary hover:text-white'
                        }`}
                      >
                        {item.label}
                        {isActive(item.path) && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                        )}
                      </Link>
                      
                      {/* Submenu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
                          openSubmenu === item.path
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-3 text-sm font-primary transition-all duration-200 ${
                              isActive(subItem.path)
                                ? 'bg-secondary/10 text-secondary font-semibold'
                                : 'text-primary hover:bg-secondary/5 hover:text-secondary'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 text-sm font-primary font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-white'
                          : 'text-secondary hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive(item.path) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transition-all duration-300"></span>
                      )}
                      {!isActive(item.path) && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
              <a
                href="https://instagram.com/renewtherapies_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/renewbodytherapies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@renewbodytherapy_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-secondary hover:text-white transition-colors duration-300 z-50 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-20 bg-black/50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
      
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-20 w-full bg-[#11111F] backdrop-blur-md z-50 overflow-y-auto transition-all duration-300 ease-in-out max-h-[calc(100vh-5rem)] ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.path} className="border-b border-white/10 pb-4 last:border-0">
                {item.submenu ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`text-lg font-primary font-medium ${
                          isActive(item.path) ? 'text-white' : 'text-secondary'
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => toggleSubmenu(item.path)}
                        className="text-secondary p-2"
                      >
                        <FaChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openSubmenu === item.path ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSubmenu === item.path ? 'max-h-96 mt-4' : 'max-h-0'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={closeMenu}
                          className={`block py-3 pl-6 text-base font-primary rounded-lg transition-all duration-200 ${
                            isActive(subItem.path)
                              ? 'bg-secondary/20 text-secondary font-semibold'
                              : 'text-white/80 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block text-lg font-primary font-medium transition-colors duration-300 ${
                      isActive(item.path) ? 'text-white' : 'text-secondary hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Social Media */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/10">
              <a
                href="https://instagram.com/renewtherapies_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/renewbodytherapies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@renewbodytherapy_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;