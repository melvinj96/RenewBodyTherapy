import React, { useState, useEffect } from 'react';
import '../../assets/css/Home.css';

const AvailabilityBanner = () => {
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [unavailableMessage, setUnavailableMessage] = useState('');

  useEffect(() => {
    // Define your unavailable date ranges here
    const unavailableRanges = [
      {
        startDate: new Date('2026-01-21'),
        endDate: new Date('2026-02-10'),
        message: 'No appointments will be available between 1st February and 5th February, 2026, however I am still continuing to accept bookings for other dates. Thank you for your understanding.'
      }
      // Add more date ranges as needed
    ];

    const currentDate = new Date();
    // Check if current date falls within any unavailable range
    const currentUnavailableRange = unavailableRanges.find(range => 
      currentDate >= range.startDate && currentDate <= range.endDate
    );
    if (currentUnavailableRange) {
      setIsUnavailable(true);
      setUnavailableMessage(currentUnavailableRange.message);
    } else {
      setIsUnavailable(false);
    }
  }, []);

  // Don't render anything if available
  if (!isUnavailable) {
    return null;
  }

  return (
    <div className="availability-banner">
      <div className="availability-content">
        <span className="availability-text">{unavailableMessage}</span>
      </div>
    </div>
  );
};

export default AvailabilityBanner;
