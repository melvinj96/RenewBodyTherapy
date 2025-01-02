import React from 'react';
import '../../assets/css/QualificationStrip.css';
import hcpcLogo from '../../assets/images/hcpc-logo.png';
import cspLogo from '../../assets/images/csp-logo.png';
import rcotLogo from '../../assets/images/rcot-logo.png';

const QualificationStrip = () => {
  return (
    <div className="qualification-strip">
      <div className="qualification-container">
        <img src={hcpcLogo} alt="Health and Care Professions Council" />
        <img src={cspLogo} alt="Chartered Society of Physiotherapy" />
        <img src={rcotLogo} alt="Royal College of Occupational Therapists" />
      </div>
    </div>
  );
};

export default QualificationStrip;