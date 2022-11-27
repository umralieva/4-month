import React, {Component} from 'react';
import Work from "../component/work/Work";

class PortfolioPage extends Component {

    constructor() {
        super();
        this.state={works:[]}
    }

    handleWork= () => {
        this.setState({works:["Work 1", "Work 2"]})
    }


    render() {
        return (
            <>
                <button onClick={this.handleWork}>Get</button>
                <Work status={this.state.works}/>

            </>
        );
    }
}

export default PortfolioPage;