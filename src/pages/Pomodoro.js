import React, { useState, useEffect } from 'react';
import HeaderWithSidebar from '../Sidebar';

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(25 * 60); 
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCycles, setPomodoroCycles] = useState(0); 

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(minutes * 60 + seconds);
    setIsRunning(false);
  };
  const handleTimeChange = () => {
    setTime(minutes * 60 + seconds); 
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      alert("Pomodoro session complete!");
      setPomodoroCycles(pomodoroCycles + 1);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, pomodoroCycles]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Pomodoro Timer</h1>

        <div>
          <label>
            Minutes:
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              min="1"
            />
          </label>
          <label>
            Seconds:
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(Number(e.target.value))}
              min="0"
              max="59"
            />
          </label>
          <button onClick={handleTimeChange}>Set Time</button>
        </div>

        <p>{formatTime(time)}</p>

        <button onClick={toggleTimer}>
          {isRunning ? 'Stop' : 'Start'} Timer
        </button>

        <button onClick={resetTimer}>Reset Timer</button>

        <p>Pomodoro Cycles Completed:{pomodoroCycles}</p>
      </div>
    </div>
  );
}

export default Pomodoro;
