import ServicePageTemplate from './ServicePageTemplate';

function MusculoskeletalPhysiotherapy() {
  return (
    <ServicePageTemplate
      title="Professional Musculoskeletal Physiotherapy in Dudley for Injury & Rehabilitation"
      secondaryTitle="Musculoskeletal Physiotherapy in Dudley"
      metaTitle="Musculoskeletal Physiotherapy in Dudley | Renew Body Therapy"
      metaDescription="Expert MSK physiotherapy in Dudley for injury rehab & pain relief | NHS-qualified therapist | Restore movement & function | Book today →"
      intro={[
        'If you are dealing with pain, injury, or reduced movement, our specialist service provides musculoskeletal physiotherapy in Dudley, designed to reduce discomfort, restore function, and support long-term recovery.',
        'At Renew Body Therapy, we deliver evidence-based physiotherapy and rehabilitation guided by NHS clinical experience. Our approach focuses on identifying the root cause of your condition and creating a personalised plan to help you move confidently again.',
        'Sessions are available at our private clinic on Bristol Road or through home visits where appropriate, supporting clients across Dudley, Netherton, Brierley Hill, Stourbridge, Sedgley and surrounding areas.',
        'Book your assessment today and start your recovery with expert support.',
      ]}
      whyChoose={[
        'Nearly 10 years of NHS experience in musculoskeletal and rehabilitation care',
        'Specialist assessment of muscles, joints, ligaments, and movement patterns',
        'Personalised rehabilitation programmes tailored to your condition',
        'Hands-on treatment combined with guided exercise therapy',
        'Support for injury recovery, chronic pain, and post-surgical rehabilitation',
        'Honest advice with no pressure for ongoing or unnecessary sessions',
        'Flexible appointments in a private, one-to-one clinic setting',
        'Trusted by clients seeking effective, long-term recovery solutions',
      ]}
      prices={['60 mins - £55']}
      whatIs={[
        'Musculoskeletal physiotherapy focuses on assessing, diagnosing, and treating conditions that affect the muscles, joints, ligaments, tendons, and bones.',
        'This type of physiotherapy is designed to reduce pain and inflammation, restore movement and flexibility, improve strength and stability, support recovery after injury or surgery, and prevent recurring problems.',
        'At Renew Body Therapy, our approach combines hands-on treatment, targeted exercises, and clear guidance to help you recover safely and effectively.',
        'You can explore how physiotherapy fits within your overall care by viewing our wider services.',
      ]}
      benefits={[
        {
          title: 'Reduce Pain & Discomfort',
          description:
            'Targeted treatment helps relieve muscular tension, joint stiffness, and inflammation, allowing you to move more comfortably.',
        },
        {
          title: 'Restore Movement & Flexibility',
          description:
            'We focus on improving the range of motion and joint function, helping you return to normal daily activities.',
        },
        {
          title: 'Support Injury Recovery',
          description:
            'Whether you have a recent injury or a long-standing issue, structured rehabilitation helps promote safe and steady recovery.',
        },
        {
          title: 'Improve Strength & Stability',
          description:
            'Exercise-based rehabilitation strengthens muscles and improves joint support, reducing the risk of further injury.',
        },
        {
          title: 'Prevent Recurring Problems',
          description:
            'By addressing the root cause of your symptoms, physiotherapy helps prevent repeated flare-ups or long-term issues.',
        },
      ]}
      whatToExpect={{
        description: [
          'Your treatment begins with a detailed assessment carried out at our clinic or in your home where required.',
          'We assess movement patterns and joint mobility, muscle strength and flexibility, pain levels and triggers, posture and daily activity demands, and functional limitations.',
          'Every session is tailored to your needs, ensuring treatment is focused and relevant to your lifestyle and goals.',
        ],
        includes: [
          'Hands-on physiotherapy techniques',
          'Targeted exercise programmes',
          'Mobility and strengthening exercises',
          'Postural correction and movement advice',
          'Education on managing your condition',
          'Ongoing progress tracking and plan adjustments',
        ],
      }}
      whoCanBenefit={{
        intro: 'Our physiotherapy and rehabilitation service in Dudley is suitable for:',
        list: [
          'Individuals with back or neck pain',
          'Clients with joint pain in shoulders, hips, knees, or ankles',
          'People recovering from sports injuries such as strains or sprains',
          'Those managing chronic conditions like arthritis',
          'Clients recovering after surgery or injury',
          'Individuals with work-related or repetitive strain injuries',
          'Anyone experiencing reduced mobility or ongoing discomfort',
        ],
        conclusion:
          'If pain or movement limitations are affecting your daily life, physiotherapy can help restore function and improve your quality of life.',
      }}
      trustSection={{
        description:
          'Our musculoskeletal physiotherapy is supported by extensive NHS and private clinical experience across multiple areas, including:',
        points: [
          'Orthopaedics and musculoskeletal care',
          'Post-surgical rehabilitation',
          'Neurology and stroke recovery',
          'Community-based rehabilitation',
          'Functional mobility and recovery support',
        ],
        outro:
          'We focus on providing honest, patient-centred care that is tailored to your needs. You will always receive clear advice, realistic expectations, and a treatment plan designed to achieve meaningful results.',
        links: true,
      }}
      faq={[
        {
          question: 'What conditions can physiotherapy treat?',
          answer:
            'Musculoskeletal physiotherapy can help with a wide range of conditions including back pain, joint injuries, muscle strains, arthritis, and post-surgical recovery.',
        },
        {
          question: 'Do I need a referral to book physiotherapy?',
          answer: 'No, you can book directly without a referral.',
        },
        {
          question: 'How many sessions will I need?',
          answer:
            'This depends on your condition and goals. Some clients improve after a few sessions, while others benefit from a longer rehabilitation plan.',
        },
        {
          question: 'Is physiotherapy suitable for long-term conditions?',
          answer:
            'Yes. Physiotherapy can help manage chronic conditions by improving movement, reducing pain, and supporting daily function.',
        },
      ]}
      image="https://res.cloudinary.com/diydpxavd/image/upload/v1777897175/musculoskeletal_physio_js6izm.webp"
      serviceSelectValue="msk-physiotherapy"
      customHeadings={{
        whyChoose: 'Why Choose Our Musculoskeletal Physiotherapy Service?',
        whatToExpect: 'What to Expect During Your Physiotherapy Session',
        trustSection:
          'Why You Can Trust Renew Body Therapy for Physiotherapy & Rehabilitation',
        cta: 'Book Expert MSK Physiotherapy in Dudley Today',
        ctaDescription:
          'If you are recovering from an injury, managing ongoing pain, or looking to improve your mobility, our specialist physiotherapy service provides the support you need to move forward with confidence. Appointments are available at our private clinic or through home visits depending on your needs.',
      }}
    />
  );
}

export default MusculoskeletalPhysiotherapy;
