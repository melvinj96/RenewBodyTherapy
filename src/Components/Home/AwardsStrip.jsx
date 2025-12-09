import React from 'react';
import { Link } from 'react-router-dom';

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
  <section className="relative bg-gradient-to-br from-primary via-primary/95 to-black py-12 sm:py-16 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-xs sm:text-sm font-primary font-semibold text-secondary uppercase tracking-[0.2em] mb-3">
          Excellence Recognised
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-tertiary font-bold text-white">
          Recognised for Excellence
        </h2>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center">
        {awardLogos.map(({ src, alt, rounded }, idx) => (
          <Link
            key={idx}
            to="/awards"
            className="group relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-secondary/20 transform hover:scale-105 hover:-translate-y-2">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-transparent transition-all duration-300"></div>
              
              <div className="relative flex justify-center items-center">
                <img
                  src={src}
                  alt={alt}
                  className={`w-full h-auto object-contain transition-all duration-300 ${
                    rounded ? 'rounded-full' : 'rounded-lg'
                  } filter drop-shadow-lg group-hover:drop-shadow-2xl group-hover:brightness-110`}
                  style={{
                    maxHeight: '140px',
                  }}
                />
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-10 sm:mt-12 text-center">
        <Link
          to="/awards"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-white/80 hover:text-secondary font-primary transition-colors duration-300 group"
        >
          <span>Learn more about our awards</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default AwardsStrip;