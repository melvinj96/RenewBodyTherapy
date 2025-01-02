import { useState } from 'react';
import TitleBand from '../Titleband';
//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../assets/css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    notes: ''
  });

  const mapCenter = {
    lat: 52.1389, // Replace with your actual coordinates
    lng: -0.4667
  };

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Add this header
          },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Thank you! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          notes: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again or contact me by phone.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-page">
      <TitleBand 
        title="BOOK YOUR APPOINTMENT" 
        subtitle="I am available with restricted timings on weekdays and all day on weekends."
      />

      <div className="contact-container">
        {/* Info Section */}
        <section className="contact-info">
          <p>Please call or email to book your appointment or use the online form and I will get back to you.</p>
          
          <div className="contact-details">
            <a href="mailto:jikkujoseph07@yahoo.co.uk" className="contact-item">
              <i className="fas fa-envelope"></i>
              jikkujoseph07@yahoo.co.uk
            </a>
            <a href="tel:07401261289" className="contact-item">
              <i className="fas fa-phone"></i>
              07401261289
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Choose an option</option>
                  <option value="deep-tissue">Deep Tissue Massage</option>
                  <option value="swedish">Swedish Massage</option>
                  <option value="sports">Sports Massage</option>
                  <option value="head-massage">Head, Neck & Shoulder Massage</option>
                  <option value="stroke-rehab">Stroke Rehabilitation</option>
                  <option value="falls-intervention">Falls Intervention</option>
                  <option value="post-hospital">Post Hospital Discharge Rehabilitation</option>
                  <option value="respiratory-rehab">Respiratory/Long COVID Rehabilitation</option>
                  <option value="physio">Mobile Physiotherapy</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Select a date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4"
                placeholder="Any additional information..."
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </section>

        {/* Map Section - Temporarily disabled
        <section className="contact-map">
          <LoadScript googleMapsApiKey="your-google-maps-api-key">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={mapCenter}
            >
              <Marker position={mapCenter} />
            </GoogleMap>
          </LoadScript>
        </section>
        */}
      </div>
    </div>
  );
}

export default Contact;