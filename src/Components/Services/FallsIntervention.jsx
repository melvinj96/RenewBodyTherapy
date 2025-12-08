import ServicePageTemplate from './ServicePageTemplate';

function FallsIntervention() {
  return (
    <ServicePageTemplate
      title="Falls Intervention in Dudley"
      metaTitle="Falls Intervention & Prevention in Dudley | Renew Body Therapy"
      metaDescription="Specialist falls intervention in Dudley | Improve balance & confidence | Prevent falls | NHS qualified therapist | Book today →"
      intro={[
        "Our falls intervention service is designed for individuals at risk of falls or those recovering from mobility-related incidents. This specialized program focuses on improving balance, confidence, and functional movement to help you stay safe and independent.",
        "It is especially valuable for older adults or clients recovering from illness or injury. With NHS experience in community care, we provide practical, evidence-based interventions tailored to your needs."
      ]}
      whyChoose={[
        "NHS experience in falls prevention and intervention",
        "Specialized balance and mobility training",
        "Home-based assessments and treatment",
        "Personalized risk assessment",
        "Evidence-based intervention strategies",
        "Support for regaining confidence"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Falls intervention is a specialized program designed to reduce the risk of falls and support recovery after a fall. The program includes comprehensive assessment of balance, strength, mobility, and environmental factors that may contribute to fall risk.",
        "Through targeted exercises, balance training, and functional activities, we help improve your stability, confidence, and ability to move safely in your daily environment."
      ]}
      benefits={[
        {
          title: "Improve Balance",
          description: "Targeted exercises and activities to enhance balance and stability."
        },
        {
          title: "Build Confidence",
          description: "Support to rebuild confidence in movement and daily activities after a fall."
        },
        {
          title: "Enhance Functional Movement",
          description: "Improve your ability to perform daily tasks safely and independently."
        },
        {
          title: "Reduce Fall Risk",
          description: "Comprehensive approach to identify and address fall risk factors."
        },
        {
          title: "Support Recovery",
          description: "Help recover function and mobility after a fall-related injury."
        }
      ]}
      whatToExpect={{
        description: [
          "Your falls intervention program begins with a comprehensive assessment of your balance, strength, mobility, and home environment. We'll identify specific risk factors and create a personalized intervention plan."
        ],
        includes: [
          "Comprehensive falls risk assessment",
          "Balance and strength evaluation",
          "Home safety assessment",
          "Personalized exercise program",
          "Balance and mobility training",
          "Functional activity practice",
          "Education on fall prevention",
          "Progress monitoring and plan adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "Falls intervention is ideal for:",
        list: [
          "Older adults at risk of falls",
          "Individuals who have experienced a fall",
          "People with balance or mobility concerns",
          "Those recovering from fall-related injuries",
          "Clients seeking to improve stability and confidence",
          "Anyone wanting to maintain independence"
        ],
        conclusion: "If you're concerned about falls or have experienced a fall, our specialized intervention can help you stay safe and confident."
      }}
      trustSection={{
        description: "Our falls intervention is delivered by an NHS-qualified therapist with experience in community care and falls prevention. We understand the physical and emotional impact of falls and provide compassionate, effective support.",
        points: [
          "Specialized training in falls prevention",
          "Understanding of fall risk factors",
          "Compassionate, supportive approach",
          "Home-based assessments available"
        ]
      }}
      faq={[
        {
          question: "Can assessments be done at home?",
          answer: "Yes, we offer home-based assessments to evaluate your home environment and provide treatment in the comfort of your own home."
        },
        {
          question: "How long does the program last?",
          answer: "Program duration varies based on individual needs. We create personalized plans and adjust them as you progress."
        },
        {
          question: "What if I've already had a fall?",
          answer: "Our program is designed to support recovery after a fall and help prevent future incidents through targeted intervention."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591750/falls-intervention_itquxi.jpg"
      serviceSelectValue="falls-intervention"
    />
  );
}

export default FallsIntervention;

