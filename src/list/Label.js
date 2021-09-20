import React, {useContext, useLayoutEffect, useRef, useState} from 'react';
import './Label.css';
import {MyContext} from '../pages/mycontexts';
import Tooltip from './Tooltip';

function Label(props) {
    const val = useContext(MyContext);
    const [showTooltip, setShowTooltip] = useState(false);

    const labelRef = useRef();
    const refObj = useRef();

    useLayoutEffect(() => {
        if(showTooltip) {
            console.log(labelRef.current);
            const width1 = labelRef.current.getBoundingClientRect().width;
            const width2 = refObj.current.getBoundingClientRect().width;

            refObj.current.style.left = `${-(width2 - width1) / 2}px`
        }

    }, [showTooltip]);



    const style = props.isActive ? {background: 'green'} : {background: 'orange'}
    if(val === false) {
        return null;
    }

    const handleMouseEnter = () => {
        setShowTooltip(true);
    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }



    return (
        <div className="list-label-item-container">
            <span
                ref={labelRef}
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
            <Tooltip ref={refObj} showTooltip={showTooltip}/>
        </div>
    );
}

export default Label;
