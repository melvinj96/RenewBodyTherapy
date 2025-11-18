import { useEffect } from 'react';  
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import '../../assets/css/Services.css';

function SportsMassage() {  
  useEffect(() => {
    document.title = 'Sports Massage in Dudley | Renew Body Therapy';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert sports massage in Dudley for pain relief, mobility & recovery | NHS trained therapist | Book your appointment today →');
    }
  }, []);

  return (
    <div>
      <TitleBand title="Renewing Sports Massage in Dudley" />
      <div className="services-container">
        <p>
          Discover our professional sports massage in Dudley, designed to relieve pain, improve mobility, and
          support your recovery. At Renew Body Therapy, we provide targeted, evidence-based treatment for
          athletes, gym goers, manual workers, and anyone experiencing muscular tension or performance-
          related strain. Every session is delivered by an NHS-qualified therapist in our quiet and comfortable
          home-based massage clinic on Bristol Road.
        </p>
        <p>
          As a trusted five-star rated sports massage clinic serving Dudley, Netherton, Stourbridge, and Brierley
          Hill, we combine clinical expertise with personalised hands-on therapy to help you feel and perform at
          your best.
        </p>
        <div className="services-buttons">
          <Link to="/Contact" className="about-btn">Book an appointment</Link>
        </div>

        <h2>Why Choose Our Sports Massage Service?</h2>
        <ul>
          <li>NHS-trained therapist with almost a decade of clinical experience</li>
          <li>Specialist knowledge of muscular function and injury recovery</li>
          <li>Over 180 verified five-star Google reviews from local clients</li>
          <li>Private, quiet home-based clinic for personalised care</li>
          <li>Affordable pricing</li>
          <li>Optional add-ons, including cupping therapy and dry needling</li>
          <li>Tailored treatment to suit your goals and physical demands</li>
        </ul>
        <p>
          <strong>Call:</strong> <a href="tel:07401261289">07401 261289</a> | 
          <strong> Email:</strong> <a href="mailto:jikku2006@gmail.com">jikku2006@gmail.com</a> | 
          <strong> Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Bristol Road, Dudley, DY2 9SF</a>
        </p>
        <div className="services-buttons">
        <Link 
          to="/Contact?service=sports" 
          className="about-btn"
        >
          Contact Us
        </Link>
        </div>

        <h2>What Is Sports Massage?</h2>
        <p>
          Sports massage is a specialised form of massage therapy designed to support physical performance,
          relieve muscular tension, and accelerate recovery. It is ideal for athletes, fitness enthusiasts, and
          individuals who engage in physically demanding activities or repetitive strain through work or training.
        </p>
        <p>
          Sessions help reduce tightness, improve circulation, increase flexibility, and prevent injury. Whether you
          are preparing for an event, recovering after intense training, or seeking maintenance treatment, sports
          massage at Renew Body Therapy is tailored to your needs.
        </p>

        <h2>The Profound Benefits of Sports Massage</h2>
        <p><strong>Reduce Muscular Tension &amp; Pain:</strong> Sports massage targets deep layers of muscle and connective tissue
          to alleviate stubborn tightness, knots, and discomfort.</p>
        <p><strong>Improve Flexibility &amp; Range of Motion:</strong> Regular treatment helps maintain mobility and reduce stiffness,
          allowing you to move more freely.</p>
        <p><strong>Enhance Athletic Performance:</strong> By improving muscle efficiency and reducing tension, sports massage
          supports better performance in training and competition.</p>
        <p><strong>Support Faster Recovery:</strong> Whether post-match, post-workout, or following physical strain, sports
          massage improves circulation and lymphatic drainage to speed up recovery.</p>
        <p><strong>Prevent Injury:</strong> Maintenance sessions help identify imbalances and reduce the risk of repeated strain or
          overuse injuries.</p>

        <h2>What to Expect During Your Session</h2>
        <p>
          Your session takes place in our private home sports massage therapy clinic in Dudley, offering a calm
          and comfortable setting away from busy treatment centres. Every appointment begins with a brief
          consultation to understand your symptoms, training load, lifestyle, and goals.
        </p>
        <p>Your 60 minute treatment includes:</p>
        <ul>
          <li>Assessment of key muscle groups</li>
          <li>Tailored sports massage techniques</li>
          <li>Deep tissue and myofascial release</li>
          <li>Trigger point therapy where needed</li>
          <li>Stretching or mobility guidance</li>
          <li>Aftercare advice to support recovery</li>
        </ul>
        <p><strong>Add ons</strong></p>
        <ul>
          <li>Cupping therapy, £5</li>
          <li>Dry needling addition, £15</li>
        </ul>
        <p>
          These options enhance the therapeutic effect and may be recommended based on your condition.
        </p>

        <h2>When Should You Get a Sports Massage?</h2>
        <p><strong>Pre-Event Sports Massage:</strong> Helps prepare muscles by increasing circulation and flexibility for improved
          performance.</p>
        <p><strong>Post-Event Sports Massage:</strong> Reduces soreness, supports recovery, and helps remove waste products
          from the muscles after intense activity.</p>
        <p><strong>Maintenance Sports Massage:</strong> Regular sessions are ideal for preventing injury, reducing tightness, and
          maintaining overall muscular health.</p>
        <p>
          Clients use maintenance sports massage to stay active, mobile, and as pain-free as possible.
        </p>

        <h2>Who Can Benefit from Sports Massage?</h2>
        <p>
          Although originally designed for athletes, sports massage is suitable for:
        </p>
        <ul>
          <li>Footballers, runners, and gym users</li>
          <li>Manual workers with strain or repetitive use issues</li>
          <li>Individuals with physically demanding jobs</li>
          <li>People living with tension from posture or daily activity</li>
          <li>Those recovering from muscular injuries</li>
        </ul>
        <p>
          If you engage in any level of regular physical activity, sports massage can support your overall
          performance and well-being.
        </p>

        <h2>Why You Can Trust Our Sports Massage Therapist in Dudley</h2>
        <p>
          Our clinic stands apart for its combination of clinical expertise and personalised treatment. With nearly
          ten years of NHS experience in trauma orthopaedics, neurology, respiratory care, and surgery-related
          rehabilitation, Jikku offers a deep understanding of muscular function and recovery.
        </p>
        <ul>
          <li>Honest advice with no pressure to book unnecessary sessions</li>
          <li>Tailored plans to match lifestyle, health needs, and activity level</li>
          <li>Support outside your appointment should you need guidance</li>
          <li>A home-based clinic environment that prioritises comfort and privacy</li>
        </ul>
        <p> 
          <strong>
            For more detailed information about our clinic values and professional background, you can visit our
            <Link to="/about" className="inline-link"> About page</Link>. You can also explore our <Link to="/services" className="inline-link">Services page</Link> to browse our selection of services.
          </strong>
        </p>

        <h3>Frequently Asked Questions</h3>
        <p><strong>How long does a sports massage session last?</strong></p>
        <p>
          Sessions last 60 minutes and include consultation, treatment, and aftercare guidance.
        </p>
        <p><strong>Is sports massage painful?</strong></p>
        <p>
          Some discomfort can occur when working through deep tension or trigger points, however, treatment is
          always carried out at a level that feels safe and manageable for you.
        </p>
        <p><strong>Will sports massage help me recover faster?</strong></p>
        <p>
          Yes, by improving circulation, reducing tightness, and supporting lymphatic drainage, sports massage
          can speed up post-exercise and post-event recovery.
        </p>
        <p><strong>Is this service suitable for beginners or non athletes?</strong></p>
        <p>
          Sports massage benefits anyone who experiences muscular tension, limited mobility, or physical strain.
        </p>

        <h2>Book Your Sports Massage Today</h2>
        <p>
          If you want to relieve muscular tension, improve movement, or boost physical performance, our
          specialist sports massage in Dudley can help you reach your goals.
        </p>
        <p>
          Appointments are offered promptly and tailored to your schedule. Take the next step towards better
          mobility and book your session today.
        </p>
        <p>
          <strong>Call:</strong> <a href="tel:07401261289">07401 261289</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:jikku2006@gmail.com">jikku2006@gmail.com</a>
        </p>
        <p>
          <strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Bristol Road, Dudley, DY2 9SF</a>
        </p>
        <div className="services-buttons">
          <Link to="/Contact" className="about-btn">Book Sports Massage</Link>
        </div>
      </div>
    </div>
  );
}

export default SportsMassage;

