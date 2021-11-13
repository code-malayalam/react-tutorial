import React, { Component } from 'react';
import '../App.css'
// import './test';

class DummyPage extends Component {

    componentDidMount() {
        require('./test')
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
    }
    render() {
        return (
            <div>
                <button id="increment">Increment </button> &nbsp;
                <label id="value"> -- </label> &nbsp;
                <button id="decrement"> Decrement</button>
            </div>
        );
    }
}

export default DummyPage;