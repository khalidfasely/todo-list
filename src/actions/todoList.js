import { getDatabase, ref, push, remove, update, get, child } from "firebase/database";
import moment from 'moment';

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
            time = moment(0).toString(),
            timeOfDeactive = 0
        } = todoItemData;
        const todoItem = { content, active, time, timeOfDeactive };

        return push(ref(getDatabase(), `users/${uid}/list`), todoItem).then((ref) => {
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

        return update(ref(getDatabase(), `users/${uid}/list/${id}`), updates).then(() => {
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

        return remove(ref(getDatabase(), `users/${uid}/list/${id}`)).then(() => {
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

        const dbRef = ref(getDatabase());
        return get(child(dbRef, `users/${uid}/list`))
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