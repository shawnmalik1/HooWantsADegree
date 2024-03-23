import React from 'react';
import uvaLogo from  './Virginia Cavaliers logo.svg';
import './index.css';

function Header() {
    return (
        <header className='header, light-mode'>
            <img src={uvaLogo} alt="UVA Logo" className='logo-small' />
            <h1>Hoo Wants A Degree?</h1>
        </header>
    );
}

export default Header;