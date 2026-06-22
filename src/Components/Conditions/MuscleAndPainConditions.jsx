import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Personalised treatment plans tailored to your symptoms, lifestyle, and goals',
  'Home-based private clinic offering one-to-one care in Dudley',
  'Honest guidance with no pressure to commit to block bookings',
  'Support available for sports injuries, chronic pain, postural discomfort, and rehabilitation',
  'Flexible appointments, including evenings and weekends where available',
  { text: 'Hundreds of Google reviews from local clients', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Rehabilitation-focused approach with aftercare guidance and ongoing support',
];

const COMMON_CONDITIONS = [
  'Back pain',
  'Lower back pain',
  'Neck pain',
  'Shoulder pain',
  'Hip pain',
  'Knee pain',
  'Joint stiffness',
  'Muscle tightness',
  'Chronic muscular discomfort',
  'Postural aches and tension',
];

const SYMPTOMS = [
  'Persistent muscular tightness or stiffness',
  'Localised or widespread aching',
  'Reduced flexibility or movement',
  'Pain during activity or after sitting for long periods',
  'Joint discomfort or restricted movement',
  'Muscle tenderness or trigger points',
  'Tension headaches linked to neck or shoulder tightness',
  'Postural discomfort from desk work or repetitive tasks',
  'Fatigue caused by ongoing physical discomfort',
];

const CAUSES = [
  'Poor posture',
  'Physically demanding work',
  'Repetitive movements',
  'Sports or exercise-related strain',
  'Lack of movement or sedentary routines',
  'Stress-related muscular tension',
  'Previous injuries',
  'Post-surgical weakness or compensation patterns',
  'Age-related changes in joints and mobility',
  'Long-term musculoskeletal conditions',
];

const WHEN_TO_SEE = [
  'Pain has lasted several weeks or keeps returning',
  'Movement feels restricted or uncomfortable',
  'Symptoms interfere with work, sleep, or daily activities',
  'You notice weakness, stiffness, or reduced mobility',
  'Exercise or stretching is not improving symptoms',
  'Recovery after injury or surgery feels slow',
  'You are becoming less active because of discomfort',
];

const HOW_WE_HELP = [
  'Your symptoms',
  'Your movement patterns',
  'Your daily activities',
  'Previous injuries or rehabilitation history',
  'Your recovery goals',
];

const METHODS = [
  {
    title: 'Sports Massage Therapy',
    description:
      'Sports massage focuses on reducing muscular tension, improving flexibility, and supporting recovery from physical strain or activity-related tightness.',
    suitable: [
      'Active individuals',
      'Gym users',
      'Manual workers',
      'People experiencing muscular tightness or stiffness',
    ],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Deep tissue massage uses slower, targeted pressure to address deeper muscular tension and persistent tightness.',
    suitable: [
      'Chronic muscular discomfort',
      'Postural tension',
      'Neck and shoulder tightness',
      'Lower back stiffness',
    ],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Dry needling involves the use of fine sterile needles to target muscular trigger points and areas of tightness. It focuses on muscular tension and movement rather than traditional acupuncture theory. Dry needling may be used alongside massage therapy where appropriate.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Musculoskeletal Rehabilitation Support',
    description:
      'Some clients may benefit from rehabilitation-focused support designed to improve movement, strength, balance, and confidence after injury, surgery, or periods of reduced activity.',
    suitable: [
      'Guided exercises',
      'Mobility work',
      'Functional rehabilitation',
      'Movement advice',
      'Strength progression',
    ],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Mobile Rehabilitation Services',
    description:
      'For clients unable to travel comfortably, mobile rehabilitation and home-visit services may be available depending on suitability and location.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
    link: '/services/mobile-physiotherapy',
    linkLabel: 'Mobile Physiotherapy',
  },
];

const SUITABLE_FOR = [
  'People experiencing ongoing muscular tightness',
  'Office workers with postural pain',
  'Individuals recovering from injury or surgery',
  'Gym users and athletes',
  'Clients with chronic muscular discomfort',
  'Older adults wanting to improve mobility and confidence',
  'People experiencing work-related strain or repetitive movement issues',
  'Individuals seeking support outside long waiting times',
];

const NOT_SUITABLE = [
  'Certain acute injuries',
  'Severe inflammation or infection',
  'Unexplained swelling',
  'Recent fractures without medical clearance',
  'Certain neurological or vascular conditions',
  'Serious unexplained symptoms',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS experience across rehabilitation and healthcare settings',
  'A calm, one-to-one treatment environment',
  'Personalised treatment planning',
  'Flexible appointments',
  'Ongoing support and aftercare guidance',
  'A strong local reputation with 180+ five-star Google reviews',
  'Bupa partnership support for eligible services',
];

const FAQS = [
  {
    question: 'Can Massage Help With Muscle Tightness?',
    answer:
      'Massage therapy may help reduce muscular tension, improve circulation, and support flexibility for some individuals experiencing tightness or stiffness.',
  },
  {
    question: 'What Is The Difference Between Dry Needling & Acupuncture?',
    answer:
      'Dry needling focuses on muscular trigger points and movement-related tension, while traditional acupuncture is based on different treatment principles and techniques.',
  },
  {
    question: 'Do I Need A Referral Before Booking?',
    answer: 'No. Most clients can contact us directly without a referral.',
  },
  {
    question: 'Can You Help With Postural Pain From Desk Work?',
    answer:
      'Many clients seek support for neck, shoulder, and lower back discomfort linked to prolonged sitting or repetitive work patterns.',
  },
  {
    question: 'Will I Need Multiple Sessions?',
    answer:
      'This depends on your symptoms, goals, and how long the issue has been present. Some clients benefit from occasional maintenance sessions, while others may require a more structured rehabilitation approach.',
  },
  {
    question: 'Do You Offer Home Visits?',
    answer:
      'Yes, selected rehabilitation and mobility-focused services may be available through home visits depending on location and suitability.',
  },
  {
    question: 'Can I Combine Treatments?',
    answer:
      'Yes. Some clients benefit from combining approaches such as sports massage and dry needling as part of a personalised treatment plan.',
  },
];

function CheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BulletList({ items, twoCol = false }) {
  return (
    <ul className={`grid gap-3 ${twoCol ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
      {items.map((item, idx) => {
        const label = typeof item === 'string' ? item : item.text;
        const href = typeof item === 'object' ? item.href : null;
        return (
          <li key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mt-0.5">
              <CheckIcon className="w-4 h-4 text-secondary" />
            </div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline text-base sm:text-lg leading-relaxed font-medium"
              >
                {label}
              </a>
            ) : (
              <span className="text-gray-700 text-base sm:text-lg leading-relaxed">{label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <h4 className="text-lg font-tertiary font-bold text-primary pr-4">{question}</h4>
        <svg
          className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

function MuscleAndPainConditions() {
  useEffect(() => {
    document.title = 'Muscle & Pain Treatments in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Professional support for muscle tightness, joint pain, back pain, neck pain & chronic discomfort | Personalised treatment plans | Book an appointment →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Muscle & Pain Treatments in Dudley" />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* ─── Hero ─── */}
        <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-primary font-semibold text-secondary uppercase tracking-wider">
                    Conditions We Support
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tertiary font-bold text-primary mb-6 leading-tight">
                  Muscle &amp; Pain Treatments in Dudley
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  Living with ongoing muscle tightness, joint discomfort, postural strain, or
                  persistent pain can affect every part of daily life. At Renew Body Therapy, we
                  provide personalised muscle and pain treatments in Dudley designed to support
                  mobility, reduce muscular tension, and help you move more comfortably through
                  tailored rehabilitation, massage therapy, dry needling, and recovery-focused care.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Your Consultation Today
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={HERO_IMAGE}
                    alt="Muscle and pain treatment at Renew Body Therapy Dudley"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">

          {/* ─── Why Choose ─── */}
          <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              Why Clients Choose Renew Body Therapy
            </h2>
            <BulletList items={WHY_CHOOSE} twoCol />
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-tertiary font-bold text-primary mb-4">Get In Touch</h3>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600">
                <p>
                  <strong>Call:</strong>{' '}
                  <a href="tel:07401261289" className="text-secondary hover:underline">
                    07401 261289
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:jikku2006@gmail.com" className="text-secondary hover:underline">
                    jikku2006@gmail.com
                  </a>
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

          {/* ─── What Are Muscle & Pain Conditions ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  What Are Muscle &amp; Pain Conditions?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Muscle and pain conditions describe a broad range of physical symptoms affecting
                  muscles, joints, soft tissues, and movement. These issues may develop suddenly
                  after injury or gradually over time due to posture, repetitive strain, stress,
                  physical activity, surgery, or long-term health conditions.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  People often seek support when pain begins affecting work, exercise, sleep,
                  mobility, or everyday activities. Common concerns include:
                </p>
                <BulletList items={COMMON_CONDITIONS} twoCol />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
                  Some conditions improve with rest and movement changes, while others may require
                  structured rehabilitation, manual therapy, or professional assessment to support
                  recovery and improve function.
                </p>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Symptoms can vary depending on the cause, location, and severity. They may
                    include:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Symptoms do not always indicate a serious condition, but persistent or worsening
                    pain should not be ignored.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Possible Causes &amp; Triggers
                  </h3>
                  <BulletList items={CAUSES} twoCol />
                  <p className="text-sm text-gray-600 mt-4">
                    In some cases, pain may involve more than one contributing factor, which is why
                    personalised assessment is important.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── When To See A Professional ─── */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-tertiary font-bold text-primary mb-2">
                  When To See a Professional
                </h3>
                <p className="text-gray-700 mb-4">You may wish to seek professional support if:</p>
              </div>
            </div>
            <BulletList items={WHEN_TO_SEE} twoCol />
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
              <strong>Important:</strong> If symptoms are severe, worsening, associated with
              numbness, sudden swelling, unexplained weight loss, chest pain, or changes in bladder
              or bowel function, seek urgent medical advice from a GP or emergency healthcare
              professional.
            </div>
          </section>

          {/* ─── How We Help ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg"
                  alt="Personalised muscle and pain treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help With Muscle &amp; Pain Conditions
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we focus on helping clients manage muscular discomfort,
                  improve mobility, and support physical recovery through tailored
                  rehabilitation-focused treatments.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Our approach starts with understanding:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  From there, we create a personalised treatment plan that may combine hands-on
                  therapy, movement guidance, rehabilitation exercises, dry needling, or
                  mobility-focused support.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  We do not offer one-size-fits-all treatment plans. Some clients may benefit from
                  sports massage and mobility work, while others may require rehabilitation support
                  following surgery, injury, or reduced movement. Where appropriate, we may also
                  advise clients to seek assessment from a GP, specialist, or other healthcare
                  professional.
                </p>
                <Link
                  to="/about/our-clinic"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  Learn more about our approach →
                </Link>
              </div>
            </div>
          </section>

          {/* ─── Methods / Services ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-4">
              Methods &amp; Services We Use
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl">
              Depending on your symptoms and goals, treatment may draw from one or more of the
              following approaches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {METHODS.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={method.image}
                      alt={method.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-tertiary font-bold text-secondary mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{method.description}</p>
                    {method.suitable.length > 0 && (
                      <ul className="space-y-1 mb-4">
                        {method.suitable.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-4 h-4 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckIcon className="w-2.5 h-2.5 text-secondary" />
                            </div>
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto">
                      <Link
                        to={method.link}
                        className="inline-flex items-center gap-1 text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                      >
                        {method.linkLabel} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Suitable / Not Suitable ─── */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suitable For */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our muscle and pain support services may be suitable for:
              </p>
              <BulletList items={SUITABLE_FOR} />
              <p className="text-gray-600 mt-5 text-sm sm:text-base">
                Many clients contact us when pain or stiffness begins affecting daily comfort,
                movement, or quality of life.
              </p>
              <div className="mt-6">
                <Link
                  to="/services"
                  className="inline-block bg-secondary text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-secondary-dark transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>

            {/* Not Suitable For */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Not Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our services may not be suitable for everyone. In some situations, referral to a GP,
                hospital, or specialist service may be more appropriate. Treatment may need to be
                adapted or postponed for individuals with:
              </p>
              <ul className="space-y-3">
                {NOT_SUITABLE.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-5 p-4 bg-white rounded-xl border border-gray-200">
                Some soreness can occur after manual therapy or dry needling treatments. Results and
                recovery times vary. Our services focus on muscular support, rehabilitation, and
                mobility improvement and are not a substitute for emergency medical care.
              </p>
            </div>
          </section>

          {/* ─── Why Choose RBT ─── */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Why Choose Renew Body Therapy
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Clients choose Renew Body Therapy because we combine hands-on treatment with honest
                  advice, rehabilitation-focused support, and personalised care. We believe in
                  treating the person, not simply focusing on symptoms in isolation.
                </p>
                <BulletList items={WHY_CHOOSE_RBT} />
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/about/our-clinic"
                    className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary-dark transition-all duration-300"
                  >
                    Our Clinic
                  </Link>
                  <Link
                    to="/testimonials"
                    className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                  >
                    Testimonials
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg"
                  alt="Professional therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Muscle &amp; Pain Conditions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <FaqItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>

          {/* ─── CTA ─── */}
          <section className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold mb-4">
              Enquire About Our Muscle Pain Treatments in Dudley
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we understand how frustrating ongoing pain, stiffness, and
              restricted movement can feel. Whether you are dealing with muscular tension, postural
              discomfort, sports-related tightness, or long-term mobility concerns, we are here to
              help you take the next step towards better movement and recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:07401261289"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Call: 07401 261289
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-sm">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:jikku2006@gmail.com" className="underline hover:opacity-80">
                  jikku2006@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Address:</strong>{' '}
                <a
                  href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Bristol Road, Dudley, DY2 9SF
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default MuscleAndPainConditions;
