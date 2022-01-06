import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoList } from '../../components/TodoList';
import todoList from '../fixtures/todoList';
jest.mock('../../components/TodoItem', () => () => <div>Todo Item Component</div>);

test('Should render TodoList component correctly with empty list', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should render TodoList component correctly', () => {
    const { asFragment } = render(<TodoList todoList={todoList} />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should render nothing todo paragraph if empty list', () => {
    render(<TodoList />);
    const nothingElement = screen.getByText(/nothing todo/i);
    expect(nothingElement).toBeInTheDocument();
});