// TodoList Reducer

const todoListReducerDefaultState = [];

export default (state = todoListReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            return [
                ...state,
                action.todoItem
            ];
        case 'DEACTIVE_TODO_ITEM':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item;
                }
            });
        case 'REMOVE_TODO_ITEM':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_TODO_LIST':
            return action.todoList;
        default:
            return state;
    }
};