import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import TitleBand from '../Titleband';

function IconBulletGrid({ items }) {
  return (
    <ul className="not-prose m-0 mt-4 grid list-none gap-3 p-0 sm:grid-cols-2">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:border-secondary/30 hover:shadow-md"
        >
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary"
            aria-hidden
          >
            <FaCheck className="h-3.5 w-3.5" />
          </span>
          <span className="pt-0.5 text-sm font-primary leading-snug text-gray-700 sm:text-base">{text}</span>
        </li>
      ))}
    </ul>
  );
}

function LocationChips({ places }) {
  return (
    <ul className="not-prose m-0 mt-4 flex list-none flex-wrap gap-2.5 p-0">
      {places.map((place) => (
        <li key={place}>
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-gradient-to-r from-secondary/[0.07] to-primary/[0.05] px-4 py-2 text-sm font-primary font-medium text-primary shadow-sm">
            <FaMapMarkerAlt className="h-3 w-3 shrink-0 text-secondary" aria-hidden />
            {place}
          </span>
        </li>
      ))}
    </ul>
  );
}

const telHref = 'tel:07401261289';
const telDisplay = '07401 261289';
const email = 'jikku2006@gmail.com';

function InsurancePartners() {
  useEffect(() => {
    document.title = 'Our Insurance Partners | Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Trusted healthcare insurance partners | Working with Bupa, WPA, Aviva & Healix | Professional therapy services | Book your consultation today →'
      );
    }
  }, []);

  const providers = [
    {
      name: 'WPA Health Insurance',
      slug: 'wpa',
      logo: 'https://res.cloudinary.com/diydpxavd/image/upload/v1774213177/wpa_logo_uete7o.jpg',
      body: (
        <>
          <p>
            WPA is a well-established UK private medical insurance provider offering flexible healthcare cover for
            individuals, families, and businesses.
          </p>
          <p>
            Clients with eligible WPA policies may be able to access therapy services as part of their healthcare
            support. WPA focuses on providing responsive healthcare options designed to complement NHS services.
          </p>
          <a
            href="https://www.wpa.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-primary font-semibold text-secondary hover:underline"
          >
            Learn more about WPA healthcare coverage
          </a>
        </>
      ),
    },
    {
      name: 'Aviva Health Insurance',
      slug: 'aviva',
      logo: 'https://res.cloudinary.com/diydpxavd/image/upload/v1774213438/aviva_logo_zy51sh.jpg',
      body: (
        <>
          <p>
            Aviva is one of the UK&apos;s largest insurance providers, offering a range of private healthcare plans that
            support treatment access and medical services.
          </p>
          <p>
            Some policies may allow clients to seek therapy services through recognised healthcare professionals and
            clinics.
          </p>
          <a
            href="https://www.healthcode.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-primary font-semibold text-secondary hover:underline"
          >
            Additional information about Aviva healthcare services
          </a>
        </>
      ),
    },
    {
      name: 'Healix Health',
      slug: 'healix',
      logo: 'https://res.cloudinary.com/diydpxavd/image/upload/v1774213177/healix_health_logo_wk942t.webp',
      body: (
        <>
          <p>
            Healix Health provides corporate healthcare solutions and insurance services designed to help individuals
            and organisations access healthcare support efficiently.
          </p>
          <p>
            Their flexible healthcare approach focuses on improving access to medical professionals and rehabilitation
            services.
          </p>
          <a
            href="https://healix.com/health"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-primary font-semibold text-secondary hover:underline"
          >
            More information about Healix Health
          </a>
        </>
      ),
    },
    {
      name: 'Bupa',
      slug: 'bupa',
      logo: 'https://res.cloudinary.com/diydpxavd/image/upload/v1774213276/Bupa_Logo_1_grmu3k.png',
      body: (
        <>
          <p>
            Bupa is one of the most recognised private healthcare providers in the United Kingdom. Many clients rely on
            Bupa policies to access private treatment and rehabilitation services.
          </p>
          <p>Bupa policies may cover various healthcare treatments depending on the policy structure and referral requirements.</p>
          <a
            href="https://www.bupa.co.uk/health/health-insurance/young-adults-health-insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-primary font-semibold text-secondary hover:underline"
          >
            Learn more about Bupa health insurance
          </a>
        </>
      ),
    },
  ];

  const treatmentItems = [
    'Sports massage therapy',
    'Deep tissue massage for muscular tension',
    'Dry needling for trigger point relief',
    'Occupational therapy rehabilitation',
    'Post hospital rehabilitation support',
    'Falls prevention and mobility rehabilitation',
  ];

  const clientTypeItems = [
    'Individuals recovering from injury',
    'People managing long term muscular pain',
    'Clients rebuilding strength following surgery',
    'Older adults needing mobility support',
    'Patients recovering after hospital discharge',
  ];

  const serviceAreaPlaces = ['Dudley', 'Netherton', 'Brierley Hill', 'Sedgley', 'Stourbridge', 'Cradley Heath'];

  const sectionClass = 'mb-14 sm:mb-16';
  const h2Class = 'text-2xl sm:text-3xl font-tertiary font-bold text-primary mb-4';
  const proseClass = 'text-gray-600 text-base sm:text-lg leading-relaxed space-y-4';

  return (
    <div>
      <TitleBand title="Our Insurance Partners" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm sm:text-base font-primary font-semibold text-secondary uppercase tracking-wider mb-4">
              Private healthcare cover
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-tertiary font-bold text-primary mb-6">
              Our Insurance Partners
            </h1>
            <div className={`${proseClass} text-left max-w-none`}>
              <p>
                At Renew Body Therapy, we work alongside recognised private health insurance providers to help clients
                access high-quality rehabilitation and therapy services with greater ease. Our Dudley-based health and
                wellness clinic collaborates with several trusted insurance partners, allowing eligible clients to
                receive professional treatment supported through their private healthcare cover.
              </p>
              <p>
                Whether you are seeking rehabilitation, massage therapy, or occupational therapy services, our
                partnerships with established insurers help make treatment more accessible. Our therapist has nearly
                ten years of NHS clinical experience and provides personalised care designed to support recovery,
                mobility, and long-term wellbeing for clients.
              </p>
            </div>
          </div>

          <section className={`${sectionClass} bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-10`}>
            <h2 className={`${h2Class} text-center sm:text-left`}>Get in Touch With Us</h2>
            <p className="text-center sm:text-left text-gray-600 mb-2">
              Call:{' '}
              <a href={telHref} className="font-semibold text-secondary hover:underline">
                {telDisplay}
              </a>
            </p>
            <p className="text-center sm:text-left text-gray-600">
              Email:{' '}
              <a href={`mailto:${email}`} className="font-semibold text-secondary hover:underline break-all">
                {email}
              </a>
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Working With Trusted Private Health Insurance Providers</h2>
            <div className={proseClass}>
              <p>
                Access to effective rehabilitation and therapy should be straightforward. At Renew Body Therapy, we
                collaborate with several respected private healthcare insurers to help clients receive treatment when
                they need it.
              </p>
              <p>
                Private health insurance partnerships can make it easier for patients to access professional therapy
                without facing extended waiting times. Many people turn to private healthcare when they want faster
                support for injuries, rehabilitation needs, or mobility concerns.
              </p>
              <p>
                Our clinic works with a number of recognised insurance providers to support clients who may be
                eligible for therapy through their policy.
              </p>
              <p>
                These partnerships help ensure that individuals receiving care benefit from reliable clinical standards,
                structured treatment plans, and professional guidance throughout their recovery.
              </p>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Insurance Providers We Work With</h2>
            <p className={`${proseClass} mb-8`}>
              Renew Body Therapy collaborates with several recognised healthcare insurers that support clients seeking
              private treatment.
            </p>
            <div className="space-y-8">
              {providers.map((p) => (
                <div
                  key={p.slug}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 overflow-hidden"
                >
                  {p.logo && (
                    <div className="h-20 sm:h-24 flex items-center justify-start mb-4">
                      <img src={p.logo} alt={`${p.name} logo`} className="max-h-full max-w-[180px] object-contain" />
                    </div>
                  )}
                  <h3 className="text-xl font-tertiary font-bold text-primary mb-3">{p.name}</h3>
                  <div className={proseClass}>{p.body}</div>
                </div>
              ))}
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>What Treatments May Be Covered Through Insurance</h2>
            <div className={proseClass}>
              <p>
                Coverage varies depending on the individual insurance policy and referral requirements. Clients should
                always confirm the details of their policy with their insurer before beginning treatment.
              </p>
              <p>
                At Renew Body Therapy, we provide several therapy services that may be relevant to individuals seeking
                rehabilitation or recovery support.
              </p>
              <p className="font-primary font-semibold text-primary">These services include:</p>
              <IconBulletGrid items={treatmentItems} />
              <p>
                Clients interested in muscular recovery or injury support can explore our{' '}
                <Link to="/services/sports-massage" className="font-semibold text-secondary hover:underline">
                  Sports Massage
                </Link>{' '}
                services which are designed to reduce muscle tension and support recovery.
              </p>
              <p>
                Those requiring rehabilitation support may benefit from{' '}
                <Link to="/services/occupational-therapy" className="font-semibold text-secondary hover:underline">
                  Occupational Therapy
                </Link>{' '}
                which focuses on improving functional independence and mobility.
              </p>
              <p>
                We also provide{' '}
                <Link to="/services/acupuncture-dry-needling" className="font-semibold text-secondary hover:underline">
                  Dry Needling
                </Link>{' '}
                treatments which can support relief from muscular trigger points and chronic tension.
              </p>
              <p>Your eligibility for insurance-supported therapy will depend on your provider and policy conditions.</p>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>How to Use Private Health Insurance for Therapy</h2>
            <p className={`${proseClass} mb-6`}>
              If you have private health insurance and are considering therapy services, the process typically follows a
              few simple steps.
            </p>
            <ol className="m-0 list-none space-y-4 p-0">
              {[
                {
                  step: 1,
                  title: 'Check Your Policy Coverage',
                  text:
                    'Contact your insurance provider to confirm whether therapy services are included within your policy. Each insurer has different coverage structures.',
                },
                {
                  step: 2,
                  title: 'Obtain a Referral if Required',
                  text:
                    'Some policies require a referral from a GP or healthcare professional before treatment can begin.',
                },
                {
                  step: 3,
                  title: 'Contact Renew Body Therapy',
                  text:
                    'Once you have confirmation from your insurer, you can contact our clinic to discuss your treatment needs and appointment availability.',
                },
                {
                  step: 4,
                  title: 'Begin Your Treatment Plan',
                  text:
                    'Your first appointment will usually include an assessment to understand your condition, treatment goals, and recovery needs. From there, a personalised therapy plan can be created.',
                },
              ].map(({ step, title, text }) => (
                <li
                  key={step}
                  className="relative flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:gap-5 sm:p-6"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary font-tertiary text-lg font-bold text-white shadow-md sm:h-12 sm:w-12 sm:text-xl"
                    aria-hidden
                  >
                    {step}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-lg font-tertiary font-bold text-primary sm:text-xl">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3.5 font-primary text-sm font-semibold text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg"
              >
                Speak to us
              </Link>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Why Choose Renew Body Therapy</h2>
            <div className={proseClass}>
              <p>
                Choosing a therapist who works with reputable healthcare insurers provides additional reassurance that
                you are receiving professional and responsible care.
              </p>
              <p>
                Renew Body Therapy is led by a qualified occupational therapist with extensive NHS experience across
                multiple clinical areas, including orthopaedics, neurology, and rehabilitation.
              </p>
              <p className="font-primary font-semibold text-primary">This experience allows the clinic to support a wide range of clients, including:</p>
              <IconBulletGrid items={clientTypeItems} />
              <p>
                We focus on providing structured treatment plans designed to support both short-term relief and
                long-term recovery.
              </p>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Mobile Massage & Rehabilitation Services in Dudley & Surrounding Areas</h2>
            <div className={proseClass}>
              <p>
                Renew Body Therapy is located on Bristol Road in Dudley and supports clients throughout the surrounding
                communities.
              </p>
              <p className="font-primary font-semibold text-primary">We regularly provide services to clients from:</p>
              <LocationChips places={serviceAreaPlaces} />
              <p>
                Mobile rehabilitation services are also available where appropriate, allowing therapy to be delivered
                within the comfort of a client&apos;s home.
              </p>
              <p>
                This can be particularly beneficial for individuals recovering from surgery, hospital discharge, or
                mobility limitations.
              </p>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-tertiary font-bold text-primary mb-2">Will my insurance cover therapy treatment?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Insurance coverage varies depending on your policy terms. It is recommended to contact your provider to
                  confirm whether therapy services are included.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-tertiary font-bold text-primary mb-2">Do I need a GP referral before treatment?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Some insurance policies require a GP referral before therapy begins. Others allow direct access to
                  treatment. Your insurer can confirm the requirements of your policy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-tertiary font-bold text-primary mb-2">Can I book treatment privately without insurance?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. Many clients choose to book treatment directly without using insurance. Appointments can be
                  arranged by contacting the clinic.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-tertiary font-bold text-primary mb-2">What types of therapy do you provide?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Renew Body Therapy provides sports massage, deep tissue massage, dry needling, occupational therapy,
                  rehabilitation support, and mobility services.
                </p>
              </div>
            </div>
          </section>

          <section
            className={`${sectionClass} bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-gray-200 p-8 sm:p-10 text-center`}
          >
            <h2 className={h2Class}>Book Your Consultation at Renew Body Therapy</h2>
            <div className={`${proseClass} text-center max-w-none`}>
              <p>
                If you have private health insurance and are exploring treatment options, Renew Body Therapy can help
                you access professional rehabilitation and therapy services in Dudley and the neighbouring areas.
              </p>
              <p>
                Working alongside recognised insurance providers such as WPA, Aviva, Healix, and Bupa allows clients to
                receive trusted treatment while maintaining confidence in the quality of care they receive.
              </p>
              <p>
                Our therapist combines extensive NHS experience with personalised treatment planning to help clients
                improve mobility, reduce pain, and support recovery.
              </p>
              <p>To discuss your treatment needs or book an appointment, contact us today.</p>
            </div>
            <p className="mt-6 text-gray-700">
              Call:{' '}
              <a href={telHref} className="font-semibold text-secondary hover:underline">
                {telDisplay}
              </a>
            </p>
            <p className="text-gray-700">
              Email:{' '}
              <a href={`mailto:${email}`} className="font-semibold text-secondary hover:underline break-all">
                {email}
              </a>
            </p>
            <p className="text-gray-700 mt-2">Address: Bristol Road, Dudley, DY2 9SF</p>
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 rounded-full bg-secondary text-white font-primary font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Online Form
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InsurancePartners;
