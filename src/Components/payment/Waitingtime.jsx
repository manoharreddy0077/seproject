import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Waitingtime.css'; // Import your CSS file

const Waitingtime = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(45);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      } else {
        // Navigate to the next page after 45 seconds
        clearInterval(timer);
        navigate('./Orderready');
      }
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [secondsRemaining, navigate]);

  return (
    <div className="container">
      <h2>Your order is being prepared</h2>
      <p>Estimated time remaining</p>
      <h1>{secondsRemaining}</h1>
      <p className='seconds'>seconds</p>
    </div>
  );
};

export default Waitingtime;
