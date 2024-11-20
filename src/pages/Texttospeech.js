import React, { useState } from 'react';
import HeaderWithSidebar from '../Sidebar';

function Texttospeech() {
  // States for the text input, rate, pitch, and speech status
  const [text, setText] = useState('');
  const [rate, setRate] = useState(1); // Default rate is 1 (normal speed)
  const [pitch, setPitch] = useState(1); // Default pitch is 1 (normal pitch)

  // Function to handle the speech synthesis
  const handleSpeak = () => {
    if (text !== '') {
      const utterance = new SpeechSynthesisUtterance(text); // Create a new utterance object with the text
      utterance.rate = rate;  // Set the speech rate
      utterance.pitch = pitch;  // Set the speech pitch

      // Speak the utterance
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
        <HeaderWithSidebar/>
      <h1>Text to Speech</h1>
      
      {/* Text input for the user to type */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
        rows="5"
        cols="40"
      ></textarea>

      <div>
        {/* Input for adjusting speech rate (speed) */}
        <label htmlFor="rate">Speech Rate: {rate}</label>
        <input
          id="rate"
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>

      <div>
        {/* Input for adjusting speech pitch */}
        <label htmlFor="pitch">Speech Pitch: {pitch}</label>
        <input
          id="pitch"
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
        />
      </div>

      {/* Button to trigger speech */}
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
}

export default Texttospeech;
