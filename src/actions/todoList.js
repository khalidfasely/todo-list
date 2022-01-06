import moment from 'moment';
import database from '../firebase/firebase';

// Add Todo Item
export const addTodoItem = (todoItem) => ({
    type: 'ADD_TODO_ITEM',
    todoItem
});

export const startAddTodoItem = (todoItemData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            content = '',
            active = false,
            time = moment(),
            timeOfDeactive = 0
        } = todoItemData;
        const todoItem = { content, active, time, timeOfDeactive };

        return database.ref(`users/${uid}/list`).push(todoItem).then((ref) => {
            dispatch(addTodoItem({
                id: ref.key,
                ...todoItem
            }));
        });
    };
};

// Deactive Item List
export const deactiveTodoItem = (id, updates) => ({
    type: 'DEACTIVE_TODO_ITEM',
    id,
    updates
});

export const startDeactiveTodoItem = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const updates = {
            active: false,
            timeOfDeactive: moment().format()
        };

        return database.ref(`users/${uid}/list/${id}`).update(updates).then(() => {
            dispatch(deactiveTodoItem(id, updates));
        });
    };
};

// Remove Item from List
export const removeTodoItem = (id) => ({
    type: 'REMOVE_TODO_ITEM',
    id
});

export const startRemoveTodoItem = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        return database.ref(`users/${uid}/list/${id}`).remove().then(() => {
            dispatch(removeTodoItem(id));
        });
    };
};

//Set Todo List
export const setTodoList = (todoList) => ({
    type: 'SET_TODO_LIST',
    todoList
});

export const startSetTodoList = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/list`)
            .once('value')
            .then((snapshot) => {
                const todoListData = [];

                snapshot.forEach((childSnapshot) => {
                    todoListData.push({
                      id: childSnapshot.key,
                      ...childSnapshot.val()
                    });
                });
                dispatch(setTodoList(todoListData));
            });
    };
};