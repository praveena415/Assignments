import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [timer, setTimer] = useState(10);
  const [counting, setCounting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (counting && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) {
      setCounting(false);
      setShowConfirm(false);
      setTimer(10); // Reset timer after timeout
    }

    return () => clearInterval(interval);
  }, [counting, timer]);

  const handleFetchClick = () => {
    setShowConfirm(true);
    setTimer(10);
    setCounting(true);
  };

  const handleYes = () => {
    setCounting(false);
    navigate('/data');
  };

  const handleNo = () => {
    setCounting(false);
    setShowConfirm(false);
    setTimer(10); // Reset on cancel
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {!showConfirm && (
        <button onClick={handleFetchClick} style={{ fontSize: '20px', padding: '10px 20px' }}>
          Fetch Data
        </button>
      )}

      {showConfirm && (
        <div>
          <h3>Are you sure you want to fetch the data?</h3>
          <h1 style={{ color: timer > 5 ? 'green' : 'red' }}>{timer}</h1>
          <button onClick={handleYes} style={{ marginRight: '10px' }}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      )}
    </div>
  );
}

export default Home;
