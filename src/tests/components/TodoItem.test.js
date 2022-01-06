import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../components/TodoItem';
import todoList from '../fixtures/todoList';

let props;

beforeEach(() => {
    props = {
        ...todoList[0],
        startDeactiveTodoItem: jest.fn(),
        startRemoveTodoItem: jest.fn()
    }
});

test('Should render TodoItem component correctly with active item', () => {
    const { asFragment } = render(<TodoItem {...props} />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should render TodoItem component correctly with unactive item', () => {
    const { asFragment } = render(<TodoItem {...{...props, ...todoList[2]}} />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should call onDeactiveTodoItem when Done button click', () => {
    const { getByTestId } = render(<TodoItem {...props} />);
    const doneButtonEl = getByTestId('done-button');
    fireEvent.click(doneButtonEl);
    expect(props.startDeactiveTodoItem).toHaveBeenCalled();
});

test('Should call onRemoveTodoItem when X button click', () => {
    const { getByTestId } = render(<TodoItem {...props} />);
    const xButtonEl = getByTestId('x-button');
    fireEvent.click(xButtonEl);
    expect(props.startRemoveTodoItem).toHaveBeenCalled();
});