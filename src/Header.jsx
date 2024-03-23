import React from 'react';
import uvaLogo from  './Virginia Cavaliers logo.svg';
import './index.css';

function Header(mode) {
    let headerMode = `header, ${mode}`;
    
    return (
        <header className={headerMode}>
            <h1><a href='./'><img src={uvaLogo} alt="UVA Logo" className='logo-small'></img></a> Hoo Wants A Degree?</h1>
        </header>
    );
}

export default Header;