import React from 'react';
import './Square.css';

export const Square = ({ square, toggleSquares }) => {
  const squareStyle = square.lightsOn ? 'lights-on' : '';

  return (
    <div 
      className={`square ${squareStyle}`}
      onClick={() => toggleSquares(square.id)}
      data-testid="game-tile"
    ></div>
  )
}
