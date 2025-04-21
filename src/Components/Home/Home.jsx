import React from 'react';
import Hero from './Hero';
import QualificationStrip from './QualificationStrip';
import PartnerBanner from './PartnerBanner';
import '../../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <PartnerBanner />
      <Hero />
      <QualificationStrip />
    </div>
  );
};

export default Home;