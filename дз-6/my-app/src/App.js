import logo from './logo.svg';
import './App.css';
import UsersPage from "./page/usersPage/UsersPage";
import UsersList from "./components/usersList/UsersList";

function App() {
    return (
        <div className="App">
            <UsersPage/>
            <UsersList/>
        </div>
    );
}

export default App;
