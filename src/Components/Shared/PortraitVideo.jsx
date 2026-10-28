import React, { useRef, useEffect } from 'react';

const CLOUDINARY_VIDEO_BASE = 'https://res.cloudinary.com/diydpxavd/video/upload';

// publicId is the Cloudinary path after /upload/, e.g. "v1793220421/RBT_Main_V1_t8xzbe"
const PortraitVideo = ({ publicId, title, autoPlayInView = false, className = '' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (autoPlayInView) {
              video.play().catch((error) => {
                // Handle autoplay restrictions
                console.log('Autoplay prevented:', error);
              });
            }
          } else {
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
  }, [autoPlayInView]);

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        src={`${CLOUDINARY_VIDEO_BASE}/f_auto,q_auto,w_720/${publicId}.mp4`}
        poster={`${CLOUDINARY_VIDEO_BASE}/so_0,f_jpg,q_auto,w_720/${publicId}.jpg`}
        preload="none"
        playsInline
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        muted={autoPlayInView}
        loop={autoPlayInView}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full max-w-[350px] aspect-[9/16] rounded-2xl cursor-pointer"
        title={title}
      />
    </div>
  );
};

export default PortraitVideo;
