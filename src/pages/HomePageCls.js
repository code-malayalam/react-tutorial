import React from 'react';
import Tools from '../components/Tools';
import SimpleList from '../list/SimpleList';
import JustInfo from './JustInfo';

import {
    MyContext,
    MyNewContext
} from './mycontexts';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            message: '',
            showLabel: true
        };

    }

    componentDidMount() {
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
        
    }

    handleRefresh = () => {
        console.log('Refresh');
        fetch('/data2.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                this.setState({
                    data: data
                });
            })
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

    handleShowLabel = (evt) => {
        this.setState({
            showLabel: evt.target.checked
        });
    }

    render() {
        const {
            data,
            activeState,
            showLabel
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
            <div>
                <div>
                <input checked={showLabel} onChange={this.handleShowLabel} type="checkbox"></input> Show Label
                </div>
                <MyNewContext.Provider value={100}>
                    <MyContext.Provider value={showLabel}>
                        <Tools onAdd={this.handleAdd} labelValue={activeState} onAction={this.onListChange} count={data.length} onRefresh={this.handleRefresh}>
                            <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
                        </Tools>
                        <JustInfo showLabel={showLabel} />
                    </MyContext.Provider>
                </MyNewContext.Provider>
            </div>
        );
    }
}

export default HomePage;
