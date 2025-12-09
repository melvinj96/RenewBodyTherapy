import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Description() {
    const [openSections, setOpenSections] = useState([]);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Video is in view, play it
                        video.play().catch((error) => {
                            // Handle autoplay restrictions
                            console.log('Autoplay prevented:', error);
                        });
                    } else {
                        // Video is out of view, pause it
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of video is visible
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleSection = (index) => {
        setOpenSections(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    const regularSections = [
        // {
        //     title: "The Roots of Renew Body",
        //     content: (
        //         <>
        //             <p>
        //                 Renew Body Therapy was founded to solve a real problem that many people in the community face,
        //                 long waiting lists for physiotherapy and occupational therapy services. After nearly a decade working
        //                 within the NHS across acute and community settings, our founder saw first-hand how delays in
        //                 treatment can negatively affect recovery and quality of life.
        //             </p>
        //             <p>
        //                 Driven by a desire to offer accessible, affordable, and honest care, Renew Body Therapy was created to
        //                 give people the chance to receive the right treatment at the right time. There is deep personal
        //                 satisfaction in helping someone walk out of the clinic happier and more comfortable than when they
        //                 arrived, and that feeling remains at the heart of the business today.
        //                 Every client matters, every outcome matters, and every treatment plan is tailored to the individual.
        //             </p>
        //         </>
        //     ),
        //     image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1764975478/PXL_20250930_162150034_epc4so.jpg'
        // },
        {
            title: "Our Professional Background & Clinical Expertise",
            content: (
                <>
                    <p>
                        With nearly 10 years of NHS experience, our clinician brings extensive knowledge from working across:
                    </p>
                    <ul>
                        <li>Trauma orthopaedics</li>
                        <li>Stroke neurology</li>
                        <li>Respiratory care</li>
                        <li>Cardiology</li>
                        <li>General surgery</li>
                        <li>Vascular surgery</li>
                    </ul>
                    <p>
                        This clinical foundation ensures that every assessment and treatment plan is rooted in evidence-based
                        practice and a deep understanding of how the body works. In addition to a BSc in Occupational Therapy,
                        the practitioner is qualified with a Level 3 Sports Massage Diploma, enabling skilled treatment of
                        muscular, postural, and injury-related conditions.
                    </p>
                    <p>
                        Clients benefit from a rare combination of medical training and hands-on therapy experience, delivered
                        by someone who understands both acute and long-term rehabilitation.
                    </p>
                </>
            ),
            image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1762856587/prestige_award2_alf6xb.jpg'
        },
        
    ];

    const sections = [
        {
            title: "Our Objectives",
            content: (
                <>
                    <p>
                        Our mission is to help every person who walks through our door improve their quality of life. We believe
                        in personalised care, honest communication, and treating the root cause of the problem rather than just
                        the surface-level symptoms.
                    </p>
                    <p>Our core values guide everything we do:</p>
                    <ul>
                        <li>Personalised treatment for every individual</li>
                        <li>Long-term relief through aftercare and rehabilitation support</li>
                        <li>Honest advice, including referrals when needed</li>
                        <li>Accessible pricing without compromising on quality</li>
                        <li>Ongoing support outside appointment times</li>
                    </ul>
                    <p>Clients should leave feeling understood, supported, and confident in their recovery journey.</p>
                </>
            ),
            video: 'https://res.cloudinary.com/diydpxavd/video/upload/v1764975196/video_2_sd320a.mp4',
            poster: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591676/clients_image1_fjcuse.jpg'            
        },
        {
            title: "What Makes Renew Body Therapy Different",
            content: (
                <>
                    <p>Renew Body Therapy stands out for several important reasons:</p>
                    <ul>
                        <li>Affordable pricing compared to local competitors</li>
                        <li>Over 180 five star Google reviews built on real client results</li>
                        <li>A private and quiet home based clinic offering flexibility and comfort</li>
                        <li>Honest guidance with no pressure to buy block bookings</li>
                        <li>Personalised treatment plans that fit your lifestyle and schedule</li>
                        <li>A blend of clinical expertise and hands on therapy skills</li>
                    </ul>
                    <p>
                        If a condition is not treatable within our scope, we openly discuss it and signpost clients to the most
                        appropriate service. This commitment to transparency and integrity sets us apart from many massage
                        and rehabilitation clinics in Dudley and the local areas.
                    </p>
                </>
            ),
            image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591755/physio_w866c0.jpg'
        },
        {
            title: "Our Services & How They Work Together",
            content: (
                <>
                    <p>
                        We provide a wide range of treatments designed to support mobility, reduce pain, and enhance long
                        term health. Our services include:
                    </p>
                    <ul>
                        <li>Sports Massage</li>
                        <li>Dry Needling</li>
                        <li>Stretch Therapy</li>
                        <li>Cupping Therapy</li>
                        <li>Physiotherapy</li>
                        <li>Occupational Therapy</li>
                        <li>Hand Therapy</li>
                    </ul>
                    <p>
                        Many clients benefit from a combination of therapies, carefully selected to address their specific
                        condition, lifestyle, and goals. Whether you are recovering from surgery, dealing with chronic pain, or
                        simply looking to improve function, every treatment plan is built for long-term success.
                    </p>
                </>
            ),
            image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591753/occupational_ghxf7i.jpg'
        },
        {
            title: "What to Expect as a New Client",
            content: (
                <>
                    <p>
                        Your first visit includes a free consultation, where we discuss your symptoms, concerns, and goals.
                        Before any treatment begins, we decide together what approach will be the most effective.
                    </p>
                    <p>
                        Clients often receive personalised rehabilitation exercises at no extra cost, along with clear guidance to
                        support recovery between sessions. We also provide support outside appointment times, ensuring you
                        always have help when you need it.
                    </p>
                </>
            ),
            image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591763/swedish_nqcbj4.jpg'
        },
        {
            title: "Supporting the Community Across All Ages",
            content: (
                <>
                    <p>
                        We care for people across the full age spectrum, from young athletes managing sports injuries to older
                        adults recovering after surgery. Treatment plans always respect your health conditions, lifestyle, work
                        demands, and available time, ensuring practical and achievable support for every client.
                    </p>
                </>
            ),
            image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591756/post-hospital_petri9.jpg'
        },
        {
            title: "Our Vision for the Future",
            content: (
                <>
                    <p>
                        Our team at Renew Body Therapy is committed to continuous learning and professional development.
                        The long-term vision is to help even more people in the community overcome long-term problems,
                        regain independence, and improve their quality of life.
                    </p>
                    <p>
                        As the clinic grows, we will continue to expand our range of services and invest in ongoing training to
                        deliver the highest standard of patient care.
                    </p>
                </>
            ),
            image: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591760/sports_nrw9bm.jpg'
        }
    ];

    return (
        <div className="description-container">
            <div className="intro-section">
                <div className="intro-content">
                    <h2 className="intro-title">The Roots of Renew Body</h2>
                    <p>
                        Renew Body Therapy was founded to solve a real problem that many people in the community face,
                        long waiting lists for physiotherapy and occupational therapy services. After nearly a decade working
                        within the NHS across acute and community settings, our founder saw first-hand how delays in
                        treatment can negatively affect recovery and quality of life.
                    </p>
                    <p>
                        Driven by a desire to offer accessible, affordable, and honest care, Renew Body Therapy was created to
                        give people the chance to receive the right treatment at the right time. There is deep personal
                        satisfaction in helping someone walk out of the clinic happier and more comfortable than when they
                        arrived, and that feeling remains at the heart of the business today.
                        Every client matters, every outcome matters, and every treatment plan is tailored to the individual.
                    </p>
                </div>
                <div className="intro-image">
                    <img 
                        src="https://res.cloudinary.com/diydpxavd/image/upload/v1764975478/PXL_20250930_162150034_epc4so.jpg" 
                        alt="Renew Body Therapy Clinic"
                        style={{
                            width: '100%',
                            maxWidth: '340px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.13)',
                            height: 'auto',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </div>
            </div>

            <div className="description-buttons">
                <Link to="/Contact" className="about-btn">Book an Appointment</Link>
            </div>

            <div className="regular-sections-container">
                {regularSections.map((section, index) => (
                    <div key={index} className="regular-section">
                        <h2>{section.title}</h2>
                        <div className="regular-section-content">
                            <div className="regular-section-text">
                                {section.content}
                            </div>
                            {section.video ? (
                                <div className="regular-section-video-wrapper">
                                    <video
                                        ref={index === 0 ? videoRef : null}
                                        src={section.video}
                                        className="regular-section-video"
                                        poster={section.poster}
                                        playsInline
                                        controls
                                        controlsList="nodownload nofullscreen noremoteplayback"
                                        loop
                                        muted
                                        onContextMenu={(e) => e.preventDefault()}
                                        style={{
                                            width: '100%',
                                            maxWidth: '350px',
                                            aspectRatio: '9/16',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 16px rgba(0,0,0,0.13)'
                                        }}
                                        title={section.title}
                                    />
                                </div>
                            ) : section.image && (
                                <div className="regular-section-image">
                                    <img src={section.image} alt={section.title} />
                                </div>
                            )}
                        </div>
                        {index === 0 && (
                            <div className="flex justify-center mt-8">
                                <Link 
                                    to="/awards" 
                                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    View Our Awards
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="about-accordion-container">
                {sections.map((section, index) => (
                    <div key={index} className={`about-accordion-item ${openSections.includes(index) ? 'active' : ''}`}>
                        <div 
                            className="about-accordion-header"
                            onClick={() => toggleSection(index)}
                        >
                            <h2>{section.title}</h2>
                            <span className="accordion-toggle-icon">
                                {openSections.includes(index) ? '−' : '+'}
                            </span>
                        </div>
                        <div className={`about-accordion-content ${openSections.includes(index) ? 'show' : ''}`}>
                            <div className="accordion-content-wrapper">
                                <div className="accordion-text">
                                    {section.content}
                                </div>
                                {section.video ? (
                                    <div className="accordion-video-wrapper">
                                        <video
                                            src={section.video}
                                            className="accordion-video"
                                            poster={section.poster}
                                            playsInline
                                            controls
                                            controlsList="nodownload nofullscreen noremoteplayback"
                                            onContextMenu={(e) => e.preventDefault()}
                                            loop
                                            muted
                                            style={{
                                                width: '100%',
                                                maxWidth: '350px',
                                                aspectRatio: '9/16',
                                                borderRadius: '12px',
                                                cursor: 'pointer',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.13)'
                                            }}
                                            title={section.title}
                                        />
                                    </div>
                                ) : section.image && (
                                    <div className="accordion-image">
                                        <img src={section.image} alt={section.title} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>            

            <div className="contact-section">
                <h2>Book Your Appointment</h2>
                <p>
                    If you are ready to reduce pain, improve mobility, and start your recovery journey, we are here to help.
                </p>
                <p>
                    We respond quickly and aim to offer appointments as soon as possible. Whether you need sports
                    massage, dry needling, or occupational therapy, your path to better movement begins here.
                </p>
                <p><strong>Call: </strong><a href="tel:07401261280">07401261280</a></p>
                <p><strong>Email: </strong><a href="mailto:jikku2006@gmail.com">jikku2006@gmail.com</a></p>
                <p><strong>Address: </strong>
                    <a href="https://www.google.com/maps/place/Bristol+Rd,+Dudley/@52.4783338,-2.0772117,17z/data=!3m1!4b1!4m6!3m5!1s0x4870972c28baec23:0x532f74bcaa6a5fbd!8m2!3d52.4783338!4d-2.0772117!16s%2Fg%2F1td58135?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        Bristol Road, Dudley, West Midlands, DY1 4SQ
                    </a>
                </p>
                <div className="description-buttons">
                    <Link to="/Contact" className="about-btn">Contact Our Therapists</Link>
                </div>
            </div>
        </div>
    );
}

export default Description;