import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import TestAsync from './TestAsync';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('increments counter after 0.5s', async () => {
    const { getByTestId, getByText } = render(<TestAsync />);
    const button = getByTestId('button-up');
    fireEvent.click(button);
    const counter = await waitForElement(() => getByText('1'));
    expect(counter).toHaveTextContent(1);

})