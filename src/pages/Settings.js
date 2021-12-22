import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowLabel } from '../redux-toolkit/showLabelReducer';

const Settings = () => {

    const dispatch = useDispatch();

    const handleShowLabel = (evt) => {
        const checkboxValue = evt.target.checked;
        dispatch(setShowLabel(checkboxValue));
    }

    const val = useSelector((state) => state.showLabel);

    return (
        <div>
        <input checked={val} onChange={handleShowLabel} type="checkbox"></input> Show Label
        </div>
    );
};

export default Settings;
