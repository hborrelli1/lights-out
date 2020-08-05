import React from 'react';
import './VictoryCard.css';

export const VictoryCard = ({ moveCount, resetGame }) => {
  return (
    <section className="victory-container">
      <div className="victory-card">
        <h2>Congratulations!!!</h2>
        <h3>You won!</h3>
        <p>You were successfully able to turn all the lights off to win the game!</p>
        <p>It took you <span>{moveCount}</span> moves to solve the puzzle.</p>
        <button onClick={() => resetGame()}>Try again?</button>
      </div>
    </section>
  )
}
