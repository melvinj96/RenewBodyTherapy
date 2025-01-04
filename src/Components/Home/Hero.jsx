import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Hero.css';
import awardImage from '../../assets/images/threebest-award-2024.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>RENEW BODY THERAPY</h1>
        <div className="specialties">
          <p className="specialists">Specialists in</p>
          <h2>Massage Therapy</h2>
          <h2>Occupational Therapy</h2>
          <h2>Physiotherapy</h2>
        </div>
        <div className="tagline">
          <span className="relax">Relax</span>
          <span className="renew">Renew</span>
          <span className="revive">Revive</span>
        </div>
        <Link to="/services" className="cta-button">
          View Services
        </Link>
        <div className="award-badge">
          <img 
            src={awardImage} 
            alt="Three Best Rated Excellence Award 2024" 
            className="award-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;