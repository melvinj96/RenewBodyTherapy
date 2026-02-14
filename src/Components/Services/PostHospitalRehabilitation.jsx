import ServicePageTemplate from './ServicePageTemplate';

function PostHospitalRehabilitation() {
  return (
    <ServicePageTemplate
      title="Post-Hospital Rehabilitation in Dudley"
      metaTitle="Post-Hospital Rehabilitation in Dudley | Renew Body Therapy"
      metaDescription="Expert post-hospital discharge rehabilitation in Dudley to restore mobility, strength & independence | NHS-qualified therapist | Home visits available →"
      intro={[
        "Returning home after surgery, illness, or a prolonged hospital stay can feel overwhelming. Our specialist post-hospital rehabilitation in Dudley provides structured, safe, and supportive recovery to help you regain strength, mobility, and independence with confidence.",
        "At Renew Body Therapy, rehabilitation is delivered by an NHS-qualified occupational therapist with nearly 10 years of experience across acute hospital settings and community care. We bridge the gap between hospital discharge and full recovery, ensuring you are supported every step of the way.",
        "Home-based sessions are available across Dudley, Netherton, Brierley Hill, Sedgley, Stourbridge and surrounding areas, making recovery practical and accessible."
      ]}
      whyChoose={[
        "NHS-qualified therapist with acute and community hospital experience",
        "Specialist support for post-surgical and post-illness recovery",
        "Structured, evidence-based rehabilitation programmes",
        "Home-based sessions for comfort and convenience",
        "Focus on safe, gradual progression",
        "Support to reduce risk of re-admission",
        "Compassionate, personalised care",
        "Affordable pricing with no unnecessary block bookings"
      ]}
      prices={[
        "60 minutes - £55"
      ]}
      whatIs={[
        "Post-hospital discharge rehabilitation is a structured recovery programme designed to support individuals transitioning from hospital care back to independent living.",
        "After surgery or illness, it is common to experience: reduced strength; fatigue; decreased mobility; balance issues; loss of confidence; and difficulty with everyday tasks. Without structured rehabilitation, these challenges can delay recovery or increase the risk of complications.",
        "Our post-surgery rehabilitation in Dudley focuses on restoring functional ability safely and progressively, respecting your medical guidance and recovery timeline. Where appropriate, we coordinate with your medical team to ensure your rehabilitation plan aligns with discharge recommendations."
      ]}
      benefits={[
        {
          title: "Support Safe Recovery",
          description: "A structured and monitored programme reduces the risk of complications during early recovery."
        },
        {
          title: "Restore Mobility",
          description: "Gradual mobility training helps you regain safe movement at home and in the community."
        },
        {
          title: "Rebuild Strength",
          description: "Targeted strengthening exercises address deconditioning caused by hospital stays."
        },
        {
          title: "Regain Independence",
          description: "We focus on practical, real-life tasks to help you return to daily routines safely."
        },
        {
          title: "Reduce Risk of Re-Admission",
          description: "Proactive rehabilitation can minimise falls risk, weakness-related incidents, and avoidable complications."
        }
      ]}
      whatToExpect={{
        description: [
          "Your programme begins with a comprehensive post-discharge assessment, including: review of your hospital discharge summary; assessment of strength, balance, and mobility; evaluation of daily living tasks; review of pain levels and fatigue; and home environment assessment (if home-based).",
          "Every session is tailored to your recovery stage and adjusted as your confidence and strength improve."
        ],
        includes: [
          "Progressive strength training",
          "Mobility and transfer practice",
          "Functional task training (stairs, kitchen tasks, washing, dressing)",
          "Breathing and pacing strategies where appropriate",
          "Education on safe recovery and energy conservation",
          "Falls risk screening",
          "Ongoing progress monitoring and programme adjustments"
        ]
      }}
      whoCanBenefit={{
        intro: "This service is ideal for:",
        list: [
          "Individuals recovering from orthopaedic surgery (hip, knee, fracture repair)",
          "Clients returning home after stroke or neurological illness",
          "People recovering from respiratory illness or prolonged bed rest",
          "Older adults experiencing weakness after hospitalisation",
          "Individuals following abdominal or vascular surgery",
          "Clients who feel unsteady or lacking confidence after discharge",
          "Anyone seeking structured home rehabilitation support"
        ],
        conclusion: "If you are unsure whether you need rehabilitation, early assessment can prevent longer-term setbacks."
      }}
      trustSection={{
        description: "Our clinical background ensures your rehabilitation plan is safe, realistic, and grounded in evidence-based practice. We understand the physical and emotional impact of returning home after hospitalisation. Our approach is calm, supportive, and structured - helping you progress at a pace that feels achievable. Clients trust Renew Body Therapy for professional and compassionate home rehabilitation support.Your recovery is delivered by an NHS-qualified occupational therapist with experience across:",
        points: [
          "Trauma and orthopaedics",
          "Stroke and neurology",
          "Respiratory and cardiology care",
          "General and vascular surgery",
          "Community rehabilitation services"
        ]
      }}
      faq={[
        {
          question: "How soon after discharge can rehabilitation begin?",
          answer: "Rehabilitation can usually begin within a few days of discharge, once you are medically stable. We work alongside discharge advice to ensure appropriate timing."
        },
        {
          question: "Can sessions be done at home?",
          answer: "Yes. Home-based post-hospital rehabilitation is often ideal, particularly when travel feels difficult or tiring."
        },
        {
          question: "How long does post-hospital rehabilitation take?",
          answer: "Recovery timelines vary depending on your surgery, illness, and baseline strength. Some clients require short-term support, while others benefit from longer rehabilitation programmes."
        },
        {
          question: "Will this help prevent falls?",
          answer: "Yes. We assess and address mobility, strength, and environmental factors that contribute to falls risk after hospital discharge."
        }
      ]}
      customHeadings={{
        whyChoose: "Why Choose Our Post-Hospital Rehab Service?",
        whatToExpect: "What to Expect During Your Rehabilitation Session",
        trustSection: "Why You Can Trust Renew Body Therapy for Post-Hospital Rehabilitation",
        cta: "Book Your Post-Hospital Discharge Rehabilitation Today",
        ctaDescription: "If you are returning home after a hospital stay and want structured, professional support to rebuild strength and independence, our specialist post-hospital rehabilitation in Dudley helps many people integrate back into normal life comfortably. Appointments are available at your home or at our private clinic on Bristol Road."
      }}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg"
      serviceSelectValue="post-hospital-rehab"
    />
  );
}

export default PostHospitalRehabilitation;

