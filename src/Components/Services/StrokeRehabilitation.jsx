import ServicePageTemplate from './ServicePageTemplate';

function StrokeRehabilitation() {
  return (
    <ServicePageTemplate
      title="Stroke Rehabilitation in Dudley"
      metaTitle="Stroke Rehabilitation in Dudley | Renew Body Therapy"
      metaDescription="Specialist stroke rehabilitation in Dudley | NHS experienced therapist | Rebuild strength & independence | Book today →"
      intro={[
        "Our stroke rehabilitation sessions provide specialist support to help clients rebuild strength, coordination, and independence following a stroke. With years of NHS experience in neurology and stroke services, we offer practical and effective treatment plans tailored to each patient's capabilities and goals.",
        "Every rehabilitation program is designed to support your recovery journey, helping you regain function and improve your quality of life in the comfort of your own home or at our clinic."
      ]}
      whyChoose={[
        "Years of NHS experience in neurology and stroke services",
        "Specialist knowledge of stroke recovery",
        "Personalised treatment plans for each patient",
        "Home-based or clinic-based sessions available",
        "Evidence-based rehabilitation techniques",
        "Compassionate, patient-centered approach"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Stroke rehabilitation is a specialized therapy program designed to help individuals recover function and independence after a stroke. Our approach combines occupational therapy, physiotherapy, and functional rehabilitation to address the physical, cognitive, and emotional challenges that can follow a stroke.",
        "With nearly ten years of NHS experience in stroke services, our therapist understands the unique needs of stroke survivors and creates tailored programs that respect each patient's capabilities while working toward meaningful goals."
      ]}
      benefits={[
        {
          title: "Rebuild Strength",
          description: "Targeted exercises and therapy to restore muscle strength and function affected by stroke."
        },
        {
          title: "Improve Coordination",
          description: "Specialized techniques to enhance coordination and motor control."
        },
        {
          title: "Enhance Independence",
          description: "Focus on functional activities to support daily living and independence."
        },
        {
          title: "Support Cognitive Recovery",
          description: "Activities and exercises to support cognitive function and mental well-being."
        },
        {
          title: "Prevent Complications",
          description: "Early intervention and ongoing support to prevent secondary complications."
        }
      ]}
      whatToExpect={{
        description: [
          "Your stroke rehabilitation program begins with a comprehensive assessment to understand your current abilities, challenges, and goals. We'll work together to create a personalized treatment plan that addresses your specific needs."
        ],
        includes: [
          "Comprehensive functional assessment",
          "Personalized exercise program",
          "Mobility and balance training",
          "Activities of daily living support",
          "Cognitive rehabilitation activities",
          "Family education and support",
          "Progress monitoring and plan adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "Stroke rehabilitation is essential for:",
        list: [
          "Recent stroke survivors",
          "Individuals with ongoing stroke-related challenges",
          "People seeking to improve function and independence",
          "Those needing support with daily activities",
          "Clients looking for specialized stroke expertise"
        ],
        conclusion: "If you or a loved one has experienced a stroke, our specialized rehabilitation can support your recovery journey."
      }}
      trustSection={{
        description: "Our stroke rehabilitation is delivered by an NHS-qualified occupational therapist with extensive experience in neurology and stroke services. We understand the complexities of stroke recovery and provide compassionate, evidence-based care.",
        points: [
          "Specialized training in stroke rehabilitation",
          "Understanding of stroke recovery challenges",
          "Patient and family-centered approach",
          "Flexible scheduling to accommodate your needs"
        ]
      }}
      faq={[
        {
          question: "How soon after a stroke can rehabilitation begin?",
          answer: "Rehabilitation can begin as soon as medically appropriate. Early intervention is often beneficial, but we work with clients at any stage of recovery."
        },
        {
          question: "Can sessions be done at home?",
          answer: "Yes, we offer home-based sessions for clients who cannot travel, ensuring you receive the care you need in the comfort of your own home."
        },
        {
          question: "How long does stroke rehabilitation take?",
          answer: "Recovery timelines vary for each individual. We create personalized programs and adjust them based on your progress and goals."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591762/stroke-rehab_vr4xvi.jpg"
      serviceSelectValue="stroke-rehab"
    />
  );
}

export default StrokeRehabilitation;

