import NewItem from "./NewItem";
import Header from "./Header";
import TodoList from "./TodoList";

const HomePage = () => {
    return (
        <div>
            <Header />
            <NewItem />
            <TodoList />
        </div>
    )
};

export default HomePage;