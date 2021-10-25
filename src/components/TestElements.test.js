import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements';
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup);

it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('counter')).toHaveTextContent(0)
});

it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-down')).toBeDisabled()
});