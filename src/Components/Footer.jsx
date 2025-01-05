import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-title">
          <h3>Renew Body Therapy</h3>
        </div>
        
        <div className="footer-contact">
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>

        <div className="footer-copyright">
          <p>©{currentYear} by Renew Body Therapy. Created by {' '}
            <a 
              href="https://bedford.digital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="agency-link"
            >
              Digital Apex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;