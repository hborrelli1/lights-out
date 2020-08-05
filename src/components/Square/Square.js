import React from 'react';
import './Square.css';

export const Square = ({ square }) => {
  const squareStyle = square.lightsOn ? 'lights-on' : '';

  return (
    <div className={`square ${squareStyle}`}>
      
    </div>
  )
}
