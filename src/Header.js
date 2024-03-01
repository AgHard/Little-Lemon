import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">Restaurant Logo</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Menu</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}
