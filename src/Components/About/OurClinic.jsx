import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const phoneDisplay = '07401 261289';
const phoneTel = '07401261289';
const email = 'jikku2006@gmail.com';

const heroImage =
  'https://res.cloudinary.com/diydpxavd/image/upload/v1762857137/massage_table_endsdn.jpg';

const introHighlights = [
  'Nearly 10 years of NHS and private clinical experience',
  'Private home-based clinic with a calm, one-to-one setting',
  'Free consultation before every treatment',
  'No pressure to commit to block bookings',
  'Personalised aftercare plans and ongoing support',
  'Flexible appointment times to suit your schedule',
  'Honest advice on whether treatment is right for you',
  'Loyalty card offering £5 off your third session',
];

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SoftCheckList({ items }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mt-0.5">
            <CheckIcon className="w-4 h-4 text-secondary" />
          </div>
          <span className="text-gray-700 text-base sm:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SolidCheckList({ items }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
            <CheckIcon className="w-3 h-3 text-white" />
          </div>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}

const visitSteps = [
  {
    title: 'Personalised Welcome & Assessment',
    description:
      'You will be welcomed on arrival and given time to discuss your symptoms, lifestyle, and concerns. A professional assessment is carried out to determine the most suitable treatment options.',
  },
  {
    title: 'Honest & Transparent Advice',
    description:
      'You will always receive clear, honest guidance. If your condition requires a different approach or referral, this will be discussed openly.',
  },
  {
    title: 'Tailored Treatment Plan',
    description:
      'Your treatment may include massage therapy, dry needling, rehabilitation exercises, or a combination of approaches, depending on your needs.',
    link: { to: '/services', label: 'Explore our full range of services' },
  },
  {
    title: 'Ongoing Support & Aftercare',
    description:
      'You will receive guidance and exercises to continue your progress between sessions, with support available even outside of appointments.',
  },
];

const faqItems = [
  {
    question: 'Is the clinic private or shared?',
    answer:
      'The clinic is completely private, with one-to-one appointments only.',
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'Yes, all appointments are pre-booked to ensure privacy and dedicated time.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes, free street parking is available directly outside the property.',
  },
  {
    question: 'What should I expect at my first visit?',
    answer:
      'Your first session includes a consultation, assessment, and tailored treatment plan.',
  },
  {
    question: 'Can I get advice outside of appointments?',
    answer:
      'Yes, ongoing support and guidance are available to help you maintain progress.',
  },
];

function OurClinic() {
  useEffect(() => {
    document.title = 'Massage & Physio Clinic Dudley | Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Private home-based clinic offering massage, physio & rehab in Dudley | NHS-qualified therapist | Free consultation & flexible appointments →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Trusted Massage & Physio Clinic in Dudley for Personalised Recovery & Care" />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero — matches ServicePageTemplate */}
        <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-primary font-semibold text-secondary uppercase tracking-wider">
                    Our Dudley clinic
                  </span>
                </div>
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    At Renew Body Therapy, our massage and physio clinic in Dudley
                    offers a private, comfortable space where you receive expert,
                    personalised treatment from an NHS-qualified therapist. Whether
                    you are dealing with pain, recovering from injury, or improving
                    mobility, every session is tailored to your needs in a calm,
                    one-to-one environment.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Book your free consultation today and take the first step
                    towards lasting relief.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="mt-10 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-tertiary font-bold text-primary mb-4">
                    Why clients choose us
                  </h3>
                  <SoftCheckList items={introHighlights} />
                </div>
                <p className="mt-8 text-base sm:text-lg text-gray-700">
                  Call{' '}
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                  >
                    {phoneDisplay}
                  </a>{' '}
                  or email{' '}
                  <a
                    href={`mailto:${email}`}
                    className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                  >
                    {email}
                  </a>{' '}
                  to speak directly with your therapist and arrange your visit.
                </p>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Treatment room at Renew Body Therapy, Dudley"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="mb-16">
            <SectionTitle>
              A Private &amp; Professional Clinic Designed Around Your Comfort
            </SectionTitle>
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                <p>
                  Our clinic is based at the front of a residential property,
                  offering a discreet and welcoming environment away from busy
                  commercial settings. When you arrive, you will find a clearly
                  marked entrance and be greeted personally by your therapist.
                </p>
                <p className="font-semibold text-primary">
                  This is not a rushed or impersonal clinic experience. Instead,
                  you benefit from:
                </p>
              </div>
              <SolidCheckList
                items={[
                  'A quiet, private treatment room',
                  'One-to-one attention throughout your visit',
                  'Time to discuss your concerns before treatment begins',
                  'A full assessment to determine the most effective approach',
                ]}
              />
              <p className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                Each appointment is designed to help you feel comfortable,
                understood, and confident in your treatment plan.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>What To Expect When You Visit Our Clinic</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visitSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 border-l-4 border-secondary hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-tertiary font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  {step.link && (
                    <p className="mt-4">
                      <Link
                        to={step.link.to}
                        className="text-secondary hover:text-secondary-dark font-semibold text-sm sm:text-base hover:underline"
                      >
                        {step.link.label} →
                      </Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>
              Benefits Of Choosing A Home-Based Massage &amp; Physio Clinic
            </SectionTitle>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Choosing a private clinic setting offers several advantages over
                traditional high-volume practices:
              </p>
              <SoftCheckList
                items={[
                  'Greater privacy and comfort during treatment',
                  'More time spent understanding your condition',
                  'Flexible scheduling, including evenings and weekends',
                  'A relaxed, non-clinical atmosphere',
                  'Direct communication with your therapist',
                ]}
              />
              <p className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed border-t border-gray-200 pt-8">
                This approach allows for more focused care and often leads to
                better long-term outcomes.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Equipment, Hygiene &amp; Safety Standards</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <p className="font-semibold text-primary mb-2">Your safety first</p>
                <p className="text-gray-700 mb-6">
                  Your safety and comfort are a priority at every stage.
                </p>
                <p className="font-semibold text-primary mb-4">The clinic includes</p>
                <SolidCheckList
                  items={[
                    'Professional treatment table',
                    'Resistance equipment for rehabilitation exercises',
                    'Sink and toilet facilities',
                    'Safe disposal system for clinical equipment',
                  ]}
                />
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 shadow-md border border-gray-200">
                <p className="font-semibold text-primary mb-4">
                  Strict hygiene protocols
                </p>
                <ul className="space-y-4">
                  {[
                    'All equipment is cleaned daily',
                    'Treatment areas are sanitised after use',
                    'Clinical safety procedures are followed for all treatments',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                        <CheckIcon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Designed For Accessibility &amp; Convenience</SectionTitle>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                The clinic is designed to be as accessible as possible:
              </p>
              <SolidCheckList
                items={[
                  'Ground floor access with no steps',
                  'Free street parking directly outside',
                  'Appointment-only system for privacy',
                ]}
              />
              <p className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                While the clinic is not wheelchair accessible, home visits can be
                arranged for those unable to attend. Learn more about our team and
                approach on our{' '}
                <Link
                  to="/team"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  team page
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Why Choose Renew Body Therapy</SectionTitle>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Choosing the right clinic is about trust, experience, and results.
              </p>
              <p className="font-semibold text-primary mb-4">
                At Renew Body Therapy, you benefit from:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'NHS-qualified therapist with extensive clinical experience',
                  'Treatment based on real healthcare knowledge, not guesswork',
                  'Focus on resolving the root cause, not just symptoms',
                  'Flexible, client-focused approach',
                  'Strong reputation within the local community',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                      <CheckIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-gray-700">
                <strong>
                  You can learn more about our background and values on our{' '}
                  <Link to="/about" className="text-secondary hover:underline">
                    about page
                  </Link>
                  .
                </strong>
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Common Problems We Help With</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Persistent muscle pain and tightness',
                'Sports injuries and recovery',
                'Postural issues from work or daily life',
                'Reduced mobility or flexibility',
                'Recovery after surgery or illness',
                'Long-term musculoskeletal conditions',
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary mt-2" />
                    <h3 className="text-base font-tertiary font-bold text-primary leading-snug">
                      {title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Each treatment plan is built around your individual goals, whether that
              is pain relief, improved movement, or returning to normal daily
              activities.
            </p>
          </section>

          <section className="mb-16">
            <SectionTitle>Areas We Cover</SectionTitle>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Our physiotherapy and massage clinic is based in Dudley and serves
                clients from nearby areas including:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Netherton', 'Brierley Hill', 'Stourbridge', 'Sedgley', 'Cradley Heath'].map(
                  (area) => (
                    <span
                      key={area}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-primary font-primary font-semibold text-sm border border-secondary/20"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
              <p className="mt-8 text-base sm:text-lg text-gray-700">
                For clients who cannot travel, mobile services may be available
                depending on your needs.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>
              Supporting Your Recovery With Evidence-Based Care
            </SectionTitle>
            <div className="bg-white rounded-xl p-8 sm:p-10 shadow-md border-l-4 border-secondary text-center">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                All treatments are grounded in clinical experience and modern
                rehabilitation principles. This ensures your care is both safe and
                effective.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-tertiary font-bold text-primary mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <h4 className="text-lg font-tertiary font-bold text-primary mb-3">
                    {item.question}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-md">
            <blockquote className="text-center max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed italic font-secondary">
                &ldquo;I aim to identify and treat the root cause of the problem rather
                than papering over the cracks for long-lasting relief — this saves
                money for my clients and achieves long-term relief.&rdquo;
              </p>
              <footer className="mt-6 text-base font-primary font-bold text-primary">
                — Jikku
              </footer>
            </blockquote>
          </div>

          <section className="mb-16">
            <SectionTitle>
              Book Your Visit To Our Dudley Massage &amp; Physio Clinic Today
            </SectionTitle>
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100 space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                If you are looking for a professional, honest, and personalised
                approach to treatment, our clinic offers the ideal environment to
                support your recovery.
              </p>
              <p>
                Whether you need pain relief, rehabilitation, or expert guidance, you
                will receive focused care designed around your needs.
              </p>
              <p>
                Take the next step and arrange your consultation today by calling{' '}
                <a
                  href={`tel:${phoneTel}`}
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  {phoneDisplay}
                </a>{' '}
                or emailing{' '}
                <a
                  href={`mailto:${email}`}
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  {email}
                </a>
                .
              </p>
              <p>
                You can also view our treatment space and results in our{' '}
                <Link
                  to="/gallery"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  gallery
                </Link>{' '}
                or read client experiences on our{' '}
                <Link
                  to="/testimonials"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  testimonials page
                </Link>
                .
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold mb-4">
              Visit Our Dudley Clinic
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Ready to book your free consultation? Get in touch today — we would
              love to help you move and feel better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${phoneTel}`}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Call: {phoneDisplay}
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-sm space-y-2">
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${email}`}
                  className="underline hover:opacity-80"
                >
                  {email}
                </a>
              </p>
              <p>
                <strong>Address:</strong>{' '}
                <a
                  href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Bristol Road, Dudley, DY2 9SF
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClinic;
