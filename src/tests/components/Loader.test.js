import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../../components/Loader';

test('Should render Loader component correctly', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
});