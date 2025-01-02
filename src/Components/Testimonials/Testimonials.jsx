import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import TitleBand from '../Titleband';
import '../../assets/css/Testimonials.css';
import clientVideo1 from '../../assets/videos/client_review1.mp4';
import clientVideo2 from '../../assets/videos/client_review2.mp4';

function Testimonials() {
    const [videoIndex, setVideoIndex] = useState(-1);
    const [videoThumbnails, setVideoThumbnails] = useState({});

    const generateThumbnail = (videoSrc) => {
        return new Promise((resolve) => {
          const video = document.createElement('video');
          video.src = videoSrc;
          video.crossOrigin = 'anonymous';
          video.load();
    
          video.addEventListener('loadeddata', () => {
            // Seek to 1 second or the middle of the video
            video.currentTime = Math.min(1, video.duration / 2);
          });
    
          video.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL());
          });
        });
      };

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
          src: clientVideo1,
          type: "video/mp4",
        }
      ],
      alt: "Client Testimonial 1"
    },
    {
        type: "video",
        sources: [
          {
            src: clientVideo2,
            type: "video/mp4",
          }
        ],
        alt: "Client Testimonial 2"
      },
    // Add more video testimonials here
  ];

  // Generate thumbnails when component mounts
  useEffect(() => {
    const loadThumbnails = async () => {
      const thumbnails = {};
      for (const video of testimonialVideos) {
        try {
          const thumbnail = await generateThumbnail(video.sources[0].src);
          thumbnails[video.sources[0].src] = thumbnail;
        } catch (error) {
          console.error('Error generating thumbnail:', error);
        }
      }
      setVideoThumbnails(thumbnails);
    };

    loadThumbnails();
  }, []);

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
              {videoThumbnails[video.sources[0].src] ? (
                <img 
                  src={videoThumbnails[video.sources[0].src]}
                  alt={video.alt}
                  className="video-thumbnail"
                />
              ) : (
                <div className="thumbnail-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
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