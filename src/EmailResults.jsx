import React, { useState } from 'react';
import './index.css';
import TextBox from './TextBox';

function EmailResults({mode}) {
    let pageMode = `main-page, ${mode}`;

    return (
        <div class={pageMode}>
            <h1>Your Results</h1>
            <p>If you would like to receive a PDF of your results, enter your email below.</p>
            <TextBox />
        </div>
    );
}

export default EmailResults;