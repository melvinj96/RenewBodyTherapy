import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Personalised treatment plans based on your symptoms, lifestyle, and goals',
  'Private, one-to-one appointments at our clinic',
  'Support for neck pain, muscular tension, stiffness, postural discomfort, and rehabilitation',
  'Honest advice with no pressure to commit to block bookings',
  'Flexible appointments, including evenings and weekends',
  'Rehabilitation-focused treatment with exercises and aftercare where appropriate',
  { text: 'Hundreds of five-star reviews - read our testimonials', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Bupa partnership support - view our insurance partners',
  'Focus on understanding contributing factors rather than simply treating symptoms',
];

const COMMON_TYPES = [
  'General neck pain and stiffness',
  'Muscular neck tension',
  'Neck and shoulder tightness',
  'Postural neck pain',
  'Work-related neck discomfort',
  'Reduced neck mobility',
  'Exercise or activity-related neck strain',
  'Recurring muscular tightness',
];

const SYMPTOMS = [
  'Aching or soreness around the neck',
  'Tight or tense neck muscles',
  'Stiffness when turning your head',
  'Reduced range of movement',
  'Discomfort around the shoulders or upper back',
  'Pain after sitting at a desk for long periods',
  'Tender or sensitive muscles',
  'Muscle knots or trigger points',
  'Discomfort when looking up or down',
  'Symptoms aggravated by particular movements or positions',
  'Tension headaches associated with neck or shoulder tightness',
];

const CAUSES = [
  'Prolonged desk or computer work',
  'Repetitive workplace movements',
  'Extended periods of sitting',
  'Driving for long periods',
  'Sustained or uncomfortable positions',
  'Muscular tension',
  'Stress-related muscle tightness',
  'Sports or gym activity',
  'Sudden increases in physical activity',
  'Previous injuries',
  'Reduced movement or inactivity',
  'Repetitive lifting or manual work',
];

const WHEN_TO_SEE = [
  'Your neck pain has lasted for several weeks',
  'Symptoms repeatedly return',
  'Your neck feels persistently stiff or restricted',
  'Pain is interfering with work, sleep, exercise, or driving',
  'Turning or moving your head has become uncomfortable',
  'Neck and shoulder tension is affecting everyday activities',
  'You have reduced your normal activities because of discomfort',
  'Self-management has not improved the problem',
];

const COMMONLY_SUPPORTED = [
  {
    title: 'Muscular Neck Pain & Tightness',
    description:
      'Tight or overworked muscles around the neck and shoulders can cause aching, tenderness, stiffness, and restricted movement.',
  },
  {
    title: 'Postural & Desk-Related Neck Pain',
    description:
      'Long periods spent working at a computer or maintaining the same position can contribute to neck and shoulder discomfort.',
  },
  {
    title: 'Neck & Shoulder Tension',
    description:
      'The neck, shoulders, and upper back work closely together, which means muscular tension may be felt across more than one area.',
  },
  {
    title: 'Work-Related Neck Pain',
    description:
      'Desk-based roles are not the only jobs that can affect the neck. Driving, lifting, repetitive movements, manual work, and maintaining awkward positions can also contribute to muscular strain and stiffness.',
  },
  {
    title: 'Activity & Exercise-Related Neck Pain',
    description:
      'Training, lifting weights, sports, or unfamiliar physical activity can sometimes result in muscular soreness or strain around the neck and upper body.',
  },
  {
    title: 'Neck Pain With Nerve-Related Symptoms',
    description:
      'Neck symptoms can sometimes occur alongside tingling, numbness, weakness, or discomfort travelling towards the shoulder, arm, or hand.',
  },
];

const HOW_WE_HELP = [
  'Where you experience pain or stiffness',
  'How and when your symptoms began',
  'Movements that aggravate or ease the problem',
  'Neck and upper-body movement',
  'Work and lifestyle demands',
  'Exercise and activity levels',
  'Previous injuries',
  'Relevant medical history',
  'Your recovery goals',
];

const METHODS = [
  {
    title: 'Musculoskeletal Physiotherapy',
    description:
      'Musculoskeletal physiotherapy takes a rehabilitation-focused approach to problems affecting muscles, joints, and movement.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Deep tissue massage uses controlled, targeted pressure to address deeper muscular tension.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Sports Massage Therapy',
    description:
      'Sports massage may be suitable where neck and shoulder tightness is associated with training, physical work, exercise, or muscular overuse.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Dry needling uses fine, sterile needles to target muscular trigger points and areas of tightness.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Swedish Massage',
    description:
      'For people seeking a lighter approach to muscular tension, Swedish massage may be considered where appropriate.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg',
    link: '/services/swedish-massage',
    linkLabel: 'Swedish Massage',
  },
  {
    title: 'Mobile Rehabilitation',
    description:
      'Where mobility or other circumstances make travelling difficult, selected rehabilitation services may be available at home.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
    link: '/services/mobile-physiotherapy',
    linkLabel: 'Mobile Rehab',
  },
];

const SUITABLE_FOR = [
  'Office and desk-based workers',
  'People experiencing recurring neck stiffness',
  'Clients with muscular neck and shoulder tension',
  'Drivers who spend long periods sitting',
  'Manual workers experiencing physical strain',
  'Gym users and active individuals',
  'People with postural discomfort',
  'Clients experiencing restricted neck movement',
  'People returning to activity after muscular injury',
  'Individuals whose symptoms are affecting work or everyday life',
  'People seeking private support outside long NHS waiting times',
];

const RELATED_CONDITIONS = [
  { label: 'Muscle & Pain Conditions', href: '/conditions/muscle-and-pain' },
  { label: 'Sports & Injury Conditions', href: '/conditions/sports-and-injury' },
  { label: 'Nerve & Complex Conditions', href: '/conditions/nerve-and-complex' },
  { label: 'Back Pain', href: '/conditions/back-pain' },
];

const NOT_SUITABLE = [
  'There is significant or recent trauma',
  'There is rapidly worsening weakness',
  'There are persistent or unexplained neurological changes',
  'Serious unexplained symptoms or a suspected fracture are present',
  'Symptoms require urgent medical investigation (e.g. acute infection, or vascular or neurological concerns)',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS experience across acute and community healthcare',
  'Clinical experience including trauma and orthopaedics, stroke and neurology, respiratory care, cardiology, general and vascular surgery',
  'Level 3 sports massage training',
  'Private, one-to-one treatment',
  'Personalised plans rather than standard treatment packages',
  'Honest advice when treatment is not appropriate',
  'No pressure to purchase block bookings',
  'Rehabilitation exercises and aftercare where suitable',
  'A strong reputation among local clients',
];

const FAQS = [
  {
    question: 'Can Massage Help With Neck Pain?',
    answer:
      'Massage may help where muscular tightness or tension is contributing to neck discomfort. The appropriate technique depends on your symptoms, which is why assessment and personalised treatment are important.',
  },
  {
    question: 'What Is The Best Treatment For A Stiff Neck?',
    answer:
      'There is no single treatment that is best for every stiff neck. Depending on the cause and symptoms, treatment may involve movement advice, rehabilitation exercises, massage, hands-on therapy, or other appropriate approaches.',
  },
  {
    question: 'Can You Help With Neck Pain From Desk Work?',
    answer:
      'Yes. Renew Body Therapy supports clients experiencing postural and work-related muscular discomfort. Treatment can consider your neck movement, muscular tension, work demands, and factors that may repeatedly aggravate the problem.',
  },
  {
    question: 'Can Dry Needling Be Used For Neck Tension?',
    answer:
      "Dry needling may be appropriate for certain muscular trigger points and areas of tightness following assessment. Renew Body Therapy's dry needling service specifically lists the neck and shoulders among areas where clients may experience muscular pain and tension.",
  },
  {
    question: 'What If My Neck Pain Travels Into My Arm?',
    answer:
      'Pain, tingling, numbness, or weakness extending into the shoulder, arm, or hand can sometimes involve nerve irritation. These symptoms should be appropriately assessed, particularly if they are persistent, worsening, or accompanied by loss of strength.',
  },
  {
    question: 'Do I Need A GP Referral?',
    answer:
      'No. Most clients can contact Renew Body Therapy directly to discuss an appointment. If your symptoms suggest that medical or specialist assessment would be more appropriate, you may be advised accordingly.',
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

function NeckPainConditions() {
  useEffect(() => {
    document.title = 'Neck Pain Treatment in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Personalised treatment for neck pain, stiffness & muscular tension in Dudley | Physiotherapy, massage, dry needling & rehabilitation support →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Neck Pain Treatment in Dudley (Stiffness, Tension & Mobility Support)" />

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
                  Neck pain can make even simple everyday movements uncomfortable. Turning your
                  head while driving, working at a computer, exercising, sleeping, or looking down
                  at a phone can become difficult when your neck feels painful, tight, or
                  restricted.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we provide personalised neck pain treatment in Dudley,
                  combining rehabilitation, hands-on therapy, and movement-focused support
                  according to your symptoms and individual needs.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  Whether you have recently developed a stiff neck or have been experiencing
                  recurring neck and shoulder tension for some time, we aim to help you understand
                  the factors contributing to your symptoms and take practical steps towards more
                  comfortable movement.
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
                    alt="Neck pain treatment at Renew Body Therapy Dudley"
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

          {/* ─── Understanding Neck Pain ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Understanding Neck Pain
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Neck pain describes discomfort affecting the muscles, joints, and surrounding
                  structures of the cervical spine and upper body. Symptoms can remain around the
                  neck itself or be accompanied by tightness across the shoulders and upper back.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  For some people, neck pain appears suddenly after an awkward movement or
                  physical activity. For others, it develops gradually following long periods of
                  desk work, driving, repetitive movements, or sustained positions.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Common neck-related problems include:
                </p>
                <BulletList items={COMMON_TYPES} twoCol />
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms Of Neck Pain
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Neck pain does not feel the same for everyone. Depending on what is
                    contributing to the problem, symptoms may include:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-sm text-gray-500 mt-4 italic">
                    Symptoms can be temporary, recurring, or persistent and may become
                    particularly noticeable during work, driving, exercise, or after remaining in
                    one position for an extended period.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Possible Causes &amp; Triggers
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    There is not always one single cause of neck pain. Several physical,
                    occupational, and lifestyle factors can contribute at the same time.
                  </p>
                  <BulletList items={CAUSES} twoCol />
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
                <p className="text-gray-700 mb-4">Consider seeking professional support if:</p>
              </div>
            </div>
            <BulletList items={WHEN_TO_SEE} twoCol />
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
              <strong>Important:</strong> Symptoms such as persistent numbness, tingling,
              weakness, or pain travelling into an arm may require additional assessment because
              nerve irritation can sometimes produce symptoms away from the neck. Seek urgent
              medical attention following significant trauma or if you develop sudden or rapidly
              worsening neurological symptoms, unexplained loss of strength, severe unexplained
              symptoms, or other signs of a medical emergency.
            </div>
          </section>

          {/* ─── Types Of Neck Pain We Commonly Support ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              Types Of Neck Pain We Commonly Support
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
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg"
                  alt="Personalised neck pain treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help With Neck Pain
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, treatment begins by understanding your symptoms rather
                  than automatically selecting a particular therapy.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Your assessment may consider:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  From there, an individual treatment plan can be created according to your needs.
                  Depending on your assessment, this may involve hands-on treatment,
                  rehabilitation exercises, mobility work, dry needling, massage, or practical
                  movement advice.
                </p>
                <Link
                  to="/about"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  Learn more about Renew Body Therapy →
                </Link>
              </div>
            </div>
          </section>

          {/* ─── Methods / Services ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-4">
              Methods &amp; Services We May Use For Neck Pain
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl">
              The most appropriate treatment depends on what is contributing to your symptoms.
              Not everyone with neck pain requires the same approach.
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
                Who Neck Pain Treatment May Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our neck pain support may be suitable for:
              </p>
              <BulletList items={SUITABLE_FOR} />
              <div className="mt-6">
                <Link
                  to="/services"
                  className="inline-block bg-secondary text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-secondary-dark transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who This May Not Be Suitable For &amp; Key Considerations
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Not every episode of neck pain is appropriate for massage or rehabilitation
                treatment. Further medical assessment may be needed where symptoms involve:
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
                Treatment may also need to be modified according to your medical history, current
                symptoms, and general health. Our services support muscular recovery,
                rehabilitation, mobility, and wellbeing but do not replace medical diagnosis or
                emergency healthcare.
              </p>
            </div>
          </section>

          {/* ─── Why Choose RBT ─── */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Why Choose Renew Body Therapy for Treatment of Neck Pain In Dudley?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  We combine hands-on treatment with rehabilitation experience and personalised
                  care.
                </p>
                <BulletList items={WHY_CHOOSE_RBT} />
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/team"
                    className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary-dark transition-all duration-300"
                  >
                    Meet The Team
                  </Link>
                  <Link
                    to="/about/our-clinic"
                    className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-all duration-300"
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
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg"
                  alt="Professional neck pain therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Neck Pain
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
              Enquire About Neck Pain Treatment in Dudley
            </h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we provide personalised neck pain support in Dudley focused
              on understanding your symptoms, improving movement, reducing muscular tension where
              appropriate, and helping you work towards longer-term recovery.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              If you are experiencing persistent neck stiffness, muscular tension, postural
              discomfort, or recurring neck pain, contact us to discuss the most appropriate next
              step.
            </p>
            <p className="text-sm mb-8 max-w-2xl mx-auto opacity-75">
              Please note: Our services support rehabilitation, muscular recovery, mobility, and
              wellbeing but do not replace medical diagnosis, emergency treatment, or specialist
              healthcare advice where required.
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

export default NeckPainConditions;
