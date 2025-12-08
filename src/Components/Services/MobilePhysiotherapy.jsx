import ServicePageTemplate from './ServicePageTemplate';

function MobilePhysiotherapy() {
  return (
    <ServicePageTemplate
      title="Mobile Physiotherapy in Dudley"
      metaTitle="Mobile Physiotherapy in Dudley | Renew Body Therapy"
      metaDescription="Mobile physiotherapy in Dudley | Home visits available | Qualified physiotherapist | Recovery support | Book today →"
      intro={[
        "Our mobile physiotherapy services in Dudley and the nearby areas are available for clients who cannot travel due to mobility limitations, health concerns, or recovery needs. Sessions are delivered in the comfort of your home by a qualified physiotherapist who partners with our clinic.",
        "This service ensures you receive professional physiotherapy care without the need to travel, making rehabilitation accessible and convenient during your recovery."
      ]}
      whyChoose={[
        "Qualified physiotherapist with NHS experience",
        "Home visits for your convenience",
        "No need to travel during recovery",
        "Comfortable, familiar environment",
        "Personalized treatment in your home",
        "Flexible scheduling to suit your needs"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Mobile physiotherapy brings professional physiotherapy services directly to your home. This service is ideal for clients who cannot travel due to mobility limitations, health concerns, or recovery needs.",
        "Our qualified physiotherapist provides the same high-quality care you would receive in a clinic, but in the comfort and convenience of your own home."
      ]}
      benefits={[
        {
          title: "Convenience",
          description: "Receive professional care without leaving your home, reducing stress and travel challenges."
        },
        {
          title: "Comfort",
          description: "Treatment in your familiar environment can enhance relaxation and recovery."
        },
        {
          title: "Accessibility",
          description: "Makes physiotherapy accessible for those who cannot travel."
        },
        {
          title: "Personalized Care",
          description: "One-on-one attention in a comfortable, private setting."
        },
        {
          title: "Functional Assessment",
          description: "Assessment and treatment in your actual living environment."
        }
      ]}
      whatToExpect={{
        description: [
          "Your mobile physiotherapy session begins with an assessment of your condition, mobility, and home environment. The physiotherapist will then provide hands-on treatment, exercises, and guidance tailored to your needs."
        ],
        includes: [
          "Comprehensive assessment in your home",
          "Hands-on physiotherapy treatment",
          "Personalized exercise program",
          "Mobility and function training",
          "Home environment assessment",
          "Education and self-management guidance",
          "Progress monitoring and plan adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "Mobile physiotherapy is ideal for:",
        list: [
          "Clients who cannot travel due to mobility limitations",
          "Individuals recovering from surgery or illness",
          "People with health concerns that make travel difficult",
          "Older adults who prefer home-based care",
          "Those needing functional assessment in their home",
          "Anyone seeking convenient physiotherapy access"
        ],
        conclusion: "If travel is challenging but you need physiotherapy, our mobile service brings professional care to you."
      }}
      trustSection={{
        description: "Our mobile physiotherapy is delivered by a qualified physiotherapist with NHS experience. We bring professional, evidence-based care directly to your home.",
        points: [
          "Qualified, experienced physiotherapist",
          "Professional equipment brought to your home",
          "Same quality care as clinic-based sessions",
          "Flexible scheduling"
        ]
      }}
      faq={[
        {
          question: "What areas do you cover?",
          answer: "We provide mobile physiotherapy in Dudley, Netherton, Stourbridge, Brierley Hill, and surrounding areas."
        },
        {
          question: "Do you bring equipment?",
          answer: "Yes, the physiotherapist brings necessary equipment for assessment and treatment."
        },
        {
          question: "How long does a session last?",
          answer: "Sessions typically last 60 minutes, allowing time for assessment, treatment, and education."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg"
      serviceSelectValue="physio"
    />
  );
}

export default MobilePhysiotherapy;

