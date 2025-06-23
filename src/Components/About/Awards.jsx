import '../../assets/css/About.css';

function Awards() {
  // Example awards data; replace or extend as needed
  const awards = [
    {
      title: "Best Massage Therapy Practitioner 2024",
      organization: "Prestige Awards",
      year: 2024,
      description: "Recognized for outstanding client care and innovative therapy solutions.",
      image: "https://res.cloudinary.com/diydpxavd/image/upload/v1750717311/prestige_award1_g1mu9m.jpg"
    },
    {
      title: "Best Massage Therapist ",
      organization: "ThreeBest Rated",
      year: 2024,
      description: "Awarded for exceptional service and client satisfaction.",
      image: "https://res.cloudinary.com/diydpxavd/image/upload/v1749591659/threebest-award-2024_bs3xkf.png"
    }
  ];

  return (
    <div className="awards-section">
      <h2>Awards & Recognition</h2>
      <div className="awards-grid">
        {awards.map((award, idx) => (
          <div key={idx} className="award-card">
            {award.image && (
              <img src={award.image} alt={award.title} className="award-image-about" />
            )}
            <div className="award-info">
              <strong>{award.title}</strong> <span className="award-year">({award.year})</span>
              <div className="award-org"><em>{award.organization}</em></div>
              <p>{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awards; 