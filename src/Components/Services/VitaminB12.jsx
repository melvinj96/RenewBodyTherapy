import ServicePageTemplate from './ServicePageTemplate';

function VitaminB12() {
  return (
    <ServicePageTemplate
      title="Vitamin B12 Injections in Dudley"
      metaTitle="Vitamin B12 Injections in Dudley | Renew Body Therapy"
      metaDescription="Professional Vitamin B12 injections in Dudley | Support energy levels | Safe & professional | Book today →"
      intro={[
        "Vitamin B12 injections help support energy levels and overall well-being for individuals with low B12 levels. This service is delivered safely and professionally at our home clinic in Dudley.",
        "If you're experiencing fatigue, low energy, or have been diagnosed with B12 deficiency, our professional injection service can help restore your B12 levels and support your overall health."
      ]}
      whyChoose={[
        "Safe, professional administration",
        "NHS-qualified practitioner",
        "Comfortable clinic environment",
        "Quick, convenient service",
        "Affordable pricing",
        "Support for energy and well-being"
      ]}
      prices={[
        "£25"
      ]}
      whatIs={[
        "Vitamin B12 injections are a safe and effective way to restore B12 levels in individuals with deficiency. B12 is essential for energy production, nerve function, and red blood cell formation.",
        "When taken orally, B12 may not be well-absorbed, especially in cases of deficiency. Injections bypass the digestive system, ensuring direct absorption into the bloodstream for optimal effectiveness."
      ]}
      benefits={[
        {
          title: "Support Energy Levels",
          description: "Help restore energy levels in individuals with B12 deficiency."
        },
        {
          title: "Improve Well-being",
          description: "Support overall health and well-being through proper B12 levels."
        },
        {
          title: "Nerve Function",
          description: "Support healthy nerve function and prevent nerve-related symptoms."
        },
        {
          title: "Red Blood Cell Health",
          description: "Support healthy red blood cell formation and prevent anemia."
        },
        {
          title: "Quick Administration",
          description: "Fast, convenient service with minimal disruption to your day."
        }
      ]}
      whatToExpect={{
        description: [
          "Your B12 injection appointment is quick and straightforward. The injection is administered in the upper arm or thigh using a fine needle. The process takes just a few minutes."
        ],
        includes: [
          "Brief consultation",
          "Safe, sterile injection technique",
          "Quick administration",
          "Post-injection guidance",
          "Professional, caring service"
        ]
      }}
      whoCanBenefit={{
        intro: "Vitamin B12 injections are beneficial for:",
        list: [
          "Individuals with diagnosed B12 deficiency",
          "People experiencing unexplained fatigue",
          "Those with absorption issues",
          "Vegetarians and vegans at risk of deficiency",
          "Older adults with reduced absorption",
          "Anyone recommended B12 injections by their GP"
        ],
        conclusion: "If you've been diagnosed with B12 deficiency or are experiencing symptoms, our professional injection service can help."
      }}
      trustSection={{
        description: "Our B12 injections are administered by an NHS-qualified practitioner in a safe, professional environment. We use sterile, single-use needles and follow strict safety protocols.",
        points: [
          "Safe, sterile technique",
          "Qualified, experienced practitioner",
          "Professional clinic environment",
          "Quick, convenient service"
        ]
      }}
      faq={[
        {
          question: "How often do I need B12 injections?",
          answer: "Frequency depends on your individual needs and your GP's recommendations. Some people need weekly injections initially, then monthly maintenance."
        },
        {
          question: "Does it hurt?",
          answer: "The injection uses a fine needle and is generally well-tolerated with minimal discomfort."
        },
        {
          question: "Do I need a prescription?",
          answer: "You should consult with your GP first to confirm B12 deficiency and get appropriate guidance on supplementation."
        }
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1749591765/vitamin-b12_njshpz.jpg"
      serviceSelectValue="vitamin-b12"
    />
  );
}

export default VitaminB12;

