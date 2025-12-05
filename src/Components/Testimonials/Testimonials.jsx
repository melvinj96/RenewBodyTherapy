import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import TitleBand from '../Titleband';
import '../../assets/css/Testimonials.css';

function Testimonials() {
    const [videoIndex, setVideoIndex] = useState(-1);

    useEffect(() => {
      document.title = 'Client Reviews | Massage Therapy Dudley | Renew Body Therapy';
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Read verified client reviews & success stories | Trusted by the local community for expert care & real results | Book your visit today →');
      }
    }, []);

    const testimonialQuotes = [
      {
        text: "I recently had a massage after experiencing shoulder and back pain for the past couple of weeks and it was incredible! I immediately felt the relief and it worked wonders for my pain! Jikku made sure to tailor the treatment specifically to my needs and that he targeted the exact area of discomfort. I would highly recommend for anyone seeking effective pain relief as well as a relaxing experience!",
        author: ""
      },
      {
        text: "First time ever having a massage and was made to feel so comfortable and relaxed from the very start. The music was calming, the room was warm, lighting and scents were not overpowering at all and his hands were simply magic! I have had back pain for a few weeks now and pretty much instantly i could feel a difference. 'Look, I can move' was the first thing i said to my partner as i came home. The massage was amazing. Perfect amount of pressure applied and I feel great. So I highly recommend him and I will be making this my monthly treat now 😊",
        author: ""
      },
      {
        text: "Very professional and excellent service. Had a full body swedish massage. It was really refreshing and energising. I recommend it to anyone looking for a massage.",
        author: ""
      }
    ];

    const testimonialVideos = [
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749591800/client_review1_yr8mtj.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749591800/client_review1_yr8mtj.jpg',
        alt: "Client Testimonial 1"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749591793/client_review2_iivhxa.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749591793/client_review2_iivhxa.jpg',
        alt: "Client Testimonial 2"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593131/VID-20250513-WA0005_oj5xq3.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593131/VID-20250513-WA0005_oj5xq3.jpg',
        alt: "Client Testimonial 3"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593131/VID-20250513-WA0002_xoyxnb.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593131/VID-20250513-WA0002_xoyxnb.jpg',
        alt: "Client Testimonial 4"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593129/VID-20250513-WA0004_st23t8.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593129/VID-20250513-WA0004_st23t8.jpg',
        alt: "Client Testimonial 5"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593128/VID-20250513-WA0006_gbopsh.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593128/VID-20250513-WA0006_gbopsh.jpg',
        alt: "Client Testimonial 6"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593128/VID-20250513-WA0003_vgepw5.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593128/VID-20250513-WA0003_vgepw5.jpg',
        alt: "Client Testimonial 7"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593124/VID-20250513-WA0000_hojwcb.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593124/VID-20250513-WA0000_hojwcb.jpg',
        alt: "Client Testimonial 8"
      },
      {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749593122/VID-20250513-WA0001_zjxngg.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749593122/VID-20250513-WA0001_zjxngg.jpg',
        alt: "Client Testimonial 9"
      }
      // Add more video testimonials here
    ];

    return (
      <div className="testimonials-page">
        <TitleBand 
          title="Testimonials" 
          subtitle="Just a few words from my clients.."
        />

        {/* Video Testimonials Section */}
        <section className="video-testimonials">
          <h2>Client Video Testimonials</h2>
          <div className="videos-grid">
            {testimonialVideos.map((video, idx) => (
              <div 
                key={idx}
                className="video-item"
                onClick={() => setVideoIndex(idx)}
              >
                <img 
                  src={video.thumbnail}
                  alt={video.alt}
                  className="video-thumbnail"
                />
                <div className="play-overlay">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Written Testimonials Section */}
        <section className="testimonials-quotes">
          <div className="quotes-container">
            {testimonialQuotes.map((quote, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-mark">"</div>
                <p className="quote-text">{quote.text}</p>
                {quote.author && <p className="quote-author">{quote.author}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="google-reviews">
          <div className="reviews-container">
            <h2>Click below to read all my reviews</h2>
            <a 
              href="https://www.google.com/search?q=renew+body+therapy+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="google-link"
            >
              <div className="google-logo">
                <span className="g-letter">G</span>
                <span className="o-letter">o</span>
                <span className="o2-letter">o</span>
                <span className="g2-letter">g</span>
                <span className="l-letter">l</span>
                <span className="e-letter">e</span>
              </div>
              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>
            </a>
          </div>
        </section>

        {/* Video Lightbox */}
        <Lightbox
          slides={testimonialVideos}
          open={videoIndex >= 0}
          index={videoIndex}
          close={() => setVideoIndex(-1)}
          plugins={[Video]}
          video={{
            autoPlay: true,
            muted: false,
            controls: true,
          }}
        />
      </div>
    );
}

export default Testimonials;