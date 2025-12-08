import ServicePageTemplate from './ServicePageTemplate';

function RespiratoryRehabilitation() {
  return (
    <ServicePageTemplate
      title="Respiratory & Long Covid Rehabilitation in Dudley"
      metaTitle="Respiratory & Long Covid Rehabilitation in Dudley | Renew Body Therapy"
      metaDescription="Respiratory & Long Covid rehabilitation in Dudley | Breathing support & recovery | NHS qualified therapist | Book today →"
      intro={[
        "Our respiratory and Long Covid rehabilitation sessions support clients experiencing ongoing breathing difficulties, fatigue, or reduced physical capacity following respiratory illness or Long Covid. Treatment includes functional rehabilitation, pacing guidance, and safe strengthening exercises.",
        "With NHS experience in respiratory care, we understand the unique challenges of post-respiratory recovery and provide compassionate, evidence-based support to help you regain function and improve your quality of life."
      ]}
      whyChoose={[
        "NHS experience in respiratory care",
        "Specialized knowledge of Long Covid recovery",
        "Pacing and energy management support",
        "Safe, gradual rehabilitation approach",
        "Home-based sessions available",
        "Compassionate understanding of post-respiratory challenges"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Respiratory and Long Covid rehabilitation is a specialized program designed to support recovery from respiratory illness, including Long Covid. The program addresses breathing difficulties, fatigue, reduced exercise tolerance, and other symptoms that can persist after respiratory illness.",
        "Our approach combines breathing exercises, pacing strategies, gradual exercise progression, and functional rehabilitation to help you manage symptoms and gradually improve your capacity."
      ]}
      benefits={[
        {
          title: "Improve Breathing",
          description: "Breathing exercises and techniques to enhance respiratory function and manage breathlessness."
        },
        {
          title: "Manage Fatigue",
          description: "Pacing strategies and energy management techniques to help manage persistent fatigue."
        },
        {
          title: "Gradual Recovery",
          description: "Safe, structured approach to gradually improve exercise tolerance and physical capacity."
        },
        {
          title: "Support Function",
          description: "Functional rehabilitation to help you return to daily activities safely."
        },
        {
          title: "Reduce Symptoms",
          description: "Comprehensive approach to address multiple Long Covid and post-respiratory symptoms."
        }
      ]}
      whatToExpect={{
        description: [
          "Your respiratory rehabilitation program begins with a comprehensive assessment of your breathing, fatigue levels, and functional capacity. We'll create a personalized program that respects your current limitations while supporting gradual improvement."
        ],
        includes: [
          "Comprehensive respiratory assessment",
          "Breathing exercises and techniques",
          "Pacing and energy management education",
          "Gradual exercise progression",
          "Functional activity support",
          "Symptom management strategies",
          "Progress monitoring and adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "Respiratory and Long Covid rehabilitation is beneficial for:",
        list: [
          "Individuals with Long Covid symptoms",
          "People recovering from respiratory illness",
          "Those experiencing persistent breathlessness",
          "Clients dealing with post-illness fatigue",
          "Individuals with reduced exercise tolerance",
          "Anyone seeking support for respiratory recovery"
        ],
        conclusion: "If you're experiencing ongoing symptoms after respiratory illness or Long Covid, our specialized rehabilitation can support your recovery."
      }}
      trustSection={{
        description: "Our respiratory rehabilitation is delivered by an NHS-qualified therapist with experience in respiratory care. We understand the challenges of post-respiratory recovery and provide patient, compassionate support.",
        points: [
          "Experience in respiratory care",
          "Understanding of Long Covid challenges",
          "Patient, gradual approach",
          "Home-based sessions available"
        ]
      }}
      faq={[
        {
          question: "How long does recovery take?",
          answer: "Recovery timelines vary significantly. We work at your pace and adjust the program based on your symptoms and progress."
        },
        {
          question: "Can this help with Long Covid fatigue?",
          answer: "Yes, our program includes pacing strategies and energy management techniques specifically designed to help manage Long Covid fatigue."
        },
        {
          question: "Are sessions done at home?",
          answer: "Yes, we offer home-based sessions, which can be particularly helpful when dealing with fatigue and reduced capacity."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591758/respiratory-rehab_mzccnt.jpg"
      serviceSelectValue="respiratory-rehab"
    />
  );
}

export default RespiratoryRehabilitation;

