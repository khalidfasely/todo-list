import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
    return (
        <header className="App-header">
            Todo List
            <button data-testid='logout-button' className="button" onClick={startLogout}>Logout</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);