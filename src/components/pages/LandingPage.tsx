import React, { useEffect, useRef } from 'react';

const LandingPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video && video.currentTime >= 5) { // Adjust the time to where you want the video to stop
        video.pause();
      }
    };

    video?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="landing-page">
    </div>
  );
};

export default LandingPage;