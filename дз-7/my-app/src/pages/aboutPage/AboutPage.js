import React, {useState} from 'react';
import AboutText from "../../components/aboutText/AboutText";

function AboutPage() {
    const [about, setAbout] = useState(true);

    const langText = () => {
        setAbout(!about)
    }

    return (
        <>
            <button onClick={langText}>кнопка</button>
            {
                about === true
                    ?
                    <AboutText/>
                    :
                    ""
            }
        </>
    )
}

export default AboutPage;