import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/AwardsStrip.css';

const awardLogos = [
  {
    src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762855584/massage_therapists-dudley-2025-drk_wnwhdz.svg',
    alt: 'Massage Therapy Practitioner Award 2025',
    rounded: true,
  },
  {
    src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762856587/threebest-award-2024_wcorns.png',
    alt: 'Three Best Rated Excellence Award 2024',
    rounded: false,
  },
  {
    src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762856586/prestige_award_az06fq.png',
    alt: 'Massage Therapy Practitioner Award 2024',
    rounded: true,
  },
];

const AwardsStrip = () => (
  <section className="awards-strip">
    <div className="awards-strip__content">
      <p className="awards-strip__title">Recognised for Excellence</p>
      <div className="awards-strip__logos">
        {awardLogos.map(({ src, alt, rounded }, idx) => (
          <Link
            key={idx}
            to="/about#awards-section"
            className={`awards-strip__logo-link${rounded ? ' rounded' : ''}`}
          >
            <img src={src} alt={alt} className="awards-strip__logo" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsStrip;