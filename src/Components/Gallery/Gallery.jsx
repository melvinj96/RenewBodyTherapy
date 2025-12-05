import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";
import TitleBand from '../Titleband';
import '../../assets/css/Gallery.css';

function Gallery() {
    const [index, setIndex] = useState(-1);

    useEffect(() => {
      document.title = 'Treatment Gallery | Dudley Massage Clinic | Renew Body Therapy';
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'View our treatment space & client care in action | Professional massage and rehabilitation therapy in Dudley | See more →');
      }
    }, []);

  const galleryItems = [    
    {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749591796/client_review3_f92hpi.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749591796/client_review3_f92hpi.jpg',
        alt: "Client review video",
        autoPlay: true,
        muted: true,
        controls: true,
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591676/clients_image1_fjcuse.jpg',
        alt: 'Range of motion improvement 1',
        title: 'Range of Motion Improvement'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591678/clients_image3_jjfut4.jpg',
        alt: 'Before and after treatment comparison 2',
        title: 'Before and After Treatment'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591679/clients_image4_wkbios.png',
        alt: 'Range of motion improvement 2',
        title: 'Range of Motion Improvement'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591687/cupping_image1_lb26my.jpg',
        alt: 'Cupping therapy treatment',
        title: 'Cupping Therapy Treatment'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591686/clients_image9_dhydwy.jpg',
        alt: 'Client treatment results 9',
        title: 'Client Treatment Results'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591680/clients_image5_z0avbr.png',
        alt: 'Range of motion improvement 3',
        title: 'Range of Motion Improvement'
    },
    {
        type: 'image',
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591681/clients_image6_uzr4vt.jpg',
        alt: 'Range of motion improvement 4',
        title: 'Range of Motion Improvement'
    },
    {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749591787/client_post2_fmcnhj.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749591787/client_post2_fmcnhj.jpg',
        alt: "Treatment demonstration video",
        autoPlay: true,
        muted: true,
        controls: true,
    },
    {
        type: "video",
        sources: [
          {
            src: 'https://res.cloudinary.com/diydpxavd/video/upload/v1749591797/studio_rozdo6.mp4',
            type: "video/mp4",
          }
        ],
        thumbnail: 'https://res.cloudinary.com/diydpxavd/video/upload/c_fill,h_300,w_400,so_1/v1749591797/studio_rozdo6.jpg',
        alt: "Studio tour video",
        autoPlay: true,
        muted: true,
        controls: true,
    },
    {
        type: "image",
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591677/clients_image2_imjikz.jpg',
        alt: 'Before and after treatment comparison 1',
        title: 'Before and After Treatment' 
    },
    {
        type: "image",
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591683/clients_image7_iubeia.png',
        alt: "Client treatment results 7",
    },
    {
        type: "image",
        src: 'https://res.cloudinary.com/diydpxavd/image/upload/v1749591684/clients_image8_k0iyow.jpg',
        alt: "Client treatment results 8",
    }
  ];

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
                    src={item.thumbnail} 
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