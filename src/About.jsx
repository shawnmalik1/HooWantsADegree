import React, { useState } from 'react';

function About({mode}) {
    let pageMode = `main-page, ${mode}`; 

    return (
        <div class={pageMode}>
            <h1>About Us</h1>
            <div class='container'>
                <div class='container-left'>
                    <img></img>
                </div>
                <div class='container-right'>
                    <h1>Sean Bamfo</h1>
                </div>
            </div>
            <div class='container'>
                <div class='container-left'>
                    <img></img>
                </div>
                <div class='container-right'>
                    <h1>Eva Cullen</h1>
                </div>
            </div>
            <div class='container'>
                <div class='container-left'>
                    <img></img>
                </div>
                <div class='container-right'>
                    <h1>Smyan Sengupta</h1>
                </div>
            </div>
            <div class='container'>
                <div class='container-left'>
                    <img></img>
                </div>
                <div class='container-right'>
                    <h1>Shawn Malik</h1>
                </div>
            </div>
        </div>
    );
}

export default About;