import React, {useEffect, useState} from 'react';

function ButtonPage (props) {
    const [button, setButton] = useState(false)

    useEffect(() => {
        console.log("push")
    }, [button])

    function on () {
        setButton(true)
    }

    function off () {
        setButton(false)
    }

    return (
        <div>
            <button onClick={on}>on</button>
            <button onClick={off}>off</button>
        </div>
    );
}

export default ButtonPage;