function ServiceModal({ service, onBook, onClose }) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          <h2>{service.title}</h2>
          <div 
            className="modal-description"
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
          <div className="modal-prices">
            {service.prices.map((price, index) => (
              <p key={index}>{price}</p>
            ))}
          </div>
          <button className="btn-book" onClick={onBook}>Book</button>
        </div>
      </div>
    );
  }
  
  export default ServiceModal;