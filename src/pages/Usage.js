import React from 'react';
import './Usage.css';
import {useDispatch, useSelector} from 'react-redux';


function Usage() {

    const value = useSelector((state) => {
        return state.value;
    });

    const dispatch = useDispatch();

    console.log(value);
    return (
        <div className="usage">
            <div className="usage-item">
                <button onClick={() => {
                    dispatch({
                        type: 'increment'
                    });
                }}>
                    Increment
                </button>

                <label>{value}</label>

                <button onClick={() => {
                    dispatch({
                        type: 'decrement'
                    });
                }}>
                    Decrement
                </button>
            </div>

            <button onClick={() => {

            }}>
                Green
            </button>

            <button onClick={() => {

            }}>
                Blue
            </button>
        </div>
    );
}

export default Usage;


