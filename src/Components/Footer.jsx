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
          <p className="phone-item">
            <a href="tel:01384437111" className="phone-number">
              07401261280
            </a>
          </p>

        <div className="footer-copyright">
          <p>©{currentYear} by Renew Body Therapy. Created by {' '}
              Digital Apex
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;