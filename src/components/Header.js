import React from 'react';
import './Header.css';

function Header(props) {
    const {
        onMenuSelect
    } = props;
    return (
        <div className="app-header">
            <span className="header-title">Code Malayalam </span>
            <span onClick={() => {
                onMenuSelect('home');
            }}>Home </span>
            <span onClick={() => {
                onMenuSelect('usage');
            }}>Usage </span>
            <span onClick={() => {
                onMenuSelect('settings');
            }}>Settings </span>
            <span onClick={() => {
                onMenuSelect('logout');
            }}>Logout </span>
        </div>
    );
}

export default Header;