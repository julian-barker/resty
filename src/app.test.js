import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';

import App from './app';

jest.mock('axios');

describe('App Component', () => {
  test('submitting form produces result', () => {
    render(<App />);

    const form = screen.getByTestId('form-form');
    const button = screen.getByTestId('form-button');
    const input = screen.getByTestId('form-input');

    fireEvent.change(input, {target: {value: 'https://swapi.dev/api/people/1'}});
    // fireEvent.click(button);
    fireEvent.submit(form);

    const body = screen.getByTestId('result-body');

    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('Body:');
  });

  test('changes state appropriately', () => {
    render(<App />);

    const input = screen.getByTestId('welcome-input');
    fireEvent.change(input, {target: {value: 'Ryan'}});
    const h1 = screen.getByTestId('welcome-h1');

    expect(h1).toHaveTextContent('Welcome Ryan');
  });
});
