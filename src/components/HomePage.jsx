import NewItem from "./NewItem";
import Header from "./Header";
import TodoList from "./TodoList";

const HomePage = () => {
    return (
        <div className="app">
            <div>
                <Header />
                <div className="sections-container">
                    <div className="content-container">
                        <NewItem />
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;