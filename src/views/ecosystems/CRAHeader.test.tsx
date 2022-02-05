import { render, screen } from '@testing-library/react';
import CRAHeader from './CRAHeader';

describe('CRAHeader tests', () => {
  describe('Initial display tests', () => {
    test('renders title', () => {
      render(
        <CRAHeader
          onApptitleClick={() => {}}
          onDashboardButtonClick={() => {}}
          onDataListButtonClick={() => {}}
        />,
      );

      screen.getByText('CRA System');
    });
  });
});
