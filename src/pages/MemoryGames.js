import React, { useState } from 'react';
import HeaderWithSidebar from '../Sidebar';

function Memorygames() {
  const [selectedGame, setSelectedGame] = useState('cardMatching'); // Track which game to show

  return (
    <div>
      <HeaderWithSidebar />
      <div className="content">
        <h1>Memory Games</h1>
        <select onChange={(e) => setSelectedGame(e.target.value)} value={selectedGame}>
          <option value="cardMatching">Card Matching Game</option>
          <option value="numberSequence">Number Sequence Memory Game</option>
        </select>
        {selectedGame === 'cardMatching' && <CardMatchingGame />}
        {selectedGame === 'numberSequence' && <NumberSequenceGame />}
      </div>
    </div>
  );
}

function CardMatchingGame() {
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);

  function shuffleCards() {
    const cardValues = ['A', 'B', 'C', 'D'];
    const doubledCards = [...cardValues, ...cardValues];
    return doubledCards.sort(() => Math.random() - 0.5).map((value, index) => ({
      id: index,
      value,
      flipped: false,
    }));
  }

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards, updatedCards);
    }
  };

  const checkForMatch = (flipped, updatedCards) => {
    const [firstCard, secondCard] = flipped.map((id) =>
      updatedCards.find((card) => card.id === id)
    );

    if (firstCard.value === secondCard.value) {
      setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
      setScore(score + 1);
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((card) =>
            flipped.includes(card.id) ? { ...card, flipped: false } : card
          )
        );
      }, 1000);
    }

    setFlippedCards([]);
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
  };

  return (
    <div>
      <h2>Card Matching Game</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped || matchedCards.includes(card.id) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.flipped || matchedCards.includes(card.id) ? card.value : '?'}
          </div>
        ))}
      </div>
      <p>Your current score: {score}</p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

function NumberSequenceGame() {
  const [sequence, setSequence] = useState([]);
  const [inputSequence, setInputSequence] = useState([]);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState('Click Start to begin!');
  const [score, setScore] = useState(0);

  const generateSequence = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);
  };

  const startGame = () => {
    const newSequence = generateSequence(round);
    setSequence(newSequence);
    setInputSequence([]);
    setMessage('Memorize this sequence!');
    alert(`Memorize: ${newSequence.join(' ')}`); // Show sequence to the user
  };

  const handleInput = (value) => {
    const newInputSequence = [...inputSequence, value];
    setInputSequence(newInputSequence);

    // Check if the sequence matches
    if (sequence[newInputSequence.length - 1] !== value) {
      setMessage('Wrong sequence! Game over.');
      setRound(1);
      setScore(0);
      return;
    }

    if (newInputSequence.length === sequence.length) {
      setMessage('Correct! Moving to the next round.');
      setRound(round + 1);
      setScore(score + 1);
      setTimeout(() => startGame(), 1000);
    }
  };

  return (
    <div>
      <h2>Number Sequence Memory Game</h2>
      <p>{message}</p>
      <div className="number-buttons">
        {Array.from({ length: 9 }, (_, i) => (
          <button key={i} onClick={() => handleInput(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      <p>Your score: {score}</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default Memorygames;
