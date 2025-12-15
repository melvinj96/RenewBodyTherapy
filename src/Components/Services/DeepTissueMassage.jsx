import ServicePageTemplate from './ServicePageTemplate';

function DeepTissueMassage() {
  return (
    <ServicePageTemplate
      title="Deep Tissue Massage in Dudley"
      metaTitle="Deep Tissue Massage in Dudley | Renew Body Therapy"
      metaDescription="Professional deep tissue massage in Dudley for chronic pain relief | NHS qualified therapist | Book your session today →"
      intro={[
        "Experience our professional deep tissue massage in Dudley, designed to target chronic muscular tension and provide lasting relief. This treatment focuses on releasing deep layers of soft tissue, alleviating tightness, and addressing persistent pain in the back, neck, and shoulders.",
        "Sessions are delivered in our quiet home clinic, providing a peaceful environment that allows for complete relaxation while delivering focused therapeutic work."
      ]}
      whyChoose={[
        "NHS-qualified therapist with extensive clinical experience",
        "Targeted treatment for chronic muscular tension",
        "Quiet, comfortable home-based clinic environment",
        "Affordable pricing without compromising on quality",
        "Personalised approach to address your specific needs",
        "Evidence-based techniques for lasting relief"
      ]}
      prices={[
        "Full Body (60 mins) - £45",
        "Additional Service - Dry Needling - £15"
      ]}
      whatIs={[
        "Deep tissue massage is a therapeutic technique that focuses on releasing chronic muscular tension by targeting the deeper layers of muscle and connective tissue. Unlike lighter massage styles, deep tissue massage applies firm pressure to break down knots and adhesions that can cause pain and limit mobility.",
        "This treatment is ideal for clients with ongoing back, neck, or shoulder pain, or for individuals dealing with stress-related muscular tightness that hasn't responded to lighter treatments."
      ]}
      benefits={[
        {
          title: "Relieve Chronic Pain",
          description: "Targets deep muscle layers to alleviate persistent pain and discomfort in problem areas."
        },
        {
          title: "Break Down Adhesions",
          description: "Helps break down scar tissue and muscle adhesions that can cause stiffness and limited range of motion."
        },
        {
          title: "Improve Posture",
          description: "Addresses muscular imbalances that contribute to poor posture and related discomfort."
        },
        {
          title: "Reduce Stress",
          description: "Promotes relaxation while addressing the physical manifestations of stress in the body."
        },
        {
          title: "Enhance Recovery",
          description: "Supports recovery from injuries and helps prevent future muscular problems."
        }
      ]}
      whatToExpect={{
        description: [
          "Your deep tissue massage session begins with a consultation to understand your specific areas of concern and pain levels. The therapist will then apply firm, focused pressure to target the deeper muscle layers, working through tension and adhesions."
        ],
        includes: [
          "Comprehensive consultation to assess your needs",
          "Targeted deep tissue techniques",
          "Focus on problem areas and trigger points",
          "Myofascial release techniques",
          "Post-treatment guidance and aftercare advice"
        ]
      }}
      whoCanBenefit={{
        intro: "Deep tissue massage is ideal for:",
        list: [
          "Individuals with chronic back, neck, or shoulder pain",
          "People experiencing stress-related muscular tension",
          "Those with limited mobility due to muscle tightness",
          "Athletes with persistent muscle soreness",
          "Anyone seeking relief from long-standing muscular issues"
        ],
        conclusion: "If you've tried lighter massage techniques without success, deep tissue massage may provide the relief you need."
      }}
      trustSection={{
        description: "Our deep tissue massage is delivered by an NHS-qualified therapist with extensive experience in treating chronic muscular conditions. Every session is tailored to your comfort level and specific needs.",
        points: [
          "Gradual pressure adjustment to ensure your comfort",
          "Clear communication throughout the session",
          "Personalised treatment plan based on your condition",
          "Professional, safe, and effective techniques"
        ]
      }}
      faq={[
        {
          question: "Is deep tissue massage painful?",
          answer: "You may experience some discomfort as we work through deep tension, but we always work within your comfort level. Communication is key, and we'll adjust pressure as needed."
        },
        {
          question: "How long does a session last?",
          answer: "Sessions typically last 60 minutes, allowing time for consultation, treatment, and aftercare guidance."
        },
        {
          question: "How often should I get deep tissue massage?",
          answer: "Frequency depends on your individual needs. Some clients benefit from weekly sessions, while others find monthly maintenance sessions sufficient."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591748/deep-tissue_qza6dp.jpg"
      serviceSelectValue="deep-tissue"
    />
  );
}

export default DeepTissueMassage;

