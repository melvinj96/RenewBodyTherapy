import { useState, useEffect } from 'react';
import TitleBand from '../Titleband';
import Alert from '../Shared/Alert';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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

    const [captchaValue, setCaptchaValue] = useState(null);

    const mapCenter = {
        lat: 52.5107,
        lng: -2.0866
    };

    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const service = params.get('service');
        if (service) {
            setFormData(prevState => ({
                ...prevState,
                service: service
            }));
        }
    }, []);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
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
        if (!captchaValue) {
            setAlert({
                show: true,
                message: 'Please verify that you are human',
                type: 'error'
            });
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Add this header
                },
                body: JSON.stringify({
                    ...formData,
                    captchaToken: captchaValue
                })
            });

            if (response.ok) {
                setAlert({
                    show: true,
                    message: 'Thank you! I will get back to you soon.',
                    type: 'success'
                });
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
            setAlert({
                show: true,
                message: `Sorry, there was an error: ${error.message}`,
                type: 'error'
            });
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact-page">
            {isLoading && <LoadingSpinner />}
            <div className={isLoading ? 'content-disabled' : ''}>
                <TitleBand
                    title="BOOK YOUR APPOINTMENT"
                    subtitle="I am available with restricted timings on weekdays and all day on weekends."
                />
                <div className="contact-container">
                    {/* Info Section */}
                    <section className="contact-info">
                        <p>Please call or email to book your appointment or use the online form and I will get back to you.</p>

                        <div className="contact-details">
                            <a href="mailto:jikku2006@gmail.com" className="contact-item">
                                <i className="fas fa-envelope"></i>
                                jikku2006@gmail.com
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
                                        placeholder="Enter your UK phone number"
                                        title="Please enter a valid UK phone number (e.g., 07401234567 or 01234659854)"
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
                                        <option value="post-hospital-rehab">Post Hospital Discharge Rehabilitation</option>
                                        <option value="respiratory-rehab">Respiratory/Long COVID Rehabilitation</option>
                                        <option value="physio">Mobile Physiotherapy</option>
                                        <option value="occupational">Occupational Therapy</option>
                                        <option value="vitamin-b12">Vitamin B12 Injections</option>
                                        <option value="acupuncture">Acupuncture</option>
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
                            <div className="form-group">
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                    onChange={handleCaptchaChange}
                                />
                            </div>
                            <div style={{ display: 'none' }}>
                                <input
                                    type="text"
                                    name="bot-field"
                                    onChange={handleInputChange}
                                    tabIndex="-1"
                                    autoComplete="off"
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </section>
                    <section className="contact-map">
                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                            <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={13}
                                center={mapCenter}
                            >
                                <Marker position={mapCenter} />
                            </GoogleMap>
                        </LoadScript>
                    </section>
                </div>
            </div>
            {alert.show && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    onClose={() => setAlert({ ...alert, show: false })}
                />
            )}
        </div>
    );
}

export default Contact;