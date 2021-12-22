import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DummyPage from './pages/DummyPage';
import Settings from './pages/Settings';
import Usage from './pages/Usage';
import { Provider } from 'react-redux'
import store from './redux-toolkit/store';


class MyApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSelected: 'home'
        };
    }

    handleMenuSelect = (value) => {
        this.setState({
            currentSelected: value
        });
    }

    getPage() {
        const {
            currentSelected
        } = this.state;
        
        switch (currentSelected) {
            case 'home':
                return <HomePage />
            case 'usage':
                    return <Usage />
            case 'settings':
                return <Settings />;
            case 'logout':
                return <DummyPage key="logout" name="Logout" />
            default:
                break;
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Header onMenuSelect={this.handleMenuSelect}/>
                    <div className="app-body">
                        {this.getPage()}
                    </div>
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default MyApp;