import moment from "moment"
import { connect } from "react-redux";
import { startDeactiveTodoItem, startRemoveTodoItem } from "../actions/todoList";

export const TodoItem = ({
        id,
        content,
        time,
        active,
        timeOfDeactive,
        startDeactiveTodoItem,
        startRemoveTodoItem
    }) => {
    
    const onDeactiveTodoItem = () => {
        startDeactiveTodoItem(id);
    };

    const onRemoveTodoItem = () => {
        startRemoveTodoItem(id);
    };

    return (
        <div>
            <div>{content}</div>
            <div>{moment(time).fromNow()}</div>
            {
                active ?
                <button data-testid='done-button' onClick={onDeactiveTodoItem}>Done</button> :
                <abbr title={moment(timeOfDeactive).fromNow()}>
                    <button disabled={true}>Already Done</button>
                </abbr>
            }
            <button data-testid='x-button' onClick={onRemoveTodoItem}>X</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveTodoItem: (id) => dispatch(startRemoveTodoItem(id)),
    startDeactiveTodoItem: (id) => dispatch(startDeactiveTodoItem(id))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);