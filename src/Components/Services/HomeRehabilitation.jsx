import ServicePageTemplate from './ServicePageTemplate';

function HomeRehabilitation() {
  return (
    <ServicePageTemplate
      title="Home Rehabilitation in Dudley"
      metaTitle="Home Rehabilitation in Dudley | Renew Body Therapy"
      metaDescription="Recover safely at home with expert rehab support after illness or surgery | Personalised care, home visits, flexible appointments →"
      intro={[
        "Recovering at home can feel overwhelming without the right support. Our home rehabilitation in Dudley and the surrounding areas is designed for individuals who may struggle to attend a clinic, offering professional, structured recovery in the comfort of your own environment.",
        "At Renew Body Therapy, we bring rehabilitation directly to you, helping improve mobility, rebuild strength, and restore confidence through personalised, one-to-one care tailored to your needs."
      ]}
      whyChoose={[
        "Nearly 10 years of NHS and private rehabilitation experience",
        "Home-based appointments for comfort, convenience, and safety",
        "Tailored recovery plans based on your condition and goals",
        "Support for post-surgical, neurological, and mobility conditions",
        "One-to-one care with no rushed appointments",
        "Flexible scheduling including evenings where available",
        "Trusted local provider with strong reputation",
        "Ongoing support and practical aftercare guidance"
      ]}
      prices={[
        "60 mins - £55"
      ]}
      whatIs={[
        "Home rehabilitation is a structured therapy service delivered in your own home, supporting recovery after illness, surgery, injury, or reduced mobility. It is particularly beneficial for individuals who:",
        "• Find it difficult or uncomfortable to travel",
        "• Have recently been discharged from hospital",
        "• Are recovering from surgery or illness",
        "• Have mobility or balance limitations",
        "• Require support with everyday tasks",
        "• Prefer treatment in a familiar environment",
        "Unlike clinic-based care, home rehabilitation allows treatment to be tailored to your real-life surroundings, making progress more practical and relevant to daily living.",
        "You can explore the full range of available support through our rehabilitation services."
      ]}
      benefits={[
        {
          title: "Comfort & Familiar Environment",
          description: "Receiving treatment at home reduces stress and allows you to recover in a setting you are already comfortable in."
        },
        {
          title: "Practical Real-Life Recovery",
          description: "Exercises and support are based on your actual daily routines, helping improve independence more effectively."
        },
        {
          title: "Reduced Travel & Fatigue",
          description: "Avoid the strain of travelling to appointments, especially during early recovery stages."
        },
        {
          title: "Personalised One-To-One Care",
          description: "You receive dedicated attention focused entirely on your progress and needs."
        },
        {
          title: "Safer Recovery Process",
          description: "Home-based sessions allow for better assessment of risks such as falls or environmental hazards."
        }
      ]}
      relatedServices={{
        heading: "Our Home Rehabilitation Services",
        intro: "We provide a range of rehabilitation services delivered directly to your home, depending on your condition and recovery needs.",
        items: [
          {
            title: "Post Hospital Recovery Support",
            description: "Helping individuals transition safely from hospital to home with structured recovery plans.",
            link: "/services/post-hospital-rehabilitation",
            linkLabel: "Explore Post-Hospital Rehabilitation"
          },
          {
            title: "Stroke & Neurological Rehabilitation",
            description: "Supporting movement, coordination, and independence following stroke or neurological conditions.",
            link: "/services/stroke-rehabilitation",
            linkLabel: "View Stroke Rehabilitation Services"
          },
          {
            title: "Falls Prevention & Mobility Training",
            description: "Improving balance, strength, and confidence to reduce fall risk at home.",
            link: "/services/falls-intervention",
            linkLabel: "Learn More About Falls Intervention"
          },
          {
            title: "Respiratory Rehabilitation Support",
            description: "Helping improve breathing, endurance, and daily function after illness.",
            link: "/services/respiratory-rehabilitation",
            linkLabel: "Discover Respiratory Rehabilitation"
          },
          {
            title: "Musculoskeletal Physiotherapy At Home",
            description: "Supporting recovery from injury, surgery, or pain affecting movement.",
            link: "/services/musculoskeletal-physiotherapy",
            linkLabel: "See Musculoskeletal Physiotherapy"
          },
          {
            title: "Occupational Therapy Support",
            description: "Helping you regain independence with daily tasks such as walking, dressing, and household activities.",
            link: "/services/occupational-therapy",
            linkLabel: "Explore Occupational Therapy"
          }
        ]
      }}
      whenToGet={[
        {
          title: "Initial Assessment At Home",
          description: "We begin with a detailed assessment of your condition, mobility, and environment to understand your needs."
        },
        {
          title: "Personalised Treatment Plan",
          description: "A tailored rehabilitation programme is created based on your recovery goals and current ability."
        },
        {
          title: "Structured Therapy Sessions",
          description: "Each session focuses on improving strength, mobility, and function through guided exercises and support."
        },
        {
          title: "Ongoing Progress Monitoring",
          description: "Your plan is regularly adjusted to ensure steady and safe progress."
        },
        {
          title: "Practical Aftercare Guidance",
          description: "You receive clear advice and exercises to continue your recovery between sessions."
        }
      ]}
      whoCanBenefit={{
        intro: "Home rehabilitation can help with a wide range of problems, including:",
        list: [
          "Reduced mobility after hospital discharge",
          "Weakness following illness or surgery",
          "Difficulty walking or transferring safely",
          "Balance issues and falls risk",
          "Loss of confidence with movement",
          "Fatigue and reduced endurance",
          "Difficulty completing daily tasks independently"
        ],
        conclusion: "You can also explore related condition support such as our Nerve & Complex Conditions and Lifestyle & Work-Related Conditions pages."
      }}
      trustSection={{
        description: "Choosing the right rehabilitation support can make a significant difference to your recovery. At Renew Body Therapy, you benefit from a personalised approach delivered directly to your home. We provide home rehabilitation services across Dudley, Netherton, Brierley Hill, Sedgley, Stourbridge, Cradley Heath, and the surrounding areas — if you are unsure whether your location is covered, contact us to discuss availability.",
        points: [
          "NHS clinical experience across rehabilitation, neurology, and community care",
          "A personalised approach focused on long-term outcomes",
          "Treatment based on real healthcare knowledge and evidence",
          "Flexible, patient-centred care delivered in your home",
          "Support that focuses on independence, not dependency"
        ],
        links: true
      }}
      faq={[
        {
          question: "Who Is Home Rehabilitation Suitable For?",
          answer: "It is ideal for individuals who cannot travel easily or prefer treatment in their own home environment."
        },
        {
          question: "How Long Does Rehabilitation Take?",
          answer: "Recovery time varies depending on your condition, goals, and overall health. Some people benefit from short-term support, while others require ongoing rehabilitation."
        },
        {
          question: "Do I Need A Referral To Start?",
          answer: "No, most clients can contact us directly to begin treatment."
        },
        {
          question: "What Should I Expect During A Visit?",
          answer: "Each session includes assessment, guided exercises, and practical support tailored to your needs."
        },
        {
          question: "Is Home Rehabilitation As Effective As Clinic Treatment?",
          answer: "In many cases, it can be more effective because treatment is tailored to your real-life environment and daily activities."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg"
      serviceSelectValue="home-rehab"
      customHeadings={{
        whyChoose: "Personalised Home Rehabilitation Designed Around You",
        trustSection: "Why Choose Renew Body Therapy For Home Rehabilitation in the Dudley Area",
        whenToGet: "How Our Home Rehabilitation Process Works",
        cta: "Start Your Recovery With Professional Home Rehabilitation Support",
        ctaDescription: "Recovering at home does not mean you have to manage alone. With the right support, guidance, and structured care, you can rebuild strength, improve mobility, and regain confidence in your daily life. At Renew Body Therapy, we provide honest, personalised rehabilitation designed around you, your environment, and your goals."
      }}
    />
  );
}

export default HomeRehabilitation;
