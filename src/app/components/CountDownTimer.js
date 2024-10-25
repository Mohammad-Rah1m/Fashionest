'use client'
import { useState, useEffect } from 'react';

const CountdownTimer = ({ hours = 15, minutes = 25, seconds = 30 }) => {
  // State for holding the total time in seconds
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);

  // Effect to handle the countdown logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Convert the total time in seconds back to hours, minutes, and seconds
  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;

    // Format each unit to always show two digits
    return `${String(hrs).padStart(2, '0')}H:${String(mins).padStart(2, '0')}M:${String(secs).padStart(2, '0')}S`;
  };

  return (
    <div>
      <p className='font-bold'>{formatTime()}</p>
    </div>
  );
};

export default CountdownTimer;
