import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NameList from './NameList';

describe('<NameList />', () => {
  test('it should mount', () => {
    render(<NameList />);
    
    const nameList = screen.getByTestId('NameList');

    expect(nameList).toBeInTheDocument();
  });
});