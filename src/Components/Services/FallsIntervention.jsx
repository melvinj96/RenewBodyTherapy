import ServicePageTemplate from './ServicePageTemplate';

function FallsIntervention() {
  return (
    <ServicePageTemplate
      title="Falls Intervention in Dudley"
      metaTitle="Prevention & Intervention of Falls in Dudley | Renew Body Therapy"
      metaDescription="Specialist falls intervention in Dudley | Improve balance & confidence | Prevent falls | NHS qualified therapist | Book today →"
      intro={[
        "If you are concerned about falling, have experienced a recent fall, or feel unsteady on your feet, our specialist service provides prevention and intervention of falls in Dudley, designed to improve balance, reduce risk, and restore confidence.",
        "At Renew Body Therapy, we provide professional, evidence-based falls prevention and balance therapy delivered by an NHS-qualified occupational therapist with extensive experience in community rehabilitation and mobility support.",
        "Sessions are available in your home across Dudley, Netherton, Brierley Hill, Sedgley and surrounding areas, ensuring practical, real-world intervention where it matters most."
      ]}
      whyChoose={[
        "Nearly 10 years of NHS experience in community rehabilitation",
        "Specialist knowledge of falls prevention and risk reduction",
        "Comprehensive home-based falls assessments",
        "Personalised balance and strength training programmes",
        "Functional mobility and transfer training",
        "Compassionate support to rebuild confidence after a fall",
        "Affordable pricing with no pressure to commit to block bookings",
        "Trusted by local families and healthcare professionals"
      ]}
      prices={[
        "60 minutes - £55"
      ]}
      whatIs={[
        "Falls intervention is a structured rehabilitation programme designed to: reduce the risk of future falls; support recovery after a fall-related injury; improve balance, coordination, and mobility; and increase safety within the home.",
        "Falls are one of the most common causes of injury, particularly among older adults and individuals recovering from illness, surgery, or neurological conditions. Early intervention can significantly reduce further risk and improve long-term independence.",
        "Our falls rehabilitation service in Dudley combines: detailed falls risk assessment; balance and strength evaluation; functional movement training; and environmental safety review. By identifying the root causes of instability - whether muscular weakness, reduced confidence, environmental hazards, or post-illness deconditioning - we create a personalised plan tailored to your needs."
      ]}
      benefits={[
        {
          title: "Improve Balance & Stability",
          description: "Targeted balance exercises and progressive strength training improve postural control and coordination."
        },
        {
          title: "Reduce Falls Risk",
          description: "We identify and address physical, environmental, and functional risk factors contributing to falls."
        },
        {
          title: "Rebuild Confidence",
          description: "Fear of falling often limits activity and independence. Our supportive approach helps restore confidence in movement."
        },
        {
          title: "Enhance Functional Mobility",
          description: "Improve walking, transfers, stair navigation, and everyday movement tasks."
        },
        {
          title: "Support Safe Independence",
          description: "Maintain independence at home with practical strategies and personalised rehabilitation."
        }
      ]}
      whatToExpect={{
        description: [
          "Your programme begins with a comprehensive falls risk assessment carried out in your home or at our clinic on Bristol Road.",
          "We assess: balance and gait; muscle strength; transfers (sit-to-stand, bed mobility); walking pattern and safety; environmental hazards within the home; and confidence and fear of falling."
        ],
        includes: [
          "Comprehensive falls risk assessment",
          "Balance and lower limb strength training",
          "Mobility and transfer practice",
          "Home safety assessment and practical modifications",
          "Personalised exercise plan",
          "Education on fall prevention strategies",
          "Progress tracking and programme adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "Our fall intervention and falls prevention therapy in Dudley is ideal for:",
        list: [
          "Older adults at risk of falling",
          "Individuals who have recently experienced a fall",
          "People with reduced balance or unsteadiness",
          "Clients recovering from illness or hospital discharge",
          "Stroke survivors or neurological patients",
          "Individuals with mobility limitations",
          "Anyone wanting to maintain independence safely"
        ],
        conclusion: "If you or a loved one feels unstable, hesitant, or worried about falling, early intervention can make a significant difference."
      }}
      trustSection={{
        description: "We understand both the physical and emotional impact of falls. Our approach is calm, supportive, and evidence-based, ensuring you feel safe throughout the rehabilitation process. Clients across the local area trust Renew Body Therapy for professional recovery after a fall. Our specialist fall service is delivered by an NHS-qualified occupational therapist with nearly a decade of experience across: ",
        points: [
          "Community rehabilitation",
          "Stroke and neurology",
          "Orthopaedics",
          "Post-surgical recovery",
          "Mobility and functional independence support"
        ]
      }}
      faq={[
        {
          question: "Can assessments be done at home?",
          answer: "Yes. We provide home-based falls assessments in Dudley and surrounding areas. This allows us to evaluate your real environment and offer practical, tailored recommendations."
        },
        {
          question: "How long does the falls intervention programme last?",
          answer: "The duration varies depending on your condition, risk level, and goals. Some clients benefit from short-term intervention, while others may require ongoing support."
        },
        {
          question: "What if I've already had a fall?",
          answer: "Our programme supports recovery after a fall and helps reduce the risk of future incidents through structured rehabilitation and preventative strategies."
        },
        {
          question: "Is falls intervention only for older adults?",
          answer: "While common in older adults, fall intervention is also beneficial for individuals recovering from surgery, illness, stroke, or neurological conditions."
        }
      ]}
      customHeadings={{
        whyChoose: "Why Choose Our Falls Intervention Service?",
        whatToExpect: "What to Expect During Your Falls Prevention Session",
        trustSection: "Why You Can Trust Renew Body Therapy for Fall Rehabilitation",
        cta: "Book Our Specialist Fall Rehabilitation in Dudley Today",
        ctaDescription: "If you are concerned about falling or want to improve your balance and confidence, our specialist falls prevention service in Dudley can help you stay safe and independent. Appointments are available at your home or at our private clinic on Bristol Road."
      }}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591750/falls-intervention_itquxi.jpg"
      serviceSelectValue="falls-intervention"
    />
  );
}

export default FallsIntervention;

