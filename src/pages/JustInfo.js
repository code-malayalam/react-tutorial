import React from "react";

function JustInfo(props) {
    const {
        showLabel,
    } = props;
    console.log('RENDER JUST INFO');
    return (
        <div>
            JUST INFO {showLabel}
        </div>
    );
}

export default React.memo(JustInfo);

