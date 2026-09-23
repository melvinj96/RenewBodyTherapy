import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import { AVAILABILITY_FAQ } from '../../data/availabilityFaq';

const HERO_IMAGE =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1790177552/Massage_Therapy_For_Knee_Pain_pvcsjf.jpg';

const WHY_CHOOSE = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Personalised knee rehabilitation based on your symptoms and goals',
  'Private, one-to-one appointments at our clinic',
  'Support for knee pain, stiffness, reduced mobility, muscular tension, and rehabilitation',
  'Honest advice with no pressure to commit to unnecessary block bookings',
  'Flexible appointments, including evenings and weekends',
  'Rehabilitation-focused care with exercises and aftercare where appropriate',
  { text: 'Hundreds of five-star reviews - read our testimonials', href: 'https://www.google.com/search?q=renew+body+therapy&rlz=1C1RXQR_enGB1161GB1161&oq=renew+body+therapy&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x48709750e7f688b1:0x83ee7cff6ffbe39d,1,,,,' },
  'Bupa partnership support - view our insurance partners',
  'A whole-person approach that considers movement, daily activity, and contributing factors',
];

const COMMON_TYPES = [
  'General knee pain',
  'Knee stiffness',
  'Pain during walking or climbing stairs',
  'Exercise-related knee discomfort',
  'Knee pain after running or gym activity',
  'Reduced mobility',
  'Muscular tightness around the thigh or calf',
  'Post-injury knee rehabilitation',
  'Post-surgical knee weakness',
  'Recurring discomfort during everyday movement',
];

const SYMPTOMS = [
  'Aching around or behind the knee',
  'Pain when bending or straightening the leg',
  'Stiffness after sitting or resting',
  'Discomfort when climbing or descending stairs',
  'Pain while walking or standing',
  'Reduced knee movement',
  'Tenderness around the joint',
  'Tightness in the surrounding muscles',
  'Weakness or lack of confidence when weight-bearing',
  'Discomfort during running, squatting, or gym activity',
  'Difficulty getting up from a chair',
  'Swelling or irritation following activity',
];

const CAUSES = [
  'Sudden increases in exercise or training',
  'Running or repetitive impact activity',
  'Gym-based exercises such as squats or lunges',
  'Twisting or awkward movements',
  'Muscle weakness or imbalance',
  'Reduced flexibility',
  'Previous knee injuries',
  'Prolonged standing',
  'Manual or physically demanding work',
  'Reduced activity followed by sudden increases in movement',
  'Changes in walking pattern',
  'Recovery after surgery or illness',
  'Age-related changes in mobility and joint function',
];

const WHEN_TO_SEE = [
  'Your knee pain has lasted for several weeks',
  'Symptoms keep returning',
  'Walking or climbing stairs has become uncomfortable',
  'Your knee feels stiff or difficult to move',
  'Pain is preventing you from exercising or working normally',
  'You feel weaker or less confident when using the affected leg',
  'The knee is affecting your balance or mobility',
  'Recovery after injury or surgery feels slower than expected',
  'Self-management has not improved the problem',
];

const HOW_WE_HELP = [
  'Where your pain or stiffness is located',
  'When your symptoms started',
  'Movements that aggravate the knee',
  'Activities that feel easier or more comfortable',
  'Knee and lower-limb movement',
  'Walking pattern and mobility',
  'Strength and balance',
  'Work demands',
  'Exercise and sporting activity',
  'Previous knee injuries',
  'Previous surgery or rehabilitation',
  'Relevant medical history',
  'Your recovery goals',
];

const METHODS = [
  {
    title: 'Musculoskeletal Physiotherapy',
    description:
      'Musculoskeletal physiotherapy may be used to assess knee movement, strength, lower-limb function, and factors that could be contributing to discomfort. Rehabilitation can then be adapted to your current ability and activity goals.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp',
    link: '/services/musculoskeletal-physiotherapy',
    linkLabel: 'Musculoskeletal Physiotherapy',
  },
  {
    title: 'Rehabilitation Exercises',
    description:
      'Exercise-based rehabilitation can help rebuild lower-limb strength, improve movement control, and support a gradual return to everyday activity. The programme can be progressed according to your response rather than following a fixed routine. Exercises may focus on:',
    suitable: [
      'Quadriceps strength',
      'Hip and glute strength',
      'Balance',
      'Knee movement',
      'Lower-limb control',
      'Functional movements such as stairs, walking, and sit-to-stand',
    ],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg',
  },
  {
    title: 'Sports Massage Therapy',
    description:
      'Sports massage may be considered when muscular tension around the thighs, calves, hips, or surrounding tissues is contributing to discomfort or restricted movement. This can be particularly relevant for active clients and people returning to sport.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg',
    link: '/services/sports-massage',
    linkLabel: 'Sports Massage',
  },
  {
    title: 'Deep Tissue Massage',
    description:
      'Deep tissue massage may be used where deeper muscular tension or stiffness is present in the surrounding lower-limb muscles. Massage does not treat every cause of knee pain, so it is used where appropriate as part of a wider treatment plan.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg',
    link: '/services/deep-tissue-massage',
    linkLabel: 'Deep Tissue Massage',
  },
  {
    title: 'Dry Needling',
    description:
      'Dry needling may be considered where relevant muscular trigger points or tightness are identified. Renew Body Therapy provides dry needling rather than acupuncture, and treatment is only recommended where it is suitable following assessment.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591747/acupuncture_ybkipz.jpg',
    link: '/services/acupuncture-dry-needling',
    linkLabel: 'Dry Needling',
  },
  {
    title: 'Swedish Massage',
    description:
      'Where muscular tension is present but a gentler approach is more appropriate, Swedish massage may be considered.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg',
    link: '/services/swedish-massage',
    linkLabel: 'Swedish Massage',
  },
  {
    title: 'Home & Mobile Rehabilitation',
    description:
      'Clients who have difficulty travelling because of pain, reduced mobility, surgery, or other health needs may be suitable for selected home-based services.',
    suitable: [],
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg',
    link: '/services/home-rehabilitation',
    linkLabel: 'Mobile Rehab',
  },
];

const SUITABLE_FOR = [
  'Runners and recreational athletes',
  'Gym users',
  'People experiencing recurring knee stiffness',
  'Manual and physically active workers',
  'Clients with knee pain during walking or stairs',
  'People returning to sport after injury',
  'Clients recovering after surgery',
  'Older adults experiencing reduced knee strength or mobility',
  'People whose knee discomfort is affecting everyday activity',
  'Individuals with muscular tightness around the thighs or lower legs',
  'Clients looking to improve confidence with movement',
  'People seeking private rehabilitation outside long NHS waiting times',
];

const RELATED_CONDITIONS = [
  { label: 'Sports & Injury Conditions', href: '/conditions/sports-and-injury' },
  { label: 'Rehabilitation & Post-Medical Conditions', href: '/conditions/rehabilitation-and-post-medical' },
  { label: 'Muscle & Pain Conditions', href: '/conditions/muscle-and-pain' },
  { label: 'Back Pain', href: '/conditions/back-pain' },
];

const NOT_SUITABLE = [
  'Significant trauma',
  'A suspected fracture',
  'Severe or sudden swelling',
  'An inability to bear weight',
  'A visibly deformed knee',
  'A hot, red, or highly swollen joint',
  'Fever or signs of infection',
  'Sudden locking following significant injury',
  'Rapidly worsening pain',
  'Unexplained neurological symptoms',
  'Symptoms that suggest a serious vascular or medical condition',
];

const WHY_CHOOSE_RBT = [
  'Nearly 10 years of NHS and private healthcare experience',
  'Experience across trauma and orthopaedics, stroke and neurology, respiratory care, cardiology, general and vascular surgery, and community rehabilitation',
  'Rehabilitation-focused treatment',
  'Level 3 sports massage training',
  'Private one-to-one appointments',
  'Personalised plans based on individual needs',
  'Practical exercises and aftercare where appropriate',
  'Honest guidance when another healthcare service is more appropriate',
  'No pressure to buy block bookings',
  'Home-based rehabilitation for suitable clients',
  'A strong reputation among clients across Dudley and surrounding areas',
];

const FAQS = [
  {
    question: 'Can Physiotherapy Help?',
    answer:
      'Physiotherapy may help assess factors such as movement, strength, balance, mobility, and lower-limb function. A rehabilitation plan can then be developed according to your symptoms and activity goals.',
  },
  {
    question: 'Can Massage Help?',
    answer:
      'Massage may help when muscular tightness in the thighs, calves, hips, or surrounding tissues is contributing to discomfort. However, not every knee problem is muscular, so massage should only be used where appropriate after assessment.',
  },
  {
    question: 'What Is The Best Treatment For Knee Pain?',
    answer:
      'There is no single treatment that is suitable for every knee problem. The most appropriate approach depends on factors such as the cause of your symptoms, whether there has been an injury, how long the pain has been present, and how the knee is affecting your movement. Treatment may involve rehabilitation, exercise, hands-on therapy, massage, movement advice, or referral for further medical assessment.',
  },
  {
    question: 'Can You Help With Pain From Running?',
    answer:
      'Yes. Renew Body Therapy supports clients with activity-related and sports-related knee discomfort. Assessment can consider training levels, movement, lower-limb strength, muscular tension, and factors that may be contributing to recurring symptoms.',
  },
  {
    question: 'Can Dry Needling Be Used Around Knee Problems?',
    answer:
      'Dry needling may be used for relevant muscular trigger points or tightness in surrounding tissues when appropriate. It does not directly treat every cause of knee pain and would only be used following an assessment.',
  },
  {
    question: 'Do You Help With Knee Pain After Surgery?',
    answer:
      'Yes. Rehabilitation may be suitable following certain knee or lower-limb procedures once you are medically ready to begin appropriate recovery work. We also provide post-hospital rehabilitation and home-based support for suitable cases.',
  },
  {
    question: 'Do I Need A GP Referral?',
    answer:
      'No. Most clients can contact Renew Body Therapy directly to discuss their symptoms and arrange an appointment. If your symptoms suggest that medical imaging, GP assessment, or specialist review is more appropriate, you may be advised accordingly.',
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

function KneePainConditions() {
  useEffect(() => {
    document.title = 'Knee Pain Treatment in Dudley | Renew Body Therapy';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Personalised knee pain treatment in Dudley for stiffness, mobility issues & activity-related discomfort | Physiotherapy, massage & rehabilitation support →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Knee Pain Treatment in Dudley (Stiffness, Mobility & Rehabilitation Support)" />

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
                  Knee pain can affect almost every part of daily life, from walking and climbing
                  stairs to exercising, working, driving, or simply getting up from a chair.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we provide personalised knee pain treatment in Dudley,
                  with rehabilitation and hands-on support tailored to your symptoms, mobility,
                  lifestyle, and goals.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  Whether your knee discomfort has developed after exercise, gradually over time,
                  following injury, or during recovery after surgery, we focus on understanding
                  how the problem is affecting your movement before recommending the most
                  appropriate treatment approach.
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
                    alt="Knee pain treatment at Renew Body Therapy Dudley"
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

          {/* ─── Understanding Knee Pain ─── */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Understanding Knee Pain
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Knee pain can involve the muscles, tendons, ligaments, joint structures, or
                  surrounding soft tissues that help the knee move and remain stable.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  For some people, symptoms develop suddenly after sport, exercise, a twist, or an
                  awkward movement. For others, knee discomfort develops gradually through
                  repetitive strain, changes in activity levels, physically demanding work,
                  previous injury, or reduced strength and mobility.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Common knee-related problems include:
                </p>
                <BulletList items={COMMON_TYPES} twoCol />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6">
                  Knee pain does not always have a single cause, so assessment is important when
                  symptoms persist, recur, or begin interfering with normal activity.
                </p>
              </div>
              <div>
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Common Symptoms Of Knee Pain
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Symptoms vary depending on what is contributing to the problem. You may notice:
                  </p>
                  <BulletList items={SYMPTOMS} />
                  <p className="text-gray-600 mt-4 text-sm">
                    Symptoms may be mild and intermittent or more persistent, particularly when the
                    knee is repeatedly loaded during work, sport, or everyday movement.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-tertiary font-bold text-secondary mb-4">
                    Possible Causes Or Triggers Of Pain In Your Knee
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Pain can develop for many reasons, and sometimes several factors are involved
                    at once. Possible contributors include:
                  </p>
                  <BulletList items={CAUSES} twoCol />
                  <p className="text-gray-700 mt-4 text-sm sm:text-base">
                    The location of pain alone does not always reveal the underlying issue, which
                    is why treatment should be based on assessment rather than assumptions.
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
                <p className="text-gray-700 mb-4">Consider seeking professional support if:</p>
              </div>
            </div>
            <BulletList items={WHEN_TO_SEE} twoCol />
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800">
              <strong>Important:</strong> Further medical assessment may be required if you
              experience severe swelling, significant trauma, an inability to bear weight, visible
              deformity, a hot or red joint, unexplained fever, sudden severe pain, or rapidly
              worsening symptoms.
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
                  src="https://res.cloudinary.com/diydpxavd/image/upload/v1790177825/massage-therapy-for-osteoarthritis-treatment-toronto_jl421a.jpg"
                  alt="Personalised knee pain treatment session"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  How We Help
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  At Renew Body Therapy, we do not assume that every knee problem should be treated
                  in the same way. Your assessment may consider:
                </p>
                <BulletList items={HOW_WE_HELP} />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 mb-4">
                  Following your assessment, a personalised plan can be developed around the areas
                  most relevant to you. This may involve rehabilitation exercises, mobility work,
                  movement guidance, appropriate hands-on treatment, massage, dry needling, or a
                  combination of approaches where suitable.
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
              Methods &amp; Services We May Use
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              The most appropriate treatment depends on the cause and nature of your symptoms. Not
              every person with knee pain will benefit from the same combination of treatments.
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
                Who Our Knee Pain Treatments in Dudley May Be Suitable For
              </h2>
              <p className="text-gray-600 mb-5 text-sm sm:text-base">
                Our knee pain support may be suitable for:
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
                Not all knee pain is appropriate for massage, physiotherapy, or private
                rehabilitation without further medical investigation. Further assessment may be
                required if you have:
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
                Treatment may need to be adapted based on previous surgery, medical conditions,
                medication, current symptoms, and your overall health. We support rehabilitation,
                muscular recovery, mobility, and wellbeing but do not replace medical diagnosis,
                emergency treatment, or specialist healthcare where required.
              </p>
            </div>
          </section>

          {/* ─── Why Choose RBT ─── */}
          <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  Why Choose Renew Body Therapy For Mobility Treatments?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  When looking for treatment for knee pain in Dudley, it is important to choose an
                  approach that considers more than the painful area alone.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  The knee works together with the hips, lower leg, muscles, balance, and overall
                  movement pattern, which is why personalised assessment is central to our
                  approach.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Clients benefit from:
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
                  alt="Professional knee pain therapy session at Renew Body Therapy"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </section>

          {/* ─── FAQs ─── */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
              FAQs About Knee Pain
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
              If knee pain is limiting your walking, exercise, work, mobility, or confidence with
              everyday movement, an individual assessment can help determine the most appropriate
              next step.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              At Renew Body Therapy, we provide personalised knee treatments with a focus on
              rehabilitation, movement, muscular support where appropriate, and practical steps
              towards improving everyday function.
            </p>
            <p className="text-lg mb-4 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss your symptoms and whether treatment may be suitable.
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

export default KneePainConditions;
