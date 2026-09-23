import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import { AVAILABILITY_FAQ } from '../../data/availabilityFaq';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1790178081/Masages-for-Sciatica_csmrqy.jpg';

const NHS_SCIATICA_URL = 'https://www.nhs.uk/conditions/sciatica/';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Individual assessment of your pain, nerve-related symptoms, mobility, and daily activities',
  'Personalised treatment rather than a standard approach to sciatica',
  'Private, one-to-one appointments at our clinic',
  'Rehabilitation-focused support for back, leg, and movement-related problems',
  'Practical exercises and aftercare where appropriate',
  'Honest advice if your symptoms require medical or specialist assessment',
  'No pressure to purchase unnecessary treatment packages',
  'Flexible appointment availability, including evenings and weekends',
  { text: 'Hundreds of five-star reviews - read our testimonials', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Bupa partnership support - view our insurance partners',
  'Treatment focused on your individual symptoms, goals, and circumstances',
];

const SYMPTOMS = [
  'Pain extending from the lower back or buttock into the leg',
  'Sharp, burning, or shooting discomfort',
  'Tingling or pins and needles',
  'Areas of numbness',
  'Leg or foot weakness',
  'Buttock discomfort',
  'Pain around the back of the thigh',
  'Symptoms extending towards the calf or foot',
  'Difficulty sitting comfortably for extended periods',
  'Symptoms aggravated by certain movements or positions',
  'Reduced confidence with normal movement or exercise',
  'Lower back pain alongside nerve-related leg symptoms',
];

const CAUSES = [
  'Changes affecting discs in the lower spine',
  'Irritation or compression around a spinal nerve',
  'Changes affecting the spaces around nerves in the spine',
  'Lower-back injuries or irritation',
  'Prolonged periods of sitting',
  'Physical work involving repeated bending or lifting',
  'Changes in activity levels',
  'Previous episodes of back problems',
  'Reduced movement following pain or injury',
];

const WHEN_TO_SEE = [
  'Pain travels from your back or buttock into your leg',
  'Symptoms have persisted rather than gradually settling',
  'Sciatica repeatedly returns',
  'Tingling or numbness is affecting everyday activities',
  'Sitting, standing, or walking has become difficult',
  'Your symptoms are interfering with work or sleep',
  'You have stopped exercising or reduced normal activities because of pain',
  'You are unsure how to return safely to normal activity',
];

const HOW_WE_HELP = [
  'Where your symptoms begin and where they travel',
  'Whether you experience pain, tingling, numbness, or weakness',
  'When the symptoms first appeared',
  'Positions or activities that aggravate your symptoms',
  'Movements that make you feel more comfortable',
  'Lower-back and lower-body movement',
  'Walking and general mobility',
  'Work, driving, and daily activity demands',
  'Exercise and sporting activities',
  'Previous injuries or episodes of back pain',
  'Relevant health and medical history',
  'What you would like to return to doing',
];

const METHODS = [
  {
    title: 'Musculoskeletal Physiotherapy',
    description:
      'Musculoskeletal physiotherapy can assess problems involving movement, muscles, joints, and related musculoskeletal symptoms. For clients experiencing sciatica, physiotherapy may include movement assessment, appropriate exercises, rehabilitation, and advice on gradually returning to normal activities.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Rehabilitation & Exercise Support',
    description:
      'Movement and rehabilitation can be important parts of managing many back and sciatic problems. Your programme may include exercises selected according to your current ability, symptoms, and goals rather than relying on a generic routine.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
  },
  {
    title: 'Sports Massage Therapy',
    description:
      'Sports massage may be considered when muscular tightness or soft-tissue discomfort is present alongside your wider symptoms. Massage does not remove every underlying cause of sciatica, so its suitability will depend on your assessment.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Where appropriate, deep tissue massage may be used to work with areas of muscular tension around the lower back, hips, or surrounding tissues. Treatment pressure and techniques can be adapted to your comfort and clinical presentation.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Dry needling may be considered where relevant muscular trigger points or tightness are contributing to discomfort.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Mobile & Home Rehabilitation',
    description:
      'If pain, reduced mobility, recent illness, or other circumstances make attending the clinic difficult, selected rehabilitation support may be available at home.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg',
    link: '/services/home-rehabilitation',
    linkLabel: 'Mobile Rehab',
  },
];

const SUITABLE_FOR = [
  'People experiencing pain travelling from the buttock into the leg',
  'Clients with lower-back pain alongside leg symptoms',
  'People experiencing recurring sciatic symptoms',
  'Office workers whose symptoms make prolonged sitting difficult',
  'Drivers experiencing back or leg discomfort',
  'Manual workers affected by back and nerve-related symptoms',
  'Active people whose symptoms are limiting training or exercise',
  'Clients experiencing tingling or altered sensation alongside back or leg discomfort',
  'People whose symptoms are affecting walking or everyday mobility',
  'Individuals returning to activity following a period of back or sciatic pain',
  'People looking for personalised private rehabilitation support',
];

const RELATED_CONDITIONS = [
  { label: 'Back Pain', href: '/conditions/back-pain' },
  { label: 'Nerve & Complex Conditions', href: '/conditions/nerve-and-complex' },
  { label: 'Lifestyle & Work-Related Conditions', href: '/conditions/lifestyle-and-work-related' },
  { label: 'Rehabilitation & Post-Medical Conditions', href: '/conditions/rehabilitation-and-post-medical' },
];

const NOT_SUITABLE = [
  'Severe or rapidly worsening muscle weakness',
  'Significant loss of sensation',
  'Symptoms affecting both legs',
  'Numbness around your genitals, buttocks, or saddle area',
  'New difficulty controlling your bladder or bowel',
  'Difficulty starting or controlling urination',
  'Significant recent trauma',
  'Severe unexplained or rapidly worsening symptoms',
  'Signs of infection or serious illness',
  'Symptoms that require further neurological or medical investigation',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Experience across trauma and orthopaedics, stroke and neurology, respiratory care, cardiology, general and vascular surgery, and community rehabilitation',
  'A rehabilitation-focused approach to musculoskeletal and mobility problems',
  'Level 3 sports massage training',
  'Individual, one-to-one appointments',
  'Treatment plans based on assessment rather than predetermined packages',
  'Exercises and practical aftercare when appropriate',
  'Honest guidance when further medical assessment is advisable',
  'No pressure to commit to block bookings',
  'A private clinic in Dudley',
  'Home-based rehabilitation options for suitable clients',
  'A strong reputation supported by hundreds of five-star client reviews',
];

const FAQS = [
  {
    question: 'Can Physiotherapy Help With Sciatica?',
    answer:
      'Physiotherapy may be used to assess movement and develop an individual rehabilitation programme for people with sciatic symptoms. This can include appropriate exercises, movement advice, and strategies for gradually returning to normal activities.',
  },
  {
    question: 'Can Massage Help Sciatica?',
    answer:
      'Massage may be useful for some people when muscular tension or discomfort exists alongside their sciatic symptoms. However, sciatica involves nerve-related symptoms, so massage is not necessarily appropriate as a standalone treatment or for every individual.',
  },
  {
    question: 'Should I Keep Moving If I Have Sciatica?',
    answer:
      'Remaining completely inactive for extended periods is not generally the goal of rehabilitation. However, the appropriate amount and type of movement depends on your symptoms and circumstances. If you are uncertain about exercise or movement because of persistent sciatic symptoms, an individual assessment can help determine a more appropriate approach.',
  },
  {
    question: 'When Is Sciatica An Emergency?',
    answer:
      'Seek urgent medical attention if sciatic-type symptoms are accompanied by new numbness around the genitals or bottom, severe or worsening weakness in both legs, difficulty starting urination, loss of bladder or bowel control, or other rapidly worsening neurological symptoms.',
  },
  {
    question: 'Do I Need A GP Referral For Sciatica Treatment?',
    answer:
      'No. You can contact Renew Body Therapy directly to discuss an appointment. If your assessment or symptoms indicate that GP, urgent medical, or specialist investigation is more appropriate, you may be advised to seek that support.',
  },
  AVAILABILITY_FAQ,
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

function SciaticaConditions() {
  useEffect(() => {
    document.title = 'Sciatica Treatment in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Personalised sciatica treatment in Dudley for leg pain, nerve-related symptoms & mobility problems | Physiotherapy, rehabilitation & hands-on support →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Sciatica Treatment in Dudley (Nerve Pain, Leg Symptoms & Mobility Support)" />

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
                  Sciatica can affect far more than your lower back. Pain, tingling, numbness, or
                  other symptoms may travel through the buttock and into the leg, making walking,
                  sitting, working, driving, exercising, and everyday movement uncomfortable.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  At Renew Body Therapy, we provide personalised sciatica treatment in Dudley, with
                  support tailored to your symptoms, movement, lifestyle, and rehabilitation needs.
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
                    alt="Sciatica treatment at Renew Body Therapy Dudley"
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

          {/* ─── Understanding Sciatica ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Understanding Sciatica
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Sciatica is commonly used to describe symptoms caused by irritation or compression
                  affecting the sciatic nerve or its nerve roots. The sciatic nerve runs from the
                  lower back through the buttock and down the leg, which is why symptoms may be
                  experienced away from the back itself.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Some people experience lower back discomfort alongside their leg symptoms, while
                  others notice that pain, tingling, or numbness in the buttock or leg is the more
                  prominent problem.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  The intensity and pattern of sciatica can vary considerably. Symptoms may develop
                  suddenly or gradually and can sometimes fluctuate according to movement, posture,
                  activity, or how long you remain in a particular position.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  You can also read the{' '}
                  <a
                    href={NHS_SCIATICA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline font-medium"
                  >
                    NHS guidance on sciatica
                  </a>{' '}
                  for further general health information.
                </p>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms Of Sciatica
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Sciatica often affects one side of the body, although the precise symptoms and
                    areas affected vary between individuals. You may experience:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-gray-600 mt-4 text-sm">
                    Because symptoms involving nerves can have different causes and levels of
                    severity, appropriate assessment is particularly important.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    What Can Contribute To Sciatic Symptoms?
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Sciatica is associated with irritation or compression of the sciatic nerve or
                    the nerve roots that contribute to it. Factors associated with sciatic symptoms
                    can include:
                  </p>
                  <BulletList items={CAUSES} twoCol />
                  <p className="text-gray-700 mt-4 text-sm sm:text-base">
                    Having back or leg pain does not automatically mean you have sciatica. An
                    assessment can help establish the nature of your symptoms and whether
                    rehabilitation is appropriate.
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
                  When To Seek Professional Advice For Sciatica
                </h3>
                <p className="text-gray-700 mb-4">It may be worth arranging an assessment when:</p>
              </div>
            </div>
            <BulletList items={WHEN_TO_SEE} twoCol />
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
              <strong>Important:</strong> Certain symptoms require urgent medical attention. Seek
              urgent help if you develop severe or worsening weakness or numbness in both legs,
              numbness around the genitals or bottom, difficulty starting urination, loss of bladder
              or bowel control, or other rapidly developing neurological symptoms.
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-secondary text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-secondary-dark transition-all duration-300"
              >
                Book an Appointment
              </Link>
            </div>
          </section>

          {/* ─── How We Help ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg"
                  alt="Personalised sciatica treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help With Sciatica in Dudley
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, your treatment is based on an individual assessment rather
                  than the assumption that a single technique will resolve every case of sciatica.
                  We may discuss and assess:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  Following your assessment, we can discuss an appropriate treatment and
                  rehabilitation plan. The aim may include supporting comfortable movement,
                  gradually rebuilding activity, addressing relevant muscular problems, and helping
                  you develop practical strategies for managing your recovery.
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
              Methods &amp; Services We May Use For Sciatica
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              The appropriate approach depends on your assessment, symptoms, and whether treatment
              at Renew Body Therapy is suitable.
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
                    {method.link && (
                      <div className="mt-auto">
                        <Link
                          to={method.link}
                          className="inline-flex items-center gap-1 text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                        >
                          {method.linkLabel} →
                        </Link>
                      </div>
                    )}
                  </div>
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

          {/* ─── Suitable / Not Suitable ─── */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <h2 className="text-2xl font-tertiary font-bold text-primary mb-6">
                Who Sciatica Treatment May Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our sciatica and nerve-related rehabilitation support may be suitable for:
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
                Although sciatica is often managed conservatively, nerve-related symptoms should
                not automatically be treated as a routine muscular problem. Medical or specialist
                assessment may be more appropriate if you have:
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
              <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
                New bladder or bowel changes, saddle-area numbness, or severe/worsening
                neurological symptoms can require urgent medical attention.
              </div>
              <p className="text-sm text-gray-600 mt-5 p-4 bg-white rounded-xl border border-gray-200">
                Renew Body Therapy provides musculoskeletal and rehabilitation support but does not
                replace emergency medical care, medical diagnosis, or specialist investigation where
                these are required.
              </p>
            </div>
          </section>

          {/* ─── Why Choose RBT ─── */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Why Choose Renew Body Therapy For Sciatica Treatment In Dudley?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  If you are searching for sciatica specialists in Dudley, it is important to find a
                  practitioner who considers your wider movement and rehabilitation needs rather
                  than focusing only on the location where you feel pain.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  At Renew Body Therapy, clients benefit from:
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
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1790178251/xXW5IZn6fNlFoi2LvoI8E2oVl6ASBvvMli0ziJnR_ot7hqv.jpg"
                  alt="Professional sciatica therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Sciatica
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
              Enquire Today
            </h2>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we provide sciatica treatment in Dudley and the nearby areas,
              providing individual assessment, appropriate rehabilitation, comfortable movement, and
              practical support for returning to everyday activities.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              Contact us to discuss your symptoms and whether an appointment would be appropriate.
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

export default SciaticaConditions;
