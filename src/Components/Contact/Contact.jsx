import { useState, useEffect } from 'react';
import TitleBand from '../Titleband';
import Alert from '../Shared/Alert';
import LoadingSpinner from '../Shared/LoadingSpinner';
import AvailabilityBanner from '../Home/AvailabilityBanner';
import ReCAPTCHA from "react-google-recaptcha";
import GoogleMapComponent from '../Shared/GoogleMapComponent';
import '../../assets/css/Contact.css';
import Select from 'react-select';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        notes: '',
        sex: '',
        dob: '',
        contraindications: [],
        contraindications2: [],
        personalProblems: [],
        currentMedications: '',
        allergies: '',
        exerciseInformation: '',
        handedness: ''
    });

    const [captchaValue, setCaptchaValue] = useState(null);

    const [alert, setAlert] = useState({ show: false, message: '', type: 'info' });

    const [isLoading, setIsLoading] = useState(false);

    const [disclaimer, setDisclaimer] = useState({
        understoodTreatment: false,
        consentToTreatment: false,
        consentToMedia: false
    });

    useEffect(() => {
        document.title = 'Contact Renew Body Therapy | Book Massage in Dudley';
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Call or message us to book your therapy session | Located on Bristol Road, Dudley | Fast response times | Get in touch now →');
        }

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
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                contraindications: checked
                    ? [...prevState.contraindications, value]
                    : prevState.contraindications.filter(item => item !== value)
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleContraindicationsChange = (selectedOptions) => {
        setFormData(prevState => ({
            ...prevState,
            contraindications: selectedOptions ? selectedOptions.map(option => option.value) : []
        }));
    };

    const handleContraindications2Change = (selectedOptions) => {
        setFormData(prevState => ({
            ...prevState,
            contraindications2: selectedOptions ? selectedOptions.map(option => option.value) : []
        }));
    };

    const handlePersonalProblemsChange = (selectedOptions) => {
        setFormData(prevState => ({
            ...prevState,
            personalProblems: selectedOptions ? selectedOptions.map(option => option.value) : []
        }));
    };

    const handleDisclaimerChange = (e) => {
        const { name, checked } = e.target;
        setDisclaimer(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const contraindicationOptions = [
        { value: "Pregnancy", label: "Pregnancy" },
        { value: "Cardio Vascular Conditions", label: "Cardio Vascular Conditions" },
        { value: "Osteoporosis", label: "Osteoporosis" },
        { value: "Haemophilia", label: "Haemophilia" },
        { value: "Any condition already being treated by a GP or another health professional", label: "Any condition already being treated by a GP or another health professional" },
        { value: "Medical Oedema", label: "Medical Oedema" },
        { value: "Arthritis", label: "Arthritis" },
        { value: "Nervous / Psychotic Conditions", label: "Nervous / Psychotic Conditions" },
        { value: "Epilepsy", label: "Epilepsy" },
        { value: "Any recent operations", label: "Any recent operations" },
        { value: "Diabetes", label: "Diabetes" },
        { value: "Asthma", label: "Asthma" },
        { value: "Any dysfunction of the nervous system", label: "Any dysfunction of the nervous system" },
        { value: "Kidney Infections", label: "Kidney Infections" },
        { value: "Whiplash", label: "Whiplash" },
        { value: "Slipped Disc", label: "Slipped Disc" },
        { value: "Acute Rheumatism", label: "Acute Rheumatism" },
        { value: "Taking prescribed medication", label: "Taking prescribed medication" }
    ];

    const contraindicationOptions2 = [
        { value: "Fever", label: "Fever" },
        { value: "Contagious or Infectious disease", label: "Contagious or Infectious disease" },
        { value: "Under the influence of recreational drugs and/or alcohol", label: "Under the influence of recreational drugs and/or alcohol" },
        { value: "Diarrhea or vomiting", label: "Diarrhea or vomiting" },
        { value: "Skin Diseases", label: "Skin Diseases" },
        { value: "Undiagnosed lumps or swellings", label: "Undiagnosed lumps or swellings" },
        { value: "Localised swelling", label: "Localised swelling" },
        { value: "Inflammation", label: "Inflammation" },
        { value: "Varicose Veins", label: "Varicose Veins" },
        { value: "Pregnancy", label: "Pregnancy" },
        { value: "Cuts", label: "Cuts" },
        { value: "Bruises", label: "Bruises" },
        { value: "Abrasions", label: "Abrasions" },
        { value: "Sunburn", label: "Sunburn" },
        { value: "Scar tissues (2 years for major operations & 6 months for small scar)", label: "Scar tissues (2 years for major operations & 6 months for small scar)" },
        { value: "Hormonal Implants", label: "Hormonal Implants" },
        { value: "Abdomen (first few days of menstruation depending on client)", label: "Abdomen (first few days of menstruation depending on client)" },
        { value: "Haematoma", label: "Haematoma" },
        { value: "Hernia", label: "Hernia" },
        { value: "Recent fractures (min 3 months)", label: "Recent fractures (min 3 months)" },
        { value: "Cervical Spondylitis", label: "Cervical Spondylitis" },
        { value: "Gastric Ulcers", label: "Gastric Ulcers" },
        { value: "After a heavy meal", label: "After a heavy meal" }
    ];

    const groupedProblemsOptions = [
        {
            label: "Muscular/Skeletal Problems",
            options: [
                { label: "Back", value: "Back" },
                { label: "Aches / Pains", value: "Aches / Pains" },
                { label: "Stiff Joints", value: "Stiff Joints" },
                { label: "Headaches", value: "Headaches" },
            ]
        },
        {
            label: "Digestive Problems",
            options: [
                { label: "Constipation", value: "Constipation" },
                { label: "Bloating", value: "Bloating" },
                { label: "Liver/Gall Bladder", value: "Liver/Gall Bladder" },
                { label: "Stomach", value: "Stomach" },
            ]
        },
        {
            label: "Circulation",
            options: [
                { label: "Heart", value: "Heart" },
                { label: "Blood Pressure", value: "Blood Pressure" },
                { label: "Fluid Retention", value: "Fluid Retention" },
                { label: "Tired Legs", value: "Tired Legs" },
                { label: "Varicose Veins", value: "Varicose Veins" },
                { label: "Cellulite", value: "Cellulite" },
                { label: "Kidney Problems", value: "Kidney Problems" },
                { label: "Cold Hands and Feet", value: "Cold Hands and Feet" },
            ]
        },
        {
            label: "Nervous System",
            options: [
                { label: "Migraine", value: "Migraine" },
                { label: "Tension", value: "Tension" },
                { label: "Stress", value: "Stress" },
                { label: "Depression", value: "Depression" },
            ]   
        }
    ]

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

        if (!formData.handedness) {
            setAlert({
                show: true,
                message: 'Please select which hand you use.',
                type: 'error'
            });
            return;
        }

        if (!disclaimer.understoodTreatment || !disclaimer.consentToTreatment) {
            setAlert({
                show: true,
                message: 'Please agree to the mandatory disclaimers.',
                type: 'error'
            });
            return;
        }

        setIsLoading(true);

        try {
            console.log('Form data being sent:', {
                ...formData,
                captchaToken: captchaValue,
                disclaimer
            });

            const baseUrl = process.env.NODE_ENV === 'development' 
                ? 'http://localhost:8888'
                : '';

            const response = await fetch(`${baseUrl}/.netlify/functions/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    captchaToken: captchaValue,
                    disclaimer
                })
            });

            console.log('Response status:', response.status);
            const responseData = await response.json();
            console.log('Response data:', responseData);

            if (response.ok) {
                setAlert({
                    show: true,
                    message: 'Thank you! I will get back to you soon.',
                    type: 'success'
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    date: '',
                    notes: '',
                    sex: '',
                    dob: '',
                    contraindications: [],
                    contraindications2: [],
                    personalProblems: [],
                    currentMedications: '',
                    allergies: '',
                    exerciseInformation: '',
                    handedness: ''
                });
                setDisclaimer({
                    understoodTreatment: false,
                    consentToTreatment: false,
                    consentToMedia: false
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
                <AvailabilityBanner />
                <div className="contact-container">
                    {/* Info Section */}
                    <section className="contact-info">
                        <p>Please call or email to book your appointment or use the online form and I will get back to you.</p>

                        <div className="contact-details">
                            <a href="mailto:jikku2006@gmail.com" className="contact-item">
                                <i className="fas fa-envelope"></i>
                                jikku2006@gmail.com
                            </a>
                            <a href="tel:01384437111" className="contact-item">
                                <i className="fas fa-phone"></i>
                                01384437111
                            </a>
                        </div>
                    </section>

                    {/* Form Section */}
                    <section className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName" className="required">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName" className="required">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email" className="required">Email *</label>
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
                                <div className="form-group">
                                    <label htmlFor="phone" className="required">Phone Number *</label>
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
                            </div>
                            <div className="form-row">                                
                                <div className="form-group">
                                    <label htmlFor="service" className="required">Service Required *</label>
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
                                        <option value="acupuncture">Dry Needling</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date" className="required">Select a date *</label>
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

                            <div className="form-row">
                                <div className="form-group consultation-heading colspan-2">
                                    <h3>CONSULTATION</h3>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="sex" className="required">Sex *</label>
                                    <select
                                        id="sex"
                                        name="sex"
                                        value={formData.sex}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select your sex</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="prefer-not-to-say">Prefer not to say</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dob" className="required">Date of Birth *</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group colspan-2">
                                    <label htmlFor="contraindications">Contraindications (any potential reason to avoid treatment)</label>
                                    <p>Select any injury that has been diagnosed and treatment has been recommended by a medical practitioner.</p>
                                    <Select
                                        id="contraindications"
                                        name="contraindications"
                                        isMulti
                                        options={contraindicationOptions}
                                        value={contraindicationOptions.filter(option => formData.contraindications.includes(option.value))}
                                        onChange={handleContraindicationsChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group colspan-2">
                                    <label htmlFor="contraindications2">Additional Contraindications</label>
                                    <p>Select any additional conditions that may affect treatment.</p>
                                    <Select
                                        id="contraindications2"
                                        name="contraindications2"
                                        isMulti
                                        options={contraindicationOptions2}
                                        value={contraindicationOptions2.filter(option => formData.contraindications2.includes(option.value))}
                                        onChange={handleContraindications2Change}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group colspan-2">
                                    <label htmlFor="personalProblems">Personal Problems</label>
                                    <p>Select any personal problems that may affect treatment.</p>
                                    <Select
                                        id="personalProblems"
                                        name="personalProblems"
                                        isMulti
                                        options={groupedProblemsOptions}
                                        value={groupedProblemsOptions.flatMap(group => group.options).filter(option => formData.personalProblems.includes(option.value))}
                                        onChange={handlePersonalProblemsChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group colspan-2">
                                    <label htmlFor="currentMedications">List any antibiotics / medication you are taking:</label>
                                    <textarea
                                        id="currentMedications"
                                        name="currentMedications"
                                        value={formData.currentMedications}
                                        onChange={handleInputChange}
                                        rows="4"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group colspan-2">
                                    <label htmlFor="allergies">Please list any allergies including any skin allergies that could be caused by massage oil, cream or wax.</label>
                                    <textarea
                                        id="allergies"
                                        name="allergies"
                                        value={formData.allergies}
                                        onChange={handleInputChange}
                                        rows="4"
                                    />
                                </div>
                            </div>                           
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="exerciseInformation">Do you exercise? How many times a week?</label>
                                    <textarea
                                        id="exerciseInformation"
                                        name="exerciseInformation"
                                        value={formData.exerciseInformation}
                                        onChange={handleInputChange}
                                        rows="2"
                                        placeholder="Please provide any information about your exercise regime."
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="handedness" className="required">Are you left or right-handed? *</label>
                                    <select
                                        id="handedness"
                                        name="handedness"
                                        value={formData.handedness}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="left">Left</option>
                                        <option value="right">Right</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group colspan-2">
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
                            </div>





                            {/* Disclaimer Section */}
                            <div className="form-row">
                            <h3>DISCLAIMER</h3>
                                <div className="form-group colspan-2">
                                    <p>Please read the following and tick the appropriate box, by ticking the box you are confirming you are in full agreement with the statements contents.</p>
                                </div>
                            </div>
                            <div className="form-row">   
                                <div className="form-group colspan-2 disclaimer-checkbox">
                                    <input
                                        type="checkbox"
                                        id="understoodTreatment"
                                        name="understoodTreatment"
                                        checked={disclaimer.understoodTreatment}
                                        onChange={handleDisclaimerChange}
                                        required
                                    />
                                    <label htmlFor="understoodTreatment">
                                        <b>I confirm that I have understood the treatment that I am going to receive. I also confirm that I am willing to proceed without confirmation from my own G.P or Consultant.</b>
                                    </label>
                                </div>
                                <div className="form-group colspan-2 disclaimer-checkbox">
                                    <input
                                        type="checkbox"
                                        id="consentToTreatment"
                                        name="consentToTreatment"
                                        checked={disclaimer.consentToTreatment}
                                        onChange={handleDisclaimerChange}
                                        required
                                    />
                                    <label htmlFor="consentToTreatment">
                                        <b>I consent to full treatment by Renew Body Therapy which can include any of the following: Joint adjustment or manipulation or mobilisation to the joints of my spine (neck and back), pelvis and extremities (shoulder, upper limbs and lower limbs), Cupping Therapy, IASTM Therapy, The use of a hand held Massage Gun and Full body Sports Massage Therapy. This consent applies to all my present and future treatments at Renew Body Therapy.</b>
                                    </label>
                                </div>
                                <div className="form-group colspan-2 disclaimer-checkbox">
                                    <input
                                        type="checkbox"
                                        id="consentToMedia"
                                        name="consentToMedia"
                                        checked={disclaimer.consentToMedia}
                                        onChange={handleDisclaimerChange}
                                    />
                                    <label htmlFor="consentToMedia">
                                        Please tick this box if you are happy for any photographic or video content pre, during or post treatment to be shared and used for promotional purposes.
                                    </label>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group colspan-2">
                                    <p><b>You should note that if the therapist is unable to explain to you the contraindications or is unsure of anything that may apply to a specific condition then they should not treat you without asking you to consult with your GP or Consultant. It is your responsibility and not that of the therapist to consult your GP or Consultant.</b></p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                        onChange={handleCaptchaChange}
                                    />
                                </div>
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
                        <GoogleMapComponent height="400px" zoom={13} />
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