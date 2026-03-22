import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import BlogBulletGrid from './BlogBulletGrid';

const telHref = 'tel:07401261289';
const telDisplay = '07401 261289';
const email = 'jikku2006@gmail.com';

function BlackCountryHalfMarathon() {
  useEffect(() => {
    document.title = 'Black Country Half Marathon | Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Preparing for the Black Country Half Marathon? | Discover expert injury prevention, recovery tips & therapy advice from Renew Body Therapy →'
      );
    }
  }, []);

  const proseClass = 'text-gray-600 text-base sm:text-lg leading-relaxed space-y-4';
  const h2Class = 'text-2xl sm:text-3xl font-tertiary font-bold text-primary mt-12 mb-4';
  const h3Class = 'text-xl font-tertiary font-bold text-primary mt-8 mb-3';

  return (
    <div>
      <TitleBand title="Black Country Half Marathon" subtitle="Prepare & recover" />
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-sm font-primary font-semibold text-secondary uppercase tracking-wider mb-4">
              <Link to="/blogs" className="hover:underline">
                ← Back to blog
              </Link>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-[2.25rem] font-tertiary font-bold text-primary leading-tight">
              How to Prepare for &amp; Recover From the Black Country Half Marathon
            </h1>
          </header>

          <div className={proseClass}>
            <p>
              Running the Black Country Half Marathon is an exciting challenge for runners across the West Midlands.
              Whether you are taking part to support a charity, achieve a personal milestone, or simply enjoy the
              experience of a major regional event, preparation and recovery are essential for both performance and injury
              prevention.
            </p>
            <p>
              The Black Country Half Marathon attracts runners from Dudley, Wolverhampton, Birmingham and the surrounding
              areas. While training for a half-marathon can improve cardiovascular fitness, endurance and mental
              resilience, it also places significant stress on muscles, joints and connective tissue.
            </p>
            <p>
              Without the right preparation and recovery strategies, runners can experience muscle strain, fatigue,
              tightness or overuse injuries. This guide explains how to prepare effectively for race day and how
              professional therapies such as massage and rehabilitation treatments can support your recovery after the
              event.
            </p>
          </div>

          <div className="mt-8 p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-md">
            <p className="font-primary font-semibold text-primary mb-2">2026 event</p>
            <p className="text-gray-700 mb-4">
              Birmingham Black Country Half Marathon 2026 — Saturday 4 July. Book via Findarace.
            </p>
            <a
              href="https://dgnhscharity.org/event/birmingham-black-country-half-marathon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-primary font-semibold text-secondary hover:underline"
            >
              Learn more about the event (Dudley Group NHS Charity)
            </a>
          </div>

          <h2 className={h2Class}>What Is the Black Country Half Marathon?</h2>
          <div className={proseClass}>
            <p>
              The Black Country Half Marathon is a popular charity running event organised to support the Dudley Group
              NHS Charity. The route takes runners through areas of the historic Black Country, along the canal towpaths
              between Wolverhampton City Centre and Brindley Place, bringing together participants from across the West
              Midlands for a 13.1-mile challenge.
            </p>
            <p>
              Many participants train for several months before race day. This preparation period is crucial for building
              endurance and reducing the risk of injury during the race.
            </p>
            <p>
              However, even well-trained runners can experience physical stress during a half-marathon, which is why
              proper training, stretching and recovery techniques are so important!
            </p>
          </div>

          <h2 className={h2Class}>Why Is Preparation Important for the Black Country Half Marathon?</h2>
          <div className={proseClass}>
            <p>
              Preparing properly for a half-marathon allows runners to complete the race safely while reducing the risk
              of common running injuries.
            </p>
            <p>Training for long-distance running places repeated strain on muscles and joints, particularly in the following areas:</p>
            <BlogBulletGrid
              className="mt-4"
              items={['Calves', 'Hamstrings', 'Quadriceps', 'Hip flexors', 'Lower back', 'Ankles and knees']}
            />
            <p>Without proper preparation, runners can develop issues such as:</p>
            <BlogBulletGrid
              className="mt-4"
              items={['Muscle tightness', 'Tendon strain', 'Shin splints', 'Knee pain', 'Reduced mobility']}
            />
            <p>
              Structured training combined with recovery techniques helps the body adapt to the physical demands of
              long-distance running.
            </p>
          </div>

          <h2 className={h2Class}>How Should You Train for the Black Country Half Marathon?</h2>
          <p className={`${proseClass} mb-4`}>
            A gradual training programme is the safest way to prepare for the Black Country Half Marathon.
          </p>
          <h3 className={h3Class}>Build Distance Gradually</h3>
          <div className={proseClass}>
            <p>Increase running distance slowly each week to avoid overloading muscles and joints.</p>
            <p>
              A common guideline used by coaches is the 10 per cent rule, which suggests increasing weekly mileage by no
              more than ten per cent at a time.
            </p>
          </div>
          <h3 className={h3Class}>Include Strength Training</h3>
          <div className={proseClass}>
            <p>Strength exercises help stabilise joints and improve running efficiency.</p>
            <p>Focus on strengthening:</p>
            <BlogBulletGrid className="mt-4" items={['Glutes', 'Core muscles', 'Hamstrings', 'Calves']} />
            <p>These muscles play a key role in running mechanics.</p>
          </div>
          <h3 className={h3Class}>Prioritise Rest &amp; Recovery</h3>
          <div className={proseClass}>
            <p>Rest days allow muscle fibres to repair and adapt to training.</p>
            <p>Without recovery time, runners are more likely to experience fatigue-related injuries.</p>
          </div>
          <h3 className={h3Class}>Stretch Regularly</h3>
          <div className={proseClass}>
            <p>Flexibility training helps maintain muscle elasticity and joint mobility.</p>
            <p>
              Dynamic stretching before running and gentle stretching afterwards can help reduce stiffness.
            </p>
          </div>

          <h2 className={h2Class}>What Are the Most Common Running Injuries?</h2>
          <p className={`${proseClass} mb-4`}>Runners may encounter several common issues.</p>
          <h3 className={h3Class}>Runner&apos;s Knee</h3>
          <p className={proseClass}>
            Runner&apos;s knee occurs when the kneecap does not track properly during movement, often caused by muscular
            imbalances or overtraining.
          </p>
          <h3 className={h3Class}>Shin Splints</h3>
          <p className={proseClass}>
            Shin splints involve pain along the front of the lower leg and are often caused by sudden increases in
            training intensity.
          </p>
          <h3 className={h3Class}>Hamstring Strain</h3>
          <p className={proseClass}>
            The hamstrings work hard during running and can become tight or strained without proper recovery.
          </p>
          <h3 className={h3Class}>Plantar Fasciitis</h3>
          <p className={proseClass}>
            This condition causes heel pain due to inflammation of the tissue along the bottom of the foot.
          </p>

          <h2 className={h2Class}>Can Sports Massage Help Runners Preparing for the Black Country Half Marathon?</h2>
          <div className={proseClass}>
            <p>Sports massage is commonly used by runners to support muscle recovery and prevent injury.</p>
            <p>A structured massage programme during training can help with:</p>
            <BlogBulletGrid
              className="mt-4"
              items={[
                'Reducing muscular tension',
                'Improving circulation',
                'Enhancing flexibility',
                'Supporting faster recovery between runs',
              ]}
            />
            <p>
              Our clients who run often seek{' '}
              <Link to="/services/sports-massage" className="font-semibold text-secondary hover:underline">
                Sports Massage
              </Link>{' '}
              treatments during their training period to maintain muscle health and prevent excessive tightness.
            </p>
            <p>
              Massage therapy can also help identify areas of muscular imbalance before they develop into injuries.
            </p>
          </div>

          <h2 className={h2Class}>Should You Get a Massage Before a Half Marathon?</h2>
          <div className={proseClass}>
            <p>Many runners schedule a sports massage approximately 5 to 7 days before race day.</p>
            <p>
              This timing allows muscles to relax without causing excessive soreness immediately before the race.
              Pre-event massage can help:
            </p>
            <BlogBulletGrid
              className="mt-4"
              items={[
                'Improve muscle flexibility',
                'Reduce tension in the calves and hamstrings',
                'Promote circulation',
                'Prepare muscles for endurance running',
              ]}
            />
            <p>
              However, the treatment mustn&apos;t be overly intense immediately before the event (please let us know if you
              are participating!)
            </p>
          </div>

          <h2 className={h2Class}>How to Recover After the Black Country Half Marathon</h2>
          <div className={proseClass}>
            <p>
              Recovery is just as important as preparation when running the Black Country Half Marathon. After
              completing 13.1 miles, the body requires time to repair muscle fibres and restore normal mobility.
            </p>
          </div>
          <h3 className={h3Class}>Gentle Movement</h3>
          <p className={proseClass}>Light walking and gentle stretching can help reduce stiffness after the race.</p>
          <h3 className={h3Class}>Hydration</h3>
          <p className={proseClass}>Hydration supports muscle recovery and helps the body replenish lost fluids.</p>
          <h3 className={h3Class}>Sleep</h3>
          <p className={proseClass}>
            Sleep plays a major role in physical recovery. During sleep, the body repairs tissue and restores energy
            levels.
          </p>
          <h3 className={h3Class}>Professional Therapy</h3>
          <div className={proseClass}>
            <p>
              Many runners benefit from recovery treatments such as{' '}
              <Link to="/services/deep-tissue-massage" className="font-semibold text-secondary hover:underline">
                Deep Tissue Massage
              </Link>
              , which can help release tight muscles after long-distance running.
            </p>
          </div>

          <h2 className={h2Class}>Can Dry Needling Help With Running Injuries?</h2>
          <div className={proseClass}>
            <p>
              Some runners develop deep muscular trigger points during training for the Black Country Half Marathon.
              These trigger points can cause persistent muscle tightness and restricted movement.
            </p>
            <p>
              Professional treatments such as{' '}
              <Link to="/services/acupuncture-dry-needling" className="font-semibold text-secondary hover:underline">
                Dry Needling
              </Link>{' '}
              may help release these trigger points and improve muscle function when delivered by a trained therapist.
            </p>
            <p>
              Dry needling works by stimulating specific points within the muscle to promote relaxation and improved
              circulation.
            </p>
          </div>

          <h2 className={h2Class}>When Should You Seek Professional Rehabilitation?</h2>
          <div className={proseClass}>
            <p>If pain persists after the race, professional rehabilitation support may be helpful.</p>
            <p>Runners should consider a professional assessment if they experience:</p>
            <BlogBulletGrid
              className="mt-4"
              items={[
                'Persistent joint pain',
                'Difficulty walking normally after the race',
                'Reduced mobility',
                'Swelling or inflammation',
                'Recurrent muscle strain',
              ]}
            />
            <p>
              Rehabilitation services such as{' '}
              <Link to="/services/mobile-physiotherapy" className="font-semibold text-secondary hover:underline">
                Mobile Physiotherapy
              </Link>{' '}
              and{' '}
              <Link to="/services/occupational-therapy" className="font-semibold text-secondary hover:underline">
                Occupational Therapy
              </Link>{' '}
              can support recovery and help runners safely return to training.
            </p>
          </div>

          <h2 className={h2Class}>Preparing for Your Next Running Challenge</h2>
          <div className={proseClass}>
            <p>
              Completing a half-marathon is an impressive achievement. With the right preparation and recovery approach,
              runners can protect their bodies while continuing to improve their performance.
            </p>
            <p>
              Training gradually, prioritising recovery, and seeking professional support when needed can help runners
              avoid injury and maintain long-term physical health.
            </p>
            <p>
              If you are training for the Black Country Half Marathon or recovering after the event, professional therapy
              may help support your recovery journey.
            </p>
            <p>
              Runners experiencing muscular tightness, injury concerns or reduced mobility can contact Renew Body Therapy
              for personalised treatment and rehabilitation support.
            </p>
          </div>

          <footer className="mt-14 p-8 sm:p-10 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-gray-200 text-center">
            <h2 className="text-2xl font-tertiary font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-2">
              Call:{' '}
              <a href={telHref} className="font-semibold text-secondary hover:underline">
                {telDisplay}
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              Email:{' '}
              <a href={`mailto:${email}`} className="font-semibold text-secondary hover:underline break-all">
                {email}
              </a>
            </p>
            <p className="text-gray-700 mb-6">Address: Bristol Road, Dudley, DY2 9SF</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-secondary text-white font-primary font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact us
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default BlackCountryHalfMarathon;
