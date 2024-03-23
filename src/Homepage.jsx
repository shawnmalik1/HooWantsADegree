import React from 'react';
import rotundaLogo from './uva-rotunda-logo.svg';
import './index.css';
import NavButton from './NavButton';

function Homepage() {
    return (
        <div class='main-body, light-mode'>
            <img src={rotundaLogo} alt="UVA Rotunda Logo " className='logo-large' />
            <NavButton destination="./DegreeBuilder" text="Let's get your degree!"/>
        </div>
    );
}

export default Homepage;