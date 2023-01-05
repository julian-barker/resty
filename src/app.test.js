import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from './app';

const server = setupServer(
  rest.get('/testGet', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {
          name: 'Julian',
          message: 'Proof of life.'
        },
      ],
    }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App Component', () => {
  test('submitting form produces result', async () => {
    render(<App />);

    const form = screen.getByTestId('form-form');
    const input = screen.getByTestId('form-input');
    // const button = screen.getByTestId('form-button');

    fireEvent.change(input, {target: {value: '/testGet'}});
    fireEvent.submit(form);
    // fireEvent.click(button);

    const body = await screen.findByTestId('result-body');
    console.log('🚀 ~ file: app.test.js:41 ~ test ~ body', body);


    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('Body:');
  });

});
