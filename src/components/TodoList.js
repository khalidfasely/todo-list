import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => {
    return (
        <div>
            {
                todoList.length !== 0 ?
                todoList.map(todoItem => <TodoItem  key={todoItem.id} {...todoItem} />) :
                <div>Nothing to do</div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoList: state.todoList
});

export default connect(mapStateToProps)(TodoList);