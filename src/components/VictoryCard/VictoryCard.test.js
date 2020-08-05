import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { VictoryCard } from './VictoryCard';

describe('VictoryCard Tests', () => {
  let mockResetGame;

  beforeEach(() => {
    mockResetGame = jest.fn();
  })

  it('should render the victory screen', () => {
    const { getByText, getByTestId } = render(<VictoryCard moveCount={4} resetGame={mockResetGame} />)

    expect(getByText('Congratulations!!!')).toBeInTheDocument();
    expect(getByText('You won!')).toBeInTheDocument();
    expect(getByText('You were successfully able to turn all the lights off to win the game!')).toBeInTheDocument();
    expect(getByTestId('move-counter')).toBeInTheDocument();
    expect(getByText('Try again?')).toBeInTheDocument();
  })

  it('a user should be able to click a button to reset the app.', () => {
    const { getByText } = render(<VictoryCard moveCount={5} resetGame={mockResetGame} />)

    const tryAgainButton = getByText('Try again?');
    fireEvent.click(tryAgainButton);

    expect(mockResetGame).toHaveBeenCalledTimes(1);
  })
})