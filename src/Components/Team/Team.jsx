import { useEffect } from 'react';
import TitleBand from '../Titleband';
import TeamMember from './TeamMember';
import '../../assets/css/Team.css';
import jikkuImg from '../../assets/images/jikku.jpg';
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
      image: jikkuImg, // Make sure to add the image to your public folder
      description: [
        "Hi I'm Jikku, and welcome to Renew Body Therapy where my aim is to transform the health and wellbeing of people. I 'm a qualified Occupational Therapist with over 7 years of experience, registered under the Health and Care Professions Council (HCPC) and a member of the Royal College of Occupational Therapist (RCOT).",
        "I specialise in treating people suffering from Respiratory, Traumatic injuries and Neurological conditions.",
        "I am also a qualified massage therapist specialising in Sports Massage, Deep Tissue, Swedish, Bamboo, Hot Stone and Indian Head massage. I currently run home based and mobile clinics in the West Midlands and Bedfordshire."
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
      <TitleBand title="Meet the Team" />
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;