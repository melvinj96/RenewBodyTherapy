import React from 'react';
import Hero from './Hero';
import QualificationStrip from './QualificationStrip';
import '../../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <QualificationStrip />
    </div>
  );
};

export default Home;