import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapComponent from '../Shared/GoogleMapComponent';

const HomeContent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view, play it
            video.play().catch((error) => {
              // Handle autoplay restrictions
              console.log('Autoplay prevented:', error);
            });
          } else {
            // Video is out of view, pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-tertiary font-bold text-primary mb-6">
              Restore, Relax &amp; Rehabilitate
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Renew Body Therapy Massage in Dudley
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                At Renew Body Therapy, we help you relax, recover, and restore movement through expert, evidence-based treatments delivered by an NHS-qualified therapist. From sports massage and dry needling at our comfortable clinic to in-home occupational therapy and rehabilitation support, we're here to help you feel your best again.
              </p>
              <p>
                We offer high-quality massage services in Dudley at our clinic on Bristol Road, with mobile appointments available to clients in Stourbridge, Netherton, and Brierley Hill. We combine professional care with a personal touch, helping you move better, heal faster, and reduce daily pain and discomfort.
              </p>
              <p>
                Call <a href="tel:07401261289" className="text-secondary hover:underline font-semibold">07401 261289</a> or book your appointment online today.
              </p>
              <div className="pt-4">
                <Link
                  to="/Contact"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/diydpxavd/video/upload/v1764974111/video_al2iwc.mp4"
                  poster="https://res.cloudinary.com/diydpxavd/image/upload/v1749591797/studio_rozdo6.jpg"
                  playsInline
                  controls
                  controlsList="nodownload nofullscreen noremoteplayback"
                  loop
                  muted
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full max-w-[350px] aspect-[9/16] rounded-2xl cursor-pointer"
                  title="Preview of Renew Body Therapy Clinic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Why Choose Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8 text-center">
            Why Choose Renew Body Therapy
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">NHS-qualified therapist with years of hands-on healthcare experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">Flexible appointment times, including evenings and weekends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">Home-based clinic; private, quiet, and fully equipped for comfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">In-home visits available for occupational therapy and rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">Trusted by Bupa and local medical professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">5-star local reputation built on genuine results and patient care</span>
                  </li>
                </ul>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  We are here to help every client restore balance, confidence, and quality of life through expert, individualised care.
                </p>
                <a 
                  href="https://www.google.com/search?sca_esv=a8d30f993b93fd1a&rlz=1C1RXQR_enGB1161GB1161&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8v7tuwQ1SN1OSFea7N6qmsQyLIKecvHR_gpj1fx4HuxYJ9pBB02IW2t9s-xKJop1HFQVuuz0aREE_jlWD7uFSr_rO8VG7hXfc30fefoxLC6G1JlQg%3D%3D&q=Renew+Body+Therapy+Reviews&sa=X&ved=2ahUKEwiZiOnkhe-QAxU-QEEAHbqjB_YQ0bkNegQIIRAE&biw=1920&bih=953&dpr=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Read Our Reviews
                </a>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1762856584/massage_therapists-dudley-2025-drk_wnwhdz.svg" 
                  alt="Massage Therapists Dudley 2025"
                  className="max-w-[400px] w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expert Care Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8 text-center">
            Expert Care for Pain Relief, Recovery &amp; Well-being
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg" 
                alt="Expert Care"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                At Renew Body Therapy, we understand that every client's needs are unique. Whether you're an athlete recovering from injury, managing long-term pain, or rebuilding strength after surgery, we provide a tailored approach to help you reach your goals.
              </p>
              <p>
                Our treatments are trusted by local residents, NHS professionals, and private clients alike for their proven results, compassionate care, and outstanding value.
              </p>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8 text-center">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Each treatment plan is personalised to suit your condition, lifestyle, and recovery goals. Specialising in massage therapy in Dudley, we also offer a range of rehabilitation services, available both in-house and on a mobile basis.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Sports Massage</strong> - Targeted deep tissue techniques to relieve muscle tension, prevent injury, and boost performance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Dry needling</strong> - Traditional and dry-needling therapies to reduce pain, improve circulation, and promote healing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Occupational Therapy</strong> - In-home rehabilitation and mobility support for clients recovering from surgery, illness, or injury.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Physiotherapy</strong> - Hands-on care and guided exercises for physical recovery, provided by our qualified team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Deep Tissue Massage</strong> - Ideal for chronic tension, neck and back pain, or postural strain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Post-Hospital Rehabilitation</strong> - Supporting safe recovery at home following surgery or hospital discharge.</span>
                </li>
              </ul>
              <p>
                Every session is carried out by our experienced, fully insured massage therapist in Dudley, with a focus on safety, comfort, and measurable improvement.
              </p>
              <p>
                Book a session at our clinic or at your home today and experience the difference personalised therapy can make.
              </p>
              <div className="pt-4">
                <Link
                  to="/Contact"
                  className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg" 
                alt="Our Services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8 text-center">
            Supporting the Local Community
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg" 
                alt="Supporting the Community"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Our massage clinic in Dudley (DY2) is easily accessible from Netherton, Stourbridge, Sedgley, Cradley Heath, and Brierley Hill.
              </p>
              <p>
                We're proud to support local people of all ages, from young athletes and manual workers to retired clients regaining mobility and independence.
              </p>
              <p>
                Whether you're looking for a one-off sports massage or ongoing rehabilitation, we're your trusted partner in recovery and wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl text-secondary font-serif mb-4 leading-none">"</div>
              <p className="text-gray-700 leading-relaxed italic">
                I recently had a massage after experiencing shoulder and back pain for the past couple of weeks and it was incredible! I immediately felt the relief and it worked wonders for my pain! Jikku made sure to tailor the treatment specifically to my needs and that he targeted the exact area of discomfort. I would highly recommend for anyone seeking effective pain relief as well as a relaxing experience!
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl text-secondary font-serif mb-4 leading-none">"</div>
              <p className="text-gray-700 leading-relaxed italic">
                First time ever having a massage and was made to feel so comfortable and relaxed from the very start. The music was calming, the room was warm, lighting and scents were not overpowering at all and his hands were simply magic! I have had back pain for a few weeks now and pretty much instantly i could feel a difference. 'Look, I can move' was the first thing i said to my partner as i came home. The massage was amazing. Perfect amount of pressure applied and I feel great. So I highly recommend him and I will be making this my monthly treat now 😊
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl text-secondary font-serif mb-4 leading-none">"</div>
              <p className="text-gray-700 leading-relaxed italic">
                Very professional and excellent service. Had a full body swedish massage. It was really refreshing and energising. I recommend it to anyone looking for a massage.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            At Renew Body Therapy, we put your health and recovery front and centre. Whether you're looking to ease everyday stress, bounce back from an injury, or regain your strength after surgery, we're here to guide you through it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/Contact"
              className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="tel:07401261289"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white transition-all duration-300"
            >
              Call: 07401 261289
            </a>
          </div>
          <div className="pt-8 border-t border-white/20 text-sm space-y-2">
            <p><strong>Email:</strong> <a href="mailto:jikku2006@gmail.com" className="underline hover:opacity-80">jikku2006@gmail.com</a></p>
            <p><strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Renew Body Therapy, Bristol Road, Dudley, DY2 9SF</a></p>
            <p className="mt-4 opacity-90">We respond to all messages promptly and always aim to fit you in as soon as possible.</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <GoogleMapComponent height="400px" zoom={13} />
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-12">
          <p className="text-gray-600">
            Follow us on:{' '}
            <a href="https://facebook.com/renewbodytherapies" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-semibold">Facebook</a>
            {' | '}
            <a href="https://instagram.com/renewtherapies_" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-semibold">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;

