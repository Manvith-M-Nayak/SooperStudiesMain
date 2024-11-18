import React, { useState } from 'react';
import HeaderWithSidebar from '../Sidebar';

function Memorygames() {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Memory Games</h1>
        <p>Test and improve your memory with various games!</p>
        <button onClick={increaseScore}>Increase Score</button>
        <p>Your current score: {score}</p>
      </div>
    </div>
  );
}

export default Memorygames;
