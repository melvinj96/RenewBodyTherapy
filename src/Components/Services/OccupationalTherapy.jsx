import ServicePageTemplate from './ServicePageTemplate';

function OccupationalTherapy() {
  return (
    <ServicePageTemplate
      title="Supportive Occupational Therapy in Dudley"
      metaTitle="Occupational Therapy in Dudley | Renew Body Therapy"
      metaDescription="In-home occupational therapy in Dudley for mobility, rehabilitation & daily living support | NHS qualified occupational therapist | Book your assessment →"
      intro={[
        "If you or a loved one is recovering from injury, surgery, illness, or a long-term condition that affects daily life, our occupational therapy in Dudley provides practical, safe, and supportive rehabilitation in the comfort of your own home. With nearly ten years of NHS clinical experience, our occupational therapist focuses on restoring independence, improving mobility, increasing confidence, and helping you manage everyday activities with greater ease.",
        "Our service supports clients across Dudley, Netherton, Brierley Hill, Stourbridge, Sedgley, and surrounding areas. Whether you need help with mobility, personal care, home tasks, returning to work, or recovery after hospital discharge, you will receive patient centred care tailored to your goals."
      ]}
      whyChoose={[
        "Nearly 10 years of NHS occupational therapy experience",
        "In-home treatment for convenience and comfort",
        "Focus on functional independence and daily living skills",
        "Personalised rehabilitation plans",
        "Mobility and transfer support",
        "Compassionate and practical approach to recovery"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Occupational therapy helps people rebuild the skills and confidence needed for everyday living. It focuses on improving function rather than simply treating symptoms. This makes it essential for clients who want to regain independence, mobility, or the ability to carry out meaningful activities.",
        "Our work often involves:",
        "• Supporting recovery after fractures, surgery, or illness",
        "• Improving mobility and reducing risk of falls",
        "• Enhancing independence with daily tasks",
        "• Addressing cognitive or physical challenges",
        "• Helping clients adapt to long term or chronic conditions",
        "• Assessing home environments for safety and accessibility",
        "Occupational therapy is a key part of occupational health in Dudley and supports clients returning to normal routines, work duties, or community activity.",
        "To learn more about our full range of services, visit our dedicated page."
      ]}
      benefits={[
        {
          title: "Regain Independence",
          description: "We support you with personal care, household tasks, community access, and the activities that matter most in your daily routine."
        },
        {
          title: "Functional Recovery",
          description: "Therapy sessions focus on practical skills needed for daily living, mobility, and safe movement, helping you return to your usual roles."
        },
        {
          title: "Mobility Support",
          description: "We assess balance, gait, transfers, and functional movement, providing exercises and strategies to help you move safely and confidently."
        },
        {
          title: "Adaptive Strategies",
          description: "We teach techniques and coping methods that make everyday tasks easier to manage, especially after injury or during long term conditions."
        },
        {
          title: "Confidence Building",
          description: "Rehabilitation is not only physical. Our patient centred approach helps rebuild confidence, reduce fear of movement, and support long term recovery."
        }
      ]}
      whatToExpect={{
        description: [
          "Our experienced occupational therapist in Dudley always begins with a detailed assessment of how you move, how you manage tasks, and what challenges you face in daily life. This is carried out in your home so we can fully understand your environment, routines, and specific needs.",
          "Our goal is to help you regain independence safely and comfortably."
        ],
        includes: [
          "Comprehensive functional assessment",
          "Daily living activities support",
          "Mobility and safe transfer training",
          "Tailored exercise plans for strength and confidence",
          "Recommendations for adaptive equipment",
          "Home safety assessment to reduce risks",
          "Progress tracking and regular adjustments to your plan"
        ]
      }}
      whoCanBenefit={{
        intro: "Our occupational therapy is suitable for:",
        list: [
          "Clients recovering from fractures or joint replacements",
          "Individuals recovering from surgery or hospital stays",
          "People with long term conditions affecting movement or function",
          "Older adults wanting to stay independent at home",
          "Clients experiencing weakness, mobility issues, or reduced confidence",
          "Anyone needing support with daily activities or rehabilitation",
          "Those needing functional assessments for occupational health in Dudley"
        ],
        conclusion: "If daily tasks have become difficult, occupational therapy can help you return to a safer and more independent lifestyle."
      }}
      trustSection={{
        description: "Our occupational therapy is provided by an NHS-qualified therapist with nearly a decade of experience across orthopaedics, stroke, neurology, respiratory care, cardiology, vascular surgery, and community rehabilitation. This depth of knowledge allows us to assess complex conditions and create practical treatment plans that genuinely improve daily function.",
        points: [
          "Strong NHS clinical background",
          "Focus on functional and meaningful outcomes",
          "Patient centred support throughout your recovery",
          "In home visits for accurate assessment and convenience",
          "Honest and transparent guidance",
          "A caring and compassionate approach"
        ]
      }}
      faq={[
        {
          question: "What is the difference between physiotherapy and occupational therapy?",
          answer: "Physiotherapy focuses on movement, strength, and physical rehabilitation. Occupational therapy focuses on helping you perform the tasks and daily activities that are important in your everyday life. Both roles complement each other and are often used together in recovery."
        },
        {
          question: "Can sessions be done at home?",
          answer: "Yes. Our mobile occupational therapy service is primarily home-based, so we can assess your environment properly and support you in the space where you carry out your daily tasks."
        },
        {
          question: "How long does treatment take?",
          answer: "The duration varies based on your condition, goals, and progress. We create personalised plans and adjust them regularly to support the best possible recovery."
        },
        {
          question: "Is occupational therapy suitable for older adults?",
          answer: "Yes. Occupational therapy is ideal for older adults who want to maintain independence, reduce falls risk, improve mobility, or manage long term conditions safely."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg"
      serviceSelectValue="occupational"
      customHeadings={{
        whyChoose: "Why People Choose Our Occupational Therapy",
        trustSection: "Why Choose Renew Body Therapy for Occupational Therapy in Dudley",
        whatToExpect: "What To Expect During Your Occupational Therapy Session",
        cta: "Book Your Occupational Therapy in Dudley",
        ctaDescription: "If you are ready to regain independence, rebuild confidence, and improve your daily function, book your occupational therapy assessment today. Our NHS trained therapist will support you with a tailored plan built around your needs."
      }}
    />
  );
}

export default OccupationalTherapy;

