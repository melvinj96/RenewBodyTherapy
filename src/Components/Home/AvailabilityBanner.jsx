import { useEffect, useState } from 'react';
import { getActiveBannerPeriod } from '../../config/unavailableDates';
import '../../assets/css/Home.css';

const AvailabilityBanner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    setBanner(getActiveBannerPeriod(new Date()) ?? null);
  }, []);

  if (!banner) {
    return null;
  }

  return (
    <div className="availability-banner">
      <div className="availability-content">
        <span className="availability-text">{banner.message}</span>
      </div>
    </div>
  );
};

export default AvailabilityBanner;
