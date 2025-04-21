import React from 'react';
import '../../assets/css/Home.css';
import logo from '../../assets/images/bupa_logo.png';

const PartnerBanner = () => {
  return (
    <div className="partner-banner">
      PROUDLY PARTNERED WITH
      <img src={logo} alt="Partner Logo" className="partner-logo" />
    </div>
  );
};

export default PartnerBanner;