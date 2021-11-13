import React from 'react';
import './Usage.css';

class JustInfo extends React.Component{

    render() {

        return (
            <div className="usage">
                <div className="usage-item">
                    <button onClick={() => {

                    }}>
                        Increment
                    </button>

                    <label> - </label>

                    <button onClick={() => {

                    }}>
                        Decrement
                    </button>

                </div>
            </div>
        );
    }

}

export default JustInfo;


