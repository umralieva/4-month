import React, {useState} from 'react';
import {UserList} from "../../components/userList/UserList";

function UserPage(props) {
    const [user, setUser] = useState([])

    const getUser = () => {
        setUser(["Work1", "Work2"])
    }
    return (
        <div>
            <button onClick={getUser}>get</button>
            <UserList userList={user}/>
        </div>
    );
}

export default UserPage;