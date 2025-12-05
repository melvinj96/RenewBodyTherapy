import React, { useEffect } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';
import QualificationStrip from './QualificationStrip';
import PartnerBanner from './PartnerBanner';
import AvailabilityBanner from './AvailabilityBanner';
import AwardsStrip from './AwardsStrip';
import '../../assets/css/Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Rehabilitation Massage in Dudley | Renew Body Therapy';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional massage, dry needling & rehabilitation in Dudley | Expert NHS-qualified therapist helping you recover, relax & move better →');
    }
  }, []);

  return (
    <div className="home">
      <PartnerBanner />
      <AvailabilityBanner />
      <Hero />
      <HomeContent />
      <AwardsStrip />
      <QualificationStrip />
    </div>
  );
};

export default Home;