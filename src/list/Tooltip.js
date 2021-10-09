import React from 'react';

function Tooltip(props, ref) {
    const {
        showTooltip,
        message
    } = props;


    if(!showTooltip) {
        return null;
    }

    return (
        <label className="tooltip"  ref={ref}>
            {message}
        </label>
    );
}

export default React.forwardRef(Tooltip)