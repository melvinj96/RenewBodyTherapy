import ServicePageTemplate from './ServicePageTemplate';

function SportsMassage() {
  return (
    <ServicePageTemplate
      title="Renewing Sports Massage in Dudley"
      metaTitle="Sports Massage in Dudley | Renew Body Therapy"
      metaDescription="Expert sports massage in Dudley for pain relief, mobility & recovery | NHS trained therapist | Book your appointment today →"
      intro={[
        "Discover our professional sports massage in Dudley, designed to relieve pain, improve mobility, and support your recovery. At Renew Body Therapy, we provide targeted, evidence-based treatment for athletes, gym goers, manual workers, and anyone experiencing muscular tension or performance-related strain. Every session is delivered by an NHS-qualified therapist in our quiet and comfortable home-based massage clinic on Bristol Road.",
        "As a trusted five-star rated sports massage clinic serving Dudley, Netherton, Stourbridge, and Brierley Hill, we combine clinical expertise with personalised hands-on therapy to help you feel and perform at your best."
      ]}
      whyChoose={[
        "NHS-trained therapist with almost a decade of clinical experience",
        "Specialist knowledge of muscular function and injury recovery",
        "Over 180 verified five-star Google reviews from local clients",
        "Private, quiet home-based clinic for personalised care",
        "Affordable pricing",
        "Optional add-ons, including cupping therapy and dry needling",
        "Tailored treatment to suit your goals and physical demands"
      ]}
      prices={[
        "60 mins - £45",
        "Additional Service - Cupping - £5",
        "Additional Service - Dry Needling - £15"
      ]}
      whatIs={[
        "Sports massage is a specialised form of massage therapy designed to support physical performance, relieve muscular tension, and accelerate recovery. It is ideal for athletes, fitness enthusiasts, and individuals who engage in physically demanding activities or repetitive strain through work or training.",
        "Sessions help reduce tightness, improve circulation, increase flexibility, and prevent injury. Whether you are preparing for an event, recovering after intense training, or seeking maintenance treatment, sports massage at Renew Body Therapy is tailored to your needs."
      ]}
      benefits={[
        {
          title: "Reduce Muscular Tension & Pain",
          description: "Sports massage targets deep layers of muscle and connective tissue to alleviate stubborn tightness, knots, and discomfort."
        },
        {
          title: "Improve Flexibility & Range of Motion",
          description: "Regular treatment helps maintain mobility and reduce stiffness, allowing you to move more freely."
        },
        {
          title: "Enhance Athletic Performance",
          description: "By improving muscle efficiency and reducing tension, sports massage supports better performance in training and competition."
        },
        {
          title: "Support Faster Recovery",
          description: "Whether post-match, post-workout, or following physical strain, sports massage improves circulation and lymphatic drainage to speed up recovery."
        },
        {
          title: "Prevent Injury",
          description: "Maintenance sessions help identify imbalances and reduce the risk of repeated strain or overuse injuries."
        }
      ]}
      whatToExpect={{
        description: [
          "Your session takes place in our private home sports massage therapy clinic in Dudley, offering a calm and comfortable setting away from busy treatment centres. Every appointment begins with a brief consultation to understand your symptoms, training load, lifestyle, and goals."
        ],
        includes: [
          "Assessment of key muscle groups",
          "Tailored sports massage techniques",
          "Deep tissue and myofascial release",
          "Trigger point therapy where needed",
          "Stretching or mobility guidance",
          "Aftercare advice to support recovery"
        ],
        addOns: [
          "Cupping therapy, £5",
          "Dry needling addition, £15"
        ]
      }}
      whenToGet={[
        {
          title: "Pre-Event Sports Massage",
          description: "Helps prepare muscles by increasing circulation and flexibility for improved performance."
        },
        {
          title: "Post-Event Sports Massage",
          description: "Reduces soreness, supports recovery, and helps remove waste products from the muscles after intense activity."
        },
        {
          title: "Maintenance Sports Massage",
          description: "Regular sessions are ideal for preventing injury, reducing tightness, and maintaining overall muscular health. Clients use maintenance sports massage to stay active, mobile, and as pain-free as possible."
        }
      ]}
      whoCanBenefit={{
        intro: "Although originally designed for athletes, sports massage is suitable for:",
        list: [
          "Footballers, runners, and gym users",
          "Manual workers with strain or repetitive use issues",
          "Individuals with physically demanding jobs",
          "People living with tension from posture or daily activity",
          "Those recovering from muscular injuries"
        ],
        conclusion: "If you engage in any level of regular physical activity, sports massage can support your overall performance and well-being."
      }}
      trustSection={{
        description: "Our clinic stands apart for its combination of clinical expertise and personalised treatment. With nearly ten years of NHS experience in trauma orthopaedics, neurology, respiratory care, and surgery-related rehabilitation, Jikku offers a deep understanding of muscular function and recovery.",
        points: [
          "Honest advice with no pressure to book unnecessary sessions",
          "Tailored plans to match lifestyle, health needs, and activity level",
          "Support outside your appointment should you need guidance",
          "A home-based clinic environment that prioritises comfort and privacy"
        ],
        links: true
      }}
      faq={[
        {
          question: "How long does a sports massage session last?",
          answer: "Sessions last 60 minutes and include consultation, treatment, and aftercare guidance."
        },
        {
          question: "Is sports massage painful?",
          answer: "Some discomfort can occur when working through deep tension or trigger points, however, treatment is always carried out at a level that feels safe and manageable for you."
        },
        {
          question: "Will sports massage help me recover faster?",
          answer: "Yes, by improving circulation, reducing tightness, and supporting lymphatic drainage, sports massage can speed up post-exercise and post-event recovery."
        },
        {
          question: "Is this service suitable for beginners or non athletes?",
          answer: "Sports massage benefits anyone who experiences muscular tension, limited mobility, or physical strain."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg"
      serviceSelectValue="sports"
    />
  );
}

export default SportsMassage;

