import { useState } from 'react';
function ServicePoints() {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3, 4]);
  const services = [
    {
      title: "BENEFITS OF MASSAGE",
      items: [
        "Reduced muscle tension",
        "Improved blood circulation",
        "Stimulation of lymphatic system",
        "Stress Relief",
        "Relaxation",
        "Increased joint mobility and flexibility",
        "Improved Skin Tone",
        "Quicker recovery from soft tissue injuries"
      ]
    },
    {
      title: "RESPIRATORY REHAB/LONG COVID REHAB",
      description: "Get in touch if you suffer from the following symptoms or diagnosis",
      items: [
        "Breathlessness",
        "Fatigue",
        "Brain Fog",
        "Reduced exercise tolerance",
        "A respiratory diagnosis",
        "Long COVID"
      ],
      endingText: `As an Occupational Therapist, I can offer your treatment advice to help manage
          your symptoms and improve your condition.
          Allow you to carry out your normal activities of daily living, whilst learning to 
          manage your symptoms.`
    },
    {
      title: "STROKE REHABILITATION",
      description: "Enabling clients to recover from stroke through functional movements, exercises and helping them regain independence in their daily activities from the comfort of their own home."
    },
    {
      title: "FALLS INTERVENTION",
      items: [
        "Holistic assessment offered following a fall, Falls prevention training"
      ]
    },
    {
      title: "HOSPITAL DISCHRGE REHABILITATION",
      description: "For those lacking in confidence in their daily function, struggling with their activities of daily living after returning home and needing help getting back to baseline"
    }
  ];

  const toggleService = (index) => {
    setActiveIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };


  return (
    <div className="service-points-container">
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-points-item ${activeIndices.includes(index) ? 'active' : ''}`}
          onClick={() => toggleService(index)}
        >
          <div className="service-points-header">
            <h3>{service.title}</h3>
            <span className="toggle-icon">
              {activeIndices.includes(index) ? '−' : '+'}
            </span>
          </div>
          <div className={`service-points-content ${activeIndices.includes(index) ? 'show' : ''}`}>
            {service.description && <p>{service.description}</p>}
            {service.items && (
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
            {service.endingText && <p>{service.endingText}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicePoints;