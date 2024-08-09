import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>CrickLive</h2>
            <div className="toggle">
                <button className="active">Live</button>
                <button>Upcoming</button>
            </div>
        </div>
    );
};

export default Header;
