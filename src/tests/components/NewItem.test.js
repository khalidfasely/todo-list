import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NewItem } from '../../components/NewItem';

let startAddTodoItem;

beforeEach(() => {
    startAddTodoItem: jest.fn()
});

test('Should render NewItem component correctly', () => {
    const { asFragment } = render(<NewItem />);
    expect(asFragment()).toMatchSnapshot();
});

test('Should change input value correctly', () => {
    const { getByTestId } = render(<NewItem />);

    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
        target: {
            value: 'new todo item'
        }
    });
    expect(inputEl.value).toBe('new todo item');
});

//test('Should call startAddTodoItem on form submit', () => {
//    const onStartAddTodoItemSpy = jest.fn();
//    
//    const { getByTestId } = render(<NewItem startAddTodoItem={onStartAddTodoItemSpy} />);
//    
//    const formEl = getByTestId('form');
//    
//    fireEvent.submit(formEl);
//    
//    expect(onStartAddTodoItemSpy).toHaveBeenCalledTimes(0);
//
//    const inputEl = getByTestId('input');
//
//    fireEvent.change(inputEl, {
//        target: {
//            value: 'new todo item'
//        }
//    });
//
//    expect(onStartAddTodoItemSpy).toHaveBeenCalledTimes(1);
//});

test('Should render error on form submit with empty input', () => {
    const { getByTestId } = render(<NewItem />);
    
    const formEl = getByTestId('form');
    
    fireEvent.submit(formEl);

    const errorElement = screen.getByText(/Should fill the input!/i);
    expect(errorElement).toBeInTheDocument();
});