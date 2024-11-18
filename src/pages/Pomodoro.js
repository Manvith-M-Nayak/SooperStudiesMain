import React, { useState } from 'react';
import HeaderWithSidebar from '../Sidebar';

function Pomodoro() {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  React.useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      alert("Pomodoro session complete!");
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Pomodoro Timer</h1>
        <p>{`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</p>
        <button onClick={toggleTimer}>
          {isRunning ? 'Stop' : 'Start'} Timer
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
