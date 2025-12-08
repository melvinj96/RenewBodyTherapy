import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(17, 17, 31, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%), url('https://res.cloudinary.com/diydpxavd/image/upload/v1762857137/massage_table_endsdn.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-black/30 to-primary/40"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content with Glassmorphism */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8 sm:p-12 lg:p-16 animate-fade-in-up">
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-tertiary font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-light to-accent-orange mb-6 text-center leading-tight tracking-tight">
            RENEW BODY THERAPY
          </h1>
          
          {/* Subtitle */}
          <p className="text-center text-white/80 text-sm sm:text-base md:text-lg font-primary font-medium mb-8 tracking-[0.2em] uppercase">
            Award-winning Specialists in
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-secondary/50">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-tertiary font-semibold text-white text-center">
                MASSAGE THERAPY
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-secondary/50">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-tertiary font-semibold text-white text-center">
                OCCUPATIONAL THERAPY
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-secondary/50">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-tertiary font-semibold text-white text-center">
                PHYSIOTHERAPY
              </h2>
            </div>
          </div>
          
          {/* Tagline with modern styling */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10">
            <span className="text-2xl sm:text-3xl md:text-4xl font-secondary font-bold text-accent-green drop-shadow-lg">
              RELAX
            </span>
            <span className="text-white/40 text-2xl">•</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-secondary font-bold text-secondary drop-shadow-lg">
              RENEW
            </span>
            <span className="text-white/40 text-2xl">•</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-secondary font-bold text-accent-blue drop-shadow-lg">
              REVIVE
            </span>
          </div>
          
          {/* Modern CTA Button */}
          <div className="flex justify-center">
            <Link 
              to="/services" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-secondary to-secondary-light rounded-full shadow-lg shadow-secondary/50 hover:shadow-xl hover:shadow-secondary/70 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Services
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-primary uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;