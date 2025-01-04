import { Link } from 'react-router-dom';
function Description() {
    return (
        <div className="description-container">
            <p>
            At Renew Body Therapy, we are dedicated to helping you achieve both physical and mental well-being through our
            specialized massage, occupational and physiotherapy services. Our mission is to create a space where you can find relief
            from the stress of everyday life while also supporting your recovery from illness, injury, or chronic conditions.
            </p>
            <p>
            With a compassionate approach, we focus on tailored treatments designed to relax, rejuvenate, and restore balance.
            Whether you're seeking stress relief, pain management, or rehabilitation, our experienced team is here to guide you on
            your journey toward better health and a more balanced life.
            </p>
            <p>At Renew Body Therapy, your wellness is our priority.</p>
            <div className="description-buttons">
                <Link to="/team" className="about-btn">Meet the Team</Link>
                <Link to="/services" className="about-btn">View Services</Link>
            </div>
        </div>
    );
  }
  
  export default Description;