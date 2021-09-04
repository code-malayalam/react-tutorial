import React from 'react';
import Label from './Label';
import './ListItem.css'

function ListItem(props) {
    console.log('RENDER LIST ITEM');
    const { 
        title,
        descr,
        isActive,
        onDelete,
        onLabelClick
    } = props;

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
                <Label isActive={isActive} onAction={onLabelClick}/>
            </div>
        </div>
    );
}

export default ListItem;

