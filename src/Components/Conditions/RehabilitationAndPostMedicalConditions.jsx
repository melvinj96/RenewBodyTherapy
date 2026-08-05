import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Personalised rehabilitation plans tailored to your recovery goals',
  'Private, one-to-one care at our clinic in Dudley',
  'Home visit options available for suitable cases',
  'Honest advice with no pressure for block bookings',
  'Support for post-surgical recovery, illness, and long-term conditions',
  'Flexible appointments, including evenings and weekends',
  { text: 'Hundreds of Google reviews from local clients', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Bupa partnership support for eligible services',
  'Focus on restoring independence, not just reducing symptoms',
];

const COMMON_CONDITIONS = [
  'Recovery after surgery (orthopaedic, abdominal, vascular)',
  'Post-hospital discharge rehabilitation',
  'Stroke recovery and neurological conditions',
  'Respiratory illness recovery',
  'Falls or reduced mobility',
  'Long-term health conditions affecting function',
  'General deconditioning after illness or inactivity',
];

const SYMPTOMS = [
  'Muscle weakness or fatigue',
  'Reduced mobility or stiffness',
  'Difficulty walking or transferring',
  'Poor balance or coordination',
  'Breathlessness or reduced endurance',
  'Pain during movement',
  'Reduced confidence with daily activities',
  'Difficulty returning to normal routines',
  'Increased risk of falls',
  'Reduced independence',
];

const CAUSES = [
  'Surgical procedures',
  'Prolonged bed rest or hospital stays',
  'Illness or infection',
  'Neurological conditions such as stroke',
  'Reduced physical activity',
  'Muscle deconditioning',
  'Pain or protective movement patterns',
  'Age-related changes in strength and mobility',
  'Pre-existing health conditions',
];

const WHEN_TO_SEE = [
  'Recovery feels slower than expected',
  'You feel weak or unsteady when moving',
  'Daily tasks feel more difficult than before',
  'You lack confidence walking or moving independently',
  'You are avoiding activity due to discomfort or fear',
  'You have recently been discharged from hospital',
  'You want guidance on safe recovery',
];

const COMMONLY_SUPPORTED = [
  {
    title: 'Post-Surgical Rehabilitation',
    description:
      'Support following procedures such as joint replacements, fractures, or abdominal surgery to help restore mobility, strength, and confidence.',
    link: '/services/post-hospital-rehabilitation',
    linkLabel: 'Post-Hospital Rehabilitation',
  },
  {
    title: 'Stroke & Neurological Rehabilitation',
    description:
      'Helping improve movement, coordination, and independence following stroke or neurological conditions.',
    link: '/services/stroke-rehabilitation',
    linkLabel: 'Stroke Rehabilitation',
  },
  {
    title: 'Falls & Mobility Decline',
    description:
      'Support for individuals experiencing balance issues, reduced confidence, or falls risk.',
    link: '/services/falls-intervention',
    linkLabel: 'Falls Intervention',
  },
  {
    title: 'Respiratory Recovery',
    description:
      'Rehabilitation following respiratory illness to improve breathing efficiency, endurance, and daily function.',
    link: '/services/respiratory-rehabilitation',
    linkLabel: 'Respiratory Rehabilitation',
  },
  {
    title: 'General Deconditioning & Weakness',
    description:
      'Support for individuals who have become less active due to illness, injury, or lifestyle changes, leading to reduced strength and mobility.',
  },
];

const HOW_WE_HELP = [
  'Current symptoms and limitations',
  'Mobility and strength levels',
  'Daily activities and challenges',
  'Home environment (if relevant)',
  'Medical history where appropriate',
  'Personal recovery goals',
];

const METHODS = [
  {
    title: 'Musculoskeletal Physiotherapy',
    description:
      'Targeted physiotherapy helps restore movement, strength, and function after injury, surgery, or illness.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Occupational Therapy',
    description:
      'Focuses on improving independence with everyday tasks such as walking, dressing, and daily routines.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg',
    link: '/services/occupational-therapy',
    linkLabel: 'Occupational Therapy',
  },
  {
    title: 'Mobile Rehabilitation Services',
    description:
      'Home-based rehabilitation allows treatment in your own environment for comfort and practicality.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
    link: '/services/mobile-physiotherapy',
    linkLabel: 'Mobile Physiotherapy',
  },
  {
    title: 'Sports Massage',
    description:
      'Used where appropriate to reduce muscular tension and support recovery.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Used where appropriate to reduce muscular tension and support recovery.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Swedish Massage',
    description:
      'Used where appropriate to reduce muscular tension and support recovery.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg',
    link: '/services/swedish-massage',
    linkLabel: 'Swedish Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Targets muscular tension and trigger points to support movement and rehabilitation.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Additional Support Services',
    description:
      'Some clients may benefit from complementary services such as vitamin B12 support.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591765/vitamin-b12_njshpz.jpg',
    link: '/services/vitamin-b12',
    linkLabel: 'Vitamin B12 Support',
  },
];

const SUITABLE_FOR = [
  'Individuals recovering from surgery',
  'People recently discharged from hospital',
  'Stroke or neurological patients',
  'Older adults needing mobility support',
  'Individuals with reduced strength or balance',
  'People experiencing long-term recovery challenges',
  'Clients wanting structured rehabilitation support',
  'Those looking to avoid long NHS waiting times',
];

const RELATED_CONDITIONS = [
  { label: 'Muscle & Pain Conditions', href: '/conditions/muscle-and-pain' },
  { label: 'Sports & Injury Conditions', href: '/conditions/sports-and-injury' },
  { label: 'Nerve & Complex Conditions', href: '/conditions/nerve-and-complex' },
  { label: 'Lifestyle & Work-Related Conditions', href: '/conditions/lifestyle-and-work-related' },
];

const NOT_SUITABLE = [
  'Acute medical instability',
  'Severe unexplained symptoms',
  'Risk of serious complications',
  'Immediate medical intervention needed',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS experience across multiple disciplines',
  'Expertise in orthopaedics, neurology, stroke, respiratory care, and rehabilitation',
  'A calm, private clinic environment',
  'Flexible, one-to-one appointments',
  'Personalised recovery planning',
  'Ongoing support beyond appointments',
  'Strong local reputation and community trust',
];

const FAQS = [
  {
    question: 'How Long Does Rehabilitation Take?',
    answer:
      'Recovery varies depending on your condition, but many clients benefit from structured support over several weeks or months.',
  },
  {
    question: 'Do I Need A Referral?',
    answer:
      'No. You can contact us directly without a referral to begin your rehabilitation journey.',
  },
  {
    question: 'Can You Help After Surgery?',
    answer:
      'Yes. Many clients seek support following surgery to rebuild strength, mobility, and confidence.',
  },
  {
    question: 'Do You Offer Home Visits?',
    answer:
      'Yes. Home-based rehabilitation is available for suitable clients depending on location and needs.',
  },
  {
    question: 'Will I Need Multiple Sessions?',
    answer:
      'This depends on your goals, condition, and recovery progress. We provide honest guidance without pressure.',
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

function RehabilitationAndPostMedicalConditions() {
  useEffect(() => {
    document.title = 'Rehabilitation & Post-Medical Support in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Expert rehabilitation support after surgery, illness & injury in Dudley | Restore mobility, strength & independence with personalised care →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Rehabilitation & Post-Medical Condition Support in Dudley" />

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
                  Rehabilitation &amp; Post-Medical Condition Support in Dudley
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Recovering after surgery, illness, or a medical condition can feel physically and
                  emotionally demanding. Reduced strength, limited mobility, fatigue, or a lack of
                  confidence with movement can all make everyday activities more challenging.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  At Renew Body Therapy, we provide personalised rehabilitation and post-medical
                  condition support in Dudley, helping you rebuild strength, improve mobility, and
                  regain independence through structured, rehabilitation-focused care tailored to
                  your recovery journey — whether you are recovering from surgery, hospital
                  discharge, illness, or a long-term health condition.
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
                    alt="Rehabilitation and post-medical condition treatment at Renew Body Therapy Dudley"
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

          {/* ─── Understanding Rehabilitation & Post-Medical Conditions ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Understanding Rehabilitation &amp; Post-Medical Conditions
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Rehabilitation and post-medical conditions refer to physical challenges that
                  develop after surgery, illness, injury, or hospital discharge. These may affect
                  strength, mobility, balance, coordination, breathing, or the ability to carry out
                  everyday activities.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Recovery is not always immediate. Many people experience a gradual return to
                  function, requiring structured support, guidance, and rehabilitation to regain
                  confidence and independence.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Common situations where people seek support include:
                </p>
                <BulletList items={COMMON_CONDITIONS} twoCol />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
                  Explore related services on our{' '}
                  <Link to="/services" className="text-secondary hover:underline font-medium">
                    Services page
                  </Link>
                  .
                </p>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms During Recovery
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Recovery-related symptoms can vary depending on your condition, but may
                    include:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    These symptoms can improve with structured rehabilitation and the right level
                    of support.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Possible Causes &amp; Contributing Factors
                  </h3>
                  <BulletList items={CAUSES} twoCol />
                  <p className="text-sm text-gray-600 mt-4">
                    Often, recovery involves multiple factors, which is why a personalised approach
                    is essential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── When To Seek Professional Support ─── */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-tertiary font-bold text-primary mb-2">
                  When To Seek Professional Support
                </h3>
                <p className="text-gray-700 mb-4">You may benefit from rehabilitation support if:</p>
              </div>
            </div>
            <BulletList items={WHEN_TO_SEE} twoCol />
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
              <strong>Important:</strong> Seek urgent medical attention if you experience sudden
              deterioration, severe breathlessness, chest pain, or unexplained neurological
              symptoms.
            </div>
          </section>

          {/* ─── Conditions We Commonly Support ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              Conditions We Commonly Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMMONLY_SUPPORTED.map((condition, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-3">
                    {condition.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{condition.description}</p>
                  {condition.link && (
                    <Link
                      to={condition.link}
                      className="inline-flex items-center gap-1 mt-4 text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                    >
                      {condition.linkLabel} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ─── How We Help ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg"
                  alt="Personalised rehabilitation and post-medical condition treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help With Rehabilitation &amp; Recovery
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we focus on understanding how your condition affects your
                  daily life, movement, and independence.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Your assessment may explore:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  From there, we create a tailored rehabilitation plan that may include hands-on
                  therapy, movement guidance, functional exercises, and ongoing support. We
                  prioritise safe, gradual progression to help you rebuild confidence while
                  avoiding setbacks.
                </p>
                <Link
                  to="/about"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  Learn more about our approach →
                </Link>
                {' '}
                <Link
                  to="/team"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  Meet the therapist →
                </Link>
              </div>
            </div>
          </section>

          {/* ─── Methods / Services ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-4">
              Methods &amp; Services We Use To Support Recovery
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl">
              Depending on your condition and goals, treatment may draw from one or more of the
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
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our rehabilitation services may be suitable for:
              </p>
              <BulletList items={SUITABLE_FOR} />
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  You can also explore related conditions:
                </p>
                <ul className="space-y-2">
                  {RELATED_CONDITIONS.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.href}
                        className="text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                      >
                        {item.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  to="/services"
                  className="inline-block bg-secondary text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-secondary-dark transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Not Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our services may not be appropriate in all situations. Referral to a GP or
                specialist may be required where:
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
                Recovery outcomes vary depending on the condition, severity, and individual
                circumstances. Our services support rehabilitation and recovery but do not replace
                medical diagnosis or emergency care.
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
                  Clients choose Renew Body Therapy for our combination of clinical experience and
                  personalised care.
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
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg"
                  alt="Professional rehabilitation and post-medical condition therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Rehabilitation &amp; Post-Medical Conditions
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
              Enquire About Our Rehabilitation &amp; Recovery Support in Dudley
            </h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we understand that recovery is not always straightforward.
              Whether you are rebuilding strength after surgery, recovering from illness, or
              regaining independence following hospital discharge, we are here to support you with
              honest, personalised care.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              Through tailored rehabilitation, hands-on therapy, and practical guidance, we aim to
              help you move more confidently, safely, and comfortably.
            </p>
            <p className="text-sm mb-8 max-w-2xl mx-auto opacity-75">
              Please note: Our services support rehabilitation, recovery, mobility, and wellbeing
              but do not replace medical diagnosis, emergency treatment, or specialist healthcare
              advice where required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Your Consultation Today
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

export default RehabilitationAndPostMedicalConditions;
