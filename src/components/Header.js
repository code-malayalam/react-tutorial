import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="app-header">
            <span className="header-title">Code Malayalam </span>
            <span>Home </span>
            <span>Usage </span>
            <span>Settings </span>
            <span>Logout </span>
        </div>
    );
}

export default Header;