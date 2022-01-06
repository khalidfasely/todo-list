import moment from "moment"
import { connect } from "react-redux";
import { startDeactiveTodoItem, startRemoveTodoItem } from "../actions/todoList";

const TodoItem = ({ id , content, time, active, timeOfDeactive, startDeactiveTodoItem, startRemoveTodoItem }) => {
    
    const onDeactiveTodoItem = () => {
        startDeactiveTodoItem(id);
    };

    const onRemoveTodoItem = () => {
        startRemoveTodoItem(id);
    };

    return (
        <div>
            {content}
            <div>{moment(time).fromNow()}</div>
            {
                active ?
                <button onClick={onDeactiveTodoItem}>Done</button> :
                <abbr title={moment(timeOfDeactive).fromNow()}>
                    <button disabled={true}>Already Done</button>
                </abbr>
            }
            <button onClick={onRemoveTodoItem}>X</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveTodoItem: (id) => dispatch(startRemoveTodoItem(id)),
    startDeactiveTodoItem: (id) => dispatch(startDeactiveTodoItem(id))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);