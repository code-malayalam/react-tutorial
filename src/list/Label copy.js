import React, {useCallback, useContext, useRef, useState} from 'react';
import './Label.css';
import {MyContext} from '../pages/mycontexts';



function Label(props) {
    const val = useContext(MyContext);

    const [showTooltip, setShowTooltip] = useState(false);

    const refObj = useCallback((a, b)=> {
        console.log(a);
    }, []);

    const style = props.isActive ? {background: 'green'} : {background: 'orange'}
    if(val === false) {
        return null;
    }

    const handleMouseEnter = () => {
        console.log(refObj);
        setShowTooltip(true);
    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }



    return (
        <div className="list-label-item-container">
            <span
                onClick={() => {
                    props.onAction(props.isActive ? 'active': 'non-active');
                }}
                className="list-label-item"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                    {props.isActive ? 'Active': 'Non Active'}
                
            </span>
            {
                <label ref={refObj} className={`tooltip ${showTooltip ? 'show-tooltip' : 'hide-tooltip'}`}>
                    This is {props.isActive ? 'Active': 'Non Active'} tooltip
                </label>
            }
        </div>
    );
}

export default Label;
