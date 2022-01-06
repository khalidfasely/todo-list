import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import {
    setTodoList, startSetTodoList,
    addTodoItem, startAddTodoItem,
    deactiveTodoItem, startDeactiveTodoItem,
    removeTodoItem, startRemoveTodoItem
} from '../../actions/todoList';
import todoList from "../fixtures/todoList";
import database from '../../firebase/firebase';

const uid = 'someuserid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const listData = {};
    todoList.forEach(({ id, content, time, active, timeOfDeactive }) => {
        listData[id] = { content, time, active, timeOfDeactive };
    });
    database.ref(`users/${uid}/list`).set(listData).then(() => done());
});

test('should set up remove todo item action object', () => {
    const action = removeTodoItem('1');
    expect(action).toEqual({
        type: 'REMOVE_TODO_ITEM',
        id: '1'
    });
});

test('should remove todo item from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = todoList[0].id;
    store.dispatch(startRemoveTodoItem(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_TODO_ITEM',
            id
        });
        return database.ref(`users/${uid}/list/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup add item todo action object with provided value', () => {
    const action = addTodoItem(todoList[2]);
    expect(action).toEqual({
        type: 'ADD_TODO_ITEM',
        todoItem: todoList[2]
    });
});

test('should add item todo to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const itemData = {
        content: 'todo15',
        time: moment(0).format(),
        active: true,
        timeOfDeactive: ''
    };

    store.dispatch(startAddTodoItem(itemData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_TODO_ITEM',
            todoItem: {
                id: expect.any(String),
                ...itemData
            }
        });

        return database.ref(`users/${uid}/list/${actions[0].todoItem.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(itemData);
        done();
    }).catch((e) => {
        console.log('error', e);
    });
});

test('should add item todo with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const itemData = {};
    const itemDefault = {
        content: '',
        active: false,
        time: moment(0).toString(),
        timeOfDeactive: 0
    };

    store.dispatch(startAddTodoItem(itemData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_TODO_ITEM',
            todoItem: {
                id: expect.any(String),
                ...itemDefault
            }
        });

        return database.ref(`users/${uid}/list/${actions[0].todoItem.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(itemDefault);
        done();
    }).catch((e) => {
        console.log('error', e);
    });
});

test('should set up deactive todo item action object', () => {
    const updates = { active: false, timeOfDeactive: moment().format() };
    const action = deactiveTodoItem('5', updates);
    expect(action).toEqual({
        type: 'DEACTIVE_TODO_ITEM',
        id: '5',
        updates
    });
});

test('should deactive todo item in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = todoList[1].id;
    store.dispatch(startDeactiveTodoItem(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'DEACTIVE_TODO_ITEM',
            id,
            updates: {
                active: false,
                timeOfDeactive: moment().format()
            }
        });
        return database.ref(`users/${uid}/list/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().active).toBe(false);
        done();
    });
});

test('should setup set list action object with data', () => {
    const action = setTodoList(todoList);
    expect(action).toEqual({
        type: 'SET_TODO_LIST',
        todoList
    });
});

test('should fetch the list data from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetTodoList()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_TODO_LIST',
            todoList
        });
        done();
    }).catch((e) => {
        console.log('Error.', e);
    });
});