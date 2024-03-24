import React from 'react';
import rotundaLogo from './uva-rotunda-logo.svg';
import './index.css';
import NavButton from './NavButton';

function Homepage({mode}) {
    let pageMode = `main-page, ${mode}`;

    return (
        <div class={pageMode}>
            <div class='container'>
                <div class='container-left'>
                    <img src={rotundaLogo} alt="UVA Rotunda Logo " className='logo-large' />
                </div>
                <div class='container-right'>
                    <h1>Graduating made easy</h1>
                    <p>Have AI help guide you through the next 4 years of your life. Create a personalized graduation plan without relying on advisors!</p>
                    <NavButton destination="/degree-builder" text="Let's get your degree!"/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;