import { useState } from 'react';

const NewItem = () => {
    const [ newItem, setNewItem ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const onNewItemChange = (e) => {
        setNewItem(e.target.value);
    };

    const onAddItemToList = (e) => {
        e.preventDefault();
        setTodoList([newItem, ...todoList]);
        setNewItem('');
    };

    const onRemoveItem = (index) => {
        setTodoList([...todoList.filter((item, indexL) => index !== indexL)]);
    };

    const onDeactiveItem = (index) => {
        console.log(`Item number ${index} is done.`);
    };

    return (
        <div>
            <form onSubmit={onAddItemToList}>
                <input
                    placeholder="Add Something To do later!"
                    type='text'
                    value={newItem}
                    onChange={onNewItemChange}
                />
            </form>
            {
                todoList.length !== 0 ?
                todoList.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                        <button onClick={() => onDeactiveItem(index)}>Done</button>
                        <i>Already done.</i>
                        <button onClick={() => onRemoveItem(index)}>X</button>
                    </div>
                )) :
                <div>Nothing Todo</div>
            }
        </div>
    );
};

export default NewItem;