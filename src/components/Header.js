import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => {
    return (
        <header className="App-header">
            Todo List
            <button className="button" onClick={startLogout}>Logout</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);