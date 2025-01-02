import { useState,useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import TitleBand from '../Titleband';
import '../../assets/css/Gallery.css';
import studioVideo1 from '../../assets/videos/studio.mp4';
import rangeMotion1 from '../../assets/images/gallery/clients_image1.jpeg';
import beforeAfter1 from '../../assets/images/gallery/clients_image2.jpeg';
import beforeAfter2 from '../../assets/images/gallery/clients_image3.jpeg';
import rangeMotion2 from '../../assets/images/gallery/clients_image4.png';
import rangeMotion3 from '../../assets/images/gallery/clients_image5.png';
import rangeMotion4 from '../../assets/images/gallery/clients_image6.png';
import clientImage7 from '../../assets/images/gallery/clients_image7.png';
import clientImage8 from '../../assets/images/gallery/clients_image8.jpg';
import clientImage9 from '../../assets/images/gallery/clients_image9.jpeg';
import cuppingTreatment from '../../assets/images/gallery/cupping_image1.jpeg';
import clientVideo1 from '../../assets/videos/client_post2.mp4';
import clientVideo2 from '../../assets/videos/client_review3.mp4';


function Gallery() {
    const [index, setIndex] = useState(-1);
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

  const galleryItems = [    
    {
        type: "video",
        sources: [
          {
            src: clientVideo2,
            type: "video/mp4",
          }
        ],
        alt: "Client review video",
        autoPlay: true,
        muted: true,
        controls: true,
    },
    {
        type: 'image',
      src: rangeMotion1,
      alt: 'Range of motion improvement 1',
      title: 'Range of Motion Improvement'
    },
    {
        type: 'image',
      src: beforeAfter2,
      alt: 'Before and after treatment comparison 2',
      title: 'Before and After Treatment'
    },
    {
        type: 'image',
      src: rangeMotion2,
      alt: 'Range of motion improvement 2',
      title: 'Range of Motion Improvement'
    },
    {
        type: 'image',
      src: cuppingTreatment,
      alt: 'Cupping therapy treatment',
      title: 'Cupping Therapy Treatment'
    },
    {
        type: 'image',
      src: clientImage9,
      alt: 'Client treatment results 9',
      title: 'Client Treatment Results'
    },
    {
        type: 'image',
      src: rangeMotion3,
      alt: 'Range of motion improvement 3',
      title: 'Range of Motion Improvement'
    },
    {
        type: 'image',
      src: rangeMotion4,
      alt: 'Range of motion improvement 4',
      title: 'Range of Motion Improvement'
    },
      {
        type: "video",
        sources: [
          {
            src: clientVideo1,
            type: "video/mp4",
          }
        ],
        alt: "Treatment demonstration video",
        autoPlay: true,
        muted: true,
        controls: true,
      },
      {
        type: "video",
        sources: [
          {
            src: studioVideo1,
            type: "video/mp4",
          }
        ],
        alt: "Studio tour video",
        autoPlay: true,
        muted: true,
        controls: true,
      },
      {
        type: "image",
        src: beforeAfter1,
        alt: 'Before and after treatment comparison 1',
        title: 'Before and After Treatment' 
      },
      {
          type: "image",
          src: clientImage7,
          alt: "Client treatment results 7",
        },
        {
          type: "image",
          src: clientImage8,
          alt: "Client treatment results 8",
        }
  ];

  useEffect(() => {
    const loadThumbnails = async () => {
      const thumbnails = {};
      for (const item of galleryItems) {
        if (item.type === 'video') {
          try {
            const thumbnail = await generateThumbnail(item.sources[0].src);
            thumbnails[item.sources[0].src] = thumbnail;
          } catch (error) {
            console.error('Error generating thumbnail:', error);
          }
        }
      }
      setVideoThumbnails(thumbnails);
    };

    loadThumbnails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TitleBand 
        title="Gallery" 
        subtitle="Some before & after photos from my clients."
      />
      
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`gallery-item ${item.type === 'video' ? 'video-item' : ''}`}
              onClick={() => setIndex(idx)}
            >
              {item.type === 'video' ? (
                <>
                  <img 
                    src={videoThumbnails[item.sources[0].src] || '/images/placeholder.jpg'} 
                    alt={item.alt} 
                    loading="lazy"
                  />
                  <div className="video-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                </>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        slides={galleryItems}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Video]}
        video={{
          autoPlay: true,
          muted: true,
          controls: true,
        }}
      />
    </div>
  );
}

export default Gallery;