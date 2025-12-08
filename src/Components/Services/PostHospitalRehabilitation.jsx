import ServicePageTemplate from './ServicePageTemplate';

function PostHospitalRehabilitation() {
  return (
    <ServicePageTemplate
      title="Post-Hospital Discharge Rehabilitation in Dudley"
      metaTitle="Post-Hospital Rehabilitation in Dudley | Renew Body Therapy"
      metaDescription="Post-hospital discharge rehabilitation in Dudley | Safe recovery support | NHS qualified therapist | Book today →"
      intro={[
        "For clients returning home after surgery, illness, or prolonged hospital admission, structured rehabilitation is essential for safe recovery. We provide step-by-step guidance, mobility training, and personalised exercise plans to support a gradual and confident return to daily activities.",
        "Our post-hospital rehabilitation service helps bridge the gap between hospital care and full independence, ensuring you have the support you need during this critical recovery period."
      ]}
      whyChoose={[
        "NHS-qualified therapist with hospital experience",
        "Specialized in post-surgical and post-illness recovery",
        "Home-based sessions available",
        "Structured, safe rehabilitation programs",
        "Support for gradual return to activities",
        "Compassionate care during recovery"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Post-hospital discharge rehabilitation is a specialized program designed to support safe recovery after surgery, illness, or hospital admission. The program focuses on helping you regain strength, mobility, and confidence to return to your daily activities safely.",
        "We work closely with your medical team when appropriate and create personalized rehabilitation plans that respect your recovery timeline while supporting progress toward your goals."
      ]}
      benefits={[
        {
          title: "Safe Recovery Support",
          description: "Structured program to support safe recovery and prevent complications."
        },
        {
          title: "Restore Mobility",
          description: "Gradual, safe approach to restoring movement and function."
        },
        {
          title: "Build Strength",
          description: "Targeted exercises to rebuild strength lost during hospitalization."
        },
        {
          title: "Regain Independence",
          description: "Support to gradually return to daily activities and independence."
        },
        {
          title: "Prevent Re-admission",
          description: "Comprehensive support to reduce risk of complications and re-admission."
        }
      ]}
      whatToExpect={{
        description: [
          "Your post-hospital rehabilitation program begins with an assessment of your current abilities, medical history, and recovery goals. We'll create a personalized plan that supports your safe recovery."
        ],
        includes: [
          "Comprehensive post-discharge assessment",
          "Personalized exercise program",
          "Mobility and strength training",
          "Functional activity practice",
          "Education on safe recovery",
          "Progress monitoring",
          "Coordination with medical team when needed"
        ]
      }}
      whoCanBenefit={{
        intro: "Post-hospital rehabilitation is essential for:",
        list: [
          "Individuals recovering from surgery",
          "Clients returning home after illness",
          "People who have had prolonged hospital stays",
          "Those needing support to regain independence",
          "Individuals at risk of complications",
          "Anyone wanting structured recovery support"
        ],
        conclusion: "If you're returning home after a hospital stay, our rehabilitation can support your safe recovery and return to independence."
      }}
      trustSection={{
        description: "Our post-hospital rehabilitation is delivered by an NHS-qualified therapist with experience in acute and community care. We understand the challenges of recovery and provide compassionate, evidence-based support.",
        points: [
          "Experience in post-surgical rehabilitation",
          "Understanding of recovery challenges",
          "Safe, gradual approach",
          "Home-based sessions available"
        ]
      }}
      faq={[
        {
          question: "How soon after discharge can rehabilitation begin?",
          answer: "We can begin as soon as you're ready, typically within a few days of discharge. We'll work with your medical team to ensure timing is appropriate."
        },
        {
          question: "Can sessions be done at home?",
          answer: "Yes, we offer home-based sessions, which are often ideal for post-hospital recovery when travel may be challenging."
        },
        {
          question: "How long does rehabilitation take?",
          answer: "Recovery timelines vary. We create personalized programs and adjust them based on your progress and medical guidance."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg"
      serviceSelectValue="post-hospital-rehab"
    />
  );
}

export default PostHospitalRehabilitation;

