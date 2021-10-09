import React, {useContext } from 'react';
import './Label.css';
import {MyContext} from '../pages/mycontexts';
import Tooltip from './Tooltip';
import { useTooltip } from '../hooks/ourHooks';

function Label(props) {
    const val = useContext(MyContext);
   
    const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();


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


    const text = props.isActive ? 'Active': 'Non Active';

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
                {text}
            </span>
            <Tooltip ref={refObj} showTooltip={showTooltip} message={`This is ${text}`}/>
        </div>
    );
}

export default Label;
