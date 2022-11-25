import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sample from './Sample';

describe('<Sample />', () => {
  test('it should mount', () => {
    render(<Sample value={10} />);

    const sample = screen.getByTestId('Sample');

    expect(sample).toBeInTheDocument();
  });
});