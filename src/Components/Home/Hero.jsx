import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      {/* Mobile Video Background */}
      
      {/* <video 
        className="hero-video-mobile" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://res.cloudinary.com/diydpxavd/video/upload/v1749591797/studio_rozdo6.mp4" type="video/mp4" />
        
       Your browser does not support the video tag.
      </video> */}
      
      <div className="hero-content">
        <h1>RENEW BODY THERAPY</h1>
        <div className="specialties">
          <p className="specialists">Award-winning Specialists in</p>
          <h2>MASSAGE THERAPY</h2>
          <h2>OCCUPATIONAL THERAPY</h2>
          <h2>PHYSIOTHERAPY</h2>
        </div>
        <div className="tagline">
          <span className="relax">RELAX</span>
          <span className="renew">RENEW</span>
          <span className="revive">REVIVE</span>
        </div>
        <Link to="/services" className="cta-button">
          View Services
        </Link>
        
      </div>
    </div>
  );
};

export default Hero;