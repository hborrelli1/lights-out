import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App Test', () => {
  it('should render app to DOM', () => {
    const { getByText } = render(<App />)

    const headerText = 'Lights Out';
    const descriptionText = 'Clicking on a cell toggles that cell and each of its immediate neighbors. The goal is to turn out all the lights, ideally with the minimum number of clicks.'
    const numOfMoves = 'Number of moves: 0';
    const resetButton = 'Reset Game'
    expect(getByText(headerText)).toBeInTheDocument();
    expect(getByText(descriptionText)).toBeInTheDocument();
    expect(getByText(numOfMoves)).toBeInTheDocument();
    expect(getByText(resetButton)).toBeInTheDocument();
  });
});