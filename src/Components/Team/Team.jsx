import { useEffect } from 'react';
import TitleBand from '../Titleband';
import TeamMember from './TeamMember';
import '../../assets/css/Team.css';
import geoffImg from '../../assets/images/geoff.jpg';

function Team() {
  useEffect(() => {
    document.title = 'Meet The Dudley Massage Therapists | Renew Body Therapy';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the professionals behind our 5-star rated clinic | Experienced, fully insured & dedicated to your recovery | Book now →');
    }
  }, []);
  const teamMembers = [
    {
      name: "Jikku Joseph",
      title: "Founder & Occupational/Massage Therapist",
      image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1765226489/new_dp_for_website_qrqjta.jpg',
      description: [
        "Meet Jikku, an experienced NHS clinician, fully qualified in occupational therapy, sports massage, and rehabilitation-focused hands-on treatments. With nearly a decade of clinical experience and extensive in-service training, every client receives expert care grounded in clinical reasoning, anatomy, and evidence-based practice.",
        "Trusted by Bupa and highly rated within the Dudley community, Jikku offers both professionalism and approachability, ensuring every client feels comfortable and supported at every stage of treatment."
      ]
    },
    {
      name: "Geoff Wu",
      title: "Chartered Physiotherapist/Massage Therapist",
      image: geoffImg, // Make sure to add the image to your public folder
      description: [
        "Hi, my name is Geoff. I'm a Chartered Physiotherapist with a speciality in trauma, orthopaedics and respiratory Physiotherapy with extensive experience in the management and treatment of trauma and orthopaedic ailments in both adult and paediatric sectors. I also have broader clinical experience in elderly care medicine, specialist surgery and musculoskeletal physiotherapy.",
        "I believe that focussing on the fundamentals allows for success in recovery.",
        "I'm a registered member of the Health Care Professions Council and the Chartered Society of Physiotherapists."
      ]
    }
    // Add more team members here as needed
  ];

  return (
    <div>
      <TitleBand title="Meet Your Dudley-Based Massage Therapist" />
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;