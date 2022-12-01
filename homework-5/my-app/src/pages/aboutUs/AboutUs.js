import React, {useState} from "react";
import AboutText from "../aboutText/AboutText";

function AboutUs () {
    const [text, setText] = useState(true);

    const hideText = () => {
        setText(!text)
    }

    return (
        <>
            <button onClick={hideText}>click me</button>
            {
                text === true
                    ?
                    <AboutText/>
                    :
                    ""
            }
        </>
    )
}

export default AboutUs;