import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';
import '@testing-library/jest-dom'

test('A página deve renderizar dois botões e o número "0"', () => {
  renderWithRedux(<App />);
  const buttonAdicionar = screen.queryAllByRole('button');

  expect(buttonAdicionar.length).toBe(2);
  expect(screen.getByText('0')).toBeInTheDocument();
});