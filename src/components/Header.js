import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
    return (
        <header className="header">
            <div className="header__logout-button-container">
                <button
                    className="header__logout-button"
                    data-testid='logout-button'
                    onClick={startLogout}
                >
                    Logout
                </button>
            </div>
            <h1 className="header__title">
                Todo List
            </h1>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);