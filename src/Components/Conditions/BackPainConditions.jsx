import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Personalised treatment plans tailored to your symptoms and lifestyle',
  'Private, one-to-one care at our Dudley clinic',
  'Honest advice with no pressure for block bookings',
  'Support for lower back pain, upper back tension, posture-related pain, and rehabilitation',
  'Flexible appointments, including evenings and weekends',
  { text: 'Hundreds of Google reviews from local clients', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Rehabilitation-focused approach with aftercare and ongoing support',
  'Bupa partnership support for eligible services',
  'Focus on identifying the root cause, not just treating symptoms',
];

const COMMON_TYPES = [
  'Lower back pain',
  'Upper back pain',
  'Postural back pain',
  'Muscular strain',
  'Stiffness and reduced mobility',
  'Pain linked to inactivity or overuse',
  'Work-related back pain',
];

const SYMPTOMS = [
  'Dull aching or tightness in the back',
  'Sharp or sudden pain with movement',
  'Stiffness after sitting or resting',
  'Pain when bending, lifting, or twisting',
  'Muscle spasms',
  'Reduced flexibility or movement',
  'Pain spreading across the back or into surrounding areas',
  'Discomfort during work or daily activities',
  'Fatigue from ongoing tension',
];

const CAUSES = [
  'Poor posture (desk work, driving, screen use)',
  'Prolonged sitting or inactivity',
  'Heavy lifting or manual work',
  'Muscle weakness or imbalance',
  'Sudden movements or strain',
  'Sports or gym-related activity',
  'Stress-related muscle tension',
  'Previous injury',
  'Post-surgical weakness',
  'Repetitive movement patterns',
];

const WHEN_TO_SEE = [
  'Pain has lasted several weeks or keeps returning',
  'Movement feels restricted or uncomfortable',
  'Symptoms are affecting work or daily life',
  'You feel stiff or tight most of the time',
  'Pain worsens with activity or sitting',
  'You are avoiding movement due to discomfort',
  'Self-management or exercise is not improving symptoms',
];

const COMMONLY_SUPPORTED = [
  {
    title: 'Lower Back Pain',
    description:
      'Lower back pain often develops due to lifting, posture, or inactivity. It may feel stiff, tight, or painful when moving, sitting, or standing for long periods.',
  },
  {
    title: 'Upper Back Pain',
    description:
      'Upper back pain is commonly linked to posture, desk work, or stress-related tension, often affecting the shoulders and between the shoulder blades.',
  },
  {
    title: 'Postural Back Pain',
    description:
      'Pain caused by prolonged sitting, poor workstation setup, or repetitive positioning throughout the day.',
  },
  {
    title: 'Work-Related Back Pain',
    description:
      'Back pain linked to manual labour, repetitive tasks, or physically demanding jobs.',
  },
  {
    title: 'Muscle & Tension-Related Pain',
    description:
      'Tight muscles and trigger points can create persistent discomfort and restricted movement.',
  },
];

const HOW_WE_HELP = [
  'Your symptoms and pain patterns',
  'Movement and posture',
  'Work and lifestyle factors',
  'Previous injuries',
  'Activity levels',
  'Recovery goals',
];

const METHODS = [
  {
    title: 'Musculoskeletal Physiotherapy',
    description:
      'Rehabilitation-focused physiotherapy helps restore movement, strength, and function.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Sports Massage Therapy',
    description:
      'Helps reduce muscular tension and improve flexibility, particularly for active individuals or work-related strain.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Targets deeper layers of muscle tension often associated with chronic back pain and stiffness.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Swedish Massage',
    description:
      'A lighter approach that may help with general tension and relaxation.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg',
    link: '/services/swedish-massage',
    linkLabel: 'Swedish Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Targets muscular trigger points that may contribute to pain and restricted movement.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Mobile Rehabilitation Services',
    description:
      'For clients unable to travel, home-based support may be available.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
    link: '/services/mobile-physiotherapy',
    linkLabel: 'Mobile Physiotherapy',
  },
];

const SUITABLE_FOR = [
  'Office workers with postural pain',
  'Manual workers with physical strain',
  'Individuals with lower or upper back pain',
  'People experiencing stiffness or reduced mobility',
  'Clients recovering from injury',
  'Gym users or active individuals',
  'People with work-related discomfort',
  'Individuals seeking support outside long NHS waiting times',
];

const RELATED_CONDITIONS = [
  { label: 'Muscle & Pain Conditions', href: '/conditions/muscle-and-pain' },
  { label: 'Sports & Injury Conditions', href: '/conditions/sports-and-injury' },
  { label: 'Lifestyle & Work-Related Conditions', href: '/conditions/lifestyle-and-work-related' },
];

const NOT_SUITABLE = [
  'Pain is linked to serious underlying conditions',
  'There are unexplained or worsening symptoms',
  'There is significant trauma or injury',
  'Neurological symptoms are present',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS experience across multiple clinical areas',
  'Experience treating musculoskeletal and postural conditions',
  'One-to-one appointments in a private clinic setting',
  'Flexible appointment availability',
  'Ongoing support and aftercare guidance',
  'Strong local reputation and trust',
];

const FAQS = [
  {
    question: 'Can Massage Help Back Pain?',
    answer:
      'Massage may help reduce muscular tension and improve movement where tightness is contributing to pain.',
  },
  {
    question: 'Is Lower Back Pain Common?',
    answer:
      'Yes, lower back pain is one of the most common musculoskeletal issues and often relates to posture, lifting, or inactivity.',
  },
  {
    question: 'Do I Need A Referral Before Booking?',
    answer: 'No. Most clients can contact us directly without a referral.',
  },
  {
    question: 'Can You Help With Postural Back Pain?',
    answer:
      'Yes. Many clients seek support for back pain linked to desk work, sitting, or poor posture.',
  },
  {
    question: 'Will I Need Multiple Sessions?',
    answer:
      'This depends on your symptoms, goals, and how long the issue has been present.',
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

function BackPainConditions() {
  useEffect(() => {
    document.title = 'Back Pain Treatment in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Expert support for lower back pain, upper back pain & stiffness | Personalised rehabilitation, massage & recovery treatment →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Back Pain Treatment in Dudley (Lower & Upper Back Support)" />

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
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Back pain is one of the most common reasons people seek treatment. Whether it is
                  a dull ache, sharp discomfort, stiffness, or pain that limits movement, back
                  pain can affect work, sleep, exercise, and everyday life.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  At Renew Body Therapy, we provide personalised lower and upper back pain
                  treatment in Dudley through tailored rehabilitation, hands-on therapy, and
                  movement-focused treatment designed to help you move more comfortably and
                  confidently — whether your symptoms are recent or long-standing, our goal is to
                  identify contributing factors and support your recovery with a structured,
                  practical approach.
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
                    alt="Back pain treatment at Renew Body Therapy Dudley"
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

          {/* ─── Understanding Back Pain ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Understanding Back Pain
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Back pain refers to discomfort affecting the muscles, joints, ligaments, and
                  structures of the spine. It can occur in the lower back (lumbar region), upper
                  back (thoracic region), or across multiple areas.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Lower back pain is often linked to lifting, posture, or prolonged sitting, while
                  upper back pain is commonly associated with desk work, stress, or muscular
                  tension.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Common types of back pain include:
                </p>
                <BulletList items={COMMON_TYPES} twoCol />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
                  Some cases improve with simple changes, while others benefit from structured
                  rehabilitation and professional support.
                </p>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms Of Back Pain
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Symptoms can vary depending on the cause and severity. Common signs include:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Symptoms may come and go or gradually worsen over time if not addressed.
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
                    In many cases, the underlying cause is linked to movement habits and lifestyle
                    factors.
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
                  When To See A Professional
                </h3>
                <p className="text-gray-700 mb-4">You may wish to seek professional support if:</p>
              </div>
            </div>
            <BulletList items={WHEN_TO_SEE} twoCol />
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
              <strong>Important:</strong> Seek urgent medical attention if you experience severe
              trauma, unexplained weight loss, loss of bladder or bowel control, or sudden
              neurological symptoms.
            </div>
          </section>

          {/* ─── Types Of Back Pain We Commonly Support ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              Types Of Back Pain We Commonly Support
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
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <span className="text-gray-600 text-sm sm:text-base">Explore related conditions:</span>
              {RELATED_CONDITIONS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                >
                  {item.label} →
                </Link>
              ))}
            </div>
          </section>

          {/* ─── How We Help ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp"
                  alt="Personalised back pain treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help With Back Pain
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we focus on understanding how your back pain affects your
                  movement, daily routine, and quality of life.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Your assessment may explore:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  From there, we create a personalised plan that may include hands-on therapy,
                  rehabilitation exercises, and movement guidance tailored to your needs. We focus
                  on long-term improvement, not short-term relief alone.
                </p>
                <Link
                  to="/about"
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
              Methods &amp; Services We Use To Help Back Pain
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
                Our back pain support services may be suitable for:
              </p>
              <BulletList items={SUITABLE_FOR} />
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
                Our services may not be appropriate in all cases. Referral to a GP or specialist
                may be required where:
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
                Treatment may need to be adapted depending on your health, symptoms, and medical
                history. Our services support rehabilitation and mobility but do not replace
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
                  Clients choose Renew Body Therapy for our personalised, rehabilitation-focused
                  approach to back pain.
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
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg"
                  alt="Professional back pain therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Back Pain
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
              Enquire About Upper &amp; Lower Back Pain Treatment in Dudley
            </h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we understand how limiting back pain can feel. Whether you
              are experiencing lower back pain, upper back tension, or ongoing stiffness, our goal
              is to provide honest, personalised support to help you move more comfortably.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              Through tailored rehabilitation, hands-on therapy, and movement-focused treatment,
              we aim to help you take positive steps towards improved mobility and quality of
              life.
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

export default BackPainConditions;
