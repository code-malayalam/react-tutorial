import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';

function Header(props) {

    const dispatch = useDispatch();

    const {
        onMenuSelect
    } = props;
    return (
        <div className="app-header">
            <span className="header-title">Code Malayalam </span>
            <span className="header-menu" onClick={() => {
                onMenuSelect('home');
            }}>Home </span>
            <span className="header-menu" onClick={() => {
                onMenuSelect('usage');
            }}>Usage </span>
            <span className="header-menu" onClick={() => {
                onMenuSelect('settings');
            }}>Settings </span>
            <span className="header-menu" onClick={() => {
                dispatch({
                    type: 'logout'
                });
            }}>Logout </span>
        </div>
    );
}

export default Header;