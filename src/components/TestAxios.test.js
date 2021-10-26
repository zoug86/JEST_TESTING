import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import TestAxios from './TestAxios';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

jest.mock('axios');

it('should display a loading test', () => {
    const { getByTestId } = render(<TestAxios />);
    expect(getByTestId('loading')).toHaveTextContent('Loading...');
})

it('should load and display the data', async () => {
    const url = '/greeting'
    const { getByTestId } = render(<TestAxios url={url} />)

    axiosMock.get.mockResolvedValueOnce({
        data: { greeting: 'hello there' },
    })

    fireEvent.click(getByTestId('fetch-data'))

    const greetingData = await waitForElement(() => getByTestId('show-data'))

    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(url)
    expect(greetingData).toHaveTextContent('hello there')
})