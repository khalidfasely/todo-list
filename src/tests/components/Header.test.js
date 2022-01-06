import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../../components/Header';

test('Should render Header component correctly', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});

test('Should render logout button', () => {
  render(<Header />);
  const buttonElement = screen.getByText(/logout/i);
  expect(buttonElement).toBeInTheDocument();
});

test('should call startLogout on button click', () => {
  const onLogOutSpy = jest.fn();
  const { getByTestId } = render(<Header startLogout={onLogOutSpy} />);
  const logoutButtonEl = getByTestId('logout-button');
  fireEvent.click(logoutButtonEl);
  expect(onLogOutSpy).toHaveBeenCalled();
});