import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import '../../assets/css/Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Rehabilitation & Massage in Dudley | Renew Body Therapy';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our full range of massage, dry needling & rehab services | Tailored care for pain relief & recovery in Dudley | Enquire today →');
    }
  }, []);

  const services = [
    {
      title: "DEEP TISSUE MASSAGE",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
      prices: [
        "Full Body (60 mins) - £45",
        "Additional Service - Accupuncture  - £15"
      ],
      description: `<p>This treatment focuses on releasing chronic muscular tension, alleviating tightness, and addressing deeper layers of soft tissue. It is ideal for clients with ongoing back, neck, or shoulder pain, or for individuals dealing with stress-related muscular tightness.</p><p>Sessions are delivered in our home clinic, providing a quiet environment that allows for complete relaxation while still delivering focused therapeutic work.</p>`,
      selectValue: "deep-tissue"
    },
    {
      title: "SWEDISH MASSAGE",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg',
      prices: [
        "Full Body (60 mins) - £40"
      ],
      description: `<p>Swedish massage is a gentle and relaxing treatment designed to improve circulation, reduce stress, and support overall well-being. It is suitable for all ages and is an excellent choice for clients seeking a calming and restorative session.</p>`,
      selectValue: "swedish"
    },
    {
      title: "SPORTS MASSAGE",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
      prices: [
        "60 mins - £45",
        "Additional Service - Cupping - £5",
        "Additional Service - Accupuncture  - £15"
      ],
      description: `<p>Sports massage targets specific muscle groups to support recovery, enhance mobility, and prevent injury. It is ideal for athletes, gym goers, or anyone managing activity related tension.</p><p><strong>Add ons:</strong></p><ul><li>Cupping therapy</li><li>Dry needling or acupuncture style treatment</li></ul>`,
      selectValue: "sports"
    },    
    {
      title: "STROKE REHABILITATION",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591762/stroke-rehab_vr4xvi.jpg',
      prices: [
        "60 mins - £55"
      ],
      description: `<p>Our stroke rehabilitation sessions provide specialist support to help clients rebuild strength, coordination, and independence following a stroke. With years of NHS experience in neurology and stroke services, we offer practical and effective treatment plans tailored to each patient's capabilities and goals.</p>`,
      selectValue: "stroke-rehab"
    },
    {
      title: "FALLS INTERVENTION",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591750/falls-intervention_itquxi.jpg',
      prices: [
        "60 mins - £55"
      ],
      description: `<p>Designed for individuals at risk of falls or those recovering from mobility-related incidents, this service focuses on improving balance, confidence, and functional movement. It is especially valuable for older adults or clients recovering from illness or injury.</p>`,
      selectValue: "falls-intervention"
    },
    {
      title: "POST HOSPITAL DISCHARGE REHABILITATION",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg',
      prices: [
        "60 mins - £55"
      ],
      description: `<p>For clients returning home after surgery, illness, or prolonged hospital admission, structured rehabilitation is essential for safe recovery. We provide step-by-step guidance, mobility training, and personalised exercise plans to support a gradual and confident return to daily activities.</p>`,
      selectValue: "post-hospital-rehab"
    },
    {
      title: "RESPIRATORY/LONG COVID REHABILITATION",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591758/respiratory-rehab_mzccnt.jpg',
      prices: [
        "60 mins - £55"
      ],
      description: `<p>These sessions support clients experiencing ongoing breathing difficulties, fatigue, or reduced physical capacity following respiratory illness or Long Covid. Treatment includes functional rehabilitation, pacing guidance, and safe strengthening exercises.</p>`,
      selectValue: "respiratory-rehab"
    },
    {
      title: "MOBILE PHYSIOTHERAPY",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
      prices: [
        "60 mins - £55"
      ],
      description: `<p>Our mobile physiotherapy services in Dudley and the nearby areas are available for clients who cannot travel due to mobility limitations, health concerns, or recovery needs. Sessions are delivered in the comfort of your home by a qualified physiotherapist who partners with our clinic.</p>`,
      selectValue: "physio"
    },
    {
      title: "OCCUPATIONAL THERAPY",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg',
      prices: [
          "60 mins - £55"
      ],
      description: `<p>With nearly ten years of NHS occupational therapy experience, we provide expert in-home OT services including mobility support, functional assessments, post-injury rehabilitation, and personalised exercise plans. This service is ideal for clients recovering from fractures, surgery, or long-term conditions affecting daily life.</p>`,
      selectValue: "occupational"
    },
    {
        title: "VITAMIN B12 INJECTIONS",
        image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591765/vitamin-b12_njshpz.jpg',
        prices: [
            "£25"
        ],
        description: `<p>Vitamin B12 injections help support energy levels and overall well-being for individuals with low B12 levels. This service is delivered safely and professionally at our home clinic.</p>`,
        selectValue: "vitamin-b12"
    },
    {
      title: "ACUPUNCTURE/DRY NEEDLING",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
      prices: [
        "£45"
      ],
      description: `<p>Dry needling is used to reduce muscle tightness, improve circulation, and relieve pain. It can be offered as a standalone service or combined with massage therapy.</p>`,
      selectValue: "acupuncture"
    }
];

  const handleBook = (service) => {
    console.log(service);
    navigate(`/contact?service=${encodeURIComponent(service.selectValue)}`);
  };

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <TitleBand 
        title="Massage &amp; Rehabilitation Services in Dudley" 
        />
      <div className="services-container">
        <p>
          Welcome to Renew Body Therapy, your trusted local clinic for massage, dry needling, physiotherapy,
          and rehabilitation services in Dudley. We provide high-quality, clinically informed treatments designed
          to reduce pain, improve mobility, and support long-term health. Whether you need targeted muscular
          treatment, post-hospital rehabilitation, or structured recovery after injury or illness, our services are
          tailored to you.
        </p>
        <p>
          Our home-based clinic on Bristol Road offers a private, calm, and comfortable setting that allows for
          personalised care without the stress of clinical waiting rooms. Every treatment is delivered by an NHS-
          qualified therapist with almost a decade of healthcare experience, ensuring you receive safe,
          knowledgeable, and effective care from start to finish.
        </p>
        <div className="services-buttons">
        <Link to="/Contact" className="about-btn">Book a Consultation</Link>
        </div>

        <h2>Why Choose Renew Body Therapy</h2>
        <div className="why-choose-section">
          <div className="why-choose-content">
            <ul>
              <li>NHS-qualified clinician with extensive acute and community healthcare experience</li>
              <li>
                <a href='https://www.google.com/search?sca_esv=a8d30f993b93fd1a&rlz=1C1RXQR_enGB1161GB1161&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8v7tuwQ1SN1OSFea7N6qmsQyLIKecvHR_gpj1fx4HuxYJ9pBB02IW2t9s-xKJop1HFQVuuz0aREE_jlWD7uFSr_rO8VG7hXfc30fefoxLC6G1JlQg%3D%3D&q=Renew+Body+Therapy+Reviews&sa=X&ved=2ahUKEwiZiOnkhe-QAxU-QEEAHbqjB_YQ0bkNegQIIRAE&biw=1920&bih=953&dpr=1' 
                    target="_blank" rel="noopener noreferrer">
                      Over 180 five-star Google reviews from local clients
                </a>
              </li>
              <li>A private and quiet home-based massage and rehab clinic in Dudley</li>
              <li>Honest and transparent guidance</li>
              <li>Tailored treatment plans for every individual</li>
              <li>Affordable prices without compromising on quality</li>
              <li>Trusted by Bupa and local healthcare professionals</li>
              <li>Mulitple Awards for Excellence</li>
            </ul>
            <p>
              <strong>Call:</strong> <a href="tel:07401261289">07401 261289</a> | 
              <strong> Email:</strong> <a href="mailto:jikku2006@gmail.com">jikku2006@gmail.com</a> | 
              <strong> Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Bristol Road, Dudley, DY2 9SF</a>
            </p>
            <div className="services-buttons">
              <Link to="/Contact" className="about-btn">Contact Us</Link>
            </div>
          </div>
          <div className="why-choose-image">
            <img src="https://res.cloudinary.com/diydpxavd/image/upload/v1762856587/prestige_award1_hm63qq.jpg" alt="Prestige Award" />
          </div>
        </div>

        <h2>Our Full Range of Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onBook={() => handleBook(service)}
              onReadMore={() => handleReadMore(service)}
            />
          ))}
        </div>

        <h2>Why Local Residents Choose Us for Massage &amp; Rehabilitation in Dudley</h2>
        <p>
          Clients choose Renew Body Therapy for the combination of clinical expertise and personalised care. Our
          home-based environment allows clients to feel comfortable while receiving professional treatment
          rooted in NHS experience.
        </p>
        <p>
          We do not pressure clients into block bookings or unnecessary appointments. Treatment plans are
          explained clearly and honestly so clients know exactly what to expect.
        </p>

        <h2>Book Your Appointment Today</h2>
        <p>
          If you are ready to improve your mobility, reduce pain, and begin personalised rehabilitation in Dudley,
          we are here to help.
        </p>
        <p>
          Appointments are offered promptly and we aim to accommodate your schedule wherever possible. Your
          recovery starts with the right support, and we are here to guide you through the process.
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
          <Link to="/Contact" className="about-btn">Get in Touch Today</Link>
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
          onBook={() => handleBook(selectedService)}
        />
      )}
    </div>
  );
}

export default Services;