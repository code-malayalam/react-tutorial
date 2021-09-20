import React from 'react';

function Tooltip(props, ref) {
    const {
        showTooltip
    } = props;


    if(!showTooltip) {
        return null;
    }

    return (
        <label className="tooltip"  ref={ref}>
            This is {props.isActive ? 'Active': 'Non Active'} tooltip
        </label>
    );
}

export default React.forwardRef(Tooltip)