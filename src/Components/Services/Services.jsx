import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import ServiceCard from './ServiceCard';

function Services() {
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
        "Additional Service - Dry Needling - £15"
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
        "Additional Service - Dry Needling - £15"
      ],
      description: `<p>Sports massage targets specific muscle groups to support recovery, enhance mobility, and prevent injury. It is ideal for athletes, gym goers, or anyone managing activity related tension.</p><p><strong>Add ons:</strong></p><ul><li>Cupping therapy</li><li>Dry needling</li></ul>`,
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
      title: "DRY NEEDLING",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
      prices: [
        "£45"
      ],
      description: `<p>Dry needling is used to reduce muscle tightness, improve circulation, and relieve pain. It can be offered as a standalone service or combined with massage therapy.</p>`,
      selectValue: "acupuncture"
    }
];

  const getServicePath = (selectValue) => {
    const routeMap = {
      'sports': '/services/sports-massage',
      'deep-tissue': '/services/deep-tissue-massage',
      'swedish': '/services/swedish-massage',
      'acupuncture': '/services/acupuncture-dry-needling',
      'stroke-rehab': '/services/stroke-rehabilitation',
      'falls-intervention': '/services/falls-intervention',
      'post-hospital-rehab': '/services/post-hospital-rehabilitation',
      'respiratory-rehab': '/services/respiratory-rehabilitation',
      'physio': '/services/mobile-physiotherapy',
      'occupational': '/services/occupational-therapy',
      'vitamin-b12': '/services/vitamin-b12'
    };
    return routeMap[selectValue] || null;
  };

  const handleBook = (service) => {
    navigate(`/contact?service=${encodeURIComponent(service.selectValue)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <TitleBand title="Massage &amp; Rehabilitation Services in Dudley" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-primary font-semibold text-secondary uppercase tracking-wider">
                Professional Care
              </span>
            </div>
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
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
            </div>
            <div className="mt-8">
              <Link
                to="/Contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book a Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-4">
            Our Full Range of Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive selection of professional treatments designed to support your health and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onBook={() => handleBook(service)}
              servicePath={getServicePath(service.selectValue)}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8 text-center">
              Why Choose Renew Body Therapy
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">NHS-qualified clinician with extensive acute and community healthcare experience</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">
                  <a 
                    href='https://www.google.com/search?sca_esv=a8d30f993b93fd1a&rlz=1C1RXQR_enGB1161GB1161&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8v7tuwQ1SN1OSFea7N6qmsQyLIKecvHR_gpj1fx4HuxYJ9pBB02IW2t9s-xKJop1HFQVuuz0aREE_jlWD7uFSr_rO8VG7hXfc30fefoxLC6G1JlQg%3D%3D&q=Renew+Body+Therapy+Reviews&sa=X&ved=2ahUKEwiZiOnkhe-QAxU-QEEAHbqjB_YQ0bkNegQIIRAE&biw=1920&bih=953&dpr=1' 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Over 180 five-star Google reviews from local clients
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">A private and quiet home-based massage and rehab clinic in Dudley</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">Honest and transparent guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">Tailored treatment plans for every individual</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">Affordable prices without compromising on quality</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">Trusted by Bupa and local healthcare professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base sm:text-lg">Multiple Awards for Excellence</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 justify-center text-sm sm:text-base text-gray-600 mb-8">
              <p><strong>Call:</strong> <a href="tel:07401261289" className="text-secondary hover:underline">07401 261289</a></p>
              <p><strong>Email:</strong> <a href="mailto:jikku2006@gmail.com" className="text-secondary hover:underline">jikku2006@gmail.com</a></p>
              <p><strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Bristol Road, Dudley, DY2 9SF</a></p>
            </div>
            <div className="text-center">
              <Link
                to="/Contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Local Residents Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6 text-center">
          Why Local Residents Choose Us
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
              Clients choose Renew Body Therapy for the combination of clinical expertise and personalised care. Our
              home-based environment allows clients to feel comfortable while receiving professional treatment
              rooted in NHS experience.
            </p>
            <p>
              We do not pressure clients into block bookings or unnecessary appointments. Treatment plans are
              explained clearly and honestly so clients know exactly what to expect.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-12 sm:mb-16 lg:mb-20 p-8 sm:p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-tertiary font-bold mb-4">
          Book Your Appointment Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          If you are ready to improve your mobility, reduce pain, and begin personalised rehabilitation in Dudley,
          we are here to help. Appointments are offered promptly and we aim to accommodate your schedule wherever possible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/Contact"
            className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch Today
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
          <p><strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Bristol Road, Dudley, DY2 9SF</a></p>
        </div>
      </div>
    </div>
  );
}

export default Services;