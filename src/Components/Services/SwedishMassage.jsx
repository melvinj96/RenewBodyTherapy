import ServicePageTemplate from './ServicePageTemplate';

function SwedishMassage() {
  return (
    <ServicePageTemplate
      title="Swedish Massage in Dudley"
      metaTitle="Swedish Massage in Dudley | Renew Body Therapy"
      metaDescription="Gentle Swedish massage in Dudley for relaxation & well-being | Suitable for all ages | Book your calming session today →"
      intro={[
        "Experience the gentle, relaxing benefits of Swedish massage at our Dudley clinic. This classic massage technique is designed to improve circulation, reduce stress, and support overall well-being through smooth, flowing strokes.",
        "Swedish massage is suitable for all ages and is an excellent choice for clients seeking a calming and restorative session that promotes relaxation and rejuvenation."
      ]}
      whyChoose={[
        "Gentle, relaxing technique suitable for everyone",
        "NHS-qualified therapist with years of experience",
        "Perfect for stress relief and relaxation",
        "Improves circulation and overall well-being",
        "Comfortable, quiet home-based clinic",
        "Affordable pricing for regular sessions"
      ]}
      prices={[
        "Full Body (60 mins) - £45"
      ]}
      whatIs={[
        "Swedish massage is a gentle and relaxing treatment that uses long, flowing strokes, kneading, and circular movements to promote relaxation and improve circulation. It's one of the most popular massage styles and is perfect for those new to massage therapy or seeking a gentle, restorative experience.",
        "This technique helps reduce stress, improve circulation, and support overall well-being without the intense pressure of deeper massage styles."
      ]}
      benefits={[
        {
          title: "Reduce Stress",
          description: "Promotes deep relaxation and helps reduce stress and anxiety through gentle, soothing techniques."
        },
        {
          title: "Improve Circulation",
          description: "Enhances blood flow throughout the body, supporting better oxygen and nutrient delivery to tissues."
        },
        {
          title: "Enhance Well-being",
          description: "Supports overall physical and mental well-being through gentle, therapeutic touch."
        },
        {
          title: "Relieve Tension",
          description: "Helps release mild to moderate muscular tension without intense pressure."
        },
        {
          title: "Promote Sleep",
          description: "Can help improve sleep quality by promoting relaxation and reducing stress."
        }
      ]}
      whatToExpect={{
        description: [
          "Your Swedish massage session takes place in our peaceful home clinic. The therapist will use gentle, flowing strokes with light to medium pressure, working over the entire body or focusing on areas you specify."
        ],
        includes: [
          "Comfortable, relaxing environment",
          "Gentle, flowing massage techniques",
          "Full body or targeted area treatment",
          "Aromatherapy options available",
          "Post-session relaxation time"
        ]
      }}
      whoCanBenefit={{
        intro: "Swedish massage is perfect for:",
        list: [
          "Anyone seeking relaxation and stress relief",
          "First-time massage clients",
          "Individuals with mild muscular tension",
          "Those looking to improve sleep quality",
          "People wanting to enhance overall well-being",
          "All ages, from young adults to seniors"
        ],
        conclusion: "If you're looking for a gentle, relaxing massage experience, Swedish massage is an excellent choice."
      }}
      trustSection={{
        description: "Our Swedish massage is delivered by a qualified therapist in a calm, comfortable environment designed for relaxation and rejuvenation.",
        points: [
          "Gentle, soothing techniques",
          "Comfortable, peaceful setting",
          "Personalised to your preferences",
          "Professional, caring approach"
        ]
      }}
      faq={[
        {
          question: "Is Swedish massage suitable for first-time clients?",
          answer: "Yes, Swedish massage is perfect for first-time clients as it uses gentle, relaxing techniques."
        },
        {
          question: "How long does a session last?",
          answer: "Sessions last 60 minutes, providing ample time for a full body treatment and relaxation."
        },
        {
          question: "Will I feel sore after a Swedish massage?",
          answer: "No, Swedish massage uses gentle pressure, so you should feel relaxed and refreshed rather than sore."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg"
      serviceSelectValue="swedish"
    />
  );
}

export default SwedishMassage;

