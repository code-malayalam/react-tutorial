import React, { Component } from 'react';

class DummyPage extends Component {

    componentDidMount() {
        console.log("componentDidMount", this.props.name);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount", this.props.name);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.props.name);
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default DummyPage;