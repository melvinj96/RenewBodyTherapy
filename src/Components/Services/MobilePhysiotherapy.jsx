import ServicePageTemplate from './ServicePageTemplate';

function MobilePhysiotherapy() {
  return (
    <ServicePageTemplate
      title="Mobile Physiotherapy in Dudley"
      metaTitle="Mobile Physiotherapy in Dudley | Renew Body Therapy"
      metaDescription="Mobile physiotherapy in Dudley for recovery, mobility & rehabilitation | Qualified physiotherapist delivering treatment in your home | Book a session →"
      intro={[
        "If you are unable to travel due to mobility limitations, illness, post surgery recovery, or health concerns, our mobile physiotherapy in Dudley provides professional rehabilitation directly in your home. Working with a qualified physiotherapist who partners with our clinic, you receive the same high standard of care offered in a dudley physiotherapy clinic, but with greater comfort, accessibility, and convenience.",
        "This service is designed to help clients recover safely, improve mobility, reduce pain, regain independence, and receive personalised treatment without the challenges of travelling to appointments."
      ]}
      whyChoose={[
        "Qualified physiotherapist with NHS experience",
        "Home visits for comfort and convenience",
        "No travel required during recovery",
        "Familiar environment that supports confidence and relaxation",
        "Personalised assessment and treatment in your home",
        "Flexible scheduling to suit your needs"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Mobile physiotherapy brings expert hands-on physio treatment, rehabilitation support, and functional assessment directly to your home. It provides the same clinical quality and professionalism you would receive at a Dudley physiotherapy clinic, but with the advantage of tailored care in your own environment.",
        "This service is ideal for clients who cannot travel due to:",
        "• Mobility limitations",
        "• Post surgery restrictions",
        "• Pain that affects movement",
        "• Chronic health conditions",
        "• Reduced confidence or stability",
        "• Difficulty accessing transport",
        "Our physiotherapist provides evidence-based treatment, exercise guidance, and functional support to help you progress safely and effectively.",
        "For details of our full range of services, visit our dedicated page."
      ]}
      benefits={[
        {
          title: "Convenience",
          description: "You receive professional physiotherapy without leaving your home which reduces stress, travel time, and physical effort during recovery."
        },
        {
          title: "Comfort",
          description: "Being treated in your familiar environment can reduce anxiety, increase relaxation, and improve treatment engagement."
        },
        {
          title: "Accessibility",
          description: "Our mobile physiotherapy in Dudley makes rehabilitation available to clients who cannot attend clinic appointments."
        },
        {
          title: "Personalised Care",
          description: "Your physiotherapist can assess your real movement challenges by observing how you navigate your home and daily activities."
        },
        {
          title: "Functional Assessment",
          description: "Working within your living environment allows for practical recommendations that support safer and more confident movement."
        }
      ]}
      whatToExpect={{
        description: [
          "Your session begins with an in-home assessment of your mobility, symptoms, daily challenges, and goals. The physiotherapist will also review your home environment to identify any barriers to movement, recovery, or safety.",
          "This approach ensures your treatment plan is tailored, functional, and relevant to your everyday activities."
        ],
        includes: [
          "Comprehensive assessment in your home",
          "Hands on physiotherapy and manual therapy",
          "Personalised exercise programme",
          "Mobility training and strengthening",
          "Guidance on movement, posture, and safety",
          "Home environment assessment for practical adjustments",
          "Education on self management strategies",
          "Progress monitoring and treatment adaptations"
        ]
      }}
      whoCanBenefit={{
        intro: "Our physio in Dudley offers all mobile services to:",
        list: [
          "Clients unable to travel due to mobility limitations",
          "Individuals recovering from surgery such as hip replacement or knee replacement",
          "People with chronic conditions who find travel difficult",
          "Older adults who prefer home based rehabilitation",
          "Clients needing assessment of movement in their home environment",
          "Individuals experiencing deconditioning or weakness",
          "Anyone seeking convenient, personalised physiotherapy"
        ],
        conclusion: "If travel makes access to physiotherapy difficult, our mobile service ensures you receive the professional care you need."
      }}
      trustSection={{
        description: "Our mobile physiotherapy service is delivered by a qualified physiotherapist with NHS experience who works collaboratively with Renew Body Therapy. This ensures you receive safe, evidence based treatment designed to improve your movement, strength, and overall function. We support clients seeking physiotherapy in Dudley, Netherton, Brierley Hill, Stourbridge, Sedgley, and the wider area.",
        points: [
          "Qualified and experienced physiotherapist",
          "Professional equipment brought to your home",
          "Clinical quality treatment without needing to travel",
          "A friendly, supportive, and patient centred approach",
          "Flexible appointment times designed around your schedule"
        ]
      }}
      faq={[
        {
          question: "What areas do you cover?",
          answer: "We provide mobile physiotherapy in Dudley, Netherton, Stourbridge, Brierley Hill, Sedgley, and nearby areas."
        },
        {
          question: "Do you bring equipment?",
          answer: "Yes, the physiotherapist brings essential equipment required for assessment and treatment."
        },
        {
          question: "How long does a session last?",
          answer: "Sessions typically last 60 minutes which includes assessment, treatment, and guidance."
        },
        {
          question: "Is mobile physiotherapy as effective as clinic based care?",
          answer: "Yes. Mobile physiotherapy provides the same professional care as a clinic appointment, often with the added benefit of assessing real life mobility challenges in your home."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg"
      serviceSelectValue="physio"
      customHeadings={{
        whyChoose: "Why Clients Choose Our Mobile Physiotherapy Service",
        trustSection: "Why Choose Renew Body Therapy for Mobile Physiotherapy",
        whatToExpect: "What To Expect During Your Mobile Physiotherapy Session",
        cta: "Book Your Mobile Physiotherapy in Dudley or The Neighbouring Areas",
        ctaDescription: "If travel is difficult but you need physiotherapy, our mobile service brings professional treatment and rehabilitation directly to your door. Book your session today and take the next step towards improved mobility and recovery."
      }}
    />
  );
}

export default MobilePhysiotherapy;

