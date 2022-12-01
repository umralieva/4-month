import React, {useState} from 'react';
import {UserList} from "../../components/userList/UserList";

function PortfolioPage(props) {
    const [work, setWork] = useState([])

    const getWork = () => {
        setWork(["Work1","Work2"])
    }

    return (
        <div>
            <button onClick={getWork}>get</button>
            <UserList userList={work}/>
        </div>
    );
}

export default PortfolioPage;