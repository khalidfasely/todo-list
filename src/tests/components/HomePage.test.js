import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../components/Header';
jest.mock('../../components/Header', () => () => <div>Header Component</div>);
jest.mock('../../components/NewItem', () => () => <div>New Item Component</div>);
jest.mock('../../components/TodoList', () => () => <div>Todo List Component</div>);


test('Should render HomePage component correctly', () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
});