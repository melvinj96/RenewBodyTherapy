import React from 'react';
import Hero from './Hero';
import QualificationStrip from './QualificationStrip';
import PartnerBanner from './PartnerBanner';
import AvailabilityBanner from './AvailabilityBanner';
import '../../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <PartnerBanner />
      <AvailabilityBanner />
      <Hero />
      <QualificationStrip />
    </div>
  );
};

export default Home;