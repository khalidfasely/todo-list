import moment from 'moment';
import todoListReducer from '../../reducers/todoList';
import todoList from '../fixtures/todoList';

test('should set default state', () => {
    const state = todoListReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove todo item by id', () => {
    const action = {
        type: 'REMOVE_TODO_ITEM',
        id: todoList[1].id
    };
    const state = todoListReducer(todoList, action);
    expect(state).toEqual([ todoList[0], todoList[2] ]);
});

test('should not remove todo item if id not found', () => {
    const action = {
        type: 'REMOVE_TODO_ITEM',
        id: '-1'
    };
    const state = todoListReducer(todoList, action);
    expect(state).toEqual(todoList);
});

test('should add an todo item', () => {
    const newItem = {
        id: '9',
        content: 'new test item todo',
        time: moment(0).format(),
        active: true,
        timeOfDeactive: ''
    };
    const action = {
        type: 'ADD_TODO_ITEM',
        todoItem: newItem
    };
    const state = todoListReducer(todoList, action);
    expect(state).toEqual([ ...todoList, newItem ]);
});

test('should deactivate a todo item', () => {
    const updates = {
        active: false,
        timeOfDeactive: moment(6, 'days').valueOf()
    };
    const action = {
        type: 'DEACTIVE_TODO_ITEM',
        id: todoList[1].id,
        updates
    };
    const state = todoListReducer(todoList, action);
    expect(state[1].active).toBe(false);
    expect(state[1].timeOfDeactive).toBe(moment(6, 'days').valueOf());
});

test('should not deactive todo item if item id not found', () => {
    const updates = {
        active: false,
        timeOfDeactive: moment(6, 'days').valueOf()
    };
    const action = {
        type: 'DEACTIVE_TODO_ITEM',
        id: '-1',
        updates
    };
    const state = todoListReducer(todoList, action);
    expect(state).toEqual(todoList);
});

test('should set todo list', () => {
    const action = {
        type: 'SET_TODO_LIST',
        todoList: [todoList[1]]
    };
    const state = todoListReducer(todoList, action);
    expect(state).toEqual([todoList[1]]);
});