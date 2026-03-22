import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';
import BlogPostsWidget from './BlogPostsWidget';
import BlogBulletGrid from './BlogBulletGrid';

const telHref = 'tel:07401261289';
const telDisplay = '07401 261289';
const email = 'jikku2006@gmail.com';

function Blogs() {
  useEffect(() => {
    document.title = 'Blog | Health & Rehabilitation | Renew Body Therapy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Expert advice on injury recovery, massage therapy & rehabilitation | Written by an NHS-experienced massage therapist | Read the latest articles →'
      );
    }
  }, []);

  const sectionClass = 'mb-14 sm:mb-16';
  const h2Class = 'text-2xl sm:text-3xl font-tertiary font-bold text-primary mb-4';
  const proseClass = 'text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 text-left';

  const whatYouFindItems = [
    'Guidance on injury recovery and rehabilitation',
    'Advice on reducing muscle tension and pain',
    'Information about massage therapy and treatment options',
    'Education on mobility, strength, and recovery techniques',
    'Practical tips for maintaining long term physical health',
    'Insights from an NHS trained occupational therapist',
  ];

  const educationSupportItems = [
    'Better understanding of common physical conditions',
    'Awareness of treatment options available',
    'Practical strategies for maintaining mobility and strength',
    'Guidance for people recovering from injury or illness',
  ];

  return (
    <div>
      <TitleBand title="Health & Rehabilitation Blog" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm sm:text-base font-primary font-semibold text-secondary uppercase tracking-wider mb-4">
              Professional insights
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-tertiary font-bold text-primary mb-6">
              Health & Rehabilitation Blog
            </h1>
            <div className={proseClass}>
              <p>
                Welcome to the Renew Body Therapy Health and Rehabilitation Blog, where we share professional insights,
                guidance, and practical advice to help you better understand pain, injury recovery, mobility, and
                long-term well-being.
              </p>
              <p>
                Our articles are written using clinical knowledge gained from nearly ten years of NHS experience,
                alongside real client treatment experience. Here, we provide helpful information that supports people who
                want to improve their physical health, prevent injuries, and recover more effectively.
              </p>
              <p>
                Whether you are dealing with muscle tension, recovering from injury, managing chronic pain, or seeking
                ways to improve mobility, this blog provides reliable information designed to support your journey
                towards better movement and improved quality of life.
              </p>
            </div>
          </div>

          <section className={sectionClass}>
            <h2 className={h2Class}>What You Will Find in Our Blogs</h2>
            <BlogBulletGrid items={whatYouFindItems} className="mt-4" />
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Explore Our Latest Articles</h2>
            <p className={`${proseClass} mb-8`}>
              Below you will find the latest posts published on the Renew Body Therapy blog. These articles cover a
              range of topics, including injury recovery, rehabilitation techniques, massage therapy, and mobility
              improvement.
            </p>
            <BlogPostsWidget />
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>Why Education Matters for Recovery</h2>
            <div className={proseClass}>
              <p>
                Understanding how the body works plays an important role in recovery and injury prevention. Many people
                experience recurring pain or mobility problems simply because they do not have access to clear, reliable
                information about their condition.
              </p>
              <p className="font-primary font-semibold text-primary">We provide educational content that supports:</p>
              <BlogBulletGrid items={educationSupportItems} className="mt-4" />
              <p>
                While blog articles are intended to provide helpful information, they should not replace professional
                assessment. Anyone experiencing persistent pain or mobility concerns should always seek advice from a
                qualified healthcare professional.
              </p>
            </div>
          </section>

          <section
            className={`${sectionClass} bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border border-gray-200 p-8 sm:p-10 text-center`}
          >
            <h2 className={h2Class}>Stay Informed With Our Latest Health Advice</h2>
            <div className={`${proseClass} text-center max-w-none`}>
              <p>
                Our blogs are designed to help individuals better understand their bodies, recovery processes, and
                treatment options.
              </p>
              <p>
                If you are experiencing pain, injury, or mobility challenges and would like personalised support, Renew
                Body Therapy provides professional therapy services tailored to your needs.
              </p>
            </div>
            <p className="mt-6 text-lg font-primary font-semibold text-primary">Book a Consultation</p>
            <p className="mt-4 text-gray-700">
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
              Contact us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
