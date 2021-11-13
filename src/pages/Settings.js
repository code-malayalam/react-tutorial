import React from 'react';
import './Usage.css';
import {connect} from 'react-redux';

class Settings extends React.Component{

    render() {
        const {
            value,
            myIncrement,
            myDecrement
        } = this.props;

        return (
            <div className="usage">
                <div className="usage-item">
                    <button onClick={() => {
                        myIncrement()
                    }}>
                        Increment
                    </button>

                    <label> {value} </label>

                    <button onClick={() => {
                        myDecrement()
                    }}>
                        Decrement
                    </button>

                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        value: state.value,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        myIncrement: () => {
            dispatch({
                type: 'increment'
            });
        },
        myDecrement: () => {
            dispatch({
                type: 'decrement'
            });
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);


