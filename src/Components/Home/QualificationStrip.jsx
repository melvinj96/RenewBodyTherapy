import React from 'react';

const QualificationStrip = () => {
  const qualifications = [
    {
      src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762856714/hcpc-logo_qfl6nr.png',
      alt: 'Health and Care Professions Council',
    },
    {
      src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762856714/csp-logo_gmvaq1.png',
      alt: 'Chartered Society of Physiotherapy',
    },
    {
      src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762856714/rcot-logo_sam5ex.png',
      alt: 'Royal College of Occupational Therapists',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base font-primary font-semibold text-gray-600 uppercase tracking-wider mb-2">
            Accredited & Certified
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-tertiary font-bold text-primary">
            Professional Qualifications
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-center">
          {qualifications.map((qual, index) => (
            <div
              key={index}
              className="group flex justify-center items-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-secondary/20"
            >
              <img
                src={qual.src}
                alt={qual.alt}
                className="max-h-16 sm:max-h-20 md:max-h-24 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-primary">
            Fully registered and regulated healthcare professionals
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualificationStrip;