import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Personalised treatment plans tailored to your symptoms, lifestyle, and goals',
  'Home-based private clinic offering one-to-one care in Dudley',
  'Honest guidance with no pressure to commit to block bookings',
  'Support available for nerve-related pain, rehabilitation, mobility issues, and recovery',
  'Flexible appointments, including evenings and weekends where available',
  { text: 'Hundreds of Google reviews from local clients', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Rehabilitation-focused approach with aftercare guidance and ongoing support',
  'Bupa partnership support for eligible services',
  'Focus on treating the root cause where possible, not simply managing symptoms',
];

const COMMON_CONDITIONS = [
  'Sciatica',
  'Nerve pain',
  'Trapped nerves',
  'Carpal tunnel syndrome',
  'Repetitive strain injuries (RSI)',
  'Cervical nerve irritation',
  'Shoulder and arm nerve symptoms',
  'Nerve-related leg pain',
  'Postural nerve compression',
  'Persistent tingling or numbness',
];

const SYMPTOMS = [
  'Tingling sensations',
  'Pins and needles',
  'Burning pain',
  'Sharp shooting pain',
  'Numbness',
  'Muscle weakness',
  'Reduced grip strength',
  'Pain travelling into the arms or legs',
  'Symptoms that worsen when sitting or working',
  'Altered sensation in the hands, feet, arms, or legs',
  'Reduced confidence with movement',
];

const CAUSES = [
  'Poor posture',
  'Repetitive movements',
  'Desk-based work',
  'Prolonged sitting',
  'Heavy lifting',
  'Sports injuries',
  'Muscle tightness causing nerve irritation',
  'Disc-related spinal issues',
  'Previous injury or surgery',
  'Occupational strain',
  'Long-term musculoskeletal conditions',
  'Inflammation around joints or soft tissues',
];

const WHEN_TO_SEE = [
  'Symptoms have lasted several weeks',
  'Tingling or numbness keeps returning',
  'Pain travels into the arms or legs',
  'Weakness is affecting daily activities',
  'Symptoms interfere with sleep or work',
  'You are avoiding activity because of discomfort',
  'Movement feels restricted or uncomfortable',
  'Home exercises are not improving symptoms',
];

const COMMONLY_SUPPORTED = [
  {
    title: 'Sciatica',
    description:
      'We provide treatment for sciatica in Dudley, helping clients with irritation or compression of the sciatic nerve, often causing pain, tingling, numbness, or discomfort travelling from the lower back into the buttock and leg.',
  },
  {
    title: 'Nerve Pain',
    description:
      'Nerve pain can feel sharp, burning, shooting, electric, or highly sensitive compared to muscular discomfort.',
  },
  {
    title: 'Trapped Nerves',
    description:
      'A trapped nerve occurs when surrounding structures place pressure on a nerve, potentially causing pain, numbness, tingling, or weakness.',
  },
  {
    title: 'Carpal Tunnel Syndrome',
    description:
      'Carpal tunnel syndrome commonly affects the wrist and hand, often causing numbness, tingling, weakness, or discomfort affecting daily activities.',
  },
  {
    title: 'Repetitive Strain Injuries (RSI)',
    description:
      'Repetitive strain injuries can affect muscles, tendons, and nerves due to repeated movements at work, sport, or daily activities.',
  },
];

const HOW_WE_HELP = [
  'Your symptoms',
  'Symptom triggers',
  'Daily activities',
  'Work demands',
  'Previous injuries',
  'Medical history where relevant',
  'Recovery goals',
];

const METHODS = [
  {
    title: 'Musculoskeletal Physiotherapy',
    description:
      'Rehabilitation-focused physiotherapy can help improve movement, mobility, strength, and confidence where symptoms affect daily function.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Sports Massage Therapy',
    description:
      'Sports massage may help reduce muscular tension that contributes to movement restrictions and nerve irritation.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Deep tissue massage focuses on deeper muscular tightness that may contribute to postural strain and movement limitations.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Dry needling targets muscular trigger points and areas of tension that may contribute to pain or movement dysfunction. Unlike acupuncture, dry needling focuses on muscular function and rehabilitation rather than traditional acupuncture theory.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Mobile Rehabilitation Services',
    description:
      'For clients unable to travel comfortably, home-based rehabilitation support may be available depending on location and suitability.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
    link: '/services/mobile-physiotherapy',
    linkLabel: 'Mobile Physiotherapy',
  },
];

const SUITABLE_FOR = [
  'People experiencing sciatica symptoms',
  'Individuals with trapped nerves',
  'Office workers with repetitive strain injuries',
  'People experiencing tingling or numbness',
  'Clients with nerve-related arm or leg pain',
  'Individuals recovering from injury',
  'People experiencing work-related strain',
  'Older adults seeking mobility support',
  'Individuals seeking support outside long waiting times',
];

const NOT_SUITABLE = [
  'Acute neurological deterioration',
  'Severe unexplained weakness',
  'Recent spinal trauma',
  'Active infection',
  'Serious unexplained symptoms',
  'Certain vascular or neurological conditions',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS experience',
  'Experience across orthopaedics, stroke rehabilitation, neurology, respiratory care, surgery, and community rehabilitation',
  'One-to-one appointments',
  'Personalised treatment planning',
  'Flexible appointment availability',
  'Ongoing support and aftercare guidance',
  'Hundreds of five-star Google reviews',
  'Bupa partnership support for eligible services',
];

const FAQS = [
  {
    question: 'Can Massage Help Nerve Pain?',
    answer:
      'Massage may help reduce muscular tension and improve movement where muscle tightness is contributing to symptoms. However, treatment suitability depends on the underlying cause.',
  },
  {
    question: 'Can Dry Needling Help With Nerve-Related Symptoms?',
    answer:
      'Dry needling may be used to address muscular trigger points and movement restrictions where appropriate as part of a wider treatment plan.',
  },
  {
    question: 'Do I Need A Referral Before Booking?',
    answer:
      "No. If you're looking for a nerve pain physio in Dudley, most clients can simply contact us without a referral.",
  },
  {
    question: 'Can You Help With Sciatica?',
    answer:
      'Many clients seek support for symptoms commonly associated with sciatica. Treatment focuses on improving movement, reducing muscular tension, and supporting rehabilitation where appropriate.',
  },
  {
    question: 'What Is The Difference Between Dry Needling And Acupuncture?',
    answer:
      'Dry needling focuses on muscular trigger points, movement, and rehabilitation. Traditional acupuncture follows different treatment principles.',
  },
  {
    question: 'Do You Offer Home Visits?',
    answer:
      'Yes. Selected rehabilitation services may be available through home visits depending on suitability and location.',
  },
  {
    question: 'Will I Need Multiple Sessions?',
    answer:
      'This depends on the cause, severity, and duration of symptoms, as well as your goals and response to treatment.',
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

function NerveAndComplexConditions() {
  useEffect(() => {
    document.title = 'Nerve & Complex Condition Support in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Professional support for sciatica, nerve pain, trapped nerves & repetitive strain injuries in Dudley | Rehabilitation-focused treatment →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Nerve & Complex Condition Support in Dudley" />

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
                  Nerve &amp; Complex Condition Support in Dudley
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Living with nerve-related symptoms can be frustrating, uncomfortable, and sometimes
                  difficult to understand. Tingling, numbness, burning sensations, weakness, or
                  radiating pain can affect work, sleep, exercise, and everyday activities.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  At Renew Body Therapy, we provide personalised support for nerve and complex
                  conditions in Dudley through tailored rehabilitation, hands-on therapy,
                  mobility-focused treatment, and recovery planning designed around your symptoms and
                  goals.
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
                    alt="Nerve and complex condition treatment at Renew Body Therapy Dudley"
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

          {/* ─── What Are Nerve & Complex Conditions ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  What Are Nerve &amp; Complex Conditions?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Nerve and complex conditions refer to symptoms affecting the nervous system,
                  muscles, joints, or movement patterns that may cause pain, altered sensation,
                  weakness, reduced mobility, or functional difficulties.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Nerves act as communication pathways between the brain, spinal cord, muscles, and
                  other tissues. When a nerve becomes irritated, compressed, inflamed, or damaged,
                  symptoms can develop in areas far away from the source of the problem.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Common conditions people seek support for include:
                </p>
                <BulletList items={COMMON_CONDITIONS} twoCol />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
                  Some symptoms may improve with activity modification, rehabilitation, and targeted
                  treatment, while others may require assessment from a GP, physiotherapist,
                  consultant, or specialist healthcare professional.
                </p>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Symptoms vary depending on which nerve or structure is affected. Common symptoms
                    may include:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Symptoms may come and go or become more persistent over time.
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
                    In some cases, symptoms may involve multiple contributing factors, which is why
                    a detailed assessment can be beneficial.
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
              <strong>Important:</strong> Seek urgent medical attention if symptoms involve sudden
              loss of strength, loss of bladder or bowel control, unexplained changes in walking
              ability, severe trauma, or rapidly worsening neurological symptoms.
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
                </div>
              ))}
            </div>
          </section>

          {/* ─── How We Help ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp"
                  alt="Personalised nerve and complex condition treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help With Nerve &amp; Complex Conditions
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we focus on understanding how your symptoms affect movement,
                  function, confidence, and quality of life.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Our approach begins by understanding:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  From there, we create a personalised treatment plan that may combine rehabilitation
                  support, movement guidance, hands-on therapy, dry needling, mobility work, and
                  functional exercise programmes.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  We do not offer one-size-fits-all treatment plans. Every individual presents
                  differently, and treatment is adapted accordingly. Where appropriate, we may also
                  advise further assessment from a GP, consultant, physiotherapist, or other
                  healthcare professional.
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
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our nerve and complex condition support services may be suitable for:
              </p>
              <BulletList items={SUITABLE_FOR} />
              <p className="text-gray-600 mt-5 text-sm sm:text-base">
                Many clients contact us when symptoms begin affecting everyday comfort, work, sleep,
                or confidence with movement.
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

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Not Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our services may not be suitable for everyone. Referral to a GP, consultant,
                hospital service, or specialist healthcare professional may be more appropriate where
                symptoms suggest significant neurological involvement or serious underlying
                conditions. Treatment may need to be adapted or postponed for individuals with:
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
                Results vary depending on the cause of symptoms, severity, lifestyle factors, overall
                health, and treatment adherence. Our services support rehabilitation, movement, and
                wellbeing but do not replace medical diagnosis or emergency healthcare.
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
                  Clients choose Renew Body Therapy because we combine rehabilitation-focused care,
                  honest advice, and personalised support. We believe in treating the person as a
                  whole and identifying factors that may be contributing to symptoms rather than
                  focusing on symptoms alone. This patient-centred approach is at the heart of Renew
                  Body Therapy&apos;s philosophy.
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
                  alt="Professional nerve and complex condition therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Nerve &amp; Complex Conditions
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
              Enquire About Nerve &amp; Complex Condition Support
            </h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we understand how frustrating nerve-related symptoms can be.
              Whether you are experiencing sciatica, trapped nerve symptoms, repetitive strain
              injuries, carpal tunnel syndrome, or ongoing nerve pain in Dudley, our goal is to
              provide honest, personalised support focused on helping you move more comfortably and
              confidently.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              Through tailored rehabilitation, hands-on therapy, mobility-focused treatment, and
              recovery planning, we aim to help you take positive steps towards improved movement and
              quality of life.
            </p>
            <p className="text-sm mb-8 max-w-2xl mx-auto opacity-75">
              Please note: Our services support rehabilitation, recovery, mobility, and wellbeing but
              do not replace medical diagnosis, emergency treatment, or specialist healthcare advice
              where required.
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

export default NerveAndComplexConditions;
