import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TitleBand from '../Titleband';

const ServicePageTemplate = ({
  title,
  secondaryTitle,
  metaTitle,
  metaDescription,
  intro,
  whyChoose,
  whatIs,
  benefits,
  whatToExpect,
  whenToGet,
  whoCanBenefit,
  trustSection,
  faq,
  contactInfo,
  image,
  prices,
  serviceSelectValue,
  customHeadings
}) => {
  // Use secondaryTitle for headings, fallback to title if not provided
  const headingTitle = secondaryTitle || title;
  useEffect(() => {
    document.title = metaTitle;
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDescription);
    }
  }, [metaTitle, metaDescription]);

  return (
    <div>
      <TitleBand title={title} />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-sm font-primary font-semibold text-secondary uppercase tracking-wider">
                    Professional Service
                  </span>
                </div>
                <div className="space-y-6">
                  {intro && intro.map((paragraph, idx) => (
                    <p key={idx} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to={serviceSelectValue ? `/Contact?service=${encodeURIComponent(serviceSelectValue)}` : "/Contact"}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Book an Appointment
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              {image && (
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Why Choose Section */}
          {whyChoose && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
                <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                  {customHeadings?.whyChoose || `Why Choose Our ${headingTitle.split(' in ')[0]} Service?`}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChoose && whyChoose.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                {prices && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-tertiary font-bold text-primary mb-4">Pricing</h3>
                    <ul className="space-y-4">
                      {prices && prices.map((price, idx) => {
                        // Support both string and object formats
                        const priceText = typeof price === 'string' ? price : price.text;
                        const priceDescription = typeof price === 'object' ? price.description : null;
                        const learnMoreLink = typeof price === 'object' ? price.learnMoreLink : null;
                        
                        return (
                          <li key={idx} className="text-lg text-gray-700">
                            <div className="mb-2">{priceText}</div>
                            {priceDescription && (
                              <p className="text-base text-gray-600 mt-2 mb-2">{priceDescription}</p>
                            )}
                            {learnMoreLink && (
                              <Link
                                to={learnMoreLink}
                                className="inline-block mt-2 text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                              >
                                Learn More →
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl sm:text-3xl font-tertiary font-bold text-primary mb-6">
                    Book Your Appointment Today
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600">
                    <p><strong>Call:</strong> <a href="tel:07401261289" className="text-secondary hover:underline">07401 261289</a></p>
                    <p><strong>Email:</strong> <a href="mailto:jikku2006@gmail.com" className="text-secondary hover:underline">jikku2006@gmail.com</a></p>
                    <p><strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Bristol Road, Dudley, DY2 9SF</a></p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={serviceSelectValue ? `/Contact?service=${encodeURIComponent(serviceSelectValue)}` : "/Contact"}
                      className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* What Is Section */}
          {whatIs && (
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                What Is {headingTitle.split(' in ')[0]}?
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                {whatIs && whatIs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {benefits && (
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-8">
                The Benefits of {headingTitle.split(' in ')[0]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits && benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-tertiary font-bold text-secondary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What to Expect Section */}
          {whatToExpect && (
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                {customHeadings?.whatToExpect || "What to Expect During Your Session"}
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                {whatToExpect.description && (
                  <div className="space-y-4 mb-6 text-base sm:text-lg text-gray-700">
                    {whatToExpect.description && whatToExpect.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {whatToExpect.includes && (
                  <div>
                    <p className="font-semibold text-primary mb-4">Your personalised programme may include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {whatToExpect.includes && whatToExpect.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {whatToExpect.addOns && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="font-semibold text-primary mb-4">Add-ons:</p>
                    <ul className="space-y-2">
                      {whatToExpect.addOns && whatToExpect.addOns.map((addon, idx) => (
                        <li key={idx} className="text-gray-700">{addon}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-8 text-center">
                <Link
                  to={serviceSelectValue ? `/Contact?service=${encodeURIComponent(serviceSelectValue)}` : "/Contact"}
                  className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          )}

          {/* When to Get Section */}
          {whenToGet && (
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                When Should You Get {headingTitle.split(' in ')[0]}?
              </h2>
              <div className="space-y-6">
                {whenToGet && whenToGet.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary">
                    <h3 className="text-xl font-tertiary font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Who Can Benefit Section */}
          {whoCanBenefit && (
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                Who Can Benefit from {headingTitle.split(' in ')[0]}?
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                {whoCanBenefit.intro && (
                  <p className="text-base sm:text-lg text-gray-700 mb-6">{whoCanBenefit.intro}</p>
                )}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whoCanBenefit.list && whoCanBenefit.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                {whoCanBenefit.conclusion && (
                  <p className="text-base sm:text-lg text-gray-700 mt-6">{whoCanBenefit.conclusion}</p>
                )}
              </div>
              <div className="mt-8 text-center">
                <Link
                  to={serviceSelectValue ? `/Contact?service=${encodeURIComponent(serviceSelectValue)}` : "/Contact"}
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          )}

          {/* Trust Section */}
          {trustSection && (
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-tertiary font-bold text-primary mb-6">
                {customHeadings?.trustSection || `Why You Can Trust Our ${headingTitle.split(' in ')[0]} in Dudley`}
              </h2>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 sm:p-12 border border-gray-200">
                {trustSection.description && (
                  <p className="text-base sm:text-lg text-gray-700 mb-6">{trustSection.description}</p>
                )}
                {trustSection.points && (
                  <ul className="space-y-4 mb-6">
                    {trustSection.points && trustSection.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {trustSection.links && (
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>
                      For more detailed information about our clinic values and professional background, you can visit our{' '}
                      <Link to="/about" className="text-secondary hover:underline">About page</Link>. 
                      You can also explore our <Link to="/services" className="text-secondary hover:underline">Services page</Link> to browse our selection of services.
                    </strong>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {faq && (
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-tertiary font-bold text-primary mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faq && faq.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h4 className="text-lg font-tertiary font-bold text-primary mb-3">
                      {item.question}
                    </h4>
                    <p className="text-gray-700">{item.answer}</p>
                    {item.learnMoreLink && (
                      <div className="mt-4">
                        <Link
                          to={item.learnMoreLink}
                          className="inline-block text-secondary hover:text-secondary-dark font-semibold text-sm hover:underline"
                        >
                          Learn More →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-tertiary font-bold mb-4">
              {customHeadings?.cta || `Book Your ${headingTitle.split(' in ')[0]} Today`}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {customHeadings?.ctaDescription || "Ready to experience the benefits? Contact us today to schedule your appointment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={serviceSelectValue ? `/Contact?service=${encodeURIComponent(serviceSelectValue)}` : "/Contact"}
                className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:07401261289"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Call: 07401 261289
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-sm">
              <p><strong>Email:</strong> <a href="mailto:jikku2006@gmail.com" className="underline hover:opacity-80">jikku2006@gmail.com</a></p>
              <p className="mt-2"><strong>Address:</strong> <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Bristol Road, Dudley, DY2 9SF</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageTemplate;

