import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TestEvents from './TestEvents';
import "@testing-library/jest-dom/extend-expect"


it('increments counter', () => {
    const { getByTestId } = render(<TestEvents />);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent(1);
})

it('decrements counter', () => {
    const { getByTestId } = render(<TestEvents />);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent(-1);
})