import React, { useEffect } from 'react';
import InfoLabel from './InfoLabel';
// import Label from './Label';
import './ListItem.css'

function ListItem(props) {
    const {
        title,
        descr,
        isActive,
        onDelete,
        onLabelClick
    } = props;

   useEffect(() => {
       
   });

    return (
        <div className="list-item">
            <div className="list-title">
                <h4>{title}</h4>
                <label onClick={onDelete}>Delete</label>
            </div>
            <div className="list-descr">
                {descr}
            </div>
            <div className="list-label">
                {/* <Label isActive={isActive} onAction={onLabelClick}/> */}
                <InfoLabel />
            </div>
        </div>
    );
}

export default ListItem;

