import React, {useState} from 'react';
import './Usage.css';
function Usage() {

    const [value, setValue] = useState(0);
    const [color, setColor] = useState('white');

    return (
        <div className="usage">
            <div className="usage-item" style={{background: color}}>
                <button onClick={() => {
                    setValue((state) => {
                        return state + 1;
                    })
                }}>Increment</button>
                <label>{value}</label>
                <button onClick={() => {
                    setValue((state) => {
                        return state - 1;
                    })
                }}>Decrement</button>
            </div>
            <button onClick={() => {
                setColor('green');
            }}>Green</button>
            <button onClick={() => {
                setColor('blue');
            }}>Blue</button>
        </div>
    );
}

export default Usage;

