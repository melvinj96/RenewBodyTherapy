import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleBand from '../Titleband';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import '../../assets/css/Services.css';
import deepTissueImg from '../../assets/images/services/deep-tissue.jpg';
import swedishImg from '../../assets/images/services/swedish.jpg';
import sportsImg from '../../assets/images/services/sports.jpg';
import headMassageImg from '../../assets/images/services/head-massage.jpg';
import strokeRehabImg from '../../assets/images/services/stroke-rehab.jpg';
import fallsInterventionImg from '../../assets/images/services/falls-intervention.jpg';
import postHospitalImg from '../../assets/images/services/post-hospital.jpg';
import respiratoryRehabImg from '../../assets/images/services/respiratory-rehab.jpg';
import physioImg from '../../assets/images/services/physio.jpg';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      title: "DEEP TISSUE MASSAGE",
      image: deepTissueImg,
      prices: [
        "Full Body (60 mins) - £40",
        "Half Body (30 mins) - £30"
      ],
      description: "Deep tissue massage is a therapeutic massage technique that focuses on the deeper layers of muscle and connective tissue in the body. It uses slower strokes and more intense pressure to target specific areas of tension or pain. This type of massage is particularly beneficial for individuals with chronic pain, muscle stiffness, or injuries."
    },
    {
      title: "SWEDISH MASSAGE",
      image: swedishImg,
      prices: [
        "Full Body (60 mins) - £40",
        "Half Body (30 mins) - £30"
      ],
      description: "Swedish massage is typically performed on the skin with the use of oils or lotions, and it can vary in pressure from light to deep depending on the client's preference. This type of massage is known for its ability to decrease stress, improve circulation, relieve muscle tension, and enhance flexibility. It's often recommended for those seeking relaxation and relief from everyday stress and tension."
    },
    {
      title: "SPORTS MASSAGE",
      image: sportsImg,
      prices: [
        "60 mins - £45",
        "30 mins - £35",
        "Additional Service - Cupping - £5"
      ],
      description: `
            <p>Sports massage is a specialized form of massage therapy designed to enhance athletic performance and recovery. It focuses on the needs of athletes and physically active individuals, helping to prepare their bodies for optimal performance, aid in recovery, and prevent injuries. Here are some key aspects of sports massage:</p>

            <p><strong>Purpose:</strong> Sports massage is intended to reduce muscle tension, improve circulation, increase flexibility, and alleviate soreness, thereby enhancing an athlete's overall physical capabilities.</p>

            <p><strong>Techniques:</strong> It incorporates various massage techniques, including deep tissue massage, Swedish massage, trigger point therapy, and myofascial release. The specific techniques used may vary based on the athlete's needs, the sport they participate in, and the timing of the massage relative to their training or competition schedule.</p>

            <p><strong>Timing: Sports massages can be performed at different times:</strong></p>
            <ul>
            <li>Pre-event: To prepare the muscles by increasing circulation and flexibility.</li>
            <li>Post-event: To promote recovery by reducing muscle soreness and tension.</li>
            <li>Maintenance: Regular sessions can help prevent injuries and maintain overall muscle and joint health.</li>
            </ul>

            <p><strong>Benefits: Some of the benefits of sports massage include:</strong></p>
            <ul>
            <li>Reduction of muscle tension and pain</li>
            <li>Increased range of motion and flexibility</li>
            <li>Enhanced athletic performance</li>
            <li>Faster recovery from injuries and workouts</li>
            <li>Improved circulation and lymphatic drainage</li>
            </ul>

            <p><strong>Who Can Benefit:</strong> While it is primarily designed for athletes, anyone who engages in physical activity can benefit from sports massage, including weekend warriors, fitness enthusiasts, and individuals with physically demanding jobs.</p>
        `
    },
    {
      title: "HEAD, NECK & SHOULDER MASSAGE",
      image: headMassageImg,
      prices: [
        "30 mins - £30"
      ],
      description: "This focused massage targets common areas of tension in the upper body. Perfect for those who experience headaches, neck pain, or shoulder stiffness, particularly from desk work or stress. Helps improve circulation and reduce tension in these vital areas."
    },
    {
      title: "STROKE REHABILITATION",
      image: strokeRehabImg,
      prices: [
        "Initial Assessment - £45",
        "Follow-up Sessions - £40"
      ],
      description: `
        <p>A therapist can play a crucial role in the recovery process following a stroke. Different types of therapists may be involved, each addressing various aspects of rehabilitation. Here are some key ways therapists can help:</p>

        <p><strong>Physiotherapy (PT):</strong></p>
        <ul>
        <li>Mobility and Strength: PT focuses on improving muscle strength, balance, and coordination. Therapists may design exercises to help patients regain mobility and learn to walk again, if necessary.</li>
        <li>Functional Skills: PT can help patients relearn daily activities like sitting, standing, and walking independently.</li>
        <li>Assistive Devices: Therapists may recommend and train patients in the use of mobility aids (like walkers or canes) to enhance independence.</li>
        </ul>

        <p><strong>Occupational Therapy (OT):</strong></p>
        <ul>
        <li>Daily Living Skills: OT helps patients regain skills necessary for daily activities (e.g., bathing, dressing, cooking) and promotes independence in the home and community.</li>
        <li>Fine Motor Skills: Therapists focus on improving hand coordination and dexterity through exercises and adaptive techniques.</li>
        <li>Home Modifications: They can recommend changes to the home environment to ensure safety and accessibility.</li>
        </ul>
      
      `
    },
    {
      title: "FALLS INTERVENTION",
      image: fallsInterventionImg,
      prices: [
        "Assessment - £45",
        "Follow-up Sessions - £40"
      ],
      description: `
        <p>A therapist, particularly a physical therapist or an occupational therapist, can help individuals who are at risk of falling at home in several ways:</p>

        <p><strong>1. Fall Risk Assessment:</strong></p>
        <ul>
        <li>Evaluation: The therapist evaluates the individual's balance, strength, mobility, and overall risk factors for falls.</li>
        <li>Environment Assessment: They may assess the home environment to identify hazards such as loose rugs, poor lighting, and clutter.</li>
        </ul>

        <p><strong>2. Strength and Balance Training:</strong></p>
        <ul>
        <li>Exercise Programs: Therapists design personalized exercise programs to improve strength, flexibility, and balance, which can help prevent falls.</li>
        <li>Functional Training: They may use exercises that mimic daily activities to improve overall functional mobility.</li>
        </ul>

        <p><strong>3. Education:</strong></p>
        <ul>
        <li>Safety Strategies: Educating clients about safety measures, such as using handrails, wearing proper footwear, and being mindful of their surroundings.</li>
        <li>Lifestyle Modifications: Discussing how medications, vision, and health conditions affect balance and falls.</li>
        </ul>

        <p><strong>4. Home Modifications:</strong></p>
        <ul>
        <li>Recommendations: Offering suggestions for modifying the home environment, which may include installing grab bars in the bathroom, removing tripping hazards, and improving lighting.</li>
        <li>Assistive Devices: Advising on the use of canes, walkers, or other mobility aids to enhance safety.</li>
        </ul>

        <p><strong>5. Coordination with Other Healthcare Providers:</strong></p>
        <ul>
        <li>Interdisciplinary Approach: Collaborating with doctors, nurses, and other professionals to address the underlying health conditions that may contribute to fall risk.</li>
        </ul>

        <p><strong>6. Follow-Up and Maintenance:</strong></p>
        <ul>
        <li>Monitoring Progress: Regular follow-up sessions to monitor progress, adjust exercise plans, and reinforce safety practices.</li>
        <li>Continued Support: Providing ongoing support and motivation to encourage adherence to safety practices and exercises.</li>
        </ul>

        <p>By implementing these strategies, therapists can significantly reduce the risk of falls and help individuals maintain their independence and safety at home.</p>
      `
    },
    {
      title: "POST HOSPITAL DISCHARGE REHABILITATION",
      image: postHospitalImg,
      prices: [
        "Initial Assessment - £45",
        "Follow-up Sessions - £40"
      ],
      description: `
        <p>Rehabilitation at home can be an essential aspect of recovery following a long hospital stay. Here are several ways it can help:</p>

        <ul>
        <li><strong>Comfort and Familiarity:</strong> Being in a familiar environment can reduce stress and anxiety, which can contribute to a more positive recovery experience.</li>

        <li><strong>Personalized Care:</strong> Home rehab allows for more individualized attention and tailored rehabilitation programs based on the specific needs of the patient. Caregivers can focus on personal goals and preferences.</li>

        <li><strong>Flexibility:</strong> Home rehabilitation can be more flexible in terms of scheduling, making it easier to accommodate the patient's energy levels and other commitments. This can encourage adherence to the therapy regimen.</li>

        <li><strong>Continued Independence:</strong> Recovering at home promotes independence and encourages patients to engage in daily activities, which can enhance both physical and psychological well-being.</li>

        <li><strong>Family Support:</strong> Being at home allows for the involvement of family members or caregivers, who can provide emotional support and motivation throughout the rehabilitation process.</li>

        <li><strong>Integration of Therapy into Daily Life:</strong> Patients can practice skills and exercises in the context of their daily routines, which may enhance the transfer of skills to real-life situations.</li>

        <li><strong>Reduced Risk of Infection:</strong> Hospital stays can increase the risk of hospital-acquired infections. Recovery at home minimizes this risk.</li>

        <li><strong>Access to Resources:</strong> The use of technology (telehealth services, online resources) can facilitate remote appointments with healthcare professionals, ensuring ongoing support and monitoring.</li>

        <li><strong>Nutritional Support:</strong> Patients can benefit from home-cooked meals tailored to their nutritional needs, which can aid in recovery and overall health.</li>

        <li><strong>Mental Health Benefits:</strong> The comfort of home can positively impact mental health, reducing feelings of isolation or depression that may arise from a prolonged hospital stay.</li>
        </ul>

        <p>It's essential to have a well-structured rehabilitation plan in place and to work closely with healthcare providers to ensure that home care is set up effectively, with appropriate equipment and support systems.</p>
      `
    },
    {
      title: "RESPIRATORY/LONG COVID REHABILITATION",
      image: respiratoryRehabImg,
      prices: [
        "Initial Assessment - £45",
        "Follow-up Sessions - £40"
      ],
      description: `
        <p>Respiratory and long COVID rehabilitation can offer several benefits for individuals recovering from COVID-19, especially those who experience lingering symptoms or respiratory issues. Here are some ways in which rehab can help:</p>

        <ul>
        <li><strong>Symptom Management:</strong> Rehab programs often focus on alleviating symptoms such as shortness of breath, fatigue, and cough. By teaching strategies to manage these symptoms, individuals may experience improved quality of life.</li>

        <li><strong>Increased Lung Function:</strong> Tailored breathing exercises, physical activity, and pulmonary rehabilitation can help improve lung capacity and promote more efficient breathing.</li>

        <li><strong>Physical Rehabilitation:</strong> Many individuals recovering from COVID-19 experience fatigue and muscle weakness. Rehab can include physical therapy to help regain strength, increase stamina, and improve overall physical function.</li>

        <li><strong>Exercise Training:</strong> Supervised exercise programs can help individuals safely increase their activity levels, which can be key to recovery. Exercise can enhance cardiovascular health and endurance.</li>

        <li><strong>Mental Health Support:</strong> Long COVID can contribute to anxiety, depression, and other mental health issues. Rehabilitation often includes psychological support and counseling to help manage these challenges.</li>

        <li><strong>Education and Self-Management:</strong> Rehab programs often provide education about the condition, helping individuals understand their symptoms and develop self-management strategies.</li>

        <li><strong>Building Confidence:</strong> Through structured rehabilitation, individuals can rebuild their confidence in their physical abilities and regain independence in daily activities.</li>

        <li><strong>Community Support:</strong> Participating in rehab offers opportunities to connect with others who are experiencing similar challenges, which can provide emotional support and motivation.</li>
        </ul>

        <p>If you or someone you know is considering respiratory or long COVID rehabilitation, it's important to consult with healthcare professionals who can tailor a program to meet individual needs and circumstances.</p>
      `
    },
    {
      title: "MOBILE PHYSIOTHERAPY",
      image: physioImg,
      prices: [
        "Initial Assessment - £45",
        "Follow-up Sessions - £40"
      ],
      description: `
        <p>Mobile physiotherapy refers to a service where physiotherapists provide assessment, treatment, and rehabilitation for patients in their own homes or other convenient locations, rather than requiring them to travel to a clinic. This approach offers several advantages, particularly for individuals who may have mobility issues, chronic pain, or other health conditions that make it difficult to attend traditional physiotherapy sessions. Here are some key features and benefits of mobile physiotherapy:</p>

        <ul>
        <li><strong>Convenience:</strong> Patients can receive treatment in the comfort of their own homes, which can reduce the stress and effort associated with traveling to a clinic.</li>

        <li><strong>Personalized Care:</strong> Mobile physiotherapy often allows for more personalized attention and treatment plans tailored to the specific environment and needs of the patient.</li>

        <li><strong>Accessibility:</strong> This service is particularly beneficial for those with limited mobility, elderly individuals, or patients recovering from surgery or illness who may find it difficult to navigate public spaces.</li>

        <li><strong>Flexible Scheduling:</strong> Mobile physiotherapists often offer flexible appointment timings, which can accommodate the busy schedules of patients.</li>

        <li><strong>Holistic Approach:</strong> Treatment in a home environment allows the physiotherapist to assess the patient's daily living environment and provide modifications or advice tailored to improve the patient's functional abilities at home.</li>

        <li><strong>Comprehensive Assessment:</strong> Physiotherapists can evaluate factors in the home environment that may affect the patient's physical health and overall well-being, leading to more effective treatment strategies.</li>

        <li><strong>Integration of Family:</strong> Family members can easily participate in therapy sessions, allowing them to learn proper techniques for assisting the patient in their rehabilitation process.</li>

        <li><strong>Wide Range of Services:</strong> Mobile physiotherapy can include a variety of treatments such as manual therapy, exercise prescription, education on injury prevention, and rehabilitation for post-surgery, chronic conditions, or injuries.</li>
        </ul>

        <p>Overall, mobile physiotherapy can make physiotherapy more accessible and comfortable for individuals who might otherwise struggle to receive the care they need. If you're considering mobile physiotherapy, it's advisable to check the qualifications and experience of the physiotherapist, as well as the specific services they provide.</p>
      `
    }
];

  const handleBook = () => {
    navigate('/contact');
  };

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <TitleBand 
        title="Services" 
        subtitle="All services can be conducted at my bases in Dudley/Bedford. I am also available for mobile service and can come directly to you." 
        />
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onBook={handleBook}
              onReadMore={() => handleReadMore(service)}
            />
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Services;