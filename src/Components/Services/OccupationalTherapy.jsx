import ServicePageTemplate from './ServicePageTemplate';

function OccupationalTherapy() {
  return (
    <ServicePageTemplate
      title="Occupational Therapy in Dudley"
      metaTitle="Occupational Therapy in Dudley | Renew Body Therapy"
      metaDescription="In-home occupational therapy in Dudley | NHS experienced therapist | Functional support & rehabilitation | Book today →"
      intro={[
        "With nearly ten years of NHS occupational therapy experience, we provide expert in-home OT services including mobility support, functional assessments, post-injury rehabilitation, and personalised exercise plans. This service is ideal for clients recovering from fractures, surgery, or long-term conditions affecting daily life.",
        "Our occupational therapy focuses on helping you regain independence and function in your daily activities, supporting your recovery and improving your quality of life."
      ]}
      whyChoose={[
        "Nearly 10 years of NHS occupational therapy experience",
        "In-home service for your convenience",
        "Focus on functional independence",
        "Personalized treatment plans",
        "Support for daily living activities",
        "Compassionate, patient-centered approach"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Occupational therapy helps people regain independence and function in their daily activities. Our service focuses on supporting recovery from injury, surgery, or long-term conditions by addressing the practical skills needed for daily living.",
        "With extensive NHS experience, our occupational therapist understands how to help you overcome challenges and regain confidence in your daily activities, whether that's personal care, household tasks, or returning to work."
      ]}
      benefits={[
        {
          title: "Regain Independence",
          description: "Support to regain independence in daily activities and personal care."
        },
        {
          title: "Functional Recovery",
          description: "Focus on practical skills needed for daily living and work."
        },
        {
          title: "Mobility Support",
          description: "Assessment and support for safe mobility and movement."
        },
        {
          title: "Adaptive Strategies",
          description: "Techniques and adaptations to help you manage daily tasks."
        },
        {
          title: "Confidence Building",
          description: "Support to rebuild confidence in your abilities."
        }
      ]}
      whatToExpect={{
        description: [
          "Your occupational therapy program begins with a comprehensive assessment of your functional abilities, daily activities, and goals. We'll work together to create a personalized plan that addresses your specific needs."
        ],
        includes: [
          "Comprehensive functional assessment",
          "Activities of daily living support",
          "Mobility and transfer training",
          "Personalized exercise program",
          "Adaptive equipment recommendations",
          "Home safety assessment",
          "Progress monitoring and adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "Occupational therapy is beneficial for:",
        list: [
          "Clients recovering from fractures or surgery",
          "Individuals with long-term conditions affecting function",
          "People needing support with daily activities",
          "Those recovering from injury",
          "Older adults wanting to maintain independence",
          "Anyone seeking functional rehabilitation"
        ],
        conclusion: "If you're facing challenges with daily activities, our occupational therapy can help you regain function and independence."
      }}
      trustSection={{
        description: "Our occupational therapy is delivered by an NHS-qualified occupational therapist with nearly ten years of experience. We understand the importance of functional recovery and provide compassionate, practical support.",
        points: [
          "Extensive NHS experience",
          "Focus on practical, functional outcomes",
          "Patient-centered approach",
          "In-home service available"
        ]
      }}
      faq={[
        {
          question: "What's the difference between physiotherapy and occupational therapy?",
          answer: "Physiotherapy focuses on movement and physical function, while occupational therapy focuses on helping you perform daily activities and tasks. They often work together."
        },
        {
          question: "Can sessions be done at home?",
          answer: "Yes, our occupational therapy service is primarily home-based, allowing us to assess and treat you in your actual living environment."
        },
        {
          question: "How long does treatment take?",
          answer: "Treatment duration varies based on individual needs and goals. We create personalized programs and adjust them as you progress."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg"
      serviceSelectValue="occupational"
    />
  );
}

export default OccupationalTherapy;

