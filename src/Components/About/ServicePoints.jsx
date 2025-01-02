function ServicePoints() {
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
        items: [
          "Breathlessness",
          "Fatigue",
          "Brain Fog",
          "Reduced exercise tolerance",
          "A respiratory diagnosis",
          "Long COVID"
        ]
      },
      {
        title: "STROKE REHABILITATION",
        description: "Enabling clients to recover from stroke through functional movements, exercises and helping them regain independence in their daily activities from the comfort of their own home."
      },
      {
        title: "FALLS INTERVENTION",
        items: [
          "Holistic assessment offered following a fall",
          "Falls prevention training"
        ]
      }
    ];
  
    return (
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            {service.description ? (
              <p>{service.description}</p>
            ) : (
              <ul>
                {service.items?.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default ServicePoints;