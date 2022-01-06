import { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { startAddTodoItem } from '../actions/todoList';

export const NewItem = ({ startAddTodoItem }) => {
    const [ newItem, setNewItem ] = useState('');
    const [ error, setError ] = useState('');
    //const [ todoList, setTodoList ] = useState([]);

    const onNewItemChange = (e) => {
        setNewItem(e.target.value);
    };

    const onAddItemToList = (e) => {
        setError('');
        e.preventDefault();
        const newTodoItem = {
            content: newItem,
            active: true,
            time: moment().format(),
            timeOfDeactive: undefined
        };
        if(newItem) {
            startAddTodoItem(newTodoItem);
            setNewItem('');
        } else {
            setError('Should fill the input!');
        };
    };

    //const onRemoveItem = (index) => {
    //    setTodoList([...todoList.filter((item, indexL) => index !== indexL)]);
    //};

    //const onDeactiveItem = (index) => {
    //    console.log(`Item number ${index} is done.`);
    //};

    return (
        <div>
            <form data-testid='form' onSubmit={onAddItemToList}>
                {error && <p>{error}</p>}
                <input
                    data-testid='input'
                    placeholder="Add Something To do later!"
                    type='text'
                    value={newItem}
                    onChange={onNewItemChange}
                />
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startAddTodoItem: (newTodoItem) => dispatch(startAddTodoItem(newTodoItem))
});

export default connect(undefined, mapDispatchToProps)(NewItem);