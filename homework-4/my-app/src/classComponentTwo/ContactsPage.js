import React, {Component} from 'react';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    addProduct = () => {
        console.log(this.state)
        this.setState({input: ""})
    }

    clearProduct = () => {
        console.log(this.state)
        this.setState({input: ""})
    }

    changeInput = (event) => {
        this.setState({input: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.input}
                       onChange={this.changeInput}
                       placeholder="product"
                />
                <button onClick={this.addProduct}>add</button>
                <button onClick={this.clearProduct}>clear</button>
            </div>
        );
    }
}

export default ContactsPage;