import React, { useImperativeHandle } from 'react';

function Tooltip(props, ref) {
    const {
        showTooltip
    } = props;

    useImperativeHandle(ref, () => {
        return {
            myTest: () => {
                console.log('HELLO Im in MyTest');
            }
        }
    });

    useImperativeHandle(ref, () => {
        return {
            myTest2: () => {
                console.log('HELLO Im in MyTest22');
            }
        }
    });

    return (
    <label
    className={`tooltip ${showTooltip ? 'show-tooltip' : 'hide-tooltip'}`}
    >
        This is {props.isActive ? 'Active': 'Non Active'} tooltip
    </label>
    );
}

export default React.forwardRef(Tooltip)