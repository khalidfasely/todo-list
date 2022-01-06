import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../../components/LoginPage';

test('Should render LoginPage component correctly', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should render login with google button', () => {
    render(<Login />);
    const buttonElement = screen.getByText(/login with google/i);
    expect(buttonElement).toBeInTheDocument();
});

test('Should call startLogin on button click', () => {
    const onLogInSpy = jest.fn();
    const { getByTestId } = render(<Login startLogin={onLogInSpy} />);
    const loginButtonEl = getByTestId('login-button');
    fireEvent.click(loginButtonEl);
    expect(onLogInSpy).toHaveBeenCalled();
});