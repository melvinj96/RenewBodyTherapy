import React from 'react';
import Hero from './Hero';
import QualificationStrip from './QualificationStrip';
import PartnerBanner from './PartnerBanner';
import AvailabilityBanner from './AvailabilityBanner';
import AwardsStrip from './AwardsStrip';
import '../../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <PartnerBanner />
      <AvailabilityBanner />
      <Hero />
      <AwardsStrip />
      <QualificationStrip />
    </div>
  );
};

export default Home;