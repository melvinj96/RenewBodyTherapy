function ServiceCard({ service, onBook, onReadMore }) {
    return (
      <div className="service-card">
        <img src={service.image} alt={service.title} />
        <div className="service-content">
          <h3>{service.title}</h3>
          <div className="prices">
            {service.prices.map((price, index) => (
              <p key={index}>{price}</p>
            ))}
          </div>
        </div>
        <div className="card-overlay">
          <button onClick={onReadMore} className="btn-read-more">Read More</button>
          <button onClick={onBook} className="btn-book">Book</button>
        </div>
      </div>
    );
  }
  
  export default ServiceCard;