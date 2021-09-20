import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <span className="header" onClick={() => window.scrollTo(0,0)} >🎞️ Hawk Eye 📽️</span>
    );
};

export default Header;