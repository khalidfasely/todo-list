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
        <div className="item-container">
            <h4 className="item__content">{content}</h4>
            <div className="item__right">
                <div className="item__time">{moment(time).fromNow()}</div>
                {
                    active ?
                    <abbr title="Already done?">
                        <button className="item__button deactive" data-testid='done-button' onClick={onDeactiveTodoItem}>&#x2713;</button>
                    </abbr> :
                    <abbr title={`Done ${moment(timeOfDeactive).fromNow()}`}>
                        <button className="item__button deactivated" disabled={true}>&#x2713;</button>
                    </abbr>
                }
                <abbr title="Remove From List">
                    <button className="item__button remove" data-testid='x-button' onClick={onRemoveTodoItem}>X</button>
                </abbr>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveTodoItem: (id) => dispatch(startRemoveTodoItem(id)),
    startDeactiveTodoItem: (id) => dispatch(startDeactiveTodoItem(id))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);