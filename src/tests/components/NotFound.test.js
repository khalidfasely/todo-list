import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../components/NotFound';

test('Should render NotFound component correctly', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should render go home link', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/go home./i);
    expect(linkElement).toBeInTheDocument();
});