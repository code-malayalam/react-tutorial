import React from "react";

function JustInfo(props) {
    const {
        showLabel,
    } = props;
    return (
        <div>
            JUST INFO {showLabel}
        </div>
    );
}

export default React.memo(JustInfo);

