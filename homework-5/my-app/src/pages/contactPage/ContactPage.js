import React, {useState} from "react";

function ContactPage() {
    const [input, setInput] = useState("");

    const changeInput = (event) => {
        setInput(event.target.value)
    }

    const addInput = () => {
        console.log(input)
        setInput("")
    }
    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={changeInput}
                placeholder="+996"/>
            <button onClick={addInput}>add</button>
            <button onClick={() => setInput("")}>clear</button>
        </div>
    )
}

export default ContactPage;