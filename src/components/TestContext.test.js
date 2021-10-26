import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CounterProvider, { CounterContext, Counter } from './TestContext';
import '@testing-library/jest-dom/extend-expect';

const renderWithContext = (component) => {
    return render(
        <CounterProvider value={CounterContext}>
            {component}
        </CounterProvider>
    );
}

afterEach(cleanup);

it('checks if initial state is equal to 0', () => {
    const { getByTestId } = renderWithContext(<Counter />);
    const counter = getByTestId('counter');
    expect(counter).toHaveTextContent('0');
})

it('increments the counter', () => {
    const { getByTestId } = renderWithContext(<Counter />)

    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decrements the counter', () => {
    const { getByTestId } = renderWithContext(<Counter />)

    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('-1')
})