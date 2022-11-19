import logo from './logo.svg';
import './App.css';
import ClassComponentOne from "./classComponentOne/ClassComponentOne";
import ClassComponentTwo from "./classComponentTwo/ClassComponentTwo";
import FunctionComponent from "./functionComponent/FunctionComponent";

function App() {
    const user = {name: "Anna", age: 19}
    return (
        <div className="App">
            <ClassComponentOne u={user}/>
            <ClassComponentTwo u={user}/>
            <FunctionComponent/>
        </div>
    );
}

export default App;
