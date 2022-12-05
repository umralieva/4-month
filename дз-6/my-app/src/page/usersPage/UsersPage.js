import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {
    const [userinfo, setUser] = useState([])

    const getUser = () => {
        fetch`(https://jsonplaceholder.typicode.com/users)`
            .then(response => response.json())
            .then(data => setUser(data))
    }
    return (
        <>
            <h1>Users list</h1>
            <button onClick={getUser}>get</button>
            <UsersList userList={userinfo}/>
        </>
    );
}

export default UsersPage;