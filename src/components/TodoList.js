import { connect } from 'react-redux';
import TodoItem from './TodoItem';

export const TodoList = ({ todoList = [] }) => {
    return (
        <div className='list-container'>
            {
                todoList.length !== 0 ?
                todoList.map(todoItem => <TodoItem  key={todoItem.id} {...todoItem} />) :
                <div className='list-empty'>Nothing Todo</div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

export default connect(mapStateToProps)(TodoList);