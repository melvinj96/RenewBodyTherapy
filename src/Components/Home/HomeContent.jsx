import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapComponent from '../Shared/GoogleMapComponent';
import '../../assets/css/Home.css';

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
    <div className="home-content-section">
      <div className="home-content-container">
        <h1>Restore, Relax &amp; Rehabilitate - Renew Body Therapy Massage in Dudley</h1>
        <div className="home-intro-section">
          <div className="home-intro-text">
            <p>
              At Renew Body Therapy, we help you relax, recover, and restore movement through expert, evidence-based treatments delivered by an NHS-qualified therapist. From sports massage and dry needling at our comfortable clinic to in-home occupational therapy and rehabilitation support, we're here to help you feel your best again.
            </p>
            <p>
              We offer high-quality massage services in Dudley at our clinic on Bristol Road, with mobile appointments available to clients in Stourbridge, Netherton, and Brierley Hill. We combine professional care with a personal touch, helping you move better, heal faster, and reduce daily pain and discomfort.
            </p>
            <p>
              Call <a href="tel:07401261289">07401 261289</a> or book your appointment online today.
            </p>
          </div>
          <div className="home-intro-image">
            <div className="home-intro-video-wrapper">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/diydpxavd/video/upload/v1764974111/video_al2iwc.mp4"
                className="home-intro-video"
                poster="https://res.cloudinary.com/diydpxavd/image/upload/v1749591797/studio_rozdo6.jpg"
                playsInline
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                loop
                muted
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  aspectRatio: '9/16',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.13)'
                }}
                title="Preview of Renew Body Therapy Clinic"
              />
            </div>
          </div>
        </div>
        <div className="home-content-buttons">
          <Link to="/Contact" className="about-btn">Book Today</Link>
        </div>

        <h2>Why Choose Renew Body Therapy</h2>
        <div className="home-content-with-image reverse-on-mobile">
          <div className="home-content-text">
            <ul>
              <li>NHS-qualified therapist with years of hands-on healthcare experience</li>
              <li>Flexible appointment times, including evenings and weekends</li>
              <li>Home-based clinic; private, quiet, and fully equipped for comfort</li>
              <li>In-home visits available for occupational therapy and rehabilitation</li>
              <li>Trusted by Bupa and local medical professionals</li>
              <li>5-star local reputation built on genuine results and patient care</li>
            </ul>
            <p>
              We are here to help every client restore balance, confidence, and quality of life through expert, individualised care.
            </p>
            <div className="home-content-buttons">
              <a 
                href="https://www.google.com/search?sca_esv=a8d30f993b93fd1a&rlz=1C1RXQR_enGB1161GB1161&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8v7tuwQ1SN1OSFea7N6qmsQyLIKecvHR_gpj1fx4HuxYJ9pBB02IW2t9s-xKJop1HFQVuuz0aREE_jlWD7uFSr_rO8VG7hXfc30fefoxLC6G1JlQg%3D%3D&q=Renew+Body+Therapy+Reviews&sa=X&ved=2ahUKEwiZiOnkhe-QAxU-QEEAHbqjB_YQ0bkNegQIIRAE&biw=1920&bih=953&dpr=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="about-btn"
              >
                Read Our Reviews
              </a>
            </div>
          </div>
          <div className="home-content-image">
            <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1762856584/massage_therapists-dudley-2025-drk_wnwhdz.svg" alt="Massage Therapists Dudley 2025" />
          </div>
        </div>

        <h2>Expert Care for Pain Relief, Recovery &amp; Well-being</h2>
        <div className="home-content-with-image">
          <div className="home-content-text">
            <p>
              At Renew Body Therapy, we understand that every client's needs are unique. Whether you're an athlete recovering from injury, managing long-term pain, or rebuilding strength after surgery, we provide a tailored approach to help you reach your goals.
            </p>
            <p>
              Our treatments are trusted by local residents, NHS professionals, and private clients alike for their proven results, compassionate care, and outstanding value.
            </p>
          </div>
          <div className="home-content-image">
            <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg" alt="Expert Care" />
          </div>
        </div>

        <h2>Our Core Services</h2>
        <div className="home-services-section">
          <div className="home-services-text">
            <p>
              Each treatment plan is personalised to suit your condition, lifestyle, and recovery goals. Specialising in massage therapy in Dudley, we also offer a range of rehabilitation services, available both in-house and on a mobile basis.
            </p>
            <ul>
              <li><strong>Sports Massage</strong> - Targeted deep tissue techniques to relieve muscle tension, prevent injury, and boost performance.</li>
              <li><strong>Dry needling</strong> - Traditional and dry-needling therapies to reduce pain, improve circulation, and promote healing.</li>
              <li><strong>Occupational Therapy</strong> - In-home rehabilitation and mobility support for clients recovering from surgery, illness, or injury.</li>
              <li><strong>Physiotherapy</strong> - Hands-on care and guided exercises for physical recovery, provided by our qualified team.</li>
              <li><strong>Deep Tissue Massage</strong> - Ideal for chronic tension, neck and back pain, or postural strain.</li>
              <li><strong>Post-Hospital Rehabilitation</strong> - Supporting safe recovery at home following surgery or hospital discharge.</li>
            </ul>
            <p>
              Every session is carried out by our experienced, fully insured massage therapist in Dudley, with a focus on safety, comfort, and measurable improvement.
            </p>
            <p>
              Book a session at our clinic or at your home today and experience the difference personalised therapy can make.
            </p>
          </div>
          <div className="home-services-image">
            <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg" alt="Our Services" />
          </div>
        </div>
        <div className="home-content-buttons">
          <Link to="/Contact" className="about-btn">Book an Appointment</Link>
        </div>

        <h2>Supporting the Local Community</h2>
        <div className="home-community-section">
          <div className="home-community-image">
            <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg" alt="Supporting the Community" />
          </div>
          <div className="home-community-text">
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

        <h2>What Our Clients Say</h2>
        <div className="home-testimonials-section">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                I recently had a massage after experiencing shoulder and back pain for the past couple of weeks and it was incredible! I immediately felt the relief and it worked wonders for my pain! Jikku made sure to tailor the treatment specifically to my needs and that he targeted the exact area of discomfort. I would highly recommend for anyone seeking effective pain relief as well as a relaxing experience!
              </p>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                First time ever having a massage and was made to feel so comfortable and relaxed from the very start. The music was calming, the room was warm, lighting and scents were not overpowering at all and his hands were simply magic! I have had back pain for a few weeks now and pretty much instantly i could feel a difference. 'Look, I can move' was the first thing i said to my partner as i came home. The massage was amazing. Perfect amount of pressure applied and I feel great. So I highly recommend him and I will be making this my monthly treat now 😊
              </p>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">
                Very professional and excellent service. Had a full body swedish massage. It was really refreshing and energising. I recommend it to anyone looking for a massage.
              </p>
            </div>
          </div>
        </div>

        <h2>Book Your Appointment</h2>
        <p>
          At Renew Body Therapy, we put your health and recovery front and centre. Whether you're looking to ease everyday stress, bounce back from an injury, or regain your strength after surgery, we're here to guide you through it all. As a trusted rehabilitation expert and massage therapist in Dudley, we blend professional care, clinical know-how, and heartfelt compassion to help you move confidently again. Schedule your appointment today and take that first step toward a more active, comfortable life.
        </p>
        <p>
          <strong>Call:</strong> <a href="tel:07401261289">07401 261289</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:jikku2006@gmail.com">jikku2006@gmail.com</a>
        </p>
        <p>
          <strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Renew Body Therapy, Bristol Road, Dudley, DY2 9SF</a>
        </p>
        <p>
          We respond to all messages promptly and always aim to fit you in as soon as possible.
        </p>
        <div className="home-content-buttons">
          <Link to="/Contact" className="about-btn">Book Appointment</Link>
        </div>
        <div className="home-map-container">
          <GoogleMapComponent height="400px" zoom={13} />
        </div>
        <p>
          Follow us on: <a href="https://facebook.com/renewbodytherapies" target="_blank" rel="noopener noreferrer">Facebook</a> | <a href="https://instagram.com/renewtherapies_" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>
    </div>
  );
};

export default HomeContent;

