import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const phoneDisplay = '07401 261289';
const phoneTel = '07401261289';
const email = 'jikku2006@gmail.com';

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

function BulletList({ items }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mt-0.5">
            <CheckIcon className="w-4 h-4 text-secondary" />
          </div>
          <span className="text-gray-700 text-base sm:text-lg leading-relaxed">{item}</span>
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

const introBullets = [
  'Winner, Best Massage Therapist 2025, ThreeBestRated',
  'Winner, Best Massage Therapist 2024, ThreeBestRated',
  'Winner, West Midlands Massage Therapy Practitioner Of The Year 2024, Prestige Awards',
  'Nearly 10 years of NHS and private clinical experience',
  'Personalised treatment plans, never a one-size-fits-all approach',
  'Honest guidance with no pressure to commit to block bookings',
  'Massage, dry needling, rehabilitation, physiotherapy and occupational therapy support',
];

const clientChoiceBullets = [
  'Clear explanations before treatment begins',
  'A professional assessment of their symptoms',
  'Treatment tailored to their needs',
  'Support beyond the appointment',
  'Honest advice if a different service may be more appropriate',
  'A calm, private clinic environment',
];

const appointmentFocusBullets = [
  'Understanding your symptoms properly',
  'Identifying what may be contributing to the problem',
  'Choosing the most suitable treatment',
  'Giving realistic advice about expected progress',
  'Providing aftercare where appropriate',
];

const awards = [
  {
    title: 'West Midlands Massage Therapy Practitioner Of The Year 2025',
    organization: 'Prestige Awards',
    year: 2025,
    description:
      'Renew Body Therapy was awarded West Midlands Massage Therapy Practitioner Of The Year 2025 for the second year running by Prestige Awards.',
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1780845438/1000027977_fwb99e.jpg',
  },
  {
    title: 'Best Massage Therapist 2025',
    organization: 'ThreeBestRated',
    year: 2025,
    description:
      'Renew Body Therapy was recognised as Best Massage Therapist 2025 by ThreeBestRated for exceptional service and client satisfaction.',
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1762855584/massage_therapists-dudley-2025-drk_wnwhdz.svg',
  },
  {
    title: 'West Midlands Massage Therapy Practitioner Of The Year 2024',
    organization: 'Prestige Awards',
    year: 2024,
    description:
      'Renew Body Therapy was awarded West Midlands Massage Therapy Practitioner Of The Year 2024 by Prestige Awards, recognising outstanding client care and innovative therapy solutions.',
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1750717311/prestige_award1_g1mu9m.jpg',
  },
  {
    title: 'Best Massage Therapist 2024',
    organization: 'ThreeBestRated',
    year: 2024,
    description:
      'Renew Body Therapy was also recognised as Best Massage Therapist 2024 by ThreeBestRated, further reflecting our continued commitment to high standards.',
    image:
      'https://res.cloudinary.com/diydpxavd/image/upload/v1749591659/threebest-award-2024_bs3xkf.png',
  },
];

function Awards() {
  useEffect(() => {
    document.title = 'Massage Therapy Awards | Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Award-recognised massage & rehabilitation care in Dudley | NHS-experienced therapist, trusted treatments & personalised support | Book today →'
      );
    }
  }, []);

  return (
    <div>
      <TitleBand title="Award-Recognised Care From Renew Body Therapy" />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mb-14 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-primary font-semibold text-secondary uppercase tracking-wider">
                Renew Body Therapy
              </span>
            </div>
            <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
              <p>
                At Renew Body Therapy, our awards page highlights the recognition we
                have received for professional massage therapy, rehabilitation
                support, and client-focused care. These awards reflect our commitment
                to safe treatment, honest advice, and personalised support for every
                client.
              </p>
              <p>
                Book your appointment with an award-recognised therapist today through{' '}
                <Link
                  to="/contact"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  our contact page
                </Link>
                .
              </p>
            </div>
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100">
              <BulletList items={introBullets} />
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
              to discuss your symptoms and book your consultation.
            </p>
          </div>

          <section className="mb-16">
            <SectionTitle>
              Excellence Recognised In Massage, Rehabilitation &amp; Client Care
            </SectionTitle>
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100 space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Renew Body Therapy is proud to have received recognition for high
                standards in massage therapy and rehabilitation services. Awards are
                not the reason we do this work, but they help reassure new clients
                that they are choosing a trusted local clinic with a clear focus on
                care, safety, and results.
              </p>
              <p>
                Our treatments are designed for people who want professional support
                with pain relief, mobility, injury recovery, muscle tension, and
                long-term physical wellbeing. Whether you are booking a sports massage,
                deep tissue treatment, dry needling, occupational therapy, or
                rehabilitation support, you will receive care that is tailored to your
                body, your goals, and your lifestyle.
              </p>
              <p>
                You can explore our wider treatment options on our{' '}
                <Link
                  to="/services"
                  className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
                >
                  services page
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Our Awards &amp; Recognition</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {awards.map((award, idx) => (
                <article
                  key={idx}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary/30 transform hover:-translate-y-1"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={award.image}
                      alt={`${award.title}, ${award.organization}`}
                      className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {award.year}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-tertiary font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {award.title}
                    </h3>
                    <h4 className="text-sm font-primary font-semibold text-secondary uppercase tracking-wide mb-4">
                      {award.organization}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-base sm:text-lg text-gray-700 max-w-4xl">
              You can learn more about the clinic, values, and background behind this
              recognition on our{' '}
              <Link
                to="/about"
                className="text-secondary hover:text-secondary-dark font-semibold hover:underline"
              >
                about page
              </Link>
              .
            </p>
          </section>

          <section className="mb-16">
            <SectionTitle>What These Awards Mean For Clients</SectionTitle>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                Awards can help build confidence, but the real value is in the care you
                receive during your appointment. At Renew Body Therapy, recognition is
                backed by practical experience, clinical knowledge, and a commitment to
                treating each person as an individual.
              </p>
              <p className="font-semibold text-primary mb-4">Clients choose us because they want:</p>
              <BulletList items={clientChoiceBullets} />
              <p className="mt-10 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl border-t border-gray-200/80 pt-8">
                Our aim is simple, to help you move better, feel better, and understand
                the best route forward.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Committed To Excellence In Every Appointment</SectionTitle>
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                Recognition is only meaningful when standards are maintained consistently.
                That is why every appointment at Renew Body Therapy begins with a
                conversation, assessment, and clear plan.
              </p>
              <p className="font-semibold text-primary mb-4">We focus on:</p>
              <BulletList items={appointmentFocusBullets} />
              <p className="mt-10 text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
                This helps ensure treatment is focused, purposeful, and built around
                your goals.
              </p>
              <p className="mt-6 text-base sm:text-lg text-gray-700 font-medium">
                Speak to Renew Body Therapy today and take the next step towards
                personalised care.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <SectionTitle>Book With a Recognised Local Therapist</SectionTitle>
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 border border-gray-100 space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Renew Body Therapy is proud to be recognised for excellence, but our
                priority remains the same: providing honest, personalised, and effective
                care for every client. If you are looking for trusted massage therapy or
                rehabilitation support in Dudley, we are here to help you take the next
                step with confidence.
              </p>
              <p>
                Arrange your appointment today by calling{' '}
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
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Our Team
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
          </section>

          <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold mb-4">
              Ready to book?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Award-recognised care, tailored to you — get in touch for a consultation.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
