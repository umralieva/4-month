import React, {useEffect, useState} from 'react';
import User from "../../components/user/User";

function About(props) {
    const [about, setAbout] = useState([])
    const [loading, setLoading] = useState(false)

    const getUser = () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => {
                setAbout(data)
                setLoading(false)
            })
    }

    useEffect(getUser,[]);

    return (
        <div>
            <h1>-name-</h1>
            {
                loading === true
                    ?
                    <div>загрузка!</div>
                    :
                    about.slice(2, 6).map(user => <User info={user}/>)
            }
        </div>
    );
}

export default About;