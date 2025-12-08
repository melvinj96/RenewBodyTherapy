import React, { useEffect } from 'react';
import TitleBand from '../Titleband';

function Awards() {
  useEffect(() => {
    document.title = 'Awards & Recognition | Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Recognized for excellence in massage therapy and rehabilitation | Award-winning clinic in Dudley | See our achievements →');
    }
  }, []);

  const awards = [
    {
      title: "Best Massage Therapist",
      organization: "ThreeBest Rated",
      year: 2025,
      description: "Awarded for exceptional service and client satisfaction.",
      image: "https://res.cloudinary.com/diydpxavd/image/upload/v1762855584/massage_therapists-dudley-2025-drk_wnwhdz.svg"
    },
    {
      title: "West Midlands Massage Therapy Practitioner of the Year",
      organization: "Prestige Awards",
      year: 2024,
      description: "Recognized for outstanding client care and innovative therapy solutions.",
      image: "https://res.cloudinary.com/diydpxavd/image/upload/v1750717311/prestige_award1_g1mu9m.jpg"
    },
    {
      title: "Best Massage Therapist",
      organization: "ThreeBest Rated",
      year: 2024,
      description: "Awarded for exceptional service and client satisfaction.",
      image: "https://res.cloudinary.com/diydpxavd/image/upload/v1749591659/threebest-award-2024_bs3xkf.png"
    }
  ];

  return (
    <div>
      <TitleBand title="Awards & Recognition" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base font-primary font-semibold text-secondary uppercase tracking-wider mb-4">
              Excellence Recognized
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-tertiary font-bold text-primary mb-4">
              Awards & Recognition
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We are honored to be recognized for our commitment to excellence in massage therapy and rehabilitation services.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary/30 transform hover:-translate-y-2"
              >
                {/* Award Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {award.year}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-tertiary font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {award.title}
                    </h3>
                    <p className="text-sm font-primary font-semibold text-secondary uppercase tracking-wide">
                      {award.organization}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-tertiary font-bold text-primary mb-4">
                Committed to Excellence
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                These awards reflect our dedication to providing exceptional care and outstanding results for every client. 
                We are grateful for the recognition and remain committed to maintaining the highest standards in massage therapy and rehabilitation services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;

