import React from 'react';
import '../../assets/css/QualificationStrip.css';

const QualificationStrip = () => {
  return (
    <div className="qualification-strip">
      <div className="qualification-container">
        <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1762856714/hcpc-logo_qfl6nr.png" alt="Health and Care Professions Council" />
        <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1762856714/csp-logo_gmvaq1.png" alt="Chartered Society of Physiotherapy" />
        <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1762856714/rcot-logo_sam5ex.png" alt="Royal College of Occupational Therapists" />
      </div>
    </div>
  );
};

export default QualificationStrip;