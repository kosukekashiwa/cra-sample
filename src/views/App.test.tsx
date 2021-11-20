import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  describe('Initial display tests', () => {
    test('renders title', () => {
      render(<App />);

      screen.getByText('Create React App Sample');
    });
  });
});
