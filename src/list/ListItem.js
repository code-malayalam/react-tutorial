import React from 'react';
import Label from './Label';
import './ListItem.css'

function ListItem(props) {
    const {
        title,
        descr,
        isActive,
        onAction
    } = props;


    return (
        <div className="list-item">
            <div className="list-title">
                <h4>{title}</h4>
            </div>
            <div className="list-descr">
                {descr}
            </div>
            <div className="list-label">
                <Label onAction={onAction} isActive={isActive}/>
            </div>
        </div>
    );
}

export default ListItem;

