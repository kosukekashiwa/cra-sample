import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home tests', () => {
  describe('Initial display tests', () => {
    test('renders title', () => {
      render(<Home />);

      screen.getByText('Create React App Sample');
    });
  });
});
