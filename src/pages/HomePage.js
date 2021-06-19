import React from 'react';
import Tools from '../components/Tools';
import SimpleList from '../list/SimpleList';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            message: ''
        };

    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('/data.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                this.setState({
                    data: data
                });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.message !== this.state.message) {
            this.setState({
                message: 'Message'
            });
        }
        
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    onListChange = (evt) => {
        const value = evt.target.value;

        this.setState({
            activeState:value
        });

    }

    handleDelete = (item) => {
            console.log('Delete', item);
            const newList = this.state.data.filter((element) => element.id !== item.id);

            this.setState({
                data: newList
            });
    }

    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        });
    }

    handleAdd = (item) => {
        this.setState({
            data: [item, ...this.state.data]
        });
    }

    render() {

        const {
            data,
            activeState
        } = this.state;

        const newList = data.filter((item) => {
            if(activeState === 'all') {
                return true;
            }
            if(activeState === 'active') {
                return item.isActive === true;
            }
            if(activeState === 'non-active'){
                return item.isActive === false;
            }
            return false;
        });

        return (
            <Tools onAdd={this.handleAdd} labelValue={activeState} onAction={this.onListChange} count={data.length}>
                <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
            </Tools>
        );
    }
}

export default HomePage;
