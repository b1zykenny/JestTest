import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Hello, world!/i);
  const btn = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i);

  expect(title).toBeInTheDocument();
  expect(title).toHaveStyle({ color: 'blue' });
  expect(btn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

